import React from "react";

const Characters = ({ characters = [] }) => {
  return (
    <div className="row">
      {characters.map((item, index) => (
        <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
          <div
            className="card"
            style={{
              minWidth: "200px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "20px",
            }}
          >
            <img src={item.image} alt="" />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <hr />
              <p>species: {item.species}</p>
              <p>location: {item.location.name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Characters;
