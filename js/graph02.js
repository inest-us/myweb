const graph = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
};

const hasPath = (graph, src, dst) => {
    // base case
    if (src === dst) {
        return true;
    }

    for (let node of graph[src]) {
        if (hasPath(graph, node, dst) === true) {
            return true;
        }
    }

    return false;
}


const hasPath_iter = (graph, src, dst) => {
    if (src === dst) {
        return true;
    }

    const queue = [src];
    while (queue.length > 0) {
        const current = queue.shift();
        if (current === dst) {
            return true; // found the path to dst
        }

        for (let node of graph[current]) {
            queue.push(node);
        }
    }
    
    return false;
}

console.log(hasPath(graph, 'f', 'k')); // true
console.log(hasPath_iter(graph, 'f', 'k')); // true
