from multiprocessing import allow_connection_pickling
from fastapi import FastAPI 
from .app import routes as app_routes
from fastapi.middleware.cors import CORSMiddleware
import uvicorn 

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],        # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],        # Allows all methods (GET, POST, PUT, DELETE, etc.)
    allow_headers=["*"],        # Allows all headers
)
 
app.include_router(app_routes.router, prefix="/api", tags=["api"])