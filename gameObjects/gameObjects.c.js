// gameObjects.c.js

GameObjects.getWorld = function ()
{
    if (gameObjects.world)
    {
        return gameObjects.world;
    }  

    let rootObject = Utils.getRootObject();

    if (!rootObject)
    {
        return null;
    }  
    
    let subs = rootObject.store.subscribers.toArray();

    if (!subs)
    {
        return null;
    }

    let world = subs.find(element => element["tank"] != null && element["tank"].hasOwnProperty("world"));

    if (!world)
    {
        return null;
    }

    return gameObjects.world = world.tank.world;
}

GameObjects.getGameActions = function ()
{
    if (gameObjects.gameActions)
    {
        return gameObjects.gameActions;
    }

    let world = this.getWorld();

    if (!world)
    {
        return null;
    }

    return gameObjects.gameActions = Array.from(world.inputManager.input.gameActions_0.map);
}

GameObjects.getMines = function ()
{
    if (gameObjects.mines)
    {
        return gameObjects.mines;
    }

    let world = this.getWorld();

    if (!world)
    {
        return null;
    }    

    return gameObjects.mines = world.entities_0.array_hd7ov6$_0.at(0).components_0.array.at(15);
}

GameObjects.getLocalPlayer = function ()
{
    if (gameObjects.localPlayer)
    {
        return gameObjects.localPlayer;
    }

    let world = this.getWorld();

    if (!world)
    {
        return null;
    }

    let bodies = world.physicsScene_0.bodies_0.toArray();

    if (bodies.length == 0)
    {
        return null;
    }

    let localPlayer = bodies.find(element => element.data.isPossessed == true);

    if (!localPlayer)
    {
        return null;
    }
    
    return gameObjects.localPlayer = localPlayer.data.components_0.array;
}

GameObjects.getPhysicsComponent = function ()
{
    if (gameObjects.physicsComponent)
    {
        return gameObjects.physicsComponent;
    }

    let localPlayer = this.getLocalPlayer();

    if (!localPlayer)
    {
        return null;    
    }

    for (let i = 0; i < localPlayer.length; i++)
    {
        if (localPlayer.at(i).hasOwnProperty("tankPhysicsComponent_tczrao$_0"))
        {
            return gameObjects.physicsComponent = localPlayer.at(i).tankPhysicsComponent_tczrao$_0;
        }
    }

    return null;
}

// ПЕРЕДЕЛАТЬ
GameObjects.getHealthComponent = function ()
{
    if (gameObjects.healthComponent)
    {
        return gameObjects.healthComponent;
    }

    let localPlayer = this.getLocalPlayer();

    if (!localPlayer)
    {
        return null;    
    }

    return gameObjects.healthComponent = localPlayer.at(1);
}

GameObjects.getCamera = function ()
{
    if (gameObjects.camera)
    {
        return gameObjects.camera;
    }

    let localPlayer = this.getLocalPlayer();

    if (!localPlayer)
    {
        return null;    
    }

    for (let i = 0; i < localPlayer.length; i++)
    {
        if (localPlayer.at(i).hasOwnProperty("followCamera_w8ai3w$_0"))
        {
            return gameObjects.camera = localPlayer.at(i).followCamera_0.currState_0;
        }
    }

    return null; 
}

GameObjects.getStrikerComponent = function ()
{
    if (gameObjects.strikerComponent)
    {
        return gameObjects.strikerComponent;
    }

    let localPlayer = this.getLocalPlayer();

    if (!localPlayer)
    {
        return null;    
    }

    for (let i = 0; i < localPlayer.length; i++)
    {
        if (localPlayer.at(i).hasOwnProperty("strikerWeapon_jjsiik$_0"))
        {
            return gameObjects.strikerComponent = localPlayer.at(i).strikerWeapon_jjsiik$_0;
        }
    }

    return null;
}