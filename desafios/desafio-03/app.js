new Vue({
    el: '#desafio',
    data: {
        valor: 0,
        resultado: "Valor Diferente"
    },
    watch: {
        valor: function(novo, antigo){
            if(this.valor !== 37){
                this.resultado = "Valor Diferente";
            } else {
                this.resultado = "Valor Igual";
            }
        },
        resultado: function(novo, antigo){
            const vueInstance = this;
            setTimeout(() => {
                this.valor = 0;
            }, 5000);
        }
    }
});