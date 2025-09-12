import { Header } from "./Header";
import { RxDoubleArrowDown } from "react-icons/rx";

export const Main = () => {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-between
                        bg-gradient-to-b from-black via-[#0a0f1f]
                        to-black relative overflow-hidden">

            <div className="absolute top-20 left-20 w-72 h-72 
            bg-green-600/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 
            bg-blue-600/10 rounded-full blur-3xl"></div>

            <Header />

            <div className="flex flex-col items-center z-10">
                <h1 className="text-4xl font-semibold text-green-600">
                    Portifólio
                </h1>
                <h3 className="text-2xl font-light">
                    Criando experiências
                </h3>
            </div>

            <RxDoubleArrowDown
                className="text-green-600 mb-5 hover:"
                size={50} />
        </div>
    );
}
