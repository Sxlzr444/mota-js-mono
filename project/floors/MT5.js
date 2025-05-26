main.floors.MT5=
{
    "floorId": "MT5",
    "title": "主塔 5 层",
    "name": "5",
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
        "4,9": [
            "\t[作者,fairy]作者看不懂50层记事本代码，因此没做。"
        ]
    },
    "changeFloor": {
        "1,11": {
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
    [  1, 87,  1,  0,202, 81,  0,  1,  0,  0, 81,  0,  1],
    [  1,  0,  1,  0,  0,  1, 21,  1,201,201,  1,202,  1],
    [  1,  0, 81,205,  0,  1,  0,  1, 21, 21,  1,  0,  1],
    [  1,  1,  1,  1, 81,  1,205,  1, 21, 21,  1,  0,  1],
    [  1, 21,  0,217,  0,  1,  0,  1,  1,  1,  1,  0,  1],
    [  1, 21,  0,  0,205,  1,  0,201,  0,  0,  0,  0,  1],
    [  1,  1,210,  1,  1,  1,  0,  1,  1,  1,  1,202,  1],
    [  1,  0,  0,  0,  0,  1,201,  1,  0,  0,  0,  0,  1],
    [  1, 28, 21, 31,129,  1,  0,  1, 81,  1,  1,  1,  1],
    [  1,  1,  1,  1,  1,  1,  0,  1,  0,  1,  0,  0,  1],
    [  1, 88,  0,  0,  0,  0,  0,  1,  0,343,  0, 35,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

],
    "cannotMoveDirectly": true
}