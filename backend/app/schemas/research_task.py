from pydantic import BaseModel

class ResearchTaskSchema(BaseModel):
    id: int
    title: str
    status: str
    data: str
    created_by: int
