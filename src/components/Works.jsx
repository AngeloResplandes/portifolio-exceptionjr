export const Works = () => {
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-3xl my-6">
                Trabalhos
            </h1>
            <h1 className="w-5/6 text-xl font-semibold text-green-600 my-5">
                Integraodonto - Landing Page
            </h1>
            <p className="w-5/6 font-light text-justify mb-3">
                Uma página única de uma clínica de odontologia
                contendo elementos informativos e direcionados.
                Interativo ao clicar sobre um serviço redireciona ao
                WhatApp para marcar consultas
            </p>
            <p className="w-5/6 font-light text-justify mb-3">
                Link: <a href="https://integrarodonto.com/"
                    className="text-blue-500 underline">
                    https://integrarodonto.com/
                </a>
            </p>
        </div>
    );
}