# Text styling

Like other places (such as map names or chat messages), Manialinks support styling texts by using a special syntax.

## Control characters

| Tag         | Description                     | Example                                                               | Example displayed                                                    |
|:------------|:--------------------------------|-----------------------------------------------------------------------|----------------------------------------------------------------------|
| `$o`        | Bold                            | `$oHello`                                                             | **Hello**                                                            |
| `$i`        | Italic                          | `$iHello`                                                             | *Hello*                                                              |
| `$w`        | Wide text                       | `$wHello`                                                             | <span style="letter-spacing:0.1em;">Hello</span>                     |
| `$n`        | Narrow text                     | `$nHello`                                                             | <span style="letter-spacing:-0.1em;">Hello</span>                    |
| `$m`        | Reset text width                | `$nHello$m world`                                                     | <span style="letter-spacing:-0.1em;">Hello</span> world              |
| `$t`        | Uppercase                       | `$tHello`                                                             | HELLO                                                                |
| `$s`        | Drop shadow                     | `$s`                                                                  | <span style="text-shadow:1px 1px 1px rgba(0,0,0,0.5);">Hello</span>  |
| `$l`        | Clickable link                  | `$lhttps://trackmania.com`<br/>`$l[https://trackmania.com]Trackmania` | https://trackmania.com<br/>[Trackmania](https://trackmania.com)      |
| `$RGB`      | Color (3 digits, hexadecimal)   | `$F90Hello`<br/>                                                      | <span style="color:#F90;">Hello</span>                               |
| `$g`        | Reset color                     | `$F00Hello$g World`                                                   | <span style="color:#F00;">Hello</span> World                         |
| `$z`        | Reset all                       | `$i$w$t$09FHello$z world`                                             | *<span style="letter-spacing:0.1em; color:#09F;">HELLO</span>* world |
| `$$`        | `$` symbol                      | `Price: 10 $$`                                                        | Price: 10 $                                                          |
| `$<` + `$>` | [Encapsulation](#encapsulation) | `$oPlayer: $<$i$0F0My Name$> (+0.001)`                                | **Player: *<span style="color:#0F0;">My Name</span>* (+0.001)**      |

## Adding
Adding a style to a text part is done by inserting control characters (starting with `$`) at the desired position. A control character specifies the style of all following text, until it is manually reset.

Example: The control character `$o` makes all following text bold. Therefore, using the text `$oHello World` will display "**Hello World**" (Note that the whole text is bold).

It's possible to combine multiple control characters, to achieve a combined styling.

Example: Similar to `$o` from the example above, the control character `$i` makes all following text italic. Therefore, using the text `$oHello $iWorld` will display "**Hello *World***" (Note that while the whole text is bold, only the word "World" is italic).

## Resetting
Resetting a style means that it no longer applies to all following text. This is also done by adding certain control characters to the text at the desired position.

Some control characters (`$o`, `$i`, `$t`, `$s`, `$l`) can be specifically reset by being declared again in the text. You can think of their declaration as an on/off toggle.

Example: Consider the text `This $o$iis very nice`, which will display "This ***is very nice***". To only remove the italic styling of the word "nice", one can write `This $o$iis very$i nice`, resulting in "This ***is very* nice**".

While other control characters require specific reset counterparts (`$w` and `$n` require `$m`, `$RGB` requires `$g`), all styles will be reset by using `$z`.

Example: `$o$F09This$z is also nice` will display "**<span style="color:#F09;">This</span>** is also nice".

## Encapsulation

By wrapping a section of the text in `$<` and `$>`, any inner styles will only be applied to that section. Likewise, any inner style resets will only apply to the text in that section. After the section ends, the previous styling is restored.

This is useful when you have a desired global/overall style and need to include a text with unknown custom styling - An example would be a text that is supposed to be fully bold (it leads with a `$o`) and should include the potentially styled name of a player and some info after it (e.g. "Player: PlayerName (+0.001)"). If you would simply include a player name like `$0F0My Name`, the "(+0.001)" part at the end would become green as well. On the other hand, if you reset all styles after the name via `$z` (e.g. `$oPlayer: $0F0My Name$z (+0.001)`), the "(+0.001)" would no longer be bold. By encapsulating the styled name, its styles won't "leak" outside and any previous styling will be restored after it ends: `$oPlayer: $<$0F0My Name$> (+0.001)`

Resetting styles in encapsulated sections behaves special:
- `$z` and `$g` only reset inner styles - They will not reset to the default styling, but to the previous styling before the section
- `$m` resets both outer and inner styles - It will reset to the default style, independent of the previous styling before the section
- `$o`, `$i`, `$t`, `$s` and `$l` will actually reset their outer counterpart by being declared again inside the section (This can be highly unexpected but might be intentional to ensure that styled text in the section looks different from the wrapping style (which was probably the styles intention in the first place))
