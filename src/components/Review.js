import React, { useState } from "react";
import people from "./../data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import "./Review.css";

const Review = () => {
  const [currentId, setCurrentId] = useState(1);
  const handleForward = (id) => {
    console.log("Forward Handler");
    console.log(id);
    if (currentId === 4) {
      setCurrentId(1);
    } else {
      setCurrentId(id + 1);
    }
  };

  const handleBackward = (id) => {
    console.log("Backward Handler");
    console.log(id);
    if (currentId === 1) {
      setCurrentId(people.length);
    } else {
      setCurrentId(id - 1);
    }
  };

  return (
    <section className="review-wrapper">
      <h3>Our Reviews</h3>
      {people
        .filter((person) => person.id === currentId)
        .map((person) => (
          <article className="person-active-card" key={person.id}>
            <div className="person-image-wrapper">
              <img
                className="person-image"
                src={person.image}
                alt="Person Image"
              />
            </div>
            <h5 className="person-name">{person.name}</h5>
            <span className="person-job">{person.job}</span>
            <p className="person-text">{person.text}</p>

            <div className="arrows">
              <span
                className="left-arrow"
                onClick={() => handleBackward(person.id)}
              >
                {"<"}
              </span>
              <span
                className="right-arrrow"
                onClick={() => handleForward(person.id)}
              >
                {">"}
              </span>
            </div>
            <button className="btn btn-surprise">Surprise Me</button>
          </article>
        ))}
    </section>
  );
};

export default Review;
