from fastapi import APIRouter 
import json
import pathlib
from pydantic import BaseModel 
from typing import List
from .khan_questions_loader import load_questions 

router = APIRouter()
class Question(BaseModel):
    question: dict 
    answerArea: dict
    hints: List

@router.get("/questions")
def get_questions():
    data = load_questions()
    return [Question(**item) for item in data["questions"]]