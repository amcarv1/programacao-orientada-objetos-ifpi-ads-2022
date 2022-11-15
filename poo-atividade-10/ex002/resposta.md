Resposta = Para que a compilação ocorra sem erros é preciso que o método abstrato da classe abstrata seja chamado na classe não abstrata que herdará a classe abstrata.

```typescript
abstract class ClasseAbstrata {
    abstract imprimaAlgo(): void;
}

class ClasseConcreta extends ClasseAbstrata {
    imprimaAlgo(): void {
        console.log('Teste');
    }
}
```
