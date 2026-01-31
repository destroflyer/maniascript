# Layers
Layers are [Manialinks](/manialinks/manialinks.html) that can be shown on the players screen.

## Create
When creating a layer, you need to give it a name and the Manialink text.

```maniascript
Layers::Create("MyLayerName", """
  <manialink version="3">
    <label text="Hello World"/>
  </manialink>
""");
````

The Manialink can [contain ManiaScript](/manialinks/maniascript_in_manialinks.html) for dynamic behaviour.

## Attach

```maniascript
// Show this layer to all players
Layers::Attach("MyLayerName");

// Show this layer to a specific players
Layers::Attach("MyLayerName", Players[0]);
````

## Detach

```maniascript
// Hide this layer from all players
Layers::Attach("MyLayerName");

// Hide this layer from a specific players
Layers::Detach("MyLayerName", Players[0]);

// Hide all layer from all players
Layers::DetachAll();
````

### Visibility
Besides being attached or not, layers can define if they should indeed be visible when attached (by default yes). In other words, a layer is only shown to a player if it is both attached to that player as well as set to visible.

This can only be set "globally" for each layer, meaning the setting affects all players.

```maniascript
Layers::SetVisibility("MyLayerName", MyBooleanVariable);

Layers::Show("MyLayerName");

Layers::Hide("MyLayerName");

log(Layers::IsVisible("MyLayerName"));
````

## Destroy
Destroying a layer completely removes it from the script. You can no longer attach a destroyed layer. However you can always create a new layer with the same name.

```maniascript
// Destroy this layer
Layers::Destroy("MyLayerName");

// Destroy all layers
Layers::DestroyAll();
````

## Behaviour
- When creating a layer name that already exists, the old layer is detached and destroyed (If the old layer was attached, the new layer is not automatically attached)
- When attaching/detaching/destroying a layer name that doesn't exist, nothing happens (No error is thrown)
- When exiting a game mode, all layers are automatically removed from the players screen (TODO: Check how it behaved in older games as there is evidence that this was not the case in ManiaPlanet (and even guidance to do it manually))
