enchant();
window.onload = function() {
    var game = new Game(320, 480);
    
    game.onload = function() {
       
        var bgSprite = new Sprite(320, 480);
        var bgSurface = new Surface(320, 480);
        
        bgSurface.context.strokeStyle = 'blue';
        bgSurface.context.beginPath();
        bgSurface.context.rect(100, 100, 150, 150);
        bgSurface.context.moveTo(200, 200);
        bgSurface.context.lineTo(300, 300);

        var len=10,i;
        var x=200,y=200;
        bgSurface.context.moveTo(x,y);
        
        for(i=0;i<10;i++){
            
            y=y-len;
            bgSurface.context.lineTo(x,y);
            len=len+5;
            x=x+len;
            bgSurface.context.lineTo(x,y);
            len=len+5;
            y=y+len;
            bgSurface.context.lineTo(x,y);
            len=len+5;
            x=x-len;
            bgSurface.context.lineTo(x,y);
            len=len+5;
            
        }
        
        bgSprite.addEventListener(Event.TOUCH_START, function(event) {
            if (event.x > 160) {
                bgSprite.rotate(90);
            } else {
                bgSprite.rotate(270);
            }
        });

		bgSurface.context.stroke();
        bgSprite.image = bgSurface;
        
        game.rootScene.addChild(bgSprite);
    };
    
    game.start();
};