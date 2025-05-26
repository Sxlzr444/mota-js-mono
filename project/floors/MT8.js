main.floors.MT8=
{
    "floorId": "MT8",
    "title": "主塔 8 层",
    "name": "8",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": true,
    "images": [],
    "ratio": 1,
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
        "1,1": {
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
    [  1, 88,  0, 81, 81,  0, 87,  0,  1, 21,  0, 21,  1],
    [  1,  0,  0,  1,  1,  0,  0,201,  1,  0, 23,  0,  1],
    [  1, 81,  1,  1,  1,  1, 81,  1,  1, 32,  0, 31,  1],
    [  1,  0,  1, 21, 21, 21,  0,  0,  1,  1, 85,  1,  1],
    [  1, 31,  1,  1,  1,  1,  1,217,  1,221,  0,221,  1],
    [  1,  0,202,201,202,  0,  1,  0,  1,  0,  0,  0,  1],
    [  1,  1,  1,  1,  1, 81,  1,205,  1,  1, 81,  1,  1],
    [  1,  0,  0,  0,205,  0,209,  0,217,  0,  0,  0,  1],
    [  1, 81,  1,  1,  1,  1,  1,  1,  1,  1,  1, 81,  1],
    [  1,201,  0,  1, 27, 21,  1, 22, 31,  1,  0,209,  1],
    [  1,  0,205, 82, 21, 28,  1, 21,  0, 81,210,  0,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

],
    "cannotMoveDirectly": true
}