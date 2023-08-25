import logo from '../assets/muscle.png'
import cart from '../assets/cart.svg'

export default function Header() {
    return (
        <>
            <header className='bg-white w-screen h-24 flex items-center px-20 border-b justify-between border-gray-200'>
                <div className='flex items-center'>
                    <img src={logo} alt="Logo" className='w-16'/>
                    <p className='text-black text-4xl font-bold ml-4'>SUPER ATHLETE</p>
                </div>
                <img src={cart} alt="Logo" className='w-14 hover:scale-105 duration-200 transition ease-in-out cursor-pointer'/>

            </header>
        </>
    )
}