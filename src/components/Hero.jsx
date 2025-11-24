import { FiSearch } from "react-icons/fi";
import hero from "/assets/heroImage.png";

export default function Hero() {
  return (
    <div
      className="relative w-full h-[calc(100vh-128px)] bg-cover bg-center"
      style={{ backgroundImage: `url(${hero})` }}
    >
     

      <div className="relative w-full h-full flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-4xl font-bold mb-4">
          Your Trusted Partner For Car Maintenance
        </h1>

        <p className="max-w-2xl mb-6">
          Get transparent pricing on spare parts, find verified mechanics, and
          estimate repair cost with confidence.
        </p>

        <div className="flex bg-white rounded-md overflow-hidden w-full max-w-2xl">
          <input
            type="text"
            placeholder="Search for parts, mechanics or repairs"
            className="flex-1 px-4 py-3 outline-none text-gray-800"
          />
          <button className="bg-blue-600 px-6 text-white font-semibold flex items-center gap-2">
            <FiSearch /> Search
          </button>
        </div>
      </div>
    </div>
  );
}
