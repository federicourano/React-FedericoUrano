const productos = [
    { id: "1", name: "i7-13700K", price: 420, category: "CPU", img: "https://c1.neweggimages.com/ProductImageCompressAll1280/19-118-414-V01.jpg", seller: "Intel", stock: 25, descripcion: "descripccion" },
    { id: "2", name: "RAM DDR4 16GB 3200Mhz", price: 35, category: "RAM", img: "https://mexx-img-2019.s3.amazonaws.com/Memoria-Ram-DDR4-16Gb-3200-Mhz-Kingston-Fury-Beast_40525_1.jpeg", seller: "Kingstone", stock: 45, descripcion: "descripccion" },
    { id: "3", name: "RTX 4090 24GB", price: 2300, category: "GPU", img: "https://http2.mlstatic.com/D_NQ_NP_683391-MLA53395941627_012023-O.webp", seller: "Nvidia", stock: 15, descripcion: "descripccion" },
]

export const getProducts = () => {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(productos)
        }, 500)
    })
}