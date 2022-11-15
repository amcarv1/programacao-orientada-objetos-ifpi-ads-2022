Questão 05) Não podemos aplicar o operador new em FiguraGeometrica, mas por que então podemos realizar o seguinte código de instanciação:

```typescript
abstract class FiguraGeometrica {
  //...
}
let figuras: FiguraGeometrica[] = new Array();
```

Resposta = Podemos fazer a instanciação acima pois essa instanciação trata-se de um array e não de uma classe abstrata.
