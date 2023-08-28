import thrashRed from '../assets/icons/recycle.png'
import { useContext } from "react"
import { CarrinhoContext } from '../contexts/CarrinhoContext';

interface CartItemProps {
    nome: string;
    preco: number;
    imagem: string;
}

export default function CartItem({nome, preco, imagem}: CartItemProps) {

    const {carrinho, setCarrinho, setProductRemoved} = useContext(CarrinhoContext)

    const handleRemoveProductFromCart = async () => {
        const newCarrinho = [...carrinho];
        const produto = { nome: nome, preco: preco, imagem: imagem };
    
        for (let i = 0; i < newCarrinho.length; i++) {
            if (
                newCarrinho[i].nome === produto.nome &&
                newCarrinho[i].preco === produto.preco &&
                newCarrinho[i].imagem === produto.imagem
            ) {
                newCarrinho.splice(i, 1);
                setProductRemoved(true)
                break; // Remove only one occurrence and exit the loop
            }
        }
        
        setCarrinho(newCarrinho);
    };
    

    return (
        <div className="flex gap-4 p-4 text-lg border border-gray-300 rounded">
            <img src={imagem} alt={nome} className='w-24 rounded'/>
            <div>
                <p>{nome}</p>
                <p>R$ {preco}</p>
            </div>
            <button className='ml-auto' onClick={handleRemoveProductFromCart}>
                <img src={thrashRed} alt="Excluir" className='w-7 p-[0.1rem] rounded duration-500 ease-in-out hover:rotate-12' />
            </button>
        </div>
    )
}