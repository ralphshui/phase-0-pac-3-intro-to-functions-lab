function shout(words) {
    return words.toUpperCase();
}

function whisper(words) {
    return words.toLowerCase();
}

function logShout(words) {
    console.log(words.toUpperCase());
}

function logWhisper(words) {
    console.log(words.toLowerCase());
}

function sayHiToHeadphonedRoommate(phrase) {
    if (phrase === phrase.toLowerCase()){
        return "I can't hear you!";
    }
    else if(phrase === phrase.toUpperCase()){
        return "YES INDEED!";
    }
    else if (phrase === "Let's have dinner together!"){
        return "I would love to!";
    }  
}