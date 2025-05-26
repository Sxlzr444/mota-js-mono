main.floors.MT14=
{
    "floorId": "MT14",
    "title": "主塔 14 层",
    "name": "14",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": true,
    "images": [],
    "ratio": 2,
    "defaultGround": "ground",
    "firstArrive": [],
    "eachArrive": [
        {
            "type": "function",
            "function": "function(){\nif (core.getFlag('skill', 0) == 1001) {  \t\tcore.setFlag('skill', 0);  \t\tcore.setFlag('skillName', '无');\t\tcore.playSound('取消');\t\tcore.drawTip('本次芧Τ堵痌彻使用机会已失效!'); }\n}"
        }
    ],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "11,11": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "6,11": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "1,3": {
            "0": {
                "condition": "(!core.enemyExists(1, 1)) &&(!core.enemyExists(3, 1))&&(!core.enemyExists(2, 2))",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor"
                    },
                    {
                        "type": "setBlock",
                        "number": "redKey"
                    }
                ]
            },
            "1": null
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,214,  0,214,  1, 28, 21, 31,  1, 21, 21, 21,  1],
    [  1,  0,214,  0,  1,203,  1,214,  1,  0,  0, 21,  1],
    [  1, 85,  0,  0,  1,  0,  1,  0,  1,  1, 81,  1,  1],
    [  1,  1, 82,  1,  1, 82,  1, 81,  1,  0,214,  0,  1],
    [  1, 31,  0,  0,206,  0,215,  0,206,  0,  0,  0,  1],
    [  1,  0,203,  0,  1,  1, 81,  1,  1, 31,  0,213,  1],
    [  1, 81,  1, 81,  1,  0,  0,  0,  1,  1,  1, 81,  1],
    [  1,  0,  1,  0,213,  0, 81,  0,203,  0,203,  0,  1],
    [  1,218,  1,218,  1,  1,343,  1,  1, 81,  1,  1,  1],
    [  1,  0,  1,  0,  1, 31,  0,  0,  1,  0,  0,  0,  1],
    [  1, 22,  1,  0, 81,  0, 87,  0,  1,  0,  0, 88,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

],
    "cannotMoveDirectly": true
}