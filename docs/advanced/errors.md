# Errors

## Compilation
If your script contains compilation errors such as usage of an incorrect syntax or wrong type assignments, it will not start. The [ingame editor](/introduction/development_setup.html#editor) offers a compile button to check if there are no errors, displaying any found in the right panel.

## Runtime
Even if a script compiles, there are still errors that can happen at runtime. Examples would be dividing by zero or accessing a property of a `Null` object. When such a runtime error happens, the script will be stopped and the [output window](/introduction/development_setup.html#output-window) will be opened. The displayed log will contain information about the error such as the script name, line and column number and an error message.
