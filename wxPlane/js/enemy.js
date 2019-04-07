export default function(ctx){
  var obj = {
    img: new Image(),
    x: 0,
    y: -60,
    imgWidth:60,
    imgHeight: 60,
    enemySpeed: 3,
    isShow: true,
    drawEnemy: function(){
      this.y += this.enemySpeed
      if(this.y > window.innerHeight) this.isShow = false
      ctx.drawImage(this.img,0,0,this.img.width,this.img.height,this.x,this.y,this.imgWidth,this.imgHeight)
    },
    isBang: function(bullet){
      var centerX = bullet.x + bullet.imgWidth/2
      var centerY = bullet.y + bullet.imgHeight/2

      if(centerX>this.x && centerX<this.x+this.imgWidth && centerY>this.y && centerY<this.y+this.imgHeight && this.y>30){
        this.isShow = false
        return true
      }
    }
  }
  obj.img.src = "./images/enemy.png"
  obj.img.width = 120
  obj.img.height = 79
  obj.x = Math.random() * (window.innerWidth - obj.imgWidth)
  return obj
}