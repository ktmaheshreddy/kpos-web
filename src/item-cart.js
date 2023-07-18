import React from "react";
function ItemCart() {
  
  const printBill=()=>{
    window.print();
  }
return(
  <div>
      <h3>Printer Test</h3>
      <button onClick={printBill}>Print bill</button>
  </div>
)
}
export default ItemCart;
