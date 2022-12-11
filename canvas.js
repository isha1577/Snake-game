const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')


//static making of snake
//ctx.fillStyle='cyan';
//ctx.fillRect(0,0,50,50)

//console.log(ctx)

let square = 50
let snakeCell = [[0, 0]]
let bHeight=500
let bWidth= 800
let direction='right'
let gameOver = false
let foodG=generateRandom()
let score=0
document.addEventListener('keydown',function(e){
    if(e.key==='ArrowRight'){
        direction='right'
        console.log(direction)
    } 
    else if(e.key==='ArrowLeft'){
        direction='left'
        console.log(direction)

    }
    else if(e.key==='ArrowDown'){
        direction='down'
        console.log(direction)
    }
    else{
        direction='up'
        console.log(direction)

    }
//    console.log(e)
})


function update() {
    headX=snakeCell[snakeCell.length-1][0]
    headY=snakeCell[snakeCell.length-1][1]
    
    let newX
    let newY
    if(direction==='right'){
    newX=headX+square
    newY=headY
        if(newX>=bWidth){
            gameOver=true
        }
    }
    else if(direction==='left'){
    newX=headX-square
    newY=headY
        if(newX<-1){
            gameOver=true
        }
    }
    else if(direction==='down'){
    newX=headX
    newY=headY+square
        if(newY>=bHeight){
            gameOver=true
        }
    }
    else{
    newX=headX
    newY=headY-square
        if(newY<0){
            gameOver=true
        }
    }
    snakeCell.push([newX,newY])
    if(newX==foodG[0] && newY ==foodG[1]){
        foodG=generateRandom()
        score+=1
    }
    else{
      snakeCell.shift()     
    }
    
    
    
}


function draw() 
{
    if(gameOver ===true){
        clearInterval(id)
  ctx.font='40px white'
  ctx.fillText('GAMEOVER',250,250)
        return ;
    }
    
    ctx.clearRect(0,0,bWidth,bHeight)
    
    for(let cell of snakeCell){
     ctx.fillRect(cell[0],cell[1],square,square) //basic snake
    }
    
  ctx.fillRect(foodG[0],foodG[1],square,square)
  ctx.font='30px snas'
  ctx.fillText(`score:${score}`,20,20)

}
function generateRandom()
{
    return [
    Math.floor(Math.random()*((bWidth-square)/square))*square ,
    Math.floor(Math.random()*((bHeight-square)/square))*square

    ]
}
let id=setInterval (function(){
    update()
    draw()
},150)




//===============================================================================


var p =new promise((resolve,reject)=>{
    a=1+1
    if(a==2){
        resolve("done")
    }
    else{
        reject("failed")
    }
})
























