//Creare un array contenente un oggetto formato da due proprietà, todo e done
//Se done, risulta uguale a true far comparire una barra sull'item
//Creare una funzione per aggiungere un nuovo item
//Creare una funzione per rimuovere un item esistente, premendo la croce accanto al item
//Aggiungere un pulsante aggiungi per inserire i nuovi item, e una key per inserirli con il tasto enter

const todolist = new Vue({
    el: "#app",

    data: {
        regali: [
            {
                todo: "Barbie per Federica",
                done: false,
            },
            {
                todo: "Transformers per Luca",
                done: false,
            },
            {
                todo: "Macchinina per Fabio",
                done: true,
            },
        ],
        newItems: "",
    },

    methods: {
        rimuovi(index) {
            this.regali.splice(index, 1);
        },
        aggiungi() {
            let newObj = {
                done: false,
                todo: this.newItems,
            };
            this.regali.push(newObj);
            this.newItems = "";
        },
    },
});
