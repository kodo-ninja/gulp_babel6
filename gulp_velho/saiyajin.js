;(function() {
  "use strict";

  var Saiyajin = function(nome, chi) {
      this.nome = nome || '';
      this.chi = chi || '0';
      this.teletransporte = true;
  };

  Saiyajin.prototype.exibeInformacoes = function() {
    console.log(this.nome);
    console.log(this.chi);
    console.log(this.teletransporte);
  };

  Saiyajin.prototype.mensagem = function() {
    console.log('')
  };

  var goku = new Saiyajin('Goku', 9999);
  var vegeta = new Saiyajin('Vegeta', 9998);

  goku.exibeInformacoes(); // Goku, 9999, true
  vegeta.exibeInformacoes(); // Vegeta, 9998, true
}());
