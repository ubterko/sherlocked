from fastapi import APIRouter 
import json
import pathlib
from pydantic import BaseModel 
from typing import List

router = APIRouter()

path = pathlib.Path(__file__).parent.resolve() / "CurriculumBuilder" / "question1.json"
print(path)

class Question(BaseModel):
    question: dict 
    answerArea: dict
    hints: List[any]

@router.get("/questions")
def get_questions():
    file = open(path, "r", encoding="utf-8" )
    data = json.load(file)
    return [Question(**item) for item in data.questions]