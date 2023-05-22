/* Curso de Engenharia de Software - UniEVANGÉLICA 
Disciplina de Programação Web 
Dev: Pedro Henrique Pereira de Melo 
DATA 17/05/2023 */


// [CRUD]  
const redeSocial = {
    usuarios: [
        {
            username: 'pedromelo',
        }
    ],
    posts: [
        {
            id: 1,
            owner: 'pedromelo',
            content: 'Meu primeiro post'
        }
    ],
};
// CREATE
function criaPost(dados) {
    redeSocial.posts.push({
        id: redeSocial.posts.length + 1,
        owner: dados.owner,
        content: dados.content
    });
}
criaPost({ owner: 'pedromelo', content: 'Segundo post' }); 
criaPost({ owner: 'pedromelo', content: 'Terceiro post' }); 
// console.log(redeSocial.posts)

// READ
function pegaPosts() {
    return redeSocial.posts;
}
console.log(pegaPosts())

// UPDATE
function atualizaContentDoPost(id, novoConteudo) {
    const postQueVaiSerAtualizado = pegaPosts().find((post) => {
        return post.id === id;
    });
    console.log(postQueVaiSerAtualizado)
    postQueVaiSerAtualizado.content = novoConteudo
}
atualizaContentDoPost(1, 'Novo conteúdo do post')
console.log(pegaPosts())

// DELETE
function apagaPost(id) {
    const listaDePostsAtualizada = pegaPosts().filter((postAtual) => {
        return postAtual.id !== id;
    })
    redeSocial.posts = listaDePostsAtualizada;
}
apagaPost(1);
apagaPost(2);
apagaPost(3);
console.log(pegaPosts());