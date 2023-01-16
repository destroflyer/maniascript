# Development Setup
ManiaScript files are text files with a `.Script.txt` extension. Therefore, they can be edited with any text editor.

While Trackmania offers an ingame editor with a lot of features that external application can't compete with, you can still use an external editor if it fits your usecase better.

## Ingame

### Editor
The easiest way to edit and debug scripts is to use the ingame editor. It is accessible through different ways depending on the kind of script:

- Rules: Create an ingame server (online or LAN) and select a mode. Once you're playing on the server, press the `Scroll lock` key to open the editor.
- Map type: Launch the map editor, select a map type on the top left of the screen and then press the `Scroll lock` key.
- Map editor plugin: Launch the map editor and click on the plugin icon on the bottom of the screen. Then click on the create button on the left. If you want to edit an existing plugin, click on the small `+` button above it and afterwards on the edit button on the left.

Features:
- A main working area, this is where you will type your script (You can open up to five scripts at once and move between them via tabs)
- An include panel that displays all external scripts used by your own script and an "Include" button that displays or hides it
- A "Compile" button to check if there are no compilation errors in your script
- A "Save" button to save all modified scripts
- A "Save as" button to save the current script at a specific location with a new file name
- A debugger including the possibility to set breakpoints
- A "Test" and "Test & close" button that restarts the context, e.g. your game mode on the server
- A "Close" button to exit the editor, losing all unsaved modifications

Shortcuts:
- `Ctrl` + `A`: Select all
- `Ctrl` + `C`: Copy line/selection
- `Ctrl` + `X`: Cut line/selection
- `Ctrl` + `V`: Paste
- `Ctrl` + `D`: Duplicate line/selection
- `Ctrl` + `Q`: Comment/Uncomment line/selection
- `Ctrl` + `Shift` + `Q`: Uncomment line/selection
- `Ctrl` + `Shift` + `Up`: Move line/selection up
- `Ctrl` + `Shift` + `Down`: Move line/selection down
- `Ctrl` + `Z`: Undo
- `Ctrl` + `Y`: Redo
- `Ctrl` + `F`: Search (and replace, optional)
- `Ctrl` + `P`: Search in includes
- `Ctrl` + `G`: Jump to a line number (entered in popup)
- `Ctrl` + `1`/`2`/`3`/`4`/`5`: Jump to first/second/third/fourth/fifth script tab
- `Ctrl` + `I`: Open/Close include panel
- `Ctrl` + `E`: Compile
- `Ctrl` + `S`: Save all modified files
- `Ctrl` + `T`: Test the script without closing the editor
- `Ctrl` + `R`: Test the script and close the editor
- `Esc`: Close the editor

### Debug window
While the editor is closed, you can press `Ctrl` + `G` to open the debug window, which will initially only display the log (Everything passed to the `log` function will be printed here). If you press `Ctrl` + `G` a second time, you will see full debug window. Pressing `Ctrl` + `G` a third time will close it.

Features:
- The log
- The script you are currently debugging. If there is an error in the script, the window will display the line causing the error
- A list of all currently running scripts (You can click on each script to open it in the left area - Scripts that contain an error will be displayed in red)
- A list of all previous compilation errors (You can click on each error to see detailed information)

## External
Be aware that Trackmania caches some resources, including scripts. Therefore, when updating a script with an external editor, it won't be reloaded in the game.

### IDE extensions
- Visual Studio Code: [maniascript-support](https://marketplace.visualstudio.com/items?itemName=reaby.maniascript-support)
- Visual Studio Code: [MSLint](https://marketplace.visualstudio.com/items?itemName=aessi.vscode-mslint)
- Sublime: [Sublime-ManiaScript](https://github.com/ManiaPlanet/Sublime-ManiaScript)
- Notepad++: [notepadplusplus-maniascript](https://github.com/ManiaPlanet/notepadplusplus-maniascript)
