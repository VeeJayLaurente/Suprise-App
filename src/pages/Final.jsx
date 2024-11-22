import { useNavigate } from 'react-router-dom';

function Final() {

    const navigate = useNavigate();

    return (
      <div className="flex flex-col items-center justify-center h-screen bg-pink-500 text-center">

      <div className="img-container" >
      <img src="https://project-sosmed-if12hlcfo-orpheros-projects.vercel.app/assets/smile-cat-C3rozv9W.gif" alt='cat'/>
      </div>

      <div className="heart-container mb-4">
        <i className="heart-icon">❤️</i>
      </div>

        <h1 className="question-text">CANT WAIT TO SEE YOU TOMORROW!</h1>

        <div className="button-container">
        <button
          className="btn-yes"
          onClick={() => navigate('/')}
        >
          <span>❤️</span>
          <span>Continue</span>
        </button>
      </div>
      </div>
    );
  }
  
  export default Final;
  