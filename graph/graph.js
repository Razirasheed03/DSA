class Graph{
    constructor(){
        this.adjList={}
    }
    addVertex(vertex){
        if(!this.adjList[vertex]){
            this.adjList[vertex]=new Set()
        }
    }
    addEdge(vertex1,vertex2){
        if(!this.adjList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjList[vertex1].add(vertex2)
        this.adjList[vertex2].add(vertex1)
    }

    hasEdge(vertex1,vertex2){
        return (this.adjList[vertex1].has(vertex2)&&this.adjList[vertex2].has(vertex1))
    }
    removeEdge(vertex1,vertex2){
        this.adjList[vertex1].delete(vertex2)
        this.adjList[vertex2].delete(vertex1)
    }

}
const graph=new Graph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('D')
graph.addVertex('C')
graph.addEdge('A','B')
graph.addEdge('A','C')
graph.addEdge('A','D')
console.log(graph.hasEdge('A','C'))