export default function(){
  //背景音乐
  var obj = {
    bgm: new Audio(),
    play: function(){
      this.bgm.play()
    },
    stop: function(){
      this.bgm.pause()
    }
  }
  obj.bgm.src = "./audio/bgm.mp3"
  
  return obj
  
}