import React from "react";
import sunImg from "../../assets/planet.jpg";

const Rapidscat = () => {
  return (
    <>
      <section className="bg-primary text-white py-20">
        <div className="container ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div className="space-y-3 xl:pr-36 p-4 border-l-2 border-b-2 border-l-sky-800 border-b-sky-800 ">
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-sky-800 uppercase"
              >
                our mission
              </p>
              <h1
                data-aos="fade-up"
                data-aos-delay="500"
                className="uppercase text-5xl"
              >
                WASP-18b
              </h1>
              <p data-aos="fade-up" data-aos-delay="700">
              WASP-18b is an exoplanet located 325 light-years from Earth. The planet's mass is 10 times that of Jupiter, and it orbits its star once every 23 hours. A 2017 study found that this planet has a stratosphere that's loaded with carbon dioxide, but has no signs of water. A stratosphere is a layer of atmosphere in which temperature increases with higher altitudes. The study used NASA's Spitzer and Hubble space telescopes. https://photojournal.jpl.nasa.gov/catalog/PIA22087
              </p>
              <button
                data-aos="fade-up"
                data-aos-delay="900"
                className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200"
              >
                View All
              </button>
            </div>
            <div data-aos="zoom-in">
              <img
                src={satelitImg}
                alt=""
                className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Rapidscat;
