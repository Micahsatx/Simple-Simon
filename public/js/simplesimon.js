// buttons fade
// (function(){

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

    // function that chooses a random button and assigns it to randomButtonLit
    function newRandomButton(){
        // find a random button
        var $keys = $('.color-button');
        var randomButtonLit = $keys[Math.floor(Math.random()*$keys.length)];

        // which button was lit?
        console.log(randomButtonLit);
    
        // this is pushing the randomButtonLit onto the color sequence array
        colorSequence.push(randomButtonLit)
        console.log(colorSequence)
// i thought calling the function would then trigger lighting up a button.  it does not.
        animateSequence();
    };

    function lightUpSingleButton(button) {
        // use $button to fadeTo 0.4 then 1
        $(button).fadeTo("slow", 0.2);
        $(button).fadeTo("slow", 1);
// this function makes button light up/ fade out.  thats it.  calling this function 
// animateSequence();

    }


    function animateSequence() {
        //this carries a mini function inside of it, because it cannot retrieve the information
        // from within another function.  so we can give it the information from lightUpSingleButton and tell
        // it the index to start at then continue to the next index.
        
        var simonSequenceToLightUp = setInterval(function(){
            lightUpSingleButton(colorSequence[index]);
            index++;
            if (index == colorSequence.length) {
                // stop the loop
                clearInterval(simonSequenceToLightUp);
                index = 0;
            }
        }, 1500);
    }

// tried making this start click trigger the sequence...it does not.
    //click listener for start button
    $("#idOfStart").click(function(){
        newRandomButton();
    });




    // the part that checks to see if the button clicked is equal to the button that lit up.
    $(".color-button").click(function(event){
            console.log(colorSequence[index])
            console.log(this);

            if ( colorSequence[index] == this ){
                console.log("correct");
                index++;
            } else {
                // this failed function!
                console.log("WRONG, WRONG, WRONG!")
                index = 0;
            }

            if (index == colorSequence.length) {
                index = 0;
                console.log("This is the correct Sequence of buttons!")
                newRandomButton();
                // this success function
            }
            


        });




// }());