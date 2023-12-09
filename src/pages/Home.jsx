import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { NavBar } from '../components/NavBar';
import { Link } from 'react-router-dom';
import './Home.css';

export const Home = () => {
  return (
    <div>
      <div id='header-container'> 
        <NavBar />
        <Header />
      </div>
      <div className='container mt-4'>
        <div className='row'>
          <div className='col-md-5'>
            <img className='float-md-end' id='welcome-img' src='/src/assets/2-dogs-img.png' alt='Dog' />
          </div>
          <div className='col-md-5'>
            <div>
              <h1>Welcome to Dog Adopt</h1>
              <p>Dog Adopt is a compassionate 
              online platform dedicated to connecting 
              loving pet owners with individuals or families 
              seeking to provide a forever home for dogs in 
              need. Our mission is to facilitate the seamless 
              transition of dogs from one caring home to another, 
              ensuring that each furry friend finds the perfect match 
              for a lifetime of happiness.</p>
            </div>
          </div>
        </div>  
      </div>
      <div id='section-img-container' className='mt-4'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-5 mt-md-5 mt-3'>
              <h3>Need to find a new home for your dog?</h3>
              <p>Register your dog and find a loving home for them today.</p>
              <button className='btn btn-light mb-5 rounded-5'>
                <Link to='/registration'>Register here</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id='adopt-process-container'>
        <div className='container mt-4'>
          <div className='row mb-4'>
            <div className='col-12 text-center mb-4'>
              <h3>Adoption Process</h3>
            </div>
            <div className='col-md-4'>
              <h4>Find your dog</h4>
              <p>Explore our diverse selection of lovable dogs 
                waiting for their forever homes. 
                Discover furry companions of various breeds, 
                sizes, and personalities. Your perfect match might 
                be just a click away!</p>
            </div>
            <div className='col-md-4'>
              <h4>Connect with owner</h4>
              <p>Once you've found a dog that captures your heart, 
                initiate a connection with the owner. Ask questions 
                about the dog's history, temperament, 
                and any specific needs. It's an opportunity to 
                ensure compatibility and create a bond before the 
                next step. Meet the dog and see if it's a match</p>
            </div>
            <div className='col-md-4'>
              <h4>Take your new family member home</h4>
              <p>Congratulations on finding your ideal companion! 
                After connecting with the owner and ensuring a good match, 
                it's time to welcome your new family member home. 
                Prepare a warm and loving environment, 
                and embark on a journey filled with joy, 
                companionship, and unconditional love.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
