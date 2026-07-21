import uuid
from datetime import datetime

from pydantic import BaseModel, ConfigDict, EmailStr, Field
from pydantic.alias_generators import to_camel


class CamelModel(BaseModel):
    """Base for all schemas: camelCase JSON <-> snake_case Python."""

    model_config = ConfigDict(
        alias_generator=to_camel,
        populate_by_name=True,
        from_attributes=True,
    )


# ---------- Auth ----------

class UserCreate(BaseModel):
    email: str
    password: str
    display_name: str = Field(alias="displayName")

    model_config = {"populate_by_name": True}

class UserLogin(CamelModel):
    email: EmailStr
    password: str


class UserOut(CamelModel):
    id: uuid.UUID
    email: EmailStr
    created_at: datetime


class Token(CamelModel):
    access_token: str
    token_type: str = "bearer"

class TokenOut(CamelModel):
    access_token: str
    token_type: str = "bearer"
    user: UserOut


# ---------- Projects ----------

class ProjectCreate(CamelModel):
    name: str = Field(min_length=1, max_length=255)


class ProjectUpdate(CamelModel):
    name: str = Field(min_length=1, max_length=255)


class ProjectOut(CamelModel):
    id: uuid.UUID
    name: str
    user_id: uuid.UUID
    created_at: datetime


# ---------- Flashcards ----------

class FlashcardCreate(CamelModel):
    front_text: str = Field(min_length=1)
    back_text: str = Field(min_length=1)


class FlashcardUpdate(CamelModel):
    front_text: str | None = Field(default=None, min_length=1)
    back_text: str | None = Field(default=None, min_length=1)


class FlashcardOut(CamelModel):
    id: uuid.UUID
    project_id: uuid.UUID
    front_text: str
    back_text: str
    created_at: datetime
