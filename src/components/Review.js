import React, { useState } from "react";
import people from "./../data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import "./Review.css";

const Review = () => {
  const [currentId, setCurrentId] = useState(1);
  const handleForward = (id) => {};

  const handleBackward = (id) => {};

  return (
    <section className="review-wrapper">
      <h3>Our Reviews</h3>
      {people
        .filter((person) => person.id == currentId)
        .map((person) => (
          <article className="person-active-card">
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
              <span className="left-arrow" onClick={handleForward}>
                {"<"}
              </span>
              <span className="right-arrrow" onClick={handleBackward}>
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
