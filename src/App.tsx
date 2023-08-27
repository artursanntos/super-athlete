import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Header from './components/Header'
import Cart from './pages/Cart';
import { CarrinhoContextProvider } from './contexts/CarrinhoContext';
import Footer from './components/Footer';
import CompraFinalizada from './pages/CompraFinalizada';


export default function App() {

    return (
        <CarrinhoContextProvider>
            <>  
                <Header/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/carrinho' element={<Cart/>}></Route>
                    <Route path='/compra-finalizada' element={<CompraFinalizada/>}></Route>
                </Routes>
                <Footer/>
            </>
        </CarrinhoContextProvider>
    )
}


