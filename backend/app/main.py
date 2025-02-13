from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes.sentiment import router

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins (you can restrict it if needed)
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods (GET, POST, etc.)
    allow_headers=["*"],  # Allow all headers
)

# Include sentiment analysis routes
app.include_router(router)
