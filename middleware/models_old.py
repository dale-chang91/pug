

class BaseQuerySet(QuerySet):
  """
  Base queryset with extras
  """

  def get_or_404(self, *args, **kwargs):
    try:
      return self.get(*args, **kwargs)
    except (MultipleObjectsReturned, DoesNotExist, ValidationError):
      abort(404)

  def first_or_404(self):
    obj = self.first()
    if obj is None:
      abort(404)
    return obj

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
