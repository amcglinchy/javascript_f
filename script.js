// alert('My project is going to be awesome!');

//$("h1").hide();
$("#noShow").hide();
$("h1").html("The Best Poem Ever!");
$("#yes").append("<p>Q. What do you call a fake noodle? <br /> A. An impasta</p>");

$("#toggleJokes").click(function() {
    $("#yes").toggle();
  });



$("#colorChange").click(function (){
    $("body").css{
        "background-color": "azure";
        "color": "black";
    }
});


$("#buttonPrompt").click(function() {
    let ask = prompt("Are these jokes good or bad?");
    if (ask == 'bad'){
        $("h1").html("The Worst Jokes Ever!");
    } 
    else if (ask == 'good'){
        alert("Thanks.");
    };


});
