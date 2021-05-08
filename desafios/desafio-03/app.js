new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
    watch: {
        resultado: function (novo, antigo) {
            const vueInstance = this;
            setTimeout(() => {
                this.valor = 0;
            }, 5000);
        },
    },
    computed: {
        resultado: function () {
            if (this.valor !== 37) {
                return "Valor Diferente";
            } else {
                return "Valor Igual";
            }
        }
    }
});