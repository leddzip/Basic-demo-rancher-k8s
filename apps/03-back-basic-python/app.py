import os
import uuid
import waitress
from flask import Flask, jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app)


@app.route('/api/v1/random')
def welcome():
    return jsonify({
        'uuid': str(uuid.uuid4())
    })


if __name__ == '__main__':
    waitress.serve(app, listen='*:5000')
