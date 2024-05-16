function allPathsSourceTarget(graph) {
  const result = [];
  const target = graph.length - 1;
  dfs(graph, 0, [0]);
  function dfs(graph, node, path) {
    if (node === target) {
      result.push([...path]);
      return;
    }
    for (const neighbor of graph[node]) {
      path.push(neighbor);
      dfs(graph, neighbor, path);
      path.pop();
    }
  }
  return result;
}
