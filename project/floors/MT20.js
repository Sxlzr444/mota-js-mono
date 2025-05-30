main.floors.MT20=
{
    "floorId": "MT20",
    "title": "主塔 20 层",
    "name": "20",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
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
        "6,8": [
            {
                "type": "if",
                "condition": "(flag:20F_trapped==0)",
                "true": [
                    {
                        "type": "closeDoor",
                        "id": "specialDoor",
                        "loc": [
                            6,
                            9
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "20F.mp3"
                    },
                    {
                        "type": "hide",
                        "loc": [
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
                            ],
                            [
                                5,
                                6
                            ],
                            [
                                7,
                                6
                            ],
                            [
                                5,
                                7
                            ],
                            [
                                6,
                                7
                            ],
                            [
                                7,
                                7
                            ]
                        ],
                        "time": 500
                    },
                    {
                        "type": "show",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ],
                        "time": 500
                    },
                    "\t[臸扒材,vampire]很好 你打败了緐臷族 但别想象藐视緐臷人那样藐视我 我对于你就像是神一样 是不可战胜的 来吧",
                    {
                        "type": "setValue",
                        "name": "flag:20F_trapped",
                        "value": "1"
                    }
                ],
                "false": []
            }
        ],
        "6,6": {
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
            "data": []
        }
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
        "6,6": [
            "\t[臸扒材,vampire]上帝啊 我做梦也没想到我会被别人打败 毫无疑问你是比我强 但以你现在的状态对于大法师来说又太弱了 你仅仅取得了一个暂时的胜利",
            {
                "type": "playSound",
                "name": "door.mp3",
                "stop": true
            },
            {
                "type": "setBlock",
                "number": "21",
                "loc": [
                    [
                        5,
                        4
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "21",
                "loc": [
                    [
                        6,
                        4
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "21",
                "loc": [
                    [
                        7,
                        4
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "27",
                "loc": [
                    [
                        4,
                        5
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "27",
                "loc": [
                    [
                        4,
                        6
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "27",
                "loc": [
                    [
                        4,
                        7
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "28",
                "loc": [
                    [
                        8,
                        5
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "28",
                "loc": [
                    [
                        8,
                        6
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "28",
                "loc": [
                    [
                        8,
                        7
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "32",
                "loc": [
                    [
                        5,
                        8
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "32",
                "loc": [
                    [
                        6,
                        8
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "32",
                "loc": [
                    [
                        7,
                        8
                    ]
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    6,
                    3
                ],
                "async": true
            },
            {
                "type": "openDoor",
                "loc": [
                    6,
                    9
                ],
                "async": true
            },
            {
                "type": "waitAsync"
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
    [  1,  0,  0,  0,  0,  0, 87,  0,  0,  0,  0,  0,  1],
    [  1,  1,  1,  1,  1,  0,  0,  0,  1,  1,  1,  1,  1],
    [  1,  1,  1,  1,  1,  1, 85,  1,  1,  1,  1,  1,  1],
    [  1, 28, 27,  1,  0,  0,  0,  0,  0,  1, 31, 32,  1],
    [  1, 21,  0,  1,  0,206,206,206,  0,  1,  0, 21,  1],
    [  1,  1, 82,  1,  0,206,208,206,  0,  1, 82,  1,  1],
    [  1,205,  0,  1,  0,206,206,206,  0,  1,  0,205,  1],
    [  1,  0,205,  1,  0,  0,168,  0,  0,  1,205,  0,  1],
    [  1, 81,  1,  1,  1,  1, 83,  1,  1,  1,  1, 81,  1],
    [  1,  0,215,  0,  1,  0,  0,  0,  1,  0,215,  0,  1],
    [  1, 31,  0,  0,218,  0, 88,  0,218,  0,  0, 31,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

]
}