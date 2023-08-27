import { useContext, useEffect, useState } from "react"
import { CarrinhoContext } from "../contexts/CarrinhoContext"
import CartItem from "../components/CartItem"
import Button from "../components/Button"


export default function Cart() {

    const { carrinho,  montante } = useContext(CarrinhoContext)
    const [ roundedMontante, setRoundedMontante ] = useState(parseFloat(montante.toFixed(2)))

    useEffect (() => {
        setRoundedMontante(parseFloat(montante.toFixed(2)))
    }, [montante])

    const isEmpty = carrinho.length == 0

    return(
        <>
            {isEmpty ? (
                <div className="text-2xl flex items-center justify-center h-[79.7vh]">
                    Você não possui itens no seu carrinho
                </div>
            ) : (
                <div className="grid grid-cols-3 p-6 gap-10">
                <div className="flex flex-col col-span-2 gap-2">
                    <h2 className="text-xl mb-4">Aqui estão os itens que você adicionou ao carrinho:</h2>
                    {carrinho.map ((produto) => (
                        <CartItem nome={produto.nome} preco={produto.preco} imagem={produto.imagem}/>
                    ))}
                </div>
                <form className="p-6 rounded-md flex flex-col gap-4">
                    <div className="gap-8 flex text-3xl font-bold">
                        <h2 className=" ">Total:</h2>
                        <h2 className="">R$ {roundedMontante}</h2>
                    </div>
                    <div className="align-self-center">
                        <a href="/compra-finalizada">
                            <Button type="button" label="Finalizar compra"/>
                        </a>
                    </div>
                </form>
            </div> 
            )}
        </>
    )
}