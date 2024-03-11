const productos = [
    { id: "1", name: "i7-13700K", price: 420, category: "CPU", img: "https://c1.neweggimages.com/ProductImageCompressAll1280/19-118-414-V01.jpg", seller: "Intel", stock: 25, descripcion: "Procesador de escritorio Intel Core i7-13900K de 13ª generación. Con la tecnología Intel Turbo Boost Max 3.0 y compatibilidad con PCIe 5.0 y 4.0, compatibilidad con DDR5 y DDR4, los procesadores de escritorio Intel Core i7 de 13ª generación desbloqueados están optimizados para jugadores y productividad y ayudan a ofrecer un alto rendimiento. Compatible con placas base basadas en el chipset Intel 700 y Intel 600. Potencia base del procesador de 125 W." },
    { id: "2", name: "RAM DDR4 16GB 3200Mhz", price: 35, category: "RAM", img: "https://mexx-img-2019.s3.amazonaws.com/Memoria-Ram-DDR4-16Gb-3200-Mhz-Kingston-Fury-Beast_40525_1.jpeg", seller: "Kingstone", stock: 45, descripcion: "Mejora tu experiencia de juego con la Memoria RAM Fury Beast de Kingston, diseñada especialmente para gamers. Con una capacidad de 16 GB y una velocidad de 3200 MHz, esta memoria DDR4 SDRAM te permitirá disfrutar de tus juegos favoritos sin interrupciones ni demoras. Su formato UDIMM y sus 288 pines aseguran una fácil instalación y compatibilidad con sistemas AMD e Intel. Además, cuenta con la certificación Intel XMP, lo que garantiza un rendimiento óptimo y estable en tus sesiones de juego. La latencia CAS de 16 y el voltaje de alimentación de 1.35V ofrecen un equilibrio perfecto entre rendimiento y eficiencia energética. No esperes más para llevar tu experiencia gamer al siguiente nivel con la Memoria RAM Fury Beast de Kingston." },
    { id: "3", name: "RTX 4090 24GB", price: 2300, category: "GPU", img: "https://http2.mlstatic.com/D_NQ_NP_683391-MLA53395941627_012023-O.webp", seller: "Nvidia", stock: 15, descripcion: "Tarjeta grafica RTX 4090 desarrollada por NVIDIA, grafica tope de gama perfecta para gaming, edicion de video o imagenes. Cuenta con 24GB de VRAM que sera capaz de cumplir con todo tipo de necesidad o requerimiento a la hora de jugar." },
    { id: "4", name: "Ryzen 7 7700x", price : 300, category: "CPU", img: "https://m.media-amazon.com/images/I/51lXCYo7GkL._AC_SL1500_.jpg", seller: "AMD", stock: 30, descripcion: "Clave en el rendimiento de tu computadora de escritorio, ya no tenés que pensar en cómo distribuir el tiempo y acciones porque ahora las tareas en simultáneo son posibles. En este producto, encontrarás los núcleos, que son los encargados de ejecutar las instrucciones y actividades que le asignás a tu dispositivo. Estos tienen relación directa con dos elementos: los hilos y el modelo. Por lo tanto, a la hora de elegir un procesador, es importante que valores los tres en su conjunto." },
    { id: "5", name: "RAM DDR5 16GB 6000Mhz", price: 100, category: "RAM", img: "https://media.kingston.com/kingston/product/FURY_Renegade_Pro_RDIMM_Black_DDR5_1_angle-zm-lg.jpg", seller: "Kingstone", stock: 20, descripcion: "Contar con una memoria Kingston -sinónimo de trayectoria y excelencia- mejorará la productividad de tu equipo: las páginas se cargarán más rápido y la ejecución de nuevas aplicaciones resultará más ágil y simple. Su capacidad de 16 GB distribuída en módulos de 1 x 16 GB hace de esta memoria un soporte ideal para trabajos con aplicaciones de diseño o edición, juegos exigentes, contenidos multimedia, entre otros."},
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}

export const getProductById = (itemId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.find(prod => prod.id === itemId))
        }, 100)
    })
}