# Variables

## Declaration
Variables are declared with they keyword `declare`. The following code declares a variable named `MyNumber` of type `Integer`:

```ManiaScript
declare Integer MyNumber;
```

Once declared, you can change the value of a variable via `=`:

```ManiaScript
MyNumber = 42;
```

It's also possible to declare a variable with an initial value using `=`:
```ManiaScript
declare Integer MyNumber = 42;
```

In this case, you can also omit the type as it will be resolved automatically based on the initial value:
```ManiaScript
declare MyNumber = 42;
```

