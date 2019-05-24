
var hor = "aaabbabbabbabbacccacccacccacccacccacccbbbbbbbbbbbbbbbbbbcccbbcccbbcccbbcccbbcccbbcccbbcccbbcccbbcccbbcccbbcccbb"
hor = "aaabacbabbbccacbcc"
var ver = hor 


rules = {
    "a": {
        "a": "black",
        "b" : "white",
        "c" : "white"
    },
    "b": {
        "a": "white",
        "b": "black",
        "c": "white"
    },
    "c": {
        "a": "black",
        "b": "white",
        "c": "black"
    }
}


function draw() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext('2d')

    w = 600;
    h = 600;

    wPerRect = w/hor.length
    hPerRect = w/ver.length

    for(i = 0; i < hor.length; i++) {
        for(j = 0; j < ver.length; j++) {
            ctx.fillStyle = rules[hor[i]][ver[j]]
            ctx.fillRect(100+i*wPerRect,100+j*hPerRect, wPerRect, hPerRect);
        }
    }
    

}

draw()