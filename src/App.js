import logo from "./logo.svg";
import "./App.css";
import products from "./products.js";
import bookStore from "./products.js";
import gC from "./products.js";
import rD from "./products.js";

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


    <div className="bigDiv">

      <div className="book1">
      <img
      src="https://best-kutub.com/wp-content/uploads/2023/06/egb227873-5242517.jpg"
        
        alt="gC"
        className="gc-imge"

      />
       <p>{products[0].name}</p>
      <p>{products[0].price}</p>
      </div>

    <div className ="book2">
      <img
        src="https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_UF1000,1000_QL80_.jpg"
        alt="rD"
        className="rD-imge"
      />
      <p>{products[1].name}</p>
      <p>{products[1].price}</p>
     </div>

     </div>
     
    </div>
  );
}

export default App;
