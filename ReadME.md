## AI Email generator

**Application that generator email template from the subject of the email.**

Tech stack used:
1. Frontend - React
2. Backend - FastAPI
3. LLM API - google gemini
4. Langchain

---

### How to Setup:

### Frontend:

Create env file and add this variable.

> VITE_BACKEND_URL='YOUR_BACKEND_URL'

---

Now Install dependencies

> NPM install

---

Start application

> NPM run dev

### Backend:

Create env file and add this variable

>GEMINI_API_KEY='YOUR_API_KEY'

---
create virtual environment

>python -m venv venv 

Activate virtual environment

on windows
>.\myenv\Scripts\activate

on macOS
>source myenv/bin/activate

*Install dependencies*

> pip install -r requirements.txt

---

Run server
>uvicorn main:app --reload


## SCREENSHOTS

![Alt text](./Assets/Screenshot%202025-10-03%20at%206.17.28 PM.png "Optional title")

![Alt text](./Assets/Screenshot%202025-10-03%20at%206.19.00 PM.png "Optional title")