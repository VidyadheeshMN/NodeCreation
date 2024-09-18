def is_dag(nodes, edges):
    def is_cyclic(node, visited, rec_stack):
        # If the node is in the recursion stack, a cycle is detected
        if node in rec_stack:
            return True
        
        # If the node is already visited, skip it
        if node in visited:
            return False
        
        # Mark the node as visited and add to recursion stack
        visited.add(node)
        rec_stack.add(node)

        # Recur for all neighbors
        for neighbor in graph.get(node, []):
            if is_cyclic(neighbor, visited, rec_stack):
                return True
        
        # Remove the node from recursion stack
        rec_stack.remove(node)
        return False

    # Build the graph from the edges
    graph = {}
    for edge in edges:
        src = edge['source']
        tgt = edge['target']
        if src not in graph:
            graph[src] = []
        graph[src].append(tgt)

    # Set to keep track of visited nodes and recursion stack
    visited = set()
    rec_stack = set()

    # Check for cycles in the graph
    for node in nodes:
        node_id = node['id']  # Extract node ID
        if is_cyclic(node_id, visited, rec_stack):
            return False
    return True