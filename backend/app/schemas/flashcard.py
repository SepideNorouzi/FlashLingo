import uuid
from datetime import datetime

from pydantic import Field

from app.schemas.base import CamelModel


class FlashcardCreate(CamelModel):
    word: str = Field(min_length=1)
    pronunciation: str = ""
    meaning: str = Field(min_length=1)
    learned: bool = False
    mistake: bool = False


class FlashcardUpdate(CamelModel):
    word: str | None = Field(default=None, min_length=1)
    pronunciation: str | None = None
    meaning: str | None = Field(default=None, min_length=1)
    learned: bool | None = None
    mistake: bool | None = None


class FlashcardOut(CamelModel):
    id: uuid.UUID
    project_id: uuid.UUID
    word: str
    pronunciation: str
    meaning: str
    learned: bool
    mistake: bool
    created_at: datetime
