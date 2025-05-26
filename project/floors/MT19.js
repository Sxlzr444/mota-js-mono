main.floors.MT19=
{
    "floorId": "MT19",
    "title": "主塔 19 层",
    "name": "19",
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
    "events": {},
    "changeFloor": {
        "1,1": {
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
    "afterOpenDoor": {
        "6,3": [
            {
                "type": "setBlock",
                "number": "cross"
            }
        ]
    },
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 88,  0,  1, 31,  0,218,  0, 22,  1, 21, 27,  1],
    [  1,  0,  0,  1,  0,  0,  1,  0,  0,  1,206,  0,  1],
    [  1, 81,  1,  1,214,  1,344,  1,214,  1, 81,  1,  1],
    [  1,205,  0,  1,  0,  0,343,  0,  0,  1,  0,  0,  1],
    [  1,  0,  0,  1, 21,  0,  1,  0, 21,  1,203,203,  1],
    [  1, 81,  1,  1,  0,215,  0,215,  0,  1,  0,  0,  1],
    [  1,206,  0,  1,  1,  1, 82,  1,  1,  1,  1, 81,  1],
    [  1,  0,  0,203,  0,  0,  0,  0,214,  0,  0,213,  1],
    [  1, 81,  1,  1,  1,  1,214,  1,  1, 31, 21,  0,  1],
    [  1,  0,  1,  0, 81, 21,  0, 21,  1,  1,  1,206,  1],
    [  1,203,  0,206,  1,  0, 87,  0, 81,  0,205,  0,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

],
    "cannotMoveDirectly": true
}