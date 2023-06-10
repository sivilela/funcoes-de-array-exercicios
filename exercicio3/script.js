const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó", categoria: "Limpeza", preco: 10.80 }
 ]
 
 const retornaProdutosLimpeza = produtos.filter((produto)=>{
    const produtosLimpeza = produto.categoria === "Limpeza"
    //const produtosLimpeza = produto.nome === "Leite"
    //const produtosLimpeza = produto.preco === 10.80
    return produtosLimpeza
 })
 console.log(retornaProdutosLimpeza)

 const retornaNomes = retornaProdutosLimpeza.map((nome)=>{
    const nomesProduto = nome.nome
    return nomesProduto
 })
 console.log(retornaNomes)