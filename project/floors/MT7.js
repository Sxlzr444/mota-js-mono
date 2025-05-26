main.floors.MT7=
{
    "floorId": "MT7",
    "title": "主塔 7 层",
    "name": "7",
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
        "6,1": [
            {
                "type": "choices",
                "text": "\t[商人,trader]我有五把黄钥匙，你出50金币就卖给你",
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
                                        "name": "item:yellowKey",
                                        "operator": "+=",
                                        "value": "5"
                                    },
                                    {
                                        "type": "if",
                                        "condition": "(item:wand==1)",
                                        "true": [
                                            "\t[商人,trader]你的攻击比敌人防御高时才能对他造成伤害。什么？你说你有芧Τ堵痌彻？你能对每个怪都用吗？"
                                        ],
                                        "false": [
                                            "\t[商人,trader]你的攻击比敌人防御高时才能对他造成伤害 你防御比敌人攻击高或一样时就能无伤"
                                        ]
                                    },
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
        "1,1": {
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
    [  1, 87,  1, 27,  1,  0,122,  0,  1, 21,  1,201,  1],
    [  1,  0,  1, 31,  1,  0,  0,  0,  1, 21,  1,202,  1],
    [  1,  0,  1,205,  1,202,  1,210,  1, 31,  1,201,  1],
    [  1,  0,  1,  0,  1,  0,  1,  0,  1,  0,  1,  0,  1],
    [  1, 81,  1, 81,  1, 82,  1, 81,  1,209,  1, 81,  1],
    [  1,  0,210,  0,217,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1, 81,  1, 81,  1, 81,  1, 81,  1,210,  1, 81,  1],
    [  1,  0,  1,  0,  1,  0,  1,  0,  1,  0,  1,  0,  1],
    [  1,  0,  1,  0,  1,205,  1,202,  1, 32,  1,  0,  1],
    [  1,201,  1,201,  1, 21,  1,217,  1, 21,  1,  0,  1],
    [  1,  0,202,  0,  1, 21,  1, 32,  1, 21,  1, 88,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

],
    "cannotMoveDirectly": true
}