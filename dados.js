let dados = [
    {
        Titulo: "Porto Velho - RO",
        descricao: "Capital de Rondônia, Porto Velho enfrenta constantes ameaças de queimadas devido ao desmatamento e à expansão da agricultura. As consequências incluem perda de biodiversidade, poluição do ar e intensificação do efeito estufa.",
        link: "https://www.inpe.br"
    },
    {
        Titulo: "Cuiabá - MT",
        descricao: "Localizada no Cerrado, Cuiabá sofre com queimadas anuais que afetam a vegetação nativa e a qualidade do ar. As causas incluem a agricultura, a pecuária e as mudanças climáticas.",
        link: "https://www.inpe.br"
    },
    {
        Titulo: "São Paulo - SP",
        descricao: "Mesmo em grandes centros urbanos como São Paulo, as queimadas em regiões próximas podem afetar a qualidade do ar e a saúde da população. A poluição do ar causada pelas queimadas contribui para problemas respiratórios e cardiovasculares.",
        link: "https://www.inpe.br"
    },
    {
        Titulo: "Rio de Janeiro - RJ",
        descricao: "Rio de Janeiro é afetada pela poluição do ar, em especial em áreas urbanas densamente povoadas. As queimadas nas regiões próximas agravam ainda mais a qualidade do ar.",
        link: "https://www.inpe.br"
    },
    {
        Titulo: "Belo Horizonte - MG",
        descricao: "Belo Horizonte, cercada pela Serra do Curral, pode enfrentar problemas relacionados à poluição do ar decorrentes de queimadas em áreas próximas.",
        link: "https://www.inpe.br"
    },
    {
        Titulo: "Manaus - AM",
        descricao: "Manaus sofre com o desmatamento e queimadas na Amazônia, que afetam a biodiversidade local e contribuem para mudanças climáticas globais.",
        link: "https://www.inpe.br"
    },
    {
        Titulo: "Fortaleza - CE",
        descricao: "Fortaleza, situada no semiárido, enfrenta desafios com queimadas ocasionais, que contribuem para a degradação ambiental e afetam a qualidade do ar.",
        link: "https://www.inpe.br"
    },
    {
        Titulo: "Salvador - BA",
        descricao: "Salvador é uma grande cidade costeira, mas as queimadas em áreas rurais podem causar problemas de qualidade do ar na região metropolitana.",
        link: "https://www.inpe.br"
    },
    {
        Titulo: "Brasília - DF",
        descricao: "Brasília, no Cerrado, sofre anualmente com queimadas que degradam o solo e poluem o ar, afetando a saúde dos habitantes da capital.",
        link: "https://www.inpe.br"
    },
    {
        Titulo: "Goiânia - GO",
        descricao: "A capital de Goiás, localizada no bioma Cerrado, enfrenta queimadas provocadas por atividades agropecuárias, afetando a fauna e a flora locais.",
        link: "https://www.inpe.br"
    },
    {
        Titulo: "Curitiba - PR",
        descricao: "Curitiba, famosa por suas áreas verdes, pode ter sua qualidade do ar comprometida em períodos de queimadas nas regiões rurais adjacentes.",
        link: "https://www.inpe.br"
    },
    {
        Titulo: "Recife - PE",
        descricao: "Recife, capital de Pernambuco, é uma cidade costeira, mas ainda assim, queimadas em áreas próximas podem impactar a saúde respiratória dos seus habitantes.",
        link: "https://www.inpe.br"
    },
    {
        Titulo: "Florianópolis - SC",
        descricao: "Florianópolis, localizada em uma ilha, é menos afetada diretamente por queimadas, mas a fumaça de áreas rurais vizinhas pode influenciar a qualidade do ar.",
        link: "https://www.inpe.br"
    },
    {
        Titulo: "Belém - PA",
        descricao: "Belém, próxima à Amazônia, sente os impactos das queimadas no bioma amazônico, que comprometem a saúde pública e o equilíbrio ambiental.",
        link: "https://www.inpe.br"
    },
    {
        Titulo: "Palmas - TO",
        descricao: "Palmas, capital do Tocantins, é uma das cidades mais afetadas por queimadas no bioma Cerrado, especialmente durante a seca, o que prejudica a fauna local.",
        link: "https://www.inpe.br"
    },
    {
        Titulo: "Macapá - AP",
        descricao: "Macapá, no estado do Amapá, enfrenta dificuldades com queimadas ilegais que ocorrem em áreas de preservação, afetando a biodiversidade local.",
        link: "https://www.inpe.br"
    },
    {
        Titulo: "Boa Vista - RR",
        descricao: "Boa Vista, no estado de Roraima, é atingida por queimadas na estação seca, que afetam a vegetação nativa e contribuem para a degradação do solo.",
        link: "https://www.inpe.br"
    },
    {
        Titulo: "Aracaju - SE",
        descricao: "Aracaju, a capital de Sergipe, apesar de ser uma cidade litorânea, também pode ser impactada pela fumaça de queimadas em regiões próximas.",
        link: "https://www.inpe.br"
    },
    {
        Titulo: "Maceió - AL",
        descricao: "Maceió, uma cidade turística, também sofre com os efeitos de queimadas em áreas rurais que afetam a qualidade do ar e a saúde pública.",
        link: "https://www.inpe.br"
    },
    {
        Titulo: "Natal - RN",
        descricao: "Natal, capital do Rio Grande do Norte, enfrenta impactos de queimadas sazonais em áreas próximas, que afetam a vegetação e a qualidade do ar.",
        link: "https://www.inpe.br"
    },
    {
        Titulo: "Teresina - PI",
        descricao: "Teresina, localizada no semiárido nordestino, enfrenta queimadas durante a seca, que poluem o ar e destroem a vegetação nativa.",
        link: "https://www.inpe.br"
    },
    {
        Titulo: "João Pessoa - PB",
        descricao: "João Pessoa, capital da Paraíba, é uma cidade costeira que pode sofrer com a poluição do ar causada por queimadas em áreas rurais próximas.",
        link: "https://www.inpe.br"
    },
    {
        Titulo: "Campo Grande - MS",
        descricao: "Campo Grande, localizada no Mato Grosso do Sul, é impactada por queimadas que acontecem no Pantanal e nas áreas agrícolas adjacentes.",
        link: "https://www.inpe.br"
    },
    {
        Titulo: "Vitória - ES",
        descricao: "Vitória, capital do Espírito Santo, pode ser afetada por queimadas em áreas florestais e rurais, comprometendo a qualidade do ar e a saúde da população.",
        link: "https://www.inpe.br"
    },
    {
        Titulo: "Porto Alegre - RS",
        descricao: "Porto Alegre, capital do Rio Grande do Sul, enfrenta impactos das queimadas em áreas rurais do estado, o que prejudica a qualidade do ar e o meio ambiente.",
        link: "https://www.inpe.br"
    },
    {
        Titulo: "Rio Branco - AC",
        descricao: "Rio Branco, capital do Acre, é duramente afetada pelas queimadas na Amazônia, que destroem florestas e poluem o ar.",
        link: "https://www.inpe.br"
    },
    {
        Titulo: "São Luís - MA",
        descricao: "São Luís, no Maranhão, enfrenta impactos de queimadas em áreas próximas, que afetam o clima e a biodiversidade local.",
        link: "https://www.inpe.br"
    }
]

