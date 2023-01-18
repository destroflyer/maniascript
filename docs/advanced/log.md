# Log
Logging is an important tool to find out what is happening in your program. ManiaScript offers a function `log` that prints any value passed to it to a console.

```ManiaScript
log(MyVariable);
log("Players count: " ^ Players.count);
```

Non-primitive values such as vectors, structs or objects will be printed as human-readable text, including all of their properties (if existing).

## Game client
When running a script in the game client (including local servers), the log output can be found in the [debug window](/introduction/development_setup.html#debug-window).

## Dedicated server
On dedicated servers, the log will be printed to the default console output (`stdout`).
