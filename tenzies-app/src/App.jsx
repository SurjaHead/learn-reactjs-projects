import { useState } from "react";
import React from "react";

function App() {
  // function allNewDice() {
  //   const newDice = [];
  //   for (let i = 0; i < 10; i++) {
  //     newDice.push({
  //       value: Math.ceil(Math.random() * 6),
  //       isHeld: false,
  //     });
  //   }
  //   return newDice;
  // }

  // console.log(allNewDice());

  return (
    <main>
      <div className="headng">
        <h1>Tenzies</h1>
        <p className="description">
          Roll until all dice are the same. Click each die to freeze it at this
          current value between rolls.
        </p>
      </div>
      <div className="dice"></div>
      <button className="roll-btn">Roll</button>
    </main>
  );
}

export default App;
