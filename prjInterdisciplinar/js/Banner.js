var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
function init() {
    canvas = document.getElementById("canvas");
    anim_container = document.getElementById("animation_container");
    dom_overlay_container = document.getElementById("dom_overlay_container");
    images = images || {};
    ss = ss || {};
    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", handleFileLoad);
    loader.addEventListener("complete", handleComplete);
    loader.loadManifest(lib.properties.manifest);
}
function handleFileLoad(evt) {
    if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
}
function handleComplete(evt) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    var queue = evt.target;
    var ssMetadata = lib.ssMetadata;
    for (i = 0; i < ssMetadata.length; i++) {
        ss[ssMetadata[i].name] = new createjs.SpriteSheet({ "images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames })
    }
    exportRoot = new lib.Banner();
    stage = new createjs.Stage(canvas);
    stage.addChild(exportRoot);
    //Registers the "tick" event listener.
    fnStartAnimation = function () {
        createjs.Ticker.setFPS(lib.properties.fps);
        createjs.Ticker.addEventListener("tick", stage);
    }
    //Code to support hidpi screens and responsive scaling.
    function makeResponsive(isResp, respDim, isScale, scaleType) {
        var lastW, lastH, lastS = 1;
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        function resizeCanvas() {
            var w = lib.properties.width, h = lib.properties.height;
            var iw = window.innerWidth, ih = window.innerHeight;
            var pRatio = window.devicePixelRatio || 1, xRatio = iw / w, yRatio = ih / h, sRatio = 1;
            if (isResp) {
                if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
                    sRatio = lastS;
                }
                else if (!isScale) {
                    if (iw < w || ih < h)
                        sRatio = Math.min(xRatio, yRatio);
                }
                else if (scaleType == 1) {
                    sRatio = Math.min(xRatio, yRatio);
                }
                else if (scaleType == 2) {
                    sRatio = Math.max(xRatio, yRatio);
                }
            }
            canvas.width = w * pRatio * sRatio;
            canvas.height = h * pRatio * sRatio;
            canvas.style.width = dom_overlay_container.style.width = anim_container.style.width = w * sRatio + 'px';
            canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h * sRatio + 'px';
            stage.scaleX = pRatio * sRatio;
            stage.scaleY = pRatio * sRatio;
            lastW = iw; lastH = ih; lastS = sRatio;
        }
    }
    makeResponsive(false, 'both', false, 1);
    fnStartAnimation();
}

(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"1.png", frames: [[0,280,313,85],[0,0,417,278]]}
];


// symbols:



(lib.LogoHorizontal = function() {
	this.spriteSheet = ss["Banner_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.rh = function() {
	this.spriteSheet = ss["Banner_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Titulo2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B6087").s().p("AgEAvIAAgMIAKAAIAAAMgAgCAUIgDhCIALAAIgDBCg");
	this.shape.setTransform(101.3,9.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B6087").s().p("AgOAbQgFgJAAgSQAAgRAFgJQAFgIAJAAQAKAAAFAJQAFAIAAARQAAASgFAJQgFAIgKAAQgJAAgFgIgAgHgUQgDAGAAAOQAAAPADAGQACAGAFAAQAGAAACgGQADgHAAgOQAAgNgDgHQgCgGgGAAQgFAAgCAGg");
	this.shape_1.setTransform(97.2,11.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2B6087").s().p("AAGAuQgGAAgCgDQgDgEAAgGIAAgvIgJAAIAAgIIAJAAIAAgXIAIAAIAAAXIAMAAIAAAIIgMAAIAAAqQAAAGABACQABAAAAABQABAAAAAAQABABAAAAQABAAABAAIAFgBIABAAIAAAIIgFABIgEAAg");
	this.shape_2.setTransform(93.2,10.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2B6087").s().p("AgEAvIAAhDIAIAAIAABDgAgEgkIAAgKIAIAAIAAAKg");
	this.shape_3.setTransform(90.4,9.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2B6087").s().p("AgOAbQgFgJAAgSQAAgRAFgJQAFgIAKAAQAJAAAFAIQAFAHAAAQIAAADIAAABIgeAAQAAAOADAGQACAGAGAAQAEAAADgEQACgEABgHIAJAAQgBALgGAGQgFAGgHAAQgKAAgFgIgAgHgVQgDAFAAALIAUAAIAAgDQAAgKgCgEQgCgFgGAAQgEAAgDAGg");
	this.shape_4.setTransform(86.7,11.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2B6087").s().p("AgEAwIAAg7IgKAAIAAgIIAKAAIAAgIQAAgLADgEQACgFAHAAIAEABIADAAIAAAHIgCAAIgCAAQgEAAgBACQgCACAAAHIAAAJIALAAIAAAIIgLAAIAAA7g");
	this.shape_5.setTransform(82.6,9.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2B6087").s().p("AgMAiIAAhCIAJAAIAAAIQADgFADgCQAEgDAEAAIABAAIABABIAAAIIgBAAIgBAAQgFAAgEADQgCACgDAGIAAAwg");
	this.shape_6.setTransform(79.9,11.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2B6087").s().p("AgOAbQgFgJAAgSQAAgRAFgJQAFgIAJAAQAKAAAFAIQAFAHAAAQIAAADIgBABIgdAAQAAAOACAGQADAGAFAAQAFAAADgEQADgEAAgHIAIAAQgBALgEAGQgGAGgIAAQgJAAgFgIgAgHgVQgDAFAAALIAUAAIAAgDQAAgKgCgEQgDgFgFAAQgEAAgDAGg");
	this.shape_7.setTransform(75.3,11.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2B6087").s().p("AgUAuIAAhZIAGAAIADAGQAEgEADgCQAEgCACAAQAJAAAEAJQAGAJAAARQAAARgGAJQgEAJgJAAQgCAAgEgCIgHgGIAAAdgAgEgjQgDACgEAEIAAAlIAHAGQACADACAAQAGAAADgHQACgGAAgOQAAgOgCgHQgDgGgGAAQgCAAgCACg");
	this.shape_8.setTransform(70.3,12.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2B6087").s().p("AgOAbQgFgJAAgSQAAgRAFgJQAFgIAJAAQAKAAAFAIQAFAHAAAQIAAADIgBABIgdAAQAAAOACAGQADAGAFAAQAFAAADgEQADgEAAgHIAIAAQgBALgEAGQgGAGgIAAQgJAAgFgIgAgHgVQgDAFAAALIAUAAIAAgDQAAgKgCgEQgDgFgFAAQgEAAgDAGg");
	this.shape_9.setTransform(62.3,11.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2B6087").s().p("AAGAuQgGAAgCgDQgDgEAAgGIAAgvIgJAAIAAgIIAJAAIAAgXIAIAAIAAAXIAMAAIAAAIIgMAAIAAAqQAAAGABACQABAAAAABQABAAAAAAQABABAAAAQABAAABAAIAFgBIABAAIAAAIIgFABIgEAAg");
	this.shape_10.setTransform(58.2,10.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2B6087").s().p("AgEAvIAAhDIAIAAIAABDgAgEgkIAAgKIAIAAIAAAKg");
	this.shape_11.setTransform(55.5,9.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2B6087").s().p("AgMAfQgFgFgCgJIAJgCQABAGADAEQADADAEAAQAEAAADgDQADgDAAgEQAAgHgLgJIgBAAQgKgGgDgEQgDgEAAgFQAAgIAFgEQAFgFAHAAQAHAAAEAEQAFAEACAIIgIACQgBgFgDgDQgCgDgEAAQgDAAgDACQgCADAAADQAAAGALAIIAIAFQAEADACAEQADAFAAAFQAAAIgGAFQgFAFgJAAQgHAAgFgEg");
	this.shape_12.setTransform(51.7,11.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2B6087").s().p("AgOAbQgFgJAAgSQAAgRAFgJQAFgIAJAAQAKAAAFAJQAFAIAAARQAAASgFAJQgFAIgKAAQgJAAgFgIgAgHgUQgDAGAAAOQAAAPADAGQACAGAFAAQAGAAACgGQADgHAAgOQAAgNgDgHQgCgGgGAAQgFAAgCAGg");
	this.shape_13.setTransform(44.1,11.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2B6087").s().p("AgQAeQgEgEAAgIQAAgKAJgHQAHgHAPgEIAAgEQAAgGgDgDQgCgDgFAAQgEAAgDADQgCADgBAHIgJgCQACgJAFgFQAFgFAGAAQALAAAFAGQAEAFAAAMIAAAeIAAAIIABAHIgJAAIgBgGIgIAFIgGACQgIAAgFgFgAgFAGQgGAFAAAHQAAAEACADQADACAEAAQACAAADgCQAFgCADgDIAAgVQgLABgFAGg");
	this.shape_14.setTransform(36.1,11.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2B6087").s().p("AgGAxIgJgCIAAgGIAJACIAGAAIAGgBQAAAAAAgBQAAAAABAAQAAgBAAgBQAAAAAAgBQAAgDgCgCQgCgBgDAAIgCAAIgCAAIAAgMIAEABIAAgBIgEAAIAAAAQgGgBgEgGQgEgJAAgRQAAgSAEgJQAGgIAJAAQAIAAAFAFQAFAGAAAKIgIAAQAAgHgDgDQgDgEgFAAQgEAAgDAHQgDAGABAPQgBAOADAGQACAGAGAAQAFAAADgEQACgEAAgGIAIAAQAAAKgEAGQgGAGgIAAIgBAAIAAAFIABAAQAIAAADADQADADABAGQAAAFgFADQgEADgHAAIgGAAgAgEAUIAAAAIAEAAIAAABIgEgBgAgEAUIAAAAg");
	this.shape_15.setTransform(31.1,12.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2B6087").s().p("AgOAbQgFgJAAgSQAAgRAFgJQAFgIAKAAQAJAAAFAIQAFAHAAAQIAAADIAAABIgeAAQAAAOADAGQACAGAGAAQAEAAADgEQACgEABgHIAJAAQgCALgFAGQgFAGgHAAQgKAAgFgIgAgHgVQgCAFgBALIAVAAIAAgDQgBgKgCgEQgCgFgGAAQgEAAgDAGg");
	this.shape_16.setTransform(26.2,11.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2B6087").s().p("AAKAvIAAgwQAAgGgCgEQgCgCgDAAQgDgBgDADQgDACgDAFIAAAzIgJAAIAAhdIAJAAIAAAiQAEgFAEgCQADgCAEAAQAGAAAEAEQADAEAAAKIAAAyg");
	this.shape_17.setTransform(21.1,9.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2B6087").s().p("AAKAiIAAgvQAAgHgBgDQgCgDgFAAQgCAAgDADQgDACgDAEIAAAzIgJAAIAAhCIAJAAIAAAHQAEgEAEgCQACgCAFgBQAHABADAEQADAEAAAJIAAAyg");
	this.shape_18.setTransform(15.7,11.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2B6087").s().p("AgOAbQgFgJAAgSQAAgRAFgJQAFgIAJAAQAKAAAFAJQAFAIAAARQAAASgFAJQgFAIgKAAQgJAAgFgIgAgHgUQgDAGAAAOQAAAPADAGQACAGAFAAQAGAAACgGQADgHAAgOQAAgNgDgHQgCgGgGAAQgFAAgCAGg");
	this.shape_19.setTransform(10.5,11.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2B6087").s().p("AgSAlQgHgMAAgYQAAgZAHgMQAGgMANAAQALAAAGAIQAHAIAAANIgKAAQgBgKgDgFQgDgFgHAAQgIAAgDAJQgEAKgBAUQABAWAEAJQAEAKAIAAQAHAAAEgHQADgFABgLIAAgCIAJAAIAAACQgBAPgGAIQgHAIgLAAQgNAAgGgMg");
	this.shape_20.setTransform(5.1,9.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,105.2,19.6);


(lib.Titulo1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B6087").s().p("AgIAwIAAgMIAJAAIAAAMgAgGAUIAAgEIABgKIAFgLIACgGQAGgLABgHQgBgFgCgDQgCgDgEABQgDAAgDACQgCAEAAAFIAAAAIgIgBQABgIAEgFQAFgFAGAAQAIAAAEAFQAFAEAAAJQAAAJgIANIgDAFQgEAEgBAFQgBAFAAAFIAAABIAAACg");
	this.shape.setTransform(144.9,9.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B6087").s().p("AgOAbQgFgJAAgSQAAgRAFgJQAFgIAJAAQAKAAAFAJQAFAIAAARQAAASgFAJQgFAIgKAAQgJAAgFgIgAgHgUQgDAGAAAOQAAAPADAGQACAGAFAAQAGAAACgGQADgHAAgOQAAgNgDgHQgCgGgGAAQgFAAgCAGg");
	this.shape_1.setTransform(140.2,11.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2B6087").s().p("AAKAvIAAgwQAAgGgBgEQgDgCgDAAQgDgBgDADQgDACgDAFIAAAzIgJAAIAAhdIAJAAIAAAiQAEgFAEgCQADgCAEAAQAHAAADAEQADAEAAAKIAAAyg");
	this.shape_2.setTransform(135.1,9.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2B6087").s().p("AgDAvIAAhdIAIAAIAABdg");
	this.shape_3.setTransform(131.2,9.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2B6087").s().p("AgQAeQgEgEAAgIQAAgKAJgHQAHgHAPgEIAAgEQAAgGgDgDQgCgDgFAAQgEAAgCADQgDADgBAHIgJgCQACgJAFgFQAFgFAGAAQALAAAEAGQAFAFAAAMIAAAeIABAIIAAAHIgJAAIgBgGIgHAFIgHACQgIAAgFgFgAgFAGQgGAFAAAHQAAAEACADQADACAEAAQACAAAEgCQAEgCADgDIAAgVQgLABgFAGg");
	this.shape_4.setTransform(127.2,11.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2B6087").s().p("AgEAuIgGgGIAAAGIgJAAIAAhdIAJAAIAAAhQADgEADgCQADgCADAAQAJAAAEAJQAFAJAAAQQAAASgFAJQgEAJgJAAQgDAAgDgCgAgFgMQgDACgCAEIAAAlQACAEADACQADADACAAQAGAAACgHQADgGAAgPQAAgNgDgHQgCgGgGAAQgCAAgDACg");
	this.shape_5.setTransform(122.1,9.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2B6087").s().p("AgPAeQgFgEAAgIQAAgKAIgHQAJgHAOgEIAAgEQAAgGgDgDQgCgDgFAAQgEAAgCADQgDADgBAHIgJgCQACgJAEgFQAFgFAHAAQALAAAEAGQAFAFAAAMIAAAeIABAIIAAAHIgJAAIgBgGIgHAFIgHACQgIAAgEgFgAgFAGQgGAFAAAHQAAAEACADQADACAEAAQACAAAEgCQAEgCADgDIAAgVQgLABgFAGg");
	this.shape_6.setTransform(116.5,11.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2B6087").s().p("AgMAiIAAhCIAJAAIAAAIQADgFADgCQAEgDAEAAIABAAIABABIAAAIIgBAAIgBAAQgFAAgDADQgDACgDAGIAAAwg");
	this.shape_7.setTransform(112.6,11.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2B6087").s().p("AAGAuQgGAAgCgDQgDgEAAgGIAAgvIgJAAIAAgIIAJAAIAAgXIAIAAIAAAXIAMAAIAAAIIgMAAIAAAqQAAAGABACQABAAAAABQABAAAAAAQABABAAAAQABAAABAAIAFgBIABAAIAAAIIgFABIgEAAg");
	this.shape_8.setTransform(109,10.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2B6087").s().p("AgPAeQgDgEAAgIIAAg0IAJAAIAAAxQAAAGACADQABADAFAAQACAAADgCIAGgHIAAg0IAJAAIAABDIgJAAIAAgHQgEAEgEADQgDACgEAAQgHAAgDgFg");
	this.shape_9.setTransform(102,11.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2B6087").s().p("AgOAbQgFgJAAgSQAAgRAFgJQAFgIAKAAQAJAAAFAIQAFAHAAAQIAAADIAAABIgeAAQAAAOADAGQACAGAGAAQAEAAADgEQACgEABgHIAJAAQgCALgFAGQgFAGgHAAQgKAAgFgIgAgHgVQgCAFgBALIAVAAIAAgDQgBgKgCgEQgCgFgGAAQgEAAgDAGg");
	this.shape_10.setTransform(96.9,11.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2B6087").s().p("AgMAfQgFgFgCgJIAJgCQABAGADAEQADADAEAAQAEAAADgDQADgDAAgEQAAgHgLgJIgBAAQgKgGgDgEQgDgEAAgFQAAgIAFgEQAFgFAHAAQAHAAAEAEQAFAEACAIIgIACQgBgFgDgDQgCgDgEAAQgDAAgDACQgCADAAADQAAAGALAIIAIAFQAEADACAEQADAFAAAFQAAAIgGAFQgFAFgJAAQgHAAgFgEg");
	this.shape_11.setTransform(91.9,11.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2B6087").s().p("AgOAbQgFgJAAgSQAAgRAFgJQAFgIAJAAQAKAAAFAJQAFAIAAARQAAASgFAJQgFAIgKAAQgJAAgFgIgAgHgUQgDAGAAAOQAAAPADAGQACAGAFAAQAGAAACgGQADgHAAgOQAAgNgDgHQgCgGgGAAQgFAAgCAGg");
	this.shape_12.setTransform(84.2,11.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2B6087").s().p("AgMAiIAAhCIAJAAIAAAIQADgFADgCQADgDAFAAIABAAIABABIAAAIIgBAAIgBAAQgFAAgEADQgCACgDAGIAAAwg");
	this.shape_13.setTransform(77.7,11.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2B6087").s().p("AgPAeQgFgEAAgIQAAgKAIgHQAJgHAOgEIAAgEQAAgGgDgDQgCgDgFAAQgEAAgCADQgDADgBAHIgJgCQACgJAEgFQAFgFAHAAQALAAAEAGQAFAFAAAMIAAAeIABAIIAAAHIgJAAIgBgGIgHAFIgHACQgIAAgEgFgAgFAGQgGAFAAAHQAAAEACADQADACAEAAQACAAAEgCQAEgCADgDIAAgVQgLABgFAGg");
	this.shape_14.setTransform(72.8,11.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2B6087").s().p("AgSAiIAAgHIAag0IgXAAIAAgIIAhAAIAAAHIgaA0IAaAAIAAAIg");
	this.shape_15.setTransform(68.1,11.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2B6087").s().p("AgEAvIAAhDIAIAAIAABDgAgEgkIAAgKIAIAAIAAAKg");
	this.shape_16.setTransform(64.8,9.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2B6087").s().p("AgEAvIAAhdIAIAAIAABdg");
	this.shape_17.setTransform(62.3,9.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2B6087").s().p("AgPAeQgFgEAAgIQAAgKAIgHQAJgHAOgEIAAgEQAAgGgCgDQgDgDgFAAQgEAAgDADQgCADgBAHIgJgCQABgJAFgFQAGgFAHAAQAKAAAEAGQAFAFAAAMIAAAeIAAAIIABAHIgJAAIgBgGIgIAFIgHACQgHAAgEgFgAgFAGQgGAFAAAHQAAAEADADQACACAEAAQACAAADgCQAEgCAEgDIAAgVQgLABgFAGg");
	this.shape_18.setTransform(58.3,11.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2B6087").s().p("AgDAvIAAhDIAIAAIAABDgAgDgkIAAgKIAIAAIAAAKg");
	this.shape_19.setTransform(54.5,9.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2B6087").s().p("AgNAbQgFgJgBgSQABgRAFgJQAEgIAKAAQAIAAAFAFQAFAGAAAKIgIAAQgBgHgCgDQgCgEgFAAQgGAAgCAHQgDAGAAAOQAAAPADAGQADAGAFAAQAEAAADgEQADgEABgHIAIAAQgBALgFAGQgEAGgJAAQgKAAgEgIg");
	this.shape_20.setTransform(50.9,11.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2B6087").s().p("AAKAiIAAgvQAAgHgBgDQgDgDgEAAQgCAAgDADQgEACgCAEIAAAzIgJAAIAAhCIAJAAIAAAHQAEgEAEgCQADgCAEgBQAGABAEAEQADAEAAAJIAAAyg");
	this.shape_21.setTransform(45.8,11.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2B6087").s().p("AgOAbQgFgJAAgSQAAgRAFgJQAFgIAKAAQAJAAAFAIQAFAHAAAQIAAADIAAABIgeAAQAAAOADAGQACAGAGAAQAEAAADgEQACgEABgHIAJAAQgCALgFAGQgFAGgHAAQgKAAgFgIgAgHgVQgCAFgBALIAVAAIAAgDQgBgKgCgEQgCgFgGAAQgEAAgDAGg");
	this.shape_22.setTransform(40.6,11.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2B6087").s().p("AAGAuQgGAAgCgDQgDgEAAgGIAAgvIgJAAIAAgIIAJAAIAAgXIAIAAIAAAXIAMAAIAAAIIgMAAIAAAqQAAAGABACQABAAAAABQABAAAAAAQABABAAAAQABAAABAAIAFgBIABAAIAAAIIgFABIgEAAg");
	this.shape_23.setTransform(36.6,10.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2B6087").s().p("AgOAbQgFgJAAgSQAAgRAFgJQAFgIAJAAQAKAAAFAJQAFAIAAARQAAASgFAJQgFAIgKAAQgJAAgFgIgAgHgUQgDAGAAAOQAAAPADAGQACAGAFAAQAGAAACgGQADgHAAgOQAAgNgDgHQgCgGgGAAQgFAAgCAGg");
	this.shape_24.setTransform(32.5,11.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#2B6087").s().p("AgUAuIAAhZIAHAAIACAGQAEgEADgCQAEgCACAAQAJAAAEAJQAGAJAAARQAAARgGAJQgEAJgJAAQgCAAgEgCIgHgGIAAAdgAgFgjQgCACgEAEIAAAlIAGAGQADADACAAQAGAAADgHQACgGAAgOQAAgOgCgHQgDgGgGAAQgCAAgDACg");
	this.shape_25.setTransform(27.6,12.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#2B6087").s().p("AgMAiIAAhCIAJAAIAAAIQADgFADgCQADgDAFAAIABAAIABABIAAAIIgBAAIgBAAQgFAAgEADQgDACgCAGIAAAwg");
	this.shape_26.setTransform(20.7,11.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#2B6087").s().p("AgOAbQgFgJAAgSQAAgRAFgJQAFgIAJAAQAKAAAFAIQAFAHAAAQIAAADIAAABIgeAAQAAAOACAGQAEAGAEAAQAFAAADgEQACgEABgHIAJAAQgCALgEAGQgFAGgJAAQgJAAgFgIgAgHgVQgCAFgBALIAVAAIAAgDQAAgKgDgEQgCgFgGAAQgEAAgDAGg");
	this.shape_27.setTransform(16.1,11.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#2B6087").s().p("AgPAeQgDgEAAgIIAAg0IAJAAIAAAxQAAAGABADQACADAFAAQACAAADgCIAGgHIAAg0IAJAAIAABDIgJAAIAAgHQgEAEgEADQgDACgEAAQgHAAgDgFg");
	this.shape_28.setTransform(11,11.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#2B6087").s().p("AASAwQgEgCgCgEIgHADQgDABgCAAQgNAAgGgMQgHgNAAgXQAAgYAHgMQAGgNANAAQAMAAAGANQAHAMAAAYQAAANgCAJQgCAJgEAHQACAEACABQADACADAAIAAAJQgFgBgEgDgAgNggQgDAJAAAVQAAAUAEAKQADAJAJAAIADgBIAFgDIgEgEIgEgCIACgIQAAAAABAAQAAAAABABQAAAAABAAQAAABABAAIAFAFQACgEAAgGIABgQQAAgWgEgKQgDgKgHAAQgIAAgFAKg");
	this.shape_29.setTransform(5.3,10.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,149.4,19.6);


(lib.Interpolação4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.instance = new lib.LogoHorizontal();
	this.instance.parent = this;
	this.instance.setTransform(-75,-20.3,0.479,0.479);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-20.3,150,40.8);


(lib.Interpolação3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.instance = new lib.LogoHorizontal();
	this.instance.parent = this;
	this.instance.setTransform(-75,-20.4,0.479,0.479);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-20.4,150,40.8);


(lib.Assine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AggBJIAAiQIBAAAIAAANIgyAAIAAAyIAkAAIAAAMIgkAAIAAA3IAzAAIAAAOg");
	this.shape.setTransform(22.3,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgZBAQgKgKAAgUIAOAAQABAOAFAHQAGAHAKAAQAKAAAFgGQAGgIAAgKQAAgJgFgJQgGgHgQgNQgRgMgFgJQgGgIAAgNQAAgNAJgKQAJgKAOAAQAQAAAJALQAJALABASIgOAAQgBgNgFgHQgGgHgIAAQgJAAgFAFQgGAGAAAJQAAAFACAEIAFAIIAOANIANAJQAMAJAFAKQAFAJAAAMQAAASgJAKQgKAKgQAAQgRABgJgMg");
	this.shape_1.setTransform(13.2,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgZBAQgKgKAAgUIAOAAQABAOAFAHQAGAHAKAAQAKAAAFgGQAGgIAAgKQAAgJgFgJQgGgHgQgNQgRgMgFgJQgGgIAAgNQAAgNAJgKQAJgKAOAAQAQAAAJALQAJALABASIgOAAQgBgNgFgHQgGgHgIAAQgJAAgFAFQgGAGAAAJQAAAFACAEIAFAIIAOANIANAJQAMAJAFAKQAFAJAAAMQAAASgJAKQgKAKgQAAQgRABgJgMg");
	this.shape_2.setTransform(4.5,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AghBJIAAiQIBBAAIAAANIgyAAIAAAyIAkAAIAAAMIgkAAIAAA3IA0AAIAAAOg");
	this.shape_3.setTransform(-3.5,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgcA5QgLgTAAgkQAAgnALgSQAKgUAUAAQARAAAJANQAKALAAAWIgPAAQAAgQgFgIQgGgIgKAAQgNgBgFAQQgHAOAAAhQAAAgAHAOQAHAPANAAQALAAAFgJQAGgJAAgQIAAgDIANAAIAAADQABAXgLAMQgJAMgTAAQgSAAgLgSg");
	this.shape_4.setTransform(-12.7,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAaBJIgJgrIgjAAIgJArIgOAAIAfiQIAUAAIAgCQgAgPAQIAeAAIgPhLg");
	this.shape_5.setTransform(-21.9,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Camada 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF7F50").s().p("AnzCUIAAknIPnAAIAAEng");
	this.shape_6.setTransform(-0.2,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.2,-15,100,29.7);


// stage content:
(lib.Banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_136 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(136).call(this.frame_136).wait(1));

	// Assine
	this.instance = new lib.Assine("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(98.8,162,0.024,0.024);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(118).to({_off:false},0).to({regX:-0.2,regY:-0.1,scaleX:1,scaleY:1,x:99.8,y:149.9},6).to({regX:-0.1,scaleX:1.1,scaleY:1.1,x:99.9},6).to({regX:-0.2,scaleX:1,scaleY:1,x:99.8},5).wait(2));

	// Mascara 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_104 = new cjs.Graphics().p("AgWBkIAAjHIAtAAIAADHg");
	var mask_graphics_105 = new cjs.Graphics().p("Ag+BkIAAjHIB9AAIAADHg");
	var mask_graphics_106 = new cjs.Graphics().p("AhmBkIAAjHIDNAAIAADHg");
	var mask_graphics_107 = new cjs.Graphics().p("AiOBkIAAjHIEdAAIAADHg");
	var mask_graphics_108 = new cjs.Graphics().p("Ai2BkIAAjHIFtAAIAADHg");
	var mask_graphics_109 = new cjs.Graphics().p("AjeBkIAAjHIG9AAIAADHg");
	var mask_graphics_110 = new cjs.Graphics().p("AkFBkIAAjHIILAAIAADHg");
	var mask_graphics_111 = new cjs.Graphics().p("AktBkIAAjHIJbAAIAADHg");
	var mask_graphics_112 = new cjs.Graphics().p("AlWBkIAAjHIKsAAIAADHg");
	var mask_graphics_113 = new cjs.Graphics().p("Al9BkIAAjHIL7AAIAADHg");
	var mask_graphics_114 = new cjs.Graphics().p("AmlBkIAAjHINLAAIAADHg");
	var mask_graphics_115 = new cjs.Graphics().p("AnNBkIAAjHIObAAIAADHg");
	var mask_graphics_116 = new cjs.Graphics().p("An1BkIAAjHIPrAAIAADHg");
	var mask_graphics_117 = new cjs.Graphics().p("AodBkIAAjHIQ7AAIAADHg");
	var mask_graphics_118 = new cjs.Graphics().p("Al5JPIAAjHISMAAIAADHg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(104).to({graphics:mask_graphics_104,x:42,y:108.3}).wait(1).to({graphics:mask_graphics_105,x:46,y:108.3}).wait(1).to({graphics:mask_graphics_106,x:50.1,y:108.3}).wait(1).to({graphics:mask_graphics_107,x:54.2,y:108.3}).wait(1).to({graphics:mask_graphics_108,x:58.3,y:108.3}).wait(1).to({graphics:mask_graphics_109,x:62.4,y:108.3}).wait(1).to({graphics:mask_graphics_110,x:66.5,y:108.3}).wait(1).to({graphics:mask_graphics_111,x:70.6,y:108.3}).wait(1).to({graphics:mask_graphics_112,x:74.6,y:108.3}).wait(1).to({graphics:mask_graphics_113,x:78.7,y:108.3}).wait(1).to({graphics:mask_graphics_114,x:82.8,y:108.3}).wait(1).to({graphics:mask_graphics_115,x:86.9,y:108.3}).wait(1).to({graphics:mask_graphics_116,x:90.9,y:108.3}).wait(1).to({graphics:mask_graphics_117,x:95,y:108.3}).wait(1).to({graphics:mask_graphics_118,x:78.7,y:59.1}).wait(19));

	// Coaches de Carreira
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B2B2B").s().p("AgPAeQgFgEAAgIQAAgKAIgHQAJgHAOgEIAAgEQAAgGgCgDQgDgDgFAAQgEAAgCADQgDADgBAHIgJgCQACgJAEgFQAGgFAHAAQAKAAAEAGQAFAFAAAMIAAAeIABAIIAAAHIgJAAIgBgGIgIAFIgHACQgHAAgEgFgAgFAGQgGAFAAAHQAAAEADADQACACAEAAQACAAADgCQAEgCAEgDIAAgVQgLABgFAGg");
	this.shape.setTransform(141.9,109.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B2B2B").s().p("AgMAjIAAhDIAJAAIAAAIQADgFADgCQADgCAFgBIABAAIABABIAAAIIgBAAIgBAAQgFABgEACQgCACgDAGIAAAxg");
	this.shape_1.setTransform(138,109.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2B2B2B").s().p("AgDAvIAAhCIAIAAIAABCgAgDgkIAAgKIAIAAIAAAKg");
	this.shape_2.setTransform(134.7,108.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2B2B2B").s().p("AgOAbQgFgJAAgSQAAgRAFgJQAFgIAJAAQAKAAAFAIQAFAHAAAQIAAADIgBABIgdAAQAAAOACAGQAEAGAEAAQAFAAADgEQADgEAAgHIAIAAQgBALgEAGQgGAGgIAAQgJAAgFgIgAgHgVQgDAFAAALIAUAAIAAgDQABgKgDgEQgDgFgFAAQgEAAgDAGg");
	this.shape_3.setTransform(131,109.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2B2B2B").s().p("AgMAjIAAhDIAJAAIAAAIQADgFADgCQADgCAFgBIABAAIABABIAAAIIgBAAIgBAAQgFABgEACQgCACgDAGIAAAxg");
	this.shape_4.setTransform(127.2,109.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2B2B2B").s().p("AgMAjIAAhDIAJAAIAAAIQADgFADgCQADgCAFgBIABAAIABABIAAAIIgBAAIgBAAQgFABgEACQgDACgCAGIAAAxg");
	this.shape_5.setTransform(123.8,109.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2B2B2B").s().p("AgPAeQgFgEAAgIQAAgKAIgHQAJgHAOgEIAAgEQAAgGgCgDQgDgDgFAAQgEAAgCADQgDADgBAHIgJgCQACgJAEgFQAGgFAHAAQAKAAAEAGQAFAFAAAMIAAAeIABAIIAAAHIgJAAIgBgGIgIAFIgHACQgHAAgEgFgAgFAGQgGAFAAAHQAAAEADADQACACAEAAQACAAADgCQAEgCAEgDIAAgVQgLABgFAGg");
	this.shape_6.setTransform(118.9,109.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2B2B2B").s().p("AgSAlQgHgMABgYQgBgYAHgNQAGgMANAAQALAAAHAIQAFAIAAAOIgJAAQgBgLgDgFQgDgGgHABQgIgBgEAKQgDAJAAAVQAAAWADAJQAFAKAJAAQAGgBAEgFQAEgHgBgKIAAgCIAJAAIAAACQABAPgHAIQgGAIgMAAQgNAAgGgMg");
	this.shape_7.setTransform(113.4,108.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2B2B2B").s().p("AgOAbQgFgJAAgSQAAgRAFgJQAFgIAJAAQAKAAAFAIQAFAHAAAQIAAADIgBABIgdAAQAAAOACAGQAEAGAEAAQAFAAADgEQADgEAAgHIAIAAQgBALgEAGQgGAGgIAAQgJAAgFgIgAgHgVQgCAFgBALIAUAAIAAgDQAAgKgCgEQgDgFgFAAQgEAAgDAGg");
	this.shape_8.setTransform(105.1,109.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2B2B2B").s().p("AgPAnQgEgJAAgSQAAgQAEgJQAFgJAJAAQACAAAEACIAGAGIAAghIAJAAIAABdIgJAAIAAgGIgGAGQgEACgCAAQgJAAgFgJgAgHgIQgDAHAAANQAAAPADAGQACAHAFAAQADAAADgDQADgCACgEIAAglIgFgGQgDgCgDAAQgFAAgCAGg");
	this.shape_9.setTransform(99.8,108.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2B2B2B").s().p("AgMAfQgFgFgCgJIAJgCQABAGADAEQADADAEAAQAEAAADgDQADgDAAgEQAAgHgLgJIgBAAQgKgGgDgEQgDgEAAgFQAAgIAFgEQAFgFAHAAQAHAAAEAEQAFAEACAIIgIACQgBgFgDgDQgCgDgEAAQgDAAgDACQgCADAAADQAAAGALAIIAIAFQAEADACAEQADAFAAAFQAAAIgGAFQgFAFgJAAQgHAAgFgEg");
	this.shape_10.setTransform(92,109.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2B2B2B").s().p("AgOAbQgFgJAAgSQAAgRAFgJQAFgIAKAAQAJAAAFAIQAFAHAAAQIAAADIgBABIgdAAQAAAOADAGQACAGAGAAQAEAAADgEQACgEABgHIAIAAQAAALgGAGQgFAGgHAAQgKAAgFgIgAgHgVQgDAFAAALIAUAAIAAgDQAAgKgCgEQgCgFgGAAQgEAAgDAGg");
	this.shape_11.setTransform(87.2,109.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2B2B2B").s().p("AAKAvIAAgvQAAgIgBgCQgDgDgDgBQgDAAgDADQgDACgDAEIAAA0IgJAAIAAhdIAJAAIAAAiQAEgFAEgCQADgCAEAAQAGAAAEAEQADAEAAAKIAAAyg");
	this.shape_12.setTransform(82,108.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2B2B2B").s().p("AgOAbQgEgJAAgSQAAgRAEgJQAGgIAJAAQAIAAAFAFQAFAGAAAKIgIAAQAAgHgDgDQgDgEgFAAQgEAAgDAHQgDAGABAOQgBAPADAGQACAGAGAAQAFAAADgEQACgEAAgHIAIAAQAAALgEAGQgGAGgIAAQgJAAgGgIg");
	this.shape_13.setTransform(76.9,109.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2B2B2B").s().p("AgPAeQgFgEAAgIQAAgKAIgHQAJgHAOgEIAAgEQAAgGgCgDQgDgDgFAAQgEAAgCADQgDADgBAHIgJgCQACgJAEgFQAGgFAHAAQAKAAAEAGQAFAFAAAMIAAAeIABAIIAAAHIgJAAIgBgGIgIAFIgHACQgHAAgEgFgAgFAGQgGAFAAAHQAAAEADADQACACAEAAQACAAADgCQAEgCAEgDIAAgVQgLABgFAGg");
	this.shape_14.setTransform(71.7,109.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2B2B2B").s().p("AgOAbQgFgJAAgSQAAgRAFgJQAFgIAJAAQAKAAAFAJQAFAIAAARQAAASgFAJQgFAIgKAAQgJAAgFgIgAgHgUQgDAGAAAOQAAAPADAGQACAGAFAAQAGAAACgGQADgHAAgOQAAgNgDgHQgCgGgGAAQgFAAgCAGg");
	this.shape_15.setTransform(66.6,109.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2B2B2B").s().p("AgSAlQgHgMABgYQgBgYAHgNQAGgMANAAQALAAAHAIQAFAIAAAOIgJAAQgBgLgDgFQgDgGgHABQgIgBgEAKQgDAJAAAVQAAAWADAJQAFAKAJAAQAGgBAEgFQAEgHgBgKIAAgCIAJAAIAAACQABAPgHAIQgGAIgMAAQgNAAgGgMg");
	this.shape_16.setTransform(61.2,108.5);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},104).wait(33));

	// Mascara 3 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_90 = new cjs.Graphics().p("AgLBmIAAjMIAWAAIAADMg");
	var mask_1_graphics_91 = new cjs.Graphics().p("AhABmIAAjMICBAAIAADMg");
	var mask_1_graphics_92 = new cjs.Graphics().p("Ah2BmIAAjMIDtAAIAADMg");
	var mask_1_graphics_93 = new cjs.Graphics().p("AisBmIAAjMIFZAAIAADMg");
	var mask_1_graphics_94 = new cjs.Graphics().p("AjiBmIAAjMIHEAAIAADMg");
	var mask_1_graphics_95 = new cjs.Graphics().p("AkXBmIAAjMIIvAAIAADMg");
	var mask_1_graphics_96 = new cjs.Graphics().p("AlNBmIAAjMIKbAAIAADMg");
	var mask_1_graphics_97 = new cjs.Graphics().p("AmDBmIAAjMIMHAAIAADMg");
	var mask_1_graphics_98 = new cjs.Graphics().p("Am4BmIAAjMINxAAIAADMg");
	var mask_1_graphics_99 = new cjs.Graphics().p("AnuBmIAAjMIPdAAIAADMg");
	var mask_1_graphics_100 = new cjs.Graphics().p("AokBmIAAjMIRJAAIAADMg");
	var mask_1_graphics_101 = new cjs.Graphics().p("ApaBmIAAjMIS1AAIAADMg");
	var mask_1_graphics_102 = new cjs.Graphics().p("AnJHrIAAjNIUgAAIAADNg");
	var mask_1_graphics_136 = new cjs.Graphics().p("AnJHrIAAjNIUgAAIAADNg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(90).to({graphics:mask_1_graphics_90,x:38,y:88.1}).wait(1).to({graphics:mask_1_graphics_91,x:43.6,y:88.1}).wait(1).to({graphics:mask_1_graphics_92,x:49.2,y:88.1}).wait(1).to({graphics:mask_1_graphics_93,x:54.8,y:88.1}).wait(1).to({graphics:mask_1_graphics_94,x:60.5,y:88.1}).wait(1).to({graphics:mask_1_graphics_95,x:66,y:88.1}).wait(1).to({graphics:mask_1_graphics_96,x:71.7,y:88.1}).wait(1).to({graphics:mask_1_graphics_97,x:77.3,y:88.1}).wait(1).to({graphics:mask_1_graphics_98,x:82.9,y:88.1}).wait(1).to({graphics:mask_1_graphics_99,x:88.5,y:88.1}).wait(1).to({graphics:mask_1_graphics_100,x:94.1,y:88.1}).wait(1).to({graphics:mask_1_graphics_101,x:99.7,y:88.1}).wait(1).to({graphics:mask_1_graphics_102,x:85.5,y:49.2}).wait(34).to({graphics:mask_1_graphics_136,x:85.5,y:49.2}).wait(1));

	// O escritório virtual dos 
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2B2B2B").s().p("AgLAeQgFgFgCgIIAIgCQABAGAEADQADADADAAQAEAAADgDQACgDAAgEQAAgHgLgIQgJgGgDgEQgDgEAAgFQAAgHAFgFQAEgEAHAAQAGAAAFAEQAEADACAIIgHADQgBgGgDgCQgCgDgEAAQgDAAgCACQgDACAAAEQAAAGALAHIAHAFQAFADACAEQACAEAAAFQAAAJgFAEQgFAFgJAAQgHAAgEgEg");
	this.shape_17.setTransform(145.2,90.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2B2B2B").s().p("AgOAaQgFgIAAgSQAAgRAFgIQAFgIAJAAQAKAAAFAIQAFAJAAAQQAAARgFAJQgFAIgKAAQgJAAgFgIgAgHgTQgDAGAAANQAAAPADAGQACAGAFAAQAFAAADgHQACgGAAgOQAAgNgCgGQgDgHgFAAQgFAAgCAHg");
	this.shape_18.setTransform(140.4,90.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2B2B2B").s().p("AgOAlQgFgIAAgRQAAgQAFgIQAFgJAIAAQACAAAEACQADABADAEIAAgfIAJAAIAABaIgJAAIAAgGIgGAFQgDACgDAAQgIAAgFgJgAgHgIQgDAHAAAMQAAAPADAGQACAGAFAAQADAAADgCQADgCACgEIAAgkIgFgGQgDgCgDAAQgEAAgDAGg");
	this.shape_19.setTransform(135.2,89.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2B2B2B").s().p("AgDAtIAAhaIAIAAIAABag");
	this.shape_20.setTransform(129,89.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2B2B2B").s().p("AgPAdQgFgEAAgIQABgJAHgHQAJgGAOgEIAAgEQAAgHgDgCQgCgDgFAAQgEAAgCADQgDADgBAGIgJgBQACgJAFgFQAEgFAIAAQAJAAAEAGQAFAFAAALIAAAdIABAIIABAHIgJAAIgBgGQgEAEgDABIgHACQgIAAgEgFgAgFAGQgGAFAAAGQAAAEACADQADACAEAAIAGgBIAHgGIAAgUQgLABgFAGg");
	this.shape_21.setTransform(125.1,90.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2B2B2B").s().p("AgOAeQgEgFAAgIIAAgxIAJAAIAAAuQABAHABADQACACADAAQADAAADgCQADgCACgFIAAgxIAJAAIAABAIgJAAIAAgHQgDAFgEACQgDABgEAAQgGAAgDgDg");
	this.shape_22.setTransform(120,90.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2B2B2B").s().p("AAGAsQgGAAgCgCQgDgDAAgHIAAguIgJAAIAAgHIAJAAIAAgXIAIAAIAAAXIAMAAIAAAHIgMAAIAAApQAAAGABACQAAABABAAQAAAAABABQAAAAABAAQABAAABAAIAFgBIABAAIAAAHIgFABIgEAAg");
	this.shape_23.setTransform(115.9,89.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2B2B2B").s().p("AgMAhIAAhAIAJAAIAAAHQADgEADgCQAEgCAEgBIABAAIABABIAAAIIgBAAIgBAAQgFAAgDACQgDADgDAFIAAAvg");
	this.shape_24.setTransform(113,90.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#2B2B2B").s().p("AgEAtIAAhAIAJAAIAABAgAgEgjIAAgKIAJAAIAAAKg");
	this.shape_25.setTransform(109.8,89.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#2B2B2B").s().p("AgFAhIgQhBIAJAAIAMA3IAOg3IAIAAIgQBBg");
	this.shape_26.setTransform(106.3,90.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#2B2B2B").s().p("AgOAaQgFgIAAgSQAAgRAFgIQAFgIAJAAQAKAAAFAIQAFAJAAAQQAAARgFAJQgFAIgKAAQgJAAgFgIgAgHgTQgDAGAAANQAAAPADAGQACAGAFAAQAFAAADgHQACgGAAgOQAAgNgCgGQgDgHgFAAQgFAAgCAHg");
	this.shape_27.setTransform(98.8,90.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#2B2B2B").s().p("AgEAtIAAhAIAIAAIAABAgAgEgjIAAgKIAIAAIAAAKg");
	this.shape_28.setTransform(95.2,89.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#2B2B2B").s().p("AgMAhIAAhAIAJAAIAAAHQADgEADgCQAEgCAEgBIABAAIABABIAAAIIgBAAIgBAAQgFAAgDACQgDADgDAFIAAAvg");
	this.shape_29.setTransform(92.7,90.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#2B2B2B").s().p("AgOAoQgFgIAAgSQAAgQAFgJQAFgIAJAAQAKAAAFAIQAFAJAAAQQAAASgFAIQgFAIgKAAQgJABgFgJgAgHgFQgDAFAAAOQAAAPADAGQACAGAFAAQAFAAADgGQACgHAAgOQAAgOgCgFQgDgHgFAAQgFAAgCAHgAgIgaIAMgWIALAAIgQAWg");
	this.shape_30.setTransform(88.2,89.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#2B2B2B").s().p("AAGAsQgGAAgCgCQgDgDAAgHIAAguIgJAAIAAgHIAJAAIAAgXIAIAAIAAAXIAMAAIAAAHIgMAAIAAApQAAAGABACQABABAAAAQAAAAABABQAAAAABAAQABAAABAAIAFgBIABAAIAAAHIgFABIgEAAg");
	this.shape_31.setTransform(84.3,89.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#2B2B2B").s().p("AgDAtIAAhAIAIAAIAABAgAgDgjIAAgKIAIAAIAAAKg");
	this.shape_32.setTransform(81.6,89.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#2B2B2B").s().p("AgMAhIAAhAIAJAAIAAAHQADgEADgCQAEgCAEgBIABAAIABABIAAAIIgBAAIgBAAQgFAAgDACQgDADgDAFIAAAvg");
	this.shape_33.setTransform(79.1,90.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#2B2B2B").s().p("AgNAaQgFgIAAgSQAAgRAFgIQAFgIAJAAQAIAAAEAFQAFAGABAJIgIAAQgBgGgCgDQgDgEgEAAQgFAAgDAHQgCAGAAANQAAAPACAGQADAGAFAAQAFAAACgEQADgEAAgIIAIAAQAAALgFAGQgFAGgIAAQgJAAgFgIg");
	this.shape_34.setTransform(74.8,90.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#2B2B2B").s().p("AgLAeQgFgFgCgIIAIgCQABAGAEADQADADADAAQAEAAADgDQACgDAAgEQAAgHgLgIQgJgGgDgEQgDgEAAgFQAAgHAFgFQAEgEAHAAQAGAAAFAEQAEADACAIIgHADQgBgGgDgCQgCgDgEAAQgDAAgCACQgDACAAAEQAAAGALAHIAHAFQAFADACAEQACAEAAAFQAAAJgFAEQgFAFgJAAQgHAAgEgEg");
	this.shape_35.setTransform(70,90.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#2B2B2B").s().p("AgNAaQgFgIgBgSQABgRAFgIQAEgIAKAAQAJAAAFAHQAFAIAAAPIAAADIAAABIgeAAQAAAOADAGQADAGAFAAQAFAAACgEQADgEAAgIIAIAAQgBALgFAGQgEAGgIAAQgKAAgEgIgAgGgVQgDAFgBALIAVAAIAAgDQAAgJgDgEQgCgFgFAAQgFAAgCAFg");
	this.shape_36.setTransform(65.3,90.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#2B2B2B").s().p("AgSAjQgGgMAAgXQAAgXAGgMQAHgLALgBQAMABAHALQAGAMAAAXQAAAXgGAMQgHANgMAAQgLAAgHgNgAgLgdQgDAIAAATQAAAVADAKQAEAKAHAAQAIgBAEgIQADgKAAgUQAAgUgDgJQgEgJgIAAQgHAAgEAJg");
	this.shape_37.setTransform(57.1,89.5);

	var maskedShapeInstanceList = [this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},90).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},46).wait(1));

	// Logo
	this.instance_1 = new lib.Interpolação3("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(102,-48.6);
	this.instance_1._off = true;

	this.instance_2 = new lib.Interpolação4("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(99,50.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(67).to({_off:false},0).to({_off:true,x:99,y:50.4},6).wait(64));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(67).to({_off:false},6).to({scaleX:1.08,scaleY:0.83,y:54},5).to({scaleX:1,scaleY:1,y:50.4},3).to({scaleY:1.07,y:48.9},3).to({scaleY:1,y:50.4},3).wait(21).to({startPosition:0},0).wait(28).to({startPosition:0},0).wait(1));

	// Transition
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AvnC+IAAl7IfPAAIAAF7g");
	this.shape_38.setTransform(100,-35.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AvnEkIAApHIfPAAIAAJHg");
	this.shape_39.setTransform(100,-18.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AvnGKIAAsTIfPAAIAAMTg");
	this.shape_40.setTransform(100,-1.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AvnHwIAAvgIfPAAIAAPgg");
	this.shape_41.setTransform(100,15.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AvnJXIAAytIfPAAIAAStg");
	this.shape_42.setTransform(100,32.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AvnK9IAA15IfPAAIAAV5g");
	this.shape_43.setTransform(100,49.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AvnMjIAA5FIfPAAIAAZFg");
	this.shape_44.setTransform(100,66.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AvnOJIAA8RIfPAAIAAcRg");
	this.shape_45.setTransform(100,83.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AvnPvIAA/dIfPAAIAAfdg");
	this.shape_46.setTransform(100,100.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_38}]},55).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_46}]},73).wait(1));

	// Mascara 1 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("AgVBlIAAjJIAsAAIAADJg");
	var mask_2_graphics_1 = new cjs.Graphics().p("AhWBlIAAjJICtAAIAADJg");
	var mask_2_graphics_2 = new cjs.Graphics().p("AiXBlIAAjJIEwAAIAADJg");
	var mask_2_graphics_3 = new cjs.Graphics().p("AjZBlIAAjJIGzAAIAADJg");
	var mask_2_graphics_4 = new cjs.Graphics().p("AkaBlIAAjJII1AAIAADJg");
	var mask_2_graphics_5 = new cjs.Graphics().p("AlbBlIAAjJIK3AAIAADJg");
	var mask_2_graphics_6 = new cjs.Graphics().p("AmcBlIAAjJIM5AAIAADJg");
	var mask_2_graphics_7 = new cjs.Graphics().p("AndBlIAAjJIO7AAIAADJg");
	var mask_2_graphics_8 = new cjs.Graphics().p("AoeBlIAAjJIQ9AAIAADJg");
	var mask_2_graphics_9 = new cjs.Graphics().p("ApfBlIAAjJIS/AAIAADJg");
	var mask_2_graphics_10 = new cjs.Graphics().p("AqgBlIAAjJIVBAAIAADJg");
	var mask_2_graphics_11 = new cjs.Graphics().p("ArhBlIAAjJIXDAAIAADJg");
	var mask_2_graphics_12 = new cjs.Graphics().p("AsiBlIAAjJIZFAAIAADJg");
	var mask_2_graphics_13 = new cjs.Graphics().p("AtjBlIAAjJIbHAAIAADJg");
	var mask_2_graphics_14 = new cjs.Graphics().p("AukBlIAAjJIdJAAIAADJg");
	var mask_2_graphics_15 = new cjs.Graphics().p("AvlBlIAAjJIfLAAIAADJg");
	var mask_2_graphics_136 = new cjs.Graphics().p("AvlBlIAAjJIfLAAIAADJg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:3,y:17.1}).wait(1).to({graphics:mask_2_graphics_1,x:9.5,y:17.1}).wait(1).to({graphics:mask_2_graphics_2,x:16,y:17.1}).wait(1).to({graphics:mask_2_graphics_3,x:22.5,y:17.1}).wait(1).to({graphics:mask_2_graphics_4,x:29,y:17.1}).wait(1).to({graphics:mask_2_graphics_5,x:35.5,y:17.1}).wait(1).to({graphics:mask_2_graphics_6,x:42,y:17.1}).wait(1).to({graphics:mask_2_graphics_7,x:48.5,y:17.1}).wait(1).to({graphics:mask_2_graphics_8,x:55,y:17.1}).wait(1).to({graphics:mask_2_graphics_9,x:61.5,y:17.1}).wait(1).to({graphics:mask_2_graphics_10,x:68,y:17.1}).wait(1).to({graphics:mask_2_graphics_11,x:74.5,y:17.1}).wait(1).to({graphics:mask_2_graphics_12,x:81,y:17.1}).wait(1).to({graphics:mask_2_graphics_13,x:87.5,y:17.1}).wait(1).to({graphics:mask_2_graphics_14,x:94,y:17.1}).wait(1).to({graphics:mask_2_graphics_15,x:100.5,y:17.1}).wait(121).to({graphics:mask_2_graphics_136,x:100.5,y:17.1}).wait(1));

	// Titulo 1
	this.instance_3 = new lib.Titulo1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(119.5,17.5,1,1,0,0,0,95.8,9.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#2B6087").s().p("AgIAwIAAgMIAJAAIAAAMgAgGAUIAAgEIABgKIAEgLIADgGQAGgLAAgHQABgFgDgDQgCgDgEABQgDAAgCACQgDAEAAAEIAAABIgIgBQABgJAEgEQAFgFAGAAQAIAAAFAFQAEAEAAAJQAAAJgJANIgCAGQgEADgBAFQgBAFAAAFIAAABIAAACg");
	this.shape_47.setTransform(168.6,17.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#2B6087").s().p("AgOAbQgFgJAAgSQAAgRAFgJQAFgIAJAAQAKAAAFAJQAFAIAAARQAAASgFAJQgFAIgKAAQgJAAgFgIgAgHgUQgDAGAAAOQAAAPADAGQACAGAFAAQAGAAACgGQADgHAAgOQAAgNgDgHQgCgGgGAAQgFAAgCAGg");
	this.shape_48.setTransform(163.9,18.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#2B6087").s().p("AAKAvIAAgwQAAgGgBgEQgCgCgFAAQgCgBgDADQgDACgDAFIAAAzIgJAAIAAhdIAJAAIAAAiQAEgFAEgCQADgCAEAAQAHAAADAEQADAEAAAKIAAAyg");
	this.shape_49.setTransform(158.8,17.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#2B6087").s().p("AgEAvIAAhdIAIAAIAABdg");
	this.shape_50.setTransform(154.9,17.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#2B6087").s().p("AgPAeQgFgEAAgIQAAgKAIgHQAJgHAOgEIAAgEQAAgGgCgDQgDgDgFAAQgEAAgCADQgDADgBAHIgJgCQACgJAEgFQAGgFAHAAQAKAAAEAGQAFAFAAAMIAAAeIABAIIAAAHIgJAAIgBgGIgIAFIgHACQgHAAgEgFgAgFAGQgGAFAAAHQAAAEADADQACACAEAAQACAAADgCQAEgCAEgDIAAgVQgLABgFAGg");
	this.shape_51.setTransform(150.9,18.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#2B6087").s().p("AgEAuIgGgGIAAAGIgJAAIAAhdIAJAAIAAAhQADgEADgCQADgCADAAQAJAAAEAJQAFAJAAAQQAAASgFAJQgEAJgJAAQgDAAgDgCgAgFgMQgDACgCAEIAAAlQACAEADACQADADACAAQAGAAACgHQADgGAAgPQAAgNgDgHQgCgGgGAAQgCAAgDACg");
	this.shape_52.setTransform(145.8,17.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#2B6087").s().p("AgPAeQgFgEAAgIQAAgKAIgHQAJgHAOgEIAAgEQAAgGgCgDQgDgDgFAAQgEAAgDADQgCADgBAHIgJgCQABgJAFgFQAGgFAHAAQAKAAAEAGQAFAFAAAMIAAAeIAAAIIABAHIgJAAIgBgGIgIAFIgHACQgHAAgEgFgAgFAGQgGAFAAAHQAAAEADADQACACAEAAQACAAADgCQAEgCAEgDIAAgVQgLABgFAGg");
	this.shape_53.setTransform(140.2,18.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#2B6087").s().p("AgMAiIAAhCIAJAAIAAAIQADgFADgCQADgDAFAAIABAAIABABIAAAIIgBAAIgBAAQgFAAgEADQgDACgCAGIAAAwg");
	this.shape_54.setTransform(136.3,18.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#2B6087").s().p("AAGAuQgGAAgCgDQgDgEAAgGIAAgvIgJAAIAAgIIAJAAIAAgXIAIAAIAAAXIAMAAIAAAIIgMAAIAAAqQAAAGABACQABAAAAABQABAAAAAAQABABAAAAQABAAABAAIAFgBIABAAIAAAIIgFABIgEAAg");
	this.shape_55.setTransform(132.7,17.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#2B6087").s().p("AgPAeQgDgEAAgIIAAg0IAJAAIAAAxQAAAGABADQACADAFAAQACAAADgCIAGgHIAAg0IAJAAIAABDIgJAAIAAgHQgEAEgEADQgDACgEAAQgHAAgDgFg");
	this.shape_56.setTransform(125.7,18.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#2B6087").s().p("AgOAbQgFgJAAgSQAAgRAFgJQAFgIAJAAQAKAAAFAIQAFAHAAAQIAAADIgBABIgdAAQAAAOACAGQAEAGAEAAQAFAAADgEQADgEAAgHIAIAAQAAALgGAGQgEAGgJAAQgJAAgFgIgAgHgVQgDAFAAALIAUAAIAAgDQABgKgDgEQgCgFgGAAQgEAAgDAGg");
	this.shape_57.setTransform(120.6,18.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#2B6087").s().p("AgMAfQgFgFgCgJIAJgCQABAGADAEQADADAEAAQAEAAADgDQADgDAAgEQAAgHgLgJIgBAAQgKgGgDgEQgDgEAAgFQAAgIAFgEQAFgFAHAAQAHAAAEAEQAFAEACAIIgIACQgBgFgDgDQgCgDgEAAQgDAAgDACQgCADAAADQAAAGALAIIAIAFQAEADACAEQADAFAAAFQAAAIgGAFQgFAFgJAAQgHAAgFgEg");
	this.shape_58.setTransform(115.6,18.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#2B6087").s().p("AgOAbQgFgJAAgSQAAgRAFgJQAFgIAJAAQAKAAAFAJQAFAIAAARQAAASgFAJQgFAIgKAAQgJAAgFgIgAgHgUQgDAGAAAOQAAAPADAGQACAGAFAAQAGAAACgGQADgHAAgOQAAgNgDgHQgCgGgGAAQgFAAgCAGg");
	this.shape_59.setTransform(107.9,18.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#2B6087").s().p("AgMAiIAAhCIAJAAIAAAIQADgFADgCQAEgDAEAAIACAAIAAABIAAAIIAAAAIgCAAQgFAAgEADQgDACgCAGIAAAwg");
	this.shape_60.setTransform(101.4,18.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#2B6087").s().p("AgPAeQgFgEAAgIQAAgKAIgHQAJgHAOgEIAAgEQAAgGgCgDQgDgDgFAAQgEAAgDADQgCADgBAHIgJgCQABgJAFgFQAGgFAHAAQAKAAAEAGQAFAFAAAMIAAAeIAAAIIABAHIgJAAIgBgGIgIAFIgHACQgHAAgEgFgAgFAGQgGAFAAAHQAAAEADADQACACAEAAQACAAADgCQAEgCAEgDIAAgVQgLABgFAGg");
	this.shape_61.setTransform(96.5,18.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#2B6087").s().p("AgSAiIAAgHIAag0IgXAAIAAgIIAiAAIAAAHIgaA0IAaAAIAAAIg");
	this.shape_62.setTransform(91.8,18.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#2B6087").s().p("AgDAvIAAhDIAIAAIAABDgAgDgkIAAgKIAIAAIAAAKg");
	this.shape_63.setTransform(88.5,17.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#2B6087").s().p("AgDAvIAAhdIAIAAIAABdg");
	this.shape_64.setTransform(86,17.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#2B6087").s().p("AgQAeQgEgEAAgIQAAgKAJgHQAHgHAPgEIAAgEQAAgGgDgDQgCgDgFAAQgEAAgDADQgCADgBAHIgJgCQACgJAFgFQAFgFAGAAQALAAAFAGQAEAFAAAMIAAAeIAAAIIABAHIgJAAIgBgGIgIAFIgGACQgIAAgFgFgAgFAGQgGAFAAAHQAAAEADADQACACAEAAQACAAADgCQAFgCADgDIAAgVQgLABgFAGg");
	this.shape_65.setTransform(82,18.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#2B6087").s().p("AgDAvIAAhDIAIAAIAABDgAgDgkIAAgKIAIAAIAAAKg");
	this.shape_66.setTransform(78.2,17.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#2B6087").s().p("AgOAbQgEgJAAgSQAAgRAEgJQAGgIAJAAQAIAAAFAFQAFAGAAAKIgIAAQgBgHgCgDQgDgEgEAAQgFAAgDAHQgCAGAAAOQAAAPACAGQADAGAFAAQAFAAADgEQACgEAAgHIAJAAQAAALgGAGQgEAGgJAAQgJAAgGgIg");
	this.shape_67.setTransform(74.6,18.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#2B6087").s().p("AAKAiIAAgvQAAgHgCgDQgBgDgFAAQgCAAgDADQgDACgDAEIAAAzIgJAAIAAhCIAJAAIAAAHQAEgEAEgCQADgCAEgBQAHABADAEQADAEAAAJIAAAyg");
	this.shape_68.setTransform(69.5,18.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#2B6087").s().p("AgOAbQgFgJAAgSQAAgRAFgJQAFgIAJAAQAKAAAFAIQAFAHAAAQIAAADIgBABIgdAAQAAAOADAGQADAGAEAAQAFAAADgEQADgEAAgHIAIAAQAAALgGAGQgEAGgJAAQgJAAgFgIgAgHgVQgDAFAAALIAUAAIAAgDQABgKgDgEQgCgFgGAAQgEAAgDAGg");
	this.shape_69.setTransform(64.3,18.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#2B6087").s().p("AAGAuQgGAAgCgDQgDgEAAgGIAAgvIgJAAIAAgIIAJAAIAAgXIAIAAIAAAXIAMAAIAAAIIgMAAIAAAqQAAAGABACQABAAAAABQABAAAAAAQABABAAAAQABAAABAAIAFgBIABAAIAAAIIgFABIgEAAg");
	this.shape_70.setTransform(60.3,17.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#2B6087").s().p("AgOAbQgFgJAAgSQAAgRAFgJQAFgIAJAAQAKAAAFAJQAFAIAAARQAAASgFAJQgFAIgKAAQgJAAgFgIgAgHgUQgDAGAAAOQAAAPADAGQACAGAFAAQAGAAACgGQADgHAAgOQAAgNgDgHQgCgGgGAAQgFAAgCAGg");
	this.shape_71.setTransform(56.2,18.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#2B6087").s().p("AgTAuIAAhZIAFAAIAEAGQADgEADgCQADgCADAAQAIAAAGAJQAEAJAAARQAAARgEAJQgGAJgIAAQgDAAgDgCIgGgGIAAAdgAgFgjQgDACgCAEIAAAlIAFAGQADADACAAQAGAAADgHQACgGAAgOQAAgOgCgHQgDgGgGAAQgCAAgDACg");
	this.shape_72.setTransform(51.3,19.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#2B6087").s().p("AgMAiIAAhCIAJAAIAAAIQADgFADgCQADgDAFAAIACAAIAAABIAAAIIAAAAIgCAAQgFAAgDADQgDACgDAGIAAAwg");
	this.shape_73.setTransform(44.4,18.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#2B6087").s().p("AgOAbQgFgJAAgSQAAgRAFgJQAFgIAKAAQAJAAAFAIQAFAHAAAQIAAADIAAABIgeAAQAAAOADAGQACAGAGAAQAEAAADgEQACgEABgHIAJAAQgBALgGAGQgFAGgHAAQgKAAgFgIgAgHgVQgDAFAAALIAVAAIAAgDQgBgKgCgEQgCgFgGAAQgEAAgDAGg");
	this.shape_74.setTransform(39.8,18.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#2B6087").s().p("AgPAeQgDgEAAgIIAAg0IAJAAIAAAxQAAAGACADQABADAEAAQACAAAEgCIAGgHIAAg0IAJAAIAABDIgJAAIAAgHQgEAEgEADQgDACgEAAQgHAAgDgFg");
	this.shape_75.setTransform(34.7,18.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#2B6087").s().p("AASAwQgEgCgCgEIgGADQgDABgEAAQgMAAgGgMQgHgNAAgXQAAgYAHgMQAGgNAMAAQAMAAAHANQAGAMABAYQgBANgBAJQgCAJgEAHQACAEADABQACACADAAIAAAJQgGgBgDgDgAgMggQgEAJAAAVQAAAUAEAKQADAJAIAAIAFgBIADgDIgDgEIgEgCIABgIQABAAABAAQAAAAABABQAAAAABAAQAAABABAAIAFAFQACgEABgGIABgQQAAgWgFgKQgDgKgIAAQgIAAgDAKg");
	this.shape_76.setTransform(29,17.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#2B6087").s().p("AgFArQgCgCAAgDQAAgDACgCQACgCADAAQACAAACACQACACAAADQAAADgCACQgCACgCAAQgDAAgCgCgAgCAXIACgNIAFgOIAFgLIACgIQAAgIgFgEQgEgFgFAAQgGAAgDACQgDADAAADIACAGIACAFQAAAAAAABQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgDAAgCgCQgCgDAAgFQAAgHAGgFQAGgGAKAAQANAAAGAIQAEAFAAAHQAAAFgCAFQgCAFgGAGQgJAKgCAEQgCAEAAAIg");
	this.shape_77.setTransform(201,16.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#2B6087").s().p("AgUAVQgHgKAAgLQAAgHAEgHQAEgJAGgDQAHgEAGAAQANAAAIAKQAHAIAAAMQAAAGgEAIQgEAJgGADQgHAFgHAAQgNAAgHgKgAgIgXQgDACgCAEQgCAGgBAHQABAMAFAJQAFAJAHAAQAGABAEgGQAEgFAAgMQAAgPgHgJQgEgFgGgBQgEABgDACg");
	this.shape_78.setTransform(194.8,18.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#2B6087").s().p("AADAtIAAgCIABAAIAGgBIACgEIAAgGIAAgUQAAgKgBgCQAAgDgCgBQgDgCgDAAIgGACIgIAFIAAAfQAAAGACACIACACIAGABIAAACIgdAAIAAgCIAGgBIACgDIABgHIAAg0IgBgMIgBgDIgCgBIgFABIgBgCIARgHIADAAIAAArQAIgIADgCQAEgDAEAAQAFAAAEADQADADACAGIABAOIAAAUIABAIIACACIAFABIAAACg");
	this.shape_79.setTransform(188.3,16.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#2B6087").s().p("AgNAtIAAgCIAGgBIACgDQABgBAAgGIAAg0IgBgMIgBgDIgDgBIgEABIgBgCIAQgHIADAAIAABMQAAAGABABQAAABABAAQAAABAAAAQAAAAABABQAAAAABAAIAGABIAAACg");
	this.shape_80.setTransform(183.3,16.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#2B6087").s().p("AAIAcQgCgCAAgFIgKAIQgDACgEgBQgHAAgDgDQgFgFAAgGQAAgFACgCQADgFAGgEIAVgIIAAgCQAAgJgCgDQgDgDgFAAQgEAAgCABQgCADAAADIAAADQAAABgBABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQAAgFAFgFQAGgFAKAAQAHAAAFADQAEACACAEQABADgBAJIAAATIABAJIABADIABAAIADAAIAEgEIAAADQgGAJgHAAQgDAAgCgCgAgGAAQgEADgCADQgCADgBADQAAAGADACQADADADAAQAFABAHgHIAAgVIgMAEg");
	this.shape_81.setTransform(178.8,18.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#2B6087").s().p("AgJAsIgKgFIAAg8IgBgMIgCgDIgCgBIgEABIgCgCIASgHIADAAIAAAqQAJgMAIAAQAJAAAHAIQAGAHAAANQAAAPgKAKQgIAIgLAAQgEAAgGgCgAgDgEIgGAEIAAAjQADADADACQADABAEAAQAFAAAFgGQAGgGgBgMQABgMgGgFQgFgGgGAAQgDAAgDACg");
	this.shape_82.setTransform(172.2,16.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#2B6087").s().p("AAIAcQgCgCAAgFIgKAIQgDACgEgBQgHAAgDgDQgFgFAAgGQAAgFACgCQADgFAGgEIAVgIIAAgCQAAgJgDgDQgDgDgEAAQgEAAgCABQgCADAAADIAAADQAAABgBABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAQgBAAAAgBQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQAAgFAFgFQAGgFAKAAQAHAAAFADQAEACACAEQABADAAAJIAAATIAAAJQAAABAAAAQAAABAAAAQAAAAABABQAAAAAAAAIABAAIACAAIAFgEIAAADQgHAJgGAAQgDAAgCgCgAgGAAQgEADgCADQgDADAAADQAAAGADACQADADADAAQAFABAHgHIAAgVIgMAEg");
	this.shape_83.setTransform(166.6,18.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#2B6087").s().p("AgUAeIAAgDIAHgBIACgDIAAgGIAAgVIAAgNQAAAAgBAAQAAgBAAAAQAAgBAAAAQgBAAAAgBIgDAAIgEAAIAAgBIARgIIACAAIAAANQAHgNAIAAQADAAACACQABABAAABQABAAAAABQAAAAAAABQABAAAAABQAAABgBAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgFgCQgBgBAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAIgCABQgDADgDAGIAAAaQABAFAAADQAAAAAAAAQABABAAAAQAAABABAAQAAAAABAAIAFABIAAADg");
	this.shape_84.setTransform(161.4,18.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#2B6087").s().p("AgCAmQgDgCgBgDQgCgDAAgGIAAgmIgJAAIAAgDQAEgBADgDIAHgIIADgJIACAAIAAATIANAAIAAAFIgNAAIAAAkQAAAGACACQAAAAAAABQABAAAAAAQABABAAAAQABAAAAAAIAFgBIADgEIACAAQgCAGgEADQgEADgEAAQgDAAgCgBg");
	this.shape_85.setTransform(157.4,17.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#2B6087").s().p("AAMAeIAAgNQgIAIgEADQgCACgFAAQgEAAgEgDQgDgDgCgEQgBgFAAgIIAAgZIgCgFIgCgDIgHgBIAAgCIAVAAIAAAmQAAAIADADQACACAFAAIAFgBQAEgDAEgFIAAgfQAAgFgCgCQgBgBgHgBIAAgCIAVAAIAAAiIAAAMIACAEIACABIAFgBIABABIgSAIg");
	this.shape_86.setTransform(149,18.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#2B6087").s().p("AgQAXQgHgJgBgOQABgNAHgIQAIgJAKAAQAKAAAGAHQAHAGAAALIgoAAQAAAMAHAHQAGAIAHAAQAGAAAFgEQADgDADgIIADACQgCAIgGAHQgGAIgKAAQgKAAgHgIgAgKgVQgEAEgBAHIAaAAIgBgIQgCgDgDgCQgDgCgCgBQgGABgEAEg");
	this.shape_87.setTransform(143,18.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#2B6087").s().p("AgLAdIgDgBQgBAAAAAAQAAAAgBAAQAAABAAAAQAAAAgBABIgCAAIAAgVIACAAQACAJAFAFQAFAEAFAAQAFAAADgDQACgCAAgEQAAgEgDgDQgDgDgIgEQgJgEgDgEQgDgDAAgGQAAgHAFgFQAFgFAIAAIAHABIAEABIACAAIABgCIACAAIAAAUIgCAAQgCgKgEgCQgEgEgFAAQgEAAgDACQgCACAAADQAAAEACADQACACAGADIAIAEQANAGAAAKQAAAIgGAFQgGAFgIAAQgEAAgHgCg");
	this.shape_88.setTransform(137.6,18.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#2B6087").s().p("AgVAVQgGgKAAgLQAAgHAEgHQAEgJAGgDQAHgEAGAAQANAAAIAKQAHAIAAAMQAAAGgEAIQgEAJgGADQgHAFgHAAQgNAAgIgKgAgHgXQgEACgCAEQgDAGABAHQAAAMAFAJQAFAJAHAAQAGABAEgGQAEgFAAgMQAAgPgGgJQgFgFgGgBQgDABgDACg");
	this.shape_89.setTransform(128.5,18.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#2B6087").s().p("AgUAeIAAgDIAHgBIACgDIAAgGIAAgVIAAgNQAAAAgBAAQAAgBAAAAQAAgBAAAAQgBAAAAgBIgDAAIgEAAIAAgBIARgIIACAAIAAANQAHgNAIAAQADAAACACQABABAAABQABAAAAABQAAAAAAABQABAAAAABQAAABgBAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgFgCQgBgBAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAIgCABQgEADgCAGIAAAaQABAFAAADQAAAAAAAAQABABAAAAQAAABABAAQAAAAAAAAIAGABIAAADg");
	this.shape_90.setTransform(119.9,18.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#2B6087").s().p("AAIAcQgCgCAAgFIgKAIQgEACgEgBQgFAAgFgDQgDgFAAgGQAAgFACgCQACgFAHgEIAUgIIAAgCQAAgJgDgDQgDgDgEAAQgEAAgCABQgCADgBADIAAADQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAQgBAAAAgBQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQAAgFAGgFQAFgFAKAAQAHAAAFADQAEACABAEQACADAAAJIAAATIAAAJIABADIACAAIABAAIAGgEIAAADQgIAJgGAAQgDAAgCgCgAgGAAQgEADgDADQgCADABADQAAAGACACQADADADAAQAFABAHgHIAAgVIgMAEg");
	this.shape_91.setTransform(115,18.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#2B6087").s().p("AgZAdIAAgDIAlgxIgSAAIgIAAIgDADIgCAIIgDAAIABgQIAwAAIAAACIgnAyIAVAAIAJgBQACAAACgDIABgJIACAAIAAASg");
	this.shape_92.setTransform(109,18.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#2B6087").s().p("AgNAtIAAgCIAGgBIACgDIABgHIAAgWIgBgMIgBgCIgCgBIgFABIgBgCIARgIIADAAIAAAuQAAAGABABQAAABAAAAQAAABAAAAQABAAAAABQAAAAABAAIAGABIAAACgAgDghQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBQAAgBABAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQABAAAAABQAAAAABABQAAAAAAABQABAAAAABQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAABQAAAAgBABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAg");
	this.shape_93.setTransform(104.4,16.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#2B6087").s().p("AgNAtIAAgCIAGgBIACgDQABgBAAgGIAAg0IgBgMIgBgDIgDgBIgEABIgBgCIAQgHIADAAIAABMQAAAGABABQAAABABAAQAAABAAAAQAAAAABABQAAAAABAAIAGABIAAACg");
	this.shape_94.setTransform(100.8,16.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#2B6087").s().p("AAIAcQgCgCAAgFIgKAIQgDACgEgBQgGAAgFgDQgDgFgBgGQAAgFACgCQADgFAGgEIAVgIIAAgCQAAgJgDgDQgDgDgEAAQgEAAgCABQgDADAAADIAAADQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAQgBAAAAgBQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQAAgFAGgFQAFgFAKAAQAHAAAFADQAEACACAEQABADAAAJIAAATIAAAJIABADIABAAIACAAIAGgEIAAADQgIAJgGAAQgDAAgCgCgAgGAAQgEADgDADQgCADAAADQABAGACACQADADADAAQAFABAHgHIAAgVIgMAEg");
	this.shape_95.setTransform(96.3,18.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#2B6087").s().p("AgNAtIAAgCIAGgBIACgDIABgHIAAgWIgBgMIgBgCIgDgBIgEABIgBgCIARgIIADAAIAAAuQAAAGABABQAAABAAAAQAAABAAAAQABAAAAABQABAAAAAAIAGABIAAACgAgDghQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAABAAQAAAAABAAQAAABABAAQAAAAABABQAAAAABABQAAAAAAABQABAAAAABQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAg");
	this.shape_96.setTransform(91.4,16.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#2B6087").s().p("AgQAXQgHgJgBgOQAAgMAIgJQAJgJAKAAQAJAAAGAEQAFAFAAAFQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQgEABgCgDQgBgBAAgEQgBgDgCgCQgCgCgEgBQgFAAgEAFQgFAHgBAKQABAJAFAIQAFAIAHAAQAHAAAFgFQADgDADgHIADABQgDAMgHAFQgGAHgJAAQgJAAgHgIg");
	this.shape_97.setTransform(86.7,18.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#2B6087").s().p("AADAeIAAgDIABAAIAGgBIACgDIAAgGIAAgXQAAgIgCgEQgCgDgFAAQgGAAgIAIIAAAeIABAHIACADIAHAAIAAADIgdAAIAAgDIABAAQAFAAABgCQACgCAAgGIAAgUIgBgOIgBgDIgDAAIgEAAIgBgBIASgIIACAAIAAAMQAKgMAJAAQAFAAADACQADADACAFQACAEAAAIIAAAYIABAHIACADIAGAAIAAADg");
	this.shape_98.setTransform(80.6,18.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#2B6087").s().p("AgQAXQgIgJABgOQgBgNAIgIQAHgJALAAQAKAAAGAHQAGAGAAALIgmAAQAAAMAFAHQAHAIAIAAQAFAAAEgEQAFgDADgIIABACQgBAIgGAHQgHAIgKAAQgJAAgHgIgAgKgVQgEAEAAAHIAaAAIgCgIQgBgDgEgCQgDgCgDgBQgEABgFAEg");
	this.shape_99.setTransform(74.5,18.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#2B6087").s().p("AgCAmQgDgCgBgDQgBgDAAgGIAAgmIgJAAIAAgDQADgBADgDIAHgIIADgJIACAAIAAATIANAAIAAAFIgNAAIAAAkQAAAGABACQABAAAAABQABAAAAAAQABABAAAAQABAAAAAAIAFgBIADgEIADAAQgDAGgEADQgEADgEAAQgDAAgCgBg");
	this.shape_100.setTransform(69.9,17.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#2B6087").s().p("AgVAVQgGgKAAgLQAAgHAEgHQAEgJAHgDQAGgEAGAAQANAAAIAKQAHAIAAAMQAAAGgEAIQgEAJgGADQgGAFgIAAQgNAAgIgKgAgIgXQgDACgCAEQgCAGAAAHQgBAMAGAJQAFAJAHAAQAGABAEgGQAEgFAAgMQAAgPgHgJQgEgFgGgBQgEABgDACg");
	this.shape_101.setTransform(64.7,18.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#2B6087").s().p("AgeAsIAAgDIACAAQADAAADgBIACgCIAAgIIAAg2IAAgHIgBgDIgDAAIgFAAIAAgBIASgHIACAAIAAANQAEgHAFgEQAEgDAFAAQAJAAAFAHQAIAJAAANQAAAOgJAKQgHAIgLAAQgEAAgDgBIgGgFIAAASQAAAGABACIADACIAFABIAAADgAgCggIgHAHIAAAVQAAAHABABQABAEADADQAEADAEAAQAGAAAEgFQAGgGAAgLQgBgOgFgGQgEgGgGAAQgEABgCABg");
	this.shape_102.setTransform(58,19.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#2B6087").s().p("AgUAeIAAgDIAGgBIADgDIAAgGIAAgVIgBgNQAAAAAAAAQAAgBAAAAQAAgBAAAAQgBAAAAgBIgCAAIgFAAIgBgBIASgIIACAAIAAANQAHgNAHAAQAEAAADACQAAABAAABQABAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgFgCQgBgBAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAIgDABQgCADgDAGIAAAaQAAAFABADQAAAAAAAAQABABAAAAQAAABABAAQAAAAABAAIAGABIAAADg");
	this.shape_103.setTransform(49.6,18.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#2B6087").s().p("AgQAXQgHgJAAgOQAAgNAHgIQAIgJAKAAQAKAAAGAHQAGAGAAALIgmAAQAAAMAFAHQAHAIAHAAQAHAAADgEQAFgDACgIIACACQgBAIgGAHQgHAIgJAAQgKAAgHgIgAgKgVQgEAEAAAHIAaAAIgCgIQgBgDgEgCQgDgCgDgBQgFABgEAEg");
	this.shape_104.setTransform(44.6,18.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#2B6087").s().p("AAMAeIAAgNQgHAIgEADQgEACgDAAQgFAAgEgDQgDgDgCgEQgBgFgBgIIAAgZIgBgFIgCgDIgHgBIAAgCIAVAAIAAAmQAAAIADADQACACAEAAIAGgBQAEgDAEgFIAAgfQAAgFgBgCQgDgBgFgBIAAgCIATAAIAAAiIABAMIABAEIADABIAEgBIABABIgRAIg");
	this.shape_105.setTransform(38.4,18.5);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#2B6087").s().p("AAXA1QgKgDgJgGQgIgFgGgHQgKgDgFgFQgIgGgEgJQgEgJAAgLQAAgTAMgNQANgNARAAQAQAAANANQAMANAAATQAAAPgJAMQgIAMgOAEQAGALAIAGQAHAFAKABIAAACQgJgBgKgDgAgSgrQgJALAAAVQAAAUAJALQAHAJALAAQAMAAAHgJQAJgKAAgTQAAgQgFgKQgEgIgGgEQgGgEgHAAQgLAAgHAIg");
	this.shape_106.setTransform(30.4,18.1);

	var maskedShapeInstanceList = [this.instance_3,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.shape_70,this.shape_71,this.shape_72,this.shape_73,this.shape_74,this.shape_75,this.shape_76,this.shape_77,this.shape_78,this.shape_79,this.shape_80,this.shape_81,this.shape_82,this.shape_83,this.shape_84,this.shape_85,this.shape_86,this.shape_87,this.shape_88,this.shape_89,this.shape_90,this.shape_91,this.shape_92,this.shape_93,this.shape_94,this.shape_95,this.shape_96,this.shape_97,this.shape_98,this.shape_99,this.shape_100,this.shape_101,this.shape_102,this.shape_103,this.shape_104,this.shape_105,this.shape_106];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47}]},15).to({state:[{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77}]},121).wait(1));

	// Mascara 2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_21 = new cjs.Graphics().p("AgZBjIAAjFIAzAAIAADFg");
	var mask_3_graphics_22 = new cjs.Graphics().p("AhDBjIAAjFICHAAIAADFg");
	var mask_3_graphics_23 = new cjs.Graphics().p("AhtBjIAAjFIDbAAIAADFg");
	var mask_3_graphics_24 = new cjs.Graphics().p("AiXBjIAAjFIEvAAIAADFg");
	var mask_3_graphics_25 = new cjs.Graphics().p("AjBBjIAAjFIGDAAIAADFg");
	var mask_3_graphics_26 = new cjs.Graphics().p("AjqBjIAAjFIHVAAIAADFg");
	var mask_3_graphics_27 = new cjs.Graphics().p("AkUBjIAAjFIIpAAIAADFg");
	var mask_3_graphics_28 = new cjs.Graphics().p("Ak+BjIAAjFIJ+AAIAADFg");
	var mask_3_graphics_29 = new cjs.Graphics().p("AloBjIAAjFILRAAIAADFg");
	var mask_3_graphics_30 = new cjs.Graphics().p("AmSBjIAAjFIMlAAIAADFg");
	var mask_3_graphics_31 = new cjs.Graphics().p("Am8BjIAAjFIN6AAIAADFg");
	var mask_3_graphics_32 = new cjs.Graphics().p("AnmBjIAAjFIPNAAIAADFg");
	var mask_3_graphics_33 = new cjs.Graphics().p("AoQBjIAAjFIQhAAIAADFg");
	var mask_3_graphics_34 = new cjs.Graphics().p("Ao6BjIAAjFIR1AAIAADFg");
	var mask_3_graphics_35 = new cjs.Graphics().p("ApkBjIAAjFITJAAIAADFg");
	var mask_3_graphics_36 = new cjs.Graphics().p("AqOBjIAAjFIUdAAIAADFg");
	var mask_3_graphics_37 = new cjs.Graphics().p("Aq4BjIAAjFIVxAAIAADFg");
	var mask_3_graphics_76 = new cjs.Graphics().p("Aq4BjIAAjFIVxAAIAADFg");
	var mask_3_graphics_136 = new cjs.Graphics().p("Aq4BjIAAjFIVxAAIAADFg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(21).to({graphics:mask_3_graphics_21,x:29.8,y:183.8}).wait(1).to({graphics:mask_3_graphics_22,x:34,y:183.8}).wait(1).to({graphics:mask_3_graphics_23,x:38.2,y:183.8}).wait(1).to({graphics:mask_3_graphics_24,x:42.4,y:183.8}).wait(1).to({graphics:mask_3_graphics_25,x:46.6,y:183.8}).wait(1).to({graphics:mask_3_graphics_26,x:50.8,y:183.8}).wait(1).to({graphics:mask_3_graphics_27,x:55,y:183.8}).wait(1).to({graphics:mask_3_graphics_28,x:59.2,y:183.8}).wait(1).to({graphics:mask_3_graphics_29,x:63.4,y:183.8}).wait(1).to({graphics:mask_3_graphics_30,x:67.6,y:183.8}).wait(1).to({graphics:mask_3_graphics_31,x:71.8,y:183.8}).wait(1).to({graphics:mask_3_graphics_32,x:76,y:183.8}).wait(1).to({graphics:mask_3_graphics_33,x:80.2,y:183.8}).wait(1).to({graphics:mask_3_graphics_34,x:84.4,y:183.8}).wait(1).to({graphics:mask_3_graphics_35,x:88.6,y:183.8}).wait(1).to({graphics:mask_3_graphics_36,x:92.8,y:183.8}).wait(1).to({graphics:mask_3_graphics_37,x:97,y:183.8}).wait(39).to({graphics:mask_3_graphics_76,x:97,y:183.8}).wait(60).to({graphics:mask_3_graphics_136,x:97,y:183.8}).wait(1));

	// Titulo 2
	this.instance_4 = new lib.Titulo2("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(112.1,183.9,1,1,0,0,0,67.2,9.8);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(21).to({_off:false},0).wait(16).to({startPosition:0},0).wait(99).to({startPosition:0},0).wait(1));

	// rh.png
	this.instance_5 = new lib.rh();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,36,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(137));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(100,136,200,133.4);
// library properties:
lib.properties = {
	width: 200,
	height: 200,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Banner_atlas_.png?1503401880809", id:"Banner_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;