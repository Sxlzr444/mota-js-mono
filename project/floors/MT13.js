main.floors.MT13=
{
    "floorId": "MT13",
    "title": "主塔 13 层",
    "name": "13",
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
    [  1,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  1],
    [  1,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  1],
    [  1,  5,  5,  5,  5,  1,  1,  1,  5,  5,  5,  5,  1],
    [  1,  5,  5,  5,  1,  1,  1,  1,  1,  5,  5,  5,  1],
    [  1,  5,  5,  5,  1,  1, 43,  1,  1,  5,  5,  5,  1],
    [  1,  5,  5,  5,  1,  1,  5,  1,  1,  5,  5,  5,  1],
    [  1,  5,  5,  5,  5,  1,  5,  1,  5,  5,  5,  5,  1],
    [  1,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  1],
    [  1,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  1],
    [  1,  1,  1,  1,  1,  1, 81,  1,  1,  1,  1,  1,  1],
    [  1, 88,  0,  0,  0,  0,  0,  0,  0,  0,  0, 87,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

],
    "cannotMoveDirectly": true
}