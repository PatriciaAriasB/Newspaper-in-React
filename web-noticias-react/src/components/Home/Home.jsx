
import { Link } from 'react-router-dom';
import './Home.scss'; 

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <h1>Welcome to My Newspaper</h1>
        <p>Were here to help you find what you need.</p>
        <Link to="/ListNews">
          <button>Explore Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;

