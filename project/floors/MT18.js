main.floors.MT18=
{
    "floorId": "MT18",
    "title": "主塔 18 层",
    "name": "18",
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
        "3,2": [
            "\t[老人,man]在这区域不多次提升攻击力 你也可以打败石头人 只要你能使用芧Τ堵痌彻"
        ]
    },
    "changeFloor": {
        "6,1": {
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
    [  1, 87,  0,  0, 82,  0, 88,  0, 81,218,  0, 21,  1],
    [  1,  0,  0,121,  1,  0,  0,  0,  1,  0,203, 21,  1],
    [  1, 81,  1,  1,  1,  1,343,  1,  1,  0,  0, 22,  1],
    [  1,  0, 31,  0, 81,214,  0,214, 81,213,  0, 21,  1],
    [  1,215,  0,215,  1,  0,  0,  0,  1,  0,206, 21,  1],
    [  1,  1,  1,  1,  1,  1, 82,  1,  1,  1,  1,  1,  1],
    [  1,  0,213,  0,  0,  0,  0,  0,  0,  0,215,  0,  1],
    [  1, 81,  1,  1, 81,  1,  1,  1, 81,  1,  1, 81,  1],
    [  1,218,  0,  1,206,206,  1,203,203,  1,  0,218,  1],
    [  1,  0, 21,  1,206,206,  1,203,203,  1, 21,  0,  1],
    [  1, 31, 27,  1,  0, 21,  1, 21,  0,  1, 28, 31,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

],
    "cannotMoveDirectly": true
}