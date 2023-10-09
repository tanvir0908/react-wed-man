/* eslint-disable react/prop-types */
export default function SingleWork({ work }) {
  const { image, name, location } = work;

  return (
    <div
      className="text-center w-96"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <img className="rounded-lg" src={image} alt="" />
      <h2 className="text-3xl font-semibold mt-5 mb-2">{name}</h2>
      <p className="text-lg font-medium text-gray-600">{location}</p>
    </div>
  );
}
