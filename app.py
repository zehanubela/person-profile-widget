from flask import render_template, make_response, jsonify
from flask import Flask
# from flask_cors import CORS, cross_origin
import requests
from flask import request

app = Flask(__name__, static_folder='media')
app.config['BASE_URL'] = '/'

@app.route("/")
def index():
    current_user = None
    response = make_response(render_template(
        'linkedin_xray_tool.html.jinja',
        current_user=current_user))
    return response
    # return render_template('index.html')

@app.route('/linkedin-xray-tool', methods=['GET','POST'])
def linkedin_xray_tool_post():
    # res = {
    #     "profiles":[
    # {
    #     "country": "Indonesia",
    #     "full_name": "Raizal Islami Nursyah Pregnanta",
    #     "linkedin_profile_url": "https://linkedin.com/in/raizal-pregnanta",
    #     "occupation": "Senior Software Engineer at Proxycurl",
    #     "profile_pic_url": "http://localhost:4566/proxycurl-web-dev/person/raizal-pregnanta/profile?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=%2F20241206%2F%2Fs3%2Faws4_request&X-Amz-Date=20241206T030201Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=a816832bf4bceff64900fba296cd1429ce9c3d31363fafc5de0176c522fde3f7"
    # },
    # {
    #     "country": "Indonesia",
    #     "full_name": "Zeha Irawan",
    #     "linkedin_profile_url": "https://linkedin.com/in/zehairawan",
    #     "occupation": "Software Engineer at Proxycurl",
    #     "profile_pic_url": "http://localhost:4566/proxycurl-web-dev/person/zehairawan/profile?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=%2F20241206%2F%2Fs3%2Faws4_request&X-Amz-Date=20241206T030201Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=06477267234a16fe74e3a93d631312d1f8159875e59138d73db689e0281d217a"
    #         }
    #     ]
    # }
    res = {
        "profiles":[
    {
            "linkedin_profile_url": "https://www.linkedin.com/in/patrickjhannah",
            "public_identifier": "patrickjhannah",
            "profile_pic_url": None,
            "background_cover_image_url": None,
            "first_name": "Patrick",
            "last_name": "Hannah",
            "full_name": "Patrick Hannah",
                "follower_count": 5511,
                "occupation": "CTO at CloudHesive",
                "headline": "CTO, CloudHesive",
                "summary": "Patrick Hannah is the CTO and co-founder of CloudHesive, a cloud consulting and managed services provider. At CloudHesive, Mr. Hannah leads CloudHesive’s Technology Operations, Product Management and Product Development Teams. Prior to co-founding CloudHesive, Mr. Hannah held technology management positions in organizations not only well known in South Florida but also nationally and internationally. In his most recent position, Mr. Hannah was the senior manager of the cloud engineering team at Pegasystems – an enterprise software company located in Cambridge, Massachusetts. Mr. Hannah, while at Pega helped grow their cloud platform into a solution capable of supporting the most stringent requirements from enterprise customers in regulated industries. Prior to Pegasystems, Mr. Hannah spent 8 years at Arise Virtual Solutions – a work-at-home BPO in Miramar, Florida. During his tenure at Arise, Mr. Hannah designed, implemented and managed the companies contact center platform which allowed Arise to not only expand out of the South Florida market to a national presence but expand internationally as well.",
                "country": "US",
                "country_full_name": "United States of America",
                "city": "Atlanta Metropolitan Area",
                "state": None,
                "experiences": [
                    {
                        "starts_at": {
                            "day": 1,
                            "month": 9,
                            "year": 2014
                        },
                        "ends_at": None,
                        "company": "CloudHesive",
                        "company_linkedin_profile_url": "https://www.linkedin.com/company/cloudhesive",
                        "company_facebook_profile_url": None,
                        "title": "CTO",
                        "description": "CloudHesive is a new breed of cloud services provider aimed at providing cost effective, highly scalable, secure cloud solutions that make good business sense. At CloudHesive I'm the CTO where I'm responsible for the evangelization of technology to our customers and the teams responsible for our SaaS products and Technology Operations.",
                        "location": "Miami/Fort Lauderdale Area",
                        "logo_url": "https://media.licdn.com/dms/image/v2/D4D0BAQE5yfCDKwzsrg/company-logo_400_400/company-logo_400_400/0/1719256701645/cloudhesive_logo?e=1741824000&v=beta&t=tHl8V0ezDV4ZQudm8drwh0msks9lfP3U2oQEit8rrCE"
                    },
                    {
                        "starts_at": {
                            "day": 1,
                            "month": 2,
                            "year": 2011
                        },
                        "ends_at": {
                            "day": 30,
                            "month": 9,
                            "year": 2014
                        },
                        "company": "Pegasystems",
                        "company_linkedin_profile_url": "https://www.linkedin.com/company/pegasystems",
                        "company_facebook_profile_url": None,
                        "title": "Senior Manager, Cloud Production Engineering",
                        "description": "At PegaSystems I was the Senior Manager of Cloud Production Engineering, the team responsible for the onboarding/provisioning of new customers and platform architecture.",
                        "location": "Greater Boston Area",
                        "logo_url": "https://media.licdn.com/dms/image/v2/D4E0BAQFTBipWjNDrbw/company-logo_400_400/company-logo_400_400/0/1712082741150/pegasystems_logo?e=1741824000&v=beta&t=geAAGMECz82W_Mk3cal2gcOKUt1NVH4lHFdTpFjVclQ"
                    },
                    {
                        "starts_at": {
                            "day": 1,
                            "month": 7,
                            "year": 2010
                        },
                        "ends_at": {
                            "day": 28,
                            "month": 2,
                            "year": 2011
                        },
                        "company": "Promero, Inc.",
                        "company_linkedin_profile_url": "https://www.linkedin.com/company/promero-inc.",
                        "company_facebook_profile_url": None,
                        "title": "Vice President of Product Engineering",
                        "description": "At Promero I was responsible for managing the On-Premise and PaaS/SaaS product portfolio which consisted of Oracle’s CRM and Contact On Demand offerings and Oracle’s CCA Product, among others. This included the ongoing maturing of the products through roadmaps, forecasting and planning. I had full involvement in customer lifecycle from Pre-Sales to Post-Implementation which involved overseeing implementation services, project planning and documentation of custom development efforts as well as proactive solicitation of customer feedback for ongoing service improvement.",
                        "location": "Miami/Fort Lauderdale Area",
                        "logo_url": "https://media.licdn.com/dms/image/v2/C4E0BAQEnawab2vXusA/company-logo_400_400/company-logo_400_400/0/1673978307026/promero_inc_logo?e=1741824000&v=beta&t=H8nf3pqF0uDEKbZFZKquT-km5Iax9sw5T-Z0des0cMQ"
                    },
                    {
                        "starts_at": {
                            "day": 1,
                            "month": 11,
                            "year": 2002
                        },
                        "ends_at": {
                            "day": 30,
                            "month": 6,
                            "year": 2010
                        },
                        "company": "Arise Virtual Solutions Inc.",
                        "company_linkedin_profile_url": "https://www.linkedin.com/company/arise",
                        "company_facebook_profile_url": None,
                        "title": "Senior Systems Engineer",
                        "description": "At Arise I was responsible for the Contact Center Platform used to deliver Phone Calls, E-Mails and Chat Sessions to Thousands of Work-At-home agents in the United States and United Kingdom.",
                        "location": "Miami/Fort Lauderdale Area",
                        "logo_url": "https://media.licdn.com/dms/image/v2/D4E0BAQHD5Iq9P8FhmQ/company-logo_400_400/company-logo_400_400/0/1719502263535/arise_logo?e=1741824000&v=beta&t=3iYQmhEPzaBz0bNwMRrcLd-CowC3OdH94jC7yTdu04E"
                    },
                    {
                        "starts_at": {
                            "day": 1,
                            "month": 1,
                            "year": 2001
                        },
                        "ends_at": {
                            "day": 31,
                            "month": 12,
                            "year": 2002
                        },
                        "company": "eViewMedia",
                        "company_linkedin_profile_url": None,
                        "company_facebook_profile_url": None,
                        "title": "Product Development",
                        "description": "At eViewMedia I was responsible for the satellite based, turnkey solutions used in the Private Cable and Outdoor Advertising Industries.",
                        "location": "Miami/Fort Lauderdale Area",
                        "logo_url": None
                    },
                    {
                        "starts_at": {
                            "day": 1,
                            "month": 1,
                            "year": 2000
                        },
                        "ends_at": {
                            "day": 31,
                            "month": 12,
                            "year": 2001
                        },
                        "company": "ExamSoft Worldwide, Inc.",
                        "company_linkedin_profile_url": None,
                        "company_facebook_profile_url": None,
                        "title": "Software Quality Assurance",
                        "description": "At ExamSoft I was responsible for Quality Control of their PC based, secure test-taking solution.",
                        "location": "Miami/Fort Lauderdale Area",
                        "logo_url": None
                    }
                ],
                "education": [
                    {
                        "starts_at": None,
                        "ends_at": None,
                        "field_of_study": None,
                        "degree_name": None,
                        "school": ":)",
                        "school_linkedin_profile_url": None,
                        "school_facebook_profile_url": None,
                        "description": None,
                        "logo_url": None,
                        "grade": None,
                        "activities_and_societies": None
                    }
                ],
                "languages": [
                    "English"
                ],
                "languages_and_proficiencies": [
                    {
                        "name": "English",
                        "proficiency": "NATIVE_OR_BILINGUAL"
                    }
                ],
                "accomplishment_organisations": [
                    {
                        "starts_at": {
                            "day": 1,
                            "month": 11,
                            "year": 2021
                        },
                        "ends_at": None,
                        "org_name": "FinOps Foundation",
                        "title": "Member",
                        "description": None
                    },
                    {
                        "starts_at": {
                            "day": 1,
                            "month": 5,
                            "year": 2021
                        },
                        "ends_at": None,
                        "org_name": "AWS Community Builder",
                        "title": "Security and Identity",
                        "description": "https://aws.amazon.com/developer/community/community-builders/community-builders-directory/?cb-cards.sort-by=item.additionalFields.cbName&cb-cards.sort-order=asc&awsf.builder-category=*all&awsf.location=*all&awsf.year=*all"
                    }
                ],
                "accomplishment_publications": [
                    {
                        "name": "Rethink Your Contact Center with CloudHesive",
                        "publisher": "Carahsoft",
                        "published_on": {
                            "day": 6,
                            "month": 6,
                            "year": 2024
                        },
                        "description": "Presented on AWS in the Contact Center with a co presenter from AWS sponsored by an AWS partner. Topics included Amazon Connect and related services as well as AI/ML/Gen AI services on AWS",
                        "url": "https://www.carahsoft.com/learn/event/54246"
                    },
                    {
                        "name": "Mastering AWS Security - Second Edition: Strengthen your cloud environment using AWS security features coupled with proven strategies",
                        "publisher": "Packt Publishing",
                        "published_on": {
                            "day": 26,
                            "month": 4,
                            "year": 2024
                        },
                        "description": "Technical Reviewer",
                        "url": "https://www.amazon.com/Mastering-AWS-Security-Strengthen-environment/dp/1805125443"
                    }
                ],
                "accomplishment_honors_awards": [
                    {
                        "title": "AWS Ambassador - Top Ambassador Award",
                        "issuer": "Amazon Web Services",
                        "issued_on": {
                            "day": 1,
                            "month": 9,
                            "year": 2023
                        },
                        "description": "Earners of this credential have been recognized for their outstanding performance. They went above and beyond what is expected of an AWS Ambassador with regards to activities related to building their organization's AWS proficiency and business success and sharing their thought leadership with the broader community."
                    },
                    {
                        "title": "AWS Ambassador - Certification All-Star Award",
                        "issuer": "Amazon Web Services",
                        "issued_on": {
                            "day": 1,
                            "month": 9,
                            "year": 2022
                        },
                        "description": "The AWS Ambassador Certification All-Star is awarded to AWS Ambassadors that possessed all active AWS certifications at the date issued. The award applies to non-expired AWS certification exams."
                    }
                ],
                "accomplishment_patents": [],
                "accomplishment_courses": [],
                "accomplishment_projects": [
                    {
                        "starts_at": {
                            "day": 1,
                            "month": 3,
                            "year": 2021
                        },
                        "ends_at": {
                            "day": 31,
                            "month": 3,
                            "year": 2021
                        },
                        "title": "AWS Certification Subject Matter Expert (SME) Program - Item Development Workshop",
                        "description": None,
                        "url": "https://aws.amazon.com/certification/certification-sme-program/"
                    },
                    {
                        "starts_at": {
                            "day": 1,
                            "month": 8,
                            "year": 2020
                        },
                        "ends_at": {
                            "day": 31,
                            "month": 8,
                            "year": 2020
                        },
                        "title": "AWS Certification Subject Matter Expert (SME) Program - Item Development Workshop",
                        "description": "Assisted in the development of AWS Certification Examination by serving as a subject matter expert.",
                        "url": "https://aws.amazon.com/certification/certification-sme-program/"
                    }
                ],
                "accomplishment_test_scores": [],
                "volunteer_work": [
                    {
                        "starts_at": {
                            "day": 1,
                            "month": 1,
                            "year": 2013
                        },
                        "ends_at": None,
                        "title": "Donor",
                        "cause": None,
                        "company": "OneBlood",
                        "company_linkedin_profile_url": "https://www.linkedin.com/company/3211295/",
                        "description": None,
                        "logo_url": "https://media.licdn.com/dms/image/v2/C510BAQFXicAQLDUoLQ/company-logo_400_400/company-logo_400_400/0/1631343433216?e=1741824000&v=beta&t=a8Kx6z8YbTHD56_CbralFlhZIXzaUfF7FAUUlepmlzo"
                    },
                    {
                        "starts_at": {
                            "day": 1,
                            "month": 11,
                            "year": 2023
                        },
                        "ends_at": None,
                        "title": "CMMC Day Program Committee",
                        "cause": "Science and Technology",
                        "company": "Cnxtd Event Media Corp.",
                        "company_linkedin_profile_url": "https://www.linkedin.com/company/2908777/",
                        "description": None,
                        "logo_url": "https://media.licdn.com/dms/image/v2/D4E0BAQH2VYUDL0--Pw/img-crop_100/img-crop_100/0/1720109640960?e=1741824000&v=beta&t=OBaozyT72zoFfhuO0ERR-Ks0ekw4C4jU9E1Rhb6E3Qw"
                    }
                ],
                "certifications": [
                    {
                        "starts_at": {
                            "day": 1,
                            "month": 9,
                            "year": 2024
                        },
                        "ends_at": None,
                        "name": "Datadog Certified: Datadog Fundamentals",
                        "license_number": None,
                        "display_source": None,
                        "authority": "Datadog",
                        "url": None
                    },
                    {
                        "starts_at": {
                            "day": 1,
                            "month": 8,
                            "year": 2024
                        },
                        "ends_at": None,
                        "name": "AWS Certified AI Practitioner",
                        "license_number": None,
                        "display_source": None,
                        "authority": "Amazon Web Services (AWS)",
                        "url": None
                    }
                ],
                "connections": 5492,
                "people_also_viewed": [
                    {
                        "link": "https://www.linkedin.com/in/jenn-bergstrom?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAApMxS4BZrMUUlCdYq7x6CAqSs21QGrVY4Y",
                        "name": "Jenn Bergstrom",
                        "summary": "Vice President, Cloud and Data Solutions | Parsons Fellow - Board of Directors | Crafting strategies & innovative solutions to accelerate our customer missions | PMP | AWS Ambassador | AWS Community Builder",
                        "location": None
                    },
                    {
                        "link": "https://www.linkedin.com/in/elaineperales?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAAC0qzQBdJE3oPdP8NUTCEMYHUuH-HGXvcI",
                        "name": "Elaine Perales",
                        "summary": "Principal Program Manager - Twitch Ads",
                        "location": None
                    },
                    {
                        "link": "https://www.linkedin.com/in/jclendennen?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAAiXTkcBfjmBgVbV3gUjzQPPY0qpim9b2gc",
                        "name": "John Clendennen",
                        "summary": "CRO at CloudHesive | Modernizing Customer Experiences for Innovative Companies | Enthusiast in Cloud Computing, GenAI & Regenerative Organic Farming",
                        "location": None
                    },
                    {
                        "link": "https://www.linkedin.com/in/timothyjpatterson?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAAKnni8BuZ4V0tfr3384pGSwVHoigOsimUw",
                        "name": "Timothy Patterson",
                        "summary": "VP of AWS Solutions Architecture - AWS Ambassador & Community Builder - zeb",
                        "location": None
                    },
                    {
                        "link": "https://www.linkedin.com/in/jimwalker?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAABI1Q4Bd_LbhZHsedkkOeavZqOyJ5IUmEY",
                        "name": "James Walker, CISSP",
                        "summary": "Chief Executive Officer at CloudHesive",
                        "location": None
                    }
                ],
                "recommendations": [
                    "Srinivas Madvadas\n\n\n\nI had excellent oppurtunity in Pega to work with Patrick under his technical guidance to stabilize one of large customer environments. Patrick's technical expertise is vast and equivalent to a full stack technical proficiency. His thought leadership, his vision, technical roadmap for engineering, his way of mentoring team was very impressive. I would recommend and leverage Patrick's mentoring wherever possible given an oppurtunity.",
                    "Karun Kumar\n\n\n\n\"I worked under Patrick for Cloud Production Engineering team at Pegasystems. He is one of the best technical manager I've come across. He has a clear vision of how the product should be and how should it be aligned to make it as simple as possible and at the same time very robust. He knows all the technical aspects of all the cloud technologies and the tools related to it. He has designed one of the best Cloud Architecture at Pegasystems. He can envision the future of the product\""
                ],
                "activities": [],
                "similarly_named_profiles": [],
                "articles": [],
                "groups": [
                    {
                        "profile_pic_url": "https://media.licdn.com/dms/image/v2/D5607AQFegBDKuNMxqw/group-logo_image-shrink_48x48/group-logo_image-shrink_48x48/0/1664233329491?e=1734462000&v=beta&t=lxdGrebY-D5Cwf6Vv6Ktdn8KU8g6GFi6AfQaD_tnap8",
                        "name": "AWS Database Modernization Ambassador",
                        "url": "https://www.linkedin.com/groups/14119377"
                    },
                    {
                        "profile_pic_url": "https://media.licdn.com/dms/image/v2/D4D07AQHAlfL21-UxLw/group-logo_image-shrink_400x400/group-logo_image-shrink_400x400/0/1682366823372?e=1734462000&v=beta&t=92vHZHenmgstaM1DB0QWtxKnMEDP8Fen9X5IjLiy0Ro",
                        "name": "FinOps Connect",
                        "url": "https://www.linkedin.com/groups/9349486"
                    }
                ],
                "skills": []
            },
            {
                "linkedin_profile_url": "https://www.linkedin.com/in/jimcatts",
                "public_identifier": "jimcatts",
                "profile_pic_url": "https://s3.us-west-000.backblazeb2.com/proxycurl/person/jimcatts/profile?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=0004d7f56a0400b0000000001%2F20241212%2Fus-west-000%2Fs3%2Faws4_request&X-Amz-Date=20241212T223908Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=4172b9df702343b5f1485304d7354ec6288a2ab854f288efde84222296887a0d",
                "background_cover_image_url": "https://s3.us-west-000.backblazeb2.com/proxycurl/person/jimcatts/cover?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=0004d7f56a0400b0000000001%2F20241212%2Fus-west-000%2Fs3%2Faws4_request&X-Amz-Date=20241212T223908Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=5522f3847239aeefb818a4d960cef217ecdc8360bd7aa86478262606f31fc06a",
                "first_name": "Jim",
                "last_name": "Catts",
                "full_name": "Jim Catts",
                "follower_count": 1208,
                "occupation": "Co-Founder & CTO at Rhythm Software",
                "headline": "Co-Founder & CTO at Rhythm Software",
                "summary": None,
                "country": "US",
                "country_full_name": "United States",
                "city": "Atlanta Metropolitan Area",
                "state": None,
                "experiences": [
                    {
                        "starts_at": {
                            "day": 1,
                            "month": 4,
                            "year": 2019
                        },
                        "ends_at": None,
                        "company": "Rhythm Software",
                        "company_linkedin_profile_url": "https://www.linkedin.com/company/rhythmsoftware",
                        "company_facebook_profile_url": None,
                        "title": "Co-Founder & CTO",
                        "description": "As co-founder and CTO of Rhythm,  I'm working to bring the magic of cloud-native technology to associations to transform the member experience.",
                        "location": None,
                        "logo_url": "https://media.licdn.com/dms/image/v2/C560BAQGE5skq1Tbv-w/company-logo_400_400/company-logo_400_400/0/1656687551061/rhythmsoftware_logo?e=1741824000&v=beta&t=y61ZTZvXjjZDD_ILMQ-6IMaBZPGeWnKtmtgoaeT43Aw"
                    },
                    {
                        "starts_at": {
                            "day": 1,
                            "month": 1,
                            "year": 2018
                        },
                        "ends_at": {
                            "day": 31,
                            "month": 12,
                            "year": 2019
                        },
                        "company": "Catts Consulting",
                        "company_linkedin_profile_url": "https://www.linkedin.com/company/catts-consulting",
                        "company_facebook_profile_url": None,
                        "title": "Partner",
                        "description": "Technology consulting services that help organizations get features into customers’ hands as quickly as possible.  Provide services ranging from broad technology strategy and architecture down to training and hands-on software development. Emphasis on tools and techniques  for consistently delivering value while minimizing waste.\n\nKey Tools / Techniques: Agile, Lean, DevOps, Continuous Deployment, Amazon Web Services (AWS), Microservices, Serverless (Lambda), Node.js, REST, NoSQL (DynamoDB), Data Warehousing (Glue / Redshift), GitHub, CircleCI",
                        "location": "Greater Atlanta Area",
                        "logo_url": "https://media.licdn.com/dms/image/v2/C4D0BAQGLNLQ1MXHqQg/company-logo_400_400/company-logo_400_400/0/1631352356272?e=1741824000&v=beta&t=Lxl6aDPKyYyVd4Hk-UH-Dm8JbHFD-3vcx4EpmgBQDSY"
                    },
                    {
                        "starts_at": {
                            "day": 1,
                            "month": 5,
                            "year": 2010
                        },
                        "ends_at": {
                            "day": 31,
                            "month": 12,
                            "year": 2017
                        },
                        "company": "MemberSuite, Inc.",
                        "company_linkedin_profile_url": "https://www.linkedin.com/company/membersuite",
                        "company_facebook_profile_url": None,
                        "title": "Chief Technology Officer",
                        "description": "SaaS ERP focused on helping associations improve internal operations and increase online engagement with their members. Developed and executed technical strategy from pre-launch development through approximately $5m ARR. Twice named to the Inc. 5000 (2015 and 2017).\n\nKey Tools / Techniques: Agile, Continuous Integration, DevOps, Blue / Green deploys, AWS, NoSQL, REST, Redshift, Business Intelligence / Analytics (Birst), ETL (CloverETL), APM/UEM (Dynatrace), Microsoft C#, SQL Server, WebAPI2, WCF, Perforce, TeamCity, Jira",
                        "location": "Greater Atlanta Area",
                        "logo_url": "https://media.licdn.com/dms/image/v2/D560BAQEk05d-wuJFOA/company-logo_400_400/company-logo_400_400/0/1695325795090/membersuite_inc__logo?e=1741824000&v=beta&t=E5rbayOK3XhDP-GZ8fsDjeGzuFMXBeh-BYIQ-y6wvPM"
                    },
                    {
                        "starts_at": {
                            "day": 1,
                            "month": 4,
                            "year": 2009
                        },
                        "ends_at": {
                            "day": 31,
                            "month": 5,
                            "year": 2010
                        },
                        "company": "Self-Employed",
                        "company_linkedin_profile_url": None,
                        "company_facebook_profile_url": None,
                        "title": "Cloud/SaaS Product Development Consultant",
                        "description": "Technology consulting services that helped organizations develop Cloud / SaaS products in a variety of stages from concept (pre-founding) to initial R&D to initial scale. Services included deeply technical architectural design as well as hands-on development.",
                        "location": "Washington D.C. Metro Area",
                        "logo_url": None
                    },
                    {
                        "starts_at": {
                            "day": 1,
                            "month": 11,
                            "year": 2006
                        },
                        "ends_at": {
                            "day": 28,
                            "month": 2,
                            "year": 2009
                        },
                        "company": "ARC Solutions Inc",
                        "company_linkedin_profile_url": "https://www.linkedin.com/company/arc-solutions-inc",
                        "company_facebook_profile_url": None,
                        "title": "Chief Architect",
                        "description": "SaaS Association Management Software. Researched, designed, and implemented new patterns for multi-tenant software development and relational database design. ",
                        "location": "Washington D.C. Metro Area",
                        "logo_url": None
                    },
                    {
                        "starts_at": {
                            "day": 1,
                            "month": 7,
                            "year": 2005
                        },
                        "ends_at": {
                            "day": 30,
                            "month": 11,
                            "year": 2006
                        },
                        "company": "APS Healthcare",
                        "company_linkedin_profile_url": "https://www.linkedin.com/company/aps-healthcare",
                        "company_facebook_profile_url": None,
                        "title": "Manager, Software Development",
                        "description": "Technical manager and lead software architect and engineer for healthcare data processing systems. ",
                        "location": "Washington D.C. Metro Area",
                        "logo_url": "https://media.licdn.com/dms/image/v2/C4D0BAQGk0XVyhuGFrA/company-logo_400_400/company-logo_400_400/0/1631304314952?e=1741824000&v=beta&t=kwYtIskZvcexiSNEvwGwfulOXNlyXve_YQELMOZUKDE"
                    },
                    {
                        "starts_at": {
                            "day": 1,
                            "month": 12,
                            "year": 2002
                        },
                        "ends_at": {
                            "day": 30,
                            "month": 6,
                            "year": 2005
                        },
                        "company": "Caption Colorado",
                        "company_linkedin_profile_url": "https://www.linkedin.com/company/caption-colorado-llc",
                        "company_facebook_profile_url": None,
                        "title": "Manager, Information Technology",
                        "description": "Architected and developed platform for industry-first online captioning service. Designed and implemented technical infrastructure and services to increase availability, capacity, and scale to support corporate growth. ",
                        "location": "Greater Denver Area",
                        "logo_url": "https://media.licdn.com/dms/image/v2/C4D0BAQGDc8bXOBb8lQ/company-logo_400_400/company-logo_400_400/0/1631327074049?e=1741824000&v=beta&t=uLWDXTf1p8Saz6YIBUFrJwBnn6dZ4Er_3z8aFN1iTRM"
                    },
                    {
                        "starts_at": {
                            "day": 1,
                            "month": 7,
                            "year": 1996
                        },
                        "ends_at": {
                            "day": 31,
                            "month": 8,
                            "year": 2001
                        },
                        "company": "Medical Education Collaborative",
                        "company_linkedin_profile_url": "https://www.linkedin.com/company/medical-education-collaborative",
                        "company_facebook_profile_url": None,
                        "title": "Director, Internet Business",
                        "description": None,
                        "location": "Greater Denver Area",
                        "logo_url": None
                    }
                ],
                "education": [],
                "languages": [],
                "languages_and_proficiencies": [],
                "accomplishment_organisations": [],
                "accomplishment_publications": [],
                "accomplishment_honors_awards": [],
                "accomplishment_patents": [],
                "accomplishment_courses": [],
                "accomplishment_projects": [],
                "accomplishment_test_scores": [],
                "volunteer_work": [],
                "certifications": [
                    {
                        "starts_at": {
                            "day": 1,
                            "month": 9,
                            "year": 2018
                        },
                        "ends_at": {
                            "day": 30,
                            "month": 9,
                            "year": 2020
                        },
                        "name": "AWS Certified Cloud Practitioner",
                        "license_number": "9VSWHD9CC2Q1QK3M",
                        "display_source": "amazon.com",
                        "authority": "Amazon Web Services",
                        "url": "http://aws.amazon.com/verification"
                    },
                    {
                        "starts_at": {
                            "day": 1,
                            "month": 9,
                            "year": 2018
                        },
                        "ends_at": {
                            "day": 30,
                            "month": 9,
                            "year": 2020
                        },
                        "name": "AWS Certified Solutions Architect - Associate",
                        "license_number": "GSQDDK7KCJ1E1XKY",
                        "display_source": "amazon.com",
                        "authority": "Amazon Web Services",
                        "url": "http://aws.amazon.com/verification"
                    },
                    {
                        "starts_at": {
                            "day": 1,
                            "month": 9,
                            "year": 2018
                        },
                        "ends_at": {
                            "day": 30,
                            "month": 9,
                            "year": 2020
                        },
                        "name": "AWS Certified Developer - Associate",
                        "license_number": "7018FZZC1NFQ1T3J",
                        "display_source": "amazon.com",
                        "authority": "Amazon Web Services",
                        "url": "http://aws.amazon.com/verification"
                    },
                    {
                        "starts_at": {
                            "day": 1,
                            "month": 6,
                            "year": 2022
                        },
                        "ends_at": None,
                        "name": "Scale Like Amazon",
                        "license_number": None,
                        "display_source": "credly.com",
                        "authority": "Amazon Web Services (AWS)",
                        "url": "https://www.credly.com/badges/3f1d02c6-acae-4fe2-81c1-c55b2050d1c9?source=linked_in_profile"
                    },
                    {
                        "starts_at": {
                            "day": 1,
                            "month": 6,
                            "year": 2022
                        },
                        "ends_at": None,
                        "name": "Scale Like Amazon",
                        "license_number": None,
                        "display_source": "credly.com",
                        "authority": "Amazon Web Services (AWS)",
                        "url": "https://www.credly.com/badges/3f1d02c6-acae-4fe2-81c1-c55b2050d1c9?source=linked_in_profile"
                    }
                ],
                "connections": 666,
                "people_also_viewed": [
                    {
                        "link": "https://www.linkedin.com/in/patrickchilders?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAADMOZEBGmbOaZQDuAWRqlIuxPFM9GCCtu8",
                        "name": "Patrick Childers",
                        "summary": "Entrepreneur & Technology Leader - @ATLCTO",
                        "location": None
                    },
                    {
                        "link": "https://www.linkedin.com/in/joycelynbrown?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAACuabUBLH26LevFtKL1yfajWXzApNd_Y30",
                        "name": "Joycelyn Brown",
                        "summary": "HR & People Operations Leader | Patent & Legal Strategist | Fractional Leadership",
                        "location": None
                    },
                    {
                        "link": "https://www.linkedin.com/in/kyisha-chatman?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAACrwbbMBElnoxbyLsQLqe7NJ5Sc5_ZXxn5s",
                        "name": "Kyisha Chatman",
                        "summary": "Certified Scrum Master | Lead Technical Support Engineer | 10+ Years in Technical Support & System Administration",
                        "location": None
                    },
                    {
                        "link": "https://www.linkedin.com/in/emmanuel-abbey-160488219?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAADcQvtgB_vJG3_8niloiZnFpdEpdceIgMXQ",
                        "name": "Emmanuel Abbey",
                        "summary": "Account Development Consultant @Impexium",
                        "location": None
                    },
                    {
                        "link": "https://www.linkedin.com/in/natalie-cheney?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAAAV5dIBHOZlPBfeKDrd5PEDF9wpPtCm2yg",
                        "name": "Natalie Cheney",
                        "summary": "CEO / Advisor",
                        "location": None
                    },
                    {
                        "link": "https://www.linkedin.com/in/adrianna-powell?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAACL_yzUBNWwxbS6Z8ewqLj6TZJvFhbVRPjs",
                        "name": "Adrianna Powell",
                        "summary": "Implementation Consultant | Web Developer | Technical Support",
                        "location": None
                    },
                    {
                        "link": "https://www.linkedin.com/in/daniel-plocher?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAACUbkE4BlghRx08uwYz1QzCIuR7gq7tmNsk",
                        "name": "Daniel Plocher",
                        "summary": "Helping associations build vibrant communities - Forj",
                        "location": None
                    },
                    {
                        "link": "https://www.linkedin.com/in/howietang1?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAABGgqVEBX3S7-yqwFvuNM1gN_vO5pe8VomE",
                        "name": "Howard Tang",
                        "summary": "Manager of Technical Support Operations",
                        "location": None
                    },
                    {
                        "link": "https://www.linkedin.com/in/andrew-ryan-3289112?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAAB9pZAB7ZC00ooGYxj0WXo4Fx4vTc7U2hU",
                        "name": "Andrew Ryan",
                        "summary": "Co-Founder & Chief Executive Officer at Rhythm Software",
                        "location": None
                    },
                    {
                        "link": "https://www.linkedin.com/in/heather-burrs-graham-7643272?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAABnWXwBJZANnm--MmK1DNKa4kZNeNhpCFI",
                        "name": "Heather Burrs Graham",
                        "summary": "Director of Professional Services",
                        "location": None
                    }
                ],
                "recommendations": [
                    "Eric Farr\n\n\n\nJim is one of the most capable and thoughtful people I’ve worked with. He is not only a great system architect who has built highly scalable, data-intensive, always-on SaaS solutions but he can jump in at any level and diagnose performance problems, find the trickiest bugs, and code solutions.\n\nJim brings a breadth and depth of knowledge across the AWS spectrum. He is able to match the application needs to the right AWS services to reduce spend and increase reliability.  Our solution was sophisticated, making use of relational and noSQL data, queueing, workflow, and analytics. Jim designed it so we could scale out to add capacity and we never had downtime.\n\nFor all of Jim’s capabilities, he is remarkably humble and a pleasure to work with. He is a great teacher, and I learned a ton about AWS working with him. Any team would be fortunate to have Jim on their side.",
                    "Paul Thomas\n\n\n\nIf you need a short answer, I will recommend Jim Catts as a welcome addition to any team.  I would like to put emphasis on the fact there are no specifics around what that team would be for, what type of team it would be, or even what sector the team would be working in. It would not matter, Jim would still receive my recommendation.\nI don’t intend to go into the skill set Jim has, which is extensive, or his level of expertise within that skill set, which is high, you can look at any of his other recommendations if you need to see that. My intent here is to focus on what makes it so easy for me to vouch for Jim in any situation and that is who he is as a person.\nFirst, Jim is extremely likable, I say this from the perspective of both a subordinate and a peer. This makes it easy for him to hop into any team and become an integral part of it.\nSecond, Jim is empathetic. He understands what drives people and why they feel the way they do. In a position of leadership this allowed him to manage people effectively without dealing with misunderstandings.\nThird, Jim is adaptable. Jim is quick to learn, and faster to understand. This allows him to come into a new field and become an expert on the matter.\nLast, Jim has common sense, or put another way, he is self-aware both in a business setting as well as socially. This might seem like something trivial but, in my opinion, can make or break a team. This common sense allows him to make properly informed decisions without creating unrealistic goals for his team. It fosters a team that can achieve what they set forth to do and where everyone understands the why of what they are doing.\nThe above traits are not confined to any specific business, technology related or otherwise, and define why I would be willing to recommend Jim for any team and believe the team would be better for it.\n"
                ],
                "activities": [],
                "similarly_named_profiles": [
                    {
                        "name": "James Catts",
                        "link": "https://au.linkedin.com/in/james-catts-a9704827",
                        "summary": "Business Transformation Specialist",
                        "location": "Sydney, NSW"
                    },
                    {
                        "name": "James Catts",
                        "link": "https://www.linkedin.com/in/james-catts-8271b4162",
                        "summary": "Real Estate",
                        "location": "Richmond, VA"
                    },
                    {
                        "name": "James Catts",
                        "link": "https://au.linkedin.com/in/james-catts-3ab6a8160",
                        "summary": "CEO at Catts International Corp.",
                        "location": "Greater Sydney Area"
                    },
                    {
                        "name": "James Catts",
                        "link": "https://www.linkedin.com/in/james-catts-b6116034",
                        "summary": "--",
                        "location": "United States"
                    }
                ],
                "articles": [],
                "groups": [
                    {
                        "profile_pic_url": "https://media.licdn.com/dms/image/v2/C4D07AQETM_KfeMEQbw/group-logo_image-shrink_48x48/group-logo_image-shrink_48x48/0/1631369382865?e=1734566400&v=beta&t=ATN3FwwnXI5HsVro5p28PG8BaNswOYqct59PG92Ivkk",
                        "name": "Amazon AWS Architects",
                        "url": "https://www.linkedin.com/groups/4387417"
                    },
                    {
                        "profile_pic_url": "https://media.licdn.com/dms/image/v2/C5607AQGYeBgRmXjEOw/group-logo_image-shrink_400x400/group-logo_image-shrink_400x400/0/1631004506770?e=1734566400&v=beta&t=DYWZqo_RFRJ428TLtLcLZaeIYY0sAfaPntapjVgFT1k",
                        "name": "DevOps",
                        "url": "https://www.linkedin.com/groups/2825397"
                    }
                ],
                "skills": []
            }
        ]
    }
    return jsonify(res)

@app.route("/person_profile", methods=["GET"])
def linkedin():
    linkedin_profile_url = request.args.get('linkedin_profile_url')
    api_key = request.args.get('api_key')
    headers = {'Authorization': 'Bearer ' + api_key}
    api_endpoint = 'https://nubela.co/proxycurl/api/v2/linkedin'
    params = {
        'linkedin_profile_url': linkedin_profile_url
    }
    response = requests.get(api_endpoint,
                            params=params,
                            headers=headers)
    json_response = response.json()
    print(json_response,'json_response')
    return json_response


def can_user_view_chat(request):
    return request
# URL_FOR
@app.route('/linkdb', endpoint='landing.linkdb')
def linkdb():
    return render_template('linkdb.html')

@app.route('/free_tools', endpoint='landing.free_tools')
def free_tools():
    return render_template('free_tools.html')

@app.route('/disposable_email_checker', endpoint='landing.disposable_email_checker')
def disposable_email_checker():
    return render_template('disposable_email_checker.html')

@app.route('/disposable_email_api', endpoint='landing.disposable_email_checker_api_landing')
def disposable_email_api():
    return render_template('disposable_email_api.html')

@app.route('/disposable_email_api_checker', endpoint='landing.disposable_email_checker_api')
def disposable_email_api_checker():
    return render_template('disposable_email_api.html')

@app.route('/landing_docs', endpoint='landing.docs')
def landing_docs():
    return render_template('landing_docs.html')

@app.route('/landing_people_api', endpoint='landing.people_api_landing')
def landing_people_api():
    return render_template('landing_people_api.html')

@app.route('/landing_linkedin_api', endpoint='landing.linkedin_api_company_landing')
def landing_linkedin_api():
    return render_template('landing_linkedin_api.html')

@app.route('/landing_contact_api', endpoint='landing.contact_api_landing')
def landing_contact_api():
    return render_template('landing_contact_api.html')

@app.route('/landing_reverse_email_lookup', endpoint='landing.reverse_email_lookup')
def landing_reverse_email_lookup():
    return render_template('landing_reverse_email_lookup.html')

@app.route('/landing_email_lookup', endpoint='landing.email_lookup')
def landing_email_lookup():
    return render_template('landing_email_lookup.html')

@app.route('/landing_jobs_api', endpoint='landing.jobs_api_landing')
def landing_jobs_api():
    return render_template('landing_jobs_api.html')

@app.route('/landing_school_api', endpoint='landing.school_api')
def landing_school_api():
    return render_template('landing_school_api.html')

@app.route('/landing_search_api', endpoint='landing.search_api_landing')
def landing_search_api():
    return render_template('landing_search_api.html')

@app.route('/landing_product_updates', endpoint='landing.products')
def landing_product_updates():
    return render_template('landing_product_updates.html')

@app.route('/landing_linkedin_api_v2', endpoint='landing.linkedin_landing')
def landing_linkedin_api_v2():
    return render_template('landing_linkedin_api_v2.html')

@app.route('/solutions_alternative_data', endpoint='solutions.alternative_data_investment')
def landing_alternative_data_investment():
    return render_template('landing_alternative_data_investment.html')

@app.route('/solutions_accelerate_growth', endpoint='solutions.accelerate_growth')
def landing_accelerate_growth():
    return render_template('landing_accelerate_growth.html')

@app.route('/solutions_hr_tech', endpoint='solutions.hr_tech')
def landing_hr_tech():
    return render_template('landing_hr_tech.html')

@app.route('/solutions_sales_marketing', endpoint='solutions.sales_marketing_automation_api')
def landing_sales_marketing():
    return render_template('landing_sales_marketing.html')

@app.route('/solutions_clearbit_alternative', endpoint='solutions.clearbit_alternative')
def landing_clearbit_alternative_data():
    return render_template('landing_clearbit_alternative_data.html')


@app.route('/solutions_peopledatalabs_alternative', endpoint='solutions.peopledatalabs_pdl_alternative')
def landing_peopledatalabs_alternative():
    return render_template('landing_peopledatalabs_alternative.html')

@app.route('/landing_use_cases', endpoint='landing.use_cases_landing')
def landing_use_cases():
    return render_template('landing_use_cases.html')

@app.route('/landing_monitoring_jobs', endpoint='landing.monitoring_job_changes')
def landing_monitoring_job_changes():
    return render_template('landing_monitoring_job_changes.html')

@app.route('/demo_reverse_email', endpoint='demo.reverse_email_lookup')
def reverse_email_lookup():
    return render_template('demo_reverse_email_lookup.html')

@app.route('/demo_linkedin_profile', endpoint='demo.linkedin_profile_viewer')
def linkedin_profile_viewer():
    return render_template('demo_linkedin_profile.html')

@app.route('/landing_pricing', endpoint='landing.pricing')
def pricing():
    return render_template('landing_pricing.html')

@app.route('/landing_linkdb_pricing', endpoint='landing.linkdb_pricing')
def linkdb_pricing():
    return render_template('landing_linkdb_pricing.html')

@app.route('/auth_login', endpoint='auth.login')
def login():
    return render_template('auth_login.html')

@app.route('/auth_register', endpoint='auth.register_with_password')
def register_with_password():
    return render_template('auth_register.html')

@app.route('/landing_company', endpoint='landing.company_api')
def company_api_landing():
    return render_template('landing_company_api.html')

@app.route('/landing_about', endpoint='landing.about')
def about():
    return render_template('landing_about.html')

@app.route('/landing_team', endpoint='landing.team')
def team():
    return render_template('landing_team.html')

@app.route('/landing_terms', endpoint='landing.terms_of_use')
def terms():
    return render_template('landing_terms.html')

@app.route('/landing_privacy', endpoint='landing.privacy_policy')
def privacy_policy():
    return render_template('landing_privacy.html')

@app.route('/landing_data_removal', endpoint='landing.data_removal')
def data_removal():
    return render_template('landing_data_removal.html')

@app.route('/demo_linkedin_xray', endpoint='demo.linkedin_xray_tool')
def linkedin_xray():
    return render_template('demo_linkedin_xray.html')




