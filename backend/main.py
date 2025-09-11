from fastapi import FastAPI 
from . import app as sherlockED_app
import uvicorn 

app = FastAPI()

app.include_route(sherlockED_app.routes, prefix="/api")

if __name__ == "__main__":
    uvicorn.run(
        app, 
        host="0.0.0.0", 
        port=8000
    )