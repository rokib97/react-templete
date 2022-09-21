import React from "react";
import useGun from "../hooks/useGun";
import SingleGun from "../SingleGun/SingleGun";

const AllGuns = ({ setCartCount }) => {
  const [guns] = useGun();
  return (
    <div>
      <h1 className="text-4xl font-bold mt-12">
        Welcome To <span className="text-warning">John Wick's</span> Gun Store
      </h1>
      <p className="my-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        harum incidunt, obcaecati, soluta laborum molestias et atque repudiandae
        in mollitia hic aspernatur aperiam, quibusdam necessitatibus placeat
        provident quo sint quia.
      </p>
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {guns.map((gun) => (
          <SingleGun gun={gun} key={gun.id} setCartCount={setCartCount} />
        ))}
      </div>
    </div>
  );
};

export default AllGuns;
