// Fizz Buzz with rules
var RuleFizz = /** @class */ (function () {
    function RuleFizz() {
    }
    RuleFizz.prototype.match = function (x) {
        return x % 3 == 0;
    };
    RuleFizz.prototype.apply = function (acc) {
        acc.push("Fizz");
    };
    return RuleFizz;
}());
var RuleFezz = /** @class */ (function () {
    function RuleFezz() {
    }
    RuleFezz.prototype.match = function (x) {
        return x % 13 == 0;
    };
    RuleFezz.prototype.apply = function (acc) {
        acc.push("Fezz");
    };
    return RuleFezz;
}());
var RuleBuzz = /** @class */ (function () {
    function RuleBuzz() {
    }
    RuleBuzz.prototype.match = function (x) {
        return x % 5 == 0;
    };
    RuleBuzz.prototype.apply = function (acc) {
        acc.push("Buzz");
    };
    return RuleBuzz;
}());
var RuleBang = /** @class */ (function () {
    function RuleBang() {
    }
    RuleBang.prototype.match = function (x) {
        return x % 7 == 0;
    };
    RuleBang.prototype.apply = function (acc) {
        acc.push("Bang");
    };
    return RuleBang;
}());
var RuleBong = /** @class */ (function () {
    function RuleBong() {
    }
    RuleBong.prototype.match = function (x) {
        return x % 11 == 0;
    };
    RuleBong.prototype.apply = function (acc) {
        // check if fezz is in array
        var fezz_flag = (acc.indexOf("Fezz") > -1);
        // clear acc
        acc.length = 0;
        // re-add fezz if necessary
        if (fezz_flag) {
            acc.push("Fezz");
        }
        acc.push("Bong");
    };
    return RuleBong;
}());
var RuleReverse = /** @class */ (function () {
    function RuleReverse() {
    }
    RuleReverse.prototype.match = function (x) {
        return x % 17 == 0;
    };
    RuleReverse.prototype.apply = function (acc) {
        acc.reverse();
    };
    return RuleReverse;
}());
var FizzBuzz = /** @class */ (function () {
    function FizzBuzz() {
        // Note: the order of rules is important!!!
        this.rules = [new RuleFizz(), new RuleFezz(), new RuleBuzz(),
            new RuleBang(), new RuleBong(), new RuleReverse()];
    }
    // replace the number x according to the fizz buzz rules
    FizzBuzz.prototype.replace = function (x) {
        var acc = [];
        for (var _i = 0, _a = this.rules; _i < _a.length; _i++) {
            var rule = _a[_i];
            if (rule.match(x)) {
                rule.apply(acc);
            }
        }
        // default rule
        if (acc.length == 0) {
            acc.push(x.toString());
        }
        return acc.join("");
    };
    // run fizz buzz on 1:n 
    FizzBuzz.prototype.run = function (n) {
        for (var i = 1; i <= n; ++i) {
            console.log(i.toString() + " " + this.replace(i));
        }
    };
    return FizzBuzz;
}());
var n = 256;
var f = new FizzBuzz();
f.run(n);
