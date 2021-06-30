// Simple Fizz Buzz 

let n: number = 100;
let str: string;

for (let i = 1; i <= n; ++i) {
    // empty buffer
    str = "";

    if (i % 3 == 0) {
        str += "Fizz";
    }

    if (i % 5 == 0) {
        str += "Buzz";
    }

    // if not any special rule, cast int to string
    if (str == "") {
        str = i.toString();
    }

    console.log(str);
}

