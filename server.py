from flask import Flask, render_template, jsonify, request, make_response
from flask_cors import CORS
from flask_socketio import SocketIO, emit
import requests
# Tells where the template and static assets are.
app = Flask(__name__,
            static_folder="./dist/static",
            template_folder="./dist")

# For Cross Origin Requests
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

# Websocket setting
app.config['SECRET_KEY'] = 'XXXXX'
socketio = SocketIO(app, cors_allowed_origins='*')


def messageReceived(methods=['GET', 'POST']):
    print('message was received!!!')


@socketio.on('connect')
def test_connect():
    print("Web socket connected ")


@socketio.on('msg')
def handle_message(message):
    print('received message: ' + message)


# For Triggering FrontEnd when a Vehicle is Detected will check websocket tomorrow
@app.route('/api/action', methods=['POST', 'GET'])
def action():
    vehicleNo=''
    if request.method =='GET':
        return ''
    elif request.method == 'POST':
        isResident = False
        vehicleNo = request.get_json()['data']
        #check isResident and update it
        # Definetly send isResident. If it is null frontend will not update data
        socketio.emit('customEmit',  {'data': isResident}, broadcast=True)
    # Check whether it is residential or not and assign isResident true or false
        return make_response('Success')
    else :
        return '',400

# Api End points the below one is for dashboard table.
@app.route('/api/home')
def last_ten():
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

@app.route('/api/search',methods=['POST','GET'])
def search():
    if request.method =='POST':
        vehicleNo=request.form.get('vehicleNo')
        name=request.form.get('name')
        address=request.form.get('address')
        action=request.form.get('action')
        radios= request.form.get('radios')
        timebefore= request.form.get('timebefore')
        timeafter= request.form.get('timeafter')
        timemenubefore= request.form.get('timemenubefore')
        timemenuafter= request.form.get('timemenuafter')
        datebefore= request.form.get('datebefore')
        dateafter= request.form.get('dateafter')
        datetoday= request.form.get('datetoday')
        datemenubefore= request.form.get('datemenubefore')
        datemenuafter= request.form.get('datemenuafter')
        # print(request.form)
        return ''
    elif request.method == 'GET':
        #do your backend ops and give the required response like below
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
    else:
        return '',400


@app.route('/api/user', methods=['POST', 'GET'])
def accountDetails():
    vehicleNo=""
    if request.method == 'POST':
        vehicleNo = request.form.get('vehicleNo');
        print(vehicleNo)
        return ''
    elif request.method == 'GET':
        response = {'headers': [
            {'align': 'start', 'sortable': False, 'value': 'icon'},
            {
                'text': 'Vehicle Number',
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
                'type': 'Resident Vehicle',
                'time': 'TimeStamp',
                'icon': 'mdi-account'
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
                'type': 'Resident Vehicle',
                'time': 'TimeStamp',
                'icon': 'mdi-account'
            },
            {
                'action': 'Entry',
                'number': 'XXXXXX',
                'type': 'Resident Vehicle',
                'time': 'TimeStamp',
                'icon': 'mdi-account'
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
                'type': 'Resident Vehicle',
                'time': 'TimeStamp',
                'icon': 'mdi-account'
            },
            {
                'action': 'Entry',
                'number': 'XXXXXX',
                'type': 'Resident Vehicle',
                'time': 'TimeStamp',
                'icon': 'mdi-account'
            }
        ],
            'entries': '11',
            'exits': '7',
            'type': 'Resident Vehicle',
            'name': 'Owner Name',
            'flatNo': 'Flat No',
            'email': 'XXXXXXXXXX@XXXXX.XXX',
            'phoneNo': 'XXXXXXXXXX'}
        return jsonify(response)
    else:
        return '', 400

@app.route('/api/userdetails', methods=['POST','GET'])
def userDetails():
    if request.method == 'POST':
        firstname = request.form.get('firstname')
        lastname = request.form.get('lastname')
        address = request.form.get('address')
        companyname = request.form.get('companyname')
        middlename = request.form.get('middlename')
        email = request.form.get('email')
        phoneNo = request.form.get('phoneNo')
        type = request.form.get('type')
        action = request.form.get('action')
        print(request.form)
        return ''
    else :
        return '',400

# This is for Rendering and Redirecting Different Routes done by Vue Router
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    # if app.debug:
    #     return requests.get('http://localhost:8080/{}'.format(path)).text
    return render_template("index.html", async_mode=socketio.async_mode)

