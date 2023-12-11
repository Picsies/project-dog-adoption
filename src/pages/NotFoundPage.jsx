import { Footer } from "../components/Footer"
import { NavBar } from "../components/NavBar"

export const NotFoundPage = () => {
  return (
    // make sure the footer is at the bottom of the page
    <div className='d-flex flex-column min-vh-100'>
      <NavBar   />
      <div className="container" style={{ flex: '1' }}>
        <div className="mt-4 mb-4">
          <h3>Oh, it seems that the page you are trying to access does not exist.</h3>
        </div>
      </div>
      <Footer   />
    </div>
  )
}
