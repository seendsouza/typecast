from flask import Flask, jsonify, request
import json
import io
import boi 

app = Flask(__name__)

"""
@app.route('/api/dashboard', methods=['GET'])
def dashboard():
    response = func()
    return jsonify(response)
    pass
"""

@app.route('/api/dashboard',methods=['GET'])
def tweets():
    print(request.args)
    response = boi.typecast(request.args.getlist('keyword[]'),
                            request.args.get("negative"),
                            request.args.get("number_of_tweets"))
    print(response)
    return jsonify(response)
    
    
