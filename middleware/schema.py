import graphene
from graphene.relay import Node
from graphene_mongo import MongoengineConnectionField, MongoengineObjectType

from models import WorkExperience as WorkExperienceModel
from models import Responsibility as ResponsibilityModel

from models import JobDescription as JobDescriptionModel
from models import JobDescriptionSection as JobDescriptionSectionModel
from models import JobDescriptionBullet as JobDescriptionBulletModel

class JobDescription(MongoengineObjectType):
  class Meta:
    model = JobDescriptionModel
    interfaces = (Node,)

class JobDescriptionSection(MongoengineObjectType):
  class Meta:
    model = JobDescriptionSectionModel
    interfaces = (Node,)

class JobDescriptionBullet(MongoengineObjectType):
  class Meta:
    model = JobDescriptionBulletModel
    interfaces = (Node,)

class WorkExperience(MongoengineObjectType):
  class Meta:
    model = WorkExperienceModel
    interfaces = (Node,)

class Responsibility(MongoengineObjectType): 
  class Meta:
    model = ResponsibilityModel
    interfaces = (Node,)

class Query(graphene.ObjectType):
  node = Node.Field()
  all_job_descriptions = MongoengineConnectionField(JobDescription)
  all_work_experience = MongoengineConnectionField(WorkExperience)

schema = graphene.Schema(query=Query, types=[WorkExperience, Responsibility, JobDescription, JobDescriptionSection, JobDescriptionBullet])
