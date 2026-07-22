import uuid

from fastapi import HTTPException, status
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.auth import create_access_token, hash_password, verify_password
from app.models import User
from app.schemas import TokenOut, UserCreate, UserLogin, UserOut


async def signup(db: AsyncSession, payload: UserCreate) -> TokenOut:
    existing = await db.scalar(select(User).where(User.email == payload.email))
    if existing:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="Email already registered",
        )

    user = User(
        email=payload.email,
        hashed_password=hash_password(payload.password),
        display_name=payload.display_name,
    )
    db.add(user)
    await db.commit()
    await db.refresh(user)

    return TokenOut(
        access_token=create_access_token(str(user.id)),
        user=UserOut.model_validate(user),
    )


async def login(db: AsyncSession, payload: UserLogin) -> TokenOut:
    user = await db.scalar(select(User).where(User.email == payload.email))
    if user is None or not verify_password(payload.password, user.hashed_password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password",
        )

    return TokenOut(
        access_token=create_access_token(str(user.id)),
        user=UserOut.model_validate(user),
    )


async def get_user_by_id(db: AsyncSession, user_id: uuid.UUID) -> User | None:
    return await db.get(User, user_id)
