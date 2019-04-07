export default function(ctx){
  var obj = {
    bg: new Image(),
    width: window.innerWidth,
    height: window.innerHeight,
    move: function(indexY){
      ctx.drawImage(this.bg, 0, 0, this.bg.width, this.bg.height, 0, indexY, this.width, this.height)
      ctx.drawImage(this.bg, 0, 0, this.bg.width, this.bg.height, 0, -this.height + indexY, this.width, this.height)
    }
  }
  //背景图片
  // var bg = wx.createImage()
  //var bg = new Image()
  obj.bg.src = "./images/bg.jpg"
  obj.bg.width = 512
  obj.bg.height = 512

  // var width = GameGlobal.innerWidth
  // var height = GameGlobal.innerHeight

  // var width = window.innerWidth
  // var height = window.innerHeight

  // var indexY = 0

  //背景图片循环滚动
  // move()
  // function move() {
  //   indexY++
  //   if (indexY > height) indexY = 0
  //   requestAnimationFrame(function () {
  //     ctx.clearRect(0, 0, width, height)
  //     ctx.drawImage(bg, 0, 0, bg.width, bg.height, 0, indexY, width, height)
  //     ctx.drawImage(bg, 0, 0, bg.width, bg.height, 0, -height + indexY, width, height)
  //     move()
  //   })
  // }

  // bg.onload = function(){
  //   ctx.drawImage(bg,0,0,bg.width,bg.height,0,0,width,height)
  // }

  return obj
}