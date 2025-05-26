main.floors.MT2=
{
    "floorId": "MT2",
    "title": "主塔 2 层",
    "name": "2",
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
    "events": {
        "3,7": [
            "\t[小偷,thief]你清醒了吗 你到监狱时还处在昏迷中 魔法警卫把你扔到我这个房间 但你很幸运 我刚完成逃跑的暗道你就醒了 我们一起越狱吧",
            {
                "type": "openDoor",
                "loc": [
                    2,
                    7
                ]
            },
            {
                "type": "show",
                "loc": [
                    [
                        1,
                        9
                    ]
                ],
                "time": 0
            },
            {
                "type": "move",
                "time": 200,
                "keep": true,
                "steps": [
                    "left:2",
                    "down:2"
                ]
            },
            {
                "type": "hide",
                "remove": true,
                "time": 0
            }
        ],
        "11,4": [
            "\t[商人,trader]谢谢你救了我，为了感谢你的帮助请收下这些礼物。",
            {
                "type": "hide",
                "remove": true,
                "time": 500
            }
        ],
        "11,7": [
            {
                "type": "choices",
                "text": "\t[商人,man]谢谢你救了我 我可以帮你提升3%的攻击和防御",
                "choices": [
                    {
                        "text": "现在提升",
                        "action": [
                            {
                                "type": "playSound",
                                "name": "item.mp3"
                            }
                        ]
                    },
                    {
                        "text": "等会再说",
                        "action": [
                            {
                                "type": "setValue",
                                "name": "status:atk",
                                "operator": "*=",
                                "value": "1.03"
                            },
                            {
                                "type": "setValue",
                                "name": "status:def",
                                "operator": "*=",
                                "value": "1.03"
                            },
                            {
                                "type": "hide",
                                "remove": true,
                                "time": 500
                            }
                        ]
                    }
                ]
            }
        ],
        "11,11": {
            "trigger": null,
            "enable": false,
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
                "\t[小偷,thief]你终于来了 我以为再也出不去了呢 35层有个魔龙挡路 我帮你挖一条暗道吧",
                {
                    "type": "show",
                    "loc": [
                        [
                            5,
                            10
                        ]
                    ],
                    "floorId": "MT35",
                    "time": 0
                },
                {
                    "type": "hide",
                    "remove": true,
                    "time": 500
                }
            ]
        },
        "1,9": {
            "trigger": null,
            "enable": false,
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
                "\t[小偷,thief]我们终于逃出来了 你的剑盾被警卫拿走了 你必须先找到武器 我知道铁剑在5楼 铁盾在9楼 你最好先取到他们 我现在有事要做没法帮你 再见",
                {
                    "type": "move",
                    "time": 200,
                    "steps": [
                        "down:2"
                    ]
                },
                {
                    "type": "hide",
                    "remove": true,
                    "time": 0
                }
            ]
        }
    },
    "changeFloor": {
        "1,1": {
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
    "autoEvent": {
        "5,5": {
            "0": {
                "condition": "(!core.enemyExists(6, 2)) &&(!core.enemyExists(8, 2))",
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
        "5,8": {
            "0": {
                "condition": "(!core.enemyExists(6, 2)) &&(!core.enemyExists(8, 2))",
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
        "5,11": {
            "0": {
                "condition": "(!core.enemyExists(6, 2)) &&(!core.enemyExists(8, 2))",
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
        "9,11": {
            "0": {
                "condition": "(!core.enemyExists(6, 2)) &&(!core.enemyExists(8, 2))",
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
        "9,8": {
            "0": {
                "condition": "(!core.enemyExists(6, 2)) &&(!core.enemyExists(8, 2))",
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
        "9,5": {
            "0": {
                "condition": "(!core.enemyExists(6, 2)) &&(!core.enemyExists(8, 2))",
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
    [  1, 88,  0, 82,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  0,  0,  1,  1,  0,222,  0,222,  0,  1,  1,  1],
    [  1,  0,  1,  1,  1,  1,  1,  0,  1,  1,  1,  1,  1],
    [  1,  0,  1, 21, 21,  1,  0,  0,  0,  1,  0,122,  1],
    [  1,  0,  1, 21,  0, 86,  0,  0,  0, 86,  0,  0,  1],
    [  1,  0,  1,  1,  1,  1,  0,  0,  0,  1,  1,  1,  1],
    [  1,  0,  1,123,  0,  1,  0,  0,  0,  1,  0,121,  1],
    [  1,  0,  1,  0,  0, 86,  0,  0,  0, 86,  0,  0,  1],
    [  1,  0,  1,  1,  1,  1,  0,  0,  0,  1,  1,  1,  1],
    [  1,  0,  1, 32, 32,  1,  0,  0,  0,  1,  0,  0,  1],
    [  1, 87,  1, 32,  0, 86,  0,  0,  0, 86,  0,123,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

],
    "cannotMoveDirectly": true
}