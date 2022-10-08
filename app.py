#import flask to make app

from flask import Flask, render_template

##use the Flask class imported on line 3
app= Flask(__name__)

##create a route: Tells the website what to display when someone visits
@app.route('/')
def home():
    return render_template('index.html')
#open terminal in visual studio type 'flask run' click the website link
#webpage should open index.html file