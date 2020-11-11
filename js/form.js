class Form {
constructor(){}

display(){

    var title = createElement('h2');
    title.html("Car Racing Game");
    title.position(130,0);

    var input = createInput("Name");
    var button = createButton("Submit");

    var greeting = createElement('h3');

    input.position(130,160);
    button.position(250,200);

    button.mousePressed(function(){

        //getting the name from input (line10) and displaying it on screen
        var name = input.value();
        greeting.html("hello"+name);
        greeting.position(130,160);

        //increasing the count when a player joins
        playerCount+=1;

        //keeping the count and name up to date 
        player.update(name);
        player.updateCount(playerCount);

        //hide previous input details
        input.hide();
        button.hide();

    })

}
}