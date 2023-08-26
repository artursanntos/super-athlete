import { useContext } from "react";
import Button from "./Button";
import { CarrinhoContext } from "../contexts/CarrinhoContext";


interface ProductCardProps {
    nome: string;
    preco: number;
    imagem: string;
}

export default function ProductCard({ nome, preco, imagem }:ProductCardProps) {

    const {carrinho, setCarrinho} = useContext(CarrinhoContext);

    const handleAddProductToCart = async (e: React.FormEvent<HTMLFormElement>) => {
        setCarrinho([...carrinho, {nome: nome, preco: preco, imagem: imagem}])
        e.preventDefault();
    }

    return (
        <>
            <div className="border border-transparent box-content rounded hover:border-gray-200 hover:border-solid duration-300 ease-in-out w-64 p-4 gap-2 flex flex-col items-center">
                <img src={imagem} alt={nome} className="w-48 mb-4 duration-500 ease-in-out hover:scale-[1.03]"/>
                <div className="flex flex-col items-center cursor-default">
                    <p className="text-base font-grotesk font-medium">{ nome }</p>
                    <p className="text-lg font-grotesk font-semibold">R$ {preco}</p>
                </div>
                <form onSubmit={handleAddProductToCart}>
                    <Button type="submit" label="Carrinho"/>
                </form>
                
            </div>
        </>
    )
}