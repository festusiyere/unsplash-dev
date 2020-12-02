const modal ={
    data(){
        return {
            isOpen: false
        }
    }, 
    methods: {
        toggleModal(){
            this.isOpen ? this.isOpen = false : this.isOpen = true;
        },
        setImage(image){
            this.image = image
            this.isOpen = true;
        },
    }
}

export default modal;