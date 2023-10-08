import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Service from "../Service/Service";
import Work from "../Work/Work";
import ContactUs from "../ContactUs/ContactUs";

export default function Home() {
  const servicesData = useLoaderData();

  return (
    <div>
      <div>
        <Banner />
      </div>
      {/* Services Section */}
      <div>
        <h2 className="text-6xl my-5 font-bold text-[#FF69B4]">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {servicesData.map((data) => (
            <Service key={data.id} data={data} />
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-6xl mt-10 mb-5 font-bold text-[#FF69B4]">
          Our Work
        </h2>
        <Work />
      </div>
      <div>
        <h2 className="text-6xl mt-10 mb-10 font-bold text-[#FF69B4]">
          Contact Us
        </h2>
        <ContactUs />
      </div>
    </div>
  );
}
