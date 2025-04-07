# Aliases

Aliases are a special type of pointer that are assigned via `<=>`. They are fast and quite powerful, yet their behaviour can be surprising, especially if you are used to common pointer programming. 

Here's an example: There's a [parameter array](/basics/types.html#parameter-array) of players called `Players`, which is offered by the ingame APIs and sorted descending by score. You can write:

```ManiaScript
declare BestPlayer <=> Players[0];
// Alice is the best player, so BestPlayer "points" to Alice
```

You would probably expect that:

```ManiaScript
// Alice is the best player, so BestPlayer "points" to Alice
declare BestPlayer <=> Players[0];

// Some code doing stuff...

// Will log Alice, right?
log(BestPlayer.Login);
```

But: Here, `BestPlayer` is an alias. Therefore, `BestPlayer` means "The player at the first position of the array `Players`". That's why, if scores would change (and therefore the order of our example API array), it would maybe not mean Alice anymore.

```ManiaScript
// Alice is the best player, so BestPlayer "points" to Alice
declare BestPlayer <=> Players[0];

// Give 1000 points to the second best player, which is Bob
Players[1].Score += 1000;

// The following 2 lines are completely equivalent:
// They will both log Bob, because he has a higher score currently
log(BestPlayer.Login);
log(Players[0].Login);
```

In these cases, it becomes clear that instances of classes do not behave the same as `Integer` or `Text` variables. That's why Nadeo thought it would be better to use a different symbol when setting variables and aliases: To remind the user that this is not a plain assignment.

## Performance

Now what if you simply want to keep Alice (i.e. the best player at a certain point in time) in a variable to use later instead of the current best player? The following code will work "as expected":

```ManiaScript
// BestPlayerId is an Ident: It will never change
declare BestPlayerId = Players[0].Id;

// Give 1000 points to the second best player, which is Bob
Players[1].Score += 1000;

// Will log Alice
log(Players[BestPlayerId].Login);
```

But the `log` will be a bit more time-consuming than the previous example with an alias: We have to find Alice in the API array of players, based on the Ident as key.

You could also rewrite the code to first fetch the `Id` of the current best player and then create an alias for this player `Id` in the API array:

```ManiaScript
// Will be an alias to Players[AliceId] and not Players[0]. Huge difference!
declare BestPlayer <=> Players[Players[0].Id];

// Give 1000 points to the second best player, which is Bob
Players[1].Score += 1000;

// Will log Alice. Will also cost more CPU, as the alias has to be resolved
log(BestPlayer.Login);
```

And this mechanism is exactly what a simple `=` assignment on a class instance does. It is equivalent to the following code:

```ManiaScript
// Note the difference: = instead of <=>
// This does the same as: declare BestPlayer <=> Players[Players[0].Id]; 
declare BestPlayer = Players[0];

// Give 1000 points to the second best player, which is Bob
Players[1].Score += 1000;

// Will log Alice. Will also cost more CPU, as the alias has to be resolved 
log(BestPlayer.Login);              
```

Internally, every instance of a class in ManiaScript has a unique `Id` property. When using the `=` assignment, these are used in the same way as the alias in the `declare BestPlayer <=> Players[Players[0].Id];` example to produce "real pointers". However, these do cost a bit more when set and accessed compared to simple aliases like `declare BestPlayer <=> Players[0];`. Performance should not be an issue though. When in doubt, you should use `=`.

## Tricky alias cases
Unfortunately, there are some edge cases where aliases can become tricky.

### Aliases in parameter arrays
Imagine an array of class instances, that are read from a [parameter array](/basics/types.html#parameter-array).

```ManiaScript
// Players[0] => Alice, Players[1] => Bob
declare MyArray = [Players[0], Players[1]];
declare MyValue <=> MyArray[0];
MyArray = [Players[1], Players[0]];

// Will log "Alice", not what you may expect
log(MyValue.Login);
```

When writing `MyValue <=> MyArray[0]`, it means "take the alias that is stored in `MyArray[0]` and copy it into `MyValue`". Therefore, `MyValue` is an alias to `Player[0]` and not `MyArray[0]`. This is because the value stored in `MyArray` is already an alias, which gets copied directly, instead of creating an alias to the alias. In fact, creating an alias to an alias is not possible in ManiaScript due to technical limitations.

### Functions returning class instances

As with API parameter arrays, handling API functions behaves differently from handling functions declared in your script.

When you call an API function, the result will be a "simplified" alias. Those are unambiguous aliases referring to the objects `Id`, inside of an API-defined parameter array.

```ManiaScript
// MyLabel is an alias to Page.MainFrame.Controls[IdOfTheFirstChildFound]
declare MyLabel <=> GetFirstChild("Label"); 
```

The code above is behaving exactly like:

```ManiaScript
declare MyLabel <=> Page.MainFrame.Controls[GetFirstChild("Label").Id];
```

So if there was an API function called `GetBestPlayer`, the following code would still log Alice, even though the best player changed between alias creation and logging.

```ManiaScript
// Alice is the best player, so BestPlayer is an alias for Players[AliceId]
declare BestPlayer <=> GetBestPlayer();

// Give 1000 points to the second best player, which is Bob
Players[1].Score += 1000;

// Will log Alice
log(BestPlayer.Login); 
```

When dealing with script-defined functions, the aliases are directly copied (the same way they are when using script-defined arrays). Therefore, if `GetBestPlayer` in the previous example was a function defined in your script, it would log "Bob" instead.

In both cases, using a class instance you obtained from a function call will never call the function again when resolving the alias.

TODO: Check if this is just for API functions that return class instances or also custom functions that return class instances (which means the title should change)