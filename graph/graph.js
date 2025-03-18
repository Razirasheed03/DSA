class Graph{
    constructor(){
        this.adjList={}
    }
    addVertex(vertex){
        if(!this.adjList[vertex]){
            this.adjList[vertex]=new Set()
        }
    }
}
const graph=new Graph()
graph.addVertex('A')