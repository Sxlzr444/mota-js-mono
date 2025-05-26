main.floors.Mono7=
{
    "floorId": "Mono7",
    "title": "莫塔 第7层",
    "name": "7",
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
        "1,3": [
            "\t[商人,trader]面包是这一区域的首领，以你现在的实力去挑战他可能是自杀。",
            "\t[商人,trader]不过，也可能不是。",
            "\t[商人,trader]总之，我这里有些补给品，你出30金币我就卖给你。",
            {
                "type": "choices",
                "text": "\t[流浪者,trader]30金币买1个蓝血瓶和1把蓝钥匙",
                "choices": [
                    {
                        "text": "我太需要了",
                        "icon": "blueKey",
                        "action": [
                            {
                                "type": "if",
                                "condition": "(status:money>=30)",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "status:money",
                                        "operator": "-=",
                                        "value": "30"
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
        "1,11": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "1,5": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "8,10": {
            "0": {
                "condition": "(!core.enemyExists(7,9)&&!core.enemyExists(7,11))",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor",
                        "loc": [
                            8,
                            10
                        ]
                    }
                ]
            },
            "1": null
        },
        "5,3": {
            "0": {
                "condition": "(!core.enemyExists(4,4)&&!core.enemyExists(6,4))",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor",
                        "loc": [
                            5,
                            3
                        ]
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
    [  1, 22,  0,  1, 23,  0,  1,  0,  0,  0,202,  0,  1],
    [  1,  0, 32,  1,  0, 28,  1,  0,  1,202,  0, 31,  1],
    [  1,122,  1,  1,  1, 85,  1,  0,  1, 82,  1, 81,  1],
    [  1,  0,  0,  1,265,  0,265,  0,  1,203,  1,201,  1],
    [  1, 87,  0,  0,  0,  0,  0,  0,  1,  0,  1,  0,  1],
    [  1,  1,  1,  1,  1,  1,  1,201,  1, 21,  1,  0,  1],
    [  1,  0,  1,  0, 27,  1,  0,  0,  1, 32,  1,216,  1],
    [  1, 32,216,265,  0,  1,  0,  1,  1,  1,  1, 82,  1],
    [  1,  1, 81,  1,  1,  1,  0,266,  1,  0,  0,  0,  1],
    [  1,  0,  0,  1,  0,  0,  0,  0, 85,  0, 36,  0,  1],
    [  1, 88,  0,203,  0,  0,  0,266,  1,  0,  0,  0,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

]
}