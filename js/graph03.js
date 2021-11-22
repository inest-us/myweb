const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
];

const buildAdjList = function(edges) {
    const graph = {};
    edges.forEach(edge => {
        const [a, b] = edge;
        if (!(a in graph)) {
            graph[a] = [];
        }
        if (!(b in graph)) {
            graph[b] = [];
        }
        graph[a].push(b);
        graph[b].push(a);
    });

    return graph;
};

const undirectedPath = (edges, nodeA, nodeB) => {
    const graph = buildAdjList(edges);
    return hasPath(graph, nodeA, nodeB, new Set());
}

const hasPath = (graph, src, dst, visited) => {
    //base case
    if (src === dst) {
        return true;
    }
    if (visited.has(src)) {
        return false;
    }
    
    visited.add(src);
    for (let node of graph[src]) {
        if (hasPath(graph, node, dst, visited) === true) {
            return true;
        }
    }
    return false;
}

console.log(undirectedPath(edges, 'j', 'm')); // true