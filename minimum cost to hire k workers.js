
var mincostToHireWorkers = function (quality, wage, k) {
    let compare = (a, b) => a > b;

    let ratios = [];
    for (let i = 0; i < quality.length; i++) {
        ratios.push([wage[i], quality[i]]);
    }

    ratios.sort((a, b) => {
        if (a[0] / a[1] < b[0] / b[1]) {
            return -1
        } else {
            return 1
        }
    })
    let heapDt = new Heap(compare, []);

    let minVa = Number.MAX_VALUE;
    let sum = 0;
    ratios.forEach((ratio, index) => {
        heapDt.insert(ratio[1]);
        sum += ratio[1];
        console.log(minVa)
        if (heapDt.heap.length <= k) {
            minVa = sum * (ratio[0] / ratio[1]);
        } else {
            let highestQual = heapDt.getMax()
            console.log('min value', highestQual, heapDt.heap)
            sum = sum - highestQual;
            minVa = Math.min(minVa, sum * (ratio[0] / ratio[1]));
            console.log('sum', sum, minVa, ratio[0], ratio[1])
        }
    })

    return minVa;
};

class Heap {
    constructor(comparefn, arr) {
        this.compare = comparefn;
        this.heap = arr
    }

    heapify = (i, n) => {
        let smallest = i;
        let left = 2 * i + 1;
        let right = 2 * i + 2

        if (left < n && this.compare(this.heap[left], this.heap[smallest])) {
            smallest = left;
        }
        if (right < n && this.compare(this.heap[right], this.heap[smallest])) {
            smallest = right;
        }

        if (smallest !== i) {
            let tmp = this.heap[smallest];
            this.heap[smallest] = this.heap[i];
            this.heap[i] = tmp;
            this.heapify(smallest, n);
        }
    }

    getMax = () => {
        let tmp = this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();
        this.heapify(0, this.heap.length)
        return tmp;
    }

    uphill = (i) => {
        let parent = Math.floor((i - 1) / 2);

        if (this.heap[parent]) {
            if (this.compare(this.heap[i], this.heap[parent])) {
                let tmp = this.heap[parent];
                this.heap[parent] = this.heap[i];
                this.heap[i] = tmp;
                this.uphill(parent);
            }
        }
    }

    insert = (el) => {
        if (this.heap.length === 0) {
            this.heap.push(el)
        } else {
            this.heap.push(el);
            this.uphill(this.heap.length - 1);
        }
    }
}
