var leastInterval = function (tasks, n) {
    let map = new Map();
    tasks.forEach(task => {
        let currentCount = map.get(task);
        if (!currentCount) {
            map.set(task, 1);
        } else {
            map.set(task, currentCount + 1);
        }
    });
    const maxHeap = new MaxPriorityQueue();
    map.forEach((key) => {
        maxHeap.enqueue(key);
    });
    let time = 0;

    const queue = new Queue();
    while (queue.size() || maxHeap.size()) {
        time++;

        if (maxHeap.size()) {
            const count = maxHeap.dequeue().element - 1;
            if (count) {
                queue.enqueue([count, time + n]);
            }
        }
        if (queue.size() && queue.front()[1] === time) {
            const el = queue.dequeue();
            maxHeap.enqueue(el[0]);
        }
    }

    return time;
};
