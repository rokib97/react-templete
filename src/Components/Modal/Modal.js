import React from "react";

const Modal = ({ data, setData }) => {
  return (
    <>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box text-start">
          <figure>
            <img className="h-96 w-full rounded-lg" src={data.img} alt="Gun" />
          </figure>
          <h2 className="card-title">
            {data.name}
            <div className="badge badge-secondary">{data.action}</div>
          </h2>
          <h2 className="text-2xl">Bullet: {data.bullet}</h2>
          <h2 className="text-2xl">Action: {data.action}</h2>
          <div className="modal-action">
            <label
              onClick={() => setData(null)}
              htmlFor="my-modal-6"
              className="btn"
            >
              Close
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
