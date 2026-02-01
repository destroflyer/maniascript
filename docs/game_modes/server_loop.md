# Server loop
The server loop is the overarching loop that Nadeos base game mode scripts execute.

It consists out of multiple nested loops that span the entire servers lifecycle - From starting the server, through playing multiple rounds on multiple maps to finally ending the server:
- InitServer
- StartServer
    - InitMatch
    - StartMatch
        - InitMap
        - StartMap
            - InitRound
            - StartRound
                - InitTurn
                - StartTurn
                    - PlayLoop
                - EndTurn
            - EndRound
        - EndMap
    - EndMatch
- EndServer

Each of these steps offers a [label](/advanced/labels.html) that your script can hook into to execute code, such as [displaying](/game_modes/layers.html) something or reacting to certain [events](/game_modes/events.html). This is the main way to build a custom game mode.

## Stop
For each level of the game loop, there is a function to stop it:
- `MB_StopServer()`
- `MB_StopMatch()`
- `MB_StopMap()`
- `MB_StopRound()`
- `MB_StopTurn()`
