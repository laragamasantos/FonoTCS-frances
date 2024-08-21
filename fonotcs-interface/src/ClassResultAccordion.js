import "./App.css";
import "./Global.css";
import "./TeacherSpace.css";
import React, { Component, useState } from "react";

const ClassResultAccordion = ({ title, content }) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  return (
    <div className="class-results">
      <div className="class-title" onClick={() => setIsAccordionOpen(!isAccordionOpen)}>
        <h3>Turma { title }</h3>
        <h3>{isAccordionOpen ? "-" : "+"}</h3>
      </div>
      {isAccordionOpen && (
        <div>
          {content.map((student) => (
            <div className="student-result-container">
              <div className="student-result">
                <p>{ student.studentName }</p>
                <p>{ student.grade }</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ClassResultAccordion;
