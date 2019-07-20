var champions = {
    list: [
        {
            name: "Tristana",
            tier: 1,
            classes: ["Gunslinger"],
            origins: ["Yordle"]
        },
        {
            name: "Warwick",
            tier: 1,
            classes: ["Brawler"],
            origins: ["Wild"]
        },
        {
            name: "Kha'Zix",
            icon: "Khazix",
            tier: 1,
            classes: ["Assassin"],
            origins: ["Void"]
        },
        {
            name: "Fiora",
            tier: 1,
            classes: ["Blademaster"],
            origins: ["Noble"]
        },
        {
            name: "Darius",
            tier: 1,
            classes: ["Knight"],
            origins: ["Imperial"]
        },
        {
            name: "Garen",
            tier: 1,
            classes: ["Knight"],
            origins: ["Noble"]
        },
        {
            name: "Mordekaiser",
            tier: 1,
            classes: ["Knight"],
            origins: ["Phantom"]
        },
        {
            name: "Graves",
            tier: 1,
            classes: ["Gunslinger"],
            origins: ["Pirate"]
        },
        {
            name: "Nidalee",
            tier: 1,
            classes: ["Shapeshifter"],
            origins: ["Wild"]
        },
        {
            name: "Kassadin",
            tier: 1,
            classes: ["Sorcerer"],
            origins: ["Void"]
        },
        {
            name: "Elise",
            tier: 1,
            classes: ["Shapeshifter"],
            origins: ["Demon"]
        },
        {
            name: "Vayne",
            tier: 1,
            classes: ["Ranger"],
            origins: ["Noble"]
        },
        {
            name: "Shen",
            tier: 2,
            classes: ["Blademaster"],
            origins: ["Ninja"]
        },
        {
            name: "Pyke",
            tier: 2,
            classes: ["Assassin"],
            origins: ["Pirate"]
        },
        {
            name: "Zed",
            tier: 2,
            classes: ["Assassin"],
            origins: ["Ninja"]
        },
        {
            name: "Lissandra",
            tier: 2,
            classes: ["Elementalist"],
            origins: ["Glacial"]
        },
        {
            name: "Braum",
            tier: 2,
            classes: ["Guardian"],
            origins: ["Glacial"]
        },
        {
            name: "Rek'Sai",
            icon: "RekSai",
            tier: 2,
            classes: ["Brawler"],
            origins: ["Void"]
        },
        {
            name: "Lucian",
            tier: 2,
            classes: ["Gunslinger"],
            origins: ["Noble"]
        },
        {
            name: "Varus",
            tier: 2,
            classes: ["Ranger"],
            origins: ["Demon"]
        },
        {
            name: "Twisted Fate",
            icon: "TwistedFate",
            tier: 2,
            classes: ["Sorcerer"],
            origins: ["Pirate"]
        },
        {
            name: "Ahri",
            tier: 2,
            classes: ["Sorcerer"],
            origins: ["Wild"]
        },
        {
            name: "Blitzcrank",
            tier: 2,
            classes: ["Brawler"],
            origins: ["Robot"]
        },
        {
            name: "Lulu",
            tier: 2,
            classes: ["Sorcerer"],
            origins: ["Yordle"]
        },
        {
            name: "Evelynn",
            tier: 3,
            classes: ["Assassin"],
            origins: ["Demon"]
        },
        {
            name: "Aatrox",
            tier: 3,
            classes: ["Blademaster"],
            origins: ["Demon"]
        },
        {
            name: "Morgana",
            tier: 3,
            classes: ["Sorcerer"],
            origins: ["Demon"]
        },
        {
            name: "Shyvana",
            tier: 3,
            classes: ["Shapeshifter"],
            origins: ["Dragon"]
        },
        {
            name: "Volibear",
            tier: 3,
            classes: ["Brawler"],
            origins: ["Glacial"]
        },
        {
            name: "Ashe",
            tier: 3,
            classes: ["Ranger"],
            origins: ["Glacial"]
        },
        {
            name: "Katarina",
            tier: 3,
            classes: ["Assassin"],
            origins: ["Imperial"]
        },
        {
            name: "Kennen",
            tier: 3,
            classes: ["Elementalist"],
            origins: ["Ninja", "Yordle"]
        },
        {
            name: "Gangplank",
            tier: 3,
            classes: ["Blademaster", "Gunslinger"],
            origins: ["Pirate"]
        },
        {
            name: "Rengar",
            tier: 3,
            classes: ["Assassin"],
            origins: ["Wild"]
        },
        {
            name: "Veigar",
            tier: 3,
            classes: ["Sorcerer"],
            origins: ["Yordle"]
        },
        {
            name: "Poppy",
            tier: 3,
            classes: ["Knight"],
            origins: ["Yordle"]
        },
        {
            name: "Brand",
            tier: 4,
            classes: ["Elementalist"],
            origins: ["Demon"]
        },
        {
            name: "Aurelion Sol",
            icon: "AurelionSol",
            tier: 4,
            classes: ["Sorcerer"],
            origins: ["Dragon"]
        },
        {
            name: "Sejuani",
            tier: 4,
            classes: ["Knight"],
            origins: ["Glacial"]
        },
        {
            name: "Draven",
            tier: 4,
            classes: ["Blademaster"],
            origins: ["Imperial"]
        },
        {
            name: "Leona",
            tier: 4,
            classes: ["Guardian"],
            origins: ["Noble"]
        },
        {
            name: "Akali",
            tier: 4,
            classes: ["Assassin"],
            origins: ["Ninja"]
        },
        {
            name: "Kindred",
            tier: 4,
            classes: ["Ranger"],
            origins: ["Phantom"]
        },
        {
            name: "Gnar",
            tier: 4,
            classes: ["Shapeshifter"],
            origins: ["Wild", "Yordle"]
        },
        {
            name: "Cho'Gath",
            icon: "Chogath",
            tier: 4,
            classes: ["Brawler"],
            origins: ["Void"]
        },
        {
            name: "Swain",
            tier: 5,
            classes: ["Shapeshifter"],
            origins: ["Demon", "Imperial"]
        },
        {
            name: "Yasuo",
            tier: 5,
            classes: ["Blademaster"],
            origins: ["Exile"]
        },
        {
            name: "Anivia",
            tier: 5,
            classes: ["Elementalist"],
            origins: ["Glacial"]
        },
        {
            name: "Kayle",
            tier: 5,
            classes: ["Knight"],
            origins: ["Noble"]
        },
        {
            name: "Miss Fortune",
            icon: "MissFortune",
            tier: 5,
            classes: ["Gunslinger"],
            origins: ["Pirate"]
        },
        {
            name: "Karthus",
            tier: 5,
            classes: ["Sorcerer"],
            origins: ["Phantom"]
        },
    ]
};

export default champions;