# Extension variables
In ManiaScript, it is possible to (basically) add new properties to existing objects. This is similar to extending a class in other languages to add new properties while still using the object as a valid instance of the old class. Obviously, this is a very powerful tool since you have no limitations to write additional data onto objects, but it can make keeping track of everything more difficult.

Since you can't declare new classes in ManiaScript, the primary usecase of this mechanism is to store custom data in important game objects like a player, to later access it in other places where said object is passed to. An example would be a respawn counter that is being written onto the player at the point of respawning and then later read when generating a custom scoreboard, where you have the Player object available.

```maniascript
declare Integer RespawnCounter for Player;
```

After declaring a variable `for` an object (in this case the object `Player`), the object will store (and offer) this variable for the remaining program execution. This is independent of the scope that the declaration happened in: You can declare a new variable this way at any point and even after exiting your current scope, any other code that has access to the object will still be able to use the variable afterwards.

In the example above, the variable will be initialized with the declared types default value (e.g. 0 in case of `Integer`).

While the variable is attached to the object (like a property), it's not a real property, meaning it's not possible to access it via the `.` operator. While not encouraged, this difference allows extension variables to use the same name as an already existing property of an object:

```maniascript
declare Real Speed for Player;
// Speed and Player.Speed are separate variables and can have different values
```

## Writing
To write a value into such an extension variable, you can simply assign a value to it via `=`. However, the syntax can be a bit confusing because ManiaScript offers a way to declare a custom default value (assigned if the object does not have the extension variable yet).

```maniascript
declare Integer MyVariable for Player = 2;
Player.MyVariable += 1;
```

At first sight, the code above seems suboptimal because it looks like we assign the value 2 to the new variable and afterwards increase it by 1 - So why not directly set it to 3 in the declaration? The reason is that the value after the `=` in the declaration is just defining the default value, i.e. the value that is assigned to the variable if it does not exist on the object yet. If the variable already exists (e.g. if the code above would be called multiple times or if another part of your program already created it), the existing value will not be modified by the declaration line. Therefore, what the code above really does, is simply increasing the variable by 1 each time it's called, starting from a value of 2 if there is no value yet.

It is not mandatory to declare a default value. If not specified, the default value of the specified type will be used. Likewise, if a default value is specified, it's not mandatory to specify the type as it can be resolved automatically.

```maniascript
declare MyIntegerVariable for Player = 2;
declare MyTextVariable for Player = "Hello";
```

## Reading
To read from an extension variable, you need to declare it in your current scope, so the program is aware of its existence. This will create a local variable in your scope with the same name.

```maniascript
declare Integer MyVariable for Player;
log(MyVariable);
```

Notice how this is the exact same declaration as writing, meaning it will create the variable (with a customizable default value) if it doesn't exist yet. Therefore, it is not possible to recognize on a technical level if the variable was already declared before - However, this can be easily worked around by assigning a default value to it that is only assigned when freshly creating the variable and never manually.

If your current scope already happens to have a variable with the same name, you can use the `as` keyword to give the extension variable a custom name in the current scope.

```maniascript
declare Integer MyScore = 2;
declare Integer MyScore as MyPlayerScore for Player;
MyScore += MyPlayerScore;
```

A more realistic scenario would be reading the same extension variable from multiple objects into different variables:

```maniascript
declare Integer MyScore as MyScore1 for Players[0];
declare Integer MyScore as MyScore2 for Players[1];
```
