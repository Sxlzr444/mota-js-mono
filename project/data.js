var data_a1e2fb4a_e986_4524_b0da_9b7ba7c0874d = 
{
	"main": {
		"floorIds": [
			"sample0",
			"sample1",
			"sample2",
			"MT2",
			"MT4",
			"MT5",
			"MT6",
			"MT7",
			"MT8",
			"MT9",
			"MT10",
			"MT11",
			"MT12",
			"MT13",
			"MT14",
			"MT15",
			"MT17",
			"MT18",
			"Mono0",
			"Mono1",
			"Mono2",
			"Mono3",
			"Mono4",
			"Mono5",
			"Mono6",
			"Mono7",
			"Mono8"
		],
		"floorPartitions": [],
		"images": [
			"bear.png",
			"bg.jpg",
			"brave.png",
			"dragon.png",
			"hero.png",
			"mono.png",
			"winskin.png"
		],
		"tilesets": [
			"magictower.png"
		],
		"animates": [
			"hand",
			"sword",
			"zone"
		],
		"bgms": [
			"bgm.mp3"
		],
		"sounds": [
			"10F.mp3",
			"3F.mp3",
			"attack.mp3",
			"bomb.mp3",
			"cancel.mp3",
			"centerFly.mp3",
			"confirm.mp3",
			"cursor.mp3",
			"door.mp3",
			"equip.mp3",
			"error.mp3",
			"floor.mp3",
			"gem.mp3",
			"icePickaxe.mp3",
			"item.mp3",
			"jump.mp3",
			"load.mp3",
			"open_ui.mp3",
			"pickaxe.mp3",
			"recovery.mp3",
			"save.mp3",
			"shop.mp3",
			"zone.mp3"
		],
		"fonts": [],
		"nameMap": {
			"确定": "confirm.mp3",
			"取消": "cancel.mp3",
			"操作失败": "error.mp3",
			"光标移动": "cursor.mp3",
			"打开界面": "open_ui.mp3",
			"读档": "load.mp3",
			"存档": "save.mp3",
			"获得道具": "item.mp3",
			"回血": "recovery.mp3",
			"炸弹": "bomb.mp3",
			"飞行器": "centerFly.mp3",
			"开关门": "door.mp3",
			"上下楼": "floor.mp3",
			"跳跃": "jump.mp3",
			"破墙镐": "pickaxe.mp3",
			"破冰镐": "icePickaxe.mp3",
			"宝石": "gem.mp3",
			"阻激夹域": "zone.mp3",
			"穿脱装备": "equip.mp3",
			"背景音乐": "bgm.mp3",
			"攻击": "attack.mp3",
			"背景图": "bg.jpg",
			"商店": "shop.mp3",
			"领域": "zone"
		},
		"levelChoose": [
			{
				"title": "普通",
				"name": "Normal",
				"hard": 2,
				"color": [
					255,
					221,
					32,
					1
				],
				"action": []
			}
		],
		"equipName": [
			"武器",
			"盾牌"
		],
		"startBgm": null,
		"styles": {
			"startBackground": "project/images/bg.jpg",
			"startVerticalBackground": "project/images/bg.jpg",
			"startLogoStyle": "color: black",
			"startButtonsStyle": "background-color: #32369F; opacity: 0.85; color: #FFFFFF; border: #FFFFFF 2px solid; caret-color: #FFD700;",
			"statusLeftBackground": "url(project/materials/ground.png) repeat",
			"statusTopBackground": "url(project/materials/ground.png) repeat",
			"toolsBackground": "black",
			"borderColor": [
				0,
				0,
				0,
				1
			],
			"statusBarColor": [
				255,
				255,
				255,
				1
			],
			"selectColor": [
				255,
				215,
				0,
				1
			],
			"floorChangingStyle": "background-color: black; color: white",
			"font": "Verdana"
		},
		"splitImages": [
			{
				"name": "dragon.png",
				"width": 384,
				"height": 96,
				"prefix": "dragon_"
			}
		]
	},
	"firstData": {
		"title": "莫诺塔2：莫诺的复仇",
		"name": "MonoTower2",
		"version": "Ver 2.10.3",
		"floorId": "Mono0",
		"hero": {
			"image": "mono.png",
			"animate": false,
			"name": "莫诺",
			"lv": 1,
			"hpmax": -1,
			"hp": 460,
			"manamax": -1,
			"mana": 1,
			"atk": 10,
			"def": 5,
			"mdef": 1,
			"money": 0,
			"exp": 0,
			"equipment": [],
			"items": {
				"constants": {},
				"tools": {},
				"equips": {}
			},
			"loc": {
				"direction": "up",
				"x": 6,
				"y": 12
			},
			"flags": {},
			"followers": [],
			"steps": 0
		},
		"startCanvas": [
			{
				"type": "comment",
				"text": "在这里可以用事件来自定义绘制标题界面的背景图等"
			},
			{
				"type": "comment",
				"text": "也可以直接切换到其他楼层（比如某个开始剧情楼层）进行操作。"
			},
			{
				"type": "previewUI",
				"action": [
					{
						"type": "fillRect",
						"x": 0,
						"y": 0,
						"width": "core._PX_ || core.__PIXELS__",
						"height": "core._PY_ || core.__PIXELS__",
						"style": [
							82,
							82,
							82,
							1
						]
					},
					{
						"type": "setAttribute",
						"align": "center"
					},
					{
						"type": "fillBoldText",
						"x": "(core._PX_ || core.__PIXELS__) / 2",
						"y": 80,
						"style": [
							255,
							255,
							255,
							1
						],
						"strokeStyle": [
							0,
							0,
							0,
							1
						],
						"font": "bold 40px Verdana",
						"text": "${core.firstData.title}"
					}
				]
			},
			{
				"type": "setValue",
				"name": "flag:selection",
				"value": "0"
			},
			{
				"type": "comment",
				"text": "在右下方自绘一个对话框进行显示选择项"
			},
			{
				"type": "previewUI",
				"action": [
					{
						"type": "fillRect",
						"x": 230,
						"y": 250,
						"width": 150,
						"height": 142,
						"radius": 10,
						"style": [
							50,
							54,
							159,
							0.85
						]
					},
					{
						"type": "strokeRect",
						"x": 230,
						"y": 250,
						"width": 150,
						"height": 142,
						"radius": 10,
						"style": [
							255,
							255,
							255,
							1
						],
						"lineWidth": 2
					},
					{
						"type": "fillBoldText",
						"x": 305,
						"y": 290,
						"style": [
							255,
							255,
							255,
							1
						],
						"font": "bold 25px Verdana",
						"text": "开始游戏"
					},
					{
						"type": "fillBoldText",
						"x": 305,
						"y": 330,
						"font": "bold 25px Verdana",
						"text": "读取存档"
					},
					{
						"type": "fillBoldText",
						"x": 305,
						"y": 370,
						"font": "bold 25px Verdana",
						"text": "回放录像"
					}
				]
			},
			{
				"type": "while",
				"condition": "1",
				"data": [
					{
						"type": "drawSelector",
						"image": "winskin.png",
						"code": 1,
						"x": 245,
						"y": "261 + 40*flag:selection",
						"width": 120,
						"height": 40
					},
					{
						"type": "wait",
						"data": [
							{
								"case": "keyboard",
								"keycode": "13,32",
								"break": true,
								"action": [
									{
										"type": "switch",
										"condition": "flag:selection",
										"caseList": [
											{
												"case": "0",
												"action": [
													{
														"type": "comment",
														"text": "在“开始游戏”确定"
													},
													{
														"type": "break",
														"n": 1
													}
												]
											},
											{
												"case": "1",
												"action": [
													{
														"type": "comment",
														"text": "在“读取存档”确定"
													},
													{
														"type": "callLoad"
													}
												]
											},
											{
												"case": "2",
												"action": [
													{
														"type": "comment",
														"text": "在“回放录像”确定"
													},
													{
														"type": "if",
														"condition": "(!core.isReplaying())",
														"true": [
															{
																"type": "function",
																"function": "function(){\ncore.chooseReplayFile()\n}"
															}
														]
													}
												]
											}
										]
									}
								]
							},
							{
								"case": "keyboard",
								"keycode": "38",
								"break": true,
								"action": [
									{
										"type": "comment",
										"text": "光标上键"
									},
									{
										"type": "setValue",
										"name": "flag:selection",
										"value": "(flag:selection + 2) % 3"
									}
								]
							},
							{
								"case": "keyboard",
								"keycode": "40",
								"break": true,
								"action": [
									{
										"type": "comment",
										"text": "光标下键"
									},
									{
										"type": "setValue",
										"name": "flag:selection",
										"value": "(flag:selection + 1) % 3"
									}
								]
							},
							{
								"case": "mouse",
								"px": [
									245,
									365
								],
								"py": [
									261,
									300
								],
								"break": true,
								"action": [
									{
										"type": "comment",
										"text": "点击“开始游戏”"
									},
									{
										"type": "break",
										"n": 1
									}
								]
							},
							{
								"case": "mouse",
								"px": [
									245,
									365
								],
								"py": [
									301,
									340
								],
								"break": true,
								"action": [
									{
										"type": "comment",
										"text": "点击“读取存档”"
									},
									{
										"type": "callLoad"
									}
								]
							},
							{
								"case": "mouse",
								"px": [
									245,
									365
								],
								"py": [
									341,
									380
								],
								"break": true,
								"action": [
									{
										"type": "comment",
										"text": "点击“播放录像”"
									},
									{
										"type": "if",
										"condition": "(!core.isReplaying())",
										"true": [
											{
												"type": "function",
												"function": "function(){\ncore.chooseReplayFile()\n}"
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				"type": "setValue",
				"name": "flag:selection",
				"value": "null"
			},
			{
				"type": "drawSelector",
				"code": 1
			},
			{
				"type": "clearMap"
			},
			{
				"type": "function",
				"function": "function(){\ncore.control.checkBgm()\n}"
			},
			{
				"type": "if",
				"condition": "(main.levelChoose.length == 0)",
				"true": [
					{
						"type": "comment",
						"text": "没有难度选择：直接开始游戏"
					}
				],
				"false": [
					{
						"type": "comment",
						"text": "难度选择：作为样例，这里只提供了一个显示选择项。"
					},
					{
						"type": "function",
						"function": "function(){\nvar choices = [];\nmain.levelChoose.forEach(function (one) {\n\tchoices.push({\n\t\t\"text\": one.title || '',\n\t\t\"action\": [\n\t\t\t{ \"type\": \"function\", \"function\": \"function() { core.status.hard = '\" + (one.name || '') + \"'; }\" }\n\t\t]\n\t});\n})\ncore.insertAction({ \"type\": \"choices\", \"choices\": choices });\n}"
					},
					{
						"type": "comment",
						"text": "你也可以仿照上面的样例进行自己创建等待用户操作来处理不同的难度分歧。\n如需自己处理，请设置 core.status.hard \n（例如，自定义js脚本：core.status.hard = 'Easy' ）"
					}
				]
			},
			{
				"type": "clearMap"
			},
			{
				"type": "comment",
				"text": "接下来会执行startText中的事件"
			},
			{
				"type": "comment",
				"text": "状态栏默认处于隐藏状态；可以使用“显示状态栏”事件进行显示。"
			}
		],
		"startText": [],
		"shops": [
			{
				"id": "shop1",
				"text": "\t[贪婪之神,moneyShop]给我${flag:kaimonoCost}\r[rgb(241,245,37)]金币\r，我就可以提高一次你的\r[gold]属性\r。加点花费与\r[teal]加点次数\r有关，且不同商店的加点次数是\r[red]累加\r的。\n\n层数越高，商店的加点效果就越好。不过，如果你不在我这里加点，你很可能无法前往下一区，哈哈哈……\n\n累计加点\r[teal]${flag:kaimonoTimes}\r次，当前加点花费\r[rgb(241,245,37)]${flag:kaimonoCost}\r金币，你现在拥有\r[red]${(status:money<flag:kaimonoCost)?(status:money):''}\r\r[green]${(status:money<flag:kaimonoCost)?'':(status:money)}\r金币。\n\n${(flag:kaimono1Met==1)?('1区：< '):null}\r[rgb(160,247,83)]${flag:kaimono1Met?(flag:kaiHpTimesinZone1+' '):null}\r\r[rgb(255,85,85)]${flag:kaimono1Met?(flag:kaiAtkTimesinZone1+' '):null}\r\r[rgb(69,209,224)]${flag:kaimono1Met?(flag:kaiDefTimesinZone1+' '):null}\r${flag:kaimono1Met?('> '):null}\r[rgb(160,247,83)]${flag:kaimono1Met?('生命'+flag:kaiHpPointsinZone1+'点'):null}\r${(flag:kaimono1Met==1)?('、'):null}\r[rgb(255,85,85)]${flag:kaimono1Met?('攻'+flag:kaiAtkPointsinZone1+'点'):null}\r${(flag:kaimono1Met==1)?('、'):null}\r[rgb(69,209,224)]${flag:kaimono1Met?('防'+flag:kaiDefPointsinZone1+'点'):null}\r",
				"textInList": "贪婪之神（\r[red]${(status:money<flag:kaimonoCost)?(status:money):''}\r\r[green]${(status:money<flag:kaimonoCost)?'':(status:money)}\r/${flag:kaimonoCost})",
				"mustEnable": true,
				"disablePreview": false,
				"choices": [
					{
						"text": "生命+${flag:kaimonoLevel*200}",
						"need": "status:money>=flag:kaimonoCost",
						"icon": "bluePotion",
						"color": [
							160,
							247,
							83
						],
						"action": [
							{
								"type": "setValue",
								"name": "status:money",
								"operator": "-=",
								"value": "flag:kaimonoCost"
							},
							{
								"type": "setValue",
								"name": "flag:kaimonoTimes",
								"operator": "+=",
								"value": "1"
							},
							{
								"type": "setValue",
								"name": "status:hp",
								"operator": "+=",
								"value": "flag:kaimonoLevel*200"
							},
							{
								"type": "if",
								"condition": "(flag:kaimonoLevel===1)",
								"true": [
									{
										"type": "setValue",
										"name": "flag:kaimonoTimesinZone1",
										"operator": "+=",
										"value": "1"
									},
									{
										"type": "setValue",
										"name": "flag:kaiHpTimesinZone1",
										"operator": "+=",
										"value": "1"
									},
									{
										"type": "setValue",
										"name": "flag:kaiHpPointsinZone1",
										"operator": "+=",
										"value": "flag:kaimonoLevel*200"
									}
								]
							},
							{
								"type": "insert",
								"name": "加点花费计算"
							}
						]
					},
					{
						"text": "攻击+${flag:kaimonoLevel*2}",
						"need": "status:money>=flag:kaimonoCost",
						"icon": "sword0",
						"color": [
							255,
							85,
							85
						],
						"action": [
							{
								"type": "setValue",
								"name": "status:money",
								"operator": "-=",
								"value": "flag:kaimonoCost"
							},
							{
								"type": "setValue",
								"name": "flag:kaimonoTimes",
								"operator": "+=",
								"value": "1"
							},
							{
								"type": "setValue",
								"name": "status:atk",
								"operator": "+=",
								"value": "flag:kaimonoLevel*2"
							},
							{
								"type": "if",
								"condition": "(flag:kaimonoLevel===1)",
								"true": [
									{
										"type": "setValue",
										"name": "flag:kaimonoTimesinZone1",
										"operator": "+=",
										"value": "1"
									},
									{
										"type": "setValue",
										"name": "flag:kaiAtkTimesinZone1",
										"operator": "+=",
										"value": "1"
									},
									{
										"type": "setValue",
										"name": "flag:kaiAtkPointsinZone1",
										"operator": "+=",
										"value": "flag:kaimonoLevel*2"
									}
								]
							},
							{
								"type": "insert",
								"name": "加点花费计算"
							}
						]
					},
					{
						"text": "防御+${flag:kaimonoLevel*2}",
						"need": "status:money>=flag:kaimonoCost",
						"icon": "shield0",
						"color": [
							69,
							209,
							224
						],
						"action": [
							{
								"type": "setValue",
								"name": "status:money",
								"operator": "-=",
								"value": "flag:kaimonoCost"
							},
							{
								"type": "setValue",
								"name": "flag:kaimonoTimes",
								"operator": "+=",
								"value": "1"
							},
							{
								"type": "setValue",
								"name": "status:def",
								"operator": "+=",
								"value": "flag:kaimonoLevel*2"
							},
							{
								"type": "if",
								"condition": "(flag:kaimonoLevel===1)",
								"true": [
									{
										"type": "setValue",
										"name": "flag:kaimonoTimesinZone1",
										"operator": "+=",
										"value": "1",
										"norefresh": true
									},
									{
										"type": "setValue",
										"name": "flag:kaiDefTimesinZone1",
										"operator": "+=",
										"value": "1"
									},
									{
										"type": "setValue",
										"name": "flag:kaiDefPointsinZone1",
										"operator": "+=",
										"value": "flag:kaimonoLevel*2"
									}
								]
							},
							{
								"type": "insert",
								"name": "加点花费计算"
							}
						]
					}
				]
			},
			{
				"id": "sabis1",
				"text": "\t[1区赠品领取处,trader]如果你在本区域的贪婪之神处加点\r[teal]3次\r，我会赠送你1个\\i[yellowGem]黄宝石。\n\n如果你开启了更高级别的商店，将\r[red]失去\r获取本赠品的资格。\n\n当前你已加点${flag:kaimonoTimesinZone1}/3次。",
				"textInList": "1区赠品领取（\r[red]${(flag:kaimonoTimesinZone1<3)?(flag:kaimonoTimesinZone1):null}\r\r[green]${(flag:kaimonoTimesinZone1<3)?null:(flag:kaimonoTimesinZone1)}\r/3）",
				"mustEnable": true,
				"disablePreview": false,
				"choices": [
					{
						"text": "领取奖品",
						"need": "flag:kaimonoTimesinZone1>=3",
						"icon": "yellowGem",
						"color": [
							255,
							255,
							255
						],
						"action": [
							{
								"type": "setValue",
								"name": "status:mana",
								"operator": "+=",
								"value": "1"
							},
							{
								"type": "setValue",
								"name": "flag:zone1Sabised",
								"value": "true"
							},
							{
								"type": "disableShop",
								"id": "sabis1"
							},
							{
								"type": "exit"
							}
						]
					}
				]
			}
		],
		"levelUp": [
			{
				"need": "0",
				"title": "",
				"action": [
					{
						"type": "comment",
						"text": "此处是初始等级，只需填写称号"
					}
				]
			},
			{
				"need": "20",
				"title": "",
				"action": [
					{
						"type": "setValue",
						"name": "status:atk",
						"operator": "+=",
						"value": "10"
					},
					{
						"type": "setValue",
						"name": "status:def",
						"operator": "+=",
						"value": "10"
					}
				]
			},
			{
				"need": "40",
				"title": "",
				"action": [
					{
						"type": "tip",
						"text": "恭喜升级"
					}
				]
			}
		]
	},
	"values": {
		"lavaDamage": 100,
		"poisonDamage": 10,
		"weakValue": 20,
		"redGem": 1,
		"blueGem": 1,
		"greenGem": 1,
		"redPotion": 50,
		"bluePotion": 200,
		"yellowPotion": 800,
		"greenPotion": 3200,
		"breakArmor": 0.9,
		"counterAttack": 0.1,
		"purify": 3,
		"hatred": 2,
		"animateSpeed": 300,
		"moveSpeed": 100,
		"statusCanvasRowsOnMobile": 5,
		"floorChangeTime": 100
	},
	"flags": {
		"statusBarItems": [
			"enableFloor",
			"enableLv",
			"enableHP",
			"enableMana",
			"enableAtk",
			"enableDef",
			"enableMDef",
			"enableMoney",
			"enableKeys",
			"enablePZF",
			"enableSkill"
		],
		"autoScale": true,
		"extendToolbar": false,
		"flyNearStair": true,
		"flyRecordPosition": false,
		"itemFirstText": false,
		"equipboxButton": false,
		"enableAddPoint": false,
		"enableNegativeDamage": false,
		"betweenAttackMax": false,
		"useLoop": true,
		"startUsingCanvas": false,
		"statusCanvas": false,
		"enableEnemyPoint": true,
		"enableGentleClick": true,
		"ignoreChangeFloor": true,
		"canGoDeadZone": false,
		"enableMoveDirectly": true,
		"enableRouteFolding": true,
		"disableShopOnDamage": false,
		"blurFg": false,
		"hideLeftStatusBar": false
	}
}