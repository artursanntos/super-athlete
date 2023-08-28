import finalizada from '../assets/icons/finalizada.svg'
import Button from '../components/Button'

export default function CompraFinalizada() {

    return(
        <>
            <div className="h-screen flex flex-col justify-center items-center gap-6">
                <div className="text-5xl max-md:text-3xl flex items-center justify-center gap-5">
                    <img src={finalizada} alt="" className='max-md:w-12'/>
                    <p>Compra realizada!</p>
                </div>
                <a href="/"><Button type='button' label='Voltar ao início'/></a>
                
            </div>
        </>
    )
}