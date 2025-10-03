from fastapi import FastAPI
from dotenv import load_dotenv
import os
from langchain.chat_models import init_chat_model
from langchain_core.messages import HumanMessage, SystemMessage
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
load_dotenv()  
gemini_api_key = os.getenv("GEMINI_API_KEY")

if not gemini_api_key:
    raise RuntimeError("GEMINI_API_KEY is missing. Add it to your .env file")

model = init_chat_model(
    "gemini-2.5-flash-lite",
    model_provider="google_genai",
    api_key=gemini_api_key
)

# allow Vite dev server origin
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/generate")
def generate_email(heading: str):

    messages = [
        SystemMessage(content="generate an email template from this email subject and give only one best response."),
        HumanMessage(content=heading),
    ]
    response = model.invoke(messages)
    return {"email":response.content}

