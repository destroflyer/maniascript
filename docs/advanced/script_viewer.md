# Script viewer
The script viewer is part of the [output window](/introduction/development_setup.html#output-window) and offers tools to analyze scripts. It shows the log and a list of all loaded scripts, with the possibility to select one to view its code and retrieve additional information about it.

## Instances
The "Instances" panel on the right shows all loaded scripts.

![Reference Graph](/images/script_instances.png)

The script names are color coded:
- Grey scripts are currently not executed
- Green scripts are currently executed
- Cyan scripts are currently executed and consume a lot of memory
- Red scripts threw an error

You can select a script by clicking on it, which will display details about it below the list (and also open its code in the "Script viewer" panel):
- The `Insns` value is the number of instructions executed by the script
- The `Pool mem` value is the total size of all variables stored inside the script
- If existing, you can also see the number of layers and audio sources created by the script

To identify scripts easier, it's possible to assign a name to them that will be displayed in this list. For scripts in ManiaLinks, this can be done via the attribute `name` on the `manialink` tag:

```xml
<manialink name="TMFL/UI_MapInfos3D" version="3">
  ...
</manialink>
```

Below the list of scripts, you can also see a list of the past compilation errors. Again, clicking on one of them will display detailed information.

## Tuning
ManiaScripts offers a tuning tool to check what parts slow down your script the most (works in both server and client scripts).

Note for plugin developers: This will not work for ManiaLinks injected directly to a `CGameUILayer`. It will only work if you can read the contents of the script in the script viewer.

How to do it:

1. Add `tuningstart();` and `tuningend();` to your code
2. Start your script
3. Let the script run for some time (at least 15s) to gather a fair amount of data. If your tuning only occur on some event, or once in a while, be sure to meet the conditions multiple times (the more the better)
4. Open the "Script Debugger" (with `Ctrl` + `G` twice)
5. Select the script you are tuning in the "Instances" list
6. The full tuning log has the been copied to your clipboard!
7. You can then paste it in your preferred text editor to see the results.

Troubleshooting
- Is the script content viewable in the script viewer? (Required)
- Are `tuningstart();` and `tuningend();` in the main function? (This might be required) (TODO: Check)

Example result:

```
>>>>>>>>>>>>>>>>>>>>>>>>>
Ml:TMFL/UI_ScoreTable ()
>>>>>>>>>>>>>>>>>>>>>>>>>
Average time spent per frame in units of 10ns
[ Line]      line  function       %age
[00019]      0.00      0.00      0.00%            Text LeftPad(Integer number, Integer pad) {
[00020]      0.00      0.00      6.10%                declare Text out = "";
[00021]      0.00      0.00     31.86%                out = "" ^ number;
[00022]      0.00      0.00      0.00%                if (number < 100 && pad == 3) {
[00023]      0.00      0.00      0.00%                    out = "0" ^ number;
[00024]      0.00      0.00     18.31%                }
[00025]      0.00      0.00      0.00%                if (number < 10 && pad == 3) {
[00026]      0.00      0.00      0.00%                    out = "00" ^ number;
[00027]      0.00      0.00      7.80%                }
[00028]      0.00      0.00      0.00%                if (number < 10 && pad == 2) {
[00029]      0.00      0.00     23.39%                    out = "0" ^ number;
[00030]      0.00      0.00     12.54%                }
[00031]      0.00      0.00      0.00%                return out;
[00032]      0.00      0.00      0.00%            }
```

To check the most expensive part of your script, find the highest number in the columns `%age` and `line`/`function`:

- `%age` is the percentage of load of the line or function, depending if you are inside the main function or another function (TODO: Check how this interacts). In the example above, it's line 21 which is consuming the most resources.
- `line`/`function` is the time spent in the respective line or function (TODO: Unit?). The `line` column should usually not have values > 0.25 (with writing network variables being an exception). High values here can create lags.

### tuningmark

You can use the `tuningmark()` function to add blocks to the tuning graph. Each call to `tuningmark()` creates a new block measuring the time spent until the next `tuningmark()`, `yield` or context.

```ManiaScript
Void SomeFunction() {
  tuningmark("SomeFunction_Start");
  // ... do things
  tuningmark("SomeFunction_End");
}
```

This will add a block named SomeFunction measuring the time spent between `tuningmark("SomeFunction_Start");` and `tuningmark("SomeFunction_End");`.

### TODO: Extend documentation by checking:
- Openplanet discord messages from Eole, referring to the Ctrl+F7 profiler
- Openplanet discord messages from Beu, regarding profiling/performance tips