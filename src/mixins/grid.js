const grid = {
    computed: {
        grid() {
            return this.chunkArray(
                this.images,
                this.size
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
            let result = new Array(size);

            let div = (arr.length / size) | 0;

            let remainder = arr.length % size;

            let addOne;

            for (let i = 0; i < size; ++i) {
                addOne = remainder > 0 ? 1 : 0;
                result[i] = new Array(div + addOne);
                --remainder;
            }

            let index = 0;

            result.forEach((elem) => {
                for (let i = 0; i < elem.length; ++i) {
                    elem[i] = arr[index];
                    ++index;
                }
            })

            return result;
        },
    },
    created() {
        console.log("I am working Fine");
    },
    beforeDestroy() {
        console.log("I am getting Destroyed");
    }

}

export default grid;