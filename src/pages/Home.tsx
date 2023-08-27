import { useContext, useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { CarrinhoContext } from "../contexts/CarrinhoContext";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import CoverImage from "../components/CoverImage";

interface productType {
    "id": number;
    "nome": string;
    "preco": number;
    "imagem": string;
}

export default function Home() {

    const [produtos, setProdutos] = useState<productType[]>([
        {
            "id": 0,
            "nome": "",
            "preco": 0,
            "imagem": ""
        }
    ]);

    const { carrinho, productAdded, setProductAdded } = useContext(CarrinhoContext)

    const handleAddProductToCartToast = () => {
        if (productAdded) {
            toast.success('Produto adicionado ao carrinho!', {
                position: "bottom-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            setProductAdded(false)
        }
    }

    useEffect(() => {
        handleAddProductToCartToast();
    }, [carrinho])

    useEffect(() => {
        fetch('http://localhost:5000/promotions')
        .then((data) => data.json())
        .then((productsData) => {
            setProdutos(productsData);
        });
    }, []);

    return (
        <>
            <Carousel autoPlay infiniteLoop interval={3000} transitionTime={500} showThumbs={false} showStatus={false} swipeable={true}>
                <div>
                    <CoverImage path="src\assets\athlete.jpg" />
                </div>
                <div>
                    <CoverImage path="src\assets\gym.jpg"/>
                </div>
                <div>
                    <CoverImage path="src\assets\weights.webp"/>
                </div>
                <div>
                    <CoverImage path="src\assets\max-titanium-1.webp"/>
                </div>
            </Carousel>
            
            <div className="py-5 flex flex-wrap justify-center">
                {produtos.map((produto) => (
                    <ProductCard nome={produto.nome} preco={produto.preco} imagem={produto.imagem}/>
                ))}
            </div>
            <ToastContainer
                position="bottom-center"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                />
           
        </>
    )
}