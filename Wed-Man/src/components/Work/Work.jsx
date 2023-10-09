import { useState } from "react";
import SingleWork from "./singleWork";

export default function Work() {
  const [ourWork, setOurWork] = useState([]);

  fetch("/work.json")
    .then((res) => res.json())
    .then((data) => setOurWork(data));

  return (
    <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-5 lg:mx-64">
      {ourWork.map((work) => (
        <SingleWork key={work.id} work={work} />
      ))}
    </div>
  );
}
