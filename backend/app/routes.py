from fastapi import APIRouter
import json
import pathlib
from pydantic import BaseModel, Field
from typing import List
from .khan_questions_loader import load_questions
from .exam_routes import router as exam_router

router = APIRouter()

class Question(BaseModel):
    question: dict = Field(description="The question data")
    answerArea: dict
    hints: List

@router.get("/questions")
def get_questions(sample_size: int = 5):
    data = load_questions(sample_size=sample_size)
    # return [q for q in data]
    return data

# Include exam routes
router.include_router(exam_router, prefix="/exam", tags=["exams"])