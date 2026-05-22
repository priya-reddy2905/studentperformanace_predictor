from flask import Flask, request, jsonify
from flask_cors import CORS
from sklearn.linear_model import LinearRegression
import pandas as pd

app = Flask(__name__)
CORS(app)

data = {
    'StudyHours': [1, 2, 3, 4, 5, 6, 7, 8],
    'Attendance': [60, 65, 70, 75, 80, 85, 90, 95],
    'PreviousMarks': [40, 45, 50, 60, 65, 70, 80, 90],
    'Marks': [35, 40, 50, 55, 65, 70, 80, 95]
}

df = pd.DataFrame(data)

X = df[['StudyHours', 'Attendance', 'PreviousMarks']]
y = df['Marks']

model = LinearRegression()
model.fit(X, y)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json

    prediction = model.predict([[
        data['studyHours'],
        data['attendance'],
        data['previousMarks']
    ]])

    return jsonify({
        'predicted_marks': round(prediction[0], 2)
    })

if __name__ == '__main__':
    app.run(debug=True)