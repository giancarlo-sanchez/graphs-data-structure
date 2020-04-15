function breadthFirstSearch(startingNode, targetVal) {


    let visited = new Set();
    let arr = [startingNode];

    while (arr.length) {
        let node = arr.shift();
        if (visited.has(node)) continue;
        visited.add(node);
        if (node.val === targetVal) return node;
        arr.push(...node.neighbors);
    }
    return null;
}

module.exports = {
    breadthFirstSearch
};
