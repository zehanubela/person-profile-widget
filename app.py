from flask import render_template, make_response
from flask import Flask
# from flask_cors import CORS, cross_origin
import requests
from flask import request

app = Flask(__name__)
# CORS(app)

@app.route("/")
def index():
    response = make_response(render_template('index.html'))
    return response
    

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
    return response.json()