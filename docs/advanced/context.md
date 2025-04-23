# Context
Each ManiaScript can only run in one specific context, which can be a game mode, a Manialink, an editor plugin or something else. This context is declared by the `#RequireContext` [directive](/advanced/directives.html) specifying a class:

```ManiaScript
#RequireContext CSmMode
```

In the example above, the class `CSmMode` means that the script is a game mode. Using this script for a different purpose, e.g. as an editor plugin, will automatically throw an error.

Context class examples:
- Game mode -> `CSmMode`
- Manialink -> `CMlScriptIngame`
- Map editor plugin ->`CMapEditorPlugin`

You can find these classes and their definition in the generated [reference](/advanced/reference_generation.html).

In the actual script, the constant `This` will then be an instance of the context class and its properties and functions are available globally.
