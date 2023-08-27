


export default function Footer() {

    const about = "Dê as boas-vindas à sua jornada de superação conosco! Somos seu parceiro dedicado em alcançar o máximo potencial esportivo e vitalidade. Seja você um atleta experiente ou iniciante, estamos aqui para apoiar cada passo em direção ao sucesso. Junte-se a nós e trilhe o caminho da transformação, impulsionado pela determinação e pelo entusiasmo. Sua busca pela excelência começa agora."

    return(
        <footer className="bg-gray-900 text-gray-200 mt-auto border-t border-orange-400 p-2 text-center w-screen mb-0 border-b-0">
            <div className="grid grid-cols-3 justify-center p-4 max-md:flex max-md:flex-col max-md:gap-5">
                <div className="col-span-1 flex flex-col">
                    <p className="text-lg mb-4">Contato</p>
                    <p>contato@superathlete.com.br</p>
                </div>
                <div className="col-span-1 flex flex-col  gap-4 px-5">
                    <p className="text-lg">Sobre</p>
                    <p className="text-justify">{about}</p>
                </div>
                <div className="col-span-1 flex flex-col gap-4 px-5">
                    <p className="text-lg">Endereço</p>
                    <p>123 Avenida Imaginária, Cidade Fictícia, Estado dos Sonhos, CEP: 12345-678</p>
                </div>
            </div>
            <p className="mt-6">
                © 2023 Super Athlete - Todos os direitos reservados
            </p>
            
        </footer>
    )
}