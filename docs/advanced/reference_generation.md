# Reference generation
It is possible to generate a reference of ManiaScript via the `Trackmania.exe` file on your local system.

## Generate headers file
1. To setup a clean working environment, create a directory named `ManiaScriptDocumentation` with the following subdirectories:
    - `Working`
    - `Sources`
    - `Documentation`
2. Find your local `Trackmania.exe` file (e.g. `C:\Program Files (x86)\Ubisoft\Ubisoft Game Launcher\games\Trackmania\Trackmania.exe`)
3. Create a `generate.bat` file with the following content:

```
"C:\Path\To\Trackmania.exe" /generatescriptdoc=C:\Path\To\ManiaScriptDocumentation\Sources\doc.h
```

(Adapt the paths to `Trackmania.exe` and `ManiaScriptDocumentation` accordingly)

4. Run `generate.bat`
5. Verify that there is a `doc.h` file inside your `ManiaScriptDocumentation\Sources` subdirectory

## Convert to HTML
There are various tools available to convert the generated `doc.h` file into a visually pleasant reference. One of them is called Doxygen.
1. Download Doxygen on their official website: https://www.doxygen.nl
2. Install Doxygen, make sure to select the Doxywizard GUI component during the process
3. Start Doxywizard
4. At the top, set the working directory to your `Working` subdirectory
5. In the "Wizard" tab, make sure to have the following configuration:
     - Project
         - Source code directory: Your `Sources` subdirectory
         - Destination directory: Your `Documentation` subdirectory
     - Mode
         - Default settings
     - Output
         - HTML selected including "with navigation panel"
         - Other formats (LaTeX, Man pages, RTF, XML, Docbook) unchecked
     - Diagrams
         - "Use built-in class diagram generator" selected
6. Select the "Run" tab
7. Click on "Run doxygen", which will generate HTML files in your `Documentation` subdirectory
8. When finished, press the "Show HTML output" button to open the documentation in your browser
9. Before closing Doxywizard, it's useful to save your settings - To do so, select "File" -> "Save As"
10. To reuse your configuration the next time, either load it via "File" -> "Open" or select "Settings" -> "Use current settings at startup" to load it automatically each time you launch Doxywizard
