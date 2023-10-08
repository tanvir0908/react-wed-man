export default function ContactUs() {
  const handleForm = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form
        onSubmit={handleForm}
        className="flex flex-col justify-center items-center"
      >
        <input
          placeholder="Enter your name"
          type="text "
          className="border bg-gray-200 px-3 py-2 rounded w-1/4"
        />
        <br />
        <input
          placeholder="Enter your email"
          type="email"
          className="border px-3 bg-gray-200 py-2 rounded w-1/4"
        />
        <br />
        <input
          placeholder="Subject"
          type="text"
          className="border px-3 bg-gray-200 py-2 rounded w-1/4"
        />
        <br />
        <textarea
          placeholder="Message"
          name=""
          id=""
          cols="30"
          rows="10"
          className="border bg-gray-200 px-3 py-2 rounded w-1/4"
        ></textarea>
        <br />
        <input
          className="border cursor-pointer bg-[#ff69b4] font-medium px-3 py-2 rounded w-1/4"
          type="submit"
        />
      </form>
    </div>
  );
}
