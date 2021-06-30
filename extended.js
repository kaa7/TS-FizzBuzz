// Fizz Buzz++
var n = 256;
var str = [];
var fezz_flag = true;
var res;
for (var i = 1; i <= n; ++i) {
    // initialize
    fezz_flag = false;
    str.length = 0;
    // Fizz
    if (i % 3 == 0) {
        str.push("Fizz");
    }
    // Fezz
    if (i % 13 == 0) {
        str.push("Fezz");
        fezz_flag = true;
    }
    // Buzz
    if (i % 5 == 0) {
        str.push("Buzz");
    }
    // Bang
    if (i % 7 == 0) {
        str.push("Bang");
    }
    // Bong
    if (i % 11 == 0) {
        // clear array
        str.length = 0;
        // re-add Fezz if necessary
        if (fezz_flag) {
            str.push("Fezz");
        }
        str.push("Bong");
    }
    // Reverse
    if (i % 17 == 0) {
        str.reverse();
    }
    // if not any special rule, cast int to string
    if (str.length == 0) {
        str.push(i.toString());
    }
    res = i.toString() + " " + str.join("");
    console.log(res);
}
