# coding: utf-8

from mongoengine import connect

from models import JobDescription, JobDecriptionSection, JobDescriptionBullet, WorkExperience, Responsibility

connect('pug-mongo', host='mongo://localhost', alias='default')

def init_db():
  # first job description
  cigna_characteristics = JobDescriptionSection(summary='Key Characteristics')
  cigna_characteristic_bullet_1 = JobDescriptionBullet(content='Write referenceable & modular code')
  cigna_characteristic_bullet_2 = JobDescriptionBullet(content='Design and architect the solution independently')
  cigna_characteristic_bullet_3 = JobDescriptionBullet(content='Be fluent in particular areas and have proficiency in many areas')
  cigna_characteristic_bullet_4 = JobDescriptionBullet(content='Have a passion to learn')
  cigna_characteristic_bullet_5 = JobDescriptionBullet(content='Take ownership and accountability')
  cigna_characteristic_bullet_6 = JobDescriptionBullet(content='Understand when to automate and when not to')
  cigna_characteristic_bullet_7 = JobDescriptionBullet(content='Have a desire to simplify')
  cigna_characteristic_bullet_8 = JobDescriptionBullet(content='Have a quality mindset, not just code quality but also to ensure ongoing data quality by monitoring data to identify problems before they have business impact')
  cigna_characteristic_bullet_9 = JobDescriptionBullet(content='Take risks and champion new ideas')
  cigna_characteristic_bullet_10 = JobDescriptionBullet(content='Minimize "meetings" to get requirements and have direct business interactions')

  cigna_characteristic_list = [
    cigna_characteristic_bullet_1,
    cigna_characteristic_bullet_2,
    cigna_characteristic_bullet_3,
    cigna_characteristic_bullet_4,
    cigna_characteristic_bullet_5,
    cigna_characteristic_bullet_6,
    cigna_characteristic_bullet_7,
    cigna_characteristic_bullet_8,
    cigna_characteristic_bullet_9,
    cigna_characteristic_bullet_10
  ]

  cigna_characteristics = JobDescriptionSection(summary='Key Characteristics', bullets=cigna_characteristic_list)

  cigna_qualification_bullet_1 = JobDescriptionBullet(content='2+ years as a member of Agile teams - Scrum or Kanban')
  cigna_qualification_bullet_2 = JobDescriptionBullet(content='3+ years of working in an object-oriented language: C, C++, Java, Scala, or other OO compiled language')
  cigna_qualification_bullet_3 = JobDescriptionBullet(content='3+ years in Web development frameworks like Angular or other Node.js based systems')
  cigna_qualification_bullet_4 = JobDescriptionBullet(content='3+ years of scriping (JavaScript, Python, R, Ruby, Perl, etc.')
  cigna_qualification_bullet_5 = JobDescriptionBullet(content='3+ years of databbase - SQL')
  cigna_qualification_bullet_6 = JobDescriptionBullet(content='Experience with Git/SVN')
  cigna_qualification_bullet_7 = JobDescriptionBullet(content='Experience with big data technologies a plus, such as Hadoop, Hive, Spark')
  cigna_qualification_bullet_8 = JobDescriptionBullet(content='Experience with Docker containers and deployment')
  cigna_qualification_bullet_9 = JobDescriptionBullet(content='Excellent troubleshooting skills')
  cigna_qualification_bullet_10 = JobDescriptionBullet(content='Strong communication skills')
  cigna_qualification_bullet_11 = JobDescriptionBullet(content='Fluent in BDD and TDD development methodologies')
  cigna_qualification_bullet_12 = JobDescriptionBullet(content='Work in an agile CI/CD environment (Jenkins) experience a plus')
  cigna_qualification_bullet_13 = JobDescriptionBullet(content='Knowledge and/or experience with health care information domains is a plus')

  cigna_qualification_list = [
    cigna_qualification_bullet_1,
    cigna_qualification_bullet_2,
    cigna_qualification_bullet_3,
    cigna_qualification_bullet_4,
    cigna_qualification_bullet_5,
    cigna_qualification_bullet_6,
    cigna_qualification_bullet_7,
    cigna_qualification_bullet_8,
    cigna_qualification_bullet_9,
    cigna_qualification_bullet_10,
    cigna_qualification_bullet_11,
    cigna_qualification_bullet_12,
    cigna_qualification_bullet_13
  ]

  cigna_qualification_section = JobDescriptionSection(summary='Qualifications', bullets=cigna_qualification_list)

  cigna = JobDescription(company_name='Cigna', position_name='Full Stack Software Engineer', location='Greenwood Village, CO', summary="It's fun to work in a company where people truly BELIEVE in what they are doing!\n\nWe're committed to bringing passion and customer focus to the business.\n\nCigna, a leading Health Services company, is looking or exceptional data enginers/developers in our Data & Analytics organization. The Full-stack Engineer is responsible for the delivery of a business need end-to-end starting from understanding the requirements to deploying the software into production. This role requires you to be fluent in some of the critical technologies with proficiency in others and have a hunger to learn on the job and add value to the business. Critical attributes of being a full-stack engineer among others is Ownership & Accountability. In addition to Delivery, the full-stack engineer should have an automation first and continuous improvement mindset. He/She should drive the adoption of CI/CD tools and support the improvement of the tools sets/processes.\n\nFull stack engineers are able to articulate clear business objectives aligned to technical specifications and work in an iterative, agile pattern daily. They have ownership over their work tasks, and embrace interacting with all levels of the team and raise challenges when necessary. We aim to be cutting-edge engineers – not institutionalized developers.\n\nIn this role, you will have the unique opportunity to interface with Cigna's Regulatory and Legal compliance teams, translating business requirements into executable format, automating and generating the required reports in a timely and quality fashion.\n\nThis is a highly collaborative team in an Agile environment. This role requires you to be fluent in some of the critical technologies with proficiency in others and have a hunger to learn on the job and add value to the business, our Customers and our Clients. The position can be located in one of these U.S. based Cigna office locations: Denver, CO, Bloomfield, CT or New York City.", sections=[cigna_characteristics_list, cigna_qualifications_list])
