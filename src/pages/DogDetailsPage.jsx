import { useEffect } from 'react';
import { NavBar } from '../components/NavBar';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Link } from 'react-router-dom';
import './DogDetailsPage.css';

export const DogDetailsPage = () => {
  const { id } = useParams();
  const allDogs = useSelector((state) => state.dog.dogs);
  const navigate = useNavigate();

  // Find the specific dog with the matching 'id'
  const dog = allDogs.find((dog) => dog.id === parseInt(id, 10));

  useEffect(() => {
    if (!dog) {
      // Handle the case where the dog with the specified 'id' is not found
      navigate('*');
    }
  }, [dog, navigate]);
  
  //check if dog is undefined. 
  //If dog not found. It will not contiune to render the rest of its content
  if (!dog) {
    return null;
  }

  const isBase64 = dog.picture.startsWith("data:image");

  return (
    <div>
      <NavBar />
      <div className='container'>
        <div className='row mt-4 mb-4'>
          <div className='col-md-6'>
            {isBase64 ? (
              <img className="dog-img img-fluid" src={dog.picture} alt={dog.name} />
            ) : (
              <img className="dog-img img-fluid" src={`/src/assets/${dog.picture}`} alt={dog.name} />
            )}
          </div>
          <div className='col-md-6'>
          <div>
            <h2>{dog.name}</h2>
            <p>{dog.breed}</p>
          </div>
          <div>
            <p>{dog.information}</p>
          </div>
          <div>
            <p>- Age: {dog.age}</p>
            <p>- Adoption Fee: {dog.adoptionFee}€</p>
            <p>- Size: {dog.category}</p>
          </div>
          <button className='btn btn-light mb-5 rounded-5'>
            <Link to='*'>Contact Owner</Link>
          </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
