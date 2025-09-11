import { Header } from "./Header"

export const Main = () => {
    return (
        <div className="w-full h-dvh flex flex-col items-center 
                        bg-gradient-to-b from-black via-[#0a0f1f]
                        to-black relative overflow-hidden">

            <div className="absolute top-20 left-20 w-72 h-72 
            bg-green-600/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 
            bg-blue-600/10 rounded-full blur-3xl"></div>

            <Header />

            <div className="flex flex-col items-center mt-44 z-10">
                <h1 className="text-4xl font-semibold text-green-600">
                    Portifólio
                </h1>
                <h3 className="text-2xl font-light">
                    Criando experiências
                </h3>
            </div>
        </div>
    );
}
