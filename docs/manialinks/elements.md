# Elements

| Tag             | Description                                                  |
|:----------------|:-------------------------------------------------------------|
| `label`         | Displays a text                                              |
| `quad`          | Displays a rectangle (color or image)                        |
| `entry`         | Displays a single-line textfield                             |
| `textedit`      | Displays a multi-line textfield                              |
| `fileentry`     | Displays an input to select a local file                     |
| `slider`        | Displays a slider                                            |
| `gauge`         | Displays a progress bar                                      |
| `video`         | Displays a video                                             |
| `audio`         | Displays an icon to play audio                               |
| `graph`         | Displays a line graph                                        |
| `colorpicker`   | Displays a color picker                                      |
| `timeline`      | Displays a timeline                                          |
| `frame`         | Wraps elements in a container (to transformed them together) |
| `framemodel`    | Defines a reusable template                                  |
| `frameinstance` | Adds an instance of a `framemodel` template                  |
| `dico`          | Defines a multi-language text dictionary                     |
| `include`       | Includes another Manialink file                              |

## Coordinate system
Manialinks use a coordinate system which is optimized for 16:9 screens. The origin (0, 0) is defined at the center of the screen, while the x-axis reaches from -160 to 160 and the y-axis from -90 to 90. The content is then stretched to match the actual proportions of the screen.

![Manialink coordinate system](/images/manialink_coordinate_system.png)

## Supported file types

| Type  | File types             | 
|:------|:-----------------------|
| Image | `.png`, `.jpg`, `.dds` |
| Audio | `.ogg`, `.mux`         |
| Video | `.webm`                |

## Attributes types

| Type    | Description                                                                                               | Example                     |
|:--------|:----------------------------------------------------------------------------------------------------------|:----------------------------|
| Text    | One text                                                                                                  | abc                         |
| Texts   | Multiple texts (space-separated)                                                                          | abc def                     |
| Number  | One number (supports both integers and decimal numbers)                                                   | 1.23                        |
| Numbers | Multiple numbers (space-separated)                                                                        | 1 2.34                      |
| Boolean | True if the value is one of `1`, `true` or `yes` (case-insensitive)                                       | 1                           |
| Color   | Text in one of the formats `RGB`, `RGBA`, `RRGGBB`, `RRGGBBA`, `RRGGBBAA` (hexadecimal, case-insensitive) | F90                         |
| URL     | URL (supports `http://` and `https://`)                                                                   | https://test.com/image.png  |

TODO: Check why local file paths didn't work for URLs (tried with images/audio/video/includes, with all path combinations (with/without `file://` protocol, relative with/without `.`, absolute).

## Common attributes
While each element has different [attributes](https://www.w3schools.com/xml/xml_attributes.asp), a lot of them share common ones.

### Basic attributes

| Attribute | Type    | Description                                                                                           | Default |
|:----------|:--------|:------------------------------------------------------------------------------------------------------|:--------|
| `id`      | Text    | No functional effect, annotates the element to access it via ManiaScript (should be unique)           | *none*  |
| `class`   | Texts   | No functional effect, annotates the element to access it via ManiaScript                              | *none*  |
| `z-index` | Number  | Z position (Elements with higher z position are displayed on top of elements with smaller z position) | 0       |
| `rot`     | Number  | Rotation in degrees (clockwise)                                                                       | 0       |
| `scale`   | Number  | Scale                                                                                                 | 1       |
| `hidden`  | Boolean | Hides the element                                                                                     | 0       |

An elements origin is its top left corner (important for position, rotation and scale).

### Size & alignment attributes

| Attribute      | Type    | Description                                                      | Default |
|:---------------|:--------|:-----------------------------------------------------------------|:--------|
| `size`         | Numbers | Size (width, height)                                             | 0 0     |
| `halign`       | Text    | Horizontal alignment (One of `left`, `center`, `right`)          | `left`  |
| `valign`       | Text    | Vertical alignment (One of `top`, `center`, `center2`, `bottom`) | `top`   |

### Style & display attributes

| Attribute         | Type   | Description                                                                                                                                                                                                                                                                                              | Default        |
|:------------------|:-------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------|
| `style`           | Text   | Predefined style                                                                                                                                                                                                                                                                                         | *none*         |
| `textsize`        | Number | Text size                                                                                                                                                                                                                                                                                                | 3              |
| `textcolor`       | Color  | Text color                                                                                                                                                                                                                                                                                               | `E8F2FC`       |
| `textfont`        | Text   | Text font (One of `GameFontBlack`, `GameFontBlack`, `GameFontExtraBold`, `GameFontRegular`, `GameFontSemiBold`, `Oswald`, `OswaldMono`, `RajdhaniMono`, `RobotoCondensed`, `RobotoCondensedBold`, `Nadeo/Trackmania/BebasNeueRegular`) (If the specified font is invalid, the default font will be used) | *default font* |
| `focusareacolor1` | Color  | Background color when not hovered (requires `scriptevents`)                                                                                                                                                                                                                                              | *none*         |
| `focusareacolor2` | Color  | Background color when hovered (requires `scriptevents`)                                                                                                                                                                                                                                                  | *none*         |

TODO: Document available styles.

### Media attributes

| Attribute | Type    | Description                                                                                                                                                                                                                                                        | Default |
|:----------|:--------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------|
| `data`    | URL     | Media URL ([supported file types](#supported-file-types))                                                                                                                                                                                                          | *none*  |
| `music`   | Boolean | Defines if the media is handled as music (TODO: Check what this does, does it affect volume based on user settings?)                                                                                                                                               | 0       |
| `play`    | Boolean | Defines if the media plays automatically.<br/><br />Note: The media seems to always be autoplaying, the attribute `play` does show a play/stop button if its truthy, but that button doesn't do anything (and the media in the background is immediately playing). | 0       |
| `loop`    | Boolean | Defines if the media plays in a loop.<br /><br />Note: The media seems to never loop, independent of the provided value.                                                                                                                                           | 1       |
| `volume`  | Number  | Volume in [dBFS](https://en.wikipedia.org/wiki/DBFS) (0 for maximum, negative values for quiet)                                                                                                                                                                    | 0       |

TODO: Check why audio of media can't be heard when testing.

### Action attributes

| Attribute      | Type    | Description                                                                                                                                                                                                                                                                                                  | Default |
|:---------------|:--------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------|
| `action`       | Text    | Action to use with a dedicated server callback system (TODO: Check what this does exactly, in any case it causes no mouse click event to trigger anymore on the Manialink page. An example value seems to be `action="maniaplanet:quitserver"` - It doesn't work in the editor, but maybe on a real server?) | *none*  |
| `url`          | Text    | URL to open (in an external browser) when clicked                                                                                                                                                                                                                                                            | *none*  |
| `manialink`    | Text    | Manialink to open when clicked.<br/><br/>Note: Seems to do nothing in newer games (as there is no Manialink browser anymore?).                                                                                                                                                                               | *none*  |

### Script attributes

| Attribute      | Type    | Description                                                                                                                           | Default |
|:---------------|:--------|:--------------------------------------------------------------------------------------------------------------------------------------|:--------|
| `scriptevents` | Boolean | Defines if the element receives events such as clicks or hovers (Required for some attributes or to intercept events via ManiaScript) | 0       |

## Label

### Common attributes

- [Basic attributes](#basic-attributes)
- [Size & alignment attributes](#size-alignment-attributes)
- [Style & display attributes](#style-display-attributes)
- [Action attributes](#action-attributes)
- [Script attributes](#script-attributes)

### Label attributes

| Attribute     | Type    | Description                                                                                                                                                                                                                                                                                                                                                                      | Default |
|:--------------|:--------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------|
| `text`        | Text    | Text to display (supports [text styling](/advanced/text_styling.html))                                                                                                                                                                                                                                                                                                           | *none*  |
| `textid`      | Text    | ID of the multi-language translated text to display (defined in a [Dico](#dico)) (Note: If both `text` and `textid` are specified, `text` will be used)                                                                                                                                                                                                                          | *none*  |
| `textprefix`  | Text    | Text prefix to display (before `text`/`textid`) (supports [text styling](/advanced/text_styling.html), which leaks into the following text)                                                                                                                                                                                                                                      | *none*  |
| `autonewline` | Boolean | Defines if the texts lines should automatically be displayed in multiple lines if they don't fit into the elements width. Otherwise, the game will try to stretch the whole text so that its lines fit into the width - However, this is done only up to a certain minimum character width, then the text will no longer shrink and the remaining line will be visually cut off. | 0       |
| `maxline`     | Number  | Maximum number of displayed lines, the rest will be hidden (Automatic lines from `autonewline` count towards the limit)                                                                                                                                                                                                                                                          | *none*  |
| `textemboss`  | Boolean | Defines if the text should receive a shadow (giving it an embossed look, which makes it easier to read on similar backgrounds)                                                                                                                                                                                                                                                   | 0       |
| `opacity`     | Number  | Opacity (0 = transparent, 1 = opaque)                                                                                                                                                                                                                                                                                                                                            | 1       |
| `italicslope` | Number  | Angle of the italic `$i` [text styling](/advanced/text_styling.html) (between 0 and 1)                                                                                                                                                                                                                                                                                           | 0.2     |

## Quad

### Common attributes

- [Basic attributes](#basic-attributes)
- [Size & alignment attributes](#size-alignment-attributes)
- [Action attributes](#action-attributes)
- [Script attributes](#script-attributes)

### Quad attributes

| Attribute             | Type    | Description                                                                                                                                                                                                                                                          | Default    |
|:----------------------|:--------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------|
| `bgcolor`             | Color   | Background color                                                                                                                                                                                                                                                     | *none*     |
| `image`               | URL     | Background image URL ([supported file types](#supported-file-types))                                                                                                                                                                                                 | *none*     |
| `imagefocus`          | URL     | Background image URL when hovered ([supported file types](#supported-file-types)) (requires `scriptevents`)                                                                                                                                                          | *none*     |
| `style`               | Text    | Predefined style (requires `substyle` to be set)                                                                                                                                                                                                                     | *none*     |
| `substyle`            | Text    | Predefined substyle (requires `style` to be set)                                                                                                                                                                                                                     | *none*     |
| `styleselected`       | Boolean | Use the hover state of the selected `style`                                                                                                                                                                                                                          | 0          |
| `autoscale`           | Boolean | Defines if the image should get stretched in both axes to fit the entire elements size                                                                                                                                                                               | 1          |
| `autoscalefixedwidth` | Boolean | Defines if the image should get stretched in the x-axis to fit the entire elements width, while the y-axis is getting stretched so that the original image ratio is kept                                                                                             | 0          |
| `keepratio`           | Text    | Image ratio behaviour when resizing (One of `Inactive`, `Fit`, `Clip`)                                                                                                                                                                                               | `Inactive` |
| `colorize`            | Color   | Colorizes the image by replacing all red/green/blue values with the specified color, with each new pixels color intensity being based on the green value of the original images pixel (ignoring the original red and blue value). The alpha channel stays untouched. | *none*     |
| `modulatecolor`       | Color   | Modulates the hue of the image (Use grayscale images for best results)                                                                                                                                                                                               | *none*     |
| `opacity`             | Number  | Opacity (0 = transparent, 1 = opaque)                                                                                                                                                                                                                                | 1          |
| `alphamask`           | URL     | Alphamask image URL (Technically only the green channel is considered, but of course this also allows using grayscale images (black = transparent, white = opaque)) ([supported file types](#supported-file-types))                                                  | *none*     |
| `blend`               | Text    | Blending mode (One of `default`, `add`)                                                                                                                                                                                                                              | `default`  |

TODO: Document available styles and substyles.

## Entry

### Common attributes

- [Basic attributes](#basic-attributes)
- [Size & alignment attributes](#size-alignment-attributes)
- [Style & display attributes](#style-display-attributes)
- [Script attributes](#script-attributes)

### Entry attributes

| Attribute    | Type    | Description                                                                                                                                                                                                                                                                                                                                                                                                                 | Default      |
|:-------------|:--------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------|
| `default`    | Text    | Default text (supports [text styling](/advanced/text_styling.html))                                                                                                                                                                                                                                                                                                                                                         | *none*       |
| `maxlen`     | Number  | Maximum text length (Text styling characters count towards the limit) (It's possible to specify a `default` text that is longer than the maximum length, but the user will not be able to add characters while it's too long)                                                                                                                                                                                               | 255          |
| `valuetype`  | Text    | Type of text that can be entered (One of `Ml_Unknown`, `Ml_Natural`, `Ml_Integer`, `Ml_Real`, `Ml_String`, `Ml_TimeMmSsCc`, `Ml_TimeHhMmSs`, `Ml_RealFormated`, `Ml_TimeMmSs`, `Ml_Ascii7bit`, `Ml_Real3Decimals`, `Ml_TimeHhMmSs_24`, `Ml_TimeHhMm`, `Ml_Percent`, `Ml_Hexa`, `Ml_TimeHhMmSsOrMmSs`, `Ml_TimeHhMmFromSeconds`) (Users can't add characters that would result in a text that is incompatible with the type) | `Ml_Unknown` |
| `textformat` | Text    | How the text gets displayed (One of `Basic`, `Password`, `Newpassword`) (With `Password` and `Newpassword`, each characters is displayed as `*`)                                                                                                                                                                                                                                                                            | `Basic`      |
| `selecttext` | Boolean | Defines if the text gets automatically selected when the element receives focus                                                                                                                                                                                                                                                                                                                                             | 0            |
| `name`       | Text    | No functional effect, annotates the element to identify it via ManiaScript.<br/><br/>Note: In older games, using the `name` value as query parameter value in [links](#action-attributes) replaced it with the elements current text value (TODO: Check "POST request or dedicated server as xmlrpc array")                                                                                                                 | *none*       |

## Textedit

### Common attributes

- [Basic attributes](#basic-attributes)
- [Size & alignment attributes](#size-alignment-attributes)
- [Style & display attributes](#style-display-attributes)
- [Script attributes](#script-attributes)

### Textedit attributes

| Attribute         | Type    | Description                                                                                                                                                                                                                                                                                                   | Default |
|:------------------|:--------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------|
| `default`         | Text    | Default text (supports [text styling](/advanced/text_styling.html))                                                                                                                                                                                                                                           | *none*  |
| `maxline`         | Number  | Maximum number of lines that can get entered (Automatic lines from `autonewline` don't count towards the limit)                                                                                                                                                                                               | *none*  |
| `autonewline`     | Boolean | Defines if the texts lines should automatically be displayed in multiple lines if they don't fit into the elements width. Otherwise, the game will visually cut them off and offer horizontal scrolling.                                                                                                      | 0       |
| `textformat`      | Text    | How the text gets displayed (One of `Basic`, `Password`, `Newpassword`, `Script`) (With `Password` and `Newpassword`, each characters is displayed as `*`) (With `Script`, the text will be syntax highlighted as ManiaScript)                                                                                | `Basic` |
| `showlinenumbers` | Boolean | Defines if line numbers should be displayed to the left of the input (with the current lines number being color highlighted)                                                                                                                                                                                  | 0       |
| `linespacing`     | Number  | Spacing between displayed lines, defined as the number of line heights that the y-axis progresses with each line (0 = all lines at the same height, 1 = lines directly below each other (without space between them), 2 = one empty line height between lines, 3 = two empty line height between lines, etc.) | 1       |
| `name`            | Text    | No functional effect, annotates the element to identify it via ManiaScript.<br/><br/>Note: In older games, using the `name` value as query parameter value in [links](#action-attributes) replaced it with the elements current text value (TODO: Check "POST request or dedicated server as xmlrpc array")   | *none*  |

## Fileentry

### Common attributes

- [Basic attributes](#basic-attributes)
- [Size & alignment attributes](#size-alignment-attributes)
- [Style & display attributes](#style-display-attributes)
- [Script attributes](#script-attributes)

### Fileentry attributes

| Attribute    | Type    | Description                                                                                                                                                                                                                                                       | Default |
|:-------------|:--------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------|
| `default`    | Text    | Placeholder text that is shown as long as no file is selected                                                                                                                                                                                                     | ...     |
| `type`       | Text    | File type that can be selected, other files will be hidden in the file dialog (One of `skin`, `challenge`, `map`, `replay`, `image`, `audio`, `video`, `text`, `zip`)                                                                                             | *none*  |
| `folder`     | Text    | Sets the initial and uppermost available directory in the file dialog, with the overall available root directory `/` including the games user directory (e.g. `Documents/Trackmania2020`) - Example: `Scripts` (or `/Scripts`) includes its Scripts subdirectory. | /       |
| `selecttext` | Boolean | Defines if the displayed text gets automatically selected when the element receives focus. This will result in the user having to click a second time to open the file dialog.                                                                                    | 0       |
| `name`       | Text    | No functional effect, annotates the element to identify it via ManiaScript.<br/><br/>Note: TODO: Check how it behaved in older games.                                                                                                                             | *none*  |

### Maniascript

Class: `CMlFileEntry`

| Property                   | Type | Description                                                                                                                                                                                                                                             |
|:---------------------------|:-----|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `relativenametoroot`       | Text | Path of the selected file, relative to the file dialogs root.<br/><br/>Example: `Media\MySound.ogg`                                                                                                                                                     |
| `relativenametotypefolder` | Text | Path of the selected file, relative to the file dialogs uppermost available directory (defined via `folder` attribute).<br/><br/>Example: `MyDirectory/MySound.ogg` (with `folder` being `Media` and selected file at `Media/MyDirectory/MySounds.ogg`) |
| `relativefilename`         | Text | Seems to be the same as `relativenametoroot`                                                                                                                                                                                                            |
| `fullfilename`             | Text | "Full" path of the selected file.<br/><br/>Examples: `:user:\Media\MySound.ogg` (file in user directory), `:temp:\Titles\Trackmania\Media\Musics\Stadium\Menu\MainMenu-Menu.ogg` (file included in the game)                                            |

## Slider

TODO: Add slider image.

### Common attributes

- [Basic attributes](#basic-attributes)
- [Size & alignment attributes](#size-alignment-attributes)
- [Script attributes](#script-attributes)

### Slider attributes

| Attribute     | Type    | Description                         | Default |
|:--------------|:--------|:------------------------------------|:--------|
| `range`       | Numbers | Minimum and maximum value           | 0 1     |

By default, sliders will have the minimum `range` as initial value. While it's not possible to specify a default value via XML, it's possible to set it via Maniascript (property `Value`).

## Gauge

![Gauge](/images/gauge.png)

### Common attributes

- [Basic attributes](#basic-attributes)
- [Size & alignment attributes](#size-alignment-attributes)

### Gauge attributes

| Attribute     | Type     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Default |
|:--------------|:---------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------|
| `ratio`       | Number   | Progress value (between 0 and 1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | 0       |
| `style`       | Text     | Predefined style                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | *none*  |
| `color`       | Color    | Color for both the covered progress (brighter variant) and the non-covered progress (darker variant)                                                                                                                                                                                                                                                                                                                                                                                                                    | FFF     |
| `drawbg`      | Boolean  | Defines if the background (everything except the progress) is displayed                                                                                                                                                                                                                                                                                                                                                                                                                                                 | 1       |
| `drawblockbg` | Boolean  | Defines if the non-covered progress is displayed                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | 1       |
| `centered`    | Boolean  | Displays the covered progress in the center instead of starting from the left                                                                                                                                                                                                                                                                                                                                                                                                                                           | 0       |
| `grading`     | Number   | Splits the progress into multiple sections, by defining the section width (between 0 and 1). If `centered` is active, the resulting number of sections is applied to both halves, with the most center section of each half getting merged.<br/><br/>Example: A `grading` value of 0.25 will result in the progress being displayed in 4 sections (equally wide) if `centered` is inactive, or 7 sections (3 small ones on the left, 1 bigger one in the center and 3 small ones on the right) if `centered` is active. | 1       |
| `clan`        | Number   | TODO: Check what this does                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | TODO    |

TODO: Document available styles.

## Video

### Common attributes

- [Basic attributes](#basic-attributes)
- [Size & alignment attributes](#size-alignment-attributes)
- [Media attributes](#media-attributes)

## Audio

### Common attributes

- [Basic attributes](#basic-attributes)
- [Size & alignment attributes](#size-alignment-attributes)
- [Media attributes](#media-attributes)

## Graph

### Common attributes

- [Basic attributes](#basic-attributes)
- [Size & alignment attributes](#size-alignment-attributes)

### Graph attributes

| Attribute | Type    | Description                                                | Default |
|:----------|:--------|:-----------------------------------------------------------|:--------|
| `min`     | Numbers | Minimum x and y-axis value of the graphs coordinate system | 0 0     |
| `max`     | Numbers | Maximum x and y-axis value of the graphs coordinate system | 10 10   |

### Graph children

Each line in the graph is defined by a `curve`, made out of `point`s.

### Curve attributes

| Attribute | Type   | Description                                                                                                                                                                             | Default |
|:----------|:-------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------|
| `color`   | Color  | Line color                                                                                                                                                                              | FFF     |
| `width`   | Number | Line width (No matter how small this value is, the drawn line will always be at least 1 pixel wide)                                                                                     | 0.5     |
| `style`   | Text   | Predefined width (One of `thin` (1 pixel width, independent of screen resolution), TODO: Document other styles) (Note: If both `width` and `style` are specified, `style` will be used) | *none*  |

### Point attributes

| Attribute | Type    | Description                                                                              | Default                                   |
|:----------|:--------|:-----------------------------------------------------------------------------------------|:------------------------------------------|
| `coords`  | Numbers | Position of the point in the graphs coordinate system                                    | *If not provided, no point will be drawn* |

### Usage

```xml
<graph size="50 50" min="0 0" max="10 10">
  <curve color="00F" width="1" style="thin">
    <point coords="0 0" />
    <point coords="10 10" />
  </curve>
  <curve color="F00" width="1">
    <point coords="0 10" />
    <point coords="5 0" />
    <point coords="10 10" />
  </curve>
</graph>
```

![Graph](/images/graph.png)

## Colorpicker

### Common attributes

- [Basic attributes](#basic-attributes)
- [Size & alignment attributes](#size-alignment-attributes)
- [Script attributes](#script-attributes)

### Colorpicker attributes

| Attribute      | Type  | Description   | Default |
|:---------------|:------|:--------------|:--------|
| `defaultcolor` | Color | Default color | 000     |

## Timeline

### Common attributes

- [Basic attributes](#basic-attributes)
- [Size & alignment attributes](#size-alignment-attributes)

### Timeline attributes

| Attribute          | Type   | Description                                                                                                             | Default                                            |
|:-------------------|:-------|:------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------|
| `trackcount`       | Number | Number of tracks (Specifying a decimal number will result in an according gap between the last track and the time axis) | 6                                                  |
| `defaulttimeshown` | Number | Length of the visible time axis part                                                                                    | 1                                                  |
| `bgcolor`          | Color  | Color of the tracks background                                                                                          | 7F7F7F                                             |
| `separatorcolor`   | Color  | Color of the tracks separators                                                                                          | FF0                                                |
| `rulercolor`       | Color  | Color of the time axis                                                                                                  | 3F3F3F                                             |
| `rulerlinecolor`   | Color  | Color of the tick marks on the time axis                                                                                | 000                                                |
| `cursorcolor`      | Color  | Color of the current time cursor                                                                                        | F00                                                |
| `keycolor`         | Color  | Color of the keyframes (TODO: Check)                                                                                    | TODO (based on replay editor, it's probably cyan?) |

TODO: Check and describe if/how to add blocks (with keyframes?) to the timeline (either via XML (children like for `graph`?) or Maniascript).

## Frame

### Common attributes

- [Basic attributes](#basic-attributes)

### Usage

```xml
<frame pos="10 20">
  <quad pos="0 5" size="20 20" bgcolor="000"/>
  <label pos="2 -3" text="hello"/>
</frame>
```

Transforming a `frame` applies the transformation to all of its children, meaning in the example above the `quad` will be positioned at `10 25` and the label at `12 17`.

## Framemodel

### Framemodel attributes

| Attribute | Type   | Description          | Default |
|:----------|:-------|:---------------------|:--------|
| `id`      | Text   | ID of this template  | *none*  |

### Usage

```xml
<framemodel id="myModel">
  <quad pos="0 5" size="20 20" bgcolor="000"/>
  <label pos="2 -3" text="hello"/>
</framemodel>
```

## Frameinstance

### Common attributes

- [Basic attributes](#basic-attributes)

### Frameinstance attributes

| Attribute          | Type   | Description                                       | Default |
|:-------------------|:-------|:--------------------------------------------------|:--------|
| `modelid`          | Text   | `id` attribute of the `framemodel` to instantiate | *none*  |

### Usage

```xml
<frameinstance modelid="myModel" pos="0 10"/>
<frameinstance modelid="myModel" pos="20 20" rot="20"/>
<frameinstance modelid="myModel" pos="30 30" scale="1.5"/>
```

## Dico

Defines a multi-language text dictionary, whose entries can be referenced and will be translated automatically.

### Usage

```xml
<dico>
  <language id="en">
    <example1>Hello</example1>
  </language>
  <language id="fr">
    <example1>Salut</example1>
  </language>
</dico>
<label textid="example1" />
```

This [label](#label) will display "Salut" for a French user and "Hello" for an English user (depending on the game clients language).

You can include multiple `dict` elements in your Manialink - If an ID exists more than once for a certain language, the first match will be used.

If there is no translation for an id in the target language, an empty text will be used.

## Include

Includes the content of another Manialink file at the current place.

### Include attributes

| Attribute | Type | Description   | Default |
|:----------|:-----|:--------------|:--------|
| `url`     | URL  | Manialink URL | *none*  |

### Usage

```xml
<include url="./MyOtherFile.xml"/>
```
