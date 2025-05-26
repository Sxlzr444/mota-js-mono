main.floors.Mono6=
{
    "floorId": "Mono6",
    "title": "莫塔 第6层",
    "name": "6",
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
        "6,8": [
            {
                "type": "if",
                "condition": "flag:zone1Sabised",
                "true": [
                    "\t[1区赠品领取处,trader]你已经领取过赠品了！",
                    {
                        "type": "exit"
                    }
                ],
                "false": [
                    {
                        "type": "openShop",
                        "id": "sabis1",
                        "open": true
                    }
                ]
            }
        ]
    },
    "changeFloor": {
        "6,11": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "1,11": {
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
    [  1, 30, 81,  0,  1, 21,  1, 31,  1,  0, 31, 27,  1],
    [  1,  0,  1,203,266, 21,  1, 31,  1,266,  0,  0,  1],
    [  1,  1,  1,  0,  1,  1,  1, 81,  1, 82,  1,  1,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,203,  0,  1, 22,  1],
    [  1,  0,  1,265,  1,  1,  1,  1,  1,  0,  1,  0,  1],
    [  1,216,  1,  0, 81,204, 31, 32, 82,  0, 81,266,  1],
    [  1,  0,  1, 22,  1,  1,  1,  1,  1,  0,  1,  1,  1],
    [  1,  0,  1, 29,  1,  7,122,  8,  1,201,  0, 31,  1],
    [  1,204,  1,  1,  1,  1,  0,  1,  1, 81,  1,  1,  1],
    [  1,  0,  0,  1,  1,  0,  0,  0,  1,  0,266, 28,  1],
    [  1, 87,  0, 82, 81,  0, 88,  0, 81,  0,  0,216,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

]
}