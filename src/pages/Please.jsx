import { useNavigate } from 'react-router-dom';

function Welcome() {
  const navigate = useNavigate();

  return (

    <div className="flex flex-col items-center justify-center h-screen">
        <div className="img-container" >
      <img src="https://project-sosmed-if12hlcfo-orpheros-projects.vercel.app/assets/sad-sad-cat-aBnl32_Y.gif" alt='cat'/>
        </div>
      {/* Main question */}
      <h1 className="question-text">Wait What? NOOOOOOO PLEASE SAY YESS</h1>

      {/* Heart icon */}
      <div className="heart-container">
        <i className='heart-icon'>❤️</i>
        </div>

      {/* Buttons */}
      <div className="button-container">
        <button
          className="btn-yes"
          onClick={() => navigate('/continue')}
        >
          <span>❤️</span>
          <span>Yes</span>
        </button>

        <button
          className="btn-yes"
          onClick={() => navigate('/continue')}
        >
           <span>❤️</span>
           <span> Super Yes!</span>
        </button>
      </div>
    </div>
  );
}

export default Welcome;
