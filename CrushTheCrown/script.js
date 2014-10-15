
var htmlString = "";

var cardVals = function(){};

cardVals[1] = "ace";
cardVals[2] = "two";
cardVals[3] = "three";
cardVals[4] = "four";
cardVals[5] = "five";
cardVals[6] = "six";
cardVals[7] = "seven";
cardVals[8] = "eight";
cardVals[9] = "nine";
cardVals[10] = "ten";
cardVals[11] = "jack";
cardVals[12] = "queen";
cardVals[13] = "king";

function cardString(type, number)
{
	var numberName = cardVals[number];
	
	return '<div class="card ' + type + ' ' + numberName + '"><div class="front">' + numberName + ' of ' + type + '</div><div class="back"></div></div>';
}

for(var i = 1; i < 14; i++)
{
	htmlString += cardString("hearts", i) + cardString("diamonds", i) + cardString("spades", i) + cardString("clubs", i);
}
$(".deck-container").append(htmlString);

for(var i = 0; i < 5; i++)
{
	$(".deck-container div.card")[i].appendTo(".other-hand");
}

for(var i = 0; i < 5; i++)
{
	$(".deck-container div.card")[i].appendTo(".your-hand");
}


$(".hand div.card").click(function(){ $(this).toggleClass("rotate") });
