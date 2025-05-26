var events_c12a15a8_c380_4b28_8144_256cba95f760 = 
{
	"commonEvent": {
		"加点事件": [],
		"回收钥匙商店": [
			{
				"type": "comment",
				"text": "此事件在全局商店中被引用了(全局商店keyShop)"
			},
			{
				"type": "comment",
				"text": "解除引用前勿删除此事件"
			},
			{
				"type": "comment",
				"text": "玩家在快捷列表（V键）中可以使用本公共事件"
			},
			{
				"type": "while",
				"condition": "1",
				"data": [
					{
						"type": "choices",
						"text": "\t[商人,trader]你有多余的钥匙想要出售吗？",
						"choices": [
							{
								"text": "黄钥匙（10金币）",
								"color": [
									255,
									255,
									0,
									1
								],
								"action": [
									{
										"type": "if",
										"condition": "item:yellowKey >= 1",
										"true": [
											{
												"type": "setValue",
												"name": "item:yellowKey",
												"operator": "-=",
												"value": "1"
											},
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "+=",
												"value": "10"
											}
										],
										"false": [
											"\t[商人,trader]你没有黄钥匙！"
										]
									}
								]
							},
							{
								"text": "蓝钥匙（50金币）",
								"color": [
									0,
									0,
									255,
									1
								],
								"action": [
									{
										"type": "if",
										"condition": "item:blueKey >= 1",
										"true": [
											{
												"type": "setValue",
												"name": "item:blueKey",
												"operator": "-=",
												"value": "1"
											},
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "+=",
												"value": "50"
											}
										],
										"false": [
											"\t[商人,trader]你没有蓝钥匙！"
										]
									}
								]
							},
							{
								"text": "离开",
								"action": [
									{
										"type": "exit"
									}
								]
							}
						]
					}
				]
			}
		],
		"商店事件": [
			{
				"type": "if",
				"condition": "(flag:KaimonoTimes==0)",
				"true": [
					{
						"type": "setValue",
						"name": "flag:KaimonoTimes",
						"value": "1"
					}
				]
			},
			{
				"type": "setValue",
				"name": "flag:KaimonoCost",
				"value": "20+10*flag:KaimonoTimes*(flag:KaimonoTimes-1)"
			},
			{
				"type": "choices",
				"text": "\t[祭坛,moneyShop]如果供奉${flag:KaimonoCost}金币, 便可以增加你的力量, 你想要什么呢…",
				"choices": [
					{
						"text": "生命+${100*flag:KaimonoTimes}",
						"action": [
							{
								"type": "if",
								"condition": "(status:money>=flag:KaimonoCost)",
								"true": [
									{
										"type": "setValue",
										"name": "status:money",
										"operator": "-=",
										"value": "flag:KaimonoCost"
									},
									{
										"type": "setValue",
										"name": "status:hp",
										"operator": "+=",
										"value": "100*flag:KaimonoTimes"
									},
									{
										"type": "setValue",
										"name": "flag:KaimonoTimes",
										"operator": "+=",
										"value": "1"
									},
									{
										"type": "insert",
										"name": "商店事件"
									}
								],
								"false": [
									"\t[祭坛,moneyShop]你的金币不足！",
									{
										"type": "exit"
									}
								]
							}
						]
					},
					{
						"text": "攻击+${2*flag:KaimonoLevel}",
						"action": [
							{
								"type": "if",
								"condition": "(status:money>=flag:KaimonoCost)",
								"true": [
									{
										"type": "setValue",
										"name": "status:money",
										"operator": "-=",
										"value": "flag:KaimonoCost"
									},
									{
										"type": "setValue",
										"name": "status:atk",
										"operator": "+=",
										"value": "2*flag:KaimonoLevel"
									},
									{
										"type": "setValue",
										"name": "flag:KaimonoTimes",
										"operator": "+=",
										"value": "1"
									},
									{
										"type": "insert",
										"name": "商店事件"
									}
								],
								"false": [
									"\t[祭坛,moneyShop]你的金币不足！",
									{
										"type": "exit"
									}
								]
							}
						]
					},
					{
						"text": "防御+${4*flag:KaimonoLevel}",
						"action": [
							{
								"type": "if",
								"condition": "(status:money>=flag:KaimonoCost)",
								"true": [
									{
										"type": "setValue",
										"name": "status:money",
										"operator": "-=",
										"value": "flag:KaimonoCost"
									},
									{
										"type": "setValue",
										"name": "status:def",
										"operator": "+=",
										"value": "4*flag:KaimonoLevel"
									},
									{
										"type": "setValue",
										"name": "flag:KaimonoTimes",
										"operator": "+=",
										"value": "1"
									},
									{
										"type": "insert",
										"name": "商店事件"
									}
								],
								"false": [
									"\t[祭坛,moneyShop]你的金币不足！",
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
		],
		"加点花费计算": [
			{
				"type": "setValue",
				"name": "flag:kaimonoCost",
				"value": "Math.floor((flag:kaimonoTimes**1.5+1)*10)"
			}
		]
	}
}