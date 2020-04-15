function maxValue(node, visited = new Set()) {
    let arr = [node];
    let max = node.val;

    while (arr.length) {
        let node = arr.shift();

        if (visited.has(node)) continue;
        visited.add(node);
        if (node.val > max) {
            max = node.val;
        }
        arr.push(...node.neighbors);
    }
    return max;
}

module.exports = {
    maxValue
};
