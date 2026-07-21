import uuid

from fastapi import HTTPException, status
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models import Project, User
from app.schemas import ProjectCreate, ProjectUpdate


async def list_projects(db: AsyncSession, user: User) -> list[Project]:
    result = await db.execute(
        select(Project)
        .where(Project.user_id == user.id)
        .order_by(Project.created_at.desc())
    )
    return list(result.scalars().all())


async def create_project(
    db: AsyncSession, user: User, payload: ProjectCreate
) -> Project:
    project = Project(name=payload.name, user_id=user.id)
    db.add(project)
    await db.commit()
    await db.refresh(project)
    return project


async def get_owned_project(
    db: AsyncSession, user: User, project_id: uuid.UUID
) -> Project:
    project = await db.get(Project, project_id)
    if project is None or project.user_id != user.id:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Project not found",
        )
    return project


async def update_project(
    db: AsyncSession,
    user: User,
    project_id: uuid.UUID,
    payload: ProjectUpdate,
) -> Project:
    project = await get_owned_project(db, user, project_id)
    project.name = payload.name
    await db.commit()
    await db.refresh(project)
    return project


async def delete_project(
    db: AsyncSession, user: User, project_id: uuid.UUID
) -> None:
    project = await get_owned_project(db, user, project_id)
    await db.delete(project)
    await db.commit()
