import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

import images from "../assets/images/images";
import { ProjectCard } from "../components/ProjectCard";
import { ServicesCard } from "../components/ServicesCard";

export function Portifolio() {
    const [isOpen, setIsOpen] = useState(false);

    const arrowRef = useRef(null);

    useEffect(() => {
        gsap.to(arrowRef.current, {
            y: 15,
            repeat: -1,
            yoyo: true,
            duration: 0.8,
            ease: "power1.inOut",
        });
    }, []);

    return (
        <>
            {/* Nav Header */}
            <div className="relative flex items-center text-white-custom w-screen h-16 bg-red-custom shadow-lg">
                {/* navContent */}
                <div className="relative w-[95%] flex items-center justify-end gap-15">
                    {/* Serviços */}
                    <span className="cursor-pointer">Serviços</span>

                    {/* Sobre mim */}
                    <span className="cursor-pointer">Sobre mim</span>

                    {/* Projetos */}
                    <span className="cursor-pointer">Projetos</span>

                    {/* Button download CV */}
                    <button type="button" className="cursor-pointer bg-cv h-10 w-27 rounded-md">Baixar CV</button>

                    {/* Ícone/Bandeira principal */}
                    <img
                        src={images.BR}
                        alt="Selecionar idioma"
                        className="languageIcon w-10 h-10 cursor-pointer"
                        onClick={() => setIsOpen(!isOpen)}
                    />

                    {/* Dropdown de idiomas */}
                    <div
                        className={`dropdown absolute right-0 top-full bg-transparent overflow-hidden transition-all duration-300 ${isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-3 invisible"
                            }`}
                    >
                        <div
                            className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-100 rounded-md"
                            onClick={() => console.log("Mudando para PT-BR")}
                        >
                            <img src={images.BR} alt="PT-BR" className="w-6 h-6" />
                            <span className="text-blue-custom">PT-BR</span>
                        </div>
                        <div
                            className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-100 rounded-md"
                            onClick={() => console.log("Mudando para EN-USA")}
                        >
                            <img src={images.US} alt="EN-USA" className="w-6 h-6" />
                            <span className="text-blue-custom">EN-USA</span>
                        </div>
                        <div
                            className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-100 rounded-md"
                            onClick={() => console.log("Mudando para ES")}
                        >
                            <img src={images.ES} alt="ES" className="w-6 h-6" />
                            <span className="text-blue-custom">ES</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Home Content */}

            {/* Minha foto */}
            <div className="absolute bottom-0 right-0 h-155 w-[35%]">
                <img src={images.BrunoHome} className="h-155" />
            </div>
            {/* Texto */}
            <div className="containerText flex justify-center items-center text-6xl h-[81.8vh] w-[65%]">
                <div className="flex flex-col gap-3">
                    <span>Eleve seu negócio digital a</span>
                    <span>outro nível</span>
                    <span>com um <span className="text-red-custom text-[5rem]">Full Stack</span> de</span>
                    <span>qualidade!</span>
                    <br />
                    <button type="button" className="btnHome cursor-pointer h-10 w-27 rounded-md">Contate-Me</button>
                </div>
            </div>
            {/* Setinha */}
            <div className="h-[8.9vh] flex justify-center bg">
                <img ref={arrowRef} src={images.Arrow} className="h-[85%]" />
            </div>
            <br />
            <br />
            <br />
            {/* Seção de tecnologias  */}
            <div className="w-full overflow-hidden relative">
                <div className="flex gap-5 w-max animate-[scrollLoop_35s_linear_infinite]">
                    {[...Array(6)].flatMap(() =>
                        [
                            images.JS, images.React, images.Tailwind, images.Dart, images.Flutter,
                            images.TS, images.Python, images.Php, images.Node, images.HTML,
                            images.CSS, images.Sass, images.Firebase, images.PowerBI, images.MySql,
                            images.C, images.Git, images.Next, images.Bootstrap, images.Figma,
                            images.Github,
                        ].map((img, index) => (
                            <img key={index} src={img} className="h-10 mx-4" alt="tech-icon" />
                        ))
                    )}
                </div>
            </div>
            {/* Seção sobre mim */}
            <div className="flex grid-cols-2 w-full h-150">
                <div className="flex justify-center items-center w-[40%]">
                    <img src={images.SobreMimImg}></img>
                </div>
                <div className="flex flex-col justify-center items-center w-[60%]">
                    <h1 className="text-red-custom font-bold text-[3rem]">Sobre mim</h1>
                    <br />
                    <div className="w-[70%]">
                        <p className="text-blue-custom font-bold">
                            Olá! Sou <span className="text-red-custom">Bruno de Castro</span>, um desenvolvedor apaixonado por transformar ideias em soluções inovadoras.
                            Com experiência em <span className="text-red-custom">desenvolvimento web, mobile</span> e
                            <span className="text-red-custom"> análise de dados</span>, busco sempre criar produtos que agreguem valor e impulsionem negócios.
                            Minha jornada na tecnologia começou cedo, e ao longo dos anos desenvolvi
                            projetos que vão desde sistemas web escaláveis até aplicativos mobile e
                            dashboards gerenciais para análise de dados.<br /> Gosto de desafios e acredito que a
                            tecnologia é uma poderosa ferramenta para <span className="text-red-custom">resolver problemas</span> e criar
                            oportunidades.<br />
                            Sou movido por aprendizado contínuo e colaboração. Aqui no meu portfólio,
                            você encontrará alguns dos meus principais projetos, onde aplico lógica,
                            performance e usabilidade para entregar experiências eficientes e impactantes.
                            Vamos construir algo incrível juntos? 🚀
                        </p>
                    </div>
                    <br />
                    <br />
                    <button type="button" className="btnHome cursor-pointer bg- h-10 w-27 rounded-md">Baixar CV</button>
                </div>
            </div>
            {/* Seção dos projetos */}
            <div className="flex justify-center w-full h-260">
                <div className="w-[86%] h-[100%]">
                    <h1 className="text-red-custom font-bold text-[3rem]">Projetos</h1>
                    <br />
                    <br />
                    <div className="grid grid-cols-3 gap-10 w-full h-[100%]">
                        <ProjectCard
                            image={images.AvantarIndicaImg}
                            title="Avantar Indica"
                            description="Aplicativo desenvolvido para facilitar a indicação de clientes e recompensar indicadores de forma prática e atrativa. Por meio do app, o indicador pode acessar sua lista de contatos, indicar clientes ao franqueado designado e selecionar os seguros com maior potencial de fechamento.
                            Clique no botão para mais detalhes!"
                        />
                        <ProjectCard
                            image={images.DashboardAvantarImg}
                            title="Dashboard Avantar"
                            description="Uma ferramenta gerencial estratégica desenvolvida com Power BI para análise de dados na franqueadora. Ele consolida informações de plataformas externas, atualizadas automaticamente a cada 30 minutos via API, fornecendo insights em tempo real para a tomada de decisões.  Clique no botáo para mais detalhes!"
                        />
                        <ProjectCard
                            image={images.SouAvantarColaboradorImg}
                            title="Sou Avantar Colaborador"
                            description="Sistema web criado para otimizar as operações do RH. Ele permite que colaboradores tenham acesso rápido e fácil aos seus contra-cheques diretamente pelo celular, enquanto o RH consegue gerenciar todas as operações relacionadas, como criar, visualizar, editar e excluir contra-cheques. Clique no botáo para mais detalhes!"
                        />
                        <ProjectCard
                            image={images.PessoasAvantarImg}
                            title="Pessoas Avantar"
                            description="Um sistema completo de processo seletivo, com foco na análise de perfil tipológico e comportamental. O sistema conta com um teste composto por 69 questões cuidadosamente elaboradas para identificar as características e comportamentos dos candidatos à franquia ou colaboradores. Clique no botáo para mais detalhes!"
                        />
                        <ProjectCard
                            image={images.PainelRedeRSupImg}
                            title="Painel Rede RSup!"
                            description="Uma plataforma administrativa desenvolvida exclusivamente para a equipe interna de uma franqueadora de corretora de seguros. Ele centraliza e organiza informações essenciais para a transmissão de seguros da rede, garantindo um fluxo de trabalho mais eficiente e estruturado. Clique no botáo para mais detalhes!"
                        />
                        <ProjectCard
                            image={images.commingSoonImg}
                            title="Em desenvolvimento..."
                            description="Enquanto esse projeto está sendo criado, que tal pegar um café? Afinal, nenhuma linha de código nasce sem uma boa dose de cafeína! 🚀"
                        />
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            {/* Seção dos Serviçõs Contratáveis */}
            <div className="flex justify-center w-full h-190">
                <div className="w-[86%] h-[100%]">
                    <h1 className="text-red-custom font-bold text-[3rem]">Serviços contratáveis</h1>
                    <br />
                    <br />
                    <div className="grid grid-cols-3 gap-10 w-full h-[40%]">
                        <ServicesCard title="Criação de Sites" description="Tenha um site profissional, moderno e otimizado para SEO! Desenvolvo sites rápidos, responsivos e seguros, perfeitos para destacar sua marca e atrair clientes. Quer um site institucional, blog ou e-commerce? Eu crio a solução ideal para o seu negócio!" />
                        <ServicesCard title="Criação de Landing Pages" description="Aumente suas conversões com uma landing page estratégica e otimizada! Desenvolvo páginas de alta performance, com design impactante e carregamento rápido, perfeitas para capturar leads e gerar vendas. Transforme visitantes em clientes com uma landing page profissional!" />
                        <ServicesCard title="Criação de Sistemas Web" description="Automatize processos e escale seu negócio com um sistema web personalizado! Desenvolvo plataformas robustas e seguras, integradas com bancos de dados e APIs, garantindo eficiência e uma ótima experiência para os usuários." />
                        <ServicesCard title="Criação de Dashboards" description="Transforme dados em decisões inteligentes! Desenvolvo dashboards interativos e dinâmicos para que você acompanhe métricas essenciais do seu negócio em tempo real. Conecte-se a diferentes fontes de dados e visualize insights poderosos em um único lugar!" />
                        <ServicesCard title="Conexão/Consumo de APIs" description="Integre seu sistema com qualquer serviço! Realizo conexões seguras e eficientes com APIs externas, garantindo automação e otimização de processos. Precisa conectar meios de pagamento, CRMs ou qualquer outra API? Eu resolvo para você!" />
                        <ServicesCard title="Criação de Aplicativos" description="Transforme sua ideia em um aplicativo incrível! Desenvolvo apps nativos e híbridos para Android e iOS, com design moderno, alta performance e experiência do usuário impecável. Leve sua marca para a palma da mão dos seus clientes!" />

                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full h-50">
                <div className="w-[86%] h-[100%]">
                    <h1 className="text-red-custom font-bold text-[1.8rem]">Fale comigo</h1>
                    <br />
                    <div className="w-[100%] flex flex-row gap-3 items-center">
                        <img src={images.telephoneImg} />
                        <span className="text-blue-custom font-bold text-[1rem]">+55 33 9 9944-2685</span>
                    </div>
                    <br/>
                    <div className="w-[100%] flex flex-row gap-3 items-center">
                        <img src={images.emailImg} />
                        <span className="text-blue-custom font-bold text-[1rem]">contato@brunocastrodev.com.br</span>
                    </div>
                </div>
            </div>
            <div className="w-full h-6 flex items-center justify-center">
                <span className="text-blue-custom font-bold text-[0.6rem]">© Desenvolvido por Bruno de Castro 2025</span>
            </div>
        </>
    )
}