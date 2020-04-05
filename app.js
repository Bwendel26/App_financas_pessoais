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

   validarDados() {
      for(let i in this) {
         //console.log(i, this[i]); //acessando atributos de objetos
         if(this[i] == undefined || this[i] == '' || this[i] == null) {
            return false;
         }
         return true;
      }
   }
}

class Bd {
   constructor() {
      let id = localStorage.getItem('id');

      if(id == null) {
         localStorage.setItem('id', parseInt(0));
      } //iniciando valor pra id, como a informação nao existe
      // até a construção do objeto em localstorage
   }

   getProximoId() {
      let proximoId = localStorage.getItem('id'); //antes do constructor atuar seria null
      return parseInt(proximoId) + 1;
   }

   gravar(d) {
      // localStorage.setItem('despesa', JSON.stringify(d));
      let id = this.getProximoId();

      localStorage.setItem(id, JSON.stringify(d));

      localStorage.setItem('id', id);
   }
}

let bd = new Bd(); //instanciando

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
   //controle e feedback de gravação da despesa
   if(despesa.validarDados()) {
      bd.gravar(despesa);
      $('#sucessoGravacao').modal('show');
   } else { 
      $('#erroGravacao').modal('show');
   }
}

// function gravar(d) {
//    //acessando local storage, armazenamento persistente
//    //por parte do front end.
//    localStorage.setItem('despesa', JSON.stringify(d)) //identificador do item e o proprio item
//    //nesse caso o item esta sempre na mesma chave, sobrepondo se houver mudanças.
//