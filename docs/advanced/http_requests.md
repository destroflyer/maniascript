# Http requests

ManiaScript allows you to send http requests via `Http`:

```ManiaScript
Http.CreateGet(Url);
Http.CreatePost(Url, Body);
```

There also is `Http.CreatePostFile`, but its signature is unknown.

"Creating" a request will immediately send it and return an object that can be used to observe the status (e.g. waiting until `IsCompleted` is True) and finally access the response:

```ManiaScript
declare CHttpRequest Request = Http.CreateGet(Url);
wait(Request.IsCompleted);
declare Text Response = Request.Result;
Http.Destroy(Request);
```

TODO: It's unclear if/when `Http.Destroy(Request);` needs to get called.

Note, that the example above uses `wait` for simplicity - In a context like a game mode, where you need to `yield` (or `MB_Yield` for best practice) to not miss/skip events, waiting for the request to finish could be done as following:

```ManiaScript
while (!Request.IsCompleted) {
  MB_Yield();
}
```

Of course, this (synchronous) approach will pause the entire script until the request is completed, which may not be desired (especially for requests that take a lot of time). To asynchronously handle a request, ManiaScript offers the `Http.PendingEvents` array, which you can check in your game loop:

```ManiaScript
foreach(HttpEvent in Http.PendingEvents) {
  if (HttpEvent.Request.IsCompleted) {
    // Access HttpEvent.Request.Response
  }
}
```

This approach is a bit more complex in that you might have to remember/recognize what this specific request was for, but is ultimately needed for proper asynchronous handling.
