# Network
When developing a custom game mode that displays something to the player, you have to keep in mind that different parts of your script will run on different machines: The actual game mode will be running on the server, while the script displaying the information will run on each players' computer. These parts of the code need to communicate with each other over the network.

## Synchronizing variables
ManiaScript handles networking by synchronizing variables. Adding the keyword `netwrite` to an [extension property](/advanced/extension_properties.html) of an object on the server will enable it to be sent and read to/by the clients.

To which player/s the variable gets sent to, depends on the object that the property was added to. It's possible to either send a variable value to all players or only to one specific player.

To send a variable to all players, add the property to `This`, `Teams[0]` or `Teams[1]`:

```ManiaScript
declare netwrite Integer MyVariableForAll for This;
```

To send a variable to only one player, add the property to this players `UI`:

```ManiaScript
declare UI <=> UIManager.GetUI(Player);
declare netwrite Integer MyVariableForOne for UI;
```

Reading a network variable on the client side works similar - You declare a variable with the same name as property for the same object, and add the `netread` keyword. Then, the game will automatically keep the value in sync for you.

```ManiaScript
declare netwrite Integer MyVariableForAll for This;
```

```ManiaScript
declare netwrite Integer MyVariableForOne for UI;
```

It's not possible to manually assign a new value to a `netread` variable.

## Analysis
Note that more data being sent to clients through the network means more bandwidth being used, which can cause lag on both client and server side. To analyze how much data you are sending, you can use a function called `Dbg_DumpDeclareForVariables`. It returns a `Text` including every network property for a given object and the according total amount of data in bytes.

```ManiaScript
log(Dbg_DumpDeclareForVariables(This, False));
```

Example excerpt (not the full output):

```
netwrite: 78 values (9494 bytes)
   86: Text[]  Net_LibUI3_Modules = [???]
   32: Integer Net_LibUI3_ModulesUpdate = 189
   40: Integer Net_LibRaceWarmUp_WarmUpPlayedNb = 1
   40: Integer Net_LibRaceWarmUp_WarmUpDuration = 1
   45: Boolean Net_Race_WarmupHelpers_IsWarmupActive = False
   41: Boolean Net_LibRaceWarmUp_LayerVisibility = True
   45: Integer Net_LibRaceWarmUp_LayerPositionUpdate = 189
   47: Vec3    Net_LibRaceWarmUp_LayerPosition = <153., 0., 0.>
   43: Boolean Net_SplitScreen_PauseMenu_IsVisible = True
   44: Boolean Net_Race_PauseMenuOnline_IsLocalMode = False
   56: Boolean Net_Race_PauseMenuOnline_IsPreviousReplayAllowed = False
   35: Integer Net_Race_Record_SetupUpdate = 17
   38: Boolean Net_Race_Record_PBGhostEnabled = False
   35: Boolean Net_Race_Record_CelebratePB = False
   36: Boolean Net_Race_Record_MedalEnabled = False
   38: Boolean Net_Race_Record_CelebrateMedal = False
   35: Text    Net_Race_Record_ScopeSeason = ""
   38: Text    Net_Race_Record_ScopeNotSeason = ""
   32: Text    Net_Race_Record_ModeName = ""
   34: Text    Net_Race_Record_CustomData = ""
   38: Boolean Net_Race_Record_DisplayRecords = False
   41: Boolean Net_Race_Record_NewRecordsEnabled = False
   ...
```
