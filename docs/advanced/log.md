# Log
Logging is an important tool to find out what is happening in your program. ManiaScript offers a function `log` that prints any value passed to it to the console.

```ManiaScript
log(MyVariable);
log("Players count: " ^ Players.count);
```

## Game client
When running a script in the game client (including local servers), the log output can be found in the [debug window](/introduction/development_setup.html#debug-window).

## Dedicated server
On dedicated servers, the log will be printed to the default console output (`stdout`).