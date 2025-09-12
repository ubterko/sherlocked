from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .app import routes as app_routes
import uvicorn 

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],)



 
app.include_router(app_routes.router, prefix="/api", tags=["api"])