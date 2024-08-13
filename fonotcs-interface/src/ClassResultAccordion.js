import "./App.css";
import "./Global.css";
import "./TeacherSpace.css";
import React, { Component, useState } from "react";

const ClassResultAccordion = ({ title, content }) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  return (
    <div className="class-results">
      <div className="class-title" onClick={() => setIsAccordionOpen(!isAccordionOpen)}>
        <h3>Turma 1</h3>
        <h3>{isAccordionOpen ? "-" : "+"}</h3>
      </div>
      {isAccordionOpen && (
        <div>
          <div className="student-result-container">
            <div className="student-result">
              <p>Lara Gama</p>
              <p>78,3%</p>
            </div>
          </div>
          <div className="student-result-container">
            <div className="student-result">
              <p>Lucas Santos</p>
              <p>60,1%</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClassResultAccordion;
