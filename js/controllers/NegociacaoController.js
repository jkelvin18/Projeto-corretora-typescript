class NegociacaoController {
    constructor() {
        this._inputData = document.querySelector("#data"); //<####> converti o tipo element q o document retonra (gnérico) em um tipo mais especifico HTMLInputELement pq usando tipo element eu não posso o .value dos inputs
        this._inputValor = document.querySelector("#valor");
        this._intputQuantidade = document.querySelector("#quantidade");
    }
    adiciona(event) {
        event.preventDefault();
        const negociacao = new Negociacao(new Date(this._inputData.value.replace(/-/g, ',')), parseInt(this._intputQuantidade.value), parseFloat(this._inputValor.value));
        console.log(negociacao);
    }
}
