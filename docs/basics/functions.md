# Functions

## Declaration
Functions always have a name, a list of zero or more arguments (each specifying type and name) and a return type. A value can be returned using the `return` keyword.

```ManiaScript
Integer Sum(Integer A, Integer B) {
  return A + B;
}
```

Functions can also have a special return type `Void`, indicating that the function will not return a value. Returning a value nonetheless will cause a compilation error. The same goes for not returning a value or a value of a wrong type if a return type is set.

## Call
Functions are called via round brackets `()` containing the list of required arguments:

```ManiaScript
declare Result = Sum(23, 19);
```

Expressions passed as arguments to a function are evaluated before the function is called. To call a function, it has to be declared in the code prior to the call. This means it's not possible to call a function that is not yet defined or to circularly call functions (e.g. Function1 calls Function2, which would call Function1 again). Functions may however call themselves.

## Polymorphism
The combination of name and argument types define a functions signature. Only one function for a given signature may be present in your program. Still, there can be multiple functions with the same name but varying in number and/or type of their arguments. The compiler will in this case choose the correct function based on the given arguments.

```ManiaScript
Integer Sum(Integer _A, Integer _B) { return _A + _B; }
Real Sum(Real _A, Real _B) { return _A + _B; }
```

```ManiaScript
declare Result1 = Sum(34, 8);
declare Result2 = Sum(2.8, .34);
```

This mechanism is also a way to implement optional arguments. However, keep in mind that in this case, the most generic function has to be declared first.

```ManiaScript
Void doSomething(CMlControl _Control, Boolean _Flag) { /* ... */ }
Void doSomething(CMlControl _Control) {
  doSomething(_Control, True);
}
```

## The main function
The `main` function is a special case as it has neither arguments nor a return type. It is the entrance point when starting your program.

```ManiaScript
main() {
  // Your program
}
```
