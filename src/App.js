import "react-app-polyfill/ie9";
import logo from "./logo.svg";
import "./App.css";
import { GoogleSpreadsheet } from "google-spreadsheet";
import Orders from "./orderService";
import Items from "./items";
import ItemsList from "./items-list";
import ItemCart from "./item-cart";
import SideNavBar from "./side-navbar";
import CategoryList from "./category-list";

function App() {
  return (
    <div className="App">
      <div class="row kpos">
        <div class="col-1 bg-dark text-white">
          <SideNavBar></SideNavBar>
        </div>
        <div class="card shadow col-6">
          <ItemsList></ItemsList>
        </div>
        <div class="card col-5 shadow bg-light">
          <ItemCart></ItemCart>
        </div>
      </div>
      <CategoryList></CategoryList>
    </div>
  );
}

export default App;
