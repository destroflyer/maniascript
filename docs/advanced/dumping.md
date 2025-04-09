# Dumping
Dumping something in ManiaScript converts it to a `Text` representing ManiaScript code that would express it. This is an important difference to the usual text conversion that is for example done by concatenation (`^`) or `log`, which can omit a few characters like quotes for readability.

## Dump
The function `dump` returns a `Text` representing ManiaScript code that would express the passed value.

```ManiaScript
MyText = dump("Hello World"); // "Hello World"
MyText = dump(<1.3, 2.0, -1.4>); // <1.3, 2., -1.4>
MyText = dump(["A" => 1, "B" => 2]); // ["A"=>1, "B"=>2]
```

`dump` supports the following types:
- `Boolean`
- `Integer`
- `Real`
- `Vector`
- `Text`
- `Ident`
- Vectors
- Lists (of a supported type)
- Associative arrays (of a supported type)

`dump` does not support the following types:
- Structs
- Classes
- Objects
- API arrays

## Dumptype
The function `dumptype` returns a `Text` representing ManiaScript code that would declare the passed [struct](/basics/types.html#struct) type.

```ManiaScript
#Struct MyStruct {
  Integer MyNumber;
  Text MyText;
}

// ...

// #Struct MyStruct { Integer MyNumber; Text MyText; }
MyText = dumptype(MyStruct);
```
