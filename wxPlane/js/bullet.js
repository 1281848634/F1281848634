export default function(ctx,px,py,pw){
  var obj = {
    img: new Image(),
    imgWidth: 16,
    imgHeight: 30,
    movespeed: 5,
    isShow: true,
    x: 0,
    y: 0,
    drawBullet: function(){
      obj.y -= obj.movespeed
      if (obj.y < -30) this.isShow = false
      ctx.drawImage(this.img,0,0,this.img.width,this.img.height,this.x,this.y,this.imgWidth,this.imgHeight)
    }
  }

  obj.img.src = "./images/bullet.png"
  obj.img.width = 62
  obj.img.height = 108
  obj.x = px + pw/2 - obj.imgWidth/2
  obj.y = py + 10

  var biu = new Audio()
  biu.src = "./audio/bullet.mp3"
  biu.play()

  return obj

}