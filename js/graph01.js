const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

const dfs = function(graph, source) {
    // process current node
    console.log(source);

    // recursive calls
    if (graph[source]) {
        graph[source].forEach(node => {
            dfs(graph, node)
        });
    }
}

// dfs(graph, 'a');

const bfs = function(graph, source) {
    const queue = [source];
    while (queue.length > 0) {
        const current = queue.shift();
        console.log(current);
        if (graph[current]) {
            graph[current].forEach(node => {
                queue.push(node)
            });
        }
    }
}

bfs(graph, 'a');