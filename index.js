function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
}

function logWhisper(string) {
    console.log(string.toLowerCase());
}

// function sayHiToGrandma(string) {
//     if (string === string.toUpperCase()) {
//         return "YES INDEED!";
//     } else if (string === string.toLowerCase()) {
//         return "I can't hear you!";
//     } else if (string === "I love you, Grandma.") {
//         return "I love you, too.";
//     }
// }

function sayHiToGrandma(string) {
    let response;
    switch (string) {
        case string.toUpperCase():
            response = "YES INDEED!";
            break;
        case string.toLowerCase():
            response = "I can't hear you!"
            break;
        case "I love you, Grandma.":
            response = "I love you, too."
    }
    return response
}


