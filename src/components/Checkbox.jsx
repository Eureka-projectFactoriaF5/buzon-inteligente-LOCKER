import React from "react";
import Image from "/images/packageIcon1.svg";

const Checkbox = ({ packages = [], onCheck }) => {
  return (
    <>
      <div className="bg-white rounded shadow-md p-10 flex items-start space-x-48 max-w-3xl font-bree">

        <div className="flex-1">
  
          <ul className="space-y-4">
            {packages.map((pkg, index) => (
              <li key={index} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="accent-light-blue"
                  checked={pkg.checked}
                  onChange={() => onCheck(index)}
                />
                <span className="text-dark-blue text-xl">{pkg}</span>
              </li>
            ))}
          </ul>

        </div>


        <div className="w-52 h- flex-shrink-0">

          <img
            src={Image}
            alt="Imagen del paquete"
            className="w-full h-full object-cover rounded-xl"
          />

        </div>

      </div>
    </>

  );
};

export default Checkbox;
