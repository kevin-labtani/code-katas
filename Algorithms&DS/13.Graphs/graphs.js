// we're building an undirected graph using an adjacency list
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // ADD VERTEX
  // accepts a name of a vertex
  // add a key to the adjacency list list with the name of the vertex and se its value to be an empty array
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  // ADD EDGE
  // accepts two vertices, vertex1 and vertex2
  // finds in the adjacency list the key for vertex2 and push vertex1 to the array
  // finds in the adjacency list the key for vertex1 and push vertex2 to the array
  // (no error handling)
  // if we wanted a directed graph, we'd only add in one direction
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  // REMOVE EDGE
  // accepts two vertices
  // reasign trhe key of vertex1 to be an array that does not contain vertex2
  // reasign trhe key of vertex2 to be an array that does not contain vertex1
  // (no error handling)
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }

  // REMOVE VERTEX
  // accepts a vertex to remove
  // loop as long as there are any other vertices in the adjacancy list for that vertex
  // inside the loop, call removeEdge with the vertex we are removing and any values in the adjacency list for that vertex
  // delete the key on the adjacency list for that vertex
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  // DEPTH FIRST TRAVERSAL (RECURSIVE)
  // accepts a starting node
  // create a list to store the end result, to be returned at the end
  // create an object to store visited vertices
  // create a helper function which accepts a vertex
  //    the helper function should return early if the vertex is empty
  //    the helper function should place the vertex it accepts into the visited object and push that vertex into the result array
  //    loop over all the values in the adjacencyList for that vertex
  //    if any of those values have not been visited, recurcively invoke the helper function with that vertex
  // invoke the helper function witht the starting array
  // return the result array
  depthFirstRecursive(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    })(start);

    return result;
  }

  // DEPTH FIRST TRAVERSAL (ITERATIVE)
  // accepts a starting node
  // create a stack to keep track of vertices
  // create a list to store the end result to be returned
  // create an object to store visited vertices
  // add the starting vertex to the stack, and mak it visited
  // while the stack has something in it
  //    pop the next vertex from the stack
  //    if that vertex hasn't been visited yet:
  //        mark it as visited
  //        add it to the result list
  //        push all of its neightbors into the stack
  // return the result array
  // nb we'll end up with a different order than the recursive solution
  depthFirstIterative(start) {
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVertex;
    visited[start] = true;

    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }

  // BREADTH FIRST TRAVERSAL
  // accept a starting vertex
  // create a queue and place the startin gvertex in it
  // create an array to store the nodes visited
  // create an object to store the nodes visited
  // mark the starting vertex as visited
  // loop as long as there is anything in the queue
  // remove the first vertex from the queue and push it into the array that stores nodes visited
  // loop over each vertex in the adjacency list for the vertex you are visiting
  // if it is not inside the object that stores nides visited, mark it as visited an enqueue that vertex
  // once you have finished looping, return the array of visited nodes
  breadthFirst(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;
    visited[start] = true;

    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }
}

let g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
console.log(g);
console.log(g.depthFirstRecursive("A"));
console.log(g.depthFirstIterative("A"));
console.log(g.breadthFirst("A"));
//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F
