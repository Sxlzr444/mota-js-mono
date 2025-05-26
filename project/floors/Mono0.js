main.floors.Mono0=
{
    "floorId": "Mono0",
    "title": "莫塔 下水道",
    "name": "0",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": true,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 2,
    "defaultGround": "ground",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "1,0": [
            "\t[作者]本塔大多数怪物和道具的效果由DeepSeek设计，作者可能有调整！",
            "\t[作者]属性说明：\n法强-增强主角技能的效果强度，幅度和具体技能效果有关。\n法抗-减少怪物技能的效果强度，通常1法抗减少1点效果强度。"
        ],
        "7,1": [
            "\t[老登,recluse]莫诺吗？\n怎么沦落到下水道里了？"
        ]
    },
    "changeFloor": {
        "6,0": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {
        "10,9": [
            "获得楼层传送器！\n可以前往任意去过的楼层，只能在楼梯边上使用"
        ],
        "8,6": [
            "获得怪物手册！\n可以查看怪物的属性和战斗所受伤害",
            {
                "type": "callBook"
            }
        ],
        "1,8": [
            "获得默认技能タ盽！",
            "タ盽\n全息攻击：莫诺的初始技能，战斗开始时，额外造成等同于法强2倍的伤害，此伤害无视防御。",
            {
                "type": "function",
                "function": "function(){\ncore.setFlag('skill', 1); \t\tcore.setFlag('skillName', 'タ盽');\n}"
            }
        ]
    },
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [ 16,129, 16, 16, 16,  1, 87,  1, 16, 16, 16, 16, 16],
    [ 16,  0,  0,  0,  0,343,  0,126,  0,  0, 16,  0, 16],
    [ 16,  0, 16, 16, 16,  1,  0,  1, 16,  0, 16,  0, 16],
    [ 16,  0, 16, 16, 16,  1, 86,343, 16, 16, 16,  0, 16],
    [ 16,  0, 16,  0, 16,  1,  0,  1, 16, 16, 16,  0, 16],
    [ 16,  0, 16,  0,  0,  1,  0,343,  0, 16, 16,  0, 16],
    [ 16,  0, 16,300, 16,  1,  0,  1, 45,  0, 16,  0, 16],
    [ 16,  0, 16, 16, 16,  1,  0,  1, 16,  0,  0,  0,  0],
    [  0,340,  0,  0,  0,343,  0,  1, 16, 16,  0, 16, 16],
    [ 16, 16, 16, 16, 16,  1, 86,  1, 16, 16, 46, 16, 16],
    [ 16, 16, 16, 16, 16,  1,  0,343,  0,  0,  0,  0, 16],
    [ 16, 16,  0,  0,  0,343,  0,  1, 16, 16, 16, 16, 16],
    [ 16, 16,  0, 16, 16,  1,  0,  1, 16, 16, 16, 16, 16]
],
    "bgmap": [

],
    "fgmap": [

]
}