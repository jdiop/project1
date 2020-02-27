String.prototype.contains = function(str) { return this.indexOf(str) != -1; };

var profanities = new Array("ass", "cunt", "pope", "shit", "fuck", "rape");

var containsProfanity = function(text){
    var returnVal = false;
    for (var i = 0; i < profanities.length; i++) {
        if(text.toLowerCase().contains(profanities[i].toLowerCase())){
            returnVal = true;
            break;
        }
    }
    return returnVal;
}

var myText = $('#IGN').html();

if(containsProfanity(myText)){
    alert('That username contains profanity. Please try another username.');
}
else{
    alert('Form submitted.');
}
