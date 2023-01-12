# Time

## Now
TODO

## Pausing
There are multiple ways to pause the execution of your script. This can be necessary as during script execution, nothing else happens: The display is not updating, the simulations of the game are stuck, the logs are not being updated, and so on.

### Yield
The keyword `yield` pauses the script for the shortest possible amount of time.

```ManiaScript
yield;
```

The most obvious use case for `yield` is to cause a display update during a long running script, avoiding a visual freeze until the script finished.

### Sleep
The function `sleep` pauses the script for a certain amount of milliseconds.

```ManiaScript
Sleep(1500); // 1.5 seconds
```

Calling `sleep(0)` is equivalent to `yield;`, as `sleep` can be written as:

```ManiaScript
Void Sleep(Integer Duration) {
  Start = Now;
  while (Now < (Start + Duration)) {
    yield;
  }
}
```

### Wait
The function `wait` pauses the script until a `Boolean` expression evaluates to `True`.

```ManiaScript
Sleep(A > 0);
```

Please note that the expression as a whole will be evaluated repeatedly, meaning that if it's a function call, the function can potentially be called many times.

The internal logic of `wait(MyExpression)` can be written as:
```ManiaScript
while (!MyExpression) {
  yield;
}
```

A specific use case of `wait` is a script that reacts to a list of global events (e.g. ManiaLink or game mode scripts) - If you would `sleep(Duration)` in such a script, you will miss the events which occurred during the `sleep` pause. This is happening because one event is only valid during 1 script "frame", i.e. the time between two consecutive `yield`. To avoid this behaviour, you can construct a `wait` call similar to the following one:

```ManiaScript
Start = Now;
wait(Now > (Start + 1000) || PendingEvents.count >= 1);
```
