# Http requests

ManiaScript allows you to send http requests via `Http`:

```ManiaScript
Http.CreateGet("https://test.com");
Http.CreatePost("https://test.com", "{\"score\":123}");
// There also is Http.CreatePostFile, but its signature is unknown
```

Both `http://` and `https://` are supported, but there is no default - In other words, the protocol need to be explicitly stated in / be part of the URL.

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

## Headers

ManiaScript automatically attaches some headers to your request, which can be used on the server to identify and handle it.

GET requests contain the following headers:

| Header                 | Example value                                                                 |
|:-----------------------|:------------------------------------------------------------------------------|
| `Accept`               | \*/\*                                                                         |
| `Accept-Encoding`      | gzip,deflate                                                                  |
| `Accept-Language`      | en-US,en                                                                      |
| `Nadeo-Game-Build`     | 2024-12-12_15_15                                                              |
| `Nadeo-Game-Crossplay` | 1                                                                             |
| `Nadeo-Game-Lang`      | en-US                                                                         |
| `Nadeo-Game-Name`      | ManiaPlanet                                                                   |
| `Nadeo-Game-Platform`  | PC_Windows                                                                    |
| `Nadeo-Game-Version`   | 3.3.0                                                                         |
| `User-Agent`           | ManiaPlanet/3.3.0 (Win64; rv: 2024-12-12_15_15; context: none; distro: AZURO) |
| `X-Amzn-Trace-Id`      | Root-1-67fd4144-2fd6831f52da666e33998bfd                                      |

POST requests also contain the following additional headers: 

| Header               | Example value                       |
|:---------------------|:------------------------------------|
| `Cache-Control`      | no-cache, no-store, must-revalidate |
| `Content-Length`     | 123                                 |
| `Content-Type`       | application/binary                  |
| `Pragma`             | no-cache                            |
 