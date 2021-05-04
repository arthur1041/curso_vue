new Vue({
    el: '#desafio',
    data: {
        valor: '',
        valor2: ''
    },
    methods: {
        alertar: function(){
            alert("alerta!!!");
        },
        armazenarValor: function(event){
            this.valor = event.target.value;
        },
        armazenarValor2: function(event){
            this.valor2 = event.target.value;
        }
    }
})