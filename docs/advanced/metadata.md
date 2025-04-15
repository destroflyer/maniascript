# Metadata

Some objects support storing additional metadata on them. So far, this is only known as true for maps.

It works by simply declaring additional [extension variables](/advanced/extension_variables.html) via the keyword `metadata` for them:

```ManiaScript
declare metadata Text MyValue for Map = "Hello";
```

When saving this map in the editor, its metadata variables will also be stored in the map file. That way, when loading it the next time, even on a different machine like a server or your friends pc, the metadata variable will be available again and even accessible by other scripts that have access to the map object, such as game modes.

A good usecase for this mechanism would be a custom game mode that supports putting actual configuration in the maps themselves, for example some locations on the map where something special happens if a player drives near them.

It is currently not known how to remove existing metadata variables.

## Contexts
The context from which you create metadata variables can be important. While the details are not fully known yet, the following observations were made.

### Map type
Custom map types seem to be able to freely create and even update existing metadata variables for the map.

### Game mode
When running a custom game mode in the map editor, the game mode script can create metadata variables for the map and when exiting the game mode, saving the map will indeed store them in the map file. However, you have to be careful: This seems to be only possible for the initial creation of the variable. Once it exists and the map was saved, you can't change the value anymore, at least in this way. This is because the variable itself will be readonly inside the script. Therefore, only the ["initial" assignment](/advanced/extension_variables.html#writing) of the extension variable can assign a value to it and this is only possible once.
