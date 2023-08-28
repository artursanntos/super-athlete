import logoWhite from '../assets/muscle-white.png'
import cartWhite from '../assets/cart-white.png'
import { Link } from 'react-router-dom'
import { CarrinhoContext } from '../contexts/CarrinhoContext'
import { useContext, useEffect, useState } from 'react'

export default function Header() {

    const { carrinho } = useContext(CarrinhoContext)

    const [isEmpty, setIsEmpty] = useState(carrinho.length == 0)

    useEffect(() => {
        setIsEmpty(carrinho.length==0)
    }, [carrinho])

    return (
        <>
            <header className='bg-black sticky top-0 w-screen h-24 flex items-center px-20  justify-between z-50 max-md:px-10 max-md:relative'>

                <Link to='/'>
                    <div className='flex items-center'>
                        <img src={logoWhite} alt="Logo" className='w-16'/>
                        <p className='text-white text-4xl font-bold ml-4 font-righteous max-md:text-xl'>SUPER ATHLETE</p>
                    </div>
                </Link>
                <Link to='/carrinho'>
                    <div className='relative hover:scale-105 duration-200 transition ease-in-out cursor-pointer'>
                        <img src={cartWhite} alt="Logo" className='w-14 '/>
                        
                    </div>
                    
                </Link>
                

            </header>
        </>
    )
}