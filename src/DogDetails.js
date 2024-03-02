import React from "react";
import { Link, useParams } from "react-router-dom";

function DogDetails({ data }) {
    let { name } = useParams();
    let dog = data.find(d => d.name === name);

    return (
        <div>
            {dog ? (
                <div>
                    <h2>{dog.name}</h2>
                    <img src={dog.src} alt={dog.name} />
                    <p>Age: {dog.age}</p>
                    <ul>
                        {dog.facts.map((fact, index) => (
                            <li ket={index}>{fact}</li>
                        ))}
                    </ul>
                    <Link to={"/dogs"}><h3>Home</h3></Link>
                </div>
            ) : (
                <p>Dog Not Found</p>
            )}
        </div>
    );
}

export default DogDetails;
