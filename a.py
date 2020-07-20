from flask import jsonify

res = {'headers': [
    {'align': 'start', 'sortable': 'false', 'value': 'icon'},
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
print(jsonify(res))
