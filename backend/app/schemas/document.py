from pydantic import BaseModel

class DocumentSchema(BaseModel):
    id: int
    filename: str
    owner_id: int
    embedding: str
