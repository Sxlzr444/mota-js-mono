main.floors.MT9=
{
    "floorId": "MT9",
    "title": "主塔 9 层",
    "name": "9",
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
    "events": {},
    "changeFloor": {
        "6,1": {
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
    [  1,  0,  0,209, 81,  0, 88,  0, 81,201,  0, 31,  1],
    [  1,  0, 21,  0,  1,  0,  0,  0,  1,  0,201,  0,  1],
    [  1,210,  1,  1,  1,  1, 82,  1,  1,  1,  1,  0,  1],
    [  1,  0, 21,  0,  1, 21,  0, 21, 81, 81,  0,  0,  1],
    [  1, 28,  0,205, 81,  0, 27,  0,  1,  1,343,  1,  1],
    [  1,  1,  1,  1,  1,  1,  1,202,  1,  0,  0,210,  1],
    [  1, 21,  0, 81,210, 21,  1,  0,  1, 36,  1,  0,  1],
    [  1,210,  0,  1,  0,  0,  1,  0,  1,  1,  1, 81,  1],
    [  1, 81,  1,  1,  1, 81,  1,  0,  1, 21,  0,217,  1],
    [  1,  0, 31,  1,  0,209,  1,205,  1,  0,209,  0,  1],
    [  1, 87,  0, 82,  0,  0, 81,  0, 81,217,  0, 31,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

],
    "cannotMoveDirectly": true
}