import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { submitForm } from '../reducers/dogSlice';
import { useNavigate } from 'react-router-dom';
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';

const resizeAndEncodeImage = async (file) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const image = new Image();
      image.src = reader.result;

      image.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = 300; 
        canvas.height = (300 * image.height) / image.width; // Maintain aspect ratio

        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        
        // Convert canvas content to a Blob
        canvas.toBlob((blob) => {
          const blobReader = new FileReader();
          blobReader.onloadend = () => {
            resolve(blobReader.result);
          };
          blobReader.readAsDataURL(blob);
        }, 'image/jpeg'); 
      };
    };
    reader.readAsDataURL(file);
  });
};

export const RegistrationPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    adoptionFee: '',
    information: '',
    breed: '',
    category: '',
    picture: null,
  });

  const handleChange = async (e) => {
    if (e.target.name === 'picture') {
      const file = e.target.files[0];

      if (file) {
        if (!(file instanceof Blob)) {
          console.error('Selected file is not of type Blob:', file);
          return;
        }

        try {
          const resizedImage = await resizeAndEncodeImage(file);
          setFormData({
            ...formData,
            picture: resizedImage,
          });
        } catch (error) {
          console.error('Error resizing and encoding image:', error);
        }
      }
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    dispatch(submitForm(formData));

    setFormData({
      name: '',
      age: '',
      adoptionFee: '',
      information: '',
      breed: '',
      category: '',
      picture: null,
    });

    navigate('/ThankYou');
  };


  return (
    <div>
      <NavBar />
      <div className='container mt-4 mb-4'>
        <div className='row'>
          <div className='col-12 text-center'>
          <h2>Dog Registration</h2>
          </div>
        </div>
        <form onSubmit={handleFormSubmit}>
        <div className='row mt-3'>
          <div className='col-md-6'>
            <label htmlFor="name" className="form-label">Dogs Name:</label>
            <input type="text" className='form-control' id="name" name="name" value={formData.name} onChange={handleChange} required/>
          </div>
            <div className="col-md-6">
            <label htmlFor="age" className="form-label">Dog's Age:</label>
            <input type="number" className="form-control" id="age" name="age" value={formData.age} onChange={handleChange} required />
          </div>
        </div>
        <div className='row mt-3'>
          <div className="col-md-6">
            <label htmlFor="breed" className="form-label">Breed:</label>
            <input type="text" className="form-control" id="breed" name="breed" value={formData.breed} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label htmlFor="category" className="form-label">Category:</label>
            <select className="form-select" id="category" name="category" value={formData.category} onChange={handleChange} required>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>
        </div>
        <div className='row mt-3'>
          <div className="col-md-6">
            <label htmlFor="adoptionFee" className="form-label">Adoption Fee:</label>
            <div className='input-group'>
              <input type="number" className="form-control" id="adoptionFee" name="adoptionFee" value={formData.adoptionFee} onChange={handleChange} required />
              <span className="input-group-text">€</span>
            </div> 
          </div>
        </div>
        <div className='row mt-3'>
          <div className="col">
            <label htmlFor="information" className="form-label">Information:</label>
            <textarea className="form-control" id="information" name="information" value={formData.information} onChange={handleChange} required />
          </div>
        </div>
        <div className='row mt-3'>
          <div className="col-md-6">
            <label htmlFor="picture" className="form-label">Picture:</label>
            <input type="file" className="form-control" id="picture" name="picture" onChange={handleChange} accept='image/*' required />
            {/* accept="image/*" restricts file selection to only image files */}
          </div>
        </div>
        <div className='row mt-3'>
          <div className='col-md-3'>
            <button className='btn btn-light mb-5 rounded-5' type="submit">Submit</button>
          </div>
        </div>
      </form> 
      </div>   
      <Footer />
    </div>
  )
};
