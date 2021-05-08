new Vue({
	el: '#desafio',
	data: {
        aplicarClasse: false
	},
	methods: {
		iniciarEfeito() {
            setInterval(() => {
                if(aplicarClasse){
                    aplicarClasse = !aplicarClasse;
                }
            }, 1000);
		},
		iniciarProgresso() {

		}
	}
})
