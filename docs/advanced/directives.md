# Directives
Directives are special statements in the global scope a script, usually at the top. They are declared using a `#` and are not finished with a semicolon `;`. There are different types of directives doing different things, but in general, they all can be viewed as global configurations enabling something to be available in your script.

## RequireContext

```ManiaScript
#RequireContext CSmMode
```

`#RequireContext` defines the context of a script. This basically defines if the script is game mode, an editor plugin and so on. In the example, the value `CSmMode` means that the script is a game mode. Using this script for a different purpose than it was written for, e.g. as an editor plugin, will automatically throw an error. Depending on the context, you will have different built-in global variables and functions available.

## Const

```ManiaScript
#Const MyConstant True
```

`#Const` declares a constant with a value. It will be accessible everywhere like a global variable, but its value cannot be modified at runtime. Specifying a value is mandatory, as the constants type will be resolved from it, in the example the constant would be of type `Boolean` with the value `True`.

## Struct

See [Struct](/basics/types.html#struct).

## Include
`#Include` loads another script and binds its constants and functions to a namespace (global variables are not included). It is the same concept as what's often called an "import" in other programming languages.

An example would be a script located in `MyPath/Library.Script.txt` with the following content:

```ManiaScript
#Const MyConstant 1.23

Void MyFunction() {
  log("Hello");
}
```

To include and use this script in another one:

```ManiaScript
#Include "MyPath/Library.Script.txt" as MyLib

// ...

log(MyLib::MyConstant);
MyLib::MyFunction();
```

The namespace (in the example above `MyLib`) is freely definable, but of course it's not allowed to specify one that's conflicting with other names.

Included scripts are not allowed to have a [main function](/basics/functions.html#main) and the included constants and functions are only available in the script that directly includes them (i.e. not in scripts that include a script that includes them).

## Setting

```ManiaScript
#Setting MySetting 123 as "MySettingDescription"
```

`#Setting` is only available in game modes (TODO: Check if correct). Settings are declared by specifying a name, value and an optional description (via `as`). The example above declares a setting called `MySetting` with the initial value `123` (which resolves the settings type to `Integer`) and the description `MySettingDescription`. From the scripts point of view, they behave like constants: They are globally accessible and their value cannot be modified at runtime by the script itself.

However, settings can be modified from outside the script. This can for example happen by the host editing the configuration when creating a server, which is where the description will be displayed to explain what each settings functionality is. Using the description `<hidden>` will hide the setting from this dialog. Settings can also be modified at runtime via a server controller, e.g. triggered by player vote.

## Extends

```ManiaScript
#Extends "Libs/Nadeo/TMNext/TrackMania/Modes/TMNextBase.Script.txt"
```

`#Extends` defines that the current script is an extension of another script, meaning it should share the same `main()` method, constants, settings, variables, functions, etc. as its "parent" and will simply extend its functionality (usually by adding new implementations of [labels](/advanced/labels.html)). Since the parent script could also be extending another script, it is possible to build a hierarchy. Due to this mechanism, it is for example common (but not necessary) for all game modes to ultimately extend Nadeos lowest level game mode script `Libs/Nadeo/ModeLibs/Common/ModeBase.Script.txt` and start customizing from there.

## Command
TODO: Describe commands.

```ManiaScript
#Command Command_ForceEndRound (Boolean) as "ForceEndRound"

// later at script
while (True) {
  yield;
  foreach (Event in PendingEvents) {
    if (Event.Type != CTmModeEvent::EType::OnCommand) continue;
    switch (Event.CommandName) {
      case "Command_ForceEndRound": {
        // @todo end round
      }
    }
  }
}
```
