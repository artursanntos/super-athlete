import { ReactNode, createContext, useState, Dispatch, SetStateAction, useEffect } from "react";

interface Produto {
    nome: string;
    preco: number;
    imagem: string;
}

interface CarrinhoContextType {
    carrinho: Produto[]
    setCarrinho: Dispatch<SetStateAction<Produto[]>>
    montante: number
    setMontante: Dispatch<SetStateAction<number>>
    productAdded: boolean
    setProductAdded: Dispatch<SetStateAction<boolean>>
    productRemoved: boolean
    setProductRemoved: Dispatch<SetStateAction<boolean>>
}

interface CarrinhoProviderProps {
    children: ReactNode
}

export const CarrinhoContext = createContext({} as CarrinhoContextType);

export function CarrinhoContextProvider({ children }: CarrinhoProviderProps) {
    const [carrinho, setCarrinho] = useState<Produto[]>([])
    const [montante, setMontante] = useState<number>(0)
    const [productAdded, setProductAdded] = useState<boolean>(false)
    const [productRemoved, setProductRemoved] = useState<boolean>(false)


    useEffect(() => {
        let totalMontante = 0;
    
        for (const produto of carrinho) {
            totalMontante += produto.preco;
        }
    
        setMontante(totalMontante);
    }, [carrinho]);
    

    return (
        <CarrinhoContext.Provider value={{ carrinho, setCarrinho, montante, setMontante, productAdded, setProductAdded, productRemoved, setProductRemoved }}>
            {children}
        </CarrinhoContext.Provider>
    )

}