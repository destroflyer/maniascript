# Elements

| Tag             | Description                                                |
|:----------------|:-----------------------------------------------------------|
| `label`         | Displays a text                                            |
| `quad`          | Displays a rectangle (color or image)                      |
| `entry`         | Displays a single-line textfield                           |
| `textedit`      | Displays a multi-line textfield                            |
| `fileentry`     | Displays an input to select a local file                   |
| `slider`        | Displays a slider                                          |
| `gauge`         | Displays a progress bar                                    |
| `video`         | Displays a video                                           |
| `audio`         | Displays an icon to play audio                             |
| `graph`         | Displays a line graph                                      |
| `colorpicker`   | Displays a color picker                                    |
| `timeline`      | Displays a timeline                                        |
| `frame`         | Wraps elements in a container (to transform them together) |
| `framemodel`    | Defines a reusable template                                |
| `frameinstance` | Adds an instance of a `framemodel` template                |
| `dico`          | Defines a multi-language text dictionary                   |
| `include`       | Includes another Manialink file                            |

## Coordinate system
Manialinks use a coordinate system which is optimized for 16:9 screens. The origin (0, 0) is defined at the center of the screen, while the x-axis reaches from -160 to 160 and the y-axis from -90 to 90. The content is then stretched to match the actual proportions of the screen.

![Manialink coordinate system](/assets/images/manialink_coordinate_system.png)

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

| Attribute | Type    | Description                                                                                                                                                   | Default |
|:----------|:--------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------|
| `id`      | Text    | No functional effect, annotates the element to access it via ManiaScript (should be unique)                                                                   | *none*  |
| `class`   | Texts   | No functional effect, annotates the element to access it via ManiaScript                                                                                      | *none*  |
| `z-index` | Number  | Elements with higher `z-index` are displayed on top of elements with smaller `z-index` (There is no guaranteed order if two elements have the same `z-index`) | 0       |
| `rot`     | Number  | Rotation in degrees (clockwise)                                                                                                                               | 0       |
| `scale`   | Number  | Scale                                                                                                                                                         | 1       |
| `hidden`  | Boolean | Hides the element                                                                                                                                             | 0       |

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
| `style`           | Text   | Predefined [text style](#text-styles)                                                                                                                                                                                                                                                                    | *none*         |
| `textsize`        | Number | Text size                                                                                                                                                                                                                                                                                                | 3              |
| `textcolor`       | Color  | Text color                                                                                                                                                                                                                                                                                               | `E8F2FC`       |
| `textfont`        | Text   | Text font (One of `GameFontBlack`, `GameFontBlack`, `GameFontExtraBold`, `GameFontRegular`, `GameFontSemiBold`, `Oswald`, `OswaldMono`, `RajdhaniMono`, `RobotoCondensed`, `RobotoCondensedBold`, `Nadeo/Trackmania/BebasNeueRegular`) (If the specified font is invalid, the default font will be used) | *default font* |
| `focusareacolor1` | Color  | Background color when not hovered (requires `scriptevents`)                                                                                                                                                                                                                                              | *none*         |
| `focusareacolor2` | Color  | Background color when hovered (requires `scriptevents`)                                                                                                                                                                                                                                                  | *none*         |

#### Text styles

- AvatarButtonNormal
- BgMainMenuTitleHeader
- Default
- FrameTransitionFromLeft
- FrameTransitionsFromRight
- ListItemMedal
- Manialink_Body
- ProgressBar
- ProgressBarSmall 
- SliderSmall
- SliderVolume
- StyleTextScriptEditor
- StyleValueYellowSmall
- TextActionMaker
- TextButtonBig
- TextButtonMedium
- TextButtonNav
- TextButtonNavBack
- TextButtonSmall
- TextCardInfoSmall
- TextCardInfoVerySmall
- TextCardMedium
- TextCardMediumWhite
- TextCardRaceRank
- TextCardScores2
- TextCardSmall
- TextCardSmallScores2
- TextCardSmallScores2Rank
- TextChallengeNameMedal
- TextChallengeNameMedalNone
- TextChallengeNameMedium
- TextChallengeNameSmall
- TextCongratsBig
- TextCredits
- TextCreditsTitle
- TextEditorArticle
- TextInfoMedium
- TextInfoSmall
- TextPlayerCardName
- TextPlayerCardScore
- TextRaceChat
- TextRaceChrono
- TextRaceChronoError
- TextRaceChronoOfficial
- TextRaceChronoWarning
- TextRaceMessage
- TextRaceMessageBig
- TextRaceStaticSmall
- TextRaceValueSmall
- TextRankingsBig
- TextSPScoreBig
- TextSPScoreMedium
- TextSPScoreSmall
- TextStaticMedium
- TextStaticSmall
- TextStaticVerySmall
- TextSubTitle1
- TextSubTitle2
- TextTips
- TextTitle1
- TextTitle2
- TextTitle2Blink
- TextTitle3
- TextTitle3Header
- TextTitleError
- TextToolTipAM
- TextToolTipAMBig
- TextValueBig
- TextValueMedium
- TextValueMediumSm
- TextValueSmall
- TextValueSmallSm
- TrackerText
- TrackerTextBig
- TrackListItem
- TrackListLine
- UiDriving_BgBottom
- UiDriving_BgCard
- UiDriving_BgCenter
- CardButtonMedium
- CardButtonMediumL
- CardButtonMediumS
- CardButtonMediumWide
- CardButtonMediumXL
- CardButtonMediumXS
- CardButtonMediumXXL
- CardButtonMediumXXXL
- CardButtonSmall
- CardButtonSmallL
- CardButtonSmallS
- CardButtonSmallWide
- CardButtonSmallXL
- CardButtonSmallXS
- CardButtonSmallXXL
- CardButtonSmallXXXL
- CardMain_Quit
- CardMain_Tool
- CardMain_Tool_NoBg
- CardMain_Tool_NoBg2

### Media attributes

| Attribute | Type    | Description                                                                                                                                                                                                                                                        | Default |
|:----------|:--------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------|
| `data`    | URL     | Media URL ([supported file types](#supported-file-types))                                                                                                                                                                                                          | *none*  |
| `music`   | Boolean | Defines if the media is handled as music (TODO: Check what this does, does it affect volume based on user settings?)                                                                                                                                               | 0       |
| `play`    | Boolean | Defines if the media plays automatically.<br/><br />Note: The media seems to always be autoplaying, the attribute `play` does show a play/stop button if its truthy, but that button doesn't do anything (and the media in the background is immediately playing). | 0       |
| `loop`    | Boolean | Defines if the media plays in a loop.<br /><br />Note: The media seems to never loop, independent of the provided value.                                                                                                                                           | 1       |
| `volume`  | Number  | Volume in [dBFS](https://en.wikipedia.org/wiki/DBFS) (0 for maximum, negative values for quiet)                                                                                                                                                                    | 0       |

TODO: Check why audio of media can't be heard when testing (also when triggered via ManiaScript `.Play()`).

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
| `text`        | Text    | Text to display (supports [text styling](/manialinks/text_styling.html))                                                                                                                                                                                                                                                                                                         | *none*  |
| `textid`      | Text    | ID of the multi-language translated text to display (defined in a [Dico](#dico)) (Note: If both `text` and `textid` are specified, `text` will be used)                                                                                                                                                                                                                          | *none*  |
| `textprefix`  | Text    | Text prefix to display (before `text`/`textid`) (supports [text styling](/manialinks/text_styling.html), which leaks into the following text)                                                                                                                                                                                                                                      | *none*  |
| `autonewline` | Boolean | Defines if the texts lines should automatically be displayed in multiple lines if they don't fit into the elements width. Otherwise, the game will try to stretch the whole text so that its lines fit into the width - However, this is done only up to a certain minimum character width, then the text will no longer shrink and the remaining line will be visually cut off. | 0       |
| `maxline`     | Number  | Maximum number of displayed lines, the rest will be hidden (Automatic lines from `autonewline` count towards the limit)                                                                                                                                                                                                                                                          | *none*  |
| `textemboss`  | Boolean | Defines if the text should receive a shadow (giving it an embossed look, which makes it easier to read on similar backgrounds)                                                                                                                                                                                                                                                   | 0       |
| `opacity`     | Number  | Opacity (0 = transparent, 1 = opaque)                                                                                                                                                                                                                                                                                                                                            | 1       |
| `italicslope` | Number  | Angle of the italic `$i` [text styling](/manialinks/text_styling.html) (between 0 and 1)                                                                                                                                                                                                                                                                                           | 0.2     |

### ManiaScript

Class: `CMlLabel`

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
| `style`               | Text    | Predefined [quad style](#quad-styles) (requires `substyle` to be set)                                                                                                                                                                                                | *none*     |
| `substyle`            | Text    | Predefined [quad substyle](#quad-styles) (requires `style` to be set)                                                                                                                                                                                                | *none*     |
| `styleselected`       | Boolean | Use the hover state of the selected predefined [quad style](#quad-styles)                                                                                                                                                                                            | 0          |
| `autoscale`           | Boolean | Defines if the image should get stretched in both axes to fit the entire elements size                                                                                                                                                                               | 1          |
| `autoscalefixedwidth` | Boolean | Defines if the image should get stretched in the x-axis to fit the entire elements width, while the y-axis is getting stretched so that the original image ratio is kept                                                                                             | 0          |
| `keepratio`           | Text    | Image ratio behaviour when resizing (One of `Inactive`, `Fit`, `Clip`)                                                                                                                                                                                               | `Inactive` |
| `colorize`            | Color   | Colorizes the image by replacing all red/green/blue values with the specified color, with each new pixels color intensity being based on the green value of the original images pixel (ignoring the original red and blue value). The alpha channel stays untouched. | *none*     |
| `modulatecolor`       | Color   | Modulates the hue of the image (Use grayscale images for best results)                                                                                                                                                                                               | *none*     |
| `opacity`             | Number  | Opacity (0 = transparent, 1 = opaque)                                                                                                                                                                                                                                | 1          |
| `alphamask`           | URL     | Alphamask image URL (Technically only the green channel is considered, but of course this also allows using grayscale images (black = transparent, white = opaque)) ([supported file types](#supported-file-types))                                                  | *none*     |
| `blend`               | Text    | Blending mode (One of `default`, `add`)                                                                                                                                                                                                                              | `default`  |

### Quad styles

| Style                  | Substyle                  |
|:-----------------------|:--------------------------|
| 321Go                  | 3                         |
| 321Go                  | 2                         |
| 321Go                  | 1                         |
| 321Go                  | Go!                       |
| Bgs1                   | ArrowDown                 |
| Bgs1                   | ArrowLeft                 |
| Bgs1                   | ArrowRight                |
| Bgs1                   | ArrowUp                   |
| Bgs1                   | BgButton                  |
| Bgs1                   | BgButtonBig               |
| Bgs1                   | BgButtonGlow              |
| Bgs1                   | BgButtonGrayed            |
| Bgs1                   | BgButtonOff               |
| Bgs1                   | BgButtonShadow            |
| Bgs1                   | BgButtonSmall             |
| Bgs1                   | BgCard                    |
| Bgs1                   | BgCard1                   |
| Bgs1                   | BgCard2                   |
| Bgs1                   | BgCard3                   |
| Bgs1                   | BgCardBuddy               |
| Bgs1                   | BgCardChallenge           |
| Bgs1                   | BgCardFolder              |
| Bgs1                   | BgCardInventoryItem       |
| Bgs1                   | BgCardList                |
| Bgs1                   | BgCardOnline              |
| Bgs1                   | BgCardPlayer              |
| Bgs1                   | BgCardProperty            |
| Bgs1                   | BgCardSystem              |
| Bgs1                   | BgCardZone                |
| Bgs1                   | BgColorContour            |
| Bgs1                   | BgDialogBlur              |
| Bgs1                   | BgEmpty                   |
| Bgs1                   | BgGlow2                   |
| Bgs1                   | BgGradBottom              |
| Bgs1                   | BgGradLeft                |
| Bgs1                   | BgGradRight               |
| Bgs1                   | BgGradTop                 |
| Bgs1                   | BgGradV                   |
| Bgs1                   | BgHealthBar               |
| Bgs1                   | BgIconBorder              |
| Bgs1                   | BgList                    |
| Bgs1                   | BgListLine                |
| Bgs1                   | BgMetalBar                |
| Bgs1                   | BgPager                   |
| Bgs1                   | BgProgressBar             |
| Bgs1                   | BgShadow                  |
| Bgs1                   | BgSlider                  |
| Bgs1                   | BgSystemBar               |
| Bgs1                   | BgTitle                   |
| Bgs1                   | BgTitle2                  |
| Bgs1                   | BgTitle3                  |
| Bgs1                   | BgTitle3_1                |
| Bgs1                   | BgTitle3_2                |
| Bgs1                   | BgTitle3_3                |
| Bgs1                   | BgTitle3_4                |
| Bgs1                   | BgTitle3_5                |
| Bgs1                   | BgTitleGlow               |
| Bgs1                   | BgTitlePage               |
| Bgs1                   | BgTitleShadow             |
| Bgs1                   | BgWindow1                 |
| Bgs1                   | BgWindow2                 |
| Bgs1                   | BgWindow3                 |
| Bgs1                   | BgWindow4                 |
| Bgs1                   | EnergyBar                 |
| Bgs1                   | EnergyTeam2               |
| Bgs1                   | Glow                      |
| Bgs1                   | HealthBar                 |
| Bgs1                   | NavButton                 |
| Bgs1                   | NavButtonBlink            |
| Bgs1                   | NavButtonQuit             |
| Bgs1                   | ProgressBar               |
| Bgs1                   | ProgressBarSmall          |
| Bgs1                   | Shadow                    |
| Bgs1InRace             | ArrowDown                 |
| Bgs1InRace             | ArrowLeft                 |
| Bgs1InRace             | ArrowRight                |
| Bgs1InRace             | ArrowUp                   |
| Bgs1InRace             | BgButton                  |
| Bgs1InRace             | BgButtonBig               |
| Bgs1InRace             | BgButtonGlow              |
| Bgs1InRace             | BgButtonGrayed            |
| Bgs1InRace             | BgButtonOff               |
| Bgs1InRace             | BgButtonShadow            |
| Bgs1InRace             | BgButtonSmall             |
| Bgs1InRace             | BgCard                    |
| Bgs1InRace             | BgCard1                   |
| Bgs1InRace             | BgCard2                   |
| Bgs1InRace             | BgCard3                   |
| Bgs1InRace             | BgCardBuddy               |
| Bgs1InRace             | BgCardChallenge           |
| Bgs1InRace             | BgCardFolder              |
| Bgs1InRace             | BgCardInventoryItem       |
| Bgs1InRace             | BgCardList                |
| Bgs1InRace             | BgCardOnline              |
| Bgs1InRace             | BgCardPlayer              |
| Bgs1InRace             | BgCardProperty            |
| Bgs1InRace             | BgCardSystem              |
| Bgs1InRace             | BgCardZone                |
| Bgs1InRace             | BgColorContour            |
| Bgs1InRace             | BgDialogBlur              |
| Bgs1InRace             | BgEmpty                   |
| Bgs1InRace             | BgGlow2                   |
| Bgs1InRace             | BgGradBottom              |
| Bgs1InRace             | BgGradLeft                |
| Bgs1InRace             | BgGradRight               |
| Bgs1InRace             | BgGradTop                 |
| Bgs1InRace             | BgGradV                   |
| Bgs1InRace             | BgHealthBar               |
| Bgs1InRace             | BgIconBorder              |
| Bgs1InRace             | BgList                    |
| Bgs1InRace             | BgListLine                |
| Bgs1InRace             | BgMetalBar                |
| Bgs1InRace             | BgPager                   |
| Bgs1InRace             | BgProgressBar             |
| Bgs1InRace             | BgShadow                  |
| Bgs1InRace             | BgSlider                  |
| Bgs1InRace             | BgSystemBar               |
| Bgs1InRace             | BgTitle                   |
| Bgs1InRace             | BgTitle2                  |
| Bgs1InRace             | BgTitle3                  |
| Bgs1InRace             | BgTitle3_1                |
| Bgs1InRace             | BgTitle3_2                |
| Bgs1InRace             | BgTitle3_3                |
| Bgs1InRace             | BgTitle3_4                |
| Bgs1InRace             | BgTitle3_5                |
| Bgs1InRace             | BgTitleGlow               |
| Bgs1InRace             | BgTitlePage               |
| Bgs1InRace             | BgTitleShadow             |
| Bgs1InRace             | BgWindow1                 |
| Bgs1InRace             | BgWindow2                 |
| Bgs1InRace             | BgWindow3                 |
| Bgs1InRace             | BgWindow4                 |
| Bgs1InRace             | EnergyBar                 |
| Bgs1InRace             | EnergyTeam2               |
| Bgs1InRace             | Glow                      |
| Bgs1InRace             | HealthBar                 |
| Bgs1InRace             | NavButton                 |
| Bgs1InRace             | NavButtonBlink            |
| Bgs1InRace             | NavButtonQuit             |
| Bgs1InRace             | ProgressBar               |
| Bgs1InRace             | ProgressBarSmall          |
| Bgs1InRace             | Shadow                    |
| BgsChallengeMedals     | BgBronze                  |
| BgsChallengeMedals     | BgGold                    |
| BgsChallengeMedals     | BgNadeo                   |
| BgsChallengeMedals     | BgNotPlayed               |
| BgsChallengeMedals     | BgPlayed                  |
| BgsChallengeMedals     | BgSilver                  |
| BgsPlayerCard          | BgActivePlayerCard        |
| BgsPlayerCard          | BgActivePlayerName        |
| BgsPlayerCard          | BgActivePlayerScore       |
| BgsPlayerCard          | BgCard                    |
| BgsPlayerCard          | BgCardSystem              |
| BgsPlayerCard          | BgMediaTracker            |
| BgsPlayerCard          | BgPlayerCard              |
| BgsPlayerCard          | BgPlayerCardBig           |
| BgsPlayerCard          | BgPlayerCardSmall         |
| BgsPlayerCard          | BgPlayerName              |
| BgsPlayerCard          | BgPlayerScore             |
| BgsPlayerCard          | BgRacePlayerLine          |
| BgsPlayerCard          | BgRacePlayerName          |
| BgsPlayerCard          | ProgressBar               |
| Copilot                | Down                      |
| Copilot                | DownGood                  |
| Copilot                | DownWrong                 |
| Copilot                | Left                      |
| Copilot                | LeftGood                  |
| Copilot                | LeftWrong                 |
| Copilot                | Right                     |
| Copilot                | RightGood                 |
| Copilot                | RightWrong                |
| Copilot                | Up                        |
| Copilot                | UpGood                    |
| Copilot                | UpWrong                   |
| Emblems                | #0                        |
| Emblems                | #1                        |
| Emblems                | #2                        |
| EnergyBar              | BgText                    |
| EnergyBar              | EnergyBar                 |
| EnergyBar              | EnergyBar_0.25            |
| EnergyBar              | EnergyBar_Thin            |
| EnergyBar              | HeaderGaugeLeft           |
| EnergyBar              | HeaderGaugeRight          |
| Hud3dEchelons          | EchelonBronze1            |
| Hud3dEchelons          | EchelonBronze2            |
| Hud3dEchelons          | EchelonBronze3            |
| Hud3dEchelons          | EchelonGold1              |
| Hud3dEchelons          | EchelonGold2              |
| Hud3dEchelons          | EchelonGold3              |
| Hud3dEchelons          | EchelonSilver1            |
| Hud3dEchelons          | EchelonSilver2            |
| Hud3dEchelons          | EchelonSilver3            |
| Hud3dIcons             | Cross                     |
| Hud3dIcons             | CrossTargeted             |
| Hud3dIcons             | Player1                   |
| Hud3dIcons             | Player2                   |
| Hud3dIcons             | Player3                   |
| Hud3dIcons             | PointA                    |
| Hud3dIcons             | PointB                    |
| Hud3dIcons             | PointC                    |
| Icons128x128_1         | Advanced                  |
| Icons128x128_1         | Back                      |
| Icons128x128_1         | BackFocusable             |
| Icons128x128_1         | Beginner                  |
| Icons128x128_1         | Browse                    |
| Icons128x128_1         | Buddies                   |
| Icons128x128_1         | Challenge                 |
| Icons128x128_1         | ChallengeAuthor           |
| Icons128x128_1         | Coppers                   |
| Icons128x128_1         | Create                    |
| Icons128x128_1         | Credits                   |
| Icons128x128_1         | Custom                    |
| Icons128x128_1         | CustomStars               |
| Icons128x128_1         | Default                   |
| Icons128x128_1         | Download                  |
| Icons128x128_1         | Easy                      |
| Icons128x128_1         | Editor                    |
| Icons128x128_1         | Event                     |
| Icons128x128_1         | Extreme                   |
| Icons128x128_1         | Forever                   |
| Icons128x128_1         | GhostEditor               |
| Icons128x128_1         | Hard                      |
| Icons128x128_1         | Hotseat                   |
| Icons128x128_1         | Inputs                    |
| Icons128x128_1         | Invite                    |
| Icons128x128_1         | LadderPoints              |
| Icons128x128_1         | Lan                       |
| Icons128x128_1         | Launch                    |
| Icons128x128_1         | Load                      |
| Icons128x128_1         | LoadTrack                 |
| Icons128x128_1         | Manialink                 |
| Icons128x128_1         | ManiaZones                |
| Icons128x128_1         | MedalCount                |
| Icons128x128_1         | MediaTracker              |
| Icons128x128_1         | Medium                    |
| Icons128x128_1         | Multiplayer               |
| Icons128x128_1         | Nations                   |
| Icons128x128_1         | NewTrack                  |
| Icons128x128_1         | Options                   |
| Icons128x128_1         | Padlock                   |
| Icons128x128_1         | Paint                     |
| Icons128x128_1         | Platform                  |
| Icons128x128_1         | PlayerPage                |
| Icons128x128_1         | Profile                   |
| Icons128x128_1         | ProfileAdvanced           |
| Icons128x128_1         | ProfileVehicle            |
| Icons128x128_1         | Puzzle                    |
| Icons128x128_1         | Quit                      |
| Icons128x128_1         | Race                      |
| Icons128x128_1         | Rankings                  |
| Icons128x128_1         | Replay                    |
| Icons128x128_1         | Save                      |
| Icons128x128_1         | ServersAll                |
| Icons128x128_1         | ServersFavorites          |
| Icons128x128_1         | ServersSuggested          |
| Icons128x128_1         | Share                     |
| Icons128x128_1         | ShareBlink                |
| Icons128x128_1         | SkillPoints               |
| Icons128x128_1         | Solo                      |
| Icons128x128_1         | Statistics                |
| Icons128x128_1         | Stunts                    |
| Icons128x128_1         | United                    |
| Icons128x128_1         | Upload                    |
| Icons128x128_1         | Vehicles                  |
| Icons128x128_Blink     | Advanced                  |
| Icons128x128_Blink     | Back                      |
| Icons128x128_Blink     | BackFocusable             |
| Icons128x128_Blink     | Beginner                  |
| Icons128x128_Blink     | Browse                    |
| Icons128x128_Blink     | Buddies                   |
| Icons128x128_Blink     | Challenge                 |
| Icons128x128_Blink     | ChallengeAuthor           |
| Icons128x128_Blink     | Coppers                   |
| Icons128x128_Blink     | Create                    |
| Icons128x128_Blink     | Credits                   |
| Icons128x128_Blink     | Custom                    |
| Icons128x128_Blink     | CustomStars               |
| Icons128x128_Blink     | Default                   |
| Icons128x128_Blink     | Download                  |
| Icons128x128_Blink     | Easy                      |
| Icons128x128_Blink     | Editor                    |
| Icons128x128_Blink     | Event                     |
| Icons128x128_Blink     | Extreme                   |
| Icons128x128_Blink     | Forever                   |
| Icons128x128_Blink     | GhostEditor               |
| Icons128x128_Blink     | Hard                      |
| Icons128x128_Blink     | Hotseat                   |
| Icons128x128_Blink     | Inputs                    |
| Icons128x128_Blink     | Invite                    |
| Icons128x128_Blink     | LadderPoints              |
| Icons128x128_Blink     | Lan                       |
| Icons128x128_Blink     | Launch                    |
| Icons128x128_Blink     | Load                      |
| Icons128x128_Blink     | LoadTrack                 |
| Icons128x128_Blink     | Manialink                 |
| Icons128x128_Blink     | ManiaZones                |
| Icons128x128_Blink     | MedalCount                |
| Icons128x128_Blink     | MediaTracker              |
| Icons128x128_Blink     | Medium                    |
| Icons128x128_Blink     | Multiplayer               |
| Icons128x128_Blink     | Nations                   |
| Icons128x128_Blink     | NewTrack                  |
| Icons128x128_Blink     | Options                   |
| Icons128x128_Blink     | Padlock                   |
| Icons128x128_Blink     | Paint                     |
| Icons128x128_Blink     | Platform                  |
| Icons128x128_Blink     | PlayerPage                |
| Icons128x128_Blink     | Profile                   |
| Icons128x128_Blink     | ProfileAdvanced           |
| Icons128x128_Blink     | ProfileVehicle            |
| Icons128x128_Blink     | Puzzle                    |
| Icons128x128_Blink     | Quit                      |
| Icons128x128_Blink     | Race                      |
| Icons128x128_Blink     | Rankings                  |
| Icons128x128_Blink     | Replay                    |
| Icons128x128_Blink     | Save                      |
| Icons128x128_Blink     | ServersAll                |
| Icons128x128_Blink     | ServersFavorites          |
| Icons128x128_Blink     | ServersSuggested          |
| Icons128x128_Blink     | Share                     |
| Icons128x128_Blink     | ShareBlink                |
| Icons128x128_Blink     | SkillPoints               |
| Icons128x128_Blink     | Solo                      |
| Icons128x128_Blink     | Statistics                |
| Icons128x128_Blink     | Stunts                    |
| Icons128x128_Blink     | United                    |
| Icons128x128_Blink     | Upload                    |
| Icons128x128_Blink     | Vehicles                  |
| Icons128x32_1          | ArrowUp                   |
| Icons128x32_1          | BgQuadWhite               |
| Icons128x32_1          | Empty                     |
| Icons128x32_1          | ManiaLinkHome             |
| Icons128x32_1          | ManiaLinkSwitch           |
| Icons128x32_1          | ManiaPlanet               |
| Icons128x32_1          | Minimize                  |
| Icons128x32_1          | Music                     |
| Icons128x32_1          | PainterBrush              |
| Icons128x32_1          | PainterFill               |
| Icons128x32_1          | PainterLayer              |
| Icons128x32_1          | PainterMirror             |
| Icons128x32_1          | PainterSticker            |
| Icons128x32_1          | PainterTeam               |
| Icons128x32_1          | RT_Cup                    |
| Icons128x32_1          | RT_Laps                   |
| Icons128x32_1          | RT_Rounds                 |
| Icons128x32_1          | RT_Script                 |
| Icons128x32_1          | RT_Team                   |
| Icons128x32_1          | RT_TimeAttack             |
| Icons128x32_1          | RT_Stunts                 |
| Icons128x32_1          | Settings                  |
| Icons128x32_1          | SliderBar                 |
| Icons128x32_1          | SliderBar2                |
| Icons128x32_1          | SliderCursor              |
| Icons128x32_1          | Sound                     |
| Icons128x32_1          | UrlBg                     |
| Icons128x32_1          | Windowed                  |
| Icons64x64_1           | 3DStereo                  |
| Icons64x64_1           | Add                       |
| Icons64x64_1           | ArrowBlue                 |
| Icons64x64_1           | ArrowDisabled             |
| Icons64x64_1           | ArrowDown                 |
| Icons64x64_1           | ArrowFastNext             |
| Icons64x64_1           | ArrowFastPrev             |
| Icons64x64_1           | ArrowFirst                |
| Icons64x64_1           | ArrowGreen                |
| Icons64x64_1           | ArrowLast                 |
| Icons64x64_1           | ArrowNext                 |
| Icons64x64_1           | ArrowPrev                 |
| Icons64x64_1           | ArrowRed                  |
| Icons64x64_1           | ArrowUp                   |
| Icons64x64_1           | Browser                   |
| Icons64x64_1           | Buddy                     |
| Icons64x64_1           | ButtonLeagues             |
| Icons64x64_1           | Camera                    |
| Icons64x64_1           | CameraLocal               |
| Icons64x64_1           | Check                     |
| Icons64x64_1           | ClipPause                 |
| Icons64x64_1           | ClipPlay                  |
| Icons64x64_1           | ClipRewind                |
| Icons64x64_1           | Close                     |
| Icons64x64_1           | Empty                     |
| Icons64x64_1           | Finish                    |
| Icons64x64_1           | FinishGrey                |
| Icons64x64_1           | First                     |
| Icons64x64_1           | GenericButton             |
| Icons64x64_1           | Green                     |
| Icons64x64_1           | IconLeaguesLadder         |
| Icons64x64_1           | IconPlayers               |
| Icons64x64_1           | IconPlayersLadder         |
| Icons64x64_1           | IconServers               |
| Icons64x64_1           | Inbox                     |
| Icons64x64_1           | LvlGreen                  |
| Icons64x64_1           | LvlRed                    |
| Icons64x64_1           | LvlYellow                 |
| Icons64x64_1           | ManiaLinkNext             |
| Icons64x64_1           | ManiaLinkPrev             |
| Icons64x64_1           | Maximize                  |
| Icons64x64_1           | MediaAudioDownloading     |
| Icons64x64_1           | MediaPlay                 |
| Icons64x64_1           | MediaStop                 |
| Icons64x64_1           | MediaVideoDownloading     |
| Icons64x64_1           | NewMessage                |
| Icons64x64_1           | NotBuddy                  |
| Icons64x64_1           | OfficialRace              |
| Icons64x64_1           | Opponents                 |
| Icons64x64_1           | Outbox                    |
| Icons64x64_1           | QuitRace                  |
| Icons64x64_1           | RedHigh                   |
| Icons64x64_1           | RedLow                    |
| Icons64x64_1           | Refresh                   |
| Icons64x64_1           | RestartRace               |
| Icons64x64_1           | Save                      |
| Icons64x64_1           | Second                    |
| Icons64x64_1           | ShowDown                  |
| Icons64x64_1           | ShowDown2                 |
| Icons64x64_1           | ShowLeft                  |
| Icons64x64_1           | ShowLeft2                 |
| Icons64x64_1           | ShowRight                 |
| Icons64x64_1           | ShowRight2                |
| Icons64x64_1           | ShowUp                    |
| Icons64x64_1           | ShowUp2                   |
| Icons64x64_1           | ShowUpChanging            |
| Icons64x64_1           | SliderCursor              |
| Icons64x64_1           | SliderCursor2             |
| Icons64x64_1           | StateFavourite            |
| Icons64x64_1           | StatePrivate              |
| Icons64x64_1           | StateSuggested            |
| Icons64x64_1           | Sub                       |
| Icons64x64_1           | TagTypeBronze             |
| Icons64x64_1           | TagTypeGold               |
| Icons64x64_1           | TagTypeNadeo              |
| Icons64x64_1           | TagTypeNone               |
| Icons64x64_1           | TagTypeSilver             |
| Icons64x64_1           | Third                     |
| Icons64x64_1           | ToolLeague1               |
| Icons64x64_1           | ToolRoot                  |
| Icons64x64_1           | ToolTree                  |
| Icons64x64_1           | ToolUp                    |
| Icons64x64_1           | TrackInfo                 |
| Icons64x64_1           | TV                        |
| Icons64x64_1           | YellowHigh                |
| Icons64x64_1           | YellowLow                 |
| Icons64x64_2           | ArrowElimination          |
| Icons64x64_2           | ArrowHit                  |
| Icons64x64_2           | Calendar                  |
| Icons64x64_2           | Disconnected              |
| Icons64x64_2           | DisconnectedLight         |
| Icons64x64_2           | LaserElimination          |
| Icons64x64_2           | LaserHit                  |
| Icons64x64_2           | NucleusElimination        |
| Icons64x64_2           | NucleusHit                |
| Icons64x64_2           | RocketElimination         |
| Icons64x64_2           | RocketHit                 |
| Icons64x64_2           | ServerNotice              |
| Icons64x64_2           | SortBy                    |
| Icons64x64_2           | UnknownElimination        |
| Icons64x64_2           | UnknownHit                |
| ManiaPlanetLogos       | IconPlanets               |
| ManiaPlanetLogos       | IconPlanetsPerspective    |
| ManiaPlanetLogos       | IconPlanetsSmall          |
| ManiaPlanetLogos       | ManiaPlanetLogoBlack      |
| ManiaPlanetLogos       | ManiaPlanetLogoBlackSmall |
| ManiaPlanetLogos       | ManiaPlanetLogoWhite      |
| ManiaPlanetLogos       | ManiaPlanetLogoWhiteSmall |
| ManiaPlanetMainMenu    | BottomBar                 |
| ManiaPlanetMainMenu    | Highlight                 |
| ManiaPlanetMainMenu    | IconAdd                   |
| ManiaPlanetMainMenu    | IconHome                  |
| ManiaPlanetMainMenu    | IconPlay                  |
| ManiaPlanetMainMenu    | IconQuit                  |
| ManiaPlanetMainMenu    | IconSettings              |
| ManiaPlanetMainMenu    | IconStore                 |
| ManiaPlanetMainMenu    | MainBg                    |
| ManiaPlanetMainMenu    | TitleBg                   |
| ManiaPlanetMainMenu    | TopBar                    |
| ManiaplanetSystem      | BgDialog                  |
| ManiaplanetSystem      | BgDialogAnchor            |
| ManiaplanetSystem      | BgFloat                   |
| ManiaplanetSystem      | Events                    |
| ManiaplanetSystem      | Medals                    |
| ManiaplanetSystem      | Statistics                |
| MedalsBig              | MedalBronze               |
| MedalsBig              | MedalGold                 |
| MedalsBig              | MedalGoldPerspective      |
| MedalsBig              | MedalNadeo                |
| MedalsBig              | MedalNadeoPerspective     |
| MedalsBig              | MedalSilver               |
| MedalsBig              | MedalSlot                 |
| TitleLogos             | Author                    |
| TitleLogos             | Title                     |
| UIConstruction_Buttons | ActionMaker               |
| UIConstruction_Buttons | Add                       |
| UIConstruction_Buttons | AirMapping                |
| UIConstruction_Buttons | Author                    |
| UIConstruction_Buttons | AuthorTime                |
| UIConstruction_Buttons | BgEditors                 |
| UIConstruction_Buttons | BgIcons                   |
| UIConstruction_Buttons | BgMain                    |
| UIConstruction_Buttons | BgTools                   |
| UIConstruction_Buttons | BlockEditor               |
| UIConstruction_Buttons | Camera                    |
| UIConstruction_Buttons | Challenge                 |
| UIConstruction_Buttons | CopyPaste                 |
| UIConstruction_Buttons | DecalEditor               |
| UIConstruction_Buttons | Delete                    |
| UIConstruction_Buttons | Directory                 |
| UIConstruction_Buttons | Down                      |
| UIConstruction_Buttons | Drive                     |
| UIConstruction_Buttons | Erase                     |
| UIConstruction_Buttons | FreeItems                 |
| UIConstruction_Buttons | GhostBlocks               |
| UIConstruction_Buttons | Help                      |
| UIConstruction_Buttons | Item                      |
| UIConstruction_Buttons | Left                      |
| UIConstruction_Buttons | MacroBlockEditor          |
| UIConstruction_Buttons | MediaTracker              |
| UIConstruction_Buttons | ObjectEditor              |
| UIConstruction_Buttons | OffZone                   |
| UIConstruction_Buttons | Options                   |
| UIConstruction_Buttons | Paint                     |
| UIConstruction_Buttons | Pick                      |
| UIConstruction_Buttons | Plugins                   |
| UIConstruction_Buttons | Quit                      |
| UIConstruction_Buttons | Redo                      |
| UIConstruction_Buttons | Reload                    |
| UIConstruction_Buttons | Right                     |
| UIConstruction_Buttons | Save                      |
| UIConstruction_Buttons | SaveAs                    |
| UIConstruction_Buttons | ScriptEditor              |
| UIConstruction_Buttons | SpotModelClearUnused      |
| UIConstruction_Buttons | SpotModelDuplicate        |
| UIConstruction_Buttons | SpotModelNew              |
| UIConstruction_Buttons | SpotModelRename           |
| UIConstruction_Buttons | Square                    |
| UIConstruction_Buttons | Stats                     |
| UIConstruction_Buttons | Sub                       |
| UIConstruction_Buttons | TerrainEditor             |
| UIConstruction_Buttons | TestSm                    |
| UIConstruction_Buttons | Text                      |
| UIConstruction_Buttons | Tools                     |
| UIConstruction_Buttons | Underground               |
| UIConstruction_Buttons | Undo                      |
| UIConstruction_Buttons | Up                        |
| UIConstruction_Buttons | Validate                  |
| UIConstruction_Buttons | Validate_Step1            |
| UIConstruction_Buttons | Validate_Step2            |
| UIConstruction_Buttons | Validate_Step3            |
| UiSMSpectatorScoreBig  | BotLeft                   |
| UiSMSpectatorScoreBig  | BotRight                  |
| UiSMSpectatorScoreBig  | CenterShield              |
| UiSMSpectatorScoreBig  | CenterShieldSmall         |
| UiSMSpectatorScoreBig  | HandleLeft                |
| UiSMSpectatorScoreBig  | HandleRight               |
| UiSMSpectatorScoreBig  | PlayerIconBg              |
| UiSMSpectatorScoreBig  | PlayerJunction            |
| UiSMSpectatorScoreBig  | PlayerSlot                |
| UiSMSpectatorScoreBig  | PlayerSlotCenter          |
| UiSMSpectatorScoreBig  | PlayerSlotRev             |
| UiSMSpectatorScoreBig  | PlayerSlotSmall           |
| UiSMSpectatorScoreBig  | PlayerSlotSmallRev        |
| UiSMSpectatorScoreBig  | TableBgHoriz              |
| UiSMSpectatorScoreBig  | TableBgVert               |
| UiSMSpectatorScoreBig  | Top                       |
| UiSMSpectatorScoreBig  | UIRange1Bg                |
| UiSMSpectatorScoreBig  | UIRange2Bg                |
| BgsButtons             | BgButtonLarge             |
| BgsButtons             | BgButtonMedium            |
| BgsButtons             | BgButtonMediumSelector    |
| BgsButtons             | BgButtonMediumSpecial     |
| BgsButtons             | BgButtonSmall             |
| BgsButtons             | BgButtonSmall2            |
| BgsButtons             | BgButtonXSmall            |

### ManiaScript

Class: `CMlQuad`

## Entry

### Common attributes

- [Basic attributes](#basic-attributes)
- [Size & alignment attributes](#size-alignment-attributes)
- [Style & display attributes](#style-display-attributes)
- [Script attributes](#script-attributes)

### Entry attributes

| Attribute    | Type    | Description                                                                                                                                                                                                                                                                                                                                                                                                                 | Default      |
|:-------------|:--------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------|
| `default`    | Text    | Default text (supports [text styling](/manialinks/text_styling.html))                                                                                                                                                                                                                                                                                                                                                         | *none*       |
| `maxlen`     | Number  | Maximum text length (Text styling characters count towards the limit) (It's possible to specify a `default` text that is longer than the maximum length, but the user will not be able to add characters while it's too long)                                                                                                                                                                                               | 255          |
| `valuetype`  | Text    | Type of text that can be entered (One of `Ml_Unknown`, `Ml_Natural`, `Ml_Integer`, `Ml_Real`, `Ml_String`, `Ml_TimeMmSsCc`, `Ml_TimeHhMmSs`, `Ml_RealFormated`, `Ml_TimeMmSs`, `Ml_Ascii7bit`, `Ml_Real3Decimals`, `Ml_TimeHhMmSs_24`, `Ml_TimeHhMm`, `Ml_Percent`, `Ml_Hexa`, `Ml_TimeHhMmSsOrMmSs`, `Ml_TimeHhMmFromSeconds`) (Users can't add characters that would result in a text that is incompatible with the type) | `Ml_Unknown` |
| `textformat` | Text    | How the text gets displayed (One of `Basic`, `Password`, `Newpassword`) (With `Password` and `Newpassword`, each characters is displayed as `*`)                                                                                                                                                                                                                                                                            | `Basic`      |
| `selecttext` | Boolean | Defines if the text gets automatically selected when the element receives focus                                                                                                                                                                                                                                                                                                                                             | 0            |
| `name`       | Text    | No functional effect, annotates the element to identify it via ManiaScript.<br/><br/>Note: In older games, using the `name` value as query parameter value in [links](#action-attributes) replaced it with the elements current text value (TODO: Check "POST request or dedicated server as xmlrpc array")                                                                                                                 | *none*       |

### ManiaScript

Class: `CMlEntry`

## Textedit

### Common attributes

- [Basic attributes](#basic-attributes)
- [Size & alignment attributes](#size-alignment-attributes)
- [Style & display attributes](#style-display-attributes)
- [Script attributes](#script-attributes)

### Textedit attributes

| Attribute         | Type    | Description                                                                                                                                                                                                                                                                                                   | Default |
|:------------------|:--------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------|
| `default`         | Text    | Default text (supports [text styling](/manialinks/text_styling.html))                                                                                                                                                                                                                                           | *none*  |
| `maxline`         | Number  | Maximum number of lines that can get entered (Automatic lines from `autonewline` don't count towards the limit)                                                                                                                                                                                               | *none*  |
| `autonewline`     | Boolean | Defines if the texts lines should automatically be displayed in multiple lines if they don't fit into the elements width. Otherwise, the game will visually cut them off and offer horizontal scrolling.                                                                                                      | 0       |
| `textformat`      | Text    | How the text gets displayed (One of `Basic`, `Password`, `Newpassword`, `Script`) (With `Password` and `Newpassword`, each characters is displayed as `*`) (With `Script`, the text will be syntax highlighted as ManiaScript)                                                                                | `Basic` |
| `showlinenumbers` | Boolean | Defines if line numbers should be displayed to the left of the input (with the current lines number being color highlighted)                                                                                                                                                                                  | 0       |
| `linespacing`     | Number  | Spacing between displayed lines, defined as the number of line heights that the y-axis progresses with each line (0 = all lines at the same height, 1 = lines directly below each other (without space between them), 2 = one empty line height between lines, 3 = two empty line height between lines, etc.) | 1       |
| `name`            | Text    | No functional effect, annotates the element to identify it via ManiaScript.<br/><br/>Note: In older games, using the `name` value as query parameter value in [links](#action-attributes) replaced it with the elements current text value (TODO: Check "POST request or dedicated server as xmlrpc array")   | *none*  |

### ManiaScript

Class: `CMlTextEdit`

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

![Gauge](/assets/images/slider.png)

### Common attributes

- [Basic attributes](#basic-attributes)
- [Size & alignment attributes](#size-alignment-attributes)
- [Script attributes](#script-attributes)

### Slider attributes

| Attribute     | Type    | Description                         | Default |
|:--------------|:--------|:------------------------------------|:--------|
| `range`       | Numbers | Minimum and maximum value           | 0 1     |

By default, sliders will have the minimum `range` as initial value. While it's not possible to specify a default value via XML, it's possible to set it via Maniascript (property `Value`).

### ManiaScript

Class: `CMlSlider`

## Gauge

![Gauge](/assets/images/gauge.png)

### Common attributes

- [Basic attributes](#basic-attributes)
- [Size & alignment attributes](#size-alignment-attributes)

### Gauge attributes

| Attribute     | Type     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Default |
|:--------------|:---------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------|
| `ratio`       | Number   | Progress value (between 0 and 1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | 0       |
| `style`       | Text     | Predefined [gauge style](#gauge-styles)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | *none*  |
| `color`       | Color    | Color for both the covered progress (brighter variant) and the non-covered progress (darker variant)                                                                                                                                                                                                                                                                                                                                                                                                                    | FFF     |
| `drawbg`      | Boolean  | Defines if the background (everything except the progress) is displayed                                                                                                                                                                                                                                                                                                                                                                                                                                                 | 1       |
| `drawblockbg` | Boolean  | Defines if the non-covered progress is displayed                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | 1       |
| `centered`    | Boolean  | Displays the covered progress in the center instead of starting from the left                                                                                                                                                                                                                                                                                                                                                                                                                                           | 0       |
| `grading`     | Number   | Splits the progress into multiple sections, by defining the section width (between 0 and 1). If `centered` is active, the resulting number of sections is applied to both halves, with the most center section of each half getting merged.<br/><br/>Example: A `grading` value of 0.25 will result in the progress being displayed in 4 sections (equally wide) if `centered` is inactive, or 7 sections (3 small ones on the left, 1 bigger one in the center and 3 small ones on the right) if `centered` is active. | 1       |
| `clan`        | Number   | TODO: Check what this does                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | TODO    |

### Gauge styles

TODO: Document available gauge styles.

### ManiaScript

Class: `CMlGauge`

## Video

### Common attributes

- [Basic attributes](#basic-attributes)
- [Size & alignment attributes](#size-alignment-attributes)
- [Media attributes](#media-attributes)

### ManiaScript

Class: `CMlMediaPlayer`

## Audio

### Common attributes

- [Basic attributes](#basic-attributes)
- [Size & alignment attributes](#size-alignment-attributes)
- [Media attributes](#media-attributes)

### ManiaScript

Class: `CMlMediaPlayer`

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

| Attribute | Type   | Description                                                                                                                                                                                                    | Default |
|:----------|:-------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------|
| `color`   | Color  | Line color                                                                                                                                                                                                     | FFF     |
| `width`   | Number | Line width (No matter how small this value is, the drawn line will always be at least 1 pixel wide)                                                                                                            | 0.5     |
| `style`   | Text   | Predefined curve style (One of `thin` (1 pixel width, independent of screen resolution), TODO: Document other curve styles) (Note: If both `width` and `style` are specified, the `style`s width will be used) | *none*  |

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

![Graph](/assets/images/graph.png)

### ManiaScript

Class: `CMlGraph` (+ `CMlGraphCurve`)

## Colorpicker

### Common attributes

- [Basic attributes](#basic-attributes)
- [Size & alignment attributes](#size-alignment-attributes)
- [Script attributes](#script-attributes)

### Colorpicker attributes

| Attribute      | Type  | Description   | Default |
|:---------------|:------|:--------------|:--------|
| `defaultcolor` | Color | Default color | 000     |

### ManiaScript

Class: `CMlColorPicker`

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

### ManiaScript

Class: `CMlTimeLine`

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

This includes adding the `z-index` of the frame to its children:

```xml
<frame z-index="3">
  <quad pos="-1 -1" z-index="-1" size="10 10" bgcolor="FFF"/>
</frame>
<quad pos="1 1" z-index="1" size="10 10" bgcolor="F00"/>
```

In this example, the white quad will be drawn in front of the red quad, because its resulting z-index will be 3 + (-1) = 2.

### ManiaScript

Class: `CMlFrame`

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
