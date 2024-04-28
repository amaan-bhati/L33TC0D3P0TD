var sumOfDistancesInTree = function (n, edges) {
    const adj = Array.from({ length: n }, _ => new Set());
    for (const [u, v] of edges) {
        adj[u].add(v);
        adj[v].add(u);
    }

    const count = Array(n).fill(0);
    const res = Array(n).fill(0);

    function postorderDFS(node, parent) {
        for (const child of adj[node]) {
            if (child === parent) {
                continue;
            }
            postorderDFS(child, node);
            count[node] += count[child];
            res[node] += res[child] + count[child];
        }
        count[node]++;
    }
    postorderDFS(0, -1);

    function preorderDFS(node, parent) {
        for (const child of adj[node]) {
            if (child === parent) {
                continue;
            }
            res[child] = res[node] - count[child] + count.length - count[child];
            preorderDFS(child, node);
        }
    }
    preorderDFS(0, -1);

    return res;
};
