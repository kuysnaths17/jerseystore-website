'use client';
import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios';
import Image from 'next/image';
import { NavContext } from '@/app/navcontex';
import jslogo from '@/app/jslogo.png';
function preview() {
    const { itemId } = useContext(NavContext);
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        const getItemById = async () => {
            try {
                const response = await axios.get(
                    `https://jerseystore-server.onrender.com/web/products/${itemId}`
                );
                setSelectedItem(response.data.product);
            } catch (error) {
                console.error(error);
                setError('Failed to fetch item details. Please try again later.');
            }
        };

        getItemById();
    }, [itemId]); // Add itemId to dependency array




    return (
        <div>
            <div className="w-full md:h-[22rem] h-[10rem] bg-slate-700">
                <div className="flex flex-col items-center justify-center h-full">
                    <p className='text-center md:text-6xl text-4xl font-extrabold text-white'>{selectedItem?.name}</p>
                </div>
            </div>
            {
                selectedItem ? (
                    <a href="">
                        <div className="flex justify-center p-10">
                            <div className='bg-white w-[20rem] h-[30rem] md:w-[40rem] md:h-[50rem] rounded-lg shadow-lg overflow-hidden flex justify-center flex-col'>
                                <div className="flex flex-col items-center justify-start w-full md:h-[40rem] h-[35rem] bg-white">
                                    
                                    <Image
                                        src={selectedItem?.image}
                                        width={300}
                                        height={300}
                                        className="rounded-lg w-full h-full"
                                        alt={selectedItem?.name}
                                    />
                                </div>
                                <div className='bg-gray-600 w-full h-[10rem] overflow-hidden items-center justify-center'>
                                    <p className='text-center font-bold text-3xl md:text-5xl text-white'>View More in app.</p>
                                </div>
                            </div>
                        </div>
                    </a>
                ) : (
                    null
                )
            }
        </div>
    )
}

export default preview