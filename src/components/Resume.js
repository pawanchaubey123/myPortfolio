import React from "react";

const Resume = () => {
  return (
    <div>
      <embed
        src={require('../docs/resume.pdf')}
        type="application/pdf"
        style={{ width: '100%', height: '600px' }}>
      </embed>
    </div>
  );
};

export default Resume;
