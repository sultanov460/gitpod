import React from "react";
import s from "./style.module.scss";
import { Testimonial } from "../Testimonial/Testimonial";

export const Used = () => {
  const testimonials = [
    {
      id: 1,
      review:
        "GitPod is incredibly cool.In my opinion, this is a big step in open source software contribution. I'm excited to see where we go from here.",
      info: {
        author: "Ben Halpern",
        title: "Creator and Co-founder @forem and@ThePracticalDev",
        image: "/Ben-photo.svg",
      },
    },
    {
      id: 2,
      review:
        "GitPod is incredibly cool.In my opinion, this is a big step in open source software contribution. I'm excited to see where we go from here.",
      info: {
        author: "Ben Halpern",
        title: "Creator and Co-founder @forem and@ThePracticalDev",
        image: "/Ben-photo.svg",
      },
    },
    {
      id: 3,
      review:
        "GitPod is incredibly cool.In my opinion, this is a big step in open source software contribution. I'm excited to see where we go from here.",
      info: {
        author: "Ben Halpern",
        title: "Creator and Co-founder @forem and@ThePracticalDev",
        image: "/Ben-photo.svg",
      },
    },
  ];

  const brands = [
    { id: 1, src: "/gitlab.svg", label: "Gitlab" },
    { id: 2, src: "freeCodeCAmp.svg", label: "freeCodeCAmp" },
    { id: 3, src: "/dwave.svg", label: "dwave" },
    { id: 4, src: "/google.svg", label: "google" },
    { id: 5, src: "/amazon.svg", label: "amazon" },
    { id: 6, src: "/facebook.svg", label: "facebook" },
    { id: 7, src: "/uber.svg", label: "uber" },
    { id: 8, src: "/intel.svg", label: "intel" },
    { id: 9, src: "/theia.svg", label: "theia" },
    { id: 10, src: "/codeinstitute.svg", label: "codeinstitute" },
    { id: 11, src: "/4geeks.svg", label: "4geeks" },
  ];
  return (
    <div className="container">
      <div className={s.wrapper}>
        <h1>Used by 400,000+ developers.</h1>
        <div className={s.cards}>
          {testimonials.map((testimonial) => (
            <Testimonial key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
        <div className={s.logos}>
          {brands.map((brand) => (
            <img key={brand.id} src={brand.src} alt={brand.label} />
          ))}
        </div>
      </div>
    </div>
  );
};
