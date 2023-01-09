# Types

ManiaScript is a strongly typed language, meaning every value has to be of a certain type and a value of a different type will not be accepted in its place.

## Boolean
A `Boolean` can be either `True` or `False`. Default value is `False`.

```ManiaScript
A = True;
```
Operators:
```ManiaScript
A = B && C; // And
A = B || C; // Or
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
ManiaScript offers arithmetic compound assignments:
```ManiaScript
A += B; // A = A + B;
A -= B; // A = A - B;
A *= B; // A = A * B;
A /= B; // A = A / B;
```
The result of a basic arithmetic operation of a `Real` and an `Integer` is a `Real`.

ManiaScript does not offer atomic increment/decrement operations (`A++`, `A--`), you are required to write `A += 1`, `A -= 1`.

## Integer
An `Integer` is an integer between -2<sup>31</sup> (-2147483648) and 2<sup>31</sup>-1 (2147483647). Default value is `0`.

The `Integer` type also offers a modulo operator (Not available for `Real`):
```ManiaScript
A = B % C;
A %= B; // A = A % B
```

## Real
A `Real` is a real number between 1e-45 and 1e+38. Default value is `0.0`. Comparison threshold for `Real` values is 1e-5 (0.00001).

`Real` values always need to be written with a `.` character (`3.141592`). In case of the number ending with `.0`, the `0` can be omitted (`-1.`).

## Text
A `Text` is a string of characters and is defined via quotes `"`. Default value is empty `""`.
```ManiaScript
A = "Hello World";
```

Special characters can be escaped via `\`:
```ManiaScript
A = "Me: \"Hello World\"";
B = "This is a backslash: \\";
```

A `Text` can be concatenated to another `Text` with the `^` operator:
```ManiaScript
A = "Hello";
B = " World";
C = A ^ B; // "Hello World"
```

ManiaScript offers text interpolation via `"""`:
```ManiaScript
A = "world";
B = 42.157;
C = """The {{{ A }}} record is {{{ B }}}."""; // "The world record is 42.157."
```

## Array
An array can store multiple values of a specific type. It is declared via square brackets `[]` after the value type:
```ManiaScript
declare Integer[] A = [1, 3, 5, 7];
```

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
| `sort()`                    | ValueType[] | Sorts array ascending                                                                                                                                                                        |
| `sortreverse()`             | ValueType[] | Sorts array descending                                                                                                                                                                       |
| `slice(Index)`              | ValueType[] | Returns a subarray beginning at `Index` and ending at the end of the list                                                                                                                    |
| `slice(Index, Count)`       | ValueType[] | If `Count` >= 0, returns a subarray from index `Index` to `Index + Count`.<br/>If `Count` < 0, returns a subarray beginning at `Index` and excluding the last `Count` elements of the array. |

## Associative Array
An associative array can store multiple values of a specific type, indexed via keys. It is declared via the key type in square brackets `[]` after the value type:

```ManiaScript
declare Text[Integer] A; // Text values indexed by Integers
```

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
| `existkey(Key)`        | `Integer`   | Returns if an element with key `Key` is present in array               |
| `clear()`              | `Void`      | Removes all elements                                                   |
| `containsonly(Array)`  | `Boolean`   | Returns if the array contains exactly the values in `OtherArray`       |
| `containsoneof(Array)` | `Boolean`   | Returns if at least one value of `OtherArray` is present in this array |
| `sort()`               | ValueType[] | Sorts values ascending                                                 |
| `sortreverse()`        | ValueType[] | Sorts values descending                                                |
| `sortkey()`            | ValueType[] | Sorts keys ascending                                                   |
| `sortkeyreverse()`     | ValueType[] | Sorts keys descending                                                  |

## Vectors
ManiaScript offers a few numeric vector types, which represent a container including multiple numbers. Default values are the default value of the corresponding numeric type.

| Type      | Description                               | Example           |
|:----------|:------------------------------------------|:------------------|
| `Int2`    | Two-dimensional vector, using `Integer`   | `<1, 2>`          |
| `Int3`    | Three-dimensional vector, using `Integer` | `<255, 128, 0>`   |
| `Vec2`    | Two-dimensional vector, using `Real`      | `<1., -.5>`       |
| `Vec3`    | Three-dimensional vector, using `Real`    | `<.5, -1.2, -0.>` |

The values can either be accessed via the properties `X`, `Y` and `Z` (if three-dimensional) or via array indices `0`, `1` and `2` (if three-dimensional):

```ManiaScript
A = <1, 2>;
B = <3.4, 0, -5>;

C = A.X + A.Y + B.Z;
C = A[0] + A[1] + B[2];
```

## Structs
A struct is a data object containing multiple variables. It can be seen as a tool to group data (making the code both more readable and reusable). Declaring the definition of a struct type can be done via `#Struct` and only in the global scope:

```ManiaScript
#Struct MyStruct {
  Integer MyNumber;
  Text MyText;
}
```

At this point, you will only have defined what this specific struct type looks like. To create a variables of this type, you need to declare it as you would do with any other type. A complete struct is expressed by specifying the struct name, curly braces `{}` and (not mandatory) property name and value pairs. Omitting a property inside the curly braces will assign the default value of its type to it.

```ManiaScript
declare MyStruct MyDefaultValues = MyStruct{};
declare MyStruct MyCustomValues = MyStruct{ MyNumber = 1, MyText = "Example" };
```

Of course, it's also possible to set the whole struct or access single properties via `.` at a later point:

```ManiaScript
MyCustomValues = MyStruct{ MyNumber = 2, MyText = "Another example" };
MyCustomValues.MyNumber *= 2;
log(MyCustomValues.MyNumber);
```

Struct methods:

| Method               | Return Type | Description                                  |
|:---------------------|:------------|:---------------------------------------------|
| `toJson()`           | `String`    | Serializes this struct into a JSON string.   |
| `fromString(String)` | StructType  | Deserializes a JSON string into this struct. |

## Class
While classes do exist in ManiaScript and can be used, there is no way to create custom classes. When a variable of a class type does not have an instance assigned to it, its value is `Null`.

Object properties and methods can be accessed via `.`:
```ManiaScript
A = MyObject.MyProperty + 123;
A = MyObject.MyFunction();
```

## Ident
Every class in ManiaScript has a unique `Id` property of the type `Ident`, that can be used to identify the class. When not available, the value is `NullId`.

## Void
`Void` is a type that represents the absence of an actual type. It's not possible to create variables of this type, it is only used when declaring functions that return nothing.

## Casting
TODO

## Not documented
- `Class` (?)
- `Iso4`
