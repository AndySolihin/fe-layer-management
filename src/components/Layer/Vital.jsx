import { useState, useRef } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Checkbox from "../Checkbox";

const Vital = () => {
  const [isOpen, setIsOpen] = useState(false);
  const checkboxRef = useRef();
  const [iconPosition, setIconPosition] = useState("down");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIconPosition(iconPosition === "down" ? "up" : "down");
  };

  return (
    <div className="">
      <div
        className="flex bg-gray py-3 px-2 mr-1 ml-3 rounded-sm cursor-pointer"
        onClick={toggleMenu}
      >
        <p className="text-xs sm:text-sm">Object Vital</p>
        <div className="ml-auto">
          {iconPosition === "down" ? (
            <FaChevronDown className="w-4 h-4" />
          ) : (
            <FaChevronUp className="w-4 h-4" />
          )}
        </div>
      </div>
      {isOpen && (
        <div className="mr-2 ml-3 my-2 py-2 px-6 text-xs bg-white-grey rounded-md">
          <ul>
            <li>
              <Checkbox
                label="Bandara"
                type="checkbox"
                reference={checkboxRef}
              />
            </li>
            <li>
              <Checkbox
                label="Pelabuhan"
                type="checkbox"
                reference={checkboxRef}
              />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
export default Vital;
