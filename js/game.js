class Game {
constructor(){}

getState(){
    //refer to gamestates in db
var gameStateRef=database.ref("gamestate")

//constantly listen/check if any changes are being made
gameStateRef.on("value", function (data){
    
    //reading the changes and storing them
    gameState=data.val();
})
}

update(state){
    //refer the entire table to see for any changes
database.ref('/').update({
    //update gamestate accordingle
    gameState: state
})

}

start(){
  if(gameState ===0)  {
player = new Player();
player.getCount();

form = new Form();
form.display();
  }
}

}