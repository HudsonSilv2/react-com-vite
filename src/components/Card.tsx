export const Card = () => {
    return (

        <div className="pt-32 pb-32 h-96 flex items-center justify-center text-center m-12">

            <div className="{`justify-center  bg-no-repeat bg-cover bg-center rounded-lg`} 
style={{ backgroundImage: `url(${bgImage})`}}">
                
            </div>

            <div className="p-10 h-80 w-96 border border-gray-200 items-center justify-center block rounded-3xl bg-gray-200">

                <h2 className="text-3xl pb-9 text-green-700 font-sans font-bold underline">Login</h2>

                <div className="m-2">
                    <input className="p-3 h-9 w-60 text-gray-600 border border-none rounded-md" type="email" placeholder="Digite Seu Email..." required name="email" />
                </div>

                <div>
                    <input className="p-3 h-9 w-60 text-gray-600 border border-none rounded-md" type="password" placeholder="Digite Sua Senha... " required name="email" />
                </div>

                <button className="m-3 h-9 w-60 border border-gray-300 rounded-md bg-green-400 text-white font-bold hover:bg-white hover:text-green-800 hover:border-green-400" >Enviar</button>
            </div>
        </div>

    );
}