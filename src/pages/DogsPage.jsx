import { DogsList } from '../components/DogsList';
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';
import './DogsPage.css';

export const DogsPage = () => {
  return (
    <div>
      <NavBar   />
      <div className='container mb-4'>
        <DogsList />
      </div>
      <Footer   />
    </div>
  )
}
