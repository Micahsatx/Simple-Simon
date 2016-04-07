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



    // this is the array that varies in length!  holds the random blocks
    var colorSequence = [];
    var index = 0;

    function lightUpANewButton(){
        // find a random button
        var keys = $('.color-button');
        var randomButtonLit = keys[Math.floor(Math.random()*keys.length)];

        // click listener for start button
        $("#idOfStart").click(function(){
            $(randomButtonLit).fadeTo("fast", 0.4);
            $(randomButtonLit).fadeTo("fast", 1);
        });
        // which button was lit?
        console.log(randomButtonLit);
    
        // this is pushing the randomButtonLit onto the color sequence array
        colorSequence.push(randomButtonLit)
        console.log(colorSequence)
    };


    $(".color-button").click(function(event){
            console.log(event.randomButtonLit);
            console.log(this);

            if ( colorSequence[index] == this ){
                console.log("correct");
                index++;
                lightUpANewButton();
            } else {
                // this failed function!
                index = 0;
            }

            if (index == colorSequence.length) {
                index = 0;
                console.log("This is the correct Sequence.")
                // this success function
            }
            


        });




}());