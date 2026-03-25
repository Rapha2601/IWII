import Crud from "./code.js";


/*
Crud.selectALL(function(autor){
  for(let  i=0;autor.lenght > i;i++){
    console.log("O id é: " + autor[i].id + ":" + "O nome é:" + autor[i].nome)
  }  
})
*/

//Selecionar ID

/*
Crud.selectById(11, function(autor){
     console.log("O id é: " + autor.id + ":" + "O nome é:" + autor.nome)  
})
*/

//Inserir os dados


/*
let livros = {nome:"Mané", titulo:"Malandro do Samba", editora:"Abreu", Ano:1988}
Crud.insert(livros, function(autor){
    console.log("Inserido")
})
*/


/*
//Atualizar dados
let livros = {id:3, nome:"Mané", titulo:"Malandro do SAmba", editora:"Abreu", Ano:2003}
Crud.update(livros, function(autor){
    console.log("Inserido")
})
*/


//Apagar dados

/*
let livros = {id:2}
Crud.deleteById(livros, function(autor){
    console.log("Apagado")
})
*/