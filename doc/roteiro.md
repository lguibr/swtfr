#### Este roteiro é uma descrição do processo de desenvolvimento deste projeto, com objetivo explicitar suas inspirações, motivações e dores.



------



## Desafio

Little Luke, um garoto de 12 anos é alucinado com o universo de Star Wars. Seu pai,
Anaquinho, com o objetivo de trazer seu filho para o lado escuro da força, resolveu criar
um website para seu padawan. Porém Anaquinho somente conseguiu montar uma API
e não sabia como fazer uma visualização desses dados. Para isso, Anaquinho pediu sua
ajuda para construir um projeto em React a partir da API criada. A API disponibilizada é
a seguinte: https://swapi.co e que a força esteja com você, Jedi!
Dados avaliados:

1. Chamada de API
2. Criatividade
3. Boas práticas
4. GIT
5. Documentação

### Orientações

A nossa avaliação é subjetiva e por isto te damos a liberdade de escolher a forma como
você quer representar os dados. Avaliamos que o tempo médio para terminar o foco
principal desta tarefa (representar ao menos uma informação obtida pela API como um
componente react) é de 4 horas.

Sugestão: Caso não tenha familiaridade com construção de projetos, sugerimos usar o
create-react-app ;)

*Obs: Será avaliado o que for entregue. Importante documentar as dores e dificuldades
( caso haja :) )



------



## Roteiro

Este roteiro será mais informal e pessoal para poder explicitar a linha de pensamento, e será dividido em topicos/passos que serão ordenados de forma cronologica.



### Primeiro acesso

O primeiro impulso ao receber o desafio foi acessar a API proposta, achei muito legal a ideia de uma API publica para fins pedagogicos ainda mais com uma tematica do universo pop que eu adoro e sobre o Django que é uma ferramenta que eu também adoro.

Primeiros pontos que me chamaram atenção foi a estrutura das urls que me pareceu REST,  e o tipo de estrutura de dados que as requisições receberia; A api contém 6 entidades modelo sendo People, Planets, Films, Species, Vehicles e Starships. Os modelos desta API só contém 3 tipos de dados que são strings, numeros e lista de urls.

### Primeiro Rascunho

![](https://i.imgur.com/3lIQDMI.jpg)

A primeira ideia foi usar material design e cards para expor as informações de cada uma das propriedades dos modelos expostos pela API, expostos em 3 tipos de card um maior para lista de links que é uma informação mais extensa, um card mediano para expor dados em strings e um ultimo card menorzinho para expor numeros uma vez que os numeros não apresentam grande numero de algarismos significativos. 

### Iniciando o Projeto

Por simplicidade e para explicitar familiaridade com construção de projeto decidi não utilizar o create-react-app, configurando o trio webpack, babel e react como estrutura inicial deste projeto com um Hello World.

### Ferramentas

Para este projeto escolhi utilizar o framework de UI compatível com React chamado Material-UI eu já havia brincado bastante nele no passado, para manejar as rotas utilizei o React-Router. 

Para poder facilitar a visualização imediata do projeto optei por um repositorio publico no Github e aproveitando os serviçoes da Github utilizei o servico Github Pages para poder publicar a aplicação web de forma gratuita e facil.

### Mais Rascunhos



![](https://i.imgur.com/OObjkYS.jpg)

Apos refletir e observar melhor a estrutura de dados ao invez de fazer um ataque ao problema baseado, no grupo de baixo nivel do dado exposto, reformulei em 3 cards de mais alto nivel o card de modelo, card de propriedade, e card de lista de modelos 

### Dores do  Projeto

De longe a maior dor na implementação desse projeto foi a instabilidade do serviço do swapi.co, como comentado no README.md acho que a implementação de um PWA seria incrivel para cachear as informações e minguar os travamentos de carregamento ou de timeout do servidor, inclusive há um easter egg no pagina de carregamento incial da aplicação.
Também tive alguns leves entraves com com o gh-pages que resolvi dando um downgrade temporário na dependencia e nas configurações de ambiente de desenvolvimento do projeto, mas acho sempre valido enfrentar esses entraves que se convertem em aprendizado principalmente em projetos mais descontraidos, divertidos e ludicos. 