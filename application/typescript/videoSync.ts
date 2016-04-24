class Video
{
	nodeElem : HTMLVideoElement;
	onPlay : Boolean = false;
	that : Video = this;
	
	constructor(nodeELem : HTMLVideoElement | string) {
		if (typeof nodeELem === "string") {
			this.nodeElem = (<HTMLVideoElement>document.querySelector(nodeELem));
		} else {
			this.nodeElem = nodeELem;
		}
		
		this.nodeElem.addEventListener('click', function () {
			if (this.paused) {
				this.play();
			} else {
				this.pause();
			}
		});
	}
	
	setHeight(h: number) : void {
		this.nodeElem.height = h;
	}
	
	setWidth(w: number) : void {
		this.nodeElem.width = w;
	}
	
	setSize(sizeObject: any) {
		this.setHeight(sizeObject.h || sizeObject.height);
		this.setWidth(sizeObject.w || sizeObject.width);
	}
	
	getNode() : HTMLVideoElement {
		return this.nodeElem;
	}
}