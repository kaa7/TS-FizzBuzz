# TS-FizzBuzz
FizzBuzz in TypeScript

There are 3 implementations:

simple.ts - simple implementation
extended.ts - extended implementation
rules.ts - extended implementation based on rules; it's more configureable, if you only want certain
    rules you can modify the list of rules used for the computation (note: some rules might cause
    side effect in other rules, so the order of application is important)

To run (for example the simple implementation):

tsc simple.ts
node simple.js

I tried using the vscode runner but I got errors so I used the simple CLI interface to run
the program.