// buttons fade
(function(){

    $("#blue").click(function(){
        $("#blue").fadeTo("fast", 0.15);
        $("#blue").fadeTo("fast", 1);
        console.log("blue")
    });

    $("#green").click(function(){
        $("#green").fadeTo("fast", 0.15);
        $("#green").fadeTo("fast", 1);
        console.log("green")
    });

    $("#red").click(function(){
        $("#red").fadeTo("fast", 0.15);
        $("#red").fadeTo("fast", 1);
        console.log("red")
    });

    $("#yellow").click(function(){
        $("#yellow").fadeTo("fast", 0.15);
        $("#yellow").fadeTo("fast", 1);
        console.log("yellow")
    });



    var getColorButton = document.getElementsByClassName("color-button");
    console.log(getColorButton);

    // find a random button
    var keys = $('.color-button');
    var random = keys[Math.floor(Math.random()*4)];

    $("#idOfStart").click(function(){
        $(random).fadeTo("fast", 0.4);
        $(random).fadeTo("fast", 1);
    });
    console.log(random);


    // $(document).click(function(event){
    //         console.log(event.keyCode);

    //         if (the array is the same [index] == event.keyCode){
    //             index++;
    //         } else {
    //             // this failed function!
    //             index = 0;
    //         }

    //         if (index == cheat.length) {
    //             index = 0;
    //             // this suceeded function!!
    //         }
        


    // });




}());