main.floors.Mono2=
{
    "floorId": "Mono2",
    "title": "莫塔 第2层",
    "name": "2",
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
    "events": {
        "7,11": [
            "\t[老登,recluse]绿宝石可以提高你的魔抗，减少怪物技能的效果。",
            "\t[老登,recluse]当然，我不会让你过去拿的。"
        ]
    },
    "changeFloor": {
        "1,1": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "11,1": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 88,  0,  0,  0,  0,  0,201, 21,  1,  0, 87,  1],
    [  1,  0,  0,  1,201,  1,  1,  1,  1,  1,  0,  0,  1],
    [  1,  1,  1,  1,  0,  0,  1, 31,  0, 81,  0,  0,  1],
    [  1, 27, 21,  1,  0,  0,  1,  0, 31,  1,  1,201,  1],
    [  1,  0,  0,  1,  0,  1,  1, 81,  1,  1,  0,  0,  1],
    [  1, 31,203, 81,  0,  0,  1,  0,  0,  0,  0,  1,  1],
    [  1,  1,  0,  1,  0,  0,  1,  1, 82,  1,202,  0,  1],
    [  1,  0,202, 81,  0, 31,  0,  0,  0,  1,  0,  0,  1],
    [  1,  0,  1,  1,  1,  1,204,  1,  0,  0,203,  1,  1],
    [  1, 32,  0,  1, 28,  0,  0,  1,  0,  1,  0,  0,  1],
    [  1,  0, 21,  1,  0, 29,  0,126,  0,  1, 32, 22,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

]
}