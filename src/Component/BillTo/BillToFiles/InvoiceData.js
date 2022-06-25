import React from "react";
import "./InvoiceData.css";

function InvoiceData() {
  return (
    <div className="invoiceData">
      <div className="invoiceData__number">
        <h3>Invoice No:</h3>
        <span> 16</span>
      </div>
      <div className="invoiceData__div">
        <div className="invoiceData__data">
          <span className="main">Date:</span>
          <span> 06 Jun 2022</span>
        </div>
        <div className="invoiceData__data">
          <span className="main">Request Id: </span>
          <span> REQ10016</span>
        </div>
        <div className="invoiceData__data">
          <span className="main">Technician Name:</span>
          <span> Vijay</span>
        </div>
      </div>
    </div>
  );
}

export default InvoiceData;
