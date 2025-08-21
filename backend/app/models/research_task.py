from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class ResearchTask(Base):
    __tablename__ = "research_tasks"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String)
    status = Column(String)
    data = Column(String)
    created_by = Column(Integer, ForeignKey("users.id"))
