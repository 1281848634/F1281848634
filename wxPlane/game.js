import "./js/weapp-adapter.js"
import Audio from "./js/audio.js"
import Background from "./js/background.js"
import Plane from "./js/plane.js"
import Bullet from "./js/bullet.js"
import Enemy from "./js/enemy.js"
import BangAnimation from "./js/bangAnimation.js"
import Score from "/js/score.js"

  // var canvas = wx.createCanvas()
  var ctx = canvas.getContext('2d')
  var bulletShowSpeed = 400
  var enemyShowSpeed = 1000
  var scorenum = 0
  var reIndex = false

  var bgm = Audio()
  bgm.play()
  var bgmTime = setInterval(function () {
    bgm.play()
  }, 110000)


  var background = Background(ctx)
  var plane = Plane(ctx)
  var bullet = null
  var bulletArr = []
  var enemy = null
  var enemyArr = []
  var bangAnimation = null
  var bangAnimationArr = []
  var score = Score(ctx)

  var booming = null
  var boomArr = []
  for (let i = 1; i < 20; i++) {
    booming = new Image()
    booming.src = "./images/explosion" + i + ".png"
    boomArr.push(booming)
  }

  var enemyTime = setInterval(function () {
    enemy = Enemy(ctx)
    enemyArr.push(enemy)
  }, enemyShowSpeed)

  var bulletTime = setInterval(function () {
    bullet = Bullet(ctx, plane.x, plane.y, plane.imgWidth)
    bulletArr.push(bullet)
  }, bulletShowSpeed)

  var indexY = 0
  plane.move()
  render()
  function render() {
    //背景
    indexY++
    if (indexY > window.innerHeight) indexY = 0
    //渲染
    requestAnimationFrame(function () {
      background.move(indexY)
      score.scoretext(scorenum)

      //飞机渲染
      plane.drawPlane()

      // 子弹渲染
      bulletArr = bulletArr.filter(item => item.isShow)
      bulletArr.forEach(item => {
        item.drawBullet()
      })

      //敌机渲染
      enemyArr = enemyArr.filter(item => item.isShow)
      enemyArr.forEach(item => {
        plane.isBang(item)
        item.drawEnemy()
        for (let i = 0; i < bulletArr.length; i++) {
          var bulletBoolean = item.isBang(bulletArr[i])
          if (bulletBoolean) {
            bulletArr[i].isShow = false
            bangAnimation = BangAnimation(ctx, item.x, item.y)
            bangAnimationArr.push(bangAnimation)
            scorenum++
          }
        }
      })

      //爆炸动画渲染
      bangAnimationArr = bangAnimationArr.filter(item => item.isShow)
      bangAnimationArr.forEach(item => {
        item.drawBoom(boomArr)
      })

      if (plane.isRender) {
        render()
      }else {
        bgm.stop()
        clearInterval(enemyTime)
        clearInterval(bgmTime)
        clearInterval(bulletTime)
        score.textLast()
        score.scoreLast(scorenum)
        score.button()
      }
    })
  }

canvas.addEventListener("touchstart", function (e) {
  var clientX = e.changedTouches[0].clientX
  var clientY = e.changedTouches[0].clientY
  if (!plane.isRender && clientX > 68 && clientX < 242 && clientY > 352 && clientY < 392) {
    reIndex = true
  }
})

canvas.addEventListener("touchend", function (e) {
  e.preventDefault()
  var clientX = e.changedTouches[0].clientX
  var clientY = e.changedTouches[0].clientY
  if (reIndex && clientX > 68 && clientX < 242 && clientY > 352 && clientY < 392) {
    console.log(reIndex)
    replay()
  }
})

  function replay(){
    reIndex = false
    plane = Plane(ctx)
    plane.move()
    scorenum=0
    bulletArr = []
    enemyArr = []
    bangAnimationArr = []

    bgm = Audio()
    bgm.play()
    bgmTime = setInterval(function () {
      bgm.play() 
    }, 110000)

    enemyTime = setInterval(function () {
      enemy = Enemy(ctx)
      enemyArr.push(enemy)
    }, enemyShowSpeed)

    bulletTime = setInterval(function () {
      bullet = Bullet(ctx, plane.x, plane.y, plane.imgWidth)
      bulletArr.push(bullet)
    }, bulletShowSpeed)
    render()

  }




