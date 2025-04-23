# Time

## Now
ManiaScript offers a global constant `Now` to create logic that involves time. It will always be up-to-date and is an `Integer` specifying the number of milliseconds passed since the current "activity" has started (i.e. a value of 4213 means 4213 milliseconds or 4.213 seconds have passed). An example would be a custom game mode that was launched in the map editor - In this case, the value seems to be the time since the map editor was started. However, understanding the absolute value of `Now` is not too important, since it will mostly be used to recognize how much time (or if a certain amount of time) has passed since something happened.

```ManiaScript
MyStart = Now;

// Some long running code

MyPassedTime = Now - MyStart;
if (MyPassedTime > 2000) {
  // More than two seconds have passed
}
```

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

A specific use case of `wait` is a script that reacts to a list of global events (e.g. Manialink or game mode scripts) - If you would `sleep(Duration)` in such a script, you will miss the events which occurred during the `sleep` pause. This is happening because one event is only valid during 1 script "frame", i.e. the time between two consecutive `yield`. To avoid this behaviour, you can construct a `wait` call similar to the following one:

```ManiaScript
Start = Now;
wait(Now > (Start + 1000) || PendingEvents.count >= 1);
```
