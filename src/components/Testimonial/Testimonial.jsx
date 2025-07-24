import s from "../Used/style.module.scss";
import React from "react";

export const Testimonial = ({ testimonial }) => {
  return (
    <div key={testimonial.id} className={s.card}>
      <p>{testimonial.review}</p>
      <div className={s.userInfo}>
        <img src={testimonial.info.image} alt={testimonial.info.title} />
        <div className={s.textBox}>
          <h5>{testimonial.info.author}</h5>
          <p>{testimonial.info.title}</p>
        </div>
      </div>
    </div>
  );
};
