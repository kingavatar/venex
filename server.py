from flask import Flask, render_template, jsonify
from flask_cors import CORS
import requests

# Tells where the template and static assets are.
app = Flask(__name__,
            static_folder="./dist/static",
            template_folder="./dist")

# For Cross Origin Requests
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})


# Api End points the below one is for dashboard table.
@app.route('/api/home')
def last_hundred():
    response = {
        'headers': [
            {'align': 'start', 'sortable': False, 'value': 'icon'},
            {
                'text': 'Vehicle number',
                'value': 'number'
            },
            {'text': 'Type', 'value': 'type'},
            {'text': 'Action', 'value': 'action'},
            {'text': 'TimeStamp', 'value': 'time'}
        ],
        'vehicles': [
            {
                'action': 'Entry',
                'number': 'XXXXXX',
                'type': 'Visitor Vehicle',
                'time': 'TimeStamp',
                'icon': 'mdi-clock'
            },
            {
                'action': 'Exit',
                'number': 'XXXXXX',
                'type': 'Resident Vehicle',
                'time': 'TimeStamp',
                'icon': 'mdi-account'
            },

            {
                'action': 'Entry',
                'number': 'XXXXXX',
                'type': 'Commercial Vehicle',
                'time': 'TimeStamp',
                'icon': 'mdi-flag'
            },
            {
                'action': 'Entry',
                'number': 'XXXXXX',
                'type': 'Visitor Vehicle',
                'time': 'TimeStamp',
                'icon': 'mdi-clock'
            },
            {
                'action': 'Exit',
                'number': 'XXXXXX',
                'type': 'Resident Vehicle',
                'time': 'TimeStamp',
                'icon': 'mdi-account'
            },

            {
                'action': 'Entry',
                'number': 'XXXXXX',
                'type': 'Commercial Vehicle',
                'time': 'TimeStamp',
                'icon': 'mdi-flag'
            },
            {
                'action': 'Entry',
                'number': 'XXXXXX',
                'type': 'Visitor Vehicle',
                'time': 'TimeStamp',
                'icon': 'mdi-clock'
            },
            {
                'action': 'Exit',
                'number': 'XXXXXX',
                'type': 'Resident Vehicle',
                'time': 'TimeStamp',
                'icon': 'mdi-account'
            },

            {
                'action': 'Entry',
                'number': 'XXXXXX',
                'type': 'Commercial Vehicle',
                'time': 'TimeStamp',
                'icon': 'mdi-flag'
            }
        ]
    }
    return jsonify(response)

# This End point is for Statistics in Profile Section
@app.route('/api/stats')
def get_profile_stats():
    response = {'tnl':'189',
    'entries':'174',
    'exits':'23',
    'rp':'56',
    'vp':'24',
    'cp':'7'}
    return jsonify(response)


# This is for Rendering and Redirecting Different Routes done by Vue Router
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    # if app.debug:
        # return requests.get('http://localhost:8080/{}'.format(path)).text
    return render_template("index.html")

