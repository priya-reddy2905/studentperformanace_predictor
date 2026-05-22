import React, { useState } from "react";
import "./App.css";

function App() {
  const [studyHours, setStudyHours] = useState("");
  const [attendance, setAttendance] = useState("");
  const [previousMarks, setPreviousMarks] = useState("");
  const [prediction, setPrediction] = useState("");

  const predictMarks = () => {
    const result =
      Number(studyHours) * 5 +
      Number(attendance) * 0.3 +
      Number(previousMarks) * 0.5;

    setPrediction(result.toFixed(2));
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Student Performance Prediction</h1>

        <input
          type="number"
          placeholder="Study Hours"
          value={studyHours}
          onChange={(e) => setStudyHours(e.target.value)}
        />

        <input
          type="number"
          placeholder="Attendance Percentage"
          value={attendance}
          onChange={(e) => setAttendance(e.target.value)}
        />

        <input
          type="number"
          placeholder="Previous Marks"
          value={previousMarks}
          onChange={(e) => setPreviousMarks(e.target.value)}
        />

        <button onClick={predictMarks}>
          Predict Marks
        </button>

        {prediction && (
          <h2>Predicted Marks: {prediction}</h2>
        )}
      </div>
    </div>
  );
}

export default App;