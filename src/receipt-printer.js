import React from "react";
import InvoiceFormat from "./invoice";
function PrinterReciept() {
  const printData = () => {
    window.print();
  };

  return (
    <div class="mb-5">
      <InvoiceFormat></InvoiceFormat>
    </div>
  );
}
export default PrinterReciept;
