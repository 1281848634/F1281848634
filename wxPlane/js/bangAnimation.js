export default function(ctx,bx,by){
  var obj = {
    imgWidth: 60,
    imgHeight: 60,
    num: 0,
    isShow: true,
    drawBoom: function (boomArr){
      this.num++
      if(this.num>18) {
        this.num = 18
        this.isShow = false
      }
      ctx.drawImage(boomArr[this.num],0,0,64,48,bx,by,this.imgWidth,this.imgHeight)
    }
  }

  var boomAudio = new Audio()
  boomAudio.src="./audio/boom.mp3"
  boomAudio.play()

  return obj
}