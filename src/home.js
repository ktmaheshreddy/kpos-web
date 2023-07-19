import "./App.css";
import Orders from "./orderService";
import Items from "./items";
import ItemsList from "./items-list";
import ItemCart from "./item-cart";
import SideNavBar from "./side-navbar";
import CategoryList from "./category-list";

function Home() {
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
        <div class="category-list">
          <CategoryList></CategoryList>
        </div>
      </div>
    </div>
  );
}

export default Home;
