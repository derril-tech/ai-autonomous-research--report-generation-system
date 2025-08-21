from fastapi import APIRouter

router = APIRouter()

@router.post("/data/upload")
def upload_data():
    return {"status": "success"}
