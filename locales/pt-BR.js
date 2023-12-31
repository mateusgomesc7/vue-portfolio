export default {
    components: {
        default: {
            footer: {
                developed: "Desenvolvido por "
            },
            navbar: {
                projects: "Projetos",
                about_me: "Sobre mim",
                contact: "Contato"
            },
        },
        aboute_me: {
            card_about_me: {
                btn_resume: "Currículo",
                first_paragraph: "Meu nome é Mateus Gomes, sou um <strong>Engenheiro de Software</strong> quase 4 anos de experiência.",
                second_paragraph: "Tenho especial interesse em codificação criativa e no desenvolvimento de softwares que impactem positivamente a vida das pessoas.",
                third_paragraph: "Trabalhei no desenvolvimento de aplicações web e desktop, utilizando tecnologias como <strong>Vue</strong>, <strong>Nuxt</strong>, <strong>Flask</strong>, <strong>IA</strong> e <strong>Visão Computacional</strong>.",
                fourth_paragraph: "Estou sempre curioso para aprender mais quando o assunto é novas tecnologias e que promovam a automação de processos."
            },
            timeline: {
                years: {
                    text_2016_2021: "Durante a graduação em Engenharia Elétrica, conheci minha primeira linguagem de programação, <strong>C</strong>. Adquiri conhecimentos sobre estruturas de dados, redes e arquiteturas de computadores. Participei também de diversos projetos utilizando <strong>Python</strong>, <strong>JavaScript</strong>, <strong>banco de dados</strong>, entre outras tecnologias. Nesse período, iniciei meu estágio em <strong>Desenvolvimento Web</strong>.",
                    text_2022: "Fui promovido de estagiário para Junior, adquirindo mais experiência em <strong>Desenvolvimento Web</strong> e <strong>Desktop</strong> com <strong>Vue.js</strong>, <strong>Nuxt.js</strong>, <strong>Flask</strong> e <strong>PyQt</strong>. Aperfeiçoei boas práticas de programação e aumentei a autonomia em tomadas de decisões nos projetos. Além disso, concluí meu TCC na área de <strong>Visão Computacional</strong>.",
                    text_2023: "Assumi a posição desafiadora de Líder Técnico, onde fui responsável pela definição de arquitetura de software, gerenciamento de projeto e liderança de equipe. Aprimorei minhas habilidades de comunicação ao interagir diretamente com clientes e a equipe. Dedicado na utlização de tecnologias com <strong>IA</strong>, <strong>PyQt</strong> e <strong>Visão Computacional</strong>.",
                }
            }
        },
        contact: {
            email_field: {
                tooltip: {
                    copy: "Copiar",
                    copied: "Copiado!",
                    can_not_copy: "Não é possível copiar o e-mail em uma conexão não segura!"
                }
            }
        },
        home: {
            presentation: {
                title: "Olá, eu sou",
                subtitle: "Engenheiro de Software",
                btn_about_me: "Sobre mim",
                btn_projects: "Projetos"
            },
        },
        projects: {
            card_project: {
                btn_open: "Abrir",
                btn_open_project: "Abrir projeto",
                btn_source_code: "Código fonte",
                illustrative_image: "Imagem ilustrativa"
            },
            search: {
                search_by_technologie: "Pesquisar por tecnologia"
            }
        },
    },
    pages: {
        about_me: {
            title: "Sobre mim"
        },
        contact: {
            title: "Contato",
            subtitle: "Se você tiver alguma pergunta, oportunidade de trabalho ou simplesmente quiser bater um papo, sinta-se à vontade:",
        },
        projects: {
            title: "Projetos"
        }
    },
    data: {
        projects: {
            project_1: {
                title: "Automação de Leitura e Testes",
                description: "Parceria entre as empresas <strong>Assert</strong> e <strong>LANDIS+GYR</strong>. Sistema desenvolvido para a automação de leitura e testes de medidores de energia elétrica,  com a capacidade de agregar e exibir os resultados em tempo real. Com a utilização de tecnologias como <strong>Machine Learning</strong>, <strong>OCR</strong>, <strong>Python</strong>, <strong>PyQt</strong> e <strong>PostgreSQL</strong>.",
            },
            project_2: {
                title: "Controle de Medidores Inteligentes",
                description: "Parceria entre as empresas <strong>Assert</strong> e <strong>LANDIS+GYR</strong>. Aplicativo web desenvolvido tecnologias como <strong>Vue.js</strong> (<strong>Nuxt.js</strong>) e <strong>Flask</strong>, para aprimorar o gerenciamento automatizado de testes de medidores elétricos."
            },
            project_3: {
                title: "Controle de Fluxo de Pagamento",
                description: "Parceria entre as empresas <strong>Assert</strong> e <strong>Foxconn</strong>. Aplicativo desenvolvido utilizando tecnologias como <strong>Vue.js</strong> (<strong>Nuxt.js</strong>) e <strong>Flask</strong>, para simplificar e gerenciar fluxos de pagamento complexos através de vários estágios. Este projeto ofereceu uma solução sofisticada para monitorar e controlar os processos de pagamento, garantindo uma gestão eficiente desde o início até a conclusão."
            },
            project_4: {
                title: "Veículo Autônomo",
                description: "Um veículo autônomo construído com um <strong>Raspberry Pi</strong> de baixo poder computacional utilizando visão computacional para a tomada de decisões, como seguir a trajetória da pista e reconhecer semáforos. Desenvolvido como parte do meu TCC. Para essa finalidade, emprega os algoritmos <strong>Haar Cascade</strong> para identificação e um algoritmo de <strong>Árvore de Decisão</strong>.",
                external_link: {
                    name: "Documento"
                }
            },
            project_5: {
                title: "Projeto 5",
                description: "Descrição do projeto 5"
            },
            project_6: {
                title: "Projeto 6",
                description: "Descrição do projeto 6"
            },
            project_7: {
                title: "Projeto 7",
                description: "Descrição do projeto 7"
            },
            project_8: {
                title: "Projeto 8",
                description: "Descrição do projeto 8"
            },
            project_9: {
                title: "Projeto 9",
                description: "Descrição do projeto 9"
            },
            project_10: {
                title: "Projeto 10",
                description: "Descrição do projeto 10"
            },
        }
    }
}