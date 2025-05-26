main.floors.Mono8=
{
    "floorId": "Mono8",
    "title": "莫塔 第7层",
    "name": "7",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": true,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "1,5": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "11,5": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "7,5": [
            {
                "type": "win",
                "reason": "测试结束，感谢测试！"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  0,265,  0, 21,  1, 32, 32, 31, 31,  0, 22,  1],
    [  1, 21, 28,  1,  0,  1,  1,  1,  1,  1, 85,  1,  1],
    [  1,  1,  1,  1, 82,  1,  0,  0,  0,  1,  0,  0,  1],
    [  1,  0,  0,  0,  0,  1,  0,  0,  0,  1,  0,  0,  1],
    [  1, 88,  0,  0,  0, 83,  0,241,  0, 85,  0, 87,  1],
    [  1,  0,  0,  0,  0,  1,  0,  0,  0,  1,  0,  0,  1],
    [  1,  1,  1,  1,  1,  1,  0,  0,  0,  1,  0,  0,  1],
    [  1, 16, 16, 16, 16,  1,  0,  1,  1,  1, 85,  1,  1],
    [  1, 16, 16, 16, 16,  1,  0,  1, 21, 28,  0,  0,  1],
    [  1, 16, 16, 16, 16, 86,345,  1, 21, 28, 29, 27,  1],
    [  1, 16, 16, 16, 16,  1,345,  1, 21, 28, 30, 27,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

]
}