class Despesa {
   //nessessária a passagem dos parametros para vizualização
   constructor(ano, mes, dia, tipo, descricao, valor) {
      this.ano = ano;
      this.mes = mes;
      this.dia = dia;
      this.tipo = tipo;
      this.descricao = descricao;
      this.valor = valor;
   }
}

function cadastrarDespesa(){
   
   let ano = document.getElementById('ano');
   let mes = document.getElementById('mes');
   let dia = document.getElementById('dia');
   let tipo = document.getElementById('tipo');
   let descricao = document.getElementById('descricao');
   let valor = document.getElementById('valor');

   console.log(ano.value);

   let despesa = new Despesa(
      ano.value,
      mes.value,
      dia.value,
      tipo.value,
      descricao.value,
      valor.value
   )

   gravar(despesa);
}

function gravar(d) {
   //acessando local storage, armazenamento persistente
   //por parte do front end.
   localStorage.setItem('despesa', JSON.stringify(d)) //identificador do item e o proprio item
   //nesse caso o item esta sempre na mesma chave, sobrepondo se houver mudanças.
}