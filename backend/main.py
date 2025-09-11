from fastapi import FastAPI 
from .app import routes as app_routes
import uvicorn 

app = FastAPI()
 
app.include_router(app_routes.router, prefix="/api", tags=["api"])