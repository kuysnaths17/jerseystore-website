import React, { useState, useEffect, useContext } from 'react';
import axios from "axios";
import Image from "next/image";
import { NavContext } from "@/app/navcontex";

function Products() {
  const [jerseys, setJerseys] = useState([]);
  const { setActiveLink, setItemId } = useContext(NavContext);

  useEffect(() => {
    const getBJersey = async () => {
      try {
        const response = await axios.get(
          "https://jerseystore-server.onrender.com/web/products"
        );
        const products = response.data.products;

        setJerseys(products);
      } catch (error) {
        console.log(error);
      }
    };
    getBJersey();
  }, []);

  const handleViewItem = (id) => {
    setItemId(id);
    setActiveLink("Preview");
  }
  return (
    <>
      <div className="w-full md:h-[22rem] h-[10rem] bg-slate-700 relative">
        <div className="flex flex-col items-center justify-center h-full">
          <p className='text-center md:text-6xl text-4xl font-extrabold text-white'>Check Our Design Products</p>
        </div>
      </div>
      <div className="bg-[#dbdbdb]">
        {/* Basketball Jerseys Section */}
        <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center">
            <div className='text-center'>
              <h2 className="md:text-5xl text-4xl sm:text-4xl font-bold tracking-tight text-gray-900">
                Our Latest Products
              </h2>
              <p className="text-slate-500 italic md:text-2xl text-sm">
                Check out all of our products
              </p>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-6 sm:gap-x-6 sm:gap-y-10">
            {jerseys.map((jersey) => (
              <a
                onClick={() => { handleViewItem(jersey._id) }}
                key={jersey?._id}
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
      </div>
    </>
  );
}

export default Products