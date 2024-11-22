import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function DateType() {
  const [selectedTypes, setSelectedTypes] = useState([]);
  const navigate = useNavigate();

  const toggleSelection = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">

        <div className="img-container" >
      <img src="https://project-sosmed-if12hlcfo-orpheros-projects.vercel.app/assets/smile-cat-C3rozv9W.gif" alt='cat'/>
        </div>

      {/* Main question */}
      <h1 className="question-text mb-4">What type of date would you like to have?</h1>

      {/* Heart icon */}
      <div className="heart-container mb-4">
        <i className="heart-icon">❤️</i>
      </div>

      {/* Buttons for Date Options */}
      <div className="button-container space-y-4 mb-4">
        {['FastFood Date', 'Local Food Date', 'Street Food Date'].map((type) => (
          <button
            key={type}
            className={`btn-yes ${
              selectedTypes.includes(type) ? 'bg-green-500' : 'bg-gray-300'
            } w-full p-3 text-lg`}
            onClick={() => toggleSelection(type)}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Centered Continue Button */}
      <div className="second-button-container">
        <button
          className="btn-yes w-1/2 p-3 text-lg"
          onClick={() => navigate('/location')}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default DateType;
