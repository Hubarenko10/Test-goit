import { useState } from "react";

export const Dropdown = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>{selectedOption}</button>
      {isOpen && (
        <ul>
          {options.map((option) => (
            <li key={option}>
              <button onClick={() => handleOptionClick(option)}>{option}</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};