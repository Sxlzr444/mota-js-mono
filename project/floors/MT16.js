main.floors.MT16=
{
    "floorId": "MT16",
    "title": "主塔 16 层",
    "name": "16",
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
        "11,11": {
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
                    "condition": "flag:shengshuiManFound",
                    "true": [
                        {
                            "type": "playSound",
                            "name": "door.mp3"
                        },
                        "\t[老人,man]很好，你居然找到了我。作为奖励我将给你一瓶圣水。喝了它将按你的攻击和防御力增加你的生命点数，你越晚用它效果越好。",
                        {
                            "type": "setValue",
                            "name": "item:superPotion",
                            "operator": "+=",
                            "value": "1"
                        },
                        {
                            "type": "hide",
                            "remove": true,
                            "time": 500
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
                            "number": "man"
                        },
                        {
                            "type": "setValue",
                            "name": "flag:shengshuiManFound",
                            "value": "1"
                        }
                    ]
                }
            ]
        },
        "1,11": [
            "\t[老人,man]整个魔塔有2把藏在墙里的红钥匙 你可以用み描发现他们的位置",
            {
                "type": "hide",
                "remove": true,
                "time": 500
            }
        ]
    },
    "changeFloor": {
        "6,1": {
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
    [  1, 21,206,  0,  1,  0, 88,  0,  1,  0,  0,206,  1],
    [  1, 21,218,  0, 81,  0,  0,  0, 81,203,  0,  0,  1],
    [  1, 21,206,  0,  1,213,  0, 21,  1,  0,  0, 31,  1],
    [  1,  1,  1,  1,  1,  1, 82,  1,  1,  1, 81,  1,  1],
    [  1, 27, 21,  0,  1, 31,  0,  0,  1,  0,213,  0,  1],
    [  1, 31,  0,215, 81,  0,214,  0,  1,  0,  0,  0,  1],
    [  1, 28, 21,  0,  1,  0,  0, 21,  1,206,  0, 22,  1],
    [  1,  1,343,  1,  1,  1, 81,  1,  1,  1, 81,  1,  1],
    [  1,  0,203,  0,  1,206,  0,206,  1,  0,218,  0,  1],
    [  1,  0,  0,  0, 81,  0,  0,  0, 81,  0,  1,  1,  1],
    [  1,121,  0,  0,  1,  0, 87,  0,  1,216,343,343,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

],
    "cannotMoveDirectly": true
}