new Vue({
    el: "#desafio",
    data: {
        nome: "Arthur",
        idade: 18,
        imagem: "https://i.pinimg.com/originals/fb/03/6e/fb036eb2b2df44ab719f5f66b6e37d8f.jpg"
    },
    methods: {
        tresVezesIdade: function(){
            return this.idade * 3;
        },
        valorRandomico: function () {
            return Math.random();
        }

    },
});