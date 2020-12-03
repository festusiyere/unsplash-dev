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
        setSize() {
            if (window.matchMedia("only screen and (min-device-width: 768px) and (max-device-width: 1024px)").matches) {
                this.size = 2
            } else if (window.matchMedia("only screen and (min-device-width: 320px) and (max-device-width: 767px)").matches) {
                this.size = 1
            } else {
                this.size = 3
            }
        }
    },
    created() {
        window.addEventListener('resize', this.setSize);
        this.setSize();
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.setSize);
    }

}

export default grid;