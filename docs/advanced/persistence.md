# Persistence

ManiaScript allows persisting variables, which means storing them across contexts (like different game modes) or even application restarts. This works with any (TODO: Check if correct) variable and can be done simply by adding the keyword `persistent` to its declaration.

```ManiaScript
declare persistent Boolean MyGameMode_ConfigA;
```

Note, that the name `MyGameMode_ConfigA` above is not simply a very exhaustive example name - Persisted variables are shared across all scripts of the game, which means you should always add a custom prefix (unique to your program) in order to avoid conflicts and therefore unpredictable behaviour.

Assigning values to `persistent` variable works the same way as it does for [extension properties](/advanced/extension_properties.html): The "initial" value after the `=` in the declaration (or the types default value if not specified) only represents the initial value if no value already has been set. This means when you persisted this variable before, the stored value will be loaded and used. After the declaration, the variable can be used to read the current value and assignments via `=` work as usual. Consider the following code:

```ManiaScript
declare persistent Integer MyGameMode_ConfigA = 42;
MyGameMode_ConfigA += 1;
```

When executing this script, the variable will not always have the value 43 - Instead, it will have the value 43 when executed for the first time, 44 during the second time, 45 during the third time, and so on (assuming nothing else is writing to it). This will continue until the stored variable gets deleted and will start from the initial value (in this case 42) again. To specify when this happens and a `persistent` variable should get deleted, you have two options. They are described in the following sections.

## Session
ManiaScripts default behaviour is to only keep `persistent` variables stored during your current session. This means, the values are not kept when the game is closed. After restarting the game, none of them will still exist and declaring a `persistent` variable will assign a fresh initial value to it again.

TODO: Check how this behaves on server.

## Profile
To keep a variable persisted across game restarts, the `persistent` variable needs to be declared as an [extension property](/advanced/extension_properties.html) of `UserMgr.MainUser`, followed by a call of `UserMgr.MainUser.PersistentSave();`.

```ManiaScript
declare persistent Integer MyGameMode_CounterA for UserMgr.MainUser;
MyGameMode_CounterA += 1;
UserMgr.MainUser.PersistentSave();
```

The important part here is `UserMgr.MainUser.PersistentSave();`, which stores the current properties of `UserMgr.MainUser` (including our extension property) in a way that survives a game restart. Without the call to this method, the variable would be deleted when your current session is closed. Again, make sure you always use a custom prefix for your variable in order to avoid conflicts with other properties.

TODO: Check how this behaves on server.
