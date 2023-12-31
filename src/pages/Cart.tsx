import { useContext, useEffect, useState } from "react"
import { CarrinhoContext } from "../contexts/CarrinhoContext"
import CartItem from "../components/CartItem"
import Button from "../components/Button"
import { ToastContainer, toast } from "react-toastify"


export default function Cart() {

    const { carrinho, setCarrinho,  montante, productRemoved, setProductRemoved } = useContext(CarrinhoContext)
    const [ roundedMontante, setRoundedMontante ] = useState(parseFloat(montante.toFixed(2)))

    useEffect (() => {
        setRoundedMontante(parseFloat(montante.toFixed(2)))
    }, [montante])

    const isEmpty = carrinho.length == 0

    const handleRemoveProductFromCartToast = () => {
        if (productRemoved) {
            toast.success('Produto removido! Desfazer?', {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            setProductRemoved(false)
        }
    }

    useEffect(() => {
        handleRemoveProductFromCartToast();
    }, [carrinho])

    const [auxCarrinho, setAuxCarrinho] = useState(carrinho)

    const handleUndoEmptyCart = () => {
        setCarrinho(auxCarrinho)
    }

    const handleEmptyCart = () => {
        setAuxCarrinho(carrinho)
        setCarrinho([])
        toast.success('Carrinho vazio! Desfazer?', {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        setProductRemoved(false)
    }

    return(
        <>
            {isEmpty ? (
                <div className="flex flex-col items-center justify-center h-screen gap-4">
                    <div className="text-2xl max-md:text-xl">
                        Você não possui itens no seu carrinho
                    </div>
                    <a href="/">
                        <Button type="button" label="Ir às compras"/>
                    </a>        
                </div>
                
            ) : (
                <div className="grid grid-cols-3 p-6 gap-10 min-h-screen max-md:flex max-md:flex-col">
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
                        <div className="align-self-center flex gap-4">
                            <a href="/compra-finalizada">
                                <Button type="button" label="Finalizar compra"/>
                            </a>
                            <button onClick={handleEmptyCart}>
                                <Button type="button" label="Esvaziar carrinho"/>
                            </button>
                        </div>
                    </form>
            </div> 
            )}
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
                onClick={handleUndoEmptyCart}/>
        </>
    )
}