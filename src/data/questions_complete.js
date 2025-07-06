const data = [
  {
    category: "JavaScript",
    questions: [
      {
        question: "Qual destas é uma maneira correta de declarar uma função em JavaScript?",
        options: ["function = minhaFunc()", "def minhaFunc()", "function minhaFunc()", "fun minhaFunc()"],
        answer: "function minhaFunc()",
        tip: "A palavra-chave 'function' é usada para declarações tradicionais.",
      },
      {
        question: "Qual o resultado de: typeof NaN?",
        options: ["number", "NaN", "undefined", "object"],
        answer: "number",
        tip: "Apesar de parecer estranho, NaN é do tipo number.",
      },
      {
        question: "Qual destas é uma estrutura de repetição em JavaScript?",
        options: ["for", "loop", "repeat", "foreach"],
        answer: "for",
        tip: "JavaScript possui 'for', 'while' e 'do...while'.",
      },
      {
        question: "O que o método 'map()' faz em arrays?",
        options: [
          "Filtra elementos",
          "Modifica elementos e retorna um novo array",
          "Ordena elementos",
          "Remove elementos duplicados"
        ],
        answer: "Modifica elementos e retorna um novo array",
        tip: "Ele percorre o array e aplica uma função a cada item.",
      },
      {
        question: "O que é hoisting em JavaScript?",
        options: [
          "Aumento de performance",
          "Elevação de variáveis e funções",
          "Declaração dinâmica de tipos",
          "Descarte de escopo"
        ],
        answer: "Elevação de variáveis e funções",
        tip: "O JS move declarações para o topo do escopo antes da execução.",
      },
    ],
  },
  {
    category: "HTML & CSS",
    questions: [
      {
        question: "Qual tag HTML é usada para criar um link?",
        options: ["<link>", "<href>", "<a>", "<url>"],
        answer: "<a>",
        tip: "A tag 'a' significa 'anchor'.",
      },
      {
        question: "Qual propriedade CSS altera a cor do texto?",
        options: ["color", "background-color", "font-style", "text-color"],
        answer: "color",
      },
      {
        question: "O que o atributo 'alt' faz em uma tag <img>?",
        options: [
          "Alinha a imagem",
          "Define o tamanho",
          "Adiciona texto alternativo",
          "Gira a imagem"
        ],
        answer: "Adiciona texto alternativo",
        tip: "Importante para acessibilidade e SEO.",
      },
    ],
  },
  {
    category: "Back-End",
    questions: [
      {
        question: "Qual linguagem é mais comum no desenvolvimento back-end?",
        options: ["JavaScript", "Python", "HTML", "CSS"],
        answer: "Python",
      },
      {
        question: "Qual dessas é uma estrutura MVC?",
        options: ["React", "Django", "Bootstrap", "jQuery"],
        answer: "Django",
      },
      {
        question: "O que é uma API REST?",
        options: [
          "Interface gráfica",
          "Modelo de banco de dados",
          "Estilo de arquitetura para comunicação entre sistemas",
          "Biblioteca JavaScript"
        ],
        answer: "Estilo de arquitetura para comunicação entre sistemas",
      },
      {
        question: "Qual comando cria um ambiente virtual em Python?",
        options: [
          "python install env",
          "virtualenv venv",
          "pip create env",
          "python3 setup"
        ],
        answer: "virtualenv venv",
      },
      {
        question: "Qual banco de dados é relacional?",
        options: ["MongoDB", "Firebase", "MySQL", "Redis"],
        answer: "MySQL",
      },
    ],
  },
];

export default data;
