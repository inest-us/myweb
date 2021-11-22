const graph = {
    3: [],
    4: [6],
    6: [4, 5, 7, 8],
    8: [6],
    7: [6],
    5: [6],
    1: [2],
    2: [1]
};


const CompCount = function(graph) {
    const visited = new Set();
    return CompCountHelper(graph, visited);
}

const CompCountHelper = function(graph, visited) {
    let count = 0;
    for (let node in graph) {
        if (dfs(graph, node, visited) == true) {
            count++;
        }
    }
    return count; 
}

const dfs = function(graph, src, visited) {
    if (visited.has(String(src))) {
        return false;
    }
    visited.add(String(src))
    for (let node of graph[src]) {
        dfs(graph, node, visited);
    }

    return true;
}

console.log(CompCount(graph)) // 3