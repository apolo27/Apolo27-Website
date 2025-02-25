"use client";
import { useState } from "react";
import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogBackdrop,
} from "@headlessui/react";

import { useTranslations } from "next-intl";

import ItemCarousel from "./components/ItemCarousel";
import { XMarkIcon } from "@heroicons/react/20/solid";

import ItemCarouselNavigateable from "./components/ItemCarouselNavigateable";

import { Link } from "../../../../i18n/routing";

export default function Marketplace() {
  const t = useTranslations("Marketplace");
  const [searchBar, setSearchBar] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const categoryBtnStyle = `w-full max-w-60 text-center text-lg font-semibold py-1 my-2 hover:shadow-lg shadow-white hover:bg-[#666A95] rounded-xl transition-all ease-out`;
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
      name: "White Rover T-Shirt",
      description:
        'Camiseta blanca con dibujo técnico de rover HP (Human Powered) en la espalda con el titulo Apolo 27 debajo. En el lado izquierdo del pecho lleva la frase "Take off to the sky " con un cohete rodeandole.',
      category: CategoryEnum.T_SHIRT,
      images: [
        "/images/marketplace/white-tshirt-front.jpeg",
        "/images/marketplace/white-tshirt-back.jpeg",
      ],
    },
    {
      id: 2,
      name: "Black Rover Tshirt",
      description:
        'Camiseta negra con dibujo técnico de rover HP (Human Powered) en la espalda con el titulo Apolo 27 debajo. En el lado izquierdo del pecho lleva la frase "Take off to the sky " con un cohete rodeandole.',
      category: CategoryEnum.T_SHIRT,
      images: [
        "/images/marketplace/black-tshirt-front.jpeg",
        "/images/marketplace/black-tshirt-back.jpeg",
      ],
    },

    // Hats
    {
      id: 7,
      name: "Apolo 27 Cap",
      description:
        "Gorra blanca con el titulo de Apolo 27 con fondo de crucetas.",
      category: CategoryEnum.HATS,
      images: ["/images/marketplace/white-cap.jpeg"],
    },
    {
      id: 8,
      name: "Fly Me To The Moon Cap",
      description: 'Gorra negra con media Luna y la frase "Fly me to the ".',
      category: CategoryEnum.HATS,
      images: ["/images/marketplace/black-cap.jpeg"],
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState(CategoryEnum.ALL);
  const [selectedProduct, setSelectedProduct] = useState(items[0]);

  const selectProduct = (product) => {
    setSelectedProduct(product);
    setIsOpen(true);
  };

  const buildWhatsAppMessage = (productName) => {
    const message = `Hola!, estoy interesado en este producto: "${productName}".`;
    return encodeURIComponent(message);
  };

  return (
    <>
      <div
        className="z-10 w-full h-[400px] p-8 lg:p-0 text-center flex flex-col justify-center border-b border-blue-100"
        style={{
          backgroundImage: `url('/images/marketplace/banner2.webp')`,
          backgroundPosition: "center center", // Adjust position of image
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <p className="font-extrabold text-white text-7xl lg:text-8xl pb-2">
          Apolo 27
        </p>
        <p className="font-bold text-white text-2xl">{t("banner.subtitle")}</p>
      </div>

      <div className="flex flex-col  bg-[#121836] justify-center items-center md:items-stretch w-full h-full p-4">
        <div className="w-full flex flex-col items-center text-white ">
          <p className="px-3 text-2xl font-bold text-center w-full">
            Filter by
          </p>
          <div className="flex w-full flex-row justify-center gap-5">
            {[
              CategoryEnum.ALL,
              CategoryEnum.T_SHIRT,
              CategoryEnum.HOODIE,
              CategoryEnum.HATS,
              CategoryEnum.ACCESSORIES,
            ]
              .filter(
                (category) =>
                  category === CategoryEnum.ALL ||
                  items.some((item) => item.category === category)
              )
              .map((category, i) => (
                <button
                  key={i}
                  className={
                    categoryBtnStyle +
                    (selectedCategory === category ? " bg-[#666A95]" : "")
                  }
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
          </div>
        </div>

        <div className="w-full space-y-5 max-w-[1125px] mx-auto">
          <div className="flex items-center">
            <MagnifyingGlassIcon className="w-12 h-12 pl-5 py-2 text-white text-opacity-50 bg-white bg-opacity-20 rounded-l-xl" />
            <input
              type="text"
              className="px-4 py-3 rounded-r-xl font-semibold w-full bg-white bg-opacity-20 text-white outline-none"
              placeholder="Search for your next fit"
              onChange={(e) => setSearchBar(e.target.value)}
            />
          </div>
          <section className="w-full grid grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
            {items
              .filter((item) =>
                selectedCategory !== CategoryEnum.ALL
                  ? item.category === selectedCategory
                  : true
              )
              .filter((item) => item.name.toLowerCase().includes(searchBar))
              .map((item, i) => (
                <div
                  key={i}
                  className="space-y-2 items-center p-1 bg-black rounded-xl
                  hover:cursor-pointer z-10 text-center"
                  onClick={() => selectProduct(item)}
                >
                  <ItemCarousel slides={item.images} />
                  <p className="text-black font-bold text-sm md:text-base lg:text-lg py-3 bg-white rounded-xl">
                    {item.name}
                  </p>
                </div>
              ))}
          </section>
        </div>
      </div>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50 w-screen h-screen text-white"
      >
        <DialogBackdrop className="fixed inset-0 bg-black/80" />
        <div className="fixed inset-0 flex w-screen max-w-[1125px] mx-auto items-center justify-center p-4">
          <DialogPanel className="w-screen 2xl:w-full h-screen mt-20 p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <div className="max-w-[500px] mx-auto">
                <ItemCarouselNavigateable
                  slides={selectedProduct ? selectedProduct.images : []}
                  options={{ loop: true }}
                />
              </div>
              <div className="flex justify-evenly flex-col gap-5">
                <DialogTitle className="font-bold text-2xl xl:text-4xl">
                  {selectedProduct ? selectedProduct.name : "Product Name"}
                </DialogTitle>
                <div>
                  <Description className="font-bold text-2xl">
                    Descripcion del producto:
                    <hr className="my-1"></hr>
                  </Description>
                  <Description className="font-semibold">
                    {selectedProduct.description}
                  </Description>
                </div>
                <div className="group absolute top-5 right-10 bg-white rounded-md flex items-center">
                  <button onClick={() => setIsOpen(false)}>
                    <XMarkIcon className="group-hover:text-red-500 w-12 h-12 text-black" />
                  </button>
                </div>
                <div className="flex items-center gap-5">
                  <p className="font-bold text-lg">Ordenar ahora:</p>
                  <Image
                    src={"/images/marketplace/WhatsAppButtonGreenMedium.svg"}
                    alt="whatsapp logo"
                    width={200}
                    height={10}
                    className="hover:cursor-pointer hover:scale-105 transition-all"
                    onClick={() =>
                      window.open(
                        `https://wa.me/18293671803/?text=${buildWhatsAppMessage(
                          selectedProduct.name
                        )}`,
                        "_blank"
                      )
                    }
                  />
                </div>
                <Link href=" ">Adquirir de otra manera</Link>
              </div>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
