import './main.css'
import { Modal } from './modal'
import { Sidebar } from './sidebar'
import { ProductsList } from './products-list'

const modalHandler = Modal()
const sidebarHandler = Sidebar()
const productsList = ProductsList()

const products = [
   {name: "Xiaomi Redmi Note 11 Graphite Gray 6GB Ram 128GB Rom",
    Marca: "Xiaomi",
    disccount: "10%",
    price: "R$ 1.999,00",
    payment: "Em até 12x sem juros",
    description: "Smartphone Xiaomi Redmi Note 11 Dual 128gb 6gb Ram - GrafiteGray/cinza - Global Tela AMOLED Mergulhe em um mundo de maravilhasA tela retroiluminada oferece o que há de mais moderno em brilho,contraste, calibração de cores e resolução. Taxa de atualização de90Hz Ecrã e ecrã tátil sem falhas Desfrute do seu conteúdo com umataxa de atualização suave e ininterrupta de 90Hz. Navegue semproblemas em suas redes sociais ou experimente uma jogabilidade poderosa e responsiva.",
    thumbnail: "https://m.media-amazon.com/images/I/51e3KdrHuCL._AC_SX679_.jpg",
    link: "produto1.html"},

    {name: "Smartphone Samsung Galaxy A23 Azul 128GB 4GB RAM bateria 5000mAh Câmera Quádrupla Traseira de 50MP",
    Marca: "Samsung",
    disccount: "10%",
    price: "R$ 2.500,00",
    payment: "Em até 12x sem juros",
    description: "O novo Galaxy A23 combina cores elegantes e suavidade ao toque.",
    thumbnail: "https://m.media-amazon.com/images/I/716+SQdPpQL._AC_SX679_.jpg",
    link: "produto2.html"},

     {name: "Apple iPhone 11 (64 GB) Branco",
     Marca: "Apple",
     disccount: "10%",
     price: "R$ 3.999,00",
     payment: "Em até 12x sem juros",
     description: "Tudo na medida certa. Novo sistema de câmera e bateria que dura o dia todo.",
     thumbnail: "https://m.media-amazon.com/images/I/71kZfQA-Y7L._AC_SX679_.jpg",
     link: "produto3.html"}

    
]

productsList.render(products)
modalHandler.init()
sidebarHandler.init()
