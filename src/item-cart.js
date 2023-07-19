import React from "react";
import { useNavigate } from "react-router-dom";

function ItemCart() {
  const navigate = useNavigate();

  async function handleCheckout() {
    await navigate("/print");
    window.print();
  }
  return (
    <div class="check-out">
      <button
        class="btn btn-primary bottom btn-lg btn-block"
        onClick={handleCheckout}
      >
        <strong>Checkout</strong>
      </button>
    </div>
  );
}
export default ItemCart;
