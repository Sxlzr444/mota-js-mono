main.floors.MT17=
{
    "floorId": "MT17",
    "title": "主塔 17 层",
    "name": "17",
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
        "6,11": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "6,1": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "2,4": {
            "0": {
                "condition": "(!core.enemyExists(1, 5)) &&(!core.enemyExists(3, 5))",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor"
                    }
                ]
            },
            "1": null
        },
        "2,7": {
            "0": {
                "condition": "(!core.enemyExists(1, 8)) &&(!core.enemyExists(3, 8))",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor"
                    }
                ]
            },
            "1": null
        },
        "10,7": {
            "0": {
                "condition": "(!core.enemyExists(9, 8)) &&(!core.enemyExists(11, 8))",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor"
                    }
                ]
            },
            "1": null
        },
        "10,4": {
            "0": {
                "condition": "(!core.enemyExists(9, 5)) &&(!core.enemyExists(11, 5))",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor"
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
    [  1,  0,  0,  0,  1,  0, 87,  0,  1, 27,  0, 28,  1],
    [  1,  0, 37,  0,  1,  0,  0,  0,  1,  0, 32,  0,  1],
    [  1,  0,  0,  0,  1,214,  1,206,  1, 21,  0, 21,  1],
    [  1,  1, 85,  1,  1,  0,  1,  0,  1,  1, 85,  1,  1],
    [  1,221,  0,221,  1, 81,  1, 82,  1,214,  0,214,  1],
    [  1,  0,  0,  0,  1,  0,  1,  0,  1,  0,  0,  0,  1],
    [  1,  1, 85,  1,  1,213,  1,203,  1,  1, 85,  1,  1],
    [  1,221,  0,221,  1,  0,  0,  0,  1,213,  0,213,  1],
    [  1,  0,  0,  0,  1,  1,218,  1,  1,  0,  0,  0,  1],
    [  1,  1, 81,  1,  1,  0,  0,  0,  1,  1, 81,  1,  1],
    [  1, 31,  0,  0,206,  0, 88,  0,206,  0,  0, 31,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

],
    "cannotMoveDirectly": true
}