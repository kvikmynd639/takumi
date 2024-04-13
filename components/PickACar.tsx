// pages/PickACar.tsx
import React from 'react';

const PickACar: React.FC = () => {
  return (
    <main className="container flex justify-center items-center px-4 py-4 w-full bg-slate-800">

      <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-4 p-4 h-100">
        <section className="card">
          <div className="product-image">
            <img src="https://i.pinimg.com/originals/62/07/49/620749201e9aec19505e6bfcebe8731c.jpg" alt="OFF-white Red Edition" draggable={false} />
          </div>
          <div className="product-info">
            <h2 className="font-semibold text-xl">Toyota Trueno AE86</h2>
            <p className="text-sm">The 10: Air Jordan 1 off-white - Chicago</p>
            <div className="price text-lg font-semibold">$999</div>
          </div>
          <div className="btn flex justify-center items-center mt-3">
            <button className="buy-btn inline-block bg-gray-800 text-white px-6 py-2 rounded-md font-semibold transition duration-300 ease-in-out hover:bg-gray-700">
              Buy Now
            </button>
            <button className="fav ml-3 inline-flex items-center justify-center bg-white border border-black rounded-full w-10 h-10">
              <svg className="svg" id="i-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
                <path d="M16 2 L20 12 30 12 22 19 25 30 16 23 7 30 10 19 2 12 12 12 Z" />
              </svg>
            </button>
          </div>
        </section>
      </div>

      <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-4 p-4 h-100">
        <section className="card">
          <div className="product-image">
            <img src="https://i.pinimg.com/originals/62/07/49/620749201e9aec19505e6bfcebe8731c.jpg" alt="OFF-white Red Edition" draggable={false} />
          </div>
          <div className="product-info">
            <h2 className="font-semibold text-xl">Toyota Trueno AE86</h2>
            <p className="text-sm">The 10: Air Jordan 1 off-white - Chicago</p>
            <div className="price text-lg font-semibold">$999</div>
          </div>
          <div className="btn flex justify-center items-center mt-3">
            <button className="buy-btn inline-block bg-gray-800 text-white px-6 py-2 rounded-md font-semibold transition duration-300 ease-in-out hover:bg-gray-700">
              Buy Now
            </button>
            <button className="fav ml-3 inline-flex items-center justify-center bg-white border border-black rounded-full w-10 h-10">
              <svg className="svg" id="i-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
                <path d="M16 2 L20 12 30 12 22 19 25 30 16 23 7 30 10 19 2 12 12 12 Z" />
              </svg>
            </button>
          </div>
        </section>
      </div>
      <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-4 p-4 h-100">
        <section className="card card-blue">
          <div className="product-image">
            <img src="https://64.media.tumblr.com/19369ff73f12ce2759449e3f406a2ce0/1d459a64bdf7638e-12/s500x750/0b356bb06db1370fc716ccb0804ea03a6e358655.png" alt="OFF-white Blue Edition" draggable={false} />
          </div>
          <div className="product-info">
            <h2 className="font-semibold text-xl">RX</h2>
            <p className="text-sm">Air Jordan 1 Retro High "Off-White - UNC" sneakers</p>
            <div className="price text-lg font-semibold">$1599</div>
          </div>
          <div className="btn flex justify-center items-center mt-3">
            <button className="buy-btn inline-block bg-gray-800 text-white px-6 py-2 rounded-md font-semibold transition duration-300 ease-in-out hover:bg-gray-700">
              Buy Now
            </button>
            <button className="fav ml-3 inline-flex items-center justify-center bg-white border border-black rounded-full w-10 h-10">
              <svg className="svg" id="i-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
                <path d="M16 2 L20 12 30 12 22 19 25 30 16 23 7 30 10 19 2 12 12 12 Z" />
              </svg>
            </button>
          </div>
          

          
        </section>
      </div>
    </main>
  );
};

export default PickACar;
