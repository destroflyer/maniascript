# Events

## Default events
Default events are events that are getting triggered by the game out-of-the-box. They are available in the array `PendingEvents`.

While they mostly also contain more specific (e.g. race-related) events, this is not the case for all of them, plus they are typed differently. As such, `PendingEvents` is usually only used for very generic events such as a player joining.

## Race events
Race events are race-related events like a player respawning or being eliminated.

They are available in the array `Race::GetPendingEvents()`. Depending on the base of your game mode, this array can also already be available via a variable `RacePendingEvents`.

```maniascript
foreach (Event in Race::GetPendingEvents()) {
  if (Event.Type == Events::C_Type_Respawn) {
    log(Event.Player.User.Name ^ " respawned");
  }
}
```

## Custom events
Custom events are events that you can trigger via your client script, and react to in your server script. This is a very powerful tool to build custom functionality and interactions.

On the client, they can be sent via the function `SendCustomEvent`, which requires an event name and a `Text` array for data to attach (can be empty):
```maniascript
SendCustomEvent("myCustomType", ["myCustomData1", "myCustomData2"]);
```

On the server, they are available in the array `UIManager.PendingEvents`:
```maniascript
foreach (Event in UIManager.PendingEvents) {
  if (Event.Type == CUIConfigEvent::EType::OnLayerCustomEvent) {
    if (Event.CustomEventType == "myCustomType") {
      log(Event.CustomEventData);
    }
  }
}
```
