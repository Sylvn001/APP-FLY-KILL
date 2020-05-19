var heigth = 0 
var width = 0
var lifes = 1
var time = 30

var createTimeFly = 1500

var lv = window.location.search 
lv = lv.replace('?' , '') 


if (lv === 'easy')
{
   //1500 
   var createTimeFly = 2000
} else if(lv ==='normal'){
   createTimeFly = 1500
}
      else if(lv === 'hard'){
         createTimeFly = 750
}
function adjustScreen()
{
     heigth = window.innerHeight
     width = window.innerWidth
    console.log(heigth , width)
}
adjustScreen()

var stopwatch = setInterval(function() {
   time -= 1

   if(time < 0 ){
      clearInterval(stopwatch)
      clearInterval(createFly)
      window.location.href =  "win.html"
   
   }

   else{   
      document.getElementById('stopwatch').innerHTML = time
   }
   }, 1000)



function randomPosition()
{
   if(document.getElementById('fly') )
   {
      document.getElementById('fly').remove()

      if(lifes > 5 )
      {
         window.location.href = 'end_game.html'
      }
      else{
         document.getElementById("l" + lifes).src = "imagens/coracao_vazio.png"
         lifes++;
      }
   }

    var positionX = Math.floor(Math.random() * width ) - 90
    var positionY = Math.floor(Math.random() * heigth ) - 90
    
    positionX = positionX < 0 ? 0 : positionX
    positionY = positionY < 0 ? 0 : positionY

    console.log(positionX) * heigth 
    console.log(positionY) * width
    
    //criar elemento html
    
    var fly = document.createElement('img')
    fly.src = 'imagens/fly.png'
    fly.className = randomSize() + " "+ randomSide()
    fly.style.left = positionX  + 'px'
    fly.style.top = positionY + 'px'
    fly.style.position = 'absolute'
    fly.id = 'fly'
    fly.onclick = function()
    {
       this.remove()
    }
    console.log(randomSize())
    document.body.appendChild(fly)

    console.log(randomSide())
}
function randomSize()
{
     var randomClass = Math.floor(Math.random() * 3 )
     switch(randomClass)
     {
         case 0: 
            return 'fly1'
         case 1: 
            return 'fly2'
         case 2: 
            return 'fly3'
     }
}

function randomSide()
{
   var randomClass = Math.floor(Math.random() * 2 )
   switch(randomClass)
   {
       case 0: 
          return 'SideA'
       case 1: 
          return 'SideB'
   }
}