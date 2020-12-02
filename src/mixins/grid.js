const grid = {
    computed: {
        grid() {
            return this.chunkArray(
                this.images,
                Math.ceil(this.images.length / this.size)
            );
        },
    },
    data() {
        return {
            size: 3,
        }
    },
    methods: {
        chunkArray(arr, size) {
            // return arr.length > size
            //     ? [arr.slice(0, size), ...this.chunkArray(arr.slice(size), size)]
            //     : [arr];
            if(arr.length > size ){
                return [arr.slice(0, size), ...this.chunkArray(arr.slice(size), size)]
            } else {
                return [arr]
            }
        },
    },
    created(){
        console.log("I am working Fine");
    },
    beforeDestroy(){
        console.log("I am getting Destroyed");
    }
    
}

export default grid;