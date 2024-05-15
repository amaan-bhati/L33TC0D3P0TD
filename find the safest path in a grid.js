var maximumSafenessFactor = function (grid) {
    const n = grid.length;
    if (grid[0][0] === 1 || grid[n - 1][n - 1] === 1) return 0;

    const safenessGrid = calculateSafeDistance(grid);

    let leastSFactor = 1, highSFactor = n - 1;
    let result = 0;

    while (leastSFactor <= highSFactor) {
        let mid = Math.floor((leastSFactor + highSFactor) / 2);

        if (validSafenessFactor(safenessGrid, mid)) {
            result = Math.max(result, mid);
            leastSFactor = mid + 1;
        } else {
            highSFactor = mid - 1;
        }
    }

    return result;
};

const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

function calculateSafeDistance(grid) {
    const n = grid.length;
    let queue = [];
    const safenessGrid = Array.from({ length: n }, () => Array(n).fill(Infinity));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                queue.push([i, j]);
                safenessGrid[i][j] = 0;
            }
        }
    }

    let distance = 1;

    while (queue.length) {
        const nextQueue = [];

        while (queue.length) {
            let cur = queue.shift();

            for (let i = 0; i < 4; i++) {
                let nx = cur[0] + dx[i];
                let ny = cur[1] + dy[i];

                if (isValid(grid, nx, ny) && distance < safenessGrid[nx][ny]) {
                    safenessGrid[nx][ny] = distance;
                    nextQueue.push([nx, ny]);
                }
            }
        }

        distance++;
        queue = nextQueue;
    }

    return safenessGrid;
}

function isValid(grid, x, y) {
    return x > -1 && x < grid.length && y > -1 && y < grid.length;
}

function validSafenessFactor(sfGrid, sf) {
    if (sfGrid[0][0] < sf) return false;

    const n = sfGrid.length;
    const visited = Array.from({ length: n }, () => Array(n).fill(false));

    const dfs = (x, y) => {
        if (x === n - 1 && y === n - 1) {
            return true;
        }

        visited[x][y] = true;

        for (let i = 0; i < 4; i++) {
            let nx = x + dx[i];
            let ny = y + dy[i];

            if (isValid(sfGrid, nx, ny) && !visited[nx][ny] && sfGrid[nx][ny] >= sf) {
                if (dfs(nx, ny)) {
                    return true;
                }
            }
        }

        return false;
    }

    return dfs(0, 0);
}
