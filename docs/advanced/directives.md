# Directives
Directives are special statements in the global scope a script, usually at the top. They are declared using a `#` and are not finished with a semicolon `;`. There are different types of directives doing different things, but in general, they all can be viewed as global configurations enabling something to be available in your script.

## RequireContext

See [Context](/advanced/context.html).

## Struct

See [Struct](/basics/types.html#struct).

## Const

```maniascript
#Const MyConstant True
```

`#Const` declares a constant with a value. It will be accessible everywhere like a global variable, but its value cannot be modified at runtime. Specifying a value is mandatory, as the constants type will be resolved from it, in the example the constant would be of type `Boolean` with the value `True`.

## Include
`#Include` loads another script and binds its constants and functions to a namespace (global variables are not included). It is the same concept as what's often called an "import" in other programming languages.

An example would be a script located in `MyPath/Library.Script.txt` with the following content:

```maniascript
#Const MyConstant 1.23

Void MyFunction() {
  log("Hello");
}
```

To include and use this script in another one:

```maniascript
#Include "MyPath/Library.Script.txt" as MyLib

// ...

log(MyLib::MyConstant);
MyLib::MyFunction();
```

The namespace (in the example above `MyLib`) is freely definable, but of course it's not recommended to specify a name that's conflicting with another one. While the ManiaScript compiler actually allows this and in this case, merges the namespaces and shows a warning, this approach is not recommended (see below).

For the same reason (and likewise discouraged), it's possible to include a script without binding it to a specific namespace (and therefore binding it to the global namespace):

```maniascript
#Include "MyPath/Library.Script.txt"

// ...

MyFunction();
```

The reasons why these approaches that lead to merging namespaces are discouraged:
- Worse traceability: It's hard to understand where `MyFunction` is coming from
- Unexpected behaviour: If a function named `MyFunction` already exists in the namespace (either directly declared there or indirectly via another included script), ManiaScript will not throw an error but simply ignore this conflict and will keep using the very first `MyFunction` that was declared/imported, even if the signatures are different. The non-conflicting functions from the different libraries will however be included just fine, which can lead to even more confusion or unpredictable behavior.

In total, merging namespaces can result in a lot of (potentially undetected) issues that can be avoided by simply always specifying a namespace.

Included scripts are not allowed to have a [main function](/basics/functions.html#main) and the included constants and functions are only available in the script that directly includes them (i.e. not in scripts that include a script that includes them).

## Setting

```maniascript
#Setting MySetting 123 as "MySettingDescription"
```

`#Setting` is only available in game modes (TODO: Check if correct). Settings are declared by specifying a name, a value (which defines the settings type) and an optional description (of type `Text`, via `as`). From the scripts point of view, they behave like constants: They are globally accessible and their value cannot be modified at runtime by the script itself.

However, settings can be modified from outside the script. This can for example happen by the host editing the configuration when creating a server, which is where the description will be displayed to explain what each settings functionality is. Using the description `<hidden>` will hide the setting from this dialog. Settings can also be modified at runtime via a server controller, e.g. triggered by player vote.

## Extends

```maniascript
#Extends "Libs/Nadeo/TMNext/TrackMania/Modes/TMNextBase.Script.txt"
```

`#Extends` defines that the current script is an extension of another script, meaning it should share the same `main()` method, constants, settings, variables, functions, etc. as its "parent" and will simply extend its functionality (usually by adding new implementations of [labels](/advanced/labels.html)). Since the parent script could also be extending another script, it is possible to build a hierarchy. Due to this mechanism, it is for example common (but not necessary) for all game modes to ultimately extend Nadeos lowest level game mode script `Modes/Nadeo/TMGame/Base/ModeBase.Script.txt` and start customizing from there.

Scripts that extend other scripts are not allowed to declare a `main()` method or global variables.

## Command
`#Command` is only available in game modes (TODO: Check if correct). Commands are declared by specifying a name, a value type (in round brackets `()`) and an optional description (of type `Text`, via `as`).

```maniascript
#Command MyCommand(Boolean) as "MyCommandDescription"
```

Commands can be sent to the server and will appear as events in `PendingEvents`. The game mode can identify command events via their `Type` and `CommandName` properties:

```maniascript
foreach (Event in PendingEvents) {
  if (Event.Type == CTmModeEvent::EType::OnCommand) {
    switch (Event.CommandName) {
      case "MyCommand": {
        // ...
      }
    }
  }
}
```
