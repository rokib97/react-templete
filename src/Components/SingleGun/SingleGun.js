import React, { useState } from "react";
import Modal from "../Modal/Modal";

const SingleGun = (props) => {
  const [data, setData] = useState(null);
  const { setCartCount } = props;

  return (
    <div className="card w-full h-full bg-base-100 shadow-xl">
      <figure>
        <img
          className="h-64 w-full rounded-lg"
          src={props.gun.img}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {props.gun.name}
          <div className="badge badge-secondary">{props.gun.action}</div>
        </h2>
        <div className="flex">
          <button
            onClick={() => setCartCount()}
            className="btn btn-sm btn-primary mr-2"
          >
            Add to Cart
          </button>
          {data && <Modal data={data} setData={setData} />}
          <label
            onClick={() => setData(props.gun)}
            htmlFor="my-modal-6"
            className="btn btn-sm modal-button mr-2"
          >
            Details
          </label>
        </div>
      </div>
    </div>
  );
};

export default SingleGun;
