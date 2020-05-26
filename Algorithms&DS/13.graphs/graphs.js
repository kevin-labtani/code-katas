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
}

let g = new Graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
g.addVertex("Hong Kong");
g.addVertex("Los Angeles");
g.addEdge("Dallas", "Tokyo");
g.addEdge("Dallas", "Aspen");
g.addEdge("Hong Kong", "Los Angeles");
g.addEdge("Hong Kong", "Aspen");
g.addEdge("Tokyo", "Aspen");
g.addEdge("Dallas", "Hong Kong");
g.removeEdge("Dallas", "Aspen");
g.removeVertex("Hong Kong");

console.log(g);
