import React, { useState, useEffect } from "react";
import axios from "axios";
import Item from "./item";
function ItemsList() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    if (!window.sessionStorage.getItem("items")) {
      getItemsList();
    } else {
      setItems(JSON.parse(window.sessionStorage.getItem("items")));
    }
  }, []);
  const getItemsList = () => {
    axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
    axios
      .get(process.env.REACT_APP_SHEET_ID + "/values/Sheet1", {
        params: { key: process.env.REACT_APP_KEY },
      })
      .then((res) => {
        setItems(res.data.values);
        window.sessionStorage.setItem("items", JSON.stringify(res.data.values));
      })
      .catch((ex) => {
        console.log(ex);
      });
  };

  return (
    <div>
      <div class="row p-1">
        {items.map((item) => (
          <div class="col-3 p-1">
            <div class="card text-white bg-primary">
              <div class="card-body item-tile">
                <span>{item[0]}</span>
                <p>{item[1]}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ItemsList;
