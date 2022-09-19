/* O tipo any é muito conveniente, pois basicamente desabilita todas as verificações de tipos, o que evita erros na compilação do TypeScript. Pode ser que 
decidamos usar o tipo any em variáveis que não temos certeza sobre o formato de suas informações, como uma variável que espera o retorno dos dados de uma API */

async function loadProducts(): Promise<Product[]> {
  const response = await fetch('https://api.mysite.com/products')
  const products: any = await response.json() // Aqui o tipo any poderia ser útil.
  return products
}
