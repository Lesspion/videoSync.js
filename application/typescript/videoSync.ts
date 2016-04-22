class Video
{
    node: Node;
    instance: Video;
    
    constructor(node?: Node) {
        if (this.instance !== null) {
            this.node = node;
            this.instance = this;
        }    
        return this.instance;
    }
}