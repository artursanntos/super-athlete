import { ReactNode, createContext, useState, Dispatch, SetStateAction, useContext, useEffect } from "react";

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
}

interface CarrinhoProviderProps {
    children: ReactNode
}

export const CarrinhoContext = createContext({} as CarrinhoContextType);

export function CarrinhoContextProvider({ children }: CarrinhoProviderProps) {
    const [carrinho, setCarrinho] = useState<Produto[]>([])
    const [montante, setMontante] = useState<number>(0)

    useEffect(() => {
        let totalMontante = 0;
    
        for (const produto of carrinho) {
            totalMontante += produto.preco;
        }
    
        setMontante(totalMontante);
    }, [carrinho]);
    

    // Ainda falta o local storage
    return (
        <CarrinhoContext.Provider value={{ carrinho, setCarrinho, montante, setMontante }}>
            {children}
        </CarrinhoContext.Provider>
    )

}