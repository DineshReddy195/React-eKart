import React from "react";

const CartColumns = () => {
  return (
    <div className="container-fluid text-center d-none d-lg-block">
      <div className="row ">
        {["products", "name of product", "price", "quantity", "remove", "total"].map((header) => (
          <div key={header} className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">{header}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartColumns;
