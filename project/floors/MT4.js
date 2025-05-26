main.floors.MT4=
{
    "floorId": "MT4",
    "title": "主塔 4 层",
    "name": "4",
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
        "10,1": [
            "\t[老人,man]你没有神秘能力！",
            {
                "type": "hide",
                "remove": true,
                "time": 500
            }
        ],
        "6,1": [
            {
                "type": "if",
                "condition": "(flag:KaimonoLevel<1)",
                "true": [
                    {
                        "type": "setValue",
                        "name": "flag:KaimonoLevel",
                        "value": "1"
                    }
                ]
            },
            {
                "type": "insert",
                "name": "商店事件"
            }
        ]
    },
    "changeFloor": {
        "11,11": {
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
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  0, 22,  0,  1,  7,131,  8,  1,  0,121,  0,  1],
    [  1, 31,  0, 21,  1,  0,  0,  0,  1, 21,  0, 32,  1],
    [  1,  0,217,  0,  1,  0,  0,  0,  1,  0,210,  0,  1],
    [  1,  1, 81,  1,  1,  1, 82,  1,  1,  1, 81,  1,  1],
    [  1,  0,  0,  0, 81,  0,202,  0,  0,209,  0,  0,  1],
    [  1,  0,  0,  0,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,202,  0,201,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1, 81,  1,  1, 81,  1,  1,  1, 81,  1,  1, 81,  1],
    [  1,  0,  1,  0,205,  0,  1,  0,217,  0,  1,  0,  1],
    [  1,  0,  1,201,  0, 21,  1, 27,  0, 31,  1,  0,  1],
    [  1, 87,  1, 21,201, 21,  1,  0,201,  0,  1, 88,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

],
    "cannotMoveDirectly": true
}