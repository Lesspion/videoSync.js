var Video = (function () {
    function Video(node) {
        if (this.instance !== null) {
            this.node = node;
            this.instance = this;
        }
        return this.instance;
    }
    return Video;
}());
