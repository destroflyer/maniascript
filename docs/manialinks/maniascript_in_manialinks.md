# Manialink ManiaScript
You can execute ManiaScript in a Manialink via the `script` tag, with the scripts code being placed inside a comment:

```xml
<script><!--
  main() {
    log("Hello world");
  }
--></script>
```

Like everywhere else, you can omit the [main](/basics/functions.html#main) function if your script is simple enough:

```xml
<script><!--
  log("Hello world");
--></script>
```

## Execution
The script gets executed once when the Manialink is displayed to the player.

If you want to write a script that runs for a long time or even infinitely (e.g. to react to user inputs or server events), you can use a loop combined with `yield` [to prevent freezing](/advanced/time.html#yield):

```maniascript
While (True) {
  yield;

  // Gets executed every frame
  log(Now);
}
```

Note that the script is executed on the players machine (where the Manialink is displayed). This means that in a server-client setup where you want to interact with the server script (e.g. a Manialink that displays a certain value from the game mode), you will need to connect the two scripts via [network](/advanced/network.html).

## Global variables

| Name        | Type          | Description        |
|:------------|:--------------|--------------------|
| `GUIPlayer` | `CSmPlayer`   | The own player     |
| `UI`        | `CUIConfig`   | The own players UI |
