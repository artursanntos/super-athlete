import { useState } from "react";
import ProductCard from "../components/ProductCard";


export default function Home() {

    const produtos = [
        {
            key: 0,
            nome: "Creatina Max Titanium 300g",
            preco: 130.75,
            imagem: "src/assets/creatina-max.png"
        },
        {
            key: 1,
            nome: "Camisa Sport Recife 2023",
            preco: 149.99,
            imagem: "src/assets/sport_away.webp"
        },
        {
            key: 2,
            nome: "Pré-Treino Hórus 300g",
            preco: 159.90,
            imagem: "src/assets/horus.png"
        },
        {
            key: 3,
            nome: "Halter 3Kg Pintado - Pintura anti-risco",
            preco: 69.99,
            imagem: "src/assets/halter_3kg.webp"
        },
        {
            key: 4,
            nome: "Luvas para Musculação Neoprene",
            preco: 49.99,
            imagem: "src/assets/luvas.webp"
        },
        {
            key: 5,
            nome: "Estação de Musculação Gx4l - Kikos",
            preco: 15029.82,
            imagem: "src/assets/estacao_musculacao.webp"
        },
        {
            key: 6,
            nome: "Proteções de pulso para musculação - WristWrap",
            preco: 56.99,
            imagem: "src/assets/wristwrap.webp"
        },
        {
            key: 7,
            nome: "Whey 100% Pure - IntegralMedica",
            preco: 105.89,
            imagem: "src/assets/whey100.png"
        },
        {
            key: 8,
            nome: "Headphone JBL Tune 520BT",
            preco: 299.00,
            imagem: "src/assets/headphone.webp"
        },
        {
            key: 9,
            nome: "O Suco",
            preco: 1500.00,
            imagem: "src/assets/suco.png"
        },
    ]

    const [carrinho, setCarrinho] = useState([])

    return (
        <>
            <img src="src\assets\athlete.jpg" alt="Atleta" className="w-fit"/>
            <div className="px-10 py-5 flex flex-wrap justify-center">
                {produtos.map((produto) => (
                    <ProductCard nome={produto.nome} preco={produto.preco} imagem={produto.imagem}/>
                ))}
                
            </div>
        </>
    )
}