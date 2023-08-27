import logo from '../assets/muscle.png'
import cart from '../assets/cart.svg'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <header className='bg-white w-screen h-24 flex items-center px-20 border-b justify-between border-gray-200'>

                <Link to='/'>
                    <div className='flex items-center'>
                        <img src={logo} alt="Logo" className='w-16'/>
                        <p className='text-black text-4xl font-bold ml-4 font-righteous'>SUPER ATHLETE</p>
                    </div>
                </Link>
                <Link to='/carrinho'>
                    <img src={cart} alt="Logo" className='w-14 hover:scale-105 duration-200 transition ease-in-out cursor-pointer'/>
                </Link>
                

            </header>
        </>
    )
}