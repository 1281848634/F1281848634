export default function(ctx){
  var screenWidth = window.innerWidth
  var screenHeight = window.innerHeight
  var obj = {
    img: new Image(),
    scoretext: function (scorenum) {
      ctx.fillStyle = "#fff"
      ctx.font = "30px arial"
      ctx.fillText(scorenum,10,30)
    },
    drawLast: function(){
      ctx.drawImage(this.img,0,0,119,108,screenWidth/2-150,screenHeight/2-150,300,300)
    },
    textLast: function(){
      ctx.font = "30px arial"
      ctx.fillText("游戏结束", screenWidth/2-60, screenHeight/2-100)
      
    },
    scoreLast: function (scorenum){
      ctx.font = "25px arial"
      ctx.fillText("得分: " + scorenum, screenWidth / 2 - 40, screenHeight / 2 - 40)
    },
    button: function(){
      ctx.font = "40px arial"
      ctx.fillText("重新开始", screenWidth / 2 - 80, screenHeight - 180)
      
    }
  }
  obj.src = "./images/Common.png"

  return obj
  
}