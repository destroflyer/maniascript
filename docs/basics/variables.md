# Variables

## Declaration
Variables are declared with they keyword `declare`. The following code declares a variable named `MyNumber` of type `Integer`:

```ManiaScript
declare Integer MyNumber;
```

It is also possible to declare a variable with an initial value using `=`. If no value is specified (as above), the default value of its type will be used.
```ManiaScript
declare Integer MyNumber = 42;
```

In this case, you can omit the type as it will be resolved automatically based on the initial value:
```ManiaScript
declare MyNumber = 42;
```

Once declared, you can of course change the value of a variable via `=` at any time:

```ManiaScript
MyNumber = 42;
```

## Scope
Scopes in ManiaScript work similar as in other common languages: A scope is defined with a matching pair of curly brackets, starting with `{` and ending with `}`. Variable visibility is limited to the largest scope containing the declaration of the variable and of course to the instructions following the declaration.

This means you can wrap statements in curly braces to have them act in a local scope, which can be helpful to avoid conflicts with duplicated variable names.

The outermost scope (containing directives and functions) is called the global scope and variables declared in it are called global variables, as they are accessible throughout the entire program. In the global scope, variables can not be declared with an initial value. Thus, an explicit type is mandatory.
