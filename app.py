from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import os

app = Flask(__name__)
CORS(app)

WORKOUTS_FILE = 'workouts.json'

def load_workouts():
    if os.path.exists(WORKOUTS_FILE):
        with open(WORKOUTS_FILE, 'r') as file:
            return json.load(file)
    return []

def save_workouts(workouts):
    with open(WORKOUTS_FILE, 'w') as file:
        json.dump(workouts, file, indent=4)

@app.route('/workout', methods=['POST'])
def log_workout():
    try:
        workouts = load_workouts()
        data = request.get_json()
        workout_type = data.get('workout_type')
        duration = data.get('duration')
        wallet = data.get('wallet')

        if not workout_type or not duration or not wallet:
            return jsonify({"message": "Missing required fields"}), 400

        workout = {
            "workout_type": workout_type,
            "duration": duration,
            "wallet": wallet
        }
        workouts.append(workout)
        save_workouts(workouts)

        return jsonify({"message": "Workout logged successfully!"}), 200
    except Exception as e:
        return jsonify({"message": f"Error: {str(e)}"}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)