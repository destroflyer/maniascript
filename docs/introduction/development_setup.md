# Development setup
ManiaScript files are text files with a `.Script.txt` extension. Therefore, they can be edited with any text editor.

While Trackmania offers an ingame editor with a lot of features that external application can't compete with, you can still use an external editor if it fits your usecase better.

## Ingame

### Editor
The easiest way to edit and debug scripts is to use the ingame editor. It is accessible through different ways in the map editor, depending on the kind of script:
- Game mode: Click on `Map Options` at the bottom right and select `Test the map with mode` and your mode. While playing, press the `Scroll lock` key to open the editor.
- Map type: Click on `Map Options` at the bottom right and select `Set map type` and your map type. While in the editor, press the `Scroll lock` key to open the editor and select your map type on the right.
- Map editor plugin: Click on `Plugins Mode [P]` at the bottom center. Then click on the `Create` button on the left to open the editor. If you want to edit an existing plugin, click on the small `+` button above it and afterwards on the edit button on the left.

Components:
- A main working area, this is where you will type your script (You can open up to five scripts at once and move between them via tabs)
- A "Compile" button to check if there are no compilation errors in your script
- A "Save" button to save all modified scripts
- A "Save as" button to save the current script at a specific location with a new file name
- A "Test" and "Test & close" button that restarts the context, e.g. your game mode on the server
- A "Close" button to exit the editor, losing all unsaved modifications
- An include panel where you can navigate all external scripts included by your own script
- A debugger panel including the possibility to set breakpoints
- A search and replace panel

Shortcuts:
- `Ctrl` + `Space`: Autocomplete
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
- `Ctrl` + `Home`: Jump to the files start
- `Ctrl` + `End`: Jump to the files end
- `Ctrl` + `F3`: Search for the selection and jump to next result
- `Ctrl` + `Shift` + `F3`: Search for the selection and jump to previous result
- `F3`: Jump to next search result
- `Shift` + `F3`: Jump to previous search result
- `Esc`: Close the editor

### Output window
While the editor is closed, you can press `Ctrl` + `G` to open the output window, which will initially only display the [log](/advanced/log.html). If you press `Ctrl` + `G` a second time, you will see full window, now also showing the [script viewer](/advanced/script_viewer.html). Both are tools that will be helpful when executing code and trying to find out what's happening. Pressing `Ctrl` + `G` a third time will close the window.

### Ingame
While playing a map to test a game mode, you can restart the server by pressing `Shift` + `Scroll lock` (using the up-to-date saved script).

## External
Be aware that Trackmania caches some resources, including scripts. Therefore, when updating a script with an external editor, it won't necessarily be reloaded in the game.

### IDE extensions
- Visual Studio Code: [maniascript-support](https://marketplace.visualstudio.com/items?itemName=reaby.maniascript-support)
- Visual Studio Code: [MSLint](https://marketplace.visualstudio.com/items?itemName=aessi.vscode-mslint)
- Sublime: [Sublime-ManiaScript](https://github.com/ManiaPlanet/Sublime-ManiaScript)
- Notepad++: [notepadplusplus-maniascript](https://github.com/ManiaPlanet/notepadplusplus-maniascript)
