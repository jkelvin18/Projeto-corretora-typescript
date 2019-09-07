class NegociacaoController {

    private _inputData: HTMLInputElement;
    private _inputValor: HTMLInputElement;
    private _intputQuantidade: HTMLInputElement;

    constructor () {
        this._inputData = <HTMLInputElement>document.querySelector("#data"); //<####> converti o tipo element q o document retonra (gnérico) em um tipo mais especifico HTMLInputELement pq usando tipo element eu não posso o .value dos inputs
        this._inputValor = <HTMLInputElement>document.querySelector("#valor");
        this._intputQuantidade = <HTMLInputElement>document.querySelector("#quantidade");
    }
    adiciona(event: Event) {

        event.preventDefault();

        const negociacao = new Negociacao(
           new Date (this._inputData.value.replace(/-/g, ',')), 
            parseInt (this._intputQuantidade.value), 
            parseFloat (this._inputValor.value)
        );

        console.log(negociacao);
        
    }
}   