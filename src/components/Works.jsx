import { WorkComponent } from "./WorkComponent";

export const Works = () => {
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-3xl mt-10 font-medium">
                Trabalhos
            </h1>
            <WorkComponent
                title="Integraodonto - Landing Page"
                description="Uma página única de uma clínica de odontologia 
                contendo elementos informativos e direcionados. Interativo 
                ao clicar sobre um serviço redireciona ao WhatApp para 
                marcar consultas."
                link="https://integrarodonto.com/"
                nameLink="integrarodonto.com"
                imageLink="https://integrarodonto.com/_next/static/media/logo.56e0a0c2.jpg"
            />
            <WorkComponent
                title="Everest - Landing Page"
                description="Uma landing page (página única) referente a um
                preparatório de ENEM. Garante informações e uma
                estilização única para seus visitantes."
                link="https://preparatorioeverest.com.br/"
                nameLink="preparatorioeverest.com.br"
                imageLink="https://preparatorioeverest.com.br/_next/static/media/short-logo-everest.27a365f0.svg"
            />
            <WorkComponent
                title="Cartas aos Ciêntistas - Site Institucional"
                description='Um site referente a um projeto "Cartas aos Cientistas"
                que conecta alunos de escolas públicas a pesquisadores,
                garantindo gerência dos post, notícias e eventos.'
                link="https://www.cartasaoscientistas.com.br/"
                nameLink="cartasaoscientistas.com.br"
                imageLink="https://www.cartasaoscientistas.com.br/images/logo.svg"
            />
        </div>
    );
}