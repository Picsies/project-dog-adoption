import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { FilterDogs } from "./FilterDogs";
import { Link } from "react-router-dom";

export const DogsList = () => {
  const allDogs = useSelector((state) => state.dog.dogs);
  const [displayedDogs, setDisplayedDogs] = useState(allDogs);

  const filterDogs = (size) => {
    if (size === 'all') {
      setDisplayedDogs(allDogs);
    }
    else {
      setDisplayedDogs(allDogs.filter((dog) => dog.category.toLowerCase() === size));
    }
  };

  return (
    <div className="row">
      <div className="col-7 mt-4 mb-4">
        <FilterDogs onFilter={filterDogs} />
      </div>
      <div className="col-12 text-center mb-4">
        <h2>Dogs who are looking for a home</h2>
      </div>
        <div className="row">
          {displayedDogs.map((dog) => {
            console.log(localStorage.getItem('dogs'));
            // Check if the picture is a base64 encoded string
            const isBase64 = dog.picture.startsWith("data:image");
            return (
              <div className="col-md-3 mb-3" key={dog.id}>
                <div className="card">
                  <div className="card-body">
                    <div className="picture-container d-flex justify-content-center align-items-center fixed-image-height">
                      {isBase64 ? (
                        <img className="img-fluid" src={dog.picture} alt={dog.name} />
                      ) : (
                        <img className="img-fluid" src={`/img/${dog.picture}`} alt={dog.name} />
                      )}
                    </div>
                    <div className="text-center mt-3">
                      <p>{dog.name}</p>
                      {/* Link to the dog's details page */}
                      <Link to={`/dogs/${dog.id}`}>
                        <button className="btn btn-outline-secondary btn-sm rounded-5">Learn more</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
    </div>
  );
};

