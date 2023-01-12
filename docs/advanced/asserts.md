# Asserts
ManiaScript supports assertions via `assert`.

```ManiaScript
assert(MyValue == 3);
```

If the `Boolean` expression passed to `assert` evaluates to `False`, a [runtime error](/advanced/errors.html#runtime-errors) with the message `Assertion failed` will be thrown. The function accepts an optional second parameter of type `Text` to customize this message:

```ManiaScript
assert(MyValue == 3, "MyValue has to be 2.");
```
