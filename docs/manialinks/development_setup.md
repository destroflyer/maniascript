# Development setup
Manialink files are XML files with a `.xml` extension. Therefore, they can be edited with any text editor.

While Trackmania offers an ingame editor with a lot of features that external application can't compete with, you can still use an external editor if it fits your usecase better.

## Ingame
The easiest way to edit and preview Manialinks is to use the ingame editor, which is called the "Interface designer".

This editor is not exposed to players and has to be made accessible via [Openplanet](https://openplanet.dev). To access it, you need to:
1. Install Openplanet
2. Press `F3` to open the Openplanet menu (if it's not visible already)
3. Go to `Plugin manager` → `Search`, search for "Classic menu" and install it (if it's not installed already)
4. Go to `Plugins` → `Classic menu` → `Editors` → `Title tools` → `Interface designer`

The editor should be self-explanatory: You can edit the Manialinks XML either manually or via graphical elements, while having an interactive live preview which allows moving, rotating and resizing.

It's recommended to save your files often, as the editor is able to crash the game.

### Known limitations
- [Text styling](/manialinks/text_styling.html) links are neither underlined nor clickable

## External
If you use an external editor, you will most likely be able to configure autocompletion and validation of Manialink XML in it. This is done by referencing a Manialink XML specification in the document. This can be done in one of the following ways - Which one works for you, might depend on your editor.

Adding `xml-model` without namespaces:

```xml
<?xml-model href="https://raw.githubusercontent.com/reaby/manialink-xsd/main/manialink_v3.xsd" ?>
```

Adding `xml-model` with namespaces:

```xml
<?xml-model href="https://raw.githubusercontent.com/reaby/manialink-xsd/main/manialink_v3_ns.xsd" ?>
```

Directly on the `manialink` element:

```xml
<manialink version="3" xmlns="manialink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="manialink https://raw.githubusercontent.com/reaby/manialink-xsd/main/manialink_v3_ns.xsd">
    <!-- Your content -->
</manialink>
```
