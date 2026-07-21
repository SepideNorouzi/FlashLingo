import uuid
from datetime import datetime

from pydantic import Field

from app.schemas.base import CamelModel


class ProjectCreate(CamelModel):
    name: str = Field(min_length=1, max_length=255)


class ProjectUpdate(CamelModel):
    name: str = Field(min_length=1, max_length=255)


class ProjectOut(CamelModel):
    id: uuid.UUID
    name: str
    user_id: uuid.UUID
    created_at: datetime
