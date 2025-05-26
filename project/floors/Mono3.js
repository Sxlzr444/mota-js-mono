main.floors.Mono3=
{
    "floorId": "Mono3",
    "title": "莫塔 第3层",
    "name": "3",
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
        "1,6": [
            "\t[老人,man]铁剑可以提高你的攻击力，而紫色宝珠可以提高你的法术强度。",
            "\t[老人,man]在这个区域内，你应该只能获取其中之一。",
            "\t[老人,man]另外，我听说7楼还有一面铁盾。"
        ],
        "5,10": [
            {
                "type": "if",
                "condition": "flag:F3_stolen",
                "true": [
                    "\t[商人（已黑化）,recluse]我已黑化"
                ],
                "false": [
                    "\t[商人,trader]我藏有一颗名贵的\\i[yellowGem]黄宝石，它能提高你的法强，你出8金币就卖给你。",
                    {
                        "type": "choices",
                        "text": "\t[流浪者,trader]8金币购买1颗黄宝石",
                        "choices": [
                            {
                                "text": "我太需要了",
                                "icon": "yellowGem",
                                "action": [
                                    {
                                        "type": "if",
                                        "condition": "(status:money>=8)",
                                        "true": [
                                            {
                                                "type": "setValue",
                                                "name": "status:money",
                                                "operator": "-=",
                                                "value": "8"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:F3_bought",
                                                "value": "1"
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
                ]
            }
        ]
    },
    "changeFloor": {
        "11,1": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "9,11": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {
        "6,11": [
            {
                "type": "if",
                "condition": "(flag:F3_bought!==1)",
                "true": [
                    "\t[老人,recluse]你竟敢偷我的宝石？",
                    "\t[老人,recluse]我要黑化！",
                    {
                        "type": "setBlock",
                        "number": "recluse",
                        "loc": [
                            [
                                5,
                                10
                            ]
                        ],
                        "time": 500
                    },
                    {
                        "type": "setValue",
                        "name": "flag:F3_stolen",
                        "value": "1"
                    }
                ]
            }
        ]
    },
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  0,  0,  0,  1,  0,  0,  0,  1,  0,  0, 88,  1],
    [  1,  0, 35,  0,215,  0,339,  0,  1,  0,  0,  0,  1],
    [  1,  0,  0,  0,  1,  0,  0,  0,  1,  0,  1, 81,  1],
    [  1,  1, 83,  1,  1,  1, 83,  1,  1,  0,  1,202,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  1],
    [  1,121,  0,  1,  1,  1,  1,  1, 21,  1,  1, 32,  1],
    [  1,  1,  1,  1, 22,  0,  1,  0,  0,  0,  1, 81,  1],
    [  1, 73, 21,  1,  0,  0,201,  0,  0, 31,  1,203,  1],
    [  1,  0,216, 81,202,  1,  1,  1,  0,  1,  1,  0,  1],
    [  1,  0,  0,  1,  0,122,  0,  1,  0,  0,  1, 21,  1],
    [  1, 32, 31,  1, 27,  1, 30, 82,  0, 87,  1, 22,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

]
}