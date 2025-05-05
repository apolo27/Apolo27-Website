"use client"; // Indica que este componente se ejecuta del lado del cliente (Next.js App Router).

// Importaciones de hooks, componentes y recursos
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
import { useTranslations } from "next-intl"; // Para manejar traducciones
import ItemCarousel from "./components/ItemCarousel"; // Carrusel para mostrar imágenes
import { XMarkIcon } from "@heroicons/react/20/solid";
import ItemCarouselNavigateable from "./components/ItemCarouselNavigateable"; // Carrusel con navegación
import { Link } from "../../../../i18n/routing"; // Sistema de rutas internacionalizadas
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Lens } from "../../../../components/magicui/lens"; // Componente para mostrar imágenes en un carrusel

export default function Marketplace() {
  const t = useTranslations("Marketplace"); // Traducciones para el contexto "Marketplace"

  // Estados del componente
  const [searchBar, setSearchBar] = useState(""); // Texto de búsqueda
  const [isOpen, setIsOpen] = useState(false); // Controla si el modal de detalle está abierto

  // Estilo común para los botones de categoría
  const categoryBtnStyle = `w-full max-w-60 text-center text-lg font-semibold py-1 my-2 hover:shadow-lg shadow-white hover:bg-[#666A95] rounded-xl transition-all ease-out`;

  // Enum para categorías de productos
  const CategoryEnum = Object.freeze({
    T_SHIRT: "T-Shirt",
    HOODIE: "Hoodie",
    HATS: "Hats",
    ACCESSORIES: "Accessories",
    ALL: "All",
  });

  // Lista de productos disponibles
  const items = [
    {
      id: 1,
      name: "White Rover T-Shirt",
      description:
        "Camiseta blanca con dibujo técnico de rover HP (Human Powered)...",
      category: CategoryEnum.T_SHIRT,
      images: [
        "/images/marketplace/white-tshirt-front.webp",
        "/images/marketplace/white-tshirt-back.webp",
      ],
    },
    {
      id: 2,
      name: "Black Rover Tshirt",
      description:
        "Camiseta negra con dibujo técnico de rover HP (Human Powered)...",
      category: CategoryEnum.T_SHIRT,
      images: [
        "/images/marketplace/black-tshirt-front.webp",
        "/images/marketplace/black-tshirt-back.webp",
      ],
    },
    {
      id: 7,
      name: "Apolo 27 Cap",
      description: "Gorra blanca con el titulo de Apolo 27...",
      category: CategoryEnum.HATS,
      images: ["/images/marketplace/white-cap.webp"],
    },
    {
      id: 8,
      name: "Fly Me To The Moon Cap",
      description: 'Gorra negra con media Luna y la frase "Fly me to the "...',
      category: CategoryEnum.HATS,
      images: ["/images/marketplace/black-cap.webp"],
    },
  ];

  // Estado para categoría seleccionada y producto seleccionado
  const [selectedCategory, setSelectedCategory] = useState(CategoryEnum.ALL);
  const [selectedProduct, setSelectedProduct] = useState(items[0]);

  // Al seleccionar un producto, se muestra el modal con sus detalles
  const selectProduct = (product) => {
    setSelectedProduct(product);
    setIsOpen(true);
  };

  // Construye el mensaje de WhatsApp al dar clic en el botón de compra
  const buildWhatsAppMessage = (productName) => {
    const message = `Hola!, estoy interesado en este producto: "${productName}".`;
    return encodeURIComponent(message); // Codifica el mensaje para URL
  };

  return (
    <>
      {/* Banner superior con imagen de fondo y título */}
      <div
        className="z-10 w-full h-[400px] p-8 lg:p-0 text-center flex flex-col justify-center border-b border-blue-100"
        style={{
          backgroundImage: `url('/images/marketplace/banner.webp')`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}>
        <p className="font-extrabold text-white text-7xl lg:text-8xl pb-2">
          Apolo 27
        </p>
        <p className="font-bold text-white text-2xl">{t("banner.subtitle")}</p>
      </div>

      {/* Filtro de categorías y productos */}
      <div className="flex flex-col bg-[#121836] justify-center items-center w-full min-h-screen">
        {/* Row: Filters + Search */}
        <div className="w-full flex flex-col lg:flex-row items-start h-full flex-grow">
          {/* Category filters */}
          <div className="flex flex-col text-white h-full min-h-screen w-[15%] bg-[#101321] p-4">
            <p className="px-3 text-2xl font-bold w-full">Filter</p>
            <div className="flex flex-col gap-1 w-full">
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
                    onClick={() => setSelectedCategory(category)}>
                    {category}
                  </button>
                ))}
            </div>
          </div>

          <div className="flex flex-col w-full p-4 ">
            {/* Search bar */}
            <div className="w-full lg:w-[100%]  flex justify-center ">
              <div className="flex items-left mt-4 lg:mt-0">
                <MagnifyingGlassIcon className="w-12 h-12 pl-5 py-2 text-white text-opacity-50 bg-white bg-opacity-20 rounded-l-xl" />
                <input
                  type="text"
                  className="px-4 py-3 rounded-r-xl font-semibold w-full bg-white bg-opacity-20 text-white outline-none"
                  placeholder="Search for your next fit"
                  onChange={(e) => setSearchBar(e.target.value)}
                />
              </div>
            </div>

            {/* Product grid (this stays below the filter row) */}
            <section className="w-[85%] mt-8 grid gap-2 grid-cols-[repeat(auto-fill,minmax(20%,1fr))]  m-auto justify-items-center">
              {items
                .filter((item) =>
                  selectedCategory !== CategoryEnum.ALL
                    ? item.category === selectedCategory
                    : true
                )
                .filter((item) =>
                  item.name.toLowerCase().includes(searchBar.toLowerCase())
                )
                .map((item, i) => (
                  <Card
                    key={i}
                    className="hover:cursor-pointer hover:shadow-lg transition-shadow bg-[#101321] flex flex-col h-full w-full md:max-w-[200px] lg:max-w-[280px]"
                    onClick={() => selectProduct(item)}>
                    <CardHeader className="p-0 relative aspect-[1/1] overflow-hidden">
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="w-full h-full object-cover rounded-t-xl"
                      />
                    </CardHeader>
                    <CardContent className="text-left py-4">
                      <CardTitle className="text-lg text-white">
                        {item.name}
                      </CardTitle>
                      <CardDescription className="text-sm text-white/70 line-clamp-2">
                        {item.description}
                      </CardDescription>
                    </CardContent>
                    <CardFooter className="mt-auto pb-4 justify-start">
                      <Button
                        variant="secondary"
                        OnClick={() => selectProduct(item)}
                        className="text-sm">
                        Ver más
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
            </section>
          </div>
        </div>
      </div>

      {/* Modal para ver detalles del producto */}
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50 w-screen h-screen text-white">
        <DialogBackdrop className="fixed inset-0 bg-black/80" />
        <div className="fixed inset-0 flex w-screen max-w-[1125px] mx-auto items-center justify-center p-4">
          <DialogPanel className="w-screen 2xl:w-full h-screen mt-20 p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {/* Carrusel de imágenes del producto */}
              <div className="max-w-[500px] mx-auto">
                <ItemCarouselNavigateable
                  slides={selectedProduct ? selectedProduct.images : []}
                  options={{ loop: true }}
                />
              </div>

              {/* Detalles del producto */}
              <div className="flex justify-evenly flex-col gap-5">
                <DialogTitle className="font-bold text-2xl xl:text-4xl">
                  {selectedProduct ? selectedProduct.name : "Product Name"}
                </DialogTitle>
                <div>
                  <Description className="font-bold text-2xl">
                    Descripcion del producto:
                  </Description>
                  <hr className="my-1"></hr>
                  <Description className="font-semibold">
                    {selectedProduct.description}
                  </Description>
                </div>

                {/* Botón de cerrar modal */}
                <div className="group absolute top-5 right-10 bg-white rounded-md flex items-center">
                  <button onClick={() => setIsOpen(false)}>
                    <XMarkIcon className="group-hover:text-red-500 w-12 h-12 text-black" />
                  </button>
                </div>

                {/* Botón de compra por WhatsApp */}
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

                {/* Opción alternativa de compra */}
                <Link href=" ">Adquirir de otra manera</Link>
              </div>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
