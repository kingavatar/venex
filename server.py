from flask import Flask, render_template, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__,
            static_folder="./dist/static",
            template_folder="./dist")
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})


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
                type: 'Visitor Vehicle',
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


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    # if app.debug:
        # return requests.get('http://localhost:8080/{}'.format(path)).text
    return render_template("index.html")

