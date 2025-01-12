"""FastAPI"""

from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel


class FormData(BaseModel):
    first_name: str
    last_name: str
    email_address: str
    general: str | None = None
    support: str | None = None
    message: str
    consent: str


app: FastAPI = FastAPI()
app.mount("/", StaticFiles(directory=".", html=True), name="root")


@app.get("/")
async def root():
    return FileResponse("./index.html")


@app.post("/submit-form")
async def submit_form(data: FormData) -> dict:
    print(data)
    form_content: dict = {
        "first_name": data.first_name,
        "last_name": data.last_name,
        "email_address": data.email_address,
        "general": data.general,
        "support": data.support,
        "message": data.message,
        "consent": data.consent,
    }
    for item in form_content:
        print(form_content[item])
    return form_content
