# MVP components to build
# Load from /CurriculumBuilder/khan_academy_json/
import json
import pathlib

path = pathlib.Path(__file__).parent.parent.resolve() / "CurriculumBuilder" / "question1.json"

def load_questions():
    file = open(path, "r", encoding="utf-8" )
    data = json.load(file)
    return data