import React from "react";
import { Link } from "react-router-dom";

function DogList({ data }) {
    return (
        <div>
            {data.map(dog => (
                <div key={dog.name}>
                    <img src={dog.src} alt={dog.name} style={{ width: 200, height: 200 }} />
                    <Link to={`/dogs/${dog.name}`}><h2>{dog.name}</h2></Link>
                </div>
            ))}
        </div>
    );
}

export default DogList;