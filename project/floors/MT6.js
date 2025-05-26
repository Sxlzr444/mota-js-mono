main.floors.MT6=
{
    "floorId": "MT6",
    "title": "主塔 6 层",
    "name": "6",
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
        "4,8": [
            "\t[老人,man]购买物品之后再与商人对话，他会告诉你一些重要的消息，或者说不重要的信息。",
            {
                "type": "hide",
                "remove": true,
                "time": 500
            }
        ],
        "8,4": [
            {
                "type": "choices",
                "text": "\t[商人,trader]我有一把蓝钥匙，你出50金币就卖给你",
                "choices": [
                    {
                        "text": "我太需要了",
                        "action": [
                            {
                                "type": "if",
                                "condition": "(status:money<50)",
                                "true": [
                                    "\t[商人,trader]你的金币不够50枚，无法交易！",
                                    {
                                        "type": "exit"
                                    }
                                ],
                                "false": [
                                    {
                                        "type": "setValue",
                                        "name": "status:money",
                                        "operator": "-=",
                                        "value": "50"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "item:blueKey",
                                        "operator": "+=",
                                        "value": "1"
                                    },
                                    "\t[商人,trader]魔塔共有50层，每10层为一个区域。如果不打败此区域的头目就不能到更高的地方。但也不尽然。",
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
        "1,1": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "11,11": {
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
    [  1, 88,  1, 21, 21,  1,  0,217,  0, 21,201,  0,  1],
    [  1,  0,  1, 21, 21,  1,  0,  1,  1,  1,  1, 81,  1],
    [  1,  0,  1,  1,202,  1,  0,  1, 31,  0,209,  0,  1],
    [  1,  0, 81, 81,  0, 81,  0,  1,122,  0,  0,205,  1],
    [  1,  0,  1,  1,  1,  1,  0,  1,  1,  1,  1,  1,  1],
    [  1,  0,  0,202,217,  0, 21,  0,209,210,  0,  0,  1],
    [  1,  1,  1,  1,  1,  1,  0,  1,  1,  1,  1,  0,  1],
    [  1,217,  0,  0,121,  1,  0, 81, 81,  0, 81,  0,  1],
    [  1,  0,205,  0, 28,  1,  0,  1,  1,202,  1,202,  1],
    [  1, 81,  1,  1,  1,  1,  0,  1,  0,  0,  1,  0,  1],
    [  1,  0,201,  0,  0,209,  0,  1, 31, 31,  1, 87,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

],
    "cannotMoveDirectly": true
}