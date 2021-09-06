import React from "react";
import Entry from "./Entry";
import Emojipedia from "../emojipedia";

function Cards(items) {
  return (
    <Entry
      key={items.id}
      emoji={items.emoji}
      name={items.name}
      meaning={items.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{Emojipedia.map(Cards)}</dl>
    </div>
  );
}

export default App;
