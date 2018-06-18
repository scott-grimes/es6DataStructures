class Graph {


  constructor() {

    this.nodes = [];
    this.edges = [];

  }

  addNode(node) {

    this.nodes.push(node);

  }

  contains(node) {
  
    return this.nodes.includes(node);

  }

  removeNode(node) {
  
    var index = this.nodes.indexOf(node);
    
    this.nodes.splice(index, 1);
    
    this.edges = _.filter(this.edges, function (edge) {
      return !edge.includes(node);
    });
  
  }

  hasEdge(fromNode, toNode) {
  
    var edge = _.find(this.edges, function(edge) {
      return edge.includes(fromNode) && edge.includes(toNode);
    });
    
    return (edge !== undefined);
  
  }

  addEdge(fromNode, toNode) {
  
    this.edges.push([fromNode, toNode]);

  }

  removeEdge(fromNode, toNode) {
  
    var edge = _.find(this.edges, function(edge) {
      return edge.includes(fromNode) && edge.includes(toNode);
    });
    
    var indexOfEdge = this.edges.indexOf(edge);
    
    if (indexOfEdge !== -1) {
      this.edges.splice(indexOfEdge, 1);
    }
    
  }

  forEachNode(cb) {
  
    _.each(this.nodes, cb);

  }



}