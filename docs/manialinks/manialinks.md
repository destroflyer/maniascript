# Manialinks

Manialinks are XML documents that display elements on the players screen. If you don't know about the XML format, please refer to W3Schools [XML tutorial](https://www.w3schools.com/xml/xml_whatis.asp).

```xml
<?xml version="1.0" encoding="utf-8" standalone="yes" ?>
<manialink version="3">
    <!-- Your content -->
</manialink>
```

The default XML header is technically not required, but recommended.

The Manialink specification went through multiple iterations over the course of Nadeos games. The latest one is version 3, which is specified via the `version` attribute on the `manialink` element.
