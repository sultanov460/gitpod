import React from "react";
import { Prices } from "./Prices";
import { HeroPage } from "../../components/HeroPage/HeroPage";

export default function Pricing() {
  return (
    <div>
      <HeroPage
        title={"Pricing"}
        text={"Get more Gitpod, pay less."}
        button={"Try now"}
      />
      <Prices />
    </div>
  );
}
