"use client";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Image from "next/image";
import { NavContext } from "@/app/navcontex";

function Homepage() {
  const [bjerseys, setBJerseys] = useState([]);
  const [vjerseys, setVJerseys] = useState([]);
  const [tjerseys, setTJerseys] = useState([]);
  const { setActiveLink, setItemId } = useContext(NavContext);

  useEffect(() => {


    const getBJersey = async () => {
      try {
        const response = await axios.get(
          "https://jerseystore-server.onrender.com/web/products"
        );
        const products = response.data.products;

        // Filter and limit basketball jerseys
        const basketball = products
          .filter((jersey) => jersey.category === "basketball")
          .slice(0, 4);
        setBJerseys(basketball);

        // Filter and limit volleyball jerseys
        const volleyball = products
          .filter((jersey) => jersey.category === "volleyball")
          .slice(0, 4);
        setVJerseys(volleyball);

        // Filter and limit tennis jerseys
        const tennis = products
          .filter((jersey) => jersey.category === "tennis")
          .slice(0, 4);
        setTJerseys(tennis);
      } catch (error) {
        console.log(error);
      }
    };
    getBJersey();
  }, []);

  const handleViewAll = (loc) => {
    setActiveLink(loc);
  }

  const handleViewItem = (id) => {
    setItemId(id);
    setActiveLink("Preview");
  }

  return (
    <>
      <div className="bg-[#dbdbdb]">
        {/* Basketball Jerseys Section */}
        <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
          <div className="flex flex-col sm:flex-row items-start justify-between">
            <div>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-gray-900">
                Latest Basketball Jerseys
              </h2>
              <p className="text-slate-500 italic text-xs">
                Details to details is what makes Jersey Shop different from the
                other themes.
              </p>
            </div>
            <div className="mt-4 sm:mt-0">
              <a onClick={() => { handleViewAll("Product") }} className="bg-[#c0bdd0] p-2 px-3 rounded-md hover:bg-[#37363b] hover:text-white cursor-pointer">
                View All...
              </a>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-6 sm:gap-x-6 sm:gap-y-10">
            {bjerseys.map((jersey) => (
              <a
                onClick={() => { handleViewItem(jersey._id) }}
                key={jersey?._id}
                className="group relative bg-slate-50 p-3 rounded-md shadow-md w-full h-full"
              // onClick={()=>{handleItemClicked(jersey?._id)}}
              >
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <Image
                    src={jersey.image}
                    alt={jersey.name}
                    width={300}
                    height={400}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="mt-4 flex flex-col flex-grow">
                  <div className="flex-grow">
                    <h3 className="text-lg sm:text-xl text-gray-900">
                      <div>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {jersey.name}
                      </div>
                    </h3>
                  </div>
                  <p className=" text-lg sm:text-xl font-medium text-gray-700 mt-auto">
                    &#8369; {jersey.price}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Volleyball Jerseys Section */}
        <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
          <div className="flex flex-col sm:flex-row items-start justify-between">
            <div>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-gray-900">
                Latest Volleyball Jerseys
              </h2>
              <p className="text-slate-500 italic text-xs">
                Details to details is what makes Jersey Shop different from the
                other themes.
              </p>
            </div>
            <div className="mt-4 sm:mt-0">
              <a onClick={() => { handleViewAll("Product") }} className="bg-[#c0bdd0] p-2 px-3 rounded-md hover:bg-[#37363b] hover:text-white cursor-pointer">
                View All...
              </a>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-6 sm:gap-x-6 sm:gap-y-10 overflow-x-auto">
            {vjerseys?.map((jersey) => (
              <a
                onClick={() => { handleViewItem(jersey._id) }}
                key={jersey._id}
                className="group relative bg-slate-50 p-3 rounded-md shadow-md w-full h-full"
              >
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <Image
                    src={jersey.image}
                    alt={jersey.name}
                    width={300}
                    height={400}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="mt-4">
                  <div>
                    <h3 className="text-lg sm:text-xl text-gray-900">
                      <div>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {jersey.name}
                      </div>
                    </h3>
                  </div>
                  <p className="text-lg sm:text-xl font-medium text-gray-700">
                    &#8369; {jersey.price}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Tennis Jerseys Section */}
        <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
          <div className="flex flex-col sm:flex-row items-start justify-between">
            <div>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-gray-900">
                Latest Tennis Jerseys
              </h2>
              <p className="text-slate-500 italic text-xs">
                Details to details is what makes Jersey Shop different from the
                other themes.
              </p>
            </div>
            <div className="mt-4 sm:mt-0">
              <a onClick={() => { handleViewAll("Product") }} className="bg-[#c0bdd0] p-2 px-3 rounded-md hover:bg-[#37363b] hover:text-white cursor-pointer">
                View All...
              </a>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-6 sm:gap-x-6 sm:gap-y-10 overflow-x-auto">
            {tjerseys?.map((jersey) => (
              <a
                onClick={() => { handleViewItem(jersey._id) }}
                key={jersey._id}
                className="group relative bg-slate-50 p-3 rounded-md shadow-md w-full h-full"
              >
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <Image
                    src={jersey.image}
                    alt={jersey.name}
                    width={300}
                    height={400}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="mt-4">
                  <div>
                    <h3 className="text-lg sm:text-xl text-gray-900">
                      <div>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {jersey.name}
                      </div>
                    </h3>
                  </div>
                  <p className="text-lg sm:text-xl font-medium text-gray-700">
                    &#8369; {jersey.price}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;