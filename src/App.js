import logo from "./logo.svg";
import "./App.css";

import Productlist from "./Components/Productlist.js";

function App() {
  return (
    <div className="App">
      <h1> bookStore</h1>
      <h2> reading</h2>
      <img
        src="https://pyxis.nymag.com/v1/imgs/57c/8a4/0a7a6d877153ec0113a0f32807cb81b976-11-bookstores-6-three-lives-2.2x.h473.w710.jpg"
        alt="bookStore"
        className="book-imge"
      />

      <Productlist />
    </div>
  );
}

export default App;
