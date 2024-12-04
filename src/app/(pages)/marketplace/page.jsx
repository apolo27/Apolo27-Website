"use client";
import { useState } from "react";
import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Description, Dialog, DialogPanel, DialogTitle, DialogBackdrop } from '@headlessui/react';

export default function Marketplace() {
  const [isOpen, setIsOpen] = useState(false);
  const categoryBtnStyle = `text-left text-lg font-semibold px-3 py-3 my-5 hover:shadow-lg shadow-white hover:bg-[#666A95] rounded-xl transition-all ease-out`;
  const CategoryEnum = Object.freeze({
    T_SHIRT: "T-Shirt",
    HOODIE: "Hoodie",
    HATS: "Hats",
    ACCESSORIES: "Accessories",
    ALL: "All",
  });

  const [selectedCategory, setSelectedCategory] = useState(CategoryEnum.ALL);
  const [selectedProduct, setSelectedProduct] = useState();

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

  const selectProduct = (product) => {
    setSelectedProduct(product);
    setIsOpen(true);
  }

  return (
    <>
      <div
        className="w-full h-[350px] text-center flex flex-col justify-center border-b border-blue-100"
        style={{
          backgroundImage: `url('/images/marketplace/banner2.jpg')`,
          backgroundPosition: "center center", // Adjust position of image
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <p className="font-extrabold text-white text-8xl pb-2">Apolo 27</p>
        <p className="font-bold text-white text-2xl">
          An outer space clothing catalog
        </p>
      </div>
      <div className="flex flex-row">
        <div className="w-1/4 flex flex-col text-left text-white px-4 py-8 border-r-2 border-blue-100">
          <p className="px-3 text-2xl font-bold">Category</p>
          <button
            className={
              categoryBtnStyle +
              (selectedCategory === CategoryEnum.ALL ? " bg-[#666A95]" : "")
            }
            onClick={() => setSelectedCategory(CategoryEnum.ALL)}
          >
            All
          </button>
          <button
            className={
              categoryBtnStyle +
              (selectedCategory === CategoryEnum.T_SHIRT ? " bg-[#666A95]" : "")
            }
            onClick={() => setSelectedCategory(CategoryEnum.T_SHIRT)}
          >
            T-Shirt
          </button>
          <button
            className={
              categoryBtnStyle +
              (selectedCategory === CategoryEnum.HOODIE ? " bg-[#666A95]" : "")
            }
            onClick={() => setSelectedCategory(CategoryEnum.HOODIE)}
          >
            Hoodie
          </button>
          <button
            className={
              categoryBtnStyle +
              (selectedCategory === CategoryEnum.HATS ? " bg-[#666A95]" : "")
            }
            onClick={() => setSelectedCategory(CategoryEnum.HATS)}
          >
            Hats
          </button>
          <button
            className={
              categoryBtnStyle +
              (selectedCategory === CategoryEnum.ACCESSORIES
                ? " bg-[#666A95]"
                : "")
            }
            onClick={() => setSelectedCategory(CategoryEnum.ACCESSORIES)}
          >
            Accesories
          </button>
        </div>
        <div className="w-3/4 p-8 space-y-5">
          <div className="flex items-center">
            <MagnifyingGlassIcon className="w-12 h-12 pl-5 py-2 text-white text-opacity-50 bg-white bg-opacity-20 rounded-l-xl" />
            <input
              type="text"
              className="px-4 py-3 rounded-r-xl font-semibold w-full bg-white bg-opacity-20 text-white outline-none"
              placeholder="Search for your next fit"
            />
          </div>
          <section className="w-full grid grid-cols-3 gap-10">
            {items
              .filter((item) =>
                selectedCategory !== CategoryEnum.ALL
                  ? item.category === selectedCategory
                  : true
              )
              .map((item, i) => (
                <div
                  key={i}
                  className="space-y-2 text-left items-center w-fit bg-gradient-to-r from-[#2A2A2A] to-[#161A2C] p-5 rounded-xl
                  hover:cursor-pointer"
                  onClick={() => selectProduct(item)}
                >
                  <Image
                    src={"/images/250.png"}
                    width={250}
                    height={250}
                    alt={item.name}
                    className="rounded-xl"
                  />
                  <p className="text-white font-bold">{item.name}</p>
                  <p className="text-white font-semibold">${item.price}</p>
                </div>
              ))}
          </section>
        </div>
      </div>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
      <DialogBackdrop className="fixed inset-0 bg-black/30" />
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
            <DialogTitle className="font-bold">{selectedProduct.name}</DialogTitle>
            <Description>This will permanently deactivate your account</Description>
            <p>Are you sure you want to deactivate your account? All of your data will be permanently removed.</p>
            <div className="flex gap-4">
              <button onClick={() => setIsOpen(false)}>Cancel</button>
              <button onClick={() => setIsOpen(false)}>Deactivate</button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}