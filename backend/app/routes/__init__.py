from fastapi import APIRouter

from app.routes import auth, flashcards, projects

api_router = APIRouter()
api_router.include_router(auth.router)
api_router.include_router(projects.router)
api_router.include_router(flashcards.router)

__all__ = ["api_router"]
