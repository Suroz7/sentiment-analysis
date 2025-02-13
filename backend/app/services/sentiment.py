from transformers import pipeline

# Load sentiment analysis pipeline from Hugging Face
sentiment_pipeline = pipeline("sentiment-analysis")

def analyze_sentiment(text: str) -> dict:
    result = sentiment_pipeline(text)[0]  # Get the first result
    return {"label": result["label"], "score": result["score"]}
