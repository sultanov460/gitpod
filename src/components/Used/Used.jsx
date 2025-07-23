import React from "react";
import s from "./style.module.scss";

export const Used = () => {
  return (
    <>
      <div className="container">
        <div className={s.wrapper}>
          <h1>Used by 400,000+ developers.</h1>
          <div className={s.cards}>
            <div className={s.card}>
              <p>
                GitPod is incredibly cool. <br />
                <br />
                In my opinion, this is a big step in open source software
                contribution. I'm excited to see where we go from here.
              </p>
              <div className={s.userInfo}>
                <img src="Ben-photo.svg" alt="" />
                <div className={s.textBox}>
                  <h5>Ben Halpern</h5>
                  <p>
                    Creator and Co-founder <strong>@forem</strong> and
                    <strong>@ThePracticalDev</strong>
                  </p>
                </div>
              </div>
            </div>
            <div className={s.card}>
              <p>
                Let's say we were overwhelmed how smooth @gitpod workspaces
                creation & own Docker image for workspaces worked. <br />
                Plus, installing @code extensions from the store and integrating
                @gitlab CI. That blew my mind entirely, and that is hard ;)
              </p>
              <div className={s.userInfo}>
                <img src="michael-photo.svg" alt="" />
                <div className={s.textBox}>
                  <h5>Michael Friedrich</h5>
                  <p>
                    Developer Evangelist <strong>@GitLab</strong>
                  </p>
                </div>
              </div>
            </div>
            <div className={s.card}>
              <p>
                Look at any PR (pull request) in a full coding environment where
                you can edit, build, and test the PR code, by just prepending{" "}
                <br />
                "gitpod.io#" to the PR URL. Super useful for reviewing/testing
                stuff without having to check it out locally!
              </p>
              <div className={s.userInfo}>
                <img src="julius-photo.svg" alt="" />
                <div className={s.textBox}>
                  <h5>Julius Volz</h5>
                  <p>
                    Creator <strong>@PrometheusIO</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={s.logos}>
            <img src="gitlab.svg" alt="" />
            <img src="freeCodeCAmp.svg" alt="" />
            <img src="dwave.svg" alt="" />
            <img src="google.svg" alt="" />
            <img src="amazon.svg" alt="" />
            <img src="facebook.svg" alt="" />
            <img src="uber.svg" alt="" />
            <img src="intel.svg" alt="" />
            <img src="theia.svg" alt="" />
            <img src="codeinstitute.svg" alt="" />
            <img src="4geeks.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
