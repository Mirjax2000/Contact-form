"""FastAPI"""

from typing import Optional
from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel

app: FastAPI = FastAPI()
app.mount("/js", StaticFiles(directory="./js"), name="js")
app.mount("/css", StaticFiles(directory="./css"), name="css")
app.mount("/assets", StaticFiles(directory="./assets"), name="assets")


class FormData(BaseModel):
    """Form data model"""

    first_name: str
    last_name: str
    email_address: str
    general: str | None = None
    support: str | None = None
    message: str
    consent: str


@app.get("/")
async def root():
    """Root endpoint"""
    return FileResponse("./index.html")


@app.post("/submit-form")
async def submit_form(data: FormData) -> dict:
    """Submit form endpoint"""
    form_content = {
        "first_name": data.first_name,
        "last_name": data.last_name,
        "email_address": data.email_address,
        "general": data.general,
        "support": data.support,
        "message": data.message,
        "consent": data.consent,
    }
    for key, value in form_content.items():
        print(key, value)
    return form_content
