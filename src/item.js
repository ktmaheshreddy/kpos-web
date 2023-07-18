import React, { useState } from "react";
import './item.scss'
function Item(props) {
    const [item,setItem]=useState(props.item);
  return (
    <div class="card text-white bg-primary mb-3 item">
      <div class="card-body">
        <h5 class="card-title">{item.id}</h5>
        <p class="card-text">
        {item.item}
        </p>
      </div>
    </div>
  );
}
export default Item;
