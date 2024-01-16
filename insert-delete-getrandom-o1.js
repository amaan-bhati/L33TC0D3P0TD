class RandomizedSet {
    constructor() {
        this.valMap = new Map(),
            this.indexMap = new Map();

        this.highest = -1;
    }

    insert(val) {
        if (this.valMap.has(val)) return false;
      generateRandom() {
        return Math.floor(Math.random() * (this.highest + 1));
    }
    }
