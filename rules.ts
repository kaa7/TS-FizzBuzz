// Fizz Buzz with rules

interface Rule {
    match(x: number): boolean;
    apply(acc: string[]): void;
}

class RuleFizz implements Rule {
    match(x: number): boolean {
        return x % 3 == 0;
    }

    apply(acc: string[]): void {
        acc.push("Fizz")
    }
}

class RuleFezz implements Rule {
    match(x: number): boolean {
        return x % 13 == 0;
    }

    apply(acc: string[]): void {
        acc.push("Fezz")
    }
}

class RuleBuzz implements Rule {
    match(x: number): boolean {
        return x % 5 == 0;
    }

    apply(acc: string[]): void {
        acc.push("Buzz")
    }
}

class RuleBang implements Rule {
    match(x: number): boolean {
        return x % 7 == 0;
    }

    apply(acc: string[]): void {
        acc.push("Bang")
    }
}

class RuleBong implements Rule {
    match(x: number): boolean {
        return x % 11 == 0;
    }

    apply(acc: string[]): void {
        // check if fezz is in array
        let fezz_flag: boolean = (acc.indexOf("Fezz") > -1);

        // clear acc
        acc.length = 0

        // re-add fezz if necessary
        if (fezz_flag) {
            acc.push("Fezz");
        }

        acc.push("Bong")
    }
}

class RuleReverse implements Rule {
    match(x: number): boolean {
        return x % 17 == 0;
    }

    apply(acc: string[]): void {
        acc.reverse();
    }
}


class FizzBuzz {
    // Note: the order of rules is important!!!
    rules: Rule[] = [new RuleFizz(), new RuleFezz(), new RuleBuzz(),
        new RuleBang(), new RuleBong(), new RuleReverse()];

    // replace the number x according to the fizz buzz rules
    replace(x: number): string {
        let acc : string[] = [];
        for (let rule of this.rules) {
            if (rule.match(x)) {
                rule.apply(acc);
            }
        }

        // default rule
        if (acc.length == 0) {
            acc.push(x.toString());
        }

        return acc.join("");
    }

    // run fizz buzz on 1:n 
    run(n: number): void {
        for (let i = 1; i <= n; ++i) {
            console.log(i.toString() + " " + this.replace(i));
        }
    }
}

let n : number = 256;
let f : FizzBuzz = new FizzBuzz();

f.run(n);