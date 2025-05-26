main.floors.MT10=
{
    "floorId": "MT10",
    "title": "主塔 10 层",
    "name": "10",
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
        "6,5": [
            {
                "type": "closeDoor",
                "id": "specialDoor",
                "loc": [
                    6,
                    7
                ],
                "async": true
            },
            {
                "type": "playSound",
                "name": "10F.mp3"
            },
            {
                "type": "openDoor",
                "loc": [
                    4,
                    4
                ],
                "async": true
            },
            {
                "type": "openDoor",
                "loc": [
                    8,
                    4
                ],
                "async": true
            },
            {
                "type": "setBlock",
                "number": "0",
                "loc": [
                    [
                        5,
                        6
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "0",
                "loc": [
                    [
                        7,
                        6
                    ]
                ]
            },
            {
                "type": "waitAsync"
            },
            "\t[い緐臷,skeletonCaptain]哈哈哈 你是如此的幸运能安全到达这里 但现在好运离你而去了 你中埋伏了 弟兄们给我上",
            {
                "type": "move",
                "loc": [
                    6,
                    4
                ],
                "time": 200,
                "keep": true,
                "async": true,
                "steps": [
                    "up:3"
                ]
            },
            {
                "type": "move",
                "loc": [
                    2,
                    4
                ],
                "time": 200,
                "keep": true,
                "async": true,
                "steps": [
                    "right:3",
                    "down:2",
                    "right:1"
                ]
            },
            {
                "type": "move",
                "loc": [
                    10,
                    4
                ],
                "time": 200,
                "keep": true,
                "async": true,
                "steps": [
                    "left:4"
                ]
            },
            {
                "type": "sleep",
                "time": 600
            },
            {
                "type": "move",
                "loc": [
                    3,
                    3
                ],
                "time": 200,
                "keep": true,
                "async": true,
                "steps": [
                    "down:1",
                    "right:2",
                    "down:2"
                ]
            },
            {
                "type": "move",
                "loc": [
                    9,
                    3
                ],
                "time": 200,
                "keep": true,
                "async": true,
                "steps": [
                    "down:1",
                    "left:2",
                    "down:2"
                ]
            },
            {
                "type": "sleep",
                "time": 200
            },
            {
                "type": "move",
                "loc": [
                    2,
                    3
                ],
                "time": 200,
                "keep": true,
                "async": true,
                "steps": [
                    "down:1",
                    "right:3",
                    "down:1"
                ]
            },
            {
                "type": "move",
                "loc": [
                    10,
                    3
                ],
                "time": 200,
                "keep": true,
                "async": true,
                "steps": [
                    "down:1",
                    "left:3",
                    "down:1"
                ]
            },
            {
                "type": "sleep",
                "time": 200
            },
            {
                "type": "move",
                "loc": [
                    1,
                    3
                ],
                "time": 200,
                "keep": true,
                "async": true,
                "steps": [
                    "down:1",
                    "right:4"
                ]
            },
            {
                "type": "move",
                "loc": [
                    11,
                    3
                ],
                "time": 200,
                "keep": true,
                "async": true,
                "steps": [
                    "down:1",
                    "left:4"
                ]
            },
            {
                "type": "waitAsync"
            },
            {
                "type": "closeDoor",
                "id": "specialDoor",
                "loc": [
                    4,
                    4
                ],
                "async": true
            },
            {
                "type": "closeDoor",
                "id": "specialDoor",
                "loc": [
                    6,
                    3
                ],
                "async": true
            },
            {
                "type": "closeDoor",
                "id": "specialDoor",
                "loc": [
                    8,
                    4
                ],
                "async": true
            },
            {
                "type": "waitAsync"
            },
            {
                "type": "hide",
                "remove": true
            },
            {
                "type": "setValue",
                "name": "flag:10Ftrapped",
                "value": "1"
            }
        ],
        "6,2": [
            "\t[い緐臷,skeletonCaptain]你怎能杀出重围 我是绝不会让你通过的 来吧 我要与你决斗",
            {
                "type": "hide"
            }
        ],
        "6,11": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "1,10": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "data": []
        },
        "6,9": [
            {
                "type": "if",
                "condition": "(flag:F10_defeated===1)",
                "true": [
                    {
                        "type": "show",
                        "loc": [
                            [
                                1,
                                10
                            ]
                        ],
                        "time": 500
                    },
                    {
                        "type": "move",
                        "loc": [
                            1,
                            10
                        ],
                        "time": 200,
                        "keep": true,
                        "steps": [
                            "up:2",
                            "right:2",
                            "down:3",
                            "right:2",
                            "up:1",
                            "right:1"
                        ]
                    },
                    "\t[小偷,thief]你总算是帮我解决了这麻烦的い緐臷 我终于可以上去了 我听说银盾在11楼 银剑在17楼 这消息不知道对你是否有用 下次见",
                    {
                        "type": "move",
                        "loc": [
                            6,
                            10
                        ],
                        "time": 200,
                        "steps": [
                            "down:1"
                        ]
                    },
                    {
                        "type": "hide",
                        "time": 0
                    }
                ],
                "false": []
            }
        ]
    },
    "changeFloor": {
        "1,11": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "6,11": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "6,1": [
            "\t[い緐臷,skeletonCaptain]不 这是不可能的 你怎会打败我 你别太得意 后面还有许多强大的对手和机关存在 你稍有疏忽就必死无疑",
            {
                "type": "playSound",
                "name": "door.mp3",
                "stop": true
            },
            {
                "type": "setBlock",
                "number": "27",
                "loc": [
                    [
                        1,
                        3
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "27",
                "loc": [
                    [
                        2,
                        3
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "27",
                "loc": [
                    [
                        3,
                        3
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "28",
                "loc": [
                    [
                        9,
                        3
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "28",
                "loc": [
                    [
                        10,
                        3
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "28",
                "loc": [
                    [
                        11,
                        3
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "32",
                "loc": [
                    [
                        1,
                        4
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "32",
                "loc": [
                    [
                        2,
                        4
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "32",
                "loc": [
                    [
                        3,
                        4
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "21",
                "loc": [
                    [
                        9,
                        4
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "21",
                "loc": [
                    [
                        10,
                        4
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "21",
                "loc": [
                    [
                        11,
                        4
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "0",
                "loc": [
                    [
                        6,
                        9
                    ]
                ]
            },
            {
                "type": "show",
                "loc": [
                    [
                        6,
                        9
                    ]
                ],
                "time": 0
            },
            {
                "type": "show",
                "loc": [
                    [
                        6,
                        11
                    ]
                ],
                "time": 0
            },
            {
                "type": "openDoor",
                "loc": [
                    4,
                    4
                ],
                "async": true
            },
            {
                "type": "openDoor",
                "loc": [
                    6,
                    7
                ],
                "async": true
            },
            {
                "type": "openDoor",
                "loc": [
                    8,
                    4
                ],
                "async": true
            },
            {
                "type": "setValue",
                "name": "flag:F10_defeated",
                "value": "1"
            },
            {
                "type": "waitAsync"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "6,3": {
            "0": null,
            "1": {
                "condition": "(flag:10Ftrapped===1)&&(!core.enemyExists(5, 4)) &&(!core.enemyExists(5, 5))&&(!core.enemyExists(5, 6))&&(!core.enemyExists(7, 4))&&(!core.enemyExists(7, 5))&&(!core.enemyExists(7, 6))&&(!core.enemyExists(6, 4))&&(!core.enemyExists(6, 6))",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor"
                    }
                ]
            }
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  1,  1,  1,  1,  0,  0,  0,  1,  1,  1,  1,  1],
    [  1,209,209,209,  1,  1,  0,  1,  1,209,209,209,  1],
    [  1,  0,210,  0, 85,  0,211,  0, 85,  0,210,  0,  1],
    [  1,  1,  1,  1,  1,  0,168,  0,  1,  1,  1,  1,  1],
    [  1,209, 28,209,  1,  1,  0,  1,  1,209, 27,209,  1],
    [  1,  0,210,  0,  1,  1,  0,  1,  1,  0,210,  0,  1],
    [  1,  0,  0,  0,  1,  1,  0,  1,  1,  0,  0,  0,  1],
    [  1, 81,  1, 81,  1,  1, 83,  1,  1, 81,  1, 81,  1],
    [  1,123,  1,  0,  1,  0,  0,  0,  1,  0,  1,  0,  1],
    [  1, 88,  1,  0,217,  0, 87,  0,217,  0,  1, 32,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

],
    "cannotMoveDirectly": true
}