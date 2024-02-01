import React, { useState } from 'react';
import './App.css';

const Dropdown = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  //toggle the dropdown options display
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    // Handle click event for dropdown item
    console.log(`Selected item: ${item}`);
    setIsOpen(false); // Close the dropdown after item selection
  };

  return (
    <div className="dropdown">
        <h3>Should you use a dropdown?</h3>
      <button className="dropdown-btn" onMouseEnter={toggleDropdown}>
        Select
      </button>
      {isOpen && (
        <ul className="dropdown-list">
          {items.map((item, index) => (
            <li key={index} onClick={() => handleItemClick(item)}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
