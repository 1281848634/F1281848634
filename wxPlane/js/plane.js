export default function(ctx){
 var obj = {
   screenWidth:window.innerWidth,
   screenHeight:window.innerHeight,
   x:0,
   y:0,
   ismove:false,
   imgWidth:80,
   imgHeight:80,
   isRender: true,
   planeImg: new Image(),
   drawPlane: function(){
     ctx.drawImage(this.planeImg, 0, 0, this.planeImg.height, this.planeImg.width, this.x, this.y, this.imgWidth, this.imgHeight)
   },
   move:function(){
     canvas.addEventListener("touchstart",function(e){
       var clientX = e.changedTouches[0].clientX
       var clientY = e.changedTouches[0].clientY

       if(clientX > obj.x && clientX < obj.x + obj.imgWidth && clientY > obj.y && clientY < obj.y + obj.imgHeight){
         obj.ismove = true
       } 
     })
     canvas.addEventListener("touchmove",function(e){
       e.preventDefault()
       var clientX = e.changedTouches[0].clientX
       var clientY = e.changedTouches[0].clientY
       if (obj.ismove){
         var x = clientX - obj.imgWidth / 2
         var y = clientY - obj.imgHeight / 2
         if(x < 0) x=0
         if (x > obj.screenWidth - obj.imgWidth) 
           x = obj.screenWidth - obj.imgWidth
         if(y < 0) y = 0
         if(y > obj.screenHeight - obj.imgHeight)
           y = obj.screenHeight - obj.imgHeight
         obj.x = x
         obj.y = y
       }
     })
     canvas.addEventListener("touchend",function(e){
       e.preventDefault()
       obj.ismove = false
     })
   },
   isBang: function(enemy){
     var centerX = enemy.x + enemy.imgWidth/2
     var centerY = enemy.y + enemy.imgHeight/2

     if(centerX>this.x && centerX<this.x+this.imgWidth && centerY>this.y && centerY<this.y+this.imgHeight){
      this.isRender = false
     }
   }
 }

 var planeImg = new Image()
 obj.planeImg.src = "./images/hero.png"
 obj.planeImg.height = 186
 obj.planeImg.width = 130
 obj.x = obj.screenWidth/2 - obj.imgWidth/2
 obj.y = obj.screenHeight - obj.imgHeight-30

 return obj
}