from mongoengine import Document
from mongoengine.fields import (
  DateTimeField,
  EmbeddedDocumentField,
  ListField,
  ReferenceField,
  StringField
)

class JobDescription(Document):
  company_name = StringField(required=True)
  position_name = StringField(required=True)
  location = StringField()
  summary = StringField(required=True)
  sections = ListField(EmbeddedDocumentField(JobDescriptionSection))

class JobDescriptionSection(Document):
  summary = StringField(required=True)
  bullets = ListField(EmbeddedDocumentField(JobDescriptionBullet))

class JobDescriptionBullet(Document):
  content = StringField(required=True)

class WorkExperience(Document):
  company_name = StringField(required=True)
  position_name = StringField(required=True)
  start_date = DateTimeField()
  end_date = StringField()
  summary = StringField(required=True)
  responsibilities = ListField(EmbeddedDocumentField(Responsibility))

class Responsibility(Document):
  content = StringField(required=True)

  def __str__(self):
    return "Responsibility<content:{self.content>".format(self=self)
