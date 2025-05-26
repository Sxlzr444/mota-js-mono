main.floors.MT11=
{
    "floorId": "MT11",
    "title": "主塔 11 层",
    "name": "11",
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
        "11,11": {
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
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  0,  0,  0,  1, 27,  0, 81,  0,  1, 31, 21,  1],
    [  1,  0, 38,  0,  1,  0,205,  1,213,  1,  0,  0,  1],
    [  1,  0,  0,  0,  1, 81,  1,  1,  0, 81,  0,  0,  1],
    [  1,  1, 85,  1,  1,  0,206,  1,  1,  1,  1,203,  1],
    [  1,218,  0,218,  1,213,  0, 81,218,  0,  1,  0,  1],
    [  1,  0,  0,  0,  1,  1,  1,  1,  0, 31,  1,  0,  1],
    [  1, 32,  0,  0,206,  0,  0, 81,203,  0,  1,  0,  1],
    [  1,  1, 82,  1,  1,  1,  1,  1,  1,  1,  1,206,  1],
    [  1,  0,206,  0,203, 81,  0,  0,  0,  0,205,  0,  1],
    [  1, 21,  0,  0,  0,  1,  0,  1,  1, 81,  1,  0,  1],
    [  1, 21, 21, 21, 21,  1, 88,  1, 32,206,  1, 87,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

],
    "cannotMoveDirectly": true
}