import { useState } from "react";
import { SlMinus, SlPlus } from "react-icons/sl";

const Value = ({ value }) => {
  const { title, detail } = value;
  const [showDetails, setShowDetails] = useState(false);

  const handleShowDetails = () => {
    setShowDetails(!showDetails);
  };
  return (
    <div>
      <div className="my-4">
        <h3 className="lg:text-2xl flex mb-4 ">{title}</h3>
        <button
          className=" float-right mr-10 -mt-10 "
          onClick={handleShowDetails}
        >
          {showDetails ? <SlMinus /> : <SlPlus />}
        </button>
        {showDetails ? <p className="lg:text-xl ">{detail}</p> : ""}
      </div>
      <div className="border border-gray-400 w-full"></div>
    </div>
  );
};

export default Value;
