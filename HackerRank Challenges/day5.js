Task: Given an integer,n, print its first 10 multiples. Each multiple n x i  (where 1 < is less than or equal to i and less than or equal to 10 ) 
should be printed on a new line in the form: n x i = result.

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////


function main() {
    var n = parseInt(readLine());
    for (var i = 1; i < 11; i++) {
        console.log(n + ' x ' + i + ' = ' + n * i);
    }
}