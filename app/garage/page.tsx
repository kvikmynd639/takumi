"use client"
import { useEffect, useState } from "react";
import Head from "next/head";
import AOS from 'aos';
import 'aos/dist/aos.css';

interface CarProps {
  id: number;
  name: string;
  image: string;
  description: string;
  specs: string;
}

const cars: CarProps[] = [
  {
    id: 1,
    name: 'Toyota AE86',
    image: 'https://www.super-hobby.sk/zdjecia/7/8/0/8862_rd.jpg',
    description: 'A legendary car driven by Takumi Fujiwara.',
    specs: 'Engine: 4A-GE, Power: 130 HP, Weight: 950 kg'
  },
  {
    id: 2,
    name: 'Mazda RX-7 FD',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc6PoWCPR88G2ikZr1nXPgmUwOeMjoQmIjKA&s',
    description: 'Driven by Ryosuke Takahashi, leader of the RedSuns.',
    specs: 'Engine: 13B-REW, Power: 255 HP, Weight: 1280 kg'
  },
  {
    id: 3,
    name: 'Nissan Skyline GT-R R32',
    image: 'https://www.modelcar.com/modelcar/AUTOart-Nissan-Skyline-GT-R-R32-Initial-D-Version-77419-front.jpg',
    description: 'Driven by Takeshi Nakazato, leader of the NightKids.',
    specs: 'Engine: RB26DETT, Power: 280 HP, Weight: 1430 kg'
  },
  {
    id: 4,
    name: 'Mazda RX-7 FC',
    image: 'https://mikes-models.co.uk/wp-content/uploads/2023/2/aos-06248_1.jpg',
    description: 'Driven by Keisuke Takahashi, member of the RedSuns.',
    specs: 'Engine: 13B-T, Power: 205 HP, Weight: 1260 kg'
  },
  {
    id: 5,
    name: 'Nissan Silvia S13',
    image: 'https://m.media-amazon.com/images/I/71Ifw43-fdS._AC_UF894,1000_QL80_.jpg',
    description: 'Driven by Iketani Koichiro, a member of the Akina Speed Stars.',
    specs: 'Engine: CA18DET, Power: 175 HP, Weight: 1220 kg'
  },
  {
    id: 6,
    name: 'Nissan 180SX',
    image: 'https://global.discourse-cdn.com/forza/original/4X/8/7/9/879c0055a7c1d841ef0abea766c922f28dd1e584.png',
    description: 'Driven by Kenji, a member of the Akina Speed Stars.',
    specs: 'Engine: SR20DET, Power: 205 HP, Weight: 1240 kg'
  },
  {
    id: 7,
    name: 'Honda Civic EG6',
    image: 'https://i.pinimg.com/736x/25/a4/9a/25a49aefdffa29584aa304d7dc395818.jpg',
    description: 'Driven by Shingo Shoji, a member of the NightKids.',
    specs: 'Engine: B16A, Power: 160 HP, Weight: 1030 kg'
  },
  {
    id: 8,
    name: 'Subaru Impreza WRX STi',
    image: 'https://global.discourse-cdn.com/forza/original/4X/a/4/c/a4cf50a54843c8548554afcb65f44a9e5acf90c7.png',
    description: 'Driven by Bunta Fujiwara, Takumi\'s father.',
    specs: 'Engine: EJ20, Power: 280 HP, Weight: 1350 kg'
  },
  {
    id: 9,
    name: 'Toyota MR2 SW20',
    image: 'https://i.ebayimg.com/images/g/yBQAAOSwUvFfV5Uz/s-l1600.jpg',
    description: 'Driven by Kai Kogashiwa, a skilled racer.',
    specs: 'Engine: 3S-GTE, Power: 245 HP, Weight: 1250 kg'
  },
  {
    id: 10,
    name: 'Toyota Altezza RS200',
    image: 'https://c10.patreonusercontent.com/4/patreon-media/p/post/93039277/affd97c23317436a91635187332a37e0/eyJoIjo1MTgsInciOjkyMH0%3D/1.jpg?token-time=1718668800&token-hash=UCWa8TbUU1KzV-du2kGG1P-KBUWo0V9BQcO-d17GrFM%3D',
    description: 'Driven by Sakamoto, a racer from Tokyo.',
    specs: 'Engine: 3S-GE, Power: 210 HP, Weight: 1350 kg'
  },
  {
    id: 11,
    name: 'Mitsubishi Lancer Evolution III',
    image: 'https://djm-aaa1.kxcdn.com/resources/upload/products/71uhXT8SwJL._AC_SL1500_.jpg',
    description: 'Driven by Kyoichi Sudo, leader of the Emperor team.',
    specs: 'Engine: 4G63T, Power: 270 HP, Weight: 1260 kg'
  },
  {
    id: 12,
    name: 'Mitsubishi Lancer Evolution IV',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0qiZ-ssDhbi3mXzq00es4kn2gue0hcTNZBQ&s',
    description: 'Driven by Seiji Iwaki, member of the Emperor team.',
    specs: 'Engine: 4G63T, Power: 280 HP, Weight: 1360 kg'
  }

];

export default function Garage() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  const [selectedCar, setSelectedCar] = useState<CarProps | null>(null);

  const handleCardClick = (car: CarProps) => {
    setSelectedCar(car);
  };

  const closeModal = () => {
    setSelectedCar(null);
  };

  return (
    <div className="container mx-auto py-12">
      <Head>
        <title>Garage | Initial D Fansite</title>
      </Head>
      <h1 className="text-4xl font-bold text-center mb-8">Garage</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {cars.map((car) => (
          <div
            key={car.id}
            className="relative overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500 cursor-pointer"
            data-aos="fade-up"
            onClick={() => handleCardClick(car)}
          >
            <img src={car.image} alt={car.name} className="w-full h-48 object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <p className="text-white text-lg font-semibold">{car.name}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedCar && (
        <div className="fixed inset-0 bg-slate-800 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg overflow-hidden shadow-xl w-11/12 md:w-2/3 lg:w-1/2">
            <div className="relative">
              <img src={selectedCar.image} alt={selectedCar.name} className="w-full h-64 object-cover" />
              <button className="absolute top-2 right-2 text-white text-xl" onClick={closeModal}>×</button>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">{selectedCar.name}</h2>
              <p className="text-gray-700 mb-4">{selectedCar.description}</p>
              <p className="text-gray-500">{selectedCar.specs}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
