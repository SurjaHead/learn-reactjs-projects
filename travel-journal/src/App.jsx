import React from "react";
import Hero from "./components/hero";
import Card from "./components/card";
import Data from "./data";

export default function App() {
  const cards = Data.map((item) => {
    return <Card item={item} />;
  });

  return (
    <div>
      <Hero />
      {cards}
    </div>
  );
}
