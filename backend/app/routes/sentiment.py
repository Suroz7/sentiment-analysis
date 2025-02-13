from fastapi import APIRouter
from app.services.sentiment import analyze_sentiment

router = APIRouter()

@router.post("/analyze")
async def analyze(text: str):
    sentiment = analyze_sentiment(text)
    return sentiment
