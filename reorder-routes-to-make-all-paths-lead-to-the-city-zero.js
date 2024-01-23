var minReorder = function (n, connections) {
    const al = Array.from({ length: n }, () => []);
    for (let c of connections) {
        al[c[0]].push(c[1]);
        al[c[1]].push(-c[0]); 
    }

    const visited = new Array(n).fill(false);

    const dfs = (from) => {
        let change = 0;
        visited[from] = true;
        for (let to of al[from]) {
            if (!visited[Math.abs(to)]) {
                change += dfs(Math.abs(to)) + (to > 0 ? 1 : 0);
            }
        }
        return change;
    };

    return dfs(0);
};
