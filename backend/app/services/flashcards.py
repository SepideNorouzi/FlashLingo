import uuid

from fastapi import HTTPException, status
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models import Flashcard, User
from app.schemas import FlashcardCreate, FlashcardUpdate
from app.services.projects import get_owned_project


async def list_flashcards(
    db: AsyncSession,
    user: User,
    project_id: uuid.UUID,
    *,
    mistake_only: bool = False,
) -> list[Flashcard]:
    await get_owned_project(db, user, project_id)

    query = (
        select(Flashcard)
        .where(Flashcard.project_id == project_id)
        .order_by(Flashcard.created_at.desc())
    )
    if mistake_only:
        query = query.where(Flashcard.mistake.is_(True))

    result = await db.execute(query)
    return list(result.scalars().all())


async def create_flashcard(
    db: AsyncSession,
    user: User,
    project_id: uuid.UUID,
    payload: FlashcardCreate,
) -> Flashcard:
    await get_owned_project(db, user, project_id)

    card = Flashcard(
        project_id=project_id,
        word=payload.word,
        pronunciation=payload.pronunciation,
        meaning=payload.meaning,
        learned=payload.learned,
        mistake=payload.mistake,
    )
    db.add(card)
    await db.commit()
    await db.refresh(card)
    return card


async def get_owned_flashcard(
    db: AsyncSession, user: User, flashcard_id: uuid.UUID
) -> Flashcard:
    card = await db.get(Flashcard, flashcard_id)
    if card is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Flashcard not found",
        )
    # Ensures the parent project belongs to the current user
    await get_owned_project(db, user, card.project_id)
    return card


async def update_flashcard(
    db: AsyncSession,
    user: User,
    flashcard_id: uuid.UUID,
    payload: FlashcardUpdate,
) -> Flashcard:
    card = await get_owned_flashcard(db, user, flashcard_id)
    data = payload.model_dump(exclude_unset=True)
    for field, value in data.items():
        setattr(card, field, value)
    await db.commit()
    await db.refresh(card)
    return card


async def delete_flashcard(
    db: AsyncSession, user: User, flashcard_id: uuid.UUID
) -> None:
    card = await get_owned_flashcard(db, user, flashcard_id)
    await db.delete(card)
    await db.commit()
