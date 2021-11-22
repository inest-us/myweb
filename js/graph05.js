const graph = {
    0: ['8', '1', '5'],
    1: ['0'],
    5: ['0', '8'],
    8: ['0', '5'],
    2: ['3', '4'],
    3: ['2', '4'],
    4: ['3', '2']
};

const largestComp = function(graph) {
    const visited = new Set();
    return largestCompHelper(graph, visited);
}

const largestCompHelper = function(graph, visited) {
    let maxSize = 0;
    for (let node in graph) {
        const currentSize = dfs(graph, node, visited, []);
        maxSize = Math.max(maxSize, currentSize)
    }
    return maxSize; 
}

const dfs = function(graph, src, visited, comp) {
    if (visited.has(src)) {
        return 0;
    }
    visited.add(src)
    comp.push(src);
    for (let node of graph[src]) {
        dfs(graph, node, visited, comp);
    }

    return comp.length;
}

console.log(largestComp(graph)) // 4