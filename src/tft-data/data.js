var data = {
    "champions": {
        "Twisted Fate": {
            "name": "Twisted Fate",
            "tier": 2,
            "classes": [
                "Sorcerer"
            ],
            "origins": [
                "Pirate"
            ],
            "maxHealthpoints": 450,
            "hpScaleFactor": 1.8,
            "maxMana": 50,
            "damage": 40,
            "damageScaleFactor": 1.25,
            "armor": 20,
            "magicResistance": 20,
            "critMultiplier": 1.5,
            "critChance": 0.25,
            "attackSpeed": 0.7,
            "range": 3,
            "specialAbility": {
                "name": "Pick a Card",
                "originalDescription": "Twisted Fate throws a card that either stuns, deals damage around his target, or restores mana to himself and nearby allies",
                "variables": [
                    {
                        "name": "Red Card Damage",
                        "values": [
                            50,
                            100,
                            150,
                            200,
                            250
                        ]
                    },
                    {
                        "name": "Blue Card Damage",
                        "values": [
                            50,
                            100,
                            150,
                            200,
                            250
                        ]
                    },
                    {
                        "name": "Blue Card Mana Restore",
                        "values": [
                            5,
                            20,
                            35,
                            50,
                            65
                        ]
                    },
                    {
                        "name": "Gold Card Stun Duration",
                        "values": [
                            1,
                            2,
                            3,
                            4,
                            5
                        ]
                    },
                    {
                        "name": "Gold Card Damage",
                        "values": [
                            50,
                            100,
                            150,
                            200,
                            250
                        ]
                    }
                ]
            },
            "icon": "TwistedFate"
        },
        "Kayle": {
            "name": "Kayle",
            "tier": 5,
            "classes": [
                "Knight"
            ],
            "origins": [
                "Noble"
            ],
            "maxHealthpoints": 800,
            "hpScaleFactor": 1.8,
            "maxMana": 100,
            "damage": 70,
            "damageScaleFactor": 1.25,
            "armor": 35,
            "magicResistance": 20,
            "critMultiplier": 1.5,
            "critChance": 0.25,
            "attackSpeed": 1.1,
            "range": 3,
            "specialAbility": {
                "name": "Divine Judgement",
                "originalDescription": "Kayle shields the weakest ally, making them immune to damage",
                "variables": [
                    {
                        "name": "Damage",
                        "values": [
                            200,
                            500,
                            800,
                            1100,
                            1400
                        ]
                    },
                    {
                        "name": "Shield Duration",
                        "values": [
                            1,
                            2,
                            3,
                            4,
                            5
                        ]
                    },
                    {
                        "name": "Extra Targets",
                        "values": [
                            -1,
                            0,
                            1,
                            2,
                            3
                        ]
                    }
                ]
            }
        },
        "Tristana": {
            "name": "Tristana",
            "tier": 1,
            "classes": [
                "Gunslinger"
            ],
            "origins": [
                "Yordle"
            ],
            "maxHealthpoints": 500,
            "hpScaleFactor": 1.8,
            "maxMana": 50,
            "damage": 50,
            "damageScaleFactor": 1.25,
            "armor": 20,
            "magicResistance": 20,
            "critMultiplier": 1.5,
            "critChance": 0.25,
            "attackSpeed": 0.7,
            "range": 4,
            "specialAbility": {
                "name": "Explosive Charge",
                "originalDescription": "Tristana places a bomb on her current target that detonates after 3 attacks, damaging nearby enemies",
                "variables": [
                    {
                        "name": "Explosive Charge Duration",
                        "values": [
                            4,
                            4,
                            4,
                            4,
                            4
                        ]
                    },
                    {
                        "name": "Charge Base Damage",
                        "values": [
                            30,
                            60,
                            90,
                            120,
                            150
                        ]
                    },
                    {
                        "name": "Percent Damage Increase Per Stack",
                        "values": [
                            0.5,
                            0.5,
                            0.5,
                            0.5,
                            0.5
                        ]
                    }
                ]
            }
        },
        "Warwick": {
            "name": "Warwick",
            "tier": 1,
            "classes": [
                "Brawler"
            ],
            "origins": [
                "Wild"
            ],
            "maxHealthpoints": 600,
            "hpScaleFactor": 1.8,
            "maxMana": 150,
            "damage": 50,
            "damageScaleFactor": 1.25,
            "armor": 30,
            "magicResistance": 20,
            "critMultiplier": 1.5,
            "critChance": 0.25,
            "attackSpeed": 0.6,
            "range": 1,
            "specialAbility": {
                "name": "Infinite Duress",
                "originalDescription": "Warwick pounces onto the lowest health enemy, stunning them for 1.5/1.5/1.5s, damaging them, and healing himself. Applies on-hit effects.",
                "variables": [
                    {
                        "name": "Duration",
                        "values": [
                            1.5,
                            1.5,
                            1.5,
                            1.5,
                            1.5
                        ]
                    },
                    {
                        "name": "Base Damage",
                        "values": [
                            75,
                            150,
                            225,
                            300,
                            375
                        ]
                    },
                    {
                        "name": "Dash Hex Speed",
                        "values": [
                            6,
                            6,
                            6,
                            6,
                            6
                        ]
                    },
                    {
                        "name": "Hits",
                        "values": [
                            3,
                            3,
                            3,
                            3,
                            3
                        ]
                    }
                ]
            }
        },
        "Miss Fortune": {
            "name": "Miss Fortune",
            "tier": 5,
            "classes": [
                "Gunslinger"
            ],
            "origins": [
                "Pirate"
            ],
            "maxHealthpoints": 650,
            "hpScaleFactor": 1.8,
            "maxMana": 100,
            "damage": 75,
            "damageScaleFactor": 1.25,
            "armor": 20,
            "magicResistance": 20,
            "critMultiplier": 1.5,
            "critChance": 0.25,
            "attackSpeed": 0.85,
            "range": 3,
            "specialAbility": {
                "name": "Bullet Time",
                "originalDescription": "Miss Fortune channels for 3/3/3s, firing several waves of bullets damaging enemies in a cone",
                "variables": [
                    {
                        "name": "Waves",
                        "values": [
                            14,
                            14,
                            14,
                            14,
                            14
                        ]
                    },
                    {
                        "name": "Total Damage",
                        "values": [
                            350,
                            800,
                            1250,
                            1700,
                            2150
                        ]
                    },
                    {
                        "name": "Channel Duration",
                        "values": [
                            3,
                            3,
                            3,
                            3,
                            3
                        ]
                    }
                ]
            },
            "icon": "MissFortune"
        },
        "Ashe": {
            "name": "Ashe",
            "tier": 3,
            "classes": [
                "Ranger"
            ],
            "origins": [
                "Glacial"
            ],
            "maxHealthpoints": 550,
            "hpScaleFactor": 1.8,
            "maxMana": 100,
            "damage": 60,
            "damageScaleFactor": 1.25,
            "armor": 20,
            "magicResistance": 20,
            "critMultiplier": 1.5,
            "critChance": 0.25,
            "attackSpeed": 0.7,
            "range": 4,
            "specialAbility": {
                "name": "Enchanted Crystal Arrow",
                "originalDescription": "Ashe fires an arrow that stuns and damages the farthest enemy. The stun is longer the farther the enemy",
                "variables": [
                    {
                        "name": "Damage",
                        "values": [
                            0,
                            200,
                            400,
                            600,
                            800
                        ]
                    },
                    {
                        "name": "Stun Duration Per Square",
                        "values": [
                            0.5,
                            1,
                            1.5,
                            2,
                            2.5
                        ]
                    }
                ]
            }
        },
        "Morgana": {
            "name": "Morgana",
            "tier": 3,
            "classes": [
                "Sorcerer"
            ],
            "origins": [
                "Demon"
            ],
            "maxHealthpoints": 650,
            "hpScaleFactor": 1.8,
            "maxMana": 150,
            "damage": 50,
            "damageScaleFactor": 1.25,
            "armor": 20,
            "magicResistance": 20,
            "critMultiplier": 1.5,
            "critChance": 0.25,
            "attackSpeed": 0.6,
            "range": 2,
            "specialAbility": {
                "name": "Soul Shackles",
                "originalDescription": "Morgana fires chains to nearby enemies, dealing damage and stunning after a short delay if they are still nearby",
                "variables": [
                    {
                        "name": "Damage",
                        "values": [
                            225,
                            300,
                            375,
                            450,
                            525
                        ]
                    },
                    {
                        "name": "Chain Duration",
                        "values": [
                            3,
                            3,
                            3,
                            3,
                            3
                        ]
                    },
                    {
                        "name": "Stun Duration",
                        "values": [
                            0,
                            2,
                            4,
                            6,
                            8
                        ]
                    },
                    {
                        "name": "Slow Percent",
                        "values": [
                            20,
                            20,
                            20,
                            20,
                            20
                        ]
                    },
                    {
                        "name": "Can Cast Range",
                        "values": [
                            575,
                            575,
                            575,
                            575,
                            575
                        ]
                    }
                ]
            }
        },
        "Evelynn": {
            "name": "Evelynn",
            "tier": 3,
            "classes": [
                "Assassin"
            ],
            "origins": [
                "Demon"
            ],
            "maxHealthpoints": 600,
            "hpScaleFactor": 1.8,
            "maxMana": 75,
            "damage": 50,
            "damageScaleFactor": 1.25,
            "armor": 20,
            "magicResistance": 20,
            "critMultiplier": 1.5,
            "critChance": 0.25,
            "attackSpeed": 0.6,
            "range": 1,
            "specialAbility": {
                "name": "Last Caress",
                "originalDescription": "Evelynn deals damage to the 3 closest enemies and teleports away. Damage is increased against low health enemies",
                "variables": [
                    {
                        "name": "Crit Multiplieriplier",
                        "values": [
                            1,
                            3,
                            5,
                            7,
                            9
                        ]
                    },
                    {
                        "name": "Crit Threshold",
                        "values": [
                            0.65,
                            0.65,
                            0.65,
                            0.65,
                            0.65
                        ]
                    },
                    {
                        "name": "Damage",
                        "values": [
                            150,
                            200,
                            250,
                            300,
                            350
                        ]
                    },
                    {
                        "name": "Blink Back Distance",
                        "values": [
                            3,
                            3,
                            3,
                            3,
                            3
                        ]
                    }
                ]
            }
        },
        "Karthus": {
            "name": "Karthus",
            "tier": 5,
            "classes": [
                "Sorcerer"
            ],
            "origins": [
                "Phantom"
            ],
            "maxHealthpoints": 850,
            "hpScaleFactor": 1.8,
            "maxMana": 85,
            "damage": 65,
            "damageScaleFactor": 1.25,
            "armor": 25,
            "magicResistance": 20,
            "critMultiplier": 1.5,
            "critChance": 0.25,
            "attackSpeed": 0.65,
            "range": 3,
            "specialAbility": {
                "name": "Requiem",
                "originalDescription": "Karthus deals damage to 4/7/10 random enemies after a long channel",
                "variables": [
                    {
                        "name": "Damage",
                        "values": [
                            100,
                            350,
                            600,
                            850,
                            1100
                        ]
                    },
                    {
                        "name": "Number Of Targets",
                        "values": [
                            1,
                            4,
                            7,
                            10,
                            13
                        ]
                    }
                ]
            }
        },
        "Cho'Gath": {
            "name": "Cho'Gath",
            "tier": 4,
            "classes": [
                "Brawler"
            ],
            "origins": [
                "Void"
            ],
            "maxHealthpoints": 1000,
            "hpScaleFactor": 1.8,
            "maxMana": 150,
            "damage": 70,
            "damageScaleFactor": 1.25,
            "armor": 20,
            "magicResistance": 20,
            "critMultiplier": 1.5,
            "critChance": 0.25,
            "attackSpeed": 0.55,
            "range": 1,
            "specialAbility": {
                "name": "Rupture",
                "originalDescription": "Cho'gath ruptures an area, stunning and damaging enemies inside of it",
                "variables": [
                    {
                        "name": "Damage",
                        "values": [
                            0,
                            200,
                            400,
                            600,
                            800
                        ]
                    },
                    {
                        "name": "Knock Duration",
                        "values": [
                            1,
                            1.5,
                            2,
                            2.5,
                            3
                        ]
                    },
                    {
                        "name": "Rupture Delay",
                        "values": [
                            1.5,
                            1.5,
                            1.5,
                            1.5,
                            1.5
                        ]
                    }
                ]
            },
            "icon": "Chogath"
        },
        "Anivia": {
            "name": "Anivia",
            "tier": 5,
            "classes": [
                "Elementalist"
            ],
            "origins": [
                "Glacial"
            ],
            "maxHealthpoints": 650,
            "hpScaleFactor": 1.8,
            "maxMana": 100,
            "damage": 40,
            "damageScaleFactor": 1.25,
            "armor": 20,
            "magicResistance": 20,
            "critMultiplier": 1.5,
            "critChance": 0.25,
            "attackSpeed": 0.6,
            "range": 3,
            "specialAbility": {
                "name": "Glacial Storm",
                "originalDescription": "Anivia channels a large hailstorm, damaging and slowing the attack speed of enemies inside of it",
                "variables": [
                    {
                        "name": "Total Damage",
                        "values": [
                            450,
                            700,
                            950,
                            1200,
                            1450
                        ]
                    },
                    {
                        "name": "Attack Speed Slow",
                        "values": [
                            30,
                            50,
                            70,
                            90,
                            110
                        ]
                    },
                    {
                        "name": "Storm Duration",
                        "values": [
                            8,
                            8,
                            8,
                            8,
                            8
                        ]
                    }
                ]
            }
        },
        "Kassadin": {
            "name": "Kassadin",
            "tier": 1,
            "classes": [
                "Sorcerer"
            ],
            "origins": [
                "Void"
            ],
            "maxHealthpoints": 550,
            "hpScaleFactor": 1.8,
            "maxMana": 0,
            "damage": 45,
            "damageScaleFactor": 1.25,
            "armor": 25,
            "magicResistance": 20,
            "critMultiplier": 1.5,
            "critChance": 0.25,
            "attackSpeed": 0.65,
            "range": 1,
            "specialAbility": {
                "name": "Nether Blade",
                "originalDescription": "Kassadin's attacks steal mana from enemies, converting it into a shield that lasts for 4/4/4s",
                "variables": [
                    {
                        "name": "Shield Duration",
                        "values": [
                            4,
                            4,
                            4,
                            4,
                            4
                        ]
                    },
                    {
                        "name": "Mana Steal",
                        "values": [
                            0,
                            20,
                            40,
                            60,
                            80
                        ]
                    }
                ]
            }
        },
        "Gangplank": {
            "name": "Gangplank",
            "tier": 3,
            "classes": [
                "Gunslinger",
                "Blademaster"
            ],
            "origins": [
                "Pirate"
            ],
            "maxHealthpoints": 700,
            "hpScaleFactor": 1.8,
            "maxMana": 100,
            "damage": 55,
            "damageScaleFactor": 1.25,
            "armor": 20,
            "magicResistance": 20,
            "critMultiplier": 1.5,
            "critChance": 0.25,
            "attackSpeed": 0.65,
            "range": 1,
            "specialAbility": {
                "name": "Powder Kegs",
                "originalDescription": "Gangplank periodically creates barrels. On cast, Gangplank detonates the barrels, damaging nearby enemies. Applies on hit effects.",
                "variables": [
                    {
                        "name": "Damage",
                        "values": [
                            75,
                            200,
                            325,
                            450,
                            575
                        ]
                    }
                ]
            }
        },
        "Veigar": {
            "name": "Veigar",
            "tier": 3,
            "classes": [
                "Sorcerer"
            ],
            "origins": [
                "Yordle"
            ],
            "maxHealthpoints": 450,
            "hpScaleFactor": 1.8,
            "maxMana": 75,
            "damage": 45,
            "damageScaleFactor": 1.25,
            "armor": 20,
            "magicResistance": 20,
            "critMultiplier": 1.5,
            "critChance": 0.25,
            "attackSpeed": 0.55,
            "range": 3,
            "specialAbility": {
                "name": "Primordial Burst",
                "originalDescription": "Veigar blasts an enemy with magical energy, dealing damage. This spell instantly kills if the enemy is a lower star level than Veigar",
                "variables": [
                    {
                        "name": "Damage",
                        "values": [
                            100,
                            300,
                            500,
                            700,
                            900
                        ]
                    },
                    {
                        "name": "Lower Star Damage",
                        "values": [
                            19999,
                            19999,
                            19999,
                            19999,
                            19999
                        ]
                    }
                ]
            }
        },
        "Swain": {
            "name": "Swain",
            "tier": 5,
            "classes": [
                "Shapeshifter"
            ],
            "origins": [
                "Imperial",
                "Demon"
            ],
            "maxHealthpoints": 850,
            "hpScaleFactor": 1.8,
            "maxMana": 100,
            "damage": 65,
            "damageScaleFactor": 1.25,
            "armor": 25,
            "magicResistance": 20,
            "critMultiplier": 1.5,
            "critChance": 0.25,
            "attackSpeed": 0.65,
            "range": 2,
            "specialAbility": {
                "name": "Demonflare",
                "originalDescription": "Swain transforms, draining health from all nearby enemies. At the end of his transformation, Swain sends out a burst of energy dealing damage to nearby enemies",
                "variables": [
                    {
                        "name": "Transform Duration",
                        "values": [
                            6,
                            6,
                            6,
                            6,
                            6
                        ]
                    },
                    {
                        "name": "Damage Per Tick",
                        "values": [
                            0,
                            50,
                            100,
                            150,
                            200
                        ]
                    },
                    {
                        "name": "Heal Per Tick",
                        "values": [
                            10,
                            50,
                            90,
                            130,
                            170
                        ]
                    },
                    {
                        "name": "Soul Flare Damage",
                        "values": [
                            0,
                            300,
                            600,
                            900,
                            1200
                        ]
                    }
                ]
            }
        },
        "Blitzcrank": {
            "name": "Blitzcrank",
            "tier": 2,
            "classes": [
                "Brawler"
            ],
            "origins": [
                "Robot"
            ],
            "maxHealthpoints": 600,
            "hpScaleFactor": 1.8,
            "maxMana": 150,
            "damage": 50,
            "damageScaleFactor": 1.25,
            "armor": 35,
            "magicResistance": 20,
            "critMultiplier": 1.5,
            "critChance": 0.25,
            "attackSpeed": 0.5,
            "range": 1,
            "specialAbility": {
                "name": "Rocket Grab",
                "originalDescription": "Blitzcrank pulls the furthest enemy to him and stuns them for 2.5/2.5/2.5s",
                "variables": [
                    {
                        "name": "Damage",
                        "values": [
                            -250,
                            100,
                            450,
                            800,
                            1150
                        ]
                    },
                    {
                        "name": "Stun Duration",
                        "values": [
                            2.5,
                            2.5,
                            2.5,
                            2.5,
                            2.5
                        ]
                    }
                ]
            }
        },
        "Katarina": {
            "name": "Katarina",
            "tier": 3,
            "classes": [
                "Assassin"
            ],
            "origins": [
                "Imperial"
            ],
            "maxHealthpoints": 450,
            "hpScaleFactor": 1.8,
            "maxMana": 100,
            "damage": 50,
            "damageScaleFactor": 1.25,
            "armor": 20,
            "magicResistance": 20,
            "critMultiplier": 1.5,
            "critChance": 0.25,
            "attackSpeed": 0.65,
            "range": 1,
            "specialAbility": {
                "name": "Death Lotus",
                "originalDescription": "Katarina channels for 2.5/2.5/2.5s and fires daggers at 3/5/7 nearby enemies, dealing damage and reducing healing",
                "variables": [
                    {
                        "name": "Damage Per Tick",
                        "values": [
                            20,
                            40,
                            60,
                            80,
                            100
                        ]
                    },
                    {
                        "name": "Ticks Per Second",
                        "values": [
                            6,
                            6,
                            6,
                            6,
                            6
                        ]
                    },
                    {
                        "name": "Duration",
                        "values": [
                            2.5,
                            2.5,
                            2.5,
                            2.5,
                            2.5
                        ]
                    },
                    {
                        "name": "Grievous Wounds Duration",
                        "values": [
                            3,
                            3,
                            3,
                            3,
                            3
                        ]
                    },
                    {
                        "name": "Number Of Targets",
                        "values": [
                            1,
                            3,
                            5,
                            7,
                            9
                        ]
                    }
                ]
            }
        },
        "Elise": {
            "name": "Elise",
            "tier": 1,
            "classes": [
                "Shapeshifter"
            ],
            "origins": [
                "Demon"
            ],
            "maxHealthpoints": 450,
            "hpScaleFactor": 1.8,
            "maxMana": 100,
            "damage": 40,
            "damageScaleFactor": 1.25,
            "armor": 20,
            "magicResistance": 20,
            "critMultiplier": 1.5,
            "critChance": 0.25,
            "attackSpeed": 0.6,
            "range": 2,
            "specialAbility": {
                "name": "Spider Form",
                "originalDescription": "Elise summons Spiderlings and transforms, gaining Lifesteal",
                "variables": [
                    {
                        "name": "Number of Spiderlings",
                        "values": [
                            1,
                            1,
                            2,
                            4,
                            5
                        ]
                    },
                    {
                        "name": "Lifesteal",
                        "values": [
                            0.3,
                            0.6,
                            0.9,
                            1.2,
                            1.5
                        ]
                    },
                    {
                        "name": "Spider Form Duration",
                        "values": [
                            60,
                            60,
                            60,
                            60,
                            60
                        ]
                    }
                ]
            }
        },
        "Brand": {
            "name": "Brand",
            "tier": 4,
            "classes": [
                "Elementalist"
            ],
            "origins": [
                "Demon"
            ],
            "maxHealthpoints": 700,
            "hpScaleFactor": 1.8,
            "maxMana": 125,
            "damage": 60,
            "damageScaleFactor": 1.25,
            "armor": 25,
            "magicResistance": 20,
            "critMultiplier": 1.5,
            "critChance": 0.25,
            "attackSpeed": 0.6,
            "range": 3,
            "specialAbility": {
                "name": "Pyroclasm",
                "originalDescription": "Brand launches a bouncing fireball, damaging enemies hit",
                "variables": [
                    {
                        "name": "Damage",
                        "values": [
                            25,
                            175,
                            325,
                            475,
                            625
                        ]
                    },
                    {
                        "name": "Max Bounces",
                        "values": [
                            4,
                            4,
                            6,
                            20,
                            20
                        ]
                    }
                ]
            }
        },
        "Vayne": {
            "name": "Vayne",
            "tier": 1,
            "classes": [
                "Ranger"
            ],
            "origins": [
                "Noble"
            ],
            "maxHealthpoints": 550,
            "hpScaleFactor": 1.8,
            "maxMana": 0,
            "damage": 45,
            "damageScaleFactor": 1.25,
            "armor": 25,
            "magicResistance": 20,
            "critMultiplier": 1.5,
            "critChance": 0.25,
            "attackSpeed": 0.65,
            "range": 3,
            "specialAbility": {
                "name": "Silver Bolts",
                "originalDescription": "Innate: Vayne deals bonus true damage every third attack based on the enemy's maximum health",
                "variables": [
                    {
                        "name": "Percent Damage",
                        "values": [
                            0.06,
                            0.08,
                            0.1,
                            0.12,
                            0.14
                        ]
                    }
                ]
            }
        },
        "Nidalee": {
            "name": "Nidalee",
            "tier": 1,
            "classes": [
                "Shapeshifter"
            ],
            "origins": [
                "Wild"
            ],
            "maxHealthpoints": 500,
            "hpScaleFactor": 1.8,
            "maxMana": 100,
            "damage": 50,
            "damageScaleFactor": 1.25,
            "armor": 20,
            "magicResistance": 20,
            "critMultiplier": 1.5,
            "critChance": 0.25,
            "attackSpeed": 0.65,
            "range": 3,
            "specialAbility": {
                "name": "Primal Surge",
                "originalDescription": "Nidalee heals herself and the weakest ally, then transforms gaining Attack Damage",
                "variables": [
                    {
                        "name": "Healing over Time Duration",
                        "values": [
                            6,
                            6,
                            6,
                            6,
                            6
                        ]
                    },
                    {
                        "name": "Healing over Time Total Heal",
                        "values": [
                            -75,
                            150,
                            375,
                            600,
                            825
                        ]
                    },
                    {
                        "name": "Attack Damage In Cougar",
                        "values": [
                            -30,
                            20,
                            70,
                            120,
                            170
                        ]
                    },
                    {
                        "name": "Transform Duration",
                        "values": [
                            60,
                            60,
                            60,
                            60,
                            60
                        ]
                    },
                    {
                        "name": "Anim Time",
                        "values": [
                            0.5,
                            0.5,
                            0.5,
                            0.5,
                            0.5
                        ]
                    }
                ]
            }
        },
        "Poppy": {
            "name": "Poppy",
            "tier": 3,
            "classes": [
                "Knight"
            ],
            "origins": [
                "Yordle"
            ],
            "maxHealthpoints": 800,
            "hpScaleFactor": 1.8,
            "maxMana": 75,
            "damage": 50,
            "damageScaleFactor": 1.25,
            "armor": 40,
            "magicResistance": 20,
            "critMultiplier": 1.5,
            "critChance": 0.25,
            "attackSpeed": 0.5,
            "range": 1,
            "specialAbility": {
                "name": "Keeper's Verdict",
                "originalDescription": "Poppy swings her hammer, damaging and knocking up the closest enemy",
                "variables": [
                    {
                        "name": "Damage Part2",
                        "values": [
                            200,
                            300,
                            400,
                            500,
                            600
                        ]
                    },
                    {
                        "name": "Knockback Duration Part2",
                        "values": [
                            1,
                            1,
                            1,
                            1,
                            1
                        ]
                    },
                    {
                        "name": "Stun Duration",
                        "values": [
                            1,
                            2,
                            3,
                            4,
                            5
                        ]
                    },
                    {
                        "name": "Poppy Anim Lock Duration",
                        "values": [
                            0.75,
                            0.75,
                            0.75,
                            0.75,
                            0.75
                        ]
                    },
                    {
                        "name": "Number Of Targets",
                        "values": [
                            0,
                            1,
                            2,
                            3,
                            4
                        ]
                    }
                ]
            }
        },
        "Mordekaiser": {
            "name": "Mordekaiser",
            "tier": 1,
            "classes": [
                "Knight"
            ],
            "origins": [
                "Phantom"
            ],
            "maxHealthpoints": 500,
            "hpScaleFactor": 1.8,
            "maxMana": 100,
            "damage": 50,
            "damageScaleFactor": 1.25,
            "armor": 35,
            "magicResistance": 20,
            "critMultiplier": 1.5,
            "critChance": 0.25,
            "attackSpeed": 0.5,
            "range": 1,
            "specialAbility": {
                "name": "Obliterate",
                "originalDescription": "Mordekaiser slams his mace in front him, dealing damage to two enemies in a line",
                "variables": [
                    {
                        "name": "Damage",
                        "values": [
                            75,
                            200,
                            325,
                            450,
                            575
                        ]
                    },
                    {
                        "name": "Mace Start Distance",
                        "values": [
                            400,
                            400,
                            400,
                            400,
                            400
                        ]
                    },
                    {
                        "name": "Mace Length",
                        "values": [
                            625,
                            625,
                            625,
                            625,
                            625
                        ]
                    },
                    {
                        "name": "Rectangle Width",
                        "values": [
                            160,
                            160,
                            160,
                            160,
                            160
                        ]
                    }
                ]
            }
        },
        "Akali": {
            "name": "Akali",
            "tier": 4,
            "classes": [
                "Assassin"
            ],
            "origins": [
                "Ninja"
            ],
            "maxHealthpoints": 700,
            "hpScaleFactor": 1.8,
            "maxMana": 25,
            "damage": 70,
            "damageScaleFactor": 1.25,
            "armor": 20,
            "magicResistance": 20,
            "critMultiplier": 1.5,
            "critChance": 0.25,
            "attackSpeed": 0.75,
            "range": 1,
            "specialAbility": {
                "name": "Five Point Strike",
                "originalDescription": "Akali throws shurikens in front of her, dealing damage. This spell can critically strike",
                "variables": [
                    {
                        "name": "Damage",
                        "values": [
                            25,
                            200,
                            375,
                            550,
                            725
                        ]
                    },
                    {
                        "name": "Cone Hex Length",
                        "values": [
                            1,
                            1,
                            1,
                            1,
                            1
                        ]
                    }
                ]
            }
        },
        "Kennen": {
            "name": "Kennen",
            "tier": 3,
            "classes": [
                "Elementalist"
            ],
            "origins": [
                "Ninja",
                "Yordle"
            ],
            "maxHealthpoints": 550,
            "hpScaleFactor": 1.8,
            "maxMana": 150,
            "damage": 70,
            "damageScaleFactor": 1.25,
            "armor": 20,
            "magicResistance": 20,
            "critMultiplier": 1.5,
            "critChance": 0.25,
            "attackSpeed": 0.65,
            "range": 2,
            "specialAbility": {
                "name": "Slicing Maelstrom",
                "originalDescription": "Kennen summons a storm around him, dealing damage and stunning enemies inside of it for 1.5/1.5/1.5s",
                "variables": [
                    {
                        "name": "Tick Rate",
                        "values": [
                            0.5,
                            0.5,
                            0.5,
                            0.5,
                            0.5
                        ]
                    },
                    {
                        "name": "Duration",
                        "values": [
                            3,
                            3,
                            3,
                            3,
                            3
                        ]
                    },
                    {
                        "name": "Damage",
                        "values": [
                            150,
                            400,
                            650,
                            900,
                            1150
                        ]
                    },
                    {
                        "name": "Stun Duration",
                        "values": [
                            1.5,
                            1.5,
                            1.5,
                            1.5,
                            1.5
                        ]
                    }
                ]
            }
        },
        "Garen": {
            "name": "Garen",
            "tier": 1,
            "classes": [
                "Knight"
            ],
            "origins": [
                "Noble"
            ],
            "maxHealthpoints": 600,
            "hpScaleFactor": 1.8,
            "maxMana": 100,
            "damage": 55,
            "damageScaleFactor": 1.25,
            "armor": 35,
            "magicResistance": 20,
            "critMultiplier": 1.5,
            "critChance": 0.25,
            "attackSpeed": 0.55,
            "range": 1,
            "specialAbility": {
                "name": "Judgement",
                "originalDescription": "Garen spins his sword around for 4/4/4s, becoming immune to magic damage and dealing damage to nearby enemies",
                "variables": [
                    {
                        "name": "Spin Duration",
                        "values": [
                            4,
                            4,
                            4,
                            4,
                            4
                        ]
                    },
                    {
                        "name": "Total Ticks",
                        "values": [
                            9,
                            9,
                            9,
                            9,
                            9
                        ]
                    },
                    {
                        "name": "Damage Per Tick",
                        "values": [
                            35,
                            50,
                            65,
                            80,
                            95
                        ]
                    }
                ]
            }
        },
        "Leona": {
            "name": "Leona",
            "tier": 4,
            "classes": [
                "Guardian"
            ],
            "origins": [
                "Noble"
            ],
            "maxHealthpoints": 750,
            "hpScaleFactor": 1.8,
            "maxMana": 100,
            "damage": 45,
            "damageScaleFactor": 1.25,
            "armor": 55,
            "magicResistance": 20,
            "critMultiplier": 1.5,
            "critChance": 0.25,
            "attackSpeed": 0.55,
            "range": 1,
            "specialAbility": {
                "name": "Solar Flare",
                "originalDescription": "Leona calls down a solar ray that damages and slows enemies inside it. The enemy in the center is stunned",
                "variables": [
                    {
                        "name": "Delay Time",
                        "values": [
                            0.625,
                            0.625,
                            0.625,
                            0.625,
                            0.625
                        ]
                    },
                    {
                        "name": "CC Duration",
                        "values": [
                            2,
                            5,
                            8,
                            11,
                            14
                        ]
                    },
                    {
                        "name": "Damage",
                        "values": [
                            100,
                            175,
                            250,
                            325,
                            400
                        ]
                    }
                ]
            }
        },
        "Shen": {
            "name": "Shen",
            "tier": 2,
            "classes": [
                "Blademaster"
            ],
            "origins": [
                "Ninja"
            ],
            "maxHealthpoints": 650,
            "hpScaleFactor": 1.8,
            "maxMana": 150,
            "damage": 65,
            "damageScaleFactor": 1.25,
            "armor": 30,
            "magicResistance": 20,
            "critMultiplier": 1.5,
            "critChance": 0.25,
            "attackSpeed": 0.6,
            "range": 1,
            "specialAbility": {
                "name": "Spirit's Refuge",
                "originalDescription": "Shen creates a zone around himself, allowing allies inside to dodge all attacks",
                "variables": [
                    {
                        "name": "Zone Duration",
                        "values": [
                            2,
                            3,
                            4,
                            5,
                            6
                        ]
                    }
                ]
            }
        },
        "Shyvana": {
            "name": "Shyvana",
            "tier": 3,
            "classes": [
                "Shapeshifter"
            ],
            "origins": [
                "Dragon"
            ],
            "maxHealthpoints": 650,
            "hpScaleFactor": 1.8,
            "maxMana": 100,
            "damage": 50,
            "damageScaleFactor": 1.25,
            "armor": 20,
            "magicResistance": 20,
            "critMultiplier": 1.5,
            "critChance": 0.25,
            "attackSpeed": 0.7,
            "range": 1,
            "specialAbility": {
                "name": "Dragon's Descent",
                "originalDescription": "Shyvana dashes and transforms, gaining Attack Damage and Attack Range. When transformed, her attacks set enemies on fire",
                "variables": [
                    {
                        "name": "Transform Duration",
                        "values": [
                            60,
                            60,
                            60,
                            60,
                            60
                        ]
                    },
                    {
                        "name": "Attack Damage While Dragon",
                        "values": [
                            50,
                            100,
                            150,
                            200,
                            250
                        ]
                    },
                    {
                        "name": "Burn Duration",
                        "values": [
                            3,
                            3,
                            3,
                            3,
                            3
                        ]
                    },
                    {
                        "name": "Burn Damage",
                        "values": [
                            125,
                            250,
                            375,
                            500,
                            625
                        ]
                    }
                ]
            }
        },
        "Ahri": {
            "name": "Ahri",
            "tier": 2,
            "classes": [
                "Sorcerer"
            ],
            "origins": [
                "Wild"
            ],
            "maxHealthpoints": 450,
            "hpScaleFactor": 1.8,
            "maxMana": 75,
            "damage": 50,
            "damageScaleFactor": 1.25,
            "armor": 20,
            "magicResistance": 20,
            "critMultiplier": 1.5,
            "critChance": 0.25,
            "attackSpeed": 0.55,
            "range": 3,
            "specialAbility": {
                "name": "Orb of Deception",
                "originalDescription": "Ahri fires an orb in a line that returns to her, damaging enemies it passes through",
                "variables": [
                    {
                        "name": "Damage",
                        "values": [
                            25,
                            100,
                            175,
                            250,
                            325
                        ]
                    }
                ]
            }
        },
        "Graves": {
            "name": "Graves",
            "tier": 1,
            "classes": [
                "Gunslinger"
            ],
            "origins": [
                "Pirate"
            ],
            "maxHealthpoints": 450,
            "hpScaleFactor": 1.8,
            "maxMana": 0,
            "damage": 55,
            "damageScaleFactor": 1.25,
            "armor": 20,
            "magicResistance": 20,
            "critMultiplier": 1.5,
            "critChance": 0.25,
            "attackSpeed": 0.5,
            "range": 1,
            "specialAbility": {
                "name": "Buckshot",
                "originalDescription": "Innate: Graves' attacks deal increased damage and hit all enemies in front of him",
                "variables": [
                    {
                        "name": "Damage Multiplieriplier",
                        "values": [
                            0,
                            0.05,
                            0.1,
                            0.15,
                            0.2
                        ]
                    }
                ]
            }
        },
        "Volibear": {
            "name": "Volibear",
            "tier": 3,
            "classes": [
                "Brawler"
            ],
            "origins": [
                "Glacial"
            ],
            "maxHealthpoints": 700,
            "hpScaleFactor": 1.8,
            "maxMana": 75,
            "damage": 75,
            "damageScaleFactor": 1.25,
            "armor": 35,
            "magicResistance": 20,
            "critMultiplier": 1.5,
            "critChance": 0.25,
            "attackSpeed": 0.65,
            "range": 1,
            "specialAbility": {
                "name": "Thunder Claws",
                "originalDescription": "Volibear empowers his attacks to chain between enemies, applying on-hit effects",
                "variables": [
                    {
                        "name": "Buff Duration",
                        "values": [
                            20,
                            20,
                            20,
                            20,
                            20
                        ]
                    },
                    {
                        "name": "Max Bounces",
                        "values": [
                            1,
                            2,
                            3,
                            4,
                            5
                        ]
                    },
                    {
                        "name": "Chain Attack Damage Multiplier",
                        "values": [
                            0.7,
                            0.8,
                            0.9,
                            1,
                            1.1
                        ]
                    },
                    {
                        "name": "Size Increase",
                        "values": [
                            0.08,
                            0.08,
                            0.08,
                            0.08,
                            0.08
                        ]
                    },
                    {
                        "name": "Hex Range",
                        "values": [
                            1,
                            1,
                            1,
                            1,
                            1
                        ]
                    }
                ]
            }
        },
        "Rengar": {
            "name": "Rengar",
            "tier": 3,
            "classes": [
                "Assassin"
            ],
            "origins": [
                "Wild"
            ],
            "maxHealthpoints": 550,
            "hpScaleFactor": 1.8,
            "maxMana": 75,
            "damage": 55,
            "damageScaleFactor": 1.25,
            "armor": 20,
            "magicResistance": 20,
            "critMultiplier": 1.5,
            "critChance": 0.25,
            "attackSpeed": 0.55,
            "range": 1,
            "specialAbility": {
                "name": "Savagery",
                "originalDescription": "Rengar leaps to the lowest health enemy and stabs them for bonus on-hit damage. After dealing damage, Rengar gains Attack Speed and @CritBuff*100@% Critical Strike Chance",
                "variables": [
                    {
                        "name": "Attack Damage Multiplier",
                        "values": [
                            1,
                            2,
                            3,
                            4,
                            5
                        ]
                    },
                    {
                        "name": "Attackspeed Buff",
                        "values": [
                            0.1,
                            0.3,
                            0.5,
                            0.7,
                            0.9
                        ]
                    },
                    {
                        "name": "Crit Buff",
                        "values": [
                            0.25,
                            0.25,
                            0.25,
                            0.25,
                            0.25
                        ]
                    },
                    {
                        "name": "Buff Duration",
                        "values": [
                            6,
                            6,
                            6,
                            6,
                            6
                        ]
                    }
                ]
            }
        },
        "Varus": {
            "name": "Varus",
            "tier": 2,
            "classes": [
                "Ranger"
            ],
            "origins": [
                "Demon"
            ],
            "maxHealthpoints": 500,
            "hpScaleFactor": 1.8,
            "maxMana": 75,
            "damage": 50,
            "damageScaleFactor": 1.25,
            "armor": 25,
            "magicResistance": 20,
            "critMultiplier": 1.5,
            "critChance": 0.25,
            "attackSpeed": 0.7,
            "range": 4,
            "specialAbility": {
                "name": "Piercing Arrow",
                "originalDescription": "Varus charges and fires an arrow, dealing damage to all enemies in a line",
                "variables": [
                    {
                        "name": "Damage",
                        "values": [
                            200,
                            400,
                            600,
                            800,
                            1000
                        ]
                    },
                    {
                        "name": "Hex Range",
                        "values": [
                            8,
                            8,
                            8,
                            8,
                            8
                        ]
                    }
                ]
            }
        },
        "Sejuani": {
            "name": "Sejuani",
            "tier": 4,
            "classes": [
                "Knight"
            ],
            "origins": [
                "Glacial"
            ],
            "maxHealthpoints": 850,
            "hpScaleFactor": 1.8,
            "maxMana": 150,
            "damage": 45,
            "damageScaleFactor": 1.25,
            "armor": 35,
            "magicResistance": 20,
            "critMultiplier": 1.5,
            "critChance": 0.25,
            "attackSpeed": 0.55,
            "range": 1,
            "specialAbility": {
                "name": "Glacial Prison",
                "originalDescription": "Sejuani creates a large glacial storm, stunning enemies within it after a short delay",
                "variables": [
                    {
                        "name": "Explosion Delay",
                        "values": [
                            0,
                            2,
                            2,
                            2,
                            2
                        ]
                    },
                    {
                        "name": "Damage",
                        "values": [
                            25,
                            100,
                            175,
                            250,
                            325
                        ]
                    },
                    {
                        "name": "Stun Duration",
                        "values": [
                            0.5,
                            2,
                            3.5,
                            5,
                            6.5
                        ]
                    }
                ]
            }
        },
        "Fiora": {
            "name": "Fiora",
            "tier": 1,
            "classes": [
                "Blademaster"
            ],
            "origins": [
                "Noble"
            ],
            "maxHealthpoints": 400,
            "hpScaleFactor": 1.8,
            "maxMana": 75,
            "damage": 40,
            "damageScaleFactor": 1.25,
            "armor": 25,
            "magicResistance": 20,
            "critMultiplier": 1.5,
            "critChance": 0.25,
            "attackSpeed": 1,
            "range": 1,
            "specialAbility": {
                "name": "Riposte",
                "originalDescription": "Fiora becomes immune to damage and spells. After a short delay, she stuns and damages the closest enemy",
                "variables": [
                    {
                        "name": "Damage",
                        "values": [
                            -50,
                            100,
                            250,
                            400,
                            550
                        ]
                    },
                    {
                        "name": "Stun Duration",
                        "values": [
                            1.5,
                            1.5,
                            1.5,
                            1.5,
                            1.5
                        ]
                    },
                    {
                        "name": "Block Duration",
                        "values": [
                            1.5,
                            1.5,
                            1.5,
                            1.5,
                            1.5
                        ]
                    }
                ]
            }
        },
        "Lulu": {
            "name": "Lulu",
            "tier": 2,
            "classes": [
                "Sorcerer"
            ],
            "origins": [
                "Yordle"
            ],
            "maxHealthpoints": 500,
            "hpScaleFactor": 1.8,
            "maxMana": 150,
            "damage": 50,
            "damageScaleFactor": 1.25,
            "armor": 25,
            "magicResistance": 20,
            "critMultiplier": 1.5,
            "critChance": 0.25,
            "attackSpeed": 0.6,
            "range": 2,
            "specialAbility": {
                "name": "Wild Growth",
                "originalDescription": "Lulu grants an ally bonus Health, knocking up enemies near them for 1.25/1.25/1.25s",
                "variables": [
                    {
                        "name": "Bonus Health",
                        "values": [
                            125,
                            300,
                            475,
                            650,
                            825
                        ]
                    },
                    {
                        "name": "Extra Targets",
                        "values": [
                            -1,
                            0,
                            1,
                            2,
                            3
                        ]
                    },
                    {
                        "name": "Buff Duration",
                        "values": [
                            6,
                            6,
                            6,
                            6,
                            6
                        ]
                    },
                    {
                        "name": "CC Duration",
                        "values": [
                            1.25,
                            1.25,
                            1.25,
                            1.25,
                            1.25
                        ]
                    }
                ]
            }
        },
        "Draven": {
            "name": "Draven",
            "tier": 4,
            "classes": [
                "Blademaster"
            ],
            "origins": [
                "Imperial"
            ],
            "maxHealthpoints": 700,
            "hpScaleFactor": 1.8,
            "maxMana": 50,
            "damage": 75,
            "damageScaleFactor": 1.25,
            "armor": 25,
            "magicResistance": 20,
            "critMultiplier": 1.5,
            "critChance": 0.25,
            "attackSpeed": 0.75,
            "range": 3,
            "specialAbility": {
                "name": "Spinning Axes",
                "originalDescription": "Draven gains Spinning Axes, dealing bonus on-hit damage. Stacks up to two times",
                "variables": [
                    {
                        "name": "Buff Duration",
                        "values": [
                            5.75,
                            5.75,
                            5.75,
                            5.75,
                            5.75
                        ]
                    },
                    {
                        "name": "Attack Damage Multiplier",
                        "values": [
                            1,
                            1.5,
                            2,
                            2.5,
                            3
                        ]
                    },
                    {
                        "name": "Attackspeed Buff",
                        "values": [
                            1,
                            1,
                            1,
                            1,
                            1
                        ]
                    }
                ]
            }
        },
        "Kha'Zix": {
            "name": "Kha'Zix",
            "tier": 1,
            "classes": [
                "Assassin"
            ],
            "origins": [
                "Void"
            ],
            "maxHealthpoints": 500,
            "hpScaleFactor": 1.8,
            "maxMana": 50,
            "damage": 50,
            "damageScaleFactor": 1.25,
            "armor": 20,
            "magicResistance": 20,
            "critMultiplier": 1.5,
            "critChance": 0.25,
            "attackSpeed": 0.6,
            "range": 1,
            "specialAbility": {
                "name": "Taste their Fear",
                "originalDescription": "Kha'Zix slashes the closest enemy, dealing bonus damage to enemies that are alone",
                "variables": [
                    {
                        "name": "Damage",
                        "values": [
                            50,
                            150,
                            250,
                            350,
                            450
                        ]
                    },
                    {
                        "name": "Isolation Damage",
                        "values": [
                            200,
                            400,
                            600,
                            800,
                            1000
                        ]
                    }
                ]
            },
            "icon": "Khazix"
        },
        "Darius": {
            "name": "Darius",
            "tier": 1,
            "classes": [
                "Knight"
            ],
            "origins": [
                "Imperial"
            ],
            "maxHealthpoints": 600,
            "hpScaleFactor": 1.8,
            "maxMana": 100,
            "damage": 50,
            "damageScaleFactor": 1.25,
            "armor": 25,
            "magicResistance": 20,
            "critMultiplier": 1.5,
            "critChance": 0.25,
            "attackSpeed": 0.5,
            "range": 1,
            "specialAbility": {
                "name": "Decimate",
                "originalDescription": "Darius swings his axe, damaging nearby enemies and healing himself based off enemies hit",
                "variables": [
                    {
                        "name": "Damage",
                        "values": [
                            100,
                            150,
                            200,
                            250,
                            300
                        ]
                    },
                    {
                        "name": "Heal",
                        "values": [
                            50,
                            100,
                            150,
                            200,
                            250
                        ]
                    }
                ]
            }
        },
        "Lissandra": {
            "name": "Lissandra",
            "tier": 2,
            "classes": [
                "Elementalist"
            ],
            "origins": [
                "Glacial"
            ],
            "maxHealthpoints": 450,
            "hpScaleFactor": 1.8,
            "maxMana": 150,
            "damage": 40,
            "damageScaleFactor": 1.25,
            "armor": 20,
            "magicResistance": 20,
            "critMultiplier": 1.5,
            "critChance": 0.25,
            "attackSpeed": 0.6,
            "range": 2,
            "specialAbility": {
                "name": "Frozen Tomb",
                "originalDescription": "Lissandra encases the target in ice for 1.5/1.5/1.5s, dealing damage to nearby enemies. Below half HP, Lissandra instead encases herself, becoming untargetable for 2/2/2s",
                "variables": [
                    {
                        "name": "Enemy Stun Duration",
                        "values": [
                            1.5,
                            1.5,
                            1.5,
                            1.5,
                            1.5
                        ]
                    },
                    {
                        "name": "Self Duration",
                        "values": [
                            2,
                            2,
                            2,
                            2,
                            2
                        ]
                    },
                    {
                        "name": "Damage",
                        "values": [
                            100,
                            150,
                            200,
                            250,
                            300
                        ]
                    },
                    {
                        "name": "Slow Duration",
                        "values": [
                            3,
                            3,
                            3,
                            3,
                            3
                        ]
                    },
                    {
                        "name": "Slow Amount",
                        "values": [
                            2,
                            2,
                            2,
                            2,
                            2
                        ]
                    },
                    {
                        "name": "Slow Field Duration",
                        "values": [
                            0,
                            3,
                            3,
                            3,
                            3
                        ]
                    },
                    {
                        "name": "Max Hex Range",
                        "values": [
                            3,
                            3,
                            3,
                            3,
                            3
                        ]
                    },
                    {
                        "name": "Self Ult Health Percent",
                        "values": [
                            0.5,
                            0.5,
                            0.5,
                            0.5,
                            0.5
                        ]
                    }
                ]
            }
        },
        "Aurelion Sol": {
            "name": "Aurelion Sol",
            "tier": 4,
            "classes": [
                "Sorcerer"
            ],
            "origins": [
                "Dragon"
            ],
            "maxHealthpoints": 600,
            "hpScaleFactor": 1.8,
            "maxMana": 125,
            "damage": 40,
            "damageScaleFactor": 1.25,
            "armor": 20,
            "magicResistance": 20,
            "critMultiplier": 1.5,
            "critChance": 0.25,
            "attackSpeed": 0.6,
            "range": 3,
            "specialAbility": {
                "name": "Voice of Light",
                "originalDescription": "Aurelion Sol breathes a large blast of fire in a line, dealing damage to enemies",
                "variables": [
                    {
                        "name": "Damage",
                        "values": [
                            50,
                            250,
                            450,
                            650,
                            850
                        ]
                    }
                ]
            },
            "icon": "AurelionSol"
        },
        "Gnar": {
            "name": "Gnar",
            "tier": 4,
            "classes": [
                "Shapeshifter"
            ],
            "origins": [
                "Wild",
                "Yordle"
            ],
            "maxHealthpoints": 750,
            "hpScaleFactor": 1.8,
            "maxMana": 125,
            "damage": 45,
            "damageScaleFactor": 1.25,
            "armor": 30,
            "magicResistance": 20,
            "critMultiplier": 1.5,
            "critChance": 0.25,
            "attackSpeed": 0.7,
            "range": 2,
            "specialAbility": {
                "name": "GNAR!",
                "originalDescription": "Gnar transforms, gains health, and jumps behind the furthest enemy, damaging and shoving enemies backwards",
                "variables": [
                    {
                        "name": "Damage",
                        "values": [
                            100,
                            200,
                            300,
                            400,
                            500
                        ]
                    },
                    {
                        "name": "CC Duration",
                        "values": [
                            2,
                            2,
                            2,
                            2,
                            2
                        ]
                    },
                    {
                        "name": "Knockback Distance",
                        "values": [
                            500,
                            500,
                            500,
                            500,
                            500
                        ]
                    },
                    {
                        "name": "Transform Duration",
                        "values": [
                            60,
                            60,
                            60,
                            60,
                            60
                        ]
                    },
                    {
                        "name": "Transform Health",
                        "values": [
                            0,
                            300,
                            600,
                            900,
                            1200
                        ]
                    },
                    {
                        "name": "Transform Attack Damage",
                        "values": [
                            0,
                            30,
                            60,
                            90,
                            120
                        ]
                    }
                ]
            }
        },
        "Yasuo": {
            "name": "Yasuo",
            "tier": 5,
            "classes": [
                "Blademaster"
            ],
            "origins": [
                "Exile"
            ],
            "maxHealthpoints": 700,
            "hpScaleFactor": 1.8,
            "maxMana": 25,
            "damage": 65,
            "damageScaleFactor": 1.25,
            "armor": 35,
            "magicResistance": 20,
            "critMultiplier": 1.5,
            "critChance": 0.25,
            "attackSpeed": 1,
            "range": 1,
            "specialAbility": {
                "name": "Tempest Steel",
                "originalDescription": "Yasuo stabs forward, damaging two enemies in a line. On third cast, Yasuo instead launches a tornado dealing damage and knocking up enemies in a line for 1.5/1.5/1.5s. Applies on hit effects",
                "variables": [
                    {
                        "name": "Damage",
                        "values": [
                            -50,
                            150,
                            350,
                            550,
                            750
                        ]
                    },
                    {
                        "name": "Hex Range",
                        "values": [
                            2,
                            2,
                            2,
                            2,
                            2
                        ]
                    },
                    {
                        "name": "Empower Hex Range",
                        "values": [
                            6,
                            6,
                            6,
                            6,
                            6
                        ]
                    },
                    {
                        "name": "Count For Empower",
                        "values": [
                            2,
                            2,
                            2,
                            2,
                            2
                        ]
                    },
                    {
                        "name": "Width",
                        "values": [
                            75,
                            75,
                            75,
                            75,
                            75
                        ]
                    },
                    {
                        "name": "Knockup Duration",
                        "values": [
                            1.5,
                            1.5,
                            1.5,
                            1.5,
                            1.5
                        ]
                    }
                ]
            }
        },
        "Braum": {
            "name": "Braum",
            "tier": 2,
            "classes": [
                "Guardian"
            ],
            "origins": [
                "Glacial"
            ],
            "maxHealthpoints": 750,
            "hpScaleFactor": 1.8,
            "maxMana": 50,
            "damage": 40,
            "damageScaleFactor": 1.25,
            "armor": 25,
            "magicResistance": 20,
            "critMultiplier": 1.5,
            "critChance": 0.25,
            "attackSpeed": 0.6,
            "range": 1,
            "specialAbility": {
                "name": "Unbreakable",
                "originalDescription": "Braum gains a barrier that blocks incoming damage",
                "variables": [
                    {
                        "name": "Shield Damage Reduction",
                        "values": [
                            60,
                            70,
                            80,
                            90,
                            100
                        ]
                    },
                    {
                        "name": "Shield Duration",
                        "values": [
                            4,
                            4,
                            4,
                            4,
                            4
                        ]
                    }
                ]
            }
        },
        "Kindred": {
            "name": "Kindred",
            "tier": 4,
            "classes": [
                "Ranger"
            ],
            "origins": [
                "Phantom"
            ],
            "maxHealthpoints": 600,
            "hpScaleFactor": 1.8,
            "maxMana": 150,
            "damage": 55,
            "damageScaleFactor": 1.25,
            "armor": 20,
            "magicResistance": 20,
            "critMultiplier": 1.5,
            "critChance": 0.25,
            "attackSpeed": 0.65,
            "range": 3,
            "specialAbility": {
                "name": "Lamb's Respite",
                "originalDescription": "Kindred creates a zone around herself that prevents allies from dying",
                "variables": [
                    {
                        "name": "Duration",
                        "values": [
                            3,
                            4,
                            5,
                            6,
                            7
                        ]
                    },
                    {
                        "name": "Min Health",
                        "values": [
                            0,
                            300,
                            600,
                            900,
                            1200
                        ]
                    }
                ]
            }
        },
        "Lucian": {
            "name": "Lucian",
            "tier": 2,
            "classes": [
                "Gunslinger"
            ],
            "origins": [
                "Noble"
            ],
            "maxHealthpoints": 600,
            "hpScaleFactor": 1.8,
            "maxMana": 35,
            "damage": 65,
            "damageScaleFactor": 1.25,
            "armor": 25,
            "magicResistance": 20,
            "critMultiplier": 1.5,
            "critChance": 0.25,
            "attackSpeed": 0.65,
            "range": 3,
            "specialAbility": {
                "name": "Relentless Pursuit",
                "originalDescription": "Lucian dashes away to safety and attacks an enemy twice, once with Attack Damage and once with Spell Damage",
                "variables": [
                    {
                        "name": "First Shot Ratio",
                        "values": [
                            1,
                            1,
                            1,
                            1,
                            1
                        ]
                    },
                    {
                        "name": "Second Shot Damage",
                        "values": [
                            50,
                            150,
                            250,
                            350,
                            450
                        ]
                    }
                ]
            }
        },
        "Zed": {
            "name": "Zed",
            "tier": 2,
            "classes": [
                "Assassin"
            ],
            "origins": [
                "Ninja"
            ],
            "maxHealthpoints": 500,
            "hpScaleFactor": 1.8,
            "maxMana": 75,
            "damage": 60,
            "damageScaleFactor": 1.25,
            "armor": 25,
            "magicResistance": 20,
            "critMultiplier": 1.5,
            "critChance": 0.25,
            "attackSpeed": 0.65,
            "range": 1,
            "specialAbility": {
                "name": "Razor Shuriken",
                "originalDescription": "Zed throws a shuriken, dealing damage to enemies in a line",
                "variables": [
                    {
                        "name": "Damage",
                        "values": [
                            100,
                            200,
                            300,
                            400,
                            500
                        ]
                    },
                    {
                        "name": "Hex Range",
                        "values": [
                            4,
                            4,
                            4,
                            4,
                            4
                        ]
                    }
                ]
            }
        },
        "Aatrox": {
            "name": "Aatrox",
            "tier": 3,
            "classes": [
                "Blademaster"
            ],
            "origins": [
                "Demon"
            ],
            "maxHealthpoints": 750,
            "hpScaleFactor": 1.8,
            "maxMana": 75,
            "damage": 65,
            "damageScaleFactor": 1.25,
            "armor": 25,
            "magicResistance": 20,
            "critMultiplier": 1.5,
            "critChance": 0.25,
            "attackSpeed": 0.65,
            "range": 1,
            "specialAbility": {
                "name": "The Darkin Blade",
                "originalDescription": "Aatrox cleaves the area in front of him, dealing damage to enemies inside it",
                "variables": [
                    {
                        "name": "Damage",
                        "values": [
                            100,
                            400,
                            700,
                            1000,
                            1300
                        ]
                    }
                ]
            }
        },
        "Rek'Sai": {
            "name": "Rek'Sai",
            "tier": 2,
            "classes": [
                "Brawler"
            ],
            "origins": [
                "Void"
            ],
            "maxHealthpoints": 650,
            "hpScaleFactor": 1.8,
            "maxMana": 150,
            "damage": 40,
            "damageScaleFactor": 1.25,
            "armor": 20,
            "magicResistance": 20,
            "critMultiplier": 1.5,
            "critChance": 0.25,
            "attackSpeed": 0.65,
            "range": 1,
            "specialAbility": {
                "name": "Burrow",
                "originalDescription": "Rek'Sai burrows for a short duration becoming untargetable and healing. When Rek'Sai unburrows she deals damage and knocks up the closest enemy for @KnockUpDuration@s",
                "variables": [
                    {
                        "name": "Heal Amount",
                        "values": [
                            200,
                            300,
                            400,
                            500,
                            600
                        ]
                    },
                    {
                        "name": "Burrow Duration",
                        "values": [
                            1,
                            1,
                            1,
                            1,
                            1
                        ]
                    },
                    {
                        "name": "Heal Tick Rate",
                        "values": [
                            0.5,
                            0.5,
                            0.5,
                            0.5,
                            0.5
                        ]
                    },
                    {
                        "name": "Knockup Duration",
                        "values": [
                            1.75,
                            1.75,
                            1.75,
                            1.75,
                            1.75
                        ]
                    },
                    {
                        "name": "Knockup Damage",
                        "values": [
                            50,
                            150,
                            250,
                            350,
                            450
                        ]
                    }
                ]
            },
            "icon": "RekSai"
        },
        "Pyke": {
            "name": "Pyke",
            "tier": 2,
            "classes": [
                "Assassin"
            ],
            "origins": [
                "Pirate"
            ],
            "maxHealthpoints": 600,
            "hpScaleFactor": 1.8,
            "maxMana": 125,
            "damage": 60,
            "damageScaleFactor": 1.25,
            "armor": 25,
            "magicResistance": 20,
            "critMultiplier": 1.5,
            "critChance": 0.25,
            "attackSpeed": 0.6,
            "range": 1,
            "specialAbility": {
                "name": "Phantom Undertow",
                "originalDescription": "Pyke dashes behind the furthest enemy, creating an afterimage that stuns enemies it passes through",
                "variables": [
                    {
                        "name": "Damage",
                        "values": [
                            100,
                            150,
                            200,
                            250,
                            300
                        ]
                    },
                    {
                        "name": "Stun Duration",
                        "values": [
                            1.5,
                            2,
                            2.5,
                            3,
                            3.5
                        ]
                    },
                    {
                        "name": "Stun Delay",
                        "values": [
                            1,
                            1,
                            1,
                            1,
                            1
                        ]
                    }
                ]
            }
        }
    }
}
export default data;