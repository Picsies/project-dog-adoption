import { Link } from "react-router-dom"

export const Header = () => {
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-7 mx-auto mt-5'>
            <h2>Not only people need a home</h2>
            <p className="small">If you're ready to open your heart and home to a new furry family member, 
            Dog Adopt is the perfect place to start your journey.</p>
            <button className="btn btn-light mb-5 rounded-5" type="button">
              <Link to='/dogs'>Find a friend</Link>
            </button>
          </div>
          <div className='col-md d-flex align-items-end'>
            <img id="header-img" src="/img/img-4.png" alt='Header image' />
          </div>
        </div>
      </div>  
    </div>
  )
}
