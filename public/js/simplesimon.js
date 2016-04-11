(function(){

    $("#blue").click(function(){
        $("#blue").fadeTo("fast", 0.1);
        $("#blue").fadeTo("fast", 0.65);
    });

    $("#green").click(function(){
        $("#green").fadeTo("fast", 0.1);
        $("#green").fadeTo("fast", 0.65);
    });

    $("#red").click(function(){
        $("#red").fadeTo("fast", 0.1);
        $("#red").fadeTo("fast", 0.65);
    });

    $("#yellow").click(function(){
        $("#yellow").fadeTo("fast", 0.1);
        $("#yellow").fadeTo("fast", 0.65);
    });



    // this is the array that varies in length!  holds the random blocks
    var colorSequence = [];
    var index = 0;

    // function that chooses a random button and assigns it to randomButtonLit
    function newRandomButton(){
        // find a random button
        var $keys = $('.color-button');
        var randomButtonLit = $keys[Math.floor(Math.random()*$keys.length)];

        // this is pushing the randomButtonLit onto the color sequence array
        colorSequence.push(randomButtonLit)
        // this is for the cheaters to read the sequence
        console.log(colorSequence)
        // start the animate sequence...simons turn.
        animateSequence();
    };

    function lightUpSingleButton(button) {
        // use $button to fadeTo 0.4 then 1
        $(button).fadeTo("fast", 0.1);
        $(button).fadeTo("fast", 0.6);
    }


    //this carries a mini function inside of it, because it cannot retrieve the information
    // from within another function.  so we can give it the information from lightUpSingleButton and tell
    // it the index to start at then continue to the next index.
    function animateSequence() {
        // variable that only exists within the function. if the lightUpSingleButton is equal to the arrays
        // index then increase the index by 1.  clear the interval and set the index back to zero for the users
        // turn
        var simonSequenceToLightUp = setInterval(function(){
            lightUpSingleButton(colorSequence[index]);
            index++;
            if (index == colorSequence.length) {
                // stop the loop
                clearInterval(simonSequenceToLightUp);
                index = 0;
            }
        // here is the delay. 1.5 seconds
        }, 1000);
    }

    function checkArraySequence(){
                // Shows the level in the top corner
                $("#stage").html("Level " + (index + 1));
                // says if index is at 3+1 then run the swirly spiral
                if(colorSequence.length == 3){
                    $(".swirlyDoodle").show();
                }
                index = 0;
                newRandomButton();
    }




    //click listener for start button
    $("#idOfStart").click(function(){
        newRandomButton();
    });


    // the part that checks to see if the button clicked is equal to the button that lit up.
    $(".color-button").click(function(event){

            if ( colorSequence[index] == this ){
                console.log("correct");
                index++;

            // this is what runs when the sequence fails 
            } else {
                $(".failPanda").show();
                index = 0;
            }
            // this is what runs when the sequence is correct.  triggers the swirlydoodle.
            if (index == colorSequence.length) {
                checkArraySequence();
            }    
    });

    // css swirl function-
    (function () {
    }.call(this));



}());


// next level.  adding 3 buttons
// make 3 buttons.  easy medium hard.  each button has a variable.   set up severl if else statements.
// so if easy mode then if easymode dont set index back to zero, else run it normally for medium
// if hardmode run swirly doodle function