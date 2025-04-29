# Translations
ManiaScript offers accessing the ingame translations via the [function](/basics/functions.html) `_`.

```maniascript
declare TranslatedTimeLimit = _("Time limit");
```

It accepts a `String` of the English translation as input and returns a `String` with the according translation in the game clients current language. If no translation is found, it will simply return the input again.

Therefore, when running the example above, `TranslatedTimeLimit` would be `Time limit` in an English game client and for example `Zeitlimit` in a German one.

## Logging
Translations behave specially when [logged](/advanced/log.html). Instead of printing the actual translation, ManiaScript will log the original input with a leading `̺ ` to mark it:

```maniascript
log(_("Time limit"));
```

When running this code in an English or German game client, the log will show neither `Time limit` nor `Zeitlimit`, but instead `̺ Time limit` in both.

Note that the `̺` in this prefix is not a simple underscore `_` (like the translate function itself), but the unicode character [Combining Inverted Bridge Below](https://unicode-table.com/en/033A/) (U+033A).
