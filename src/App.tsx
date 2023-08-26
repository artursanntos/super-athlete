import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Header from './components/Header'
import Cart from './pages/Cart';
import { CarrinhoContextProvider } from './contexts/CarrinhoContext';


export default function App() {

    return (
        <CarrinhoContextProvider>
            <div className=''>  
                <Header/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/carrinho' element={<Cart/>}></Route>
                </Routes>
            </div>
        </CarrinhoContextProvider>
    )
}


