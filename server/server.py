from flask import Flask, jsonify, request
import json
import io
import twitterscraper

app = Flask(__name__)


@app.route('/api/dashboard', methods=['GET'])
def dashboard():
    """
    response = func()
    return jsonify(response)
    """
    pass

@app.route('/api/tweets',methods=['GET'])
def tweets():
    request.args.
    response = twitterscraper.typecast(request.args.keyword,request.args.time_start,
                            request.args.time_end,request.args.negative,
                            request.args.number_of_tweets)
    return jsonify(resposne)
    
    
