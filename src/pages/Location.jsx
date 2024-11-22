import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Location() {
  const [location, setLocation] = useState('');
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-pink-300 text-center">

        <div className="img-container" >
      <img src="https://project-sosmed-if12hlcfo-orpheros-projects.vercel.app/assets/cat-jump-QewKLTGg.gif" alt='cat'/>
        </div>

      <h1 className="question-text">Where do you want this date to be held?</h1>
      <div className='button-container space-y-4 mb-4'>
      {['Toledo', 'Sangi'].map((place) => (
        <button
          key={place}
          className={`btn-yes ${
            location === place ? 'bg-green-500' : 'bg-gray-300'
          }`}
          onClick={() => setLocation(place)}
        >
          {place}
        </button>
      ))}
      </div>
      <div className="second-button-container">
      <button
        className="btn-no w-1/2 p-3 text-lg"
        disabled={!location}
        onClick={() => navigate('/excitement')}
      >
        Continue
      </button>
      </div>
    </div>
  );
}

export default Location;


