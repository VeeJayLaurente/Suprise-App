import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Excitement() {
  const [excitement, setExcitement] = useState(5);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-pink-400 text-center">

    <div className="img-container" >
      <img src="https://project-sosmed-if12hlcfo-orpheros-projects.vercel.app/assets/sad-sad-cat-aBnl32_Y.gif" alt='cat'/>
    </div>

      <h1 className="question-text">Rate how excited you are!</h1>
      <div className='button-container space-y-4 mb-4'>
      <input
        type="range"
        min="1"
        max="1000000"
        value={excitement}
        className="w-3/4"
        onChange={(e) => setExcitement(e.target.value)}
      />
      </div>
      <p className="question-text">Excitement Level: {excitement}</p>
      <div className='second-button-container'>
      <button
        className="btn-yes"
        onClick={() => navigate('/final')}
      >
        Continue
      </button>
      </div>
    </div>
  );
}

export default Excitement;
