main.floors.MT3=
{
    "floorId": "MT3",
    "title": "主塔 3 层",
    "name": "3",
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
        "5,9": [
            {
                "type": "playSound",
                "name": "3F.mp3"
            },
            {
                "type": "setBlock",
                "number": "redKing",
                "loc": [
                    [
                        5,
                        7
                    ]
                ],
                "time": 1000
            },
            "\t[魔王,redKing]\b[this,1,5]欢迎来到魔塔，你是第一百位挑战者。\n若你能打败我所有的手下，我就与你一对一的决斗。\n现在你必须接受我的安排。",
            {
                "type": "setBlock",
                "number": "blueKing",
                "loc": [
                    [
                        5,
                        8
                    ],
                    [
                        4,
                        9
                    ],
                    [
                        5,
                        10
                    ],
                    [
                        6,
                        9
                    ]
                ],
                "time": 500
            },
            "\t[勇士]\b[hero]什么？",
            {
                "type": "stopSound"
            },
            {
                "type": "animate",
                "name": "hand"
            },
            {
                "type": "setCurtain",
                "color": [
                    0,
                    0,
                    0
                ],
                "time": 1250
            },
            {
                "type": "setValue",
                "name": "status:atk",
                "operator": "/=",
                "value": "10"
            },
            {
                "type": "setValue",
                "name": "status:def",
                "operator": "/=",
                "value": "10"
            },
            {
                "type": "setValue",
                "name": "status:hp",
                "value": "400"
            },
            {
                "type": "changeFloor",
                "floorId": "MT2",
                "loc": [
                    3,
                    8
                ],
                "direction": "up",
                "time": 1000
            },
            {
                "type": "hide",
                "loc": [
                    [
                        5,
                        8
                    ],
                    [
                        4,
                        9
                    ],
                    [
                        5,
                        10
                    ],
                    [
                        6,
                        9
                    ]
                ],
                "floorId": "MT3",
                "remove": true,
                "time": 500
            },
            {
                "type": "hide",
                "loc": [
                    [
                        5,
                        7
                    ]
                ],
                "floorId": "MT3",
                "remove": true,
                "time": 500
            },
            {
                "type": "hide",
                "loc": [
                    [
                        5,
                        9
                    ]
                ],
                "floorId": "MT3",
                "remove": true,
                "time": 500
            }
        ],
        "11,4": [
            "\t[老人,man]我给你み描 它的效果如下：\n「窥探虚实」：使用后立即显示当前楼层完整地图，包括所有隐藏房间、陷阱、宝箱及敌人位置，持续至玩家离开本层。\n「预判之眼」：首次遭遇的敌人将被标记，可查看其详细属性（攻击/防御/血量/特殊技能）。\n使用限制：每局游戏仅可携带1个。",
            {
                "type": "setValue",
                "name": "item:I342",
                "value": "1"
            },
            "\t[勇士]\b[hero]这不就是怪物手册吗？\n或者说功能还不如怪物手册，至少怪物手册显示怪物数据前不需要与之战斗。",
            "\t[老人,man]不不不，这个道具还可以让你看到隐藏的房间、陷阱、宝箱和敌人位置。",
            "\t[勇士]\b[hero]这个游戏中哪里有隐藏的房间和宝箱？\n隐藏的陷阱玩过50层的都知道在哪儿吧？\n隐藏的敌人位置不会说的是守卫圣剑的魔法警卫吧？这个谁不知道？\n还使用限制？这个道具携带几个都是一样没用！",
            "\t[老人,man]……",
            "\t[老人,man]我不管，deepseek是这么写的。",
            {
                "type": "hide",
                "remove": true,
                "time": 500
            }
        ]
    },
    "changeFloor": {
        "1,11": {
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
    [  1, 21, 28,  1, 21, 32, 21,  1,  0,  1,  0, 31,  1],
    [  1,  0, 31,  1, 32, 21, 32,  1,  0, 81,205,  0,  1],
    [  1,217,  0,  1, 21, 22, 21,  1,  0,  1,  1,  1,  1],
    [  1, 81,  1,  1,  1,  0,  1,  1,  0,  1,  0,121,  1],
    [  1,  0,  0,205,  0,  0,  0,201,  0,  0,  0,  0,  1],
    [  1, 81,  1,  1,  0,  0,  0,  1,  0,  1,  1,  1,  1],
    [  1,209,  0,  1,  1,  0,  1,  1,  0,  1,  0, 31,  1],
    [  1,  0, 21,  1,  0,  0,  0,  1,  0, 81,217, 21,  1],
    [  1, 31, 27,  1,  0,  0,  0,  1,  0,  1,  1,  1,  1],
    [  1,  1,  1,  1,  1,  0,  1,  1,202,  1,  0,  0,  1],
    [  1, 88,  0,  0,  0,  0,  0,  1,  0, 81,  0, 87,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

],
    "cannotMoveDirectly": true
}