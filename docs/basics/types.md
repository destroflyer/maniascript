# Types

ManiaScript is a strongly typed language, meaning every value has to be of a certain type and a value of a different type will not be accepted in its place. No implicit conversions are made.

## Boolean
A `Boolean` can be either `True` or `False`. Default value is `False`.

```ManiaScript
declare Boolean A = True;
```

Operators:

```ManiaScript
A = B && C; // And
A = B || C; // Or
A = B == C; // Equal to
A = B != C; // Not equal to
```

ManiaScript does not offer boolean compound assignments (`A |= B`, `A &= B`), you are required to write `A = A || B`, `A = A && B`.

## Numerics
There are two numeric types `Integer` and `Real`, depending on precision and range. Both of them support basic arithmetic operations:

```ManiaScript
A = B + C; // Addition
A = B - C; // Subtraction
A = B * C; // Multiplication
A = B / C; // Division
```

ManiaScript offers basic arithmetic compound assignments:

```ManiaScript
A += B; // A = A + B;
A -= B; // A = A - B;
A *= B; // A = A * B;
A /= B; // A = A / B;
```

The result of a basic arithmetic operation of a `Real` and an `Integer` is a `Real`.

ManiaScript does not offer atomic increment/decrement operations (`A++`, `A--`), you are required to write `A += 1`, `A -= 1`.

It's also possible to compare numerics via comparison operators.

```ManiaScript
A = B < C; // Less than
A = B <= C; // Less than or equal to
A = B == C; // Equal to
A = B != C; // Not equal to
A = B >= C; // Greater than or equal to
A = B > C; // Greater than
```

The result of a comparison operation is a `Boolean`.

## Integer
An `Integer` is an integer between -2<sup>31</sup> (-2147483648) and 2<sup>31</sup>-1 (2147483647). Default value is `0`.

```ManiaScript
declare Integer A = 42;
```

The `Integer` type also offers a modulo operator (Not available for `Real`):
```ManiaScript
A = B % C;
A %= B; // A = A % B
```

## Real
A `Real` is a real number between 1e-45 and 1e+38. Default value is `0.0`. Comparison threshold for `Real` values is 1e-5 (0.00001).

```ManiaScript
declare Real A = 1.23;
```

`Real` values always need to be written with a `.` character (`3.141592`). In case of the number ending with `.0`, the `0` can be omitted (e.g. `-1.` instead of `-1.0`).

## Vector
ManiaScript offers a few numeric vector types, which represent a container including multiple numbers. Default values are the default value of the corresponding numeric type. Expressing a vector is done by listing the numbers between `<` and `>`, separated by `,`.

| Type      | Description                               | Example           |
|:----------|:------------------------------------------|:------------------|
| `Int2`    | Two-dimensional vector, using `Integer`   | `<1, 2>`          |
| `Int3`    | Three-dimensional vector, using `Integer` | `<255, 128, 0>`   |
| `Vec2`    | Two-dimensional vector, using `Real`      | `<1., -.5>`       |
| `Vec3`    | Three-dimensional vector, using `Real`    | `<.5, -1.2, -0.>` |

The values can either be accessed via the properties `X`, `Y` and `Z` (if three-dimensional) or via array indices `0`, `1` and `2` (if three-dimensional):

```ManiaScript
declare Int2 A = <1, 2>;
declare Vec3 B = <3.4, 0, -5>;

C = A.X + A.Y + B.Z;
C = A[0] + A[1] + B[2];
```

Operators:

```ManiaScript
A = B + C; // Addition (<B.X + C.X, B.Y + C.Y, B.Z + C.Z>)
A = B - C; // Subtraction (<B.X - C.X, B.Y - C.Y, B.Z - C.Z>)
A = B == C; // Equal to (B.X == C.X && B.Y == C.Y && B.Z == C.Z)
A = B != C; // Not equal to (B.X != C.X || B.Y != C.Y || B.Z != C.Z)
```

## Text
A `Text` is a string of characters and is defined via quotes `"`. Default value is empty `""`.

```ManiaScript
declare Text A = "Hello World";
```

Special characters can be escaped via `\`:

```ManiaScript
A = "Me: \"Hello World\"";
B = "This is a backslash: \\";
C = "Line1\nLine2";
```

A `Text` can be concatenated with another value via the `^` operator:

```ManiaScript
A = "Hello";
B = "World";
C = 1;
D = 2.3;
E = True;
F = A ^ B ^ C ^ D ^ E; // HelloWorld12.3True
```

You can concatenate values of type `Text`, `Integer`, `Real`,  `Boolean`, `Ident` and arrays or associative arrays (of one these types) to a `Text`. In this case, they are converted to a readable text, depending on the type.

ManiaScript also offers text blocks via `"""`, where you don't have to escape `"` and can use string interpolation to insert values.

```ManiaScript
A = "destroflyer";
B = 42.157;
C = """Player "{{{ A }}}": {{{ B }}}"""; // Player "destroflyer": 42.157"
```

Operators:

```ManiaScript
A = B < C; // Less than
A = B <= C; // Less than or equal to
A = B == C; // Equal to
A = B != C; // Not equal to
A = B >= C; // Greater than or equal to
A = B > C; // Greater than
```

Comparing texts via operators such as `>` will alphabetically compare them character by character. A character occurring later in the alphabet will be considered greater than a character occurring earlier.

## Class
While classes do exist in ManiaScript and can be used, there is no way to create custom classes. When a variable of a class type does not have an instance assigned to it, its value is `Null`. Default value is `Null`.

Object properties and methods can be accessed via `.`:

```ManiaScript
A = MyObject.MyProperty + 123;
A = MyObject.MyFunction();
```

## Ident
Every class in ManiaScript has an `Id` property of the type `Ident`. Its value can be used to uniquely identify the according object. Default value is `NullId`.

## Struct
While a script can't declare custom classes, it's possible to define structs, which are pure data objects containing multiple variables as properties. Struct types can only be declared via a [directive](/advanced/directives.html) `#Struct` in the global scope:

```ManiaScript
#Struct MyStruct {
  Integer MyNumber;
  Text MyText;
}
```

At this point, you only defined what this specific struct type looks like. To create a variable of this type, you need to declare it as you would do with any other type. A complete struct is expressed by specifying the struct name, curly braces `{}` and (not mandatory) property name and value pairs. Omitting a property inside the curly braces will assign the default value of its type to it. In the same way, the default value for a struct type is a struct with each property having its types default value assigned to it.

```ManiaScript
declare MyStruct MyDefaultValues1;
declare MyStruct MyDefaultValues2 = MyStruct{};
declare MyStruct MyCustomValues = MyStruct{ MyNumber = 1, MyText = "Example" };
```

Of course, it's also possible to set the whole struct or access single properties via `.` at a later point:

```ManiaScript
MyCustomValues = MyStruct{ MyNumber = 2, MyText = "Another example" };
MyCustomValues.MyNumber *= 2;
log(MyCustomValues.MyNumber);
```

Struct methods:

| Method           | Return Type | Description                                  |
|:-----------------|:------------|:---------------------------------------------|
| `tojson()`       | `Text`      | Serializes this struct into a JSON string.   |
| `fromjson(Text)` | StructType  | Deserializes a JSON string into this struct. |

## Array
An array can store multiple values of a specific type. It is declared via square brackets `[]` after the value type:

```ManiaScript
declare Integer[] A = [1, 3, 5, 7];
```

Default value is an empty array.

Array elements are accessed via square brackets `[]` and index, starting at 0. Accessing an invalid index will throw an error.

```ManiaScript
B = A[0]; // First element
```

Array properties:

| Property | Type      | Description         |
|:---------|:----------|:--------------------|
| `count`  | `Integer` | Length of the array |

Array methods:

| Method                      | Return Type | Description                                                                                                                                                                                  |
|:----------------------------|:------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `add(Value)`                | `Void`      | Adds `Value` as last element                                                                                                                                                                 |
| `addfirst(Value)`           | `Void`      | Adds `Value` as first element                                                                                                                                                                |
| `remove(Value)`             | `Boolean`   | Removes first occurrence of `Value`                                                                                                                                                          |
| `exists(Value)`             | `Boolean`   | Returns if `Value` is present in array                                                                                                                                                       |
| `keyof(Value)`              | `Integer`   | Returns index of `Value`                                                                                                                                                                     |
| `clear()`                   | `Void`      | Removes all elements                                                                                                                                                                         |
| `containsonly(OtherArray)`  | `Boolean`   | Returns if the array contains exactly the values in `OtherArray`                                                                                                                             |
| `containsoneof(OtherArray)` | `Boolean`   | Returns if at least one value of `OtherArray` is present in this array                                                                                                                       |
| `sort()`                    | ValueType[] | Returns a copy of this array, sorted ascending by value                                                                                                                                      |
| `sortreverse()`             | ValueType[] | Returns a copy of this array, sorted descending by value                                                                                                                                     |
| `slice(Index)`              | ValueType[] | Returns a subarray from index `Index` to the end                                                                                                                                             |
| `slice(Index, Count)`       | ValueType[] | If `Count` >= 0, returns a subarray from index `Index` to `Index + Count`.<br/>If `Count` < 0, returns a subarray beginning at `Index` and excluding the last `Count` elements of the array. |

## Associative array
An associative array can store multiple values of a specific type, indexed via keys. It is declared via the key type in square brackets `[]` after the value type:

```ManiaScript
// Text values indexed by Integers
declare Text[Integer] A = [1 => "Hello", 1337 => "World"];
```

Default value is an empty array.

Associative arrays don't have an `add` method, instead values are directly assigned to keys:

```ManiaScript
A[42] = "The answer";
```

Associative array properties:

| Property | Type      | Description         |
|:---------|:----------|:--------------------|
| `count`  | `Integer` | Length of the array |

Associative array methods:

| Method                 | Return Type | Description                                                            |
|:-----------------------|:------------|:-----------------------------------------------------------------------|
| `get(Key)`             | ValueType   | Gets the element at the `Key` index                                    |
| `get(Key, Default)`    | ValueType   | Returns value at the `Key` index or `Default` if not existing          |
| `keyof(Value)`         | KeyType     | Return the first key of an element with value `Value`                  |
| `remove(Value)`        | `Boolean`   | Removes first element with value `Value`                               |
| `removekey(Key)`       | `Boolean`   | Removes element with key `Key`                                         |
| `exists(Value)`        | `Boolean`   | Returns if an element with value `Value` is present in array           |
| `existskey(Key)`       | `Integer`   | Returns if an element with key `Key` is present in array               |
| `clear()`              | `Void`      | Removes all elements                                                   |
| `containsonly(Array)`  | `Boolean`   | Returns if the array contains exactly the values in `OtherArray`       |
| `containsoneof(Array)` | `Boolean`   | Returns if at least one value of `OtherArray` is present in this array |
| `sort()`               | ValueType[] | Returns a copy of this array, sorted ascending by value                |
| `sortreverse()`        | ValueType[] | Returns a copy of this array, sorted descending by value               |
| `sortkey()`            | ValueType[] | Returns a copy of this array, sorted ascending by key                  |
| `sortkeyreverse()`     | ValueType[] | Returns a copy of this array, sorted descending by key                 |

## Parameter array
A parameter array is an array containing objects, that has a few unique behaviours. It supports multiple types of keys, namely `Integer`, `Ident` or objects (in which case the objects `Id` property is used as key). Therefore, you can think of them as sorted object lists that still offer the possibility to access a specific element using its `Id`.

Parameter arrays are read-only and are exclusively offered by ingame APIs (they are not declarable yourself). Usually, they contain objects like the players on a server.

```ManiaScript
PlayerIdA = Players[0].Id;

// ...

PlayerA = Players[PlayerIdA];
```

As stated, parameter arrays also accept the actual object as key (instead of its `Id`). However, there isn't really a good usecase for this, as you would just receive the object back that you passed in.

```ManiaScript
PlayerA = Players[0];

// ...

TheSamePlayerA = Players[PlayerA];
```

Parameter array properties:

| Property | Type      | Description         |
|:---------|:----------|:--------------------|
| `count`  | `Integer` | Length of the array |

Parameter array methods:

| Method           | Return Type | Description                                                  |
|:-----------------|:------------|:-------------------------------------------------------------|
| `get(Key)`       | ValueType   | Gets the element at the `Key` index                          |
| `keyof(Value)`   | `Integer`   | Return the first key of an element with value `Value`        |
| `exists(Value)`  | `Boolean`   | Returns if an element with value `Value` is present in array |
| `existskey(Key)` | `Integer`   | Returns if an element with key `Key` is present in array     |

## Void
`Void` is a type that represents the absence of an actual type. It's not possible to create variables of this type, it is only used when declaring functions that return nothing.

## Casting
Casting a value from one type to another type can either be done with the keyword `as` or the function `cast`.

```ManiaScript
declare MyQuad = Page.GetFirstChild("myQuad") as CMlQuad;
```

```ManiaScript
declare MyQuad = cast(Page.GetFirstChild("myQuad"), CMlQuad);
```

This can especially be necessary when working with APIs, where results are returned in a common parent class type (e.g. fetching ManiaLink elements).

```ManiaScript
// Value will be cast from CMlControl to CMlQuad
declare MyQuad = Page.GetFirstChild("myQuad") as CMlQuad;
// BgColor is only declared in the CMlQuad class, not in CMlControl
MyQuad.BgColor = <0, 0, 0>;
```
