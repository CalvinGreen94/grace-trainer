# api/workout.py
from http.server import BaseHTTPRequestHandler
import json
import os

WORKOUTS_FILE = os.path.join(os.path.dirname(__file__), '../workouts.json')

def load_workouts():
    if os.path.exists(WORKOUTS_FILE):
        with open(WORKOUTS_FILE, 'r') as file:
            return json.load(file)
    return []

def save_workouts(workouts):
    with open(WORKOUTS_FILE, 'w') as file:
        json.dump(workouts, file, indent=4)

class handler(BaseHTTPRequestHandler):
    def do_POST(self):
        content_length = int(self.headers['Content-Length'])
        body = self.rfile.read(content_length)
        data = json.loads(body)

        workout_type = data.get('workout_type')
        duration = data.get('duration')
        wallet = data.get('wallet')

        if not workout_type or not duration or not wallet:
            self.send_response(400)
            self.end_headers()
            self.wfile.write(b'{"message": "Missing required fields"}')
            return

        workouts = load_workouts()
        workouts.append({
            "workout_type": workout_type,
            "duration": duration,
            "wallet": wallet
        })
        save_workouts(workouts)

        self.send_response(200)
        self.send_header("Content-type", "application/json")
        self.end_headers()
        self.wfile.write(b'{"message": "Workout logged successfully!"}')
