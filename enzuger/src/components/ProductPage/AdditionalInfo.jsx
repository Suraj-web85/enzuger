import React, { useState } from 'react';

function AdditionalInfo() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="additional-info">
      <div className="adin-tog con sh sflex" onClick={toggleOpen}>
        <span>Additional Information</span>
        <span className={`adin-tarr ${isOpen ? 'open' : ''}`}>&#9662;</span>
      </div>
      <div className={`adin-incon ${isOpen ? 'open' : ''}`}>
        <div className="content-inner">
        </div>
      </div>
    </div>
  );
}

export default AdditionalInfo;
