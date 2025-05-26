main.floors.MT12=
{
    "floorId": "MT12",
    "title": "主塔 12 层",
    "name": "12",
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
    "events": {
        "6,9": [
            {
                "type": "if",
                "condition": "(flag:KaimonoLevel<2)",
                "true": [
                    {
                        "type": "setValue",
                        "name": "flag:KaimonoLevel",
                        "value": "2"
                    }
                ]
            },
            {
                "type": "insert",
                "name": "商店事件"
            }
        ],
        "11,1": {
            "trigger": "action",
            "enable": true,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": [
                {
                    "type": "if",
                    "condition": "flag:jianshangFound",
                    "true": [
                        {
                            "type": "choices",
                            "text": "\t[商人,trader]本店有很多黄钥匙，1000金币1把要吗？",
                            "choices": [
                                {
                                    "text": "我太需要了",
                                    "action": [
                                        {
                                            "type": "if",
                                            "condition": "(status:money>=1000)",
                                            "true": [
                                                {
                                                    "type": "setValue",
                                                    "name": "status:money",
                                                    "operator": "-=",
                                                    "value": "1000"
                                                },
                                                {
                                                    "type": "setValue",
                                                    "name": "item:yellowKey",
                                                    "operator": "+=",
                                                    "value": "1"
                                                },
                                                {
                                                    "type": "insert",
                                                    "loc": [
                                                        11,
                                                        1
                                                    ]
                                                }
                                            ],
                                            "false": [
                                                "\t[商人,trader]你的金币不够1000枚，无法交易！",
                                                {
                                                    "type": "insert",
                                                    "loc": [
                                                        11,
                                                        1
                                                    ]
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
                    "false": [
                        {
                            "type": "playSound",
                            "name": "door.mp3"
                        },
                        {
                            "type": "openDoor"
                        },
                        {
                            "type": "setBlock",
                            "number": "trader"
                        },
                        {
                            "type": "setValue",
                            "name": "flag:jianshangFound",
                            "value": "1"
                        }
                    ]
                }
            ]
        },
        "1,1": [
            {
                "type": "choices",
                "text": "\t[商人,trader]我有一把红钥匙，你出800金币就卖给你",
                "choices": [
                    {
                        "text": "我太需要了",
                        "action": [
                            {
                                "type": "if",
                                "condition": "(status:money<800)",
                                "true": [
                                    "\t[商人,trader]你的金币不够800枚，无法交易！",
                                    {
                                        "type": "exit"
                                    }
                                ],
                                "false": [
                                    {
                                        "type": "setValue",
                                        "name": "status:money",
                                        "operator": "-=",
                                        "value": "800"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "item:redKey",
                                        "operator": "+=",
                                        "value": "1"
                                    },
                                    "\t[商人,trader]本塔有很多暗墙 比如5 9 12 14 16 18层 你都找到了吗？\n什么，你找不到？你不是有み描吗？",
                                    {
                                        "type": "hide",
                                        "remove": true,
                                        "time": 500
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
    },
    "changeFloor": {
        "11,11": {
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
    [  1,122,343,  0,  1, 21, 27, 21,  1,  0,343,343,  1],
    [  1,  1,  1,206,  1,  0,  1,  0,  1,  0,  1,  1,  1],
    [  1,  0,  0,  0,  1,218,  0,218,  1,  0,213,  0,  1],
    [  1, 81,  1,  1,  1,  1, 81,  1,  1,  1,  1,  0,  1],
    [  1,  0,218,  0, 81,  0,213,  0,  1, 31,  0,206,  1],
    [  1,  1,  1,  1,  1,  0,  0,218, 81,  0, 28,  0,  1],
    [  1, 21, 21,  0,  1,  0, 32,  0,  1, 21,  0,203,  1],
    [  1, 21, 22,  0,  1,  1,  1,  1,  1, 82,  1, 81,  1],
    [  1,  0,  0,213,  1,  7,131,  8,  1,203,  0,213,  1],
    [  1,  1,  1, 81,  1, 31,  0, 31,  1,  1,  0,  1,  1],
    [  1, 87,  0,  0,205,  0,  0,  0,205,  0,  0, 88,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

],
    "cannotMoveDirectly": true
}