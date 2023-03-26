//https://jsonplaceholder.typicode.com/posts
async function readPosts() {  //função p/ler os posts
    let postArea = document.querySelector('.posts'); //colocando nome carregando dentro de "posts"
     postArea.innerHTML = 'Carregando.....';//tira qualquer contúdo que tem nele e coloca o nome "carregando"

   let response = await fetch('https://jsonplaceholder.typicode.com/posts'); //fazendo a requisição async 'await' como é só requisição p/ler só colar Url no fetch
   let json = await response.json(); //função p pegar os posts

   if(json.length > 0) { //verifica se tem os posts é sempre bom fazer essa verificação qun são daods externo para ver se veio realmente
    postArea.innerHTML = ''; //significa postArea limpa retira o nome "carregando" da tela caso tenha post p/exibir 

    for (let i in json) {//commo tem um array aqui faz um loop p/exibir os posts
        let postHtml = `<div><h1>${json[i].title}</h1>${json[i].body}</div>`;//aqui monta a estrutura de um post e insere em post na area
        postArea.innerHTML += postHtml;//concatenando "+=" remove tudo da memória e adiciona novamente
    }
   } else { //caso ñ tenha nenhum post a ser exibido irá aparecer essa msg na tela
    postArea.innerHTML = 'Nenhum post a ser exibido';
   }
   
}
readPosts(); //função executada ao abrir a tela após ler o "script.js" 



   
function clicar() {//
           
  //chama API p/obter os comentarios
   fetch('https://jsonplaceholder.typicode.com/posts')//fazendo a requisiçao
       .then((response) => {
           return response.json();
       })
       .then((json) => {
          alert(`Conteúdo do post: ${json[0].body}`)
         
       })
         .catch((error) => {//função que avisa o usuário caso tnha algum problema na requisição
          
           console.log(error);
         })  
         alert("click");
   }

   document.querySelector('#botao').addEventListener('click',clicar);



   