main.floors.MT15=
{
    "floorId": "MT15",
    "title": "主塔 15 层",
    "name": "15",
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
        "9,1": [
            "\t[小偷,thief]阿哈 你还好吗 这エ辰挡住了我前进的道路 现在暗道终于完工了 你现在最好也躲开它 我要走了 再见",
            {
                "type": "openDoor",
                "loc": [
                    8,
                    1
                ]
            },
            {
                "type": "move",
                "loc": [
                    9,
                    1
                ],
                "time": 200,
                "steps": [
                    "left:3"
                ]
            }
        ],
        "11,11": [
            {
                "type": "choices",
                "text": "\t[商人,trader]我有一把蓝钥匙，你出200金币就卖给你",
                "choices": [
                    {
                        "text": "我太需要了",
                        "action": [
                            {
                                "type": "if",
                                "condition": "(status:money<200)",
                                "true": [
                                    "\t[商人,trader]你的金币不够200枚，无法交易！",
                                    {
                                        "type": "exit"
                                    }
                                ],
                                "false": [
                                    {
                                        "type": "setValue",
                                        "name": "status:money",
                                        "operator": "-=",
                                        "value": "200"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "item:blueKey",
                                        "operator": "+=",
                                        "value": "1"
                                    },
                                    "\t[商人,trader]十字架对兽人和吸血鬼是神器 它所在的位置会被み描标出 因为怕卡关所以作者没改",
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
    "afterBattle": {
        "6,7": [
            {
                "type": "hide",
                "loc": [
                    [
                        5,
                        7
                    ],
                    [
                        7,
                        7
                    ],
                    [
                        5,
                        6
                    ],
                    [
                        6,
                        6
                    ],
                    [
                        7,
                        6
                    ],
                    [
                        5,
                        5
                    ],
                    [
                        6,
                        5
                    ],
                    [
                        7,
                        5
                    ]
                ],
                "remove": true
            },
            {
                "type": "openDoor",
                "loc": [
                    6,
                    3
                ]
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
    [  1, 28,214,  0, 81,  0, 87,  0,  1,123,  0,  0,  1],
    [  1,213,  0,  0,  1,  0,  0,  0,  1,  0,  0,203,  1],
    [  1,  0,  0,203,  1,  1, 85,  1,  1,  1,  1, 81,  1],
    [  1, 81,  1,  1,  1,  0, 47,  0,  1,206,  0,  0,  1],
    [  1,  0,  1, 21,  1, 17, 17, 17,  1,  0,206,  0,  1],
    [  1,  0,  1, 22,  1, 17, 17, 17,  1, 81,  1,218,  1],
    [  1,203,  1, 21,  1, 17,258, 17,  1,  0,  1,  0,  1],
    [  1,  0,  1,  0,  1,  0,  0,  0,  1,  0,  1, 32,  1],
    [  1,  0, 81,  0,  1,  1,  0,  1,  1, 81,  1,  1,  1],
    [  1,206,  1,206,  1,  0,  0,  0,  1,  0,205,  0,  1],
    [  1,  0,218,  0,  1,  0, 88,  0, 81,205,  0,122,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

],
    "cannotMoveDirectly": true
}