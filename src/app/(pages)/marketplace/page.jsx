"use client";
import { useState } from "react";
export default function Marketplace() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const itemStyle = `bg-[#121837] border border-[#666A95] text-white text-center rounded-2xl flex flex-col items-center md:items-start`;
const categoryBtnStyle = `px-3 py-2 hover:shadow-lg`
  const CategoryEnum = Object.freeze({
    T_SHIRT: "T-Shirt",
    HOODIE: "Hoodie",
    HATS: "Hats",
    ACCESSORIES: "Accessories",
    ALL: "All",
  });

  const items = [
    // T-Shirts
    {
      id: 1,
      name: "Basic White T-Shirt",
      category: CategoryEnum.T_SHIRT,
      price: 19.99,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Graphic Print T-Shirt",
      category: CategoryEnum.T_SHIRT,
      price: 24.99,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Vintage Logo T-Shirt",
      category: CategoryEnum.T_SHIRT,
      price: 29.99,
      image: "https://via.placeholder.com/150",
    },

    // Hoodies
    {
      id: 4,
      name: "Comfort Fit Hoodie",
      category: CategoryEnum.HOODIE,
      price: 39.99,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      name: "Zip-Up Hoodie",
      category: CategoryEnum.HOODIE,
      price: 44.99,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      name: "Heavyweight Hoodie",
      category: CategoryEnum.HOODIE,
      price: 49.99,
      image: "https://via.placeholder.com/150",
    },

    // Hats
    {
      id: 7,
      name: "Snapback Cap",
      category: CategoryEnum.HATS,
      price: 14.99,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 8,
      name: "Beanie",
      category: CategoryEnum.HATS,
      price: 12.99,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 9,
      name: "Bucket Hat",
      category: CategoryEnum.HATS,
      price: 19.99,
      image: "https://via.placeholder.com/150",
    },

    // Accessories
    {
      id: 10,
      name: "Leather Belt",
      category: CategoryEnum.ACCESSORIES,
      price: 29.99,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 11,
      name: "Sunglasses",
      category: CategoryEnum.ACCESSORIES,
      price: 15.99,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 12,
      name: "Watch",
      category: CategoryEnum.ACCESSORIES,
      price: 99.99,
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <>
      <div
        className="w-full h-[350px] text-center flex flex-col justify-center"
        style={{
          backgroundImage: `url('/images/marketplace/banner2.jpg')`,
          objectPosition: '50%',
          objectFit: "fill"
        }}
      >
        <p className="font-extrabold text-white text-8xl pb-2">Apolo 27</p>
        <p className="font-bold text-white text-2xl">
          An outer space clothing catalog
        </p>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col text-left gap-5 text-white px-4 py-8">
          <p>Category</p>
          <button onClick={() => setCategory(CategoryEnum.ALL)}>All</button>
          <button onClick={() => setCategory(CategoryEnum.T_SHIRT)}>
            T-Shirt
          </button>
          <button onClick={() => setCategory(CategoryEnum.HOODIE)}>
            Hoodie
          </button>
          <button onClick={() => setCategory(CategoryEnum.HATS)}>Hats</button>
          <button onClick={() => setCategory(CategoryEnum.ACCESSORIES)}>
            Accesories
          </button>
        </div>
        <div className="p-8">
          <input type="text" placeholder="search" />
          <section>
            {items.map((item) => {
              <div className={itemStyle}>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={150}
                  height={150}
                />
                <p>{item.name}</p>
                <p>{item.price}</p>
              </div>;
            })}
          </section>
        </div>
      </div>
    </>
  );
}
