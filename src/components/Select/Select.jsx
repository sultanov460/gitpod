import React from "react";
import s from "./style.module.scss";

export const Select = () => {
  return (
    <>
      <div className="container">
        <div className={s.textBox}>
          <h1>
            Select project, <br />
            <span>
              check dependencies, checkout branch, view <br />
              readme.txt, install tools, run build, run test, <br />
            </span>
            start coding.
          </h1>
        </div>
      </div>
    </>
  );
};
