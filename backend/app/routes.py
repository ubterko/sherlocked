from fastapi import APIRouter 
import json
import pathlib
from pydantic import BaseModel, Field
from typing import List
from .khan_questions_loader import load_questions 

router = APIRouter()

class Question(BaseModel):
    question: dict = Field(description="The question data")
    answerArea: dict 
    hints: List

@router.get("/questions")
def get_questions():
    data = load_questions()
    # return [q for q in data]
    return data