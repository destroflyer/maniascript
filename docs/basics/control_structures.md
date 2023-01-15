# Control Structures

## If
An `if` statement contains code that only gets executed if the given expression evaluates to `True`.

```ManiaScript
if (expression) {
  // Your code
}
```

You can follow up with an `else` statement without further arguments to handle the case where the expression evaluates to `False`.

```ManiaScript
if (expression) {
  // Executed when expression is True
} else {
  // Executed when expression is False
}
```

When asking for an alternative condition, we don't have to nest the next `if` and `else` statement in the respective `else` block, but instead use as many `else if` constructs as needed:

```ManiaScript
if (expression1) {
  // Your code when expression1 is True
} else if (expression2) {
  // Your code when expression1 is False and expression2 is True
} else {
  // Your code when expression1 and expression2 are False
}
```

## Switch
To avoid a lot of chained `else if` statements that all check for different values of the same expression, we can use a `switch` statement. It contains multiple `case`s for each value to be checked and an optional `default`, which gets executed when none of the checked values was matching.

```ManiaScript
switch (expression) {
  case value1: {
    // Executed when expression is value1
  }
  case value2: {
    // Executed when expression is value2
  }
  default: {
    // Executed when expression is neither value1 nor value2
  }
}
```

The different blocks are tested in their order of declaration - This includes the `default` block and means if it's declared first, none of the other `case`s would be checked. The compiler expects at least one `case` (or a `default`) block to be present.

A special version of the `switch` statement is `switchtype`. It checks whether the given expression, evaluating to an object, is an instance of one of the classes provided in the `case` statements.

```ManiaScript
switchtype (Control) {
  case CMlEntry: log((Control as CMlEntry).Value);
  case CMlTextEdit: log((Control as CMlTextEdit).Value);
  default: log("Control is not an input element.");
}
```

## While
A `while` loop executes code as long as a given condition evaluates to `True`:

```ManiaScript
while (expression) {
  // Executed as long as expression is True
}
```

This means if the expression directly evaluates to `False`, the code will not be executed at all. To execute it at least once, it's possible to use a `do` `while` loop :

```ManiaScript
do {
  // Executed once and then again as long as expression is True
} while (expression)
```

## For
To execute code a set number of times, a `for` loop can be used:

```ManiaScript
for (MyIndex, 2, 5) {
  // Executed with MyIndex = 2, 3, 4 and then 5 (a total of 4 times)
}
```

This will declare an `Integer` variable `MyIndex` (name can be customized), which will assume the values between minimum and maximum (inclusive, in the example 2 to 5) and execute the loop body once for each of them.

While being bad practice, it's possible for the index variable to have the same name as an already declared variable in the same scope. In this edge case, instead of a compilation error, the loop variable is prioritized when the name is evaluated:

```ManiaScript
declare Text MyIndex = "Hello";
for (MyIndex, 1, 3) {
  // Will still compile and log the values 2, 3 and 4
  log(MyIndex + 1);
}
```

## Foreach
When iterating over an array, it's often easier to use a `foreach` loop:

```ManiaScript
foreach (MyElement in MyArray) {
  // Your code that can use MyElement
}
```

It also allows accessing the current index (or key in case of an associative array):

```ManiaScript
foreach (MyIndex => MyElement in MyArray) {
  // Your code that can use MyIndex and MyElement
}
```

While being bad practice, it's possible for the key or value variable to have the same name as an already declared variable in the same scope. In this edge case, instead of a compilation error, the loop variable is prioritized when the name is evaluated:

```ManiaScript
declare Text MyIndex = "Hello";
declare Text MyElement = "World";
foreach (MyIndex => MyElement in [1, 2, 3]) {
  // Will still compile and log the values 1, 3, and 5
  log(MyIndex + MyElement);
}
```

## Skipping loop iterations
In every type of loop you can use the keywords `break` to stop and completely exit the loop, and `continue` to cancel further execution of the current iteration and to start with the next iteration of the loop.

An example would be iterating over some data to find an element with a specific property, using `continue` when the current element can be skipped and `break` when finding a matching element to exit out of the loop:

```ManiaScript
declare CMlLabel LabelWithValueX;
foreach (Control in Page.MainFrame.Controls) {
  if (!(Control is CMlLabel)) {
    continue;
  }
  declare Label = (Control as CMlLabel);
  if (Label.Value == "X") {
    LabelWithValueX = Label;
    break;
  }
}
```
