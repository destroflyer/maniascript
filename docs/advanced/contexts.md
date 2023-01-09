# Contexts
Each ManiaScript runs in a specific context, which can be various engine classes, like `CMlScriptIngame` or `CMapeditorPlugin`. These classes you can find in the api docs mentioned above.
The class methods and properites then apply from there.

You can always see which context you are on a script with:

```ManiaScript
log(This);
```

In-game you have always right context, but sometimes you need as well to require one. This can be done following way:

```ManiaScript
#RequireContext CMlScriptIngame
```