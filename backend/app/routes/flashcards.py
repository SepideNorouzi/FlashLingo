import uuid

from fastapi import APIRouter, Depends, Query, status
from sqlalchemy.ext.asyncio import AsyncSession

from app.dependencies import get_current_user, get_db
from app.models import User
from app.schemas import FlashcardCreate, FlashcardOut, FlashcardUpdate
from app.services import flashcards as flashcard_service

router = APIRouter(tags=["flashcards"])


@router.get(
    "/projects/{project_id}/flashcards",
    response_model=list[FlashcardOut],
)
async def list_flashcards(
    project_id: uuid.UUID,
    mistake_only: bool = Query(default=False),
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    return await flashcard_service.list_flashcards(
        db, current_user, project_id, mistake_only=mistake_only
    )


@router.post(
    "/projects/{project_id}/flashcards",
    response_model=FlashcardOut,
    status_code=status.HTTP_201_CREATED,
)
async def create_flashcard(
    project_id: uuid.UUID,
    payload: FlashcardCreate,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    return await flashcard_service.create_flashcard(
        db, current_user, project_id, payload
    )


@router.get("/flashcards/{flashcard_id}", response_model=FlashcardOut)
async def get_flashcard(
    flashcard_id: uuid.UUID,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    return await flashcard_service.get_owned_flashcard(
        db, current_user, flashcard_id
    )


@router.patch("/flashcards/{flashcard_id}", response_model=FlashcardOut)
async def update_flashcard(
    flashcard_id: uuid.UUID,
    payload: FlashcardUpdate,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    return await flashcard_service.update_flashcard(
        db, current_user, flashcard_id, payload
    )


@router.delete(
    "/flashcards/{flashcard_id}",
    status_code=status.HTTP_204_NO_CONTENT,
)
async def delete_flashcard(
    flashcard_id: uuid.UUID,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    await flashcard_service.delete_flashcard(db, current_user, flashcard_id)
