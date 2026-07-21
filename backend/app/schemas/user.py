import uuid

from pydantic import EmailStr, Field

from app.schemas.base import CamelModel


class UserCreate(CamelModel):
    email: EmailStr
    password: str = Field(min_length=6)
    display_name: str | None = Field(default=None, max_length=100)


class UserLogin(CamelModel):
    email: EmailStr
    password: str


class UserOut(CamelModel):
    id: uuid.UUID
    email: str
    display_name: str | None


class TokenOut(CamelModel):
    access_token: str
    token_type: str = "bearer"
    user: UserOut
