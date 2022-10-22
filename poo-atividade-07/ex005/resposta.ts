class Produto {
    private _identificador : number;
    private _descricao : String;
    private _quantidade : number;
    private _valorUnitario : number;

    constructor(id: number, desc: String, qntd: number, valorUnitario: number) {
        this._identificador = id;
        this._descricao = desc;
        this._quantidade = qntd;
        this._valorUnitario = valorUnitario;
    }

    get id(): number {
        return this._identificador;
    }

    public repor(quantidade: number): void {
        this._quantidade += quantidade;
    }

    public darBaixa(quantidade: number): void {
        this._quantidade -= quantidade;
    }
}

class ProdutoPerecivel extends Produto {
    private _dataValidade: Date;

    constructor(id: number, desc: String, qntd: number, valorUnitario: number, dataValidade: Date) {
        super(id, desc, qntd, valorUnitario);
        this._dataValidade = dataValidade;
    }

    public estaVencido(): boolean {
        let dataAtual = new Date();
        if (dataAtual > this._dataValidade) {
            return true;
        }   else {
            return false;
        }
    }

    public repor(quantidade: number): void {
        if (!this.estaVencido()) {
            super.repor(quantidade);
        }   else {
            console.log('O produto já venceu!');
        }
    }

    public darBaixa(quantidade: number): void {
        if (!this.estaVencido()) {
            super.darBaixa(quantidade);
        }   else {
            console.log('O produto já venceu!');
        }
    }

}

class Estoque extends ProdutoPerecivel{
    private _produtos: Produto[] = [];
    private _vencidos: Produto[] = [];

    public inserir(produto: Produto): void {
        if (this.consultar(produto.id) === false) {
            this._produtos.push(produto);
        } 
    }

    public consultar(idProduto: number): any {
        this._produtos.forEach(function(produto, indice) {
            if(produto.id === idProduto) {
                return indice;
            }   else {
                return false;
            }
        });
    }

    public excluir(idProduto: number) {
        let localizacao = this.consultar(idProduto);
        this._produtos.splice(localizacao, 1);
    }

    public repor(quantidade: number): void {
        super.repor(quantidade);
    }

    public darBaixa(quantidade: number): void {
        super.darBaixa(quantidade);
    }

    public listarVencidos(): void {
        this._produtos.forEach(function(produto: Produto) {
            produto.super.estaVencido();
        });

        console.log(this._vencidos);
    }

}

let p01: ProdutoPerecivel = new ProdutoPerecivel(1, 'Morango', 21, 9.80, '2022-12-30');
console.log(p01);
p01.darBaixa(20);
p01.repor(100);
console.log(p01);
console.log(p01.estaVencido());
