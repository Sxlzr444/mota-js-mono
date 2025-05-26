main.floors.Mono1=
{
    "floorId": "Mono1",
    "title": "莫塔 第1层",
    "name": "1",
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
        "10,10": [
            "\t[商人,trader]我藏有一颗名贵的\\i[greenGem]绿宝石，它能提高你的魔抗，你出20金币就卖给你。",
            "\t[商人,trader]还附赠两个\\i[redPotion]红血瓶！",
            {
                "type": "choices",
                "text": "\t[流浪者,trader]20金币购买1颗绿宝石附赠2个红血瓶",
                "choices": [
                    {
                        "text": "我太需要了",
                        "icon": "greenGem",
                        "action": [
                            {
                                "type": "if",
                                "condition": "(status:money>=20)",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "status:money",
                                        "operator": "-=",
                                        "value": "20"
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
    },
    "changeFloor": {
        "6,12": {
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
    [  1, 87,  1,  0,  0,  0,  0,201,  0,  0,  0,  0,  1],
    [  1,  0,  1,  0,  1,  0,  1,  0,  1,  1,  1, 82,  1],
    [  1,  0,  1,  0,  1,  0,  1,  0,  1, 32,  1,202,  1],
    [  1,  0,201,  0,  1,  0,  1,201,  1,  0,204,  0,  1],
    [  1,  1,  1,  1,  1,  0,  1,  0,  1, 53,  1, 27,  1],
    [  1, 21,  0,  1,  0,202,  0,  0,  1,  1,  1,  1,  1],
    [  1,  0,203,  0,  0,  1,  0,  0, 81,  0,  0,  0,  1],
    [  1,  1,  1, 81,  1,  1,  0,  1,  1,  1,202,  1,  1],
    [  1, 31,  0,  0,  1, 23,  0,  0,203,  0,  0,  0,  1],
    [  1,  1,  1,201,  1,  0, 22,  0,  1,  1,122,  1,  1],
    [  1, 21, 28,  0,  1, 21,  0, 28,  1, 31, 29, 31,  1],
    [  1,  1,  1,  1,  1,  1, 88,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

]
}