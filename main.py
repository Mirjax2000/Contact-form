"""FastAPI"""

from fastapi import FastAPI, Form
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles

app: FastAPI = FastAPI()
# Mount pro statické soubory: obrázky v adresáři "assets"
app.mount("/", StaticFiles(directory=".", html=True), name="root")


@app.get("/")
async def root():
    return FileResponse("./index.html")


@app.post("/submit-form")
async def submit_form(
    first_name: str = Form(...),
    last_name: str = Form(...),
    email_address: str = Form(...),
    general: str = Form(None),
    support: str = Form(None),
    message: str = Form(...),
    consent: str = Form(...),
) -> dict:
    form_content: dict = {
        "first_name": first_name,
        "last_name": last_name,
        "email_address": email_address,
        "general": general,
        "support": support,
        "message": message,
        "consent": consent,
    }
    for item in form_content:
        print(form_content[item])
    return form_content
