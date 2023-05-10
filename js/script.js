const { createApp } = Vue;

createApp({
    data() {
        return {
            autoplay: null, 
            currImg: 0,
            slides: [
                {
                    image: "img/01.webp",
                    title: "Marvel's Spiderman Miles Morale",
                    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
                },
                {
                    image: "img/02.webp",
                    title: "Ratchet & Clank: Rift Apart",
                    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
                },
                {
                    image: "img/03.webp",
                    title: "Fortnite",
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                },
                {
                    image: "img/04.webp",
                    title: "Stray",
                    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
                },
                {
                    image: "img/05.webp",
                    title: "Marvel's Avengers",
                    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
                },
            ],
        };
    },
    methods: {
        nextSlide() {
            this.currImg++;
            // se arriva all'ultima slide torna all'inizio
            this.currImg == this.slides.length ? this.currImg = 0 : null;
        },
        prevSlide() {
            // se arriva alla prima slide torna alla fine
            this.currImg--;
            this.currImg == -1 ? this.currImg = this.slides.length-1 : null;
        },
        clickSlide(i) {
            this.currImg = i;
        },
        setThumbClass(i) {
            let thumbClass = "thumb";
            // se l'indice corrisponde all'immagine corrente prende la classe active
            i == this.currImg ? thumbClass += " active" : null;
            return thumbClass
        }, 
        setAutoplayOn() {
            this.autoplay = setInterval(this.nextSlide, 3000); 
        },
        setAutoplayOff() {
            clearInterval(this.autoplay)
            this.autoplay = null;
        }
    },
    // fa partire l'autoplay al caricamento dell'app
    mounted() {
        this.setAutoplayOn()
    },
    unmounted() {
        this.setAutoplayOff()
    }
}).mount("#app");
