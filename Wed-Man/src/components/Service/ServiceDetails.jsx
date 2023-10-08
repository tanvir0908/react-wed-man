/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

export default function ServiceDetails() {
  const { id } = useParams();
  const serviceData = useLoaderData();

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  const targetService = serviceData.find((service) => service.id == id);
  const { name, image, price, details } = targetService;

  return (
    <div className="my-10">
      <h2 className="text-4xl font-semibold mb-10">{name}</h2>
      <div className="mx-32 flex flex-col justify-center items-center">
        <img className="w-2/3 rounded-xl" src={image} alt="" />
        <p className="text-2xl font-bold text-[#ff69b4] mt-10 mb-5">
          Price: {price}
        </p>
        <p className="text-xl font-medium text-gray-600">{details}</p>
        <Link
          to={"/"}
          className="px-20 py-4 duration-300 rounded-lg font-semibold text-lg bg-[#FF69B4] hover:bg-[#FF69B4] text-white hover:text-black mt-5"
        >
          Back Home
        </Link>
      </div>
    </div>
  );
}
