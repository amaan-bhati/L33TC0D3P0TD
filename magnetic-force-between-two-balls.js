var maxDistance = function (position, m) {
    let left = 1;
    let n = position.length
    position.sort((a, b) => (a - b))

    let right = Math.floor((position[n - 1] / (m - 1)) + 1)
    let answer = 0

    while (left <= right) {
        let mid = Math.floor((right + left) / 2)

        if (balls(mid, position, m)) {
            answer = mid;
            left = mid + 1
        } else {
            right = mid - 1;
        }
    }

    return answer
};

let balls = function (x, position, m) {

    let prev = position[0]
    let balls_placed = 1;

    for (let bucket of position) {
        let cur_pos = bucket;

        if (cur_pos - prev >= x) {
            balls_placed++;
            prev = cur_pos
        }

        if (balls_placed == m) {
            return true
        }
    }

    return false
}
