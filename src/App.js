import React from "react";
import "./styles.css";
import {store} from "./redux/store"
import Routing from "./Components/Routing";
export default function App() {
  return (
    <div className="App">
      <Routing store={store} />
    </div>
  );
}
