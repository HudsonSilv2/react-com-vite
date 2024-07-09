
export const Header = () => {
    return (
        <div className="p-2 m-3">
            <ul className=" text-gray-700 flex items-center justify-evenly ">

                <li className="p-2 h-10 w-20 text-center border border-gray-400 rounded-full hover:bg-gray-400 hover:text-white cursor-pointer">Sobre</li>
                <li className="p-2 h-10 w-20 text-center border border-gray-400 rounded-full hover:bg-gray-400 hover:text-white cursor-pointer">Contatos</li>
                <li className="p-2 h-10 w-20 text-center border border-gray-400 rounded-full hover:bg-gray-400 hover:text-white cursor-pointer">Projetos</li>
                <li className="p-2 h-10 w-20 text-center border border-gray-400 rounded-full hover:bg-gray-400 hover:text-white cursor-pointer">Info</li>
            </ul>
        </div>
    );
}