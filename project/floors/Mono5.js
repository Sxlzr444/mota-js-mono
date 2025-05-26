main.floors.Mono5=
{
    "floorId": "Mono5",
    "title": "莫塔 第5层",
    "name": "5",
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
        "1,3": [
            "\t[商人,trader]好心人，可以给我10金币路费让我回家吗？",
            {
                "type": "choices",
                "text": "\t[商人,trader]送他10金币",
                "choices": [
                    {
                        "text": "我给你路费",
                        "icon": "coin",
                        "action": [
                            {
                                "type": "if",
                                "condition": "(status:money>=10)",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "status:money",
                                        "operator": "-=",
                                        "value": "10"
                                    },
                                    {
                                        "type": "hide",
                                        "remove": true,
                                        "time": 500
                                    },
                                    {
                                        "type": "exit"
                                    }
                                ],
                                "false": [
                                    "\t[商人,trader]你的金币不够！",
                                    {
                                        "type": "exit"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "再见！",
                        "action": [
                            {
                                "type": "exit"
                            }
                        ]
                    }
                ]
            }
        ],
        "2,1": [
            {
                "type": "if",
                "condition": "(flag:kaimonoLevel<1)",
                "true": [
                    {
                        "type": "setValue",
                        "name": "flag:kaimonoLevel",
                        "value": "1"
                    }
                ]
            },
            {
                "type": "setValue",
                "name": "flag:kaimono1Met",
                "value": "1"
            },
            {
                "type": "insert",
                "name": "加点花费计算"
            },
            {
                "type": "openShop",
                "id": "shop1",
                "open": true
            }
        ]
    },
    "changeFloor": {
        "1,5": {
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
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  7,131,  8,  1,  0,  0,  0,203,  1,  0, 21,  1],
    [  1,  0,  0,  0, 81,203,  0,  1,  0,  1,204,  1,  1],
    [  1,122,  1,  1,  1,  0,202,  1, 21,  1,  0, 27,  1],
    [  1,  0,  0,  0,  1,  1,  0,  1,  1,  1,204,  1,  1],
    [  1, 88,  0,  0,201,  0,  0,  0,  0, 81,  0, 31,  1],
    [  1,  1,  1,  1,  1,  0,  1,  0,  1,  1,  1,  1,  1],
    [  1, 22,  0,202, 81,  0,  1,  0,  0,  0,  0,  0,  1],
    [  1,  0,  0,  0,  1,  0,  1,216,  1,202,  1,266,  1],
    [  1,  1, 81,  1,  1, 82,  1, 81,  1,  0,  1,  0,  1],
    [  1,  0,216,  0,  1,  0,  0,  0,  1,  0,  1, 21,  1],
    [  1, 31, 28, 31,  1,  0, 87,  0, 81,  0,  1, 30,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

]
}