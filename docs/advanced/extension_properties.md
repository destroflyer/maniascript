# Extension properties
In ManiaScript, it is possible to freely add new properties to objects. This is similar to extending a class in other languages to add new properties while still using the object as a valid instance of the old class. Obviously, this is a very powerful tool since you have no limitations to write additional data onto objects, but it can make keeping track of everything more difficult.

Since you can't declare new classes in ManiaScript, the primary usecase of this mechanism is to store custom data in important game objects like a player, to later access it in other places where said object is passed to. An example would be a respawn counter that is being written onto the player at the point of respawning and then later read when generating a custom scoreboard, where you have the Player object available.

```ManiaScript
declare Integer RespawnCounter for Player;
```

After declaring a variable `for` an object (in this case the object `Player`), the object will contain a corresponding property for the remaining program execution. This is independent of the scope that the declaration happened in: You can declare a new property this way at any point and even after exiting your current scope, any other code that has access to this object will still be able to use it afterwards.

It's not allowed to add an extension property with the same name as an already existing (non-extension) property of an object.

## Writing
To write a value into such an extension property, you can simply assign a value to it via `=`. However, the syntax can be a bit confusing because ManiaScript offers a way to declare a custom default value (assigned if the object does not have the property yet).

```ManiaScript
declare Integer MyProperty for Player = 2;
Player.MyProperty += 1;
```

At first sight, the code above seems suboptimal because it looks like we assign the value 2 to the new property and afterwards increase it by 1 - So why not directly set it to 3 in the declaration? The reason is that the value after the `=` in the declaration is just defining the default value, i.e. the value that is assigned to the property if it does not exist yet. If the property already exists (e.g. if the code above would be called multiple times or if another part of your program already created it), the existing value will not be modified by the declaration line. Therefore, what the code above really does, is simply increasing the property by 1 each time it's called, starting from a value of 2 if there is no value yet.

It is not mandatory to declare a default value. If not specified, the default value of the specified type will be used. Likewise, if a default value is specified, it's not mandatory to specify the type as it can be resolved automatically.

```ManiaScript
declare MyIntegerProperty for Player = 2;
declare MyTextProperty for Player = "Hello";
```

## Reading
To read from an extension property, you need to declare it in your current scope, so the program is aware of its existence. This will create a local variable in your scope with the same name.

```ManiaScript
declare Integer MyProperty for Player;
log(MyProperty);
```

Notice how this is the exact same declaration as writing, meaning it will create the property (with a customizable default value) if it doesn't exist yet. Therefore, it is not possible to recognize on a technical level if the variable was already declared before - However, this can be easily worked around by assigning a default value to it that is only assigned when freshly creating the property and never manually.

If your current scope already happens to have a variable with the same name, you can use the `as` keyword to give the extension property a custom name in the current scope.

```ManiaScript
declare Integer MyProperty = 2;
declare Integer MyProperty as MyPlayerProperty for Player;
MyProperty += MyPlayerProperty;
```
