# Labels

Labels are a way to abstract your code and make it more reusable. They are similar to functions as calling a label executes code that is defined somewhere else. A good comparison would be abstract functions in other programming languages (requiring an external implementation).

There are two variations of labels:
- `+++ MyLabel +++` (When called, all implementations are called after each other)
- `--- MyLabel ---` (When called, only the latest implementation is called)

Implementing a label (i.e. defining the code that should be executed when calling it) can be done as follows:

```ManiaScript
*** MyLabel ***
***
// Your custom implementation
***
```

Label implementations can only be declared in the global scope (alongside your directives, global variables and function definitions). The code inside the block has the scope of the label when it's called, meaning that (only) the variables and functions known at the place of `+++ MyLabel +++`/`--- MyLabel ---` can be accessed. But since labels can be called multiple times (and even from different contexts), their scope is in fact the intersection of those calling scopes:

```ManiaScript
Void MyFunction1() {
  declare V = 2;
  declare W = 3;
  +++ MyLabel +++
}

Void MyFunction2() {
  declare V = 4;
  +++ MyLabel +++
}

*** MyLabel ***
***
log(V); // logs 2 and 4 respectively
// log(W); would not compile as W is not always defined
***
```

Labels can only be called in a function. This means that you can only access function-level code in the label implementation (e.g. you can't define functions). Depending on your use case it might be a good idea to wrap your label call in curly braces `{}`, e.g. `{+++ MyLabel +++}`. This wraps your label call in a new scope - Therefore, while still being able to read and write all variables available at that point, you can't leak (internal) variables of your label implementation. Consider the following example:

```ManiaScript
*** MyLabel ***
***
declare Tmp = MyVariable;
// ...
***

Void MyFunction() {
  declare MyVariable = 3;
  +++ MyLabel +++
  declare Tmp = "tmp";
  // ...
}
```

When trying to compile the code above, you would receive an error that the variable `Tmp` has already been declared before. Wrapping the label call `+++ MyLabel +++` in curly braces will result in the `Tmp` variable of the `MyLabel` implementation to not exist in the scope of `MyFunction` and therefore to not cause any further error.
