function resizeItemContainer() {
	$("#journal .items").css("height", $(window).height() - $("#journal .title").height() - $("#journal .clear-all").height())
}

function resizePopupMargins() {
	var a = $("#popup .inner-wrap");
	$(window).width() < 1040 ? a.css("width", $(window).width() - 40) : a.css("width", ""), $(window).height() < 840 ? a.css("height", $(window).height() - 40) : a.css("height", "")
}

function addCircleProgress() {
	var a, b;
	$('.content[data-category="eggs"] .egg').each(function() {
		a = parseFloat($(this).find("b").text()), b = parseFloat($(this).find("i").text()), $(this).children(".circle").circleProgress({
			value: a / b,
			size: 180,
			thickness: 5,
			startAngle: -Math.PI / 2,
			animation: {
				duration: 1200
			},
			fill: {
				gradient: ["#b1ffaa", "#64f0d0"]
			},
			emptyFill: "rgba(0, 0, 0, 0)"
		})
	})
}

function sendNotification(a, b, c, d, e) {
	$("#notification").text(a), $("#notification").append("<div class='countdown'></div>"), $("#notification").css({
		"background-color": b,
		color: c
	}), e.length > 0 && $("#notification").append("<div class='description'>" + e + "</div>"), $("#notification").animate({
		top: "25px"
	}, 500, "easeOutBack"), $("#notification .countdown").animate({
		width: "0"
	}, parseInt(d), "linear"), $("#notification").delay(d - 500).animate({
		top: -($("#notification").outerHeight() + 2)
	}, 500, "easeInOutQuart")
}

function setIwStyles() {
	var a, b = 0,
		c = $(".gm-style-iw");
	$(".gm-style-iw").each(function() {
		a = $(this).parent(), a.addClass("gm-iw-popup"), $('.gm-iw-popup > div[style="position: absolute; left: 0px; top: 0px;"] > div > div').each(function() {
			0 == b ? ($(this).addClass("left"), b++) : 1 == b && ($(this).addClass("right"), b = 0)
		});
		var d = c.prev(),
			e = c.next();
		d.children(":nth-child(2)").css({
			display: "none"
		}), d.children(":nth-child(4)").css({
			display: "none"
		}), d.children(":nth-child(3)").find("div").children().css({
			"box-shadow": "rgba(72, 181, 233, 0.6) 0px 1px 6px",
			"z-index": "1"
		}), a.parent().css({
			left: "8px",
			top: "25px"
		}), d.children(":nth-child(1)").hide(), d.children(":nth-child(2)").hide(), d.children(":nth-child(3)").each(function() {
			$(this).hasClass("done") || ($(this).css("left", parseFloat($(this).css("left")) - 8), $(this).addClass("done"))
		}), e.addClass("iw-close-button"), e.html("<i class='fa fa-times fa-lg'/>")
	})
}
Handlebars.registerHelper("roundCoord", function(a) {
	return Math.round(1e7 * parseFloat(a)) / 1e7
}), Handlebars.registerHelper("toLowerCase", function(a) {
	return a.toLowerCase()
}), Handlebars.registerHelper("getTeam", function(a) {
	var b = ["Neutral", "Mystic", "Valor", "Instinct"];
	return b[a]
}), Handlebars.registerHelper("getPokestopStatus", function(a) {
	var b = ["ready", "visited", "ready", "visited"];
	return b[a]
}), Handlebars.registerHelper("getPokestopStatusCss", function(a) {
	var b = ["", "-visited", "-lure", "-visited iw-pokestop-lure"];
	return b[a]
}), Handlebars.registerHelper("getPokestopStatusIconCss", function(a) {
	var b = ["ready", "visited", "lured", "lured-visited"];
	return b[a]
}), Handlebars.registerHelper("getTeamCss", function(a) {
	var b = ["unoccupied", "mystic", "valor", "instinct"];
	return b[a]
}), Handlebars.registerHelper("default", function(a, b) {
	return a || b
}), Handlebars.registerHelper("if_eq", function(a, b, c) {
	return a == b ? c.fn(this) : c.inverse(this)
}), Handlebars.registerHelper("round", function(a, b) {
	b = b || 2;
	var c = Math.pow(10, b);
	return Math.floor(a * c) / c
}), Handlebars.registerHelper("toTime", function(a) {
	return Math.round(a / 60) + " min " + a % 60 + " sec"
}), Handlebars.registerHelper("friendlyRarityName", function(a) {
	switch (a) {
		case "VeryRare":
			return "Very Rare";
		case "VeryCommon":
			return "Very Common";
		default:
			return a
	}
}), $(document).ready(function() {
	$("#menu .close-button").click(function() {
		$("#menu").animate({
			left: "-200px"
		}, 500, "easeOutQuint"), $(".open-menu").delay(100).animate({
			opacity: "1"
		}, 200)
	}), $(".open-menu").click(function() {
		$(this).css("opacity", "0"), $("#menu").delay(0).animate({
			left: "0"
		}, 500, "easeOutQuint")
	}), $("#menu .item").click(function() {
		$("#pokemon-info").fadeOut(200);
		var a = $(this).attr("id");
		"settings" === a ? $("#settings-buttons").show() : $("#settings-buttons").hide(), $("pokemon-info").hide(), $("#popup").stop().fadeIn(300), $("#popup .title span").text($(this).attr("title") || $(this).attr("id")), $("#popup .title").css("background-color", $(this).css("background-color")), $("#popup .content").each(function() {
			$(this).hide();
			var b = $(this).attr("data-category");
			b === a && $(this).show()
		}), $("#popup").find("#content-wrap").removeClass("blurred")
	}), $("#popup .overlay, #popup .close-me").click(function() {
		$("#popup").stop().fadeOut(300)
	}), $("#pokemon-info").click(function() {
		$(this).stop().fadeOut(300), $("#content-wrap").removeClass("blurred")
	}), $("#pokemon-info .close-button, #pokemon-content .controls div .confirm span").click(function() {
		$("#pokemon-info").stop().fadeOut(300), $("#content-wrap").removeClass("blurred")
	}), $("#pokemon-info #pokemon-content").click(function(a) {
		a.stopPropagation()
	}), $("#journal .event").each(function() {
		$(this).find(".event-type").text($(this).attr("class").split(" ")[1])
	}), $("#journal .close-button").click(function() {
		$("#journal").animate({
			right: "-300px"
		}, 500, "easeOutQuint"), $(".open-journal").delay(100).animate({
			opacity: "1"
		}, 200)
	}), $(".open-journal").click(function() {
		$(this).css("opacity", "0"), $("#journal").delay(0).animate({
			right: "0"
		}, 500, "easeOutQuint")
	}), $("#journal .items .event").click(function() {
		$(this).find(".extended-info").stop().slideToggle(300)
	}), $("#console .close-button").click(function() {
		$("#console").animate({
			bottom: "-300px"
		}, 500, "easeOutQuint"), $(".open-console").delay(100).animate({
			opacity: "1"
		}, 200)
	}), $(".open-console").click(function() {
		$(this).css("opacity", "0"), $("#console").delay(0).animate({
			bottom: "0"
		}, 500, "easeOutQuint")
	}), resizeItemContainer(), resizePopupMargins(), $("#journal .event .dismiss").click(function() {
		$(this).closest(".event").stop().slideUp(300, function() {
			$(this).remove()
		})
	}), $("#journal .items").animate({
		scrollTop: $("#journal .items").prop("scrollHeight") - $("#journal .items").height()
	}, 0), $(".open-profile .hide").click(function() {
		$("#profile").toggleClass("hidden"), $(".open-profile").toggleClass("hidden")
	})
}), $(window).resize(function() {
	resizeItemContainer(), resizePopupMargins()
});
var pokemonNames = ["MissingNo", "Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise", "Caterpie", "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot", "Rattata", "Raticate", "Spearow", "Fearow", "Ekans", "Arbok", "Pikachu", "Raichu", "Sandshrew", "Sandslash", "Nidoran♀", "Nidorina", "Nidoqueen", "Nidoran♂", "Nidorino", "Nidoking", "Clefairy", "Clefable", "Vulpix", "Ninetales", "Jigglypuff", "Wigglytuff", "Zubat", "Golbat", "Oddish", "Gloom", "Vileplume", "Paras", "Parasect", "Venonat", "Venomoth", "Diglett", "Dugtrio", "Meowth", "Persian", "Psyduck", "Golduck", "Mankey", "Primeape", "Growlithe", "Arcanine", "Poliwag", "Poliwhirl", "Poliwrath", "Abra", "Kadabra", "Alakazam", "Machop", "Machoke", "Machamp", "Bellsprout", "Weepinbell", "Victreebel", "Tentacool", "Tentacruel", "Geodude", "Graveler", "Golem", "Ponyta", "Rapidash", "Slowpoke", "Slowbro", "Magnemite", "Magneton", "Farfetch'd", "Doduo", "Dodrio", "Seel", "Dewgong", "Grimer", "Muk", "Shellder", "Cloyster", "Gastly", "Haunter", "Gengar", "Onix", "Drowzee", "Hypno", "Krabby", "Kingler", "Voltorb", "Electrode", "Exeggcute", "Exeggutor", "Cubone", "Marowak", "Hitmonlee", "Hitmonchan", "Lickitung", "Koffing", "Weezing", "Rhyhorn", "Rhydon", "Chansey", "Tangela", "Kangaskhan", "Horsea", "Seadra", "Goldeen", "Seaking", "Staryu", "Starmie", "Mr. Mime", "Scyther", "Jynx", "Electabuzz", "Magmar", "Pinsir", "Tauros", "Magikarp", "Gyarados", "Lapras", "Ditto", "Eevee", "Vaporeon", "Jolteon", "Flareon", "Porygon", "Omanyte", "Omastar", "Kabuto", "Kabutops", "Aerodactyl", "Snorlax", "Articuno", "Zapdos", "Moltres", "Dratini", "Dragonair", "Dragonite", "Mewtwo", "Mew", "Chikorita", "Bayleef", "Meganium", "Cyndaquil", "Quilava", "Typhlosion", "Totodile", "Croconaw", "Feraligatr", "Sentret", "Furret", "Hoothoot", "Noctowl", "Ledyba", "Ledian", "Spinarak", "Ariados", "Crobat", "Chinchou", "Lanturn", "Pichu", "Cleffa", "Igglybuff", "Togepi", "Togetic", "Natu", "Xatu", "Mareep", "Flaaffy", "Ampharos", "Bellossom", "Marill", "Azumarill", "Sudowoodo", "Politoed", "Hoppip", "Skiploom", "Jumpluff", "Aipom", "Sunkern", "Sunflora", "Yanma", "Wooper", "Quagsire", "Espeon", "Umbreon", "Murkrow", "Slowking", "Misdreavus", "Unown", "Wobbuffet", "Girafarig", "Pineco", "Forretress", "Dunsparce", "Gligar", "Steelix", "Snubbull", "Granbull", "Qwilfish", "Scizor", "Shuckle", "Heracross", "Sneasel", "Teddiursa", "Ursaring", "Slugma", "Magcargo", "Swinub", "Piloswine", "Corsola", "Remoraid", "Octillery", "Delibird", "Mantine", "Skarmory", "Houndour", "Houndoom", "Kingdra", "Phanpy", "Donphan", "Porygon2", "Stantler", "Smeargle", "Tyrogue", "Hitmontop", "Smoochum", "Elekid", "Magby", "Miltank", "Blissey", "Raikou", "Entei", "Suicune", "Larvitar", "Pupitar", "Tyranitar", "Lugia", "Ho-Oh", "Celebi", "Treecko", "Grovyle", "Sceptile", "Torchic", "Combusken", "Blaziken", "Mudkip", "Marshtomp", "Swampert", "Poochyena", "Mightyena", "Zigzagoon", "Linoone", "Wurmple", "Silcoon", "Beautifly", "Cascoon", "Dustox", "Lotad", "Lombre", "Ludicolo", "Seedot", "Nuzleaf", "Shiftry", "Taillow", "Swellow", "Wingull", "Pelipper", "Ralts", "Kirlia", "Gardevoir", "Surskit", "Masquerain", "Shroomish", "Breloom", "Slakoth", "Vigoroth", "Slaking", "Nincada", "Ninjask", "Shedinja", "Whismur", "Loudred", "Exploud", "Makuhita", "Hariyama", "Azurill", "Nosepass", "Skitty", "Delcatty", "Sableye", "Mawile", "Aron", "Lairon", "Aggron", "Meditite", "Medicham", "Electrike", "Manectric", "Plusle", "Minun", "Volbeat", "Illumise", "Roselia", "Gulpin", "Swalot", "Carvanha", "Sharpedo", "Wailmer", "Wailord", "Numel", "Camerupt", "Torkoal", "Spoink", "Grumpig", "Spinda", "Trapinch", "Vibrava", "Flygon", "Cacnea", "Cacturne", "Swablu", "Altaria", "Zangoose", "Seviper", "Lunatone", "Solrock", "Barboach", "Whiscash", "Corphish", "Crawdaunt", "Baltoy", "Claydol", "Lileep", "Cradily", "Anorith", "Armaldo", "Feebas", "Milotic", "Castform", "Kecleon", "Shuppet", "Banette", "Duskull", "Dusclops", "Tropius", "Chimecho", "Absol", "Wynaut", "Snorunt", "Glalie", "Spheal", "Sealeo", "Walrein", "Clamperl", "Huntail", "Gorebyss", "Relicanth", "Luvdisc", "Bagon", "Shelgon", "Salamence", "Beldum", "Metang", "Metagross", "Regirock", "Regice", "Registeel", "Latias", "Latios", "Kyogre", "Groudon", "Rayquaza", "Jirachi", "Deoxys", "Turtwig", "Grotle", "Torterra", "Chimchar", "Monferno", "Infernape", "Piplup", "Prinplup", "Empoleon", "Starly", "Staravia", "Staraptor", "Bidoof", "Bibarel", "Kricketot", "Kricketune", "Shinx", "Luxio", "Luxray", "Budew", "Roserade", "Cranidos", "Rampardos", "Shieldon", "Bastiodon", "Burmy", "Wormadam", "Mothim", "Combee", "Vespiquen", "Pachirisu", "Buizel", "Floatzel", "Cherubi", "Cherrim", "Shellos", "Gastrodon", "Ambipom", "Drifloon", "Drifblim", "Buneary", "Lopunny", "Mismagius", "Honchkrow", "Glameow", "Purugly", "Chingling", "Stunky", "Skuntank", "Bronzor", "Bronzong", "Bonsly", "Mime Jr.", "Happiny", "Chatot", "Spiritomb", "Gible", "Gabite", "Garchomp", "Munchlax", "Riolu", "Lucario", "Hippopotas", "Hippowdon", "Skorupi", "Drapion", "Croagunk", "Toxicroak", "Carnivine", "Finneon", "Lumineon", "Mantyke", "Snover", "Abomasnow", "Weavile", "Magnezone", "Lickilicky", "Rhyperior", "Tangrowth", "Electivire", "Magmortar", "Togekiss", "Yanmega", "Leafeon", "Glaceon", "Gliscor", "Mamoswine", "Porygon-Z", "Gallade", "Probopass", "Dusknoir", "Froslass", "Rotom", "Uxie", "Mesprit", "Azelf", "Dialga", "Palkia", "Heatran", "Regigigas", "Giratina", "Cresselia", "Phione", "Manaphy", "Darkrai", "Shaymin", "Arceus", "Victini", "Snivy", "Servine", "Serperior", "Tepig", "Pignite", "Emboar", "Oshawott", "Dewott", "Samurott", "Patrat", "Watchog", "Lillipup", "Herdier", "Stoutland", "Purrloin", "Liepard", "Pansage", "Simisage", "Pansear", "Simisear", "Panpour", "Simipour", "Munna", "Musharna", "Pidove", "Tranquill", "Unfezant", "Blitzle", "Zebstrika", "Roggenrola", "Boldore", "Gigalith", "Woobat", "Swoobat", "Drilbur", "Excadrill", "Audino", "Timburr", "Gurdurr", "Conkeldurr", "Tympole", "Palpitoad", "Seismitoad", "Throh", "Sawk", "Sewaddle", "Swadloon", "Leavanny", "Venipede", "Whirlipede", "Scolipede", "Cottonee", "Whimsicott", "Petilil", "Lilligant", "Basculin", "Sandile", "Krokorok", "Krookodile", "Darumaka", "Darmanitan", "Maractus", "Dwebble", "Crustle", "Scraggy", "Scrafty", "Sigilyph", "Yamask", "Cofagrigus", "Tirtouga", "Carracosta", "Archen", "Archeops", "Trubbish", "Garbodor", "Zorua", "Zoroark", "Minccino", "Cinccino", "Gothita", "Gothorita", "Gothitelle", "Solosis", "Duosion", "Reuniclus", "Ducklett", "Swanna", "Vanillite", "Vanillish", "Vanilluxe", "Deerling", "Sawsbuck", "Emolga", "Karrablast", "Escavalier", "Foongus", "Amoonguss", "Frillish", "Jellicent", "Alomomola", "Joltik", "Galvantula", "Ferroseed", "Ferrothorn", "Klink", "Klang", "Klinklang", "Tynamo", "Eelektrik", "Eelektross", "Elgyem", "Beheeyem", "Litwick", "Lampent", "Chandelure", "Axew", "Fraxure", "Haxorus", "Cubchoo", "Beartic", "Cryogonal", "Shelmet", "Accelgor", "Stunfisk", "Mienfoo", "Mienshao", "Druddigon", "Golett", "Golurk", "Pawniard", "Bisharp", "Bouffalant", "Rufflet", "Braviary", "Vullaby", "Mandibuzz", "Heatmor", "Durant", "Deino", "Zweilous", "Hydreigon", "Larvesta", "Volcarona", "Cobalion", "Terrakion", "Virizion", "Tornadus", "Thundurus", "Reshiram", "Zekrom", "Landorus", "Kyurem", "Keldeo", "Meloetta", "Genesect", "Chespin", "Quilladin", "Chesnaught", "Fennekin", "Braixen", "Delphox", "Froakie", "Frogadier", "Greninja", "Bunnelby", "Diggersby", "Fletchling", "Fletchinder", "Talonflame", "Scatterbug", "Spewpa", "Vivillon", "Litleo", "Pyroar", "Flabébé", "Floette", "Florges", "Skiddo", "Gogoat", "Pancham", "Pangoro", "Furfrou", "Espurr", "Meowstic", "Honedge", "Doublade", "Aegislash", "Spritzee", "Aromatisse", "Swirlix", "Slurpuff", "Inkay", "Malamar", "Binacle", "Barbaracle", "Skrelp", "Dragalge", "Clauncher", "Clawitzer", "Helioptile", "Heliolisk", "Tyrunt", "Tyrantrum", "Amaura", "Aurorus", "Sylveon", "Hawlucha", "Dedenne", "Carbink", "Goomy", "Sliggoo", "Goodra", "Klefki", "Phantump", "Trevenant", "Pumpkaboo", "Gourgeist", "Bergmite", "Avalugg", "Noibat", "Noivern", "Xerneas", "Yveltal", "Zygarde", "Diancie", "Hoopa", "Volcanion"];
$(window).ready(function() {}), $(window).ready(function() {
	$('.content[data-category="pokedex"]').html("");
	for (var a = 1; a <= 151; a++) $('.content[data-category="pokedex"]').append('<div class="pokemon"><h1 class="name">' + a + ". " + pokemonNames[a] + '</h1><div class="image-container"><img src="images/pokemon/' + a + '.png"/></div><h3 class="caught">' + a + '</h3><h3 class="seen">' + a + "</h3></div>");
	addCircleProgress()
}), $(window).ready(function() {
	var a = "";
	$(".tab-buttons > div").click(function() {
		a = $(this).attr("class").split(" ")[0], $(this).closest(".content").find(".tab-pages > div").each(function() {
			$(this).fadeOut(150), $(this).attr("id") == a && $(this).delay(150).fadeIn(150)
		}), $(this).closest(".content").find(".tab-buttons > div").each(function() {
			$(this).removeClass("selected")
		}), $(this).addClass("selected")
	}), $(".option-toggle").click(function() {
		$(this).toggleClass("active"), $(this).trigger("change")
	})
});
var __extends = this && this.__extends || function(a, b) {
		function c() {
			this.constructor = a
		}
		for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
		a.prototype = null === b ? Object.create(b) : (c.prototype = b.prototype, new c)
	},
	app = function() {
		function a() {}
		return a
	}();
$(function() {
	StaticData.init(rawData);
	var a = new LocalStorageDataStorage,
		b = new SettingsService(a),
		c = new FortCacheService(a);
	b.load();
	var d = b.settings,
		e = new BotWSClient,
		f = new TranslationService,
		g = new ToastController({
			toastElement: $("#notification")
		}),
		h = new JournalNotificationController({
			container: $("#journal .items"),
			clearAllButton: $("#journal .clear-all"),
			notificationCounter: $("#journal-counter"),
			exampleButton: $("#show-notification-journal-example-button"),
			translationController: f,
			notificationSettings: d.notificationsJournal,
			settingsService: b
		}),
		i = new DesktopNotificationController({
			permissionElement: $("#notification-desktop-status"),
			exampleButton: $("#show-notification-desktop-example-button"),
			translationController: f,
			notificationSettings: d.notificationsDesktop,
			settingsService: b
		}),
		j = new ToastNotificationController({
			toastControler: g,
			exampleButton: $("#show-notification-toast-example-button"),
			translationController: f,
			notificationSettings: d.notificationsToast,
			settingsService: b
		}),
		k = new AudioNotificationController({
			container: $("#hiddenAudio")[0],
			exampleButton: $("#show-notification-audio-example-button"),
			translationController: f,
			notificationSettings: d.notificationsAudio,
			settingsService: b
		}),
		l = new MainMenuController({
			requestSender: e,
			mainMenuElement: $("#menu")
		}),
		m = new PokemonMenuController({
			translationController: f,
			requestSender: e,
			pokemonMenuElement: $('body.live-version .content[data-category="pokemons"]'),
			pokemonDetailsElement: $("#pokemon-info"),
			pokemonLoadingSpinner: $(".spinner-overlay"),
			pokemonOrderButtons: $(".pokemon-order-button")
		}),
		n = new InventoryMenuController({
			translationController: f,
			requestSender: e,
			inventoryMenuElement: $('body .content[data-category="items"]'),
			inventoryLoadingSpinner: $(".spinner-overlay")
		}),
		o = new EggMenuController({
			translationController: f,
			requestSender: e,
			eggMenuElement: $('body .content[data-category="eggs"]'),
			eggLoadingSpinner: $(".spinner-overlay")
		}),
		p = new HumanSnipeMenuController({
			translationController: f,
			requestSender: e,
			snipeMenuElement: $('body .content[data-category="snipes"]')
		}),
		q = new SettingsMenuController({
			settingsMenuElement: $('body.live-version .content[data-category="settings"]'),
			settingsButtonsElement: $("#settings-buttons"),
			settingsService: b
		});
	q.setSettings(d);
	var r = new BotConfigMenuController({
			botSettingsMenuElement: $('body .content[data-category="bot-config"]')
		}),
		s = new ProfileInfoController({
			hideUsername: !1,
			profileInfoElement: $("#profile")
		}),
		t = {
			followPlayer: d.mapFolllowPlayer,
			translationController: f,
			mapElement: $("#map"),
			infoWindowTemplate: $("#iw-template"),
			requestSender: e
		},
		u = d.mapProvider === MapProvider.GMaps,
		v = u ? new GoogleMap(t) : new LeafletMap(t),
		w = new ConsoleController({
			consoleElement: $("#console")
		}),
		x = new InterfaceHandler({
			translationController: f,
			notificationControllers: [h, i, j, k],
			mainMenuController: l,
			pokemonMenuController: m,
			inventoryMenuController: n,
			eggMenuController: o,
			snipesMenuController: p,
			botConfigMenuController: r,
			profileInfoController: s,
			requestSender: e,
			map: v,
			settingsService: b,
			fortCacheService: c,
			consoleController: w
		});
	e.start({
		eventHandlers: [x],
		settingsService: b
	})
});
var ConsoleController = function() {
		function a(a) {
			var b = this;
			this.log = function(a) {
				var c = b.config.consoleElement.find(".items"),
					d = '<div class="event">\n    <div class="item" style="font-family:monospace; white-space: pre-wrap; color:' + a.Color + '">' + a.Message + "</div>\n</div>",
					e = $(d),
					f = b.isAtBottom(c);
				c.append(e), f && b.scrollToBottom(c)
			}, this.isAtBottom = function(a) {
				var b = a.scrollTop(),
					c = a.innerHeight(),
					d = a[0].scrollHeight,
					e = b + c > d - 200;
				return e
			}, this.config = a
		}
		return a.prototype.scrollToBottom = function(a) {
			a.finish().animate({
				scrollTop: a.prop("scrollHeight") - a.height()
			}, 100)
		}, a
	}(),
	MainMenuController = function() {
		function a(a) {
			var b = this;
			this.onPokemonMenuClick = function(a) {
				b.config.requestSender.sendPokemonListRequest()
			}, this.onItemsMenuClick = function(a) {
				b.config.requestSender.sendInventoryListRequest()
			}, this.onEggsMenuClick = function(a) {
				b.config.requestSender.currentBotFamily === BotFamily.Necro && b.config.requestSender.sendPlayerStatsRequest(), b.config.requestSender.sendEggsListRequest()
			}, this.onSnipeMenuClick = function(a) {
				b.config.requestSender.sendPokemonSnipeListUpdateRequest()
			}, this.updateProfileData = function(a) {
				b.config.mainMenuElement.find("#pokemons .total").text(a.PlayerData.MaxPokemonStorage), b.config.mainMenuElement.find("#items .total").text(a.PlayerData.MaxItemStorage)
			}, this.setPokemonCount = function(a) {
				b.config.mainMenuElement.find("#pokemons .current").text(a)
			}, this.setSnipePokemonCount = function(a) {
				b.config.mainMenuElement.find("#snipes .current").text(a)
			}, this.setItemCount = function(a) {
				b.config.mainMenuElement.find("#items .current").text(a)
			}, this.setEggCount = function(a) {
				b.config.mainMenuElement.find("#eggs .current").text(a)
			}, this.showSnipesMenu = function() {
				var a = b.config.mainMenuElement.find("#snipes");
				a.show()
			}, this.config = a, this.config.mainMenuElement.find("#pokemons").click(this.onPokemonMenuClick), this.config.mainMenuElement.find("#items").click(this.onItemsMenuClick), this.config.mainMenuElement.find("#eggs").click(this.onEggsMenuClick), this.config.mainMenuElement.find("#snipes").click(this.onSnipeMenuClick)
		}
		return a
	}(),
	CaptureMarker = function(a) {
		function b(b, c, d, e) {
			a.call(this), this.latlng = b, this.args = e, this.setMap(c), this.map = c, this.current = d
		}
		return __extends(b, a), b.prototype.draw = function() {
			var a = this.div;
			if (!a) {
				a = this.div = document.createElement("div");
				var b = document.createElement("div"),
					c = $(a),
					d = $(b);
				c.addClass("marker"), c.css({
					position: "absolute",
					width: "60px",
					height: "60px",
					"z-index": "99999"
				}), "undefined" !== this.args.PokemonId && d.css({
					"background-image": "url(images/pokemon/" + this.args.PokemonId + ".png)"
				}), d.css({
					"background-size": "contain",
					"background-position": "center center",
					"background-repeat": "no-repeat",
					width: "40px",
					height: "40px",
					margin: "5px"
				}), c.append(d);
				var e = this.getPanes();
				e.overlayMouseTarget.appendChild(a);
				var f = this,
					g = this.map,
					h = this.args.Name,
					i = this.current;
				i.Name = h, i.PokemonId = this.args.PokemonId, google.maps.event.addDomListener(a, "click", function(a) {
					var b = new google.maps.InfoWindow({
						content: app.templates.PokemonInfoPopup(i)
					});
					b.open(g, f), window.setIwStyles(), a.stopPropagation(), google.maps.event.trigger(self, "click")
				})
			}
			var j = this.getProjection().fromLatLngToDivPixel(this.latlng);
			j && (a.style.left = j.x - 30 + "px", a.style.top = j.y - 30 + "px")
		}, b.prototype.getPosition = function() {
			return this.latlng
		}, b
	}(google.maps.OverlayView),
	GoogleMap = function() {
		function a(a) {
			var b = this;
			this.locationHistory = [], this.pokestops = {}, this.gyms = {}, this.capMarkers = [], this.onMapClick = function(a) {
				b.clickedMarker && b.clickedMarker.setMap(null);
				var c = a.latLng.lat(),
					d = a.latLng.lng();
				b.clickedMarker = new google.maps.Marker({
					map: b.map,
					position: a.latLng,
					icon: {
						url: "images/markers/location.png",
						scaledSize: new google.maps.Size(50, 55),
						anchor: new google.maps.Point(25, 45)
					},
					zIndex: 3e5
				});
				var e = b;
				b.clickedMarker.addListener("click", function() {
					var a = new google.maps.InfoWindow({
						content: app.templates.SelectedPostionPopup({
							Latitude: c,
							Longitude: d
						})
					});
					a.open(b.map, b.clickedMarker), $("#current-position-move").click(function() {
						e.sendMoveToRequest(c, d, null, a)
					}), window.setIwStyles()
				})
			}, this.sendMoveToRequest = function(a, c, d, e) {
				b.config.requestSender.sendMoveToRequest(a, c, !1, d), e.close()
			}, this.movePlayer = function(a) {
				var c = [a.Latitude, a.Longitude],
					d = new google.maps.LatLng(c[0], c[1]);
				if (b.playerMarker.setPosition(d), b.config.followPlayer) {
					var e = {
							lat: b.map.getCenter().lat(),
							lng: b.map.getCenter().lng()
						},
						f = {
							lat: c[0],
							lng: c[1]
						},
						g = b.map;
					$(e).animate(f, {
						duration: 200,
						step: function(a, b) {
							var c;
							switch (b.prop) {
								case "lat":
									c = new google.maps.LatLng(a, g.getCenter().lng());
									break;
								case "lng":
									c = new google.maps.LatLng(g.getCenter().lat(), a);
									break;
								default:
									throw "Unknown t.prop"
							}
							g.setCenter(c)
						}
					})
				}
				b.locationHistory.push({
					lat: c[0],
					lng: c[1]
				}), null != b.locationLine && b.locationLine.setMap(null), b.locationLine = new google.maps.Polyline({
					path: b.locationHistory,
					geodesic: !0,
					strokeColor: "#00FFFF",
					strokeOpacity: .7,
					strokeWeight: 4
				}), b.locationLine.setMap(b.map), b.UpdateDirectionLineToSnipe()
			}, this.setPokeStops = function(a) {
				var c = {};
				_.each(a, function(a) {
					c[a.Id] = a
				}), _.each(b.pokestops, function(a) {
					var d = a.event.Id;
					d in c || (a.marker.setMap(null), delete a.event, delete a.marker, delete a.infoWindow, delete b.pokestops[d])
				}), _.each(c, function(a) {
					var c = a.Id,
						d = _.mapValues(b.pokestops, function(a) {
							return a.event
						});
					if (!(c in d)) {
						var e = b.createStopMarker(a),
							f = b.createStopInfoWindow(a, e);
						b.pokestops[c] = {
							event: a,
							marker: e,
							infoWindow: f
						}
					}
				}), _.each(a, function(a) {
					var c = a.LastModifiedTimestampMs > b.pokestops[a.Id].event.LastModifiedTimestampMs,
						d = a.Status != b.pokestops[a.Id].event.Status;
					(c || d) && (b.pokestops[a.Id].marker.setIcon(b.getStopIconData(a.Status)), b.pokestops[a.Id].event = a)
				})
			}, this.setGyms = function(a) {
				var c = {};
				_.each(a, function(a) {
					c[a.Id] = a
				}), _.each(b.gyms, function(a) {
					var d = a.event.Id;
					d in c || (a.marker.setMap(null), delete a.marker, delete a.infoWindow, delete a.event, delete b.gyms[d])
				});
				var d = _.mapValues(b.gyms, function(a) {
					return a.event
				});
				_.each(c, function(a) {
					var c = a.Id;
					if (c in d && b.gyms[c].event.OwnedByTeam !== a.OwnedByTeam && (b.gyms[c].marker.setMap(null), delete b.gyms[c].marker, delete b.gyms[c].infoWindow, delete b.gyms[c].event, delete b.gyms[c]), d = _.mapValues(b.gyms, function(a) {
							return a.event
						}), !(a.Id in d)) {
						var e = b.createGymMarker(a),
							f = b.createGymInfoWindow(a, e);
						b.gyms[a.Id] = {
							event: a,
							marker: e,
							infoWindow: f
						}
					}
				})
			}, this.createStopMarker = function(a) {
				var c = new google.maps.Marker({
					map: b.map,
					position: new google.maps.LatLng(a.Latitude, a.Longitude),
					icon: b.getStopIconData(a.Status),
					zIndex: 100
				});
				return c
			}, this.createStopInfoWindow = function(a, c) {
				var d = app.templates.InfoWindow.PokestopInfoWindow(a),
					e = new google.maps.InfoWindow({
						content: d
					}),
					f = b;
				return c.addListener("click", function() {
					e.open(b.map, c), window.setIwStyles(), $(".iw-pokestop-move-to[rel='" + a.Id + "']").unbind("click").click(function() {
						$(this).attr("data-fortId"), parseFloat($(this).attr("data-latitude")), parseFloat($(this).attr("data-longitude"));
						f.sendMoveToRequest(a.Latitude, a.Latitude, a.Id, e)
					})
				}), e
			}, this.createGymInfoWindow = function(a, c) {
				var d = a,
					e = parseInt(a.GymPoints),
					f = StaticData.calculateCurrentGymLevel(e),
					g = StaticData.totalExpForGymLevel[f + 1],
					h = b.config.translationController.translation.pokemonNames[a.GuardPokemonId];
				d.DefenderName = h, d.GymLevel = f, d.NextGymLevelRequired = g;
				var i = app.templates.InfoWindow.GymInfoWindow(a),
					j = new google.maps.InfoWindow({
						content: i
					}),
					k = b;
				return c.addListener("click", function() {
					j.open(b.map, c), window.setIwStyles(), $(".iw-gym-move-to[rel='" + a.Id + "']").unbind("click").click(function() {
						$(this).attr("data-fortId"), parseFloat($(this).attr("data-latitude")), parseFloat($(this).attr("data-longitude"));
						k.sendMoveToRequest(a.Latitude, a.Latitude, a.Id, j)
					})
				}), j
			}, this.config = a;
			var c = [{
					featureType: "all",
					elementType: "geometry",
					stylers: [{
						color: "#293037"
					}]
				}, {
					featureType: "all",
					elementType: "labels.text.fill",
					stylers: [{
						gamma: .01
					}, {
						lightness: 20
					}, {
						color: "#949aa6"
					}]
				}, {
					featureType: "all",
					elementType: "labels.text.stroke",
					stylers: [{
						saturation: -31
					}, {
						lightness: -33
					}, {
						weight: 2
					}, {
						gamma: "0.00"
					}, {
						visibility: "off"
					}]
				}, {
					featureType: "all",
					elementType: "labels.icon",
					stylers: [{
						visibility: "off"
					}]
				}, {
					featureType: "administrative.country",
					elementType: "all",
					stylers: [{
						visibility: "off"
					}]
				}, {
					featureType: "administrative.province",
					elementType: "all",
					stylers: [{
						visibility: "off"
					}]
				}, {
					featureType: "administrative.locality",
					elementType: "all",
					stylers: [{
						visibility: "simplified"
					}]
				}, {
					featureType: "administrative.locality",
					elementType: "labels.icon",
					stylers: [{
						visibility: "off"
					}]
				}, {
					featureType: "administrative.neighborhood",
					elementType: "all",
					stylers: [{
						visibility: "off"
					}]
				}, {
					featureType: "administrative.land_parcel",
					elementType: "all",
					stylers: [{
						visibility: "off"
					}]
				}, {
					featureType: "landscape",
					elementType: "geometry",
					stylers: [{
						lightness: 30
					}, {
						saturation: 30
					}, {
						color: "#344150"
					}, {
						visibility: "on"
					}]
				}, {
					featureType: "poi",
					elementType: "geometry",
					stylers: [{
						saturation: "0"
					}, {
						lightness: "0"
					}, {
						gamma: "0.30"
					}, {
						weight: "0.01"
					}, {
						visibility: "off"
					}]
				}, {
					featureType: "poi.park",
					elementType: "geometry",
					stylers: [{
						lightness: "100"
					}, {
						saturation: -20
					}, {
						visibility: "simplified"
					}, {
						color: "#344150"
					}, {
						gamma: "0.92"
					}]
				}, {
					featureType: "road",
					elementType: "geometry",
					stylers: [{
						lightness: 10
					}, {
						saturation: -30
					}, {
						color: "#28323f"
					}]
				}, {
					featureType: "road",
					elementType: "geometry.stroke",
					stylers: [{
						saturation: "-100"
					}, {
						lightness: "-100"
					}, {
						gamma: "0.00"
					}, {
						color: "#282f38"
					}]
				}, {
					featureType: "road",
					elementType: "labels",
					stylers: [{
						visibility: "on"
					}]
				}, {
					featureType: "road",
					elementType: "labels.text",
					stylers: [{
						visibility: "on"
					}, {
						color: "#575e6b"
					}]
				}, {
					featureType: "road",
					elementType: "labels.text.stroke",
					stylers: [{
						visibility: "off"
					}]
				}, {
					featureType: "road",
					elementType: "labels.icon",
					stylers: [{
						visibility: "off"
					}]
				}, {
					featureType: "road.highway",
					elementType: "geometry.fill",
					stylers: [{
						color: "#232c37"
					}, {
						visibility: "on"
					}]
				}, {
					featureType: "road.highway",
					elementType: "geometry.stroke",
					stylers: [{
						visibility: "off"
					}]
				}, {
					featureType: "transit",
					elementType: "all",
					stylers: [{
						visibility: "off"
					}]
				}, {
					featureType: "transit",
					elementType: "geometry",
					stylers: [{
						visibility: "simplified"
					}, {
						color: "#222935"
					}]
				}, {
					featureType: "transit.station.airport",
					elementType: "all",
					stylers: [{
						visibility: "off"
					}]
				}, {
					featureType: "water",
					elementType: "all",
					stylers: [{
						lightness: -20
					}, {
						color: "#212a35"
					}]
				}],
				d = {
					zoom: 16,
					center: new google.maps.LatLng(0, 0),
					mapTypeId: google.maps.MapTypeId.ROADMAP,
					styles: c,
					mapTypeControl: !1,
					scaleControl: !1,
					zoomControl: !1
				},
				e = this.config.mapElement.get(0);
			this.map = new google.maps.Map(e, d), this.playerMarker = new google.maps.Marker({
				map: this.map,
				position: new google.maps.LatLng(51.5073509, -.12775829999998223),
				icon: {
					url: "images/markers/location.png",
					scaledSize: new google.maps.Size(50, 55),
					anchor: new google.maps.Point(25, 45)
				},
				zIndex: 3e5
			}), this.map.addListener("click", this.onMapClick)
		}
		return a.prototype.targetFort = function(a) {}, a.prototype.usePokeStop = function(a) {
			var b = PokeStopStatus.Visited,
				c = a.Id,
				d = this.pokestops[c];
			if (!d) {
				var e = {
						Latitude: a.Latitude,
						Longitude: a.Longitude,
						Id: a.Id,
						CooldownCompleteTimestampMs: "",
						Name: a.Name,
						LastModifiedTimestampMs: "",
						LureInfo: null,
						Type: FortType.PokeStop,
						Timestamp: a.Timestamp
					},
					f = [e];
				this.setPokeStops(f)
			}
			d.event.Name = a.Name, d.event.Status === PokeStopStatus.Lure && (b = PokeStopStatus.VisitedLure), d.event.Status = b, d.marker.setIcon(this.getStopIconData(b));
			var g = app.templates.InfoWindow.PokestopInfoWindow(d.event);
			d.infoWindow.setContent(g)
		}, a.prototype.onSnipePokemonStart = function(a) {
			console.log(a), this.snipeMarker && this.snipeMarker.remove();
			var b = this.config.translationController.translation.pokemonNames[a.PokemonId],
				c = new SnipeMarker(new google.maps.LatLng(a.Latitude, a.Longitude), this.map, a, {
					PokemonId: a.PokemonId,
					Name: b
				});
			this.snipeMarker = c, this.UpdateDirectionLineToSnipe()
		}, a.prototype.onHumanSnipeReachedDestination = function(a) {
			this.snipeMarker && (this.snipeMarker.remove(), null == this.snipeMarker)
		}, a.prototype.UpdateDirectionLineToSnipe = function() {
			if (this.snipePath && (this.snipePath.setMap(null), this.snipePath = null), null != this.snipeMarker) {
				var a = this.playerMarker.getPosition(),
					b = this.snipeMarker.getPosition(),
					c = [{
						lat: b.lat(),
						lng: b.lng()
					}, {
						lat: a.lat(),
						lng: a.lng()
					}];
				this.snipePath = new google.maps.Polyline({
					path: c,
					geodesic: !0,
					strokeColor: "#FF0000",
					strokeOpacity: 1,
					strokeWeight: 2
				}), this.snipePath.setMap(this.map)
			}
		}, a.prototype.onPokemonCapture = function(a) {
			console.log(a);
			var b = this.config.translationController.translation.pokemonNames[a.Id],
				c = new CaptureMarker(new google.maps.LatLng(a.Latitude, a.Longitude), this.map, a, {
					PokemonId: a.Id,
					Name: b
				});
			this.capMarkers.push(c)
		}, a.prototype.getStopIconData = function(a) {
			var b = "images/markers/";
			switch (a) {
				case PokeStopStatus.Normal:
					b += "Normal.png";
					break;
				case PokeStopStatus.Lure:
					b += "Lured.png";
					break;
				case PokeStopStatus.Visited:
					b += "Visited.png";
					break;
				case PokeStopStatus.VisitedLure:
					b += "VisitedLure.png";
					break;
				default:
					b += "Normal.png"
			}
			return {
				url: b,
				scaledSize: new google.maps.Size(50, 50),
				anchor: new google.maps.Point(25, 25)
			}
		}, a.prototype.createGymMarker = function(a) {
			var b = new google.maps.Marker({
				map: this.map,
				position: new google.maps.LatLng(a.Latitude, a.Longitude),
				icon: this.getGymIconData(a),
				zIndex: 100
			});
			return b
		}, a.prototype.getGymIconData = function(a) {
			var b = "images/markers/";
			switch (a.OwnedByTeam) {
				case PlayerTeam.Instinct:
					b += "instinct.png";
					break;
				case PlayerTeam.Mystic:
					b += "mystic.png";
					break;
				case PlayerTeam.Valor:
					b += "valor.png";
					break;
				case PlayerTeam.Neutral:
					b += "unoccupied.png";
					break;
				default:
					b += "unoccupied.png"
			}
			return {
				url: b,
				scaledSize: new google.maps.Size(50, 50),
				anchor: new google.maps.Point(25, 25)
			}
		}, a
	}(),
	LeafletMap = function() {
		function a(a) {
			var b = this;
			this.onMapClick = function(a) {
				alert("click on the map.....")
			}, this.movePlayer = function(a) {
				var c = [a.Latitude, a.Longitude];
				b.playerMarker.setLatLng(c), b.playerPath.addLatLng(c), b.config.followPlayer && b.map.setView(c)
			}, this.setPokeStops = function(a) {
				_.each(b.pokeStops, function(a) {
					return b.map.removeLayer(a.LMarker)
				}), b.pokeStops = [], _.each(a, function(a) {
					var c = [a.Latitude, a.Longitude],
						d = new L.Marker(c, {
							icon: b.pokeStopIcons[a.Status]
						});
					b.map.addLayer(d), a.LMarker = d, b.pokeStops.push(a)
				})
			}, this.setGyms = function(a) {
				_.each(b.gyms, function(a) {
					return b.map.removeLayer(a.LMarker)
				}), b.gyms = [], _.each(a, function(a) {
					var c = [a.Latitude, a.Longitude],
						d = new L.Marker(c, {
							icon: b.gymIcons[a.OwnedByTeam]
						});
					b.map.addLayer(d), a.LMarker = d, b.gyms.push(a)
				})
			}, this.config = a, this.map = L.map(this.config.mapElement.get(0), {
				zoomControl: !1
			}).setView([0, 0], 16);
			var c = L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png");
			c.addTo(this.map), this.pokeStops = [], this.gyms = [], this.pokemons = [], this.playerPath = L.polyline([], {
					color: "cyan",
					opacity: 1
				}), this.playerPath.addTo(this.map),
				this.playerMarker = L.marker([0, 0], {
					icon: new L.Icon({
						iconUrl: "images/markers/location.png",
						iconSize: [50, 55],
						iconAnchor: [25, 45]
					})
				}), this.playerMarker.addTo(this.map), this.pokeStopIcons = [], this.pokeStopIcons[PokeStopStatus.Normal] = new L.Icon({
					iconUrl: "images/markers/Normal.png",
					iconSize: [48, 48]
				}), this.pokeStopIcons[PokeStopStatus.Visited] = new L.Icon({
					iconUrl: "images/markers/Visited.png",
					iconSize: [48, 48]
				}), this.pokeStopIcons[PokeStopStatus.Lure] = new L.Icon({
					iconUrl: "images/markers/Lured.png",
					iconSize: [48, 48]
				}), this.pokeStopIcons[PokeStopStatus.VisitedLure] = new L.Icon({
					iconUrl: "images/markers/VisitedLure.png",
					iconSize: [48, 48]
				}), this.gymIcons = [], this.gymIcons[PlayerTeam.Neutral] = new L.Icon({
					iconUrl: "images/markers/unoccupied.png",
					iconSize: [48, 48]
				}), this.gymIcons[PlayerTeam.Mystic] = new L.Icon({
					iconUrl: "images/markers/mystic.png",
					iconSize: [48, 48]
				}), this.gymIcons[PlayerTeam.Valor] = new L.Icon({
					iconUrl: "images/markers/valor.png",
					iconSize: [48, 48]
				}), this.gymIcons[PlayerTeam.Instinct] = new L.Icon({
					iconUrl: "images/markers/instinct.png",
					iconSize: [48, 48]
				})
		}
		return a.prototype.targetFort = function(a) {}, a.prototype.usePokeStop = function(a) {
			var b = _.find(this.pokeStops, function(b) {
					return b.Id === a.Id
				}),
				c = null === b.LureInfo ? this.pokeStopIcons[PokeStopStatus.Visited] : this.pokeStopIcons[PokeStopStatus.VisitedLure];
			b.LMarker.setIcon(c)
		}, a.prototype.onHumanSnipeReachedDestination = function(a) {
			alert("not implemented --  onHumanSnipeReachedDestination")
		}, a.prototype.onSnipePokemonStart = function(a) {
			alert("not implement ---onSnipePokemonStart")
		}, a.prototype.onPokemonCapture = function(a) {
			var b = this,
				c = [a.Latitude, a.Longitude],
				d = new Image,
				e = "images/pokemon/" + a.Id + ".png",
				f = 42,
				g = 38;
			d.onload = function() {
				var h = f / d.width,
					i = g / d.height,
					j = Math.min(h, i);
				j > 1 && (j = 1);
				var k = d.width * j,
					l = d.height * j,
					m = new L.Marker(c, {
						icon: new L.Icon({
							iconUrl: e,
							iconSize: [k, l]
						})
					}).bindPopup("hahaha. I am pokemon");
				m.bindPopup("aaaaaaaaaaa"), b.map.addLayer(m), a.LMarker = m, b.pokemons.push(a)
			}, d.src = e
		}, a
	}(),
	MapProvider;
! function(a) {
	a[a.GMaps = 0] = "GMaps", a[a.OSM = 1] = "OSM"
}(MapProvider || (MapProvider = {}));
var SnipeMarker = function(a) {
		function b(b, c, d, e) {
			a.call(this), this.latlng = b, this.args = e, this.setMap(c), this.map = c, this.current = d
		}
		return __extends(b, a), b.prototype.remove = function() {
			this.setMap(null), $(this.div).remove()
		}, b.prototype.draw = function() {
			var a = this.div;
			if (!a) {
				var b = app.templates.SnipePokemonMarker({
					PokemonId: this.current.PokemonId
				});
				a = this.div = $(b)[0];
				var c = this.getPanes();
				c.overlayMouseTarget.appendChild(a);
				var d = this,
					e = this.map,
					f = this.args.Name,
					g = this.current;
				g.PokemonName = f, google.maps.event.addDomListener(a, "click", function(a) {
					var b = new google.maps.InfoWindow({
						content: app.templates.PokemonSnipeInfoPopup(g)
					});
					b.open(e, d), window.setIwStyles(), a.stopPropagation(), google.maps.event.trigger(self, "click")
				})
			}
			var h = this.getProjection().fromLatLngToDivPixel(this.latlng);
			h && (a.style.left = h.x - 30 + "px", a.style.top = h.y - 30 + "px")
		}, b.prototype.getPosition = function() {
			return this.latlng
		}, b
	}(google.maps.OverlayView),
	BotConfigMenuController = function() {
		function a(a) {
			var b = this;
			this.setBotConfig = function(a) {
				var c = {
						id: "BotSettings",
						title: "BotSettings",
						description: "Bot settings",
						type: "object",
						properties: {
							AuthSettings: JSON.parse(a.AuthSchemaJson),
							GlobalSettings: JSON.parse(a.ConfigSchemaJson)
						}
					},
					d = {
						AuthSettings: JSON.parse(a.AuthJson),
						GlobalSettings: JSON.parse(a.ConfigJson)
					};
				console.log(c), console.log(d), b.setEditor(c, d, "Bot settings", b.config.botSettingsMenuElement)
			}, this.setEditor = function(a, b, c, d) {
				d.text("");
				var e = '<div class="bot-config-editor"></div>',
					f = $(e);
				d.append(f);
				var g = f.get(0),
					h = new JSONEditor(g, {
						schema: a,
						modes: ["tree", "form", "code"],
						name: c
					});
				h.setMode("form"), h.set(b), h.setName(c)
			}, this.config = a
		}
		return a
	}(),
	EggMenuController = function() {
		function a(a) {
			var b = this;
			this.eggListRequested = function(a) {
				b.config.eggLoadingSpinner.show()
			}, this.updateEggList = function(a, c) {
				b.config.eggMenuElement.find(".egg").remove();
				for (var d = 0; d < a.Incubators.length; d++) {
					var e = a.Incubators[d];
					if (e.PokemonId && "0" !== e.PokemonId) {
						var f = a.PlayerKmWalked || c,
							g = Math.round(e.TargetKmWalked - e.StartKmWalked),
							h = g.toFixed(1),
							i = f - e.StartKmWalked,
							j = (Math.round(10 * i) / 10).toFixed(1),
							k = i / g,
							l = '\n<div class="egg incubated-egg">\n    <div class="incubator"><img src="images/items/' + e.ItemId + '.png"/></div>\n    <p> <b> ' + j + " </b> / <i> " + h + ' </i> km</p>\n    <div class="circle"></div>\n</div>',
							m = $(l);
						b.config.eggMenuElement.append(m);
						var n = b.previousProgress[e.PokemonId],
							o = "number" == typeof n,
							p = {
								value: o ? n : k,
								size: 180,
								thickness: 5,
								startAngle: -Math.PI / 2,
								fill: {
									gradient: ["#b1ffaa", "#64f0d0"]
								},
								emptyFill: "rgba(0, 0, 0, 0)"
							};
						o && (p.animation = {
							duration: 0
						}), m.find(".circle").circleProgress(p), o && (delete p.animation, p.value = k, m.find(".circle").circleProgress(p)), b.previousProgress[e.PokemonId] = k
					}
				}
				for (var d = 0; d < a.UnusedEggs.length; d++) {
					var q = a.UnusedEggs[d],
						h = q.EggKmWalkedTarget.toFixed(1),
						l = '\n<div class="egg">\n    <div class="incubator"><img src="images/items/0.png"/></div>\n    <p> <i> ' + h + ' </i> km</p>\n    <div class="circle"></div>\n</div>',
						r = $(l);
					b.config.eggMenuElement.append(r)
				}
				b.config.eggLoadingSpinner.fadeOut(150)
			}, this.config = a, this.previousProgress = []
		}
		return a
	}(),
	InventoryMenuController = function() {
		function a(a) {
			var b = this;
			this.inventoryListRequested = function(a) {
				b.config.inventoryLoadingSpinner.show()
			}, this.updateInventoryList = function(a) {
				var c = b.config.inventoryMenuElement.find(".product");
				c.removeClass("brighter"), c.find(".number").text(0), c.find(".slider input:first").ionRangeSlider({
					min: 0,
					max: 0,
					from: 0
				});
				for (var d, e = function(c) {
						var e = a.Items[c],
							f = b.config.inventoryMenuElement.find('.product[data-item-id="' + e.ItemId + '"]');
						f.addClass("brighter"), f.data("total", e.Count), f.find(".number").text(e.Count), d = f.find(".slider input:first").data("ionRangeSlider"), d && d.update({
							min: 0,
							max: e.Count,
							from: e.Count,
							onChange: function(a) {
								var b = e.Count - a.from;
								f.find(".delete").text(b), f.find(".recycle").css("opacity", b > 0 ? 1 : .3).data("items", b).data("itemId", f.attr("data-item-id"))
							}
						}), f.find(".recycle").unbind("click").click(b.recycleItems)
					}, f = 0; f < a.Items.length; f++) e(f);
				b.config.inventoryLoadingSpinner.fadeOut(150)
			}, this.recycleItems = function(a) {
				var c = $(a.target).data().items,
					d = $(a.target).data().itemId,
					e = $(a.target).closest(".product"),
					f = e.data().total;
				if (c > 0) {
					b.config.requestSender.sendRecycleRequest(d, c), $(a.target).data("items", 0), e.find(".delete").text(0), e.find(".number").text(f - c), e.data("total", f - c), e.find(".recycle").css("opacity", .3);
					var g = e.find(".slider input:first").data("ionRangeSlider");
					g && g.update({
						min: 0,
						max: f - c,
						from: f - c
					})
				}
			}, this.config = a
		}
		return a
	}(),
	PokemonMenuController = function() {
		function a(a) {
			var b = this;
			this.onOrderButtonClicked = function(a) {
				var c = $(a.target).closest(".pokemon-order-button"),
					d = c.attr("data-order-by");
				if (d) {
					var e = PokemonOrdering[d],
						f = b.currentOrdering;
					b.currentOrdering = e, f === e ? b.currentReverse = !b.currentReverse : b.currentReverse = !0;
					var g = c.find(".pokemon-order-chevron");
					b.currentReverse ? g.addClass("descending") : g.removeClass("descending"), b.updatePokemonListInner()
				}
			}, this.pokemonListRequested = function(a) {
				b.config.pokemonLoadingSpinner.show()
			}, this.updatePokemonList = function(a) {
				b.pokemonList = a, b.updatePokemonListInner()
			}, this.getOrderedPokemons = function() {
				var a;
				switch (b.currentOrdering) {
					case PokemonOrdering.Date:
						a = _.orderBy(b.pokemonList.Pokemons, function(a) {
							return a.CreationTimeMs
						});
						break;
					case PokemonOrdering.Cp:
						a = _.orderBy(b.pokemonList.Pokemons, function(a) {
							return a.Cp
						});
						break;
					case PokemonOrdering.Iv:
						a = _.orderBy(b.pokemonList.Pokemons, function(a) {
							return a.Perfection
						});
						break;
					case PokemonOrdering.Number:
						a = _.orderBy(b.pokemonList.Pokemons, function(a) {
							return a.PokemonId
						});
						break;
					case PokemonOrdering.Name:
						a = _.orderBy(b.pokemonList.Pokemons, function(a) {
							var c = b.config.translationController.translation.pokemonNames[a.PokemonId];
							return c
						});
						break;
					default:
						a = b.pokemonList.Pokemons
				}
				return b.currentReverse && (a = a.reverse()), a
			}, this.updatePokemonListInner = function() {
				if (b.pokemonList) {
					b.config.pokemonMenuElement.find(".pokemon").remove();
					for (var a = b.getOrderedPokemons(), c = 0; c < a.length; c++) {
						var d = a[c],
							e = b.config.translationController.translation.pokemonNames[d.PokemonId],
							f = Math.floor(100 * d.Perfection) / 100,
							g = '<div class="pokemon" data-pokemon-unique-id="' + d.Id + '">\n    <h1 class="name">' + e + '</h1>\n    <div class="image-container">\n        <img src="images/pokemon/' + d.PokemonId + '.png"/>\n    </div>\n    <h3 class="cp">' + d.Cp + '</h3>\n    <h3 class="iv">' + f + "</h3>\n</div>",
							h = $(g);
						h.click(b.pokemonClick), b.config.pokemonMenuElement.append(h)
					}
					b.config.pokemonLoadingSpinner.fadeOut(150)
				}
			}, this.displayPokemonInfo = function(a) {
				var c = a;
				c.Name = b.config.translationController.translation.pokemonNames[a.PokemonId], c.PokemonTypes = [], c.Move1Name = b.config.translationController.translation.moveNames[a.Move1] || "No translation for " + c.Move1, c.Move2Name = b.config.translationController.translation.moveNames[a.Move2] || "No translation for " + c.Move2, c.CreationDateTime = new Date(+c.CreationTimeMs).toLocaleString(navigator.language, {
					hour12: !0
				}).toUpperCase();
				for (var d = StaticData.pokemonData[a.PokemonId], e = 0; e < d.elements.length; e++) {
					var f = PokeElement[d.elements[e]].toLowerCase();
					c.PokemonTypes.push(f)
				}
				b.config.pokemonMenuElement.closest("#content-wrap").addClass("blurred");
				var g = $(app.templates.Pokemon.PokemonInfo(a)),
					h = g.find("#evolve-pokemon-button");
				if (0 === StaticData.pokemonData[a.PokemonId].evolvesInto.length) h.hide();
				else {
					var i = StaticData.pokemonData[a.PokemonId].candyToEvolve,
						j = i - c.FamilyCandies;
					h.find(".button-disabled-reason").text(j + " of " + i + " candies required"), "undefined" != typeof a.FamilyCandies && a.FamilyCandies < i ? h.addClass("disabled") : h.removeClass("disabled"), h.show()
				}
				g.bind("click", function() {
					return !1
				}), g.find("#confirm-transfer").click(b.transferPokemon), g.find("#confirm-evolve").click(b.evolvePokemon), g.find("#confirm-upgrade").click(b.upgradePokemon), g.find("#confirm-upgrade-max").click(b.maxUpgradePokemon), g.find(".close-button").click(b.close), b.config.pokemonDetailsElement.html("").append(g), b.config.pokemonDetailsElement.fadeIn()
			}, this.pokemonClick = function(a) {
				var c = $(a.target).closest(".pokemon"),
					d = c.attr("data-pokemon-unique-id"),
					e = _.find(b.pokemonList.Pokemons, function(a) {
						return a.Id === d
					});
				b.currentPokemon = e;
				var f = e;
				b.displayPokemonInfo(f)
			}, this.close = function(a) {
				b.config.pokemonMenuElement.closest("#content-wrap").removeClass("blurred"), b.config.pokemonDetailsElement.fadeOut()
			}, this.transferPokemon = function(a) {
				var c = b.currentPokemon.Id;
				b.config.requestSender.sendTransferPokemonRequest(c), b.config.pokemonDetailsElement.fadeOut(), b.close(a)
			}, this.updatePokemonAfterUpgraded = function(a) {
				b.currentPokemon.Id == a.Id && (b.currentPokemon.Cp = a.Cp, b.currentPokemon.FamilyCandies = a.FamilyCandies, b.displayPokemonInfo(b.currentPokemon)), b.pokemonList.Pokemons.forEach(function(b, c, d) {
					b.Id == a.Id && (b.Cp = a.Cp, b.FamilyCandies = a.FamilyCandies)
				}), b.updatePokemonListInner()
			}, this.evolvePokemon = function(a) {
				var c = b.currentPokemon.Id;
				b.config.requestSender.sendEvolvePokemonRequest(c), b.config.pokemonDetailsElement.fadeOut(), b.close(a)
			}, this.upgradePokemon = function(a) {
				var c = b.currentPokemon.Id;
				b.config.requestSender.sendUpgradePokemonRequest(c, !1)
			}, this.maxUpgradePokemon = function(a) {
				var c = b.currentPokemon.Id;
				b.config.requestSender.sendUpgradePokemonRequest(c, !0)
			}, this.config = a, this.currentOrdering = PokemonOrdering.Date, this.currentReverse = !0, this.config.pokemonOrderButtons.click(this.onOrderButtonClicked)
		}
		return a
	}(),
	PokemonOrdering;
! function(a) {
	a[a.Date = 0] = "Date", a[a.Cp = 1] = "Cp", a[a.Iv = 2] = "Iv", a[a.Number = 3] = "Number", a[a.Name = 4] = "Name"
}(PokemonOrdering || (PokemonOrdering = {}));
var SettingsMenuController = function() {
		function a(a) {
			var b = this;
			this.inputChanged = function(a) {
				var c = b.config.settingsService.settings,
					d = b.getSettings();
				b.enableDisableButtons(c, d), b.updateConnectionStr(d)
			}, this.updateConnectionStr = function(a) {
				var c = b.buildConnectionString(a.clientAddress, a.clientPort, a.clientUseSSL);
				b.config.settingsMenuElement.find(".settings-client-connection-string").text(c)
			}, this.buildConnectionString = function(a, b, c) {
				var d = c ? "wss" : "ws";
				return d + "://" + a + ":" + b
			}, this.enableDisableButtons = function(a, c) {
				var d = b.config.settingsService.settingsEqual(a, c);
				d ? b.config.settingsButtonsElement.addClass("disabled") : b.config.settingsButtonsElement.removeClass("disabled")
			}, this.setSettings = function(a) {
				b.updateConnectionStr(a), b.settingsElements.mapProvider.filter("[value='" + a.mapProvider + "']").prop("checked", !0), b.setToggleSetting(b.settingsElements.mapFolllowPlayer, a.mapFolllowPlayer), b.settingsElements.mapClearing.val(a.mapClearing.toString()), b.settingsElements.mapGoogleApiKey.val(a.mapGoogleApiKey), b.settingsElements.mapOsmApiKey.val(a.mapOsmApiKey), b.settingsElements.clientAddress.val(a.clientAddress), b.settingsElements.clientPort.val(a.clientPort.toString()), b.setToggleSetting(b.settingsElements.clientUseSSL, a.clientUseSSL), b.setNotificationSettings(b.settingsElements.notificationsJournal, a.notificationsJournal), b.setNotificationSettings(b.settingsElements.notificationsDesktop, a.notificationsDesktop), b.setNotificationSettings(b.settingsElements.notificationsToast, a.notificationsToast), b.setNotificationSettings(b.settingsElements.notificationsAudio, a.notificationsAudio), b.setToggleSetting(b.settingsElements.notificationsJournalClearingAnimation, a.notificationsJournalClearingAnimation)
			}, this.setNotificationSettings = function(a, b) {
				a.pokestopUsed.prop("checked", b.pokestopUsed), a.pokemonCapture.prop("checked", b.pokemonCapture), a.pokemonSnipe.prop("checked", b.pokemonSnipe), a.pokemonEvolved.prop("checked", b.pokemonEvolved), a.eggHatched.prop("checked", b.eggHatched), a.incubatorStatus.prop("checked", b.incubatorStatus), a.itemRecycle.prop("checked", b.itemRecycle), a.pokemonTransfer.prop("checked", b.pokemonTransfer)
			}, this.setToggleSetting = function(a, b) {
				b ? a.addClass("active") : a.removeClass("active")
			}, this.getSettings = function() {
				var a = {
					mapProvider: parseInt(b.settingsElements.mapProvider.filter(":checked").val()),
					mapFolllowPlayer: b.settingsElements.mapFolllowPlayer.hasClass("active"),
					mapClearing: parseInt(b.settingsElements.mapClearing.val()),
					mapGoogleApiKey: b.settingsElements.mapGoogleApiKey.val(),
					mapOsmApiKey: b.settingsElements.mapOsmApiKey.val(),
					clientAddress: b.settingsElements.clientAddress.val(),
					clientPort: parseInt(b.settingsElements.clientPort.val()),
					clientUseSSL: b.settingsElements.clientUseSSL.hasClass("active"),
					notificationsJournal: b.getNotificationSettings(b.settingsElements.notificationsJournal),
					notificationsDesktop: b.getNotificationSettings(b.settingsElements.notificationsDesktop),
					notificationsToast: b.getNotificationSettings(b.settingsElements.notificationsToast),
					notificationsAudio: b.getNotificationSettings(b.settingsElements.notificationsAudio),
					notificationsJournalClearingAnimation: b.settingsElements.notificationsJournalClearingAnimation.hasClass("active")
				};
				return a
			}, this.getNotificationSettings = function(a) {
				var b = {
					pokestopUsed: a.pokestopUsed.is(":checked"),
					pokemonCapture: a.pokemonCapture.is(":checked"),
					pokemonSnipe: a.pokemonSnipe.is(":checked"),
					pokemonEvolved: a.pokemonEvolved.is(":checked"),
					eggHatched: a.eggHatched.is(":checked"),
					incubatorStatus: a.incubatorStatus.is(":checked"),
					itemRecycle: a.itemRecycle.is(":checked"),
					pokemonTransfer: a.pokemonTransfer.is(":checked")
				};
				return b
			}, this.saveClicked = function(a) {
				if (!b.config.settingsButtonsElement.hasClass("disabled")) {
					var c = b.getSettings();
					b.config.settingsService.apply(c), b.updateConnectionStr(c), b.enableDisableButtons(c, c)
				}
			}, this.cancelClicked = function(a) {
				var c = b.config.settingsService.settings;
				b.setSettings(c), b.enableDisableButtons(c, c)
			}, this.config = a, this.config.settingsButtonsElement.find("#save-changes").click(this.saveClicked), this.config.settingsButtonsElement.find("#cancel-changes").click(this.cancelClicked), this.config.settingsMenuElement.find(":input, .option-toggle").change(this.inputChanged), this.settingsElements = {
				mapProvider: this.config.settingsMenuElement.find("[name='settings-map-provider']"),
				mapFolllowPlayer: this.config.settingsMenuElement.find("[name='settings-map-follow-player']"),
				mapClearing: this.config.settingsMenuElement.find("[name='settings-map-clearing']"),
				mapGoogleApiKey: this.config.settingsMenuElement.find("[name='settings-map-google-api-key']"),
				mapOsmApiKey: this.config.settingsMenuElement.find("[name='settings-map-osm-api-key']"),
				clientAddress: this.config.settingsMenuElement.find("[name='settings-client-address']"),
				clientPort: this.config.settingsMenuElement.find("[name='settings-client-port']"),
				clientUseSSL: this.config.settingsMenuElement.find("[name='settings-client-use-ssl']"),
				notificationsJournal: {
					pokestopUsed: this.config.settingsMenuElement.find("[name='settings-notifications-journal-pokestop-used']"),
					pokemonCapture: this.config.settingsMenuElement.find("[name='settings-notifications-journal-pokemon-capture']"),
					pokemonSnipe: this.config.settingsMenuElement.find("[name='settings-notifications-journal-pokemon-snipe']"),
					pokemonEvolved: this.config.settingsMenuElement.find("[name='settings-notifications-journal-pokemon-evolved']"),
					eggHatched: this.config.settingsMenuElement.find("[name='settings-notifications-journal-egg-hatched']"),
					incubatorStatus: this.config.settingsMenuElement.find("[name='settings-notifications-journal-incubator-status']"),
					itemRecycle: this.config.settingsMenuElement.find("[name='settings-notifications-journal-item-recycle']"),
					pokemonTransfer: this.config.settingsMenuElement.find("[name='settings-notifications-journal-pokemon-transfer']")
				},
				notificationsDesktop: {
					pokestopUsed: this.config.settingsMenuElement.find("[name='settings-notifications-desktop-pokestop-used']"),
					pokemonCapture: this.config.settingsMenuElement.find("[name='settings-notifications-desktop-pokemon-capture']"),
					pokemonSnipe: this.config.settingsMenuElement.find("[name='settings-notifications-desktop-pokemon-snipe']"),
					pokemonEvolved: this.config.settingsMenuElement.find("[name='settings-notifications-desktop-pokemon-evolved']"),
					eggHatched: this.config.settingsMenuElement.find("[name='settings-notifications-desktop-egg-hatched']"),
					incubatorStatus: this.config.settingsMenuElement.find("[name='settings-notifications-desktop-incubator-status']"),
					itemRecycle: this.config.settingsMenuElement.find("[name='settings-notifications-desktop-item-recycle']"),
					pokemonTransfer: this.config.settingsMenuElement.find("[name='settings-notifications-desktop-pokemon-transfer']")
				},
				notificationsToast: {
					pokestopUsed: this.config.settingsMenuElement.find("[name='settings-notifications-toast-pokestop-used']"),
					pokemonCapture: this.config.settingsMenuElement.find("[name='settings-notifications-toast-pokemon-capture']"),
					pokemonSnipe: this.config.settingsMenuElement.find("[name='settings-notifications-toast-pokemon-snipe']"),
					pokemonEvolved: this.config.settingsMenuElement.find("[name='settings-notifications-toast-pokemon-evolved']"),
					eggHatched: this.config.settingsMenuElement.find("[name='settings-notifications-toast-egg-hatched']"),
					incubatorStatus: this.config.settingsMenuElement.find("[name='settings-notifications-toast-incubator-status']"),
					itemRecycle: this.config.settingsMenuElement.find("[name='settings-notifications-toast-item-recycle']"),
					pokemonTransfer: this.config.settingsMenuElement.find("[name='settings-notifications-toast-pokemon-transfer']")
				},
				notificationsAudio: {
					pokestopUsed: this.config.settingsMenuElement.find("[name='settings-notifications-audio-pokestop-used']"),
					pokemonCapture: this.config.settingsMenuElement.find("[name='settings-notifications-audio-pokemon-capture']"),
					pokemonSnipe: this.config.settingsMenuElement.find("[name='settings-notifications-audio-pokemon-snipe']"),
					pokemonEvolved: this.config.settingsMenuElement.find("[name='settings-notifications-audio-pokemon-evolved']"),
					eggHatched: this.config.settingsMenuElement.find("[name='settings-notifications-audio-egg-hatched']"),
					incubatorStatus: this.config.settingsMenuElement.find("[name='settings-notifications-audio-incubator-status']"),
					itemRecycle: this.config.settingsMenuElement.find("[name='settings-notifications-audio-item-recycle']"),
					pokemonTransfer: this.config.settingsMenuElement.find("[name='settings-notifications-audio-pokemon-transfer']")
				},
				notificationsJournalClearingAnimation: this.config.settingsMenuElement.find("[name='settings-notifications-journal-clearing-animation']")
			}
		}
		return a
	}(),
	HumanSnipeMenuController = function() {
		function a(a) {
			var b = this;
			this.updatePokemonListInner = function() {
				if (b.pokemonList) {
					b.config.snipeMenuElement.find(".pokemon").remove();
					for (var a = b.pokemonList, c = 0; c < a.length; c++) {
						var d = a[c],
							e = b.config.translationController.translation.pokemonNames[d.Id],
							f = Math.round((new Date(d.ExpiredTime).valueOf() - (new Date).valueOf()) / 1e3),
							g = d.IsCatching ? "walking-to" : 0 == d.Setting.Priority ? "targeted" : "",
							h = app.templates.SnipePokemonItem({
								PokemonName: e,
								Distance: d.Distance,
								Expired: f,
								Estimated: d.EstimatedTime,
								IsCatching: d.IsCatching,
								Priority: d.Setting.Priority,
								ClassName: g,
								UniqueId: d.UniqueId,
								Id: d.Id
							}),
							i = $(h);
						i.find(".snipe-him").click(b.onSetAsTarget), i.find(".delete").click(b.onRemoveSnipe), b.config.snipeMenuElement.append(i)
					}
				}
			}, this.onSetAsTarget = function(a) {
				var c = $(a.target).attr("data-uniqueId");
				b.config.requestSender.sendHumanSnipePokemonSnipeRequest(c)
			}, this.onRemoveSnipe = function(a) {
				var c = $(a.target).attr("data-uniqueId");
				$(a.target).closest(".pokemon").fadeOut(500), b.config.requestSender.sendHumanSnipePokemonRemoveRequest(c)
			}, this.pokemonListRequested = function(a) {}, this.updateSnipePokemonList = function(a) {
				b.pokemonList = a.Pokemons, b.updatePokemonListInner()
			}, this.config = a
		}
		return a
	}(),
	NotificationType;
! function(a) {
	a[a.PokestopUsed = 0] = "PokestopUsed", a[a.PokemonCapture = 1] = "PokemonCapture", a[a.PokemonSnipe = 2] = "PokemonSnipe", a[a.PokemonEvolved = 3] = "PokemonEvolved", a[a.EggHatched = 4] = "EggHatched", a[a.IncubatorStatus = 5] = "IncubatorStatus", a[a.ItemRecycle = 6] = "ItemRecycle", a[a.PokemonTransfer = 7] = "PokemonTransfer", a[a.HumanWalkSnipe = 8] = "HumanWalkSnipe", a[a.PokemonUpgraded = 9] = "PokemonUpgraded"
}(NotificationType || (NotificationType = {}));
var DesktopNotificationController = function() {
		function a(a) {
			var b = this;
			this.exampleClicked = function(a) {
				b.addNotificationExample()
			}, this.addHumanSnipeReachedDestination = function(a) {}, this.updateCurrentPermission = function(a) {
				b.config.permissionElement.text(a)
			}, this.addPokemonUpgraded = function(a) {}, this.addNotificationExample = function() {
				b.addNotification("Example", {
					body: "This is an example of a desktop notification",
					icon: ""
				})
			}, this.addNotificationPokeStopUsed = function(a) {
				b.config.notificationSettings.pokestopUsed && b.addNotification("Pokestop", {
					body: "" + a.Name,
					icon: "images/markers/Normal.png"
				})
			}, this.addNotificationPokemonCapture = function(a, c) {
				var d = a[a.length - 1];
				if ((d.IsSnipe || b.config.notificationSettings.pokemonCapture) && (!d.IsSnipe || b.config.notificationSettings.pokemonSnipe)) {
					var e = d.IsSnipe ? "Snipe" : "Catch",
						f = b.config.translationController.translation.pokemonNames[d.Id],
						g = Math.round(100 * d.Perfection) / 100;
					b.addNotification(e, {
						body: f + "\nCP: " + d.Cp + "\nIV: " + g + "\nLvl: " + d.Level,
						icon: "images/pokemon/" + d.Id + ".png"
					})
				}
			}, this.addNotificationPokemonEvolved = function(a) {
				if (b.config.notificationSettings.pokemonEvolved) {
					var c = b.config.translationController.translation.pokemonNames[a.Id];
					b.addNotification("Evolve", {
						body: "" + c,
						icon: "images/pokemon/" + a.Id + ".png"
					})
				}
			}, this.addNotificationPokemonTransfer = function(a) {
				if (b.config.notificationSettings.pokemonTransfer) {
					var c = b.config.translationController.translation.pokemonNames[a.PokemonId];
					b.addNotification("Transfer", {
						body: "" + c,
						icon: "images/pokemon/" + a.PokemonId + ".png"
					})
				}
			}, this.addNotificationItemRecycle = function(a) {
				b.config.notificationSettings.itemRecycle && b.addNotification("Recycle", {
					body: a.Count + " items",
					icon: "images/items/" + a.Id + ".png"
				})
			}, this.addNotificationEggHatched = function(a) {
				if (b.config.notificationSettings.eggHatched) {
					var c = b.config.translationController.translation.pokemonNames[a.PokemonId];
					b.addNotification("Hatch", {
						body: "" + c,
						icon: "images/pokemon/" + a.PokemonId + ".png"
					})
				}
			}, this.addNotificationIncubatorStatus = function(a) {
				if (b.config.notificationSettings.incubatorStatus) {
					var c = Math.round(100 * (a.KmToWalk - a.KmRemaining)) / 100;
					b.addNotification("Incubator", {
						body: c + " of " + a.KmToWalk + "km",
						icon: "images/items/0.png"
					})
				}
			}, this.addHumanWalkSnipeStart = function(a) {}, this.addNotification = function(a, c) {
				if ("undefined" == typeof Notification) return void b.updateCurrentPermission("unsupported");
				if (b.updateCurrentPermission(Notification.permission), "granted" !== Notification.permission) {
					if ("denied" !== Notification.permission) {
						var d = Notification.requestPermission();
						d.then(function(d) {
							if ("granted" === d) {
								new Notification(a, c)
							}
							b.updateCurrentPermission(d)
						}, function(a) {
							console.log(a)
						})
					}
				} else {
					new Notification(a, c)
				}
			}, this.onSettingsChanged = function(a, c) {
				b.config.notificationSettings = a.notificationsDesktop
			}, this.config = a, this.config.exampleButton.click(this.exampleClicked), this.config.settingsService.subscribe(this.onSettingsChanged)
		}
		return a
	}(),
	JournalNotificationController = function() {
		function a(a) {
			var b = this;
			this.clearAll = function(a) {
				var c = b.config.container.children(".event").get().reverse(),
					d = 0;
				c.forEach(function(a) {
					var c = $(a);
					c.delay(d).slideUp(300, function() {
						c.remove();
						var a = b.config.container.children(".event").length;
						b.config.notificationCounter.text(a)
					}), d += 50
				}), b.notifications = []
			}, this.exampleClicked = function(a) {
				b.addNotificationExample()
			}, this.addPokemonUpgraded = function(a) {
				var c = a;
				c.PokemonName = b.config.translationController.translation.pokemonNames[a.PokemonId], b.addNotification(c, app.templates.Notifications.Journals.PokemonUpgraded(c), "Upgrade")
			}, this.onUpdateTimerElapsed = function() {
				var a = Date.now();
				_.each(b.notifications, function(b) {
					var c = a - b.event.Timestamp,
						d = TimeUtils.timestampToDateStr(c),
						e = b.element.find(".timestamp");
					e.text(d + " ago")
				})
			}, this.addNotificationPokeStopUsed = function(a) {
				if (b.config.notificationSettings.pokestopUsed) {
					var c = "";
					_.each(a.ItemsList, function(a) {
						var d = StaticData.itemIds[a.Name],
							e = b.config.translationController.translation.itemNames[d];
						c += '<div class="item" title="' + e + '"><img src="images/items/' + d + '.png"/>x' + a.Count + "</div>"
					});
					var d = '<div class="info">\n                          ' + c + '\n                          <div class="stats">+' + a.Exp + "XP</div>\n                      </div>",
						e = a.InventoryFull ? "<span class=inv-full>inventory full</span>" : "",
						f = "\n" + e + '\nName            <span class="name"> ' + a.Name + ' </span><br/>\nGems            <span class="xp"> ' + a.Gems + " </span><br/>\n";
					b.addNotification(a, d, "pokestop", f)
				}
			}, this.addNotificationPokemonCapture = function(a, c) {
				var d = a[a.length - 1];
				if ((d.IsSnipe || b.config.notificationSettings.pokemonCapture) && (!d.IsSnipe || b.config.notificationSettings.pokemonSnipe)) {
					var e = b.config.translationController.translation.pokemonNames[d.Id],
						f = Math.round(100 * d.Perfection) / 100,
						g = d.IsSnipe ? "snipe" : "catch",
						h = '<div class="image">\n                            <img src="images/pokemon/' + d.Id + '.png"/>\n                        </div>\n                        <div class="info">\n                            ' + e + '\n                            <div class="stats">CP ' + d.Cp + " | Lvl " + d.Level + " | IV " + f + "%</div>\n                        </div>",
						i = "";
					_.each(c, function(a) {
						return i += '<img src="images/items/' + a + '.png">'
					});
					var j = '\nUsed            <span class="attempts">' + i + '</span><br/>\nAttempts        <span class="attempts">' + a.length + '</span><br/>\nProbability     <span class="probability"> ' + d.Probability + '% </span><br/>\nXP              <span class="xp"> ' + d.Exp + ' </span><br/>\nCandies         <span class="candies"> ' + d.FamilyCandies + ' </span><br/>\nCatch Type      <span class="catch-type"> ' + d.CatchType + ' </span><br/>\nLevel           <span class="level"> ' + d.Level + ' </span><br/>\nIV              <span class="level"> ' + f + ' </span><br/>\nCP              <span class="cp"> ' + d.Cp + ' </span>/<span class="max-cp"> ' + d.MaxCp + " </span><br/>\n";
					b.addNotification(d, h, g, j)
				}
			}, this.addNotificationPokemonEvolved = function(a) {
				if (b.config.notificationSettings.pokemonEvolved) {
					var c = b.config.translationController.translation.pokemonNames[a.Id],
						d = '<div class="image">\n                          <img src="images/pokemon/' + a.Id + '.png"/>\n                      </div>\n                      <div class="info">\n                          ' + c + '\n                          <div class="stats">+' + a.Exp + "XP</div>\n                      </div>";
					b.addNotification(a, d, "evolve")
				}
			}, this.addNotificationEggHatched = function(a) {
				if (b.config.notificationSettings.eggHatched) {
					var c = b.config.translationController.translation.pokemonNames[a.PokemonId],
						d = Math.round(100 * a.Perfection) / 100,
						e = '<div class="image">\n                          <img src="images/pokemon/' + a.PokemonId + '.png"/>\n                      </div>\n                      <div class="info">\n                          ' + c + '\n                          <div class="stats">CP ' + a.Cp + " | IV " + d + "%</div>\n                      </div>",
						f = '\nLevel           <span class="level"> ' + a.Level + ' </span><br/>\nIV              <span class="level"> ' + d + ' </span><br/>\nCP              <span class="cp"> ' + a.Cp + ' </span>/<span class="max-cp"> ' + a.MaxCp + " </span><br/>\n";
					b.addNotification(a, e, "egg-hatched", f)
				}
			}, this.addNotificationIncubatorStatus = function(a) {
				if (b.config.notificationSettings.incubatorStatus) {
					var c = Math.round(100 * (a.KmToWalk - a.KmRemaining)) / 100,
						d = '<div class="image">\n                          <img src="images/items/0.png"/>\n                      </div>\n                      <div class="info">Egg\n                          <div class="stats">' + c + " of " + a.KmToWalk + "km</div>\n                      </div>";
					b.addNotification(a, d, "incubator-status")
				}
			}, this.addNotificationItemRecycle = function(a) {
				if (b.config.notificationSettings.itemRecycle) {
					var c = b.config.translationController.translation.itemNames[a.Id],
						d = '<div class="info" title="' + c + '">\n                          <div class="item"><img src="images/items/' + a.Id + '.png"/>x' + a.Count + '</div>\n                          <div class="stats">+' + a.Count + " free space</div>\n                      </div>";
					b.addNotification(a, d, "recycle")
				}
			}, this.addHumanSnipeReachedDestination = function() {}, this.addHumanWalkSnipeStart = function(a) {
				var c = a;
				b.addNotification(a, app.templates.Notifications.Journals.SnipeStartNotification(c), "Snipe")
			}, this.addNotificationPokemonTransfer = function(a) {
				if (b.config.notificationSettings.pokemonTransfer) {
					var c = b.config.translationController.translation.pokemonNames[a.PokemonId],
						d = Math.round(100 * a.Perfection) / 100,
						e = '<div class="image">\n                          <img src="images/pokemon/' + a.PokemonId + '.png"/>\n                      </div>\n                      <div class="info">\n                          ' + c + '\n                          <div class="stats">CP ' + a.Cp + " | IV " + d + "%</div>\n                      </div>";
					b.addNotification(a, e, "transfer")
				}
			}, this.addNotification = function(a, c, d, e) {
				e = e || "";
				var f = b.config.translationController.translation.eventTypes[d] || d,
					g = moment().format("MMMM Do YYYY, HH:mm:ss"),
					h = '<div class="event ' + d + '">\n    <div class="item-container">\n        <i class="fa fa-times dismiss"></i>\n        ' + c + '\n        <span class="event-type">' + f + '</span>\n        <span class="timestamp">0 seconds ago</span>\n        <div class="category"></div>\n    </div>\n    <div class="extended-info">\n        Date <span class="extended-date">' + g + "</span><br/>\n        " + e + "\n    </div>\n</div>",
					i = $(h);
				i.click(b.toggleExtendedInfo), i.find(".dismiss").click(b.closeNotification);
				var j = b.isAtBottom();
				b.config.container.append(i), b.notifications.push({
					event: a,
					element: i
				}), j && b.scrollToBottom(), b.config.notificationCounter.text(b.notifications.length)
			}, this.isAtBottom = function() {
				var a = b.config.container.scrollTop(),
					c = b.config.container.innerHeight(),
					d = b.config.container[0].scrollHeight,
					e = a + c > d - 200;
				return e
			}, this.scrollToBottom = function() {
				var a = {
					scrollTop: b.config.container.prop("scrollHeight") - b.config.container.height()
				};
				b.config.container.finish().animate(a, 100)
			}, this.toggleExtendedInfo = function(a) {
				var b = $(a.target).closest(".event");
				b.find(".extended-info").slideToggle(500, "easeOutQuint")
			}, this.closeNotification = function(a) {
				var c = $(a.target),
					d = c.closest(".event");
				d.slideUp(300, function() {
					d.remove(), _.remove(b.notifications, function(a) {
						return a.element.is(d)
					}), b.config.notificationCounter.text(b.notifications.length);
				})
			}, this.onSettingsChanged = function(a, c) {
				b.config.notificationSettings = a.notificationsJournal
			}, this.config = a, this.notifications = [], this.timeUpdaterInterval = setInterval(this.onUpdateTimerElapsed, 1e3), this.config.clearAllButton.click(this.clearAll), this.config.exampleButton.click(this.exampleClicked), this.config.settingsService.subscribe(this.onSettingsChanged)
		}
		return a.prototype.addNotificationExample = function() {
			var a = '<div class="info">Click for more</div>',
				b = "This is an example notification.<br/>Extended information about the event will be added here.",
				c = {
					Timestamp: Date.now()
				};
			this.addNotification(c, a, "example", b)
		}, a
	}(),
	ToastNotificationController = function() {
		function a(a) {
			var b = this;
			this.exampleClicked = function(a) {
				b.addNotificationExample()
			}, this.addNotificationExample = function() {
				b.addNotification("Example", "This is a toast notification")
			}, this.addHumanSnipeReachedDestination = function(a) {
				b.addNotification("Snipe reach", "Searching for pokemon ....", "#2196f3", "#fff", Math.max(3e3, 1e3 * a.PauseDuration))
			}, this.addHumanWalkSnipeStart = function(a) {}, this.addNotificationPokeStopUsed = function(a) {
				b.config.notificationSettings.pokestopUsed && b.addNotification("Pokestop", a.Name)
			}, this.addPokemonUpgraded = function(a) {}, this.addNotificationPokemonCapture = function(a, c) {
				var d = a[a.length - 1];
				if ((d.IsSnipe || b.config.notificationSettings.pokemonCapture) && (!d.IsSnipe || b.config.notificationSettings.pokemonSnipe)) {
					var e = d.IsSnipe ? "Snipe" : "Catch",
						f = b.config.translationController.translation.pokemonNames[d.Id];
					Math.round(100 * d.Perfection) / 100;
					b.addNotification(e, f)
				}
			}, this.addNotificationPokemonEvolved = function(a) {
				if (b.config.notificationSettings.pokemonEvolved) {
					var c = b.config.translationController.translation.pokemonNames[a.Id];
					b.addNotification("Evolve", c)
				}
			}, this.addNotificationPokemonTransfer = function(a) {
				if (b.config.notificationSettings.pokemonTransfer) {
					var c = b.config.translationController.translation.pokemonNames[a.PokemonId];
					b.addNotification("Transfer", c)
				}
			}, this.addNotificationItemRecycle = function(a) {
				b.config.notificationSettings.itemRecycle && b.addNotification("Recycle", a.Count + " items")
			}, this.addNotificationEggHatched = function(a) {
				if (b.config.notificationSettings.eggHatched) {
					var c = b.config.translationController.translation.pokemonNames[a.PokemonId];
					b.addNotification("Hatch", c)
				}
			}, this.addNotificationIncubatorStatus = function(a) {
				if (b.config.notificationSettings.incubatorStatus) {
					var c = Math.round(100 * (a.KmToWalk - a.KmRemaining)) / 100;
					b.addNotification("Incubator", c + " of " + a.KmToWalk + "km")
				}
			}, this.addNotification = function(a, c, d, e, f) {
				void 0 === c && (c = ""), void 0 === d && (d = "#2196f3"), void 0 === e && (e = "#ffffff"), void 0 === f && (f = 2500), b.config.toastControler.addToast(a, c, d, e, f)
			}, this.onSettingsChanged = function(a, c) {
				b.config.notificationSettings = a.notificationsToast
			}, this.config = a, this.config.exampleButton.click(this.exampleClicked), this.config.settingsService.subscribe(this.onSettingsChanged)
		}
		return a
	}(),
	ProfileInfoController = function() {
		function a(a) {
			var b = this;
			this.setProfileData = function(a) {
				b.config.profileInfoElement.find(".profile-username").text(" " + a.PlayerData.Username + " "), b.config.profileInfoElement.find(".profile-pokecoin").text(a.PlayerData.PokeCoin), b.config.profileInfoElement.find(".profile-stardust-current").text(a.PlayerData.StarDust), b.config.profileInfoElement.find(".profile-stardust-loading").remove(), b.config.profileInfoElement.find(".profile-stardust-loaded").show()
			}, this.setPlayerStats = function(a) {
				b.addExp(a.Experience)
			}, this.addStardust = function(a, c) {
				var d = b.config.profileInfoElement.find(".profile-stardust-current");
				if (b.config.profileInfoElement.find(".profile-stardust-loading").remove(), b.config.profileInfoElement.find(".profile-stardust-loaded").show(), b.animateTo(d, a), c) {
					var e = b.config.profileInfoElement.find(".profile-stardust");
					b.bubble(e, "stardust-bubble", c)
				}
			}, this.addExp = function(a, c) {
				var d = StaticData.calculateCurrentLevel(a),
					e = a - StaticData.totalExpForLevel[d],
					f = StaticData.expForLevel[d + 1],
					g = 100 * e / f;
				if (b.config.profileInfoElement.find(".profile-lvl").text(" lvl " + d + " "), b.animateTo(b.config.profileInfoElement.find(".profile-exp-current"), e), b.animateTo(b.config.profileInfoElement.find(".profile-exp-next"), f), b.config.profileInfoElement.find(".current-xp").css("width", g + "%"), b.config.profileInfoElement.find(".profile-exp-loading").remove(), b.config.profileInfoElement.find(".profile-exp-loaded").show(), b.config.profileInfoElement.find(".xp-progress").show(), c) {
					var h = b.config.profileInfoElement.find(".profile-exp");
					b.bubble(h, "xp-bubble", c)
				}
			}, this.bubble = function(a, b, c) {
				var d = '<div class="' + b + '">+' + c + "</div>",
					e = $(d);
				a.append(e), setTimeout(function() {
					e.remove()
				}, 1e3)
			}, this.config = a, this.config.hideUsername && this.config.profileInfoElement.find(".profile-username").hide()
		}
		return a.prototype.animateTo = function(a, b) {
			var c = parseInt(a.text());
			a.prop("number", c), a.animateNumber({
				number: b
			})
		}, a
	}(),
	ToastController = function() {
		function a(a) {
			var b = this;
			this.addToast = function(a, c, d, e, f) {
				b.config.toastElement.text(a), b.config.toastElement.append("<div class='countdown'></div>"), b.config.toastElement.css({
					"background-color": d,
					color: e
				}), c.length > 0 && b.config.toastElement.append("<div class='description'>" + c + "</div>"), b.config.toastElement.finish().animate({
					top: "25px"
				}, 500, "easeOutBack");
				var g = b.config.toastElement.find(".countdown");
				g.finish().animate({
					width: "0"
				}, f, "linear");
				var h = -(b.config.toastElement.outerHeight() + 2);
				b.config.toastElement.delay(f - 500).animate({
					top: h
				}, 500, "easeInOutQuart")
			}, this.config = a
		}
		return a
	}(),
	InterfaceHandler = function() {
		function a(a) {
			var b = this;
			this.onPlayerLevelUp = function(a) {}, this.onUpdatePosition = function(a) {
				b.currentlySniping || b.config.map.movePlayer(a)
			}, this.onPokeStopList = function(a) {
				b.pokeStops || (b.pokeStops = []), b.gyms || (b.gyms = []);
				for (var c = 0; c < a.length; c++)
					if (b.config.fortCacheService.addFort(a[c], !0), 1 === a[c].Type) {
						var d = a[c];
						if (d.Status = PokeStopStatus.Normal, d.CooldownCompleteTimestampMs) {
							var e = TimeUtils.getCurrentTimestampMs();
							d.CooldownCompleteTimestampMs > e && (d.Status |= PokeStopStatus.Visited)
						}
						null !== d.LureInfo && (d.Status |= PokeStopStatus.Lure), b.addFortToList(d, b.pokeStops)
					} else b.addFortToList(a[c], b.gyms);
				b.config.map.setPokeStops(b.pokeStops), b.config.map.setGyms(b.gyms)
			}, this.addFortToList = function(a, b) {
				var c = _.findIndex(b, function(b) {
					return b.Id === a.Id
				});
				c === -1 ? b.push(a) : (a.Name = b[c].Name, b[c] = a)
			}, this.onPokemonCapture = function(a) {
				if (b.currentItemCount--, b.config.mainMenuController.setItemCount(b.currentItemCount), b.previousCaptureAttempts.length > 0 && b.previousCaptureAttempts[0].Id !== a.Id && (b.previousCaptureAttempts = [], b.itemsUsedForCapture.length > 0)) {
					var c = _.last(b.itemsUsedForCapture);
					StaticData.berryIds.indexOf(c) === -1 && (b.itemsUsedForCapture = [])
				}
				if (b.previousCaptureAttempts.push(a), b.itemsUsedForCapture.push(a.Pokeball), a.Status === PokemonCatchStatus.Success) {
					b.config.map.onPokemonCapture(a), _.each(b.config.notificationControllers, function(a) {
						return a.addNotificationPokemonCapture(b.previousCaptureAttempts, b.itemsUsedForCapture)
					}), b.currentExp += a.Exp, b.config.profileInfoController.addExp(b.currentExp, a.Exp);
					var d = b.currentStardust;
					a.Stardust - d;
					b.currentStardust = a.Stardust, b.config.profileInfoController.addStardust(a.Stardust, 100), b.currentPokemonCount++, b.config.mainMenuController.setPokemonCount(b.currentPokemonCount)
				}
			}, this.onSendRecycleRequest = function(a) {}, this.onMoveToTargetRequest = function(a) {}, this.onSettingsChanged = function(a, c) {
				b.config.map.config.followPlayer = a.mapFolllowPlayer
			}, this.config = a, this.config.settingsService.subscribe(this.onSettingsChanged), this.currentlySniping = !1, this.previousCaptureAttempts = [], this.itemsUsedForCapture = [], this.currentExp = 0, this.currentStardust = 0, this.currentPokemonCount = 0, this.currentItemCount = 0, this.latestPlayerStats = null
		}
		return a.prototype.onPokemonUpgraded = function(a) {
			this.config.pokemonMenuController.updatePokemonAfterUpgraded(a), _.each(this.config.notificationControllers, function(b) {
				return b.addPokemonUpgraded(a)
			})
		}, a.prototype.onSendUpgradePokemonRequest = function(a) {}, a.prototype.onLog = function(a) {
			this.config.consoleController.log(a)
		}, a.prototype.onFortTarget = function(a) {
			this.config.map.targetFort(a)
		}, a.prototype.onFortUsed = function(a) {
			var b = _.sum(_.map(a.ItemsList, function(a) {
				return a.Count
			}));
			this.currentItemCount += b, this.config.mainMenuController.setItemCount(this.currentItemCount), this.config.fortCacheService.setName(a.Id, a.Name);
			var c = _.find(this.pokeStops, function(b) {
				return b.Id === a.Id
			});
			c && (c.Name = a.Name), this.config.map.usePokeStop(a), this.currentExp += a.Exp, _.each(this.config.notificationControllers, function(b) {
				return b.addNotificationPokeStopUsed(a)
			}), this.config.profileInfoController.addExp(this.currentExp, a.Exp)
		}, a.prototype.onProfile = function(a) {
			this.config.mainMenuController.updateProfileData(a), this.config.profileInfoController.setProfileData(a), this.config.requestSender.sendGetConfigRequest(), this.config.requestSender.sendPlayerStatsRequest(), this.config.requestSender.sendGetPokemonSettingsRequest(), this.config.requestSender.sendPokemonSnipeListUpdateRequest(), this.config.requestSender.sendInventoryListRequest(), this.config.requestSender.sendPokemonListRequest(), this.config.requestSender.sendEggsListRequest()
		}, a.prototype.onUseBerry = function(a) {
			this.currentItemCount--, this.config.mainMenuController.setItemCount(this.currentItemCount);
			var b = a.BerryType || StaticData.berryIds[0];
			this.itemsUsedForCapture.push(b)
		}, a.prototype.onEvolveCount = function(a) {}, a.prototype.onPokemonEvolve = function(a) {
			_.each(this.config.notificationControllers, function(b) {
				return b.addNotificationPokemonEvolved(a)
			}), this.currentExp += a.Exp, this.config.profileInfoController.addExp(this.currentExp, a.Exp)
		}, a.prototype.onSnipeScan = function(a) {}, a.prototype.onSnipeMode = function(a) {
			this.currentlySniping = a.Active
		}, a.prototype.onSnipeMessage = function(a) {}, a.prototype.onUpdate = function(a) {}, a.prototype.onWarn = function(a) {}, a.prototype.onEggHatched = function(a) {
			_.each(this.config.notificationControllers, function(b) {
				return b.addNotificationEggHatched(a)
			})
		}, a.prototype.onIncubatorStatus = function(a) {
			_.each(this.config.notificationControllers, function(b) {
				return b.addNotificationIncubatorStatus(a)
			})
		}, a.prototype.onItemRecycle = function(a) {
			_.each(this.config.notificationControllers, function(b) {
				return b.addNotificationItemRecycle(a)
			}), this.currentItemCount -= a.Count, this.config.mainMenuController.setItemCount(this.currentItemCount)
		}, a.prototype.onPokemonTransfer = function(a) {
			_.each(this.config.notificationControllers, function(b) {
				return b.addNotificationPokemonTransfer(a)
			}), this.currentPokemonCount--, this.config.mainMenuController.setPokemonCount(this.currentPokemonCount)
		}, a.prototype.onGetConfig = function(a) {
			this.config.botConfigMenuController.setBotConfig(a)
		}, a.prototype.onPokemonList = function(a) {
			this.config.pokemonMenuController.updatePokemonList(a), this.currentPokemonCount = a.Pokemons.length, this.config.mainMenuController.setPokemonCount(this.currentPokemonCount)
		}, a.prototype.onEggList = function(a) {
			var b = _.filter(a.Incubators, function(a) {
					return "0" != a.PokemonId
				}).length,
				c = a.UnusedEggs.length;
			this.config.requestSender.currentBotFamily === BotFamily.Necro ? this.config.eggMenuController.updateEggList(a, this.latestPlayerStats.KmWalked) : this.config.eggMenuController.updateEggList(a), this.config.mainMenuController.setEggCount(b + c)
		}, a.prototype.onInventoryList = function(a) {
			var b = _.sum(_.map(a.Items, function(a) {
				return a.Count
			}));
			this.config.inventoryMenuController.updateInventoryList(a), this.currentItemCount = b, this.config.mainMenuController.setItemCount(this.currentItemCount)
		}, a.prototype.onPlayerStats = function(a) {
			this.currentExp = a.Experience, this.config.profileInfoController.setPlayerStats(a), this.latestPlayerStats = a
		}, a.prototype.onSendGetConfigRequest = function(a) {}, a.prototype.onSendPokemonListRequest = function(a) {
			this.config.pokemonMenuController.pokemonListRequested(a)
		}, a.prototype.onSendEggsListRequest = function(a) {
			this.config.eggMenuController.eggListRequested(a)
		}, a.prototype.onHumanSnipeList = function(a) {
			this.config.snipesMenuController.updateSnipePokemonList(a);
			var b = a.Pokemons.length;
			this.config.mainMenuController.setSnipePokemonCount(b), this.config.mainMenuController.showSnipesMenu()
		}, a.prototype.onHumanSnipeReachedDestination = function(a) {
			this.config.map.onHumanSnipeReachedDestination(a), _.each(this.config.notificationControllers, function(b) {
				return b.addHumanSnipeReachedDestination(a)
			})
		}, a.prototype.onHumanSnipeStart = function(a) {
			a.PokemonName = this.config.translationController.translation.pokemonNames[a.PokemonId], this.config.map.onSnipePokemonStart(a), _.each(this.config.notificationControllers, function(b) {
				return b.addHumanWalkSnipeStart(a)
			})
		}, a.prototype.onSendInventoryListRequest = function(a) {
			this.config.inventoryMenuController.inventoryListRequested(a)
		}, a.prototype.onSendHumanSnipePokemonRequest = function(a) {}, a.prototype.onSendHumanSnipPokemonListUpdateRequest = function(a) {}, a.prototype.onSendHumanSnipePokemonRemoveRequest = function(a) {
			var b = this.currentSnipePokemonCount - 1;
			this.config.mainMenuController.setSnipePokemonCount(b)
		}, a.prototype.onSendPlayerStatsRequest = function(a) {}, a.prototype.onSendGetPokemonSettingsRequest = function(a) {}, a.prototype.onSendTransferPokemonRequest = function(a) {}, a.prototype.onSendEvolvePokemonRequest = function(a) {}, a
	}(),
	rawData = {
		success: !0,
		itemTemplates: [{
			templateId: "BADGE_BATTLE_ATTACK_WON",
			badgeSettings: {
				badgeType: "BADGE_BATTLE_ATTACK_WON",
				badgeRank: 4,
				targets: [10, 100, 1e3]
			}
		}, {
			templateId: "BADGE_BATTLE_TRAINING_WON",
			badgeSettings: {
				badgeType: "BADGE_BATTLE_TRAINING_WON",
				badgeRank: 4,
				targets: [10, 100, 1e3]
			}
		}, {
			templateId: "BADGE_BIG_MAGIKARP",
			badgeSettings: {
				badgeType: "BADGE_BIG_MAGIKARP",
				badgeRank: 4,
				targets: [3, 50, 300]
			}
		}, {
			templateId: "BADGE_CAPTURE_TOTAL",
			badgeSettings: {
				badgeType: "BADGE_CAPTURE_TOTAL",
				badgeRank: 4,
				targets: [30, 500, 2e3]
			}
		}, {
			templateId: "BADGE_EVOLVED_TOTAL",
			badgeSettings: {
				badgeType: "BADGE_EVOLVED_TOTAL",
				badgeRank: 4,
				targets: [3, 20, 200]
			}
		}, {
			templateId: "BADGE_HATCHED_TOTAL",
			badgeSettings: {
				badgeType: "BADGE_HATCHED_TOTAL",
				badgeRank: 4,
				targets: [10, 100, 500]
			}
		}, {
			templateId: "BADGE_PIKACHU",
			badgeSettings: {
				badgeType: "BADGE_PIKACHU",
				badgeRank: 4,
				targets: [3, 50, 300]
			}
		}, {
			templateId: "BADGE_POKEDEX_ENTRIES",
			badgeSettings: {
				badgeType: "BADGE_POKEDEX_ENTRIES",
				badgeRank: 4,
				targets: [5, 50, 100]
			}
		}, {
			templateId: "BADGE_POKESTOPS_VISITED",
			badgeSettings: {
				badgeType: "BADGE_POKESTOPS_VISITED",
				badgeRank: 4,
				targets: [100, 1e3, 2e3]
			}
		}, {
			templateId: "BADGE_SMALL_RATTATA",
			badgeSettings: {
				badgeType: "BADGE_SMALL_RATTATA",
				badgeRank: 4,
				targets: [3, 50, 300]
			}
		}, {
			templateId: "BADGE_TRAVEL_KM",
			badgeSettings: {
				badgeType: "BADGE_TRAVEL_KM",
				badgeRank: 4,
				targets: [10, 100, 1e3]
			}
		}, {
			templateId: "BADGE_TYPE_BUG",
			badgeSettings: {
				badgeType: "BADGE_TYPE_BUG",
				badgeRank: 4,
				targets: [10, 50, 200]
			}
		}, {
			templateId: "BADGE_TYPE_DARK",
			badgeSettings: {
				badgeType: "BADGE_TYPE_DARK",
				badgeRank: 4,
				targets: [10, 50, 200]
			}
		}, {
			templateId: "BADGE_TYPE_DRAGON",
			badgeSettings: {
				badgeType: "BADGE_TYPE_DRAGON",
				badgeRank: 4,
				targets: [10, 50, 200]
			}
		}, {
			templateId: "BADGE_TYPE_ELECTRIC",
			badgeSettings: {
				badgeType: "BADGE_TYPE_ELECTRIC",
				badgeRank: 4,
				targets: [10, 50, 200]
			}
		}, {
			templateId: "BADGE_TYPE_FAIRY",
			badgeSettings: {
				badgeType: "BADGE_TYPE_FAIRY",
				badgeRank: 4,
				targets: [10, 50, 200]
			}
		}, {
			templateId: "BADGE_TYPE_FIGHTING",
			badgeSettings: {
				badgeType: "BADGE_TYPE_FIGHTING",
				badgeRank: 4,
				targets: [10, 50, 200]
			}
		}, {
			templateId: "BADGE_TYPE_FIRE",
			badgeSettings: {
				badgeType: "BADGE_TYPE_FIRE",
				badgeRank: 4,
				targets: [10, 50, 200]
			}
		}, {
			templateId: "BADGE_TYPE_FLYING",
			badgeSettings: {
				badgeType: "BADGE_TYPE_FLYING",
				badgeRank: 4,
				targets: [10, 50, 200]
			}
		}, {
			templateId: "BADGE_TYPE_GHOST",
			badgeSettings: {
				badgeType: "BADGE_TYPE_GHOST",
				badgeRank: 4,
				targets: [10, 50, 200]
			}
		}, {
			templateId: "BADGE_TYPE_GRASS",
			badgeSettings: {
				badgeType: "BADGE_TYPE_GRASS",
				badgeRank: 4,
				targets: [10, 50, 200]
			}
		}, {
			templateId: "BADGE_TYPE_GROUND",
			badgeSettings: {
				badgeType: "BADGE_TYPE_GROUND",
				badgeRank: 4,
				targets: [10, 50, 200]
			}
		}, {
			templateId: "BADGE_TYPE_ICE",
			badgeSettings: {
				badgeType: "BADGE_TYPE_ICE",
				badgeRank: 4,
				targets: [10, 50, 200]
			}
		}, {
			templateId: "BADGE_TYPE_NORMAL",
			badgeSettings: {
				badgeType: "BADGE_TYPE_NORMAL",
				badgeRank: 4,
				targets: [10, 50, 200]
			}
		}, {
			templateId: "BADGE_TYPE_POISON",
			badgeSettings: {
				badgeType: "BADGE_TYPE_POISON",
				badgeRank: 4,
				targets: [10, 50, 200]
			}
		}, {
			templateId: "BADGE_TYPE_PSYCHIC",
			badgeSettings: {
				badgeType: "BADGE_TYPE_PSYCHIC",
				badgeRank: 4,
				targets: [10, 50, 200]
			}
		}, {
			templateId: "BADGE_TYPE_ROCK",
			badgeSettings: {
				badgeType: "BADGE_TYPE_ROCK",
				badgeRank: 4,
				targets: [10, 50, 200]
			}
		}, {
			templateId: "BADGE_TYPE_STEEL",
			badgeSettings: {
				badgeType: "BADGE_TYPE_STEEL",
				badgeRank: 4,
				targets: [10, 50, 200]
			}
		}, {
			templateId: "BADGE_TYPE_WATER",
			badgeSettings: {
				badgeType: "BADGE_TYPE_WATER",
				badgeRank: 4,
				targets: [10, 50, 200]
			}
		}, {
			templateId: "BATTLE_SETTINGS",
			battleSettings: {
				retargetSeconds: .5,
				enemyAttackInterval: 1.5,
				attackServerInterval: 5,
				roundDurationSeconds: 99,
				bonusTimePerAllySeconds: 10,
				maximumAttackersPerBattle: 20,
				sameTypeAttackBonusMultiplier: 1.25,
				maximumEnergy: 100,
				energyDeltaPerHealthLost: .5,
				dodgeDurationMs: 500,
				minimumPlayerLevel: 5,
				swapDurationMs: 1e3,
				dodgeDamageReductionPercent: .75
			}
		}, {
			templateId: "ENCOUNTER_SETTINGS",
			encounterSettings: {
				spinBonusThreshold: .5,
				excellentThrowThreshold: 1.7,
				greatThrowThreshold: 1.3,
				niceThrowThreshold: 1,
				milestoneThreshold: 100
			}
		}, {
			templateId: "GYM_LEVEL_SETTINGS",
			gymLevel: {
				requiredExperience: [0, 2e3, 4e3, 8e3, 12e3, 16e3, 2e4, 3e4, 4e4, 5e4],
				leaderSlots: [1, 1, 1, 2, 2, 2, 3, 3, 3, 4],
				trainerSlots: [0, 1, 2, 2, 3, 4, 4, 5, 6, 6]
			}
		}, {
			templateId: "IAP_SETTINGS",
			iapSettings: {
				dailyDefenderBonusPerPokemon: [500, 10],
				dailyDefenderBonusMaxDefenders: 10,
				dailyDefenderBonusCurrency: ["STARDUST", "POKECOIN"],
				minTimeBetweenClaimsMs: "75600000",
				dailyDefenderBonusEnabled: !0
			}
		}, {
			templateId: "ITEM_BLUK_BERRY",
			itemSettings: {
				itemId: "ITEM_BLUK_BERRY",
				itemType: "ITEM_TYPE_FOOD",
				category: "ITEM_CATEGORY_FOOD"
			}
		}, {
			templateId: "ITEM_GREAT_BALL",
			itemSettings: {
				itemId: "ITEM_GREAT_BALL",
				itemType: "ITEM_TYPE_POKEBALL",
				category: "ITEM_CATEGORY_POKEBALL"
			}
		}, {
			templateId: "ITEM_HYPER_POTION",
			itemSettings: {
				itemId: "ITEM_HYPER_POTION",
				itemType: "ITEM_TYPE_POTION",
				category: "ITEM_CATEGORY_MEDICINE",
				potion: {
					staAmount: 200
				}
			}
		}, {
			templateId: "ITEM_INCENSE_ORDINARY",
			itemSettings: {
				itemId: "ITEM_INCENSE_ORDINARY",
				itemType: "ITEM_TYPE_INCENSE",
				category: "ITEM_CATEGORY_INCENSE",
				incense: {
					incenseLifetimeSeconds: 1800,
					standingTimeBetweenEncountersSeconds: 300,
					movingTimeBetweenEncounterSeconds: 60,
					distanceRequiredForShorterIntervalMeters: 200
				}
			}
		}, {
			templateId: "ITEM_INCUBATOR_BASIC",
			itemSettings: {
				itemId: "ITEM_INCUBATOR_BASIC",
				itemType: "ITEM_TYPE_INCUBATOR",
				category: "ITEM_CATEGORY_INCUBATOR",
				eggIncubator: {
					incubatorType: "INCUBATOR_DISTANCE",
					uses: 3,
					distanceMultiplier: 1
				}
			}
		}, {
			templateId: "ITEM_INCUBATOR_BASIC_UNLIMITED",
			itemSettings: {
				itemId: "ITEM_INCUBATOR_BASIC_UNLIMITED",
				itemType: "ITEM_TYPE_INCUBATOR",
				category: "ITEM_CATEGORY_INCUBATOR",
				eggIncubator: {
					incubatorType: "INCUBATOR_DISTANCE",
					distanceMultiplier: 1
				}
			}
		}, {
			templateId: "ITEM_ITEM_STORAGE_UPGRADE",
			itemSettings: {
				itemId: "ITEM_ITEM_STORAGE_UPGRADE",
				itemType: "ITEM_TYPE_INVENTORY_UPGRADE",
				category: "ITEM_CATEGORY_INVENTORY_UPGRADE",
				inventoryUpgrade: {
					additionalStorage: 50,
					upgradeType: "INCREASE_ITEM_STORAGE"
				}
			}
		}, {
			templateId: "ITEM_LUCKY_EGG",
			itemSettings: {
				itemId: "ITEM_LUCKY_EGG",
				itemType: "ITEM_TYPE_XP_BOOST",
				category: "ITEM_CATEGORY_XP_BOOST",
				xpBoost: {
					xpMultiplier: 2,
					boostDurationMs: 18e5
				}
			}
		}, {
			templateId: "ITEM_MASTER_BALL",
			itemSettings: {
				itemId: "ITEM_MASTER_BALL",
				itemType: "ITEM_TYPE_POKEBALL",
				category: "ITEM_CATEGORY_POKEBALL"
			}
		}, {
			templateId: "ITEM_MAX_POTION",
			itemSettings: {
				itemId: "ITEM_MAX_POTION",
				itemType: "ITEM_TYPE_POTION",
				category: "ITEM_CATEGORY_MEDICINE",
				potion: {
					staPercent: 1
				}
			}
		}, {
			templateId: "ITEM_MAX_REVIVE",
			itemSettings: {
				itemId: "ITEM_MAX_REVIVE",
				itemType: "ITEM_TYPE_REVIVE",
				category: "ITEM_CATEGORY_MEDICINE",
				revive: {
					staPercent: 1
				}
			}
		}, {
			templateId: "ITEM_NANAB_BERRY",
			itemSettings: {
				itemId: "ITEM_NANAB_BERRY",
				itemType: "ITEM_TYPE_FOOD",
				category: "ITEM_CATEGORY_FOOD"
			}
		}, {
			templateId: "ITEM_PINAP_BERRY",
			itemSettings: {
				itemId: "ITEM_PINAP_BERRY",
				itemType: "ITEM_TYPE_FOOD",
				category: "ITEM_CATEGORY_FOOD"
			}
		}, {
			templateId: "ITEM_POKEMON_STORAGE_UPGRADE",
			itemSettings: {
				itemId: "ITEM_POKEMON_STORAGE_UPGRADE",
				itemType: "ITEM_TYPE_INVENTORY_UPGRADE",
				category: "ITEM_CATEGORY_INVENTORY_UPGRADE",
				inventoryUpgrade: {
					additionalStorage: 50,
					upgradeType: "INCREASE_POKEMON_STORAGE"
				}
			}
		}, {
			templateId: "ITEM_POKE_BALL",
			itemSettings: {
				itemId: "ITEM_POKE_BALL",
				itemType: "ITEM_TYPE_POKEBALL",
				category: "ITEM_CATEGORY_POKEBALL"
			}
		}, {
			templateId: "ITEM_POTION",
			itemSettings: {
				itemId: "ITEM_POTION",
				itemType: "ITEM_TYPE_POTION",
				category: "ITEM_CATEGORY_MEDICINE",
				potion: {
					staAmount: 20
				}
			}
		}, {
			templateId: "ITEM_RAZZ_BERRY",
			itemSettings: {
				itemId: "ITEM_RAZZ_BERRY",
				itemType: "ITEM_TYPE_FOOD",
				category: "ITEM_CATEGORY_FOOD"
			}
		}, {
			templateId: "ITEM_REVIVE",
			itemSettings: {
				itemId: "ITEM_REVIVE",
				itemType: "ITEM_TYPE_REVIVE",
				category: "ITEM_CATEGORY_MEDICINE",
				revive: {
					staPercent: .5
				}
			}
		}, {
			templateId: "ITEM_SPECIAL_CAMERA",
			itemSettings: {
				itemId: "ITEM_SPECIAL_CAMERA",
				itemType: "ITEM_TYPE_CAMERA",
				category: "ITEM_CATEGORY_CAMERA"
			}
		}, {
			templateId: "ITEM_SUPER_POTION",
			itemSettings: {
				itemId: "ITEM_SUPER_POTION",
				itemType: "ITEM_TYPE_POTION",
				category: "ITEM_CATEGORY_MEDICINE",
				potion: {
					staAmount: 50
				}
			}
		}, {
			templateId: "ITEM_TROY_DISK",
			itemSettings: {
				itemId: "ITEM_TROY_DISK",
				itemType: "ITEM_TYPE_DISK",
				category: "ITEM_CATEGORY_DISK"
			}
		}, {
			templateId: "ITEM_ULTRA_BALL",
			itemSettings: {
				itemId: "ITEM_ULTRA_BALL",
				itemType: "ITEM_TYPE_POKEBALL",
				category: "ITEM_CATEGORY_POKEBALL"
			}
		}, {
			templateId: "ITEM_WEPAR_BERRY",
			itemSettings: {
				itemId: "ITEM_WEPAR_BERRY",
				itemType: "ITEM_TYPE_FOOD",
				category: "ITEM_CATEGORY_FOOD"
			}
		}, {
			templateId: "ITEM_X_ATTACK",
			itemSettings: {
				itemId: "ITEM_X_ATTACK",
				itemType: "ITEM_TYPE_BATTLE",
				category: "ITEM_CATEGORY_BOOST"
			}
		}, {
			templateId: "ITEM_X_DEFENSE",
			itemSettings: {
				itemId: "ITEM_X_DEFENSE",
				itemType: "ITEM_TYPE_BATTLE",
				category: "ITEM_CATEGORY_BOOST"
			}
		}, {
			templateId: "ITEM_X_MIRACLE",
			itemSettings: {
				itemId: "ITEM_X_MIRACLE",
				itemType: "ITEM_TYPE_BATTLE",
				category: "ITEM_CATEGORY_BOOST"
			}
		}, {
			templateId: "PLAYER_LEVEL_SETTINGS",
			playerLevel: {
				rankNum: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				requiredExperience: [0, 1e3, 3e3, 6e3, 1e4, 15e3, 21e3, 28e3, 36e3, 45e3, 55e3, 65e3, 75e3, 85e3, 1e5, 12e4, 14e4, 16e4, 185e3, 21e4, 26e4, 335e3, 435e3, 56e4, 71e4, 9e5, 11e5, 135e4, 165e4, 2e6, 25e5, 3e6, 375e4, 475e4, 6e6, 75e5, 95e5, 12e6, 15e6, 2e7],
				cpMultiplier: [.094, .16639787, .21573247, .255720049, .290249884, .3210876, .349212676, .3752356, .399567276, .4225, .443107545, .4627984, .481684953, .499858439, .517393947, .5343543, .5507927, .5667545, .5822789, .5974, .6121573, .6265671, .640652955, .654435635, .667934, .6811649, .694143653, .7068842, .7193991, .7317, .7377695, .743789434, .749761045, .7556855, .761563838, .767397165, .7731865, .77893275, .784637, .7903],
				maxEggPlayerLevel: 20,
				maxEncounterPlayerLevel: 30
			}
		}, {
			templateId: "POKEMON_TYPE_BUG",
			typeEffective: {
				attackScalar: [1, .8, .8, .8, 1, 1, 1, .8, .8, .8, 1, 1.25, 1, 1.25, 1, 1, 1.25, .8],
				attackType: "POKEMON_TYPE_BUG"
			}
		}, {
			templateId: "POKEMON_TYPE_DARK",
			typeEffective: {
				attackScalar: [1, .8, 1, 1, 1, 1, 1, 1.25, 1, 1, 1, 1, 1, 1.25, 1, 1, .8, .8],
				attackType: "POKEMON_TYPE_DARK"
			}
		}, {
			templateId: "POKEMON_TYPE_DRAGON",
			typeEffective: {
				attackScalar: [1, 1, 1, 1, 1, 1, 1, 1, .8, 1, 1, 1, 1, 1, 1, 1.25, 1, .8],
				attackType: "POKEMON_TYPE_DRAGON"
			}
		}, {
			templateId: "POKEMON_TYPE_ELECTRIC",
			typeEffective: {
				attackScalar: [1, 1, 1.25, 1, .8, 1, 1, 1, 1, 1, 1.25, .8, .8, 1, 1, .8, 1, 1],
				attackType: "POKEMON_TYPE_ELECTRIC"
			}
		}, {
			templateId: "POKEMON_TYPE_FAIRY",
			typeEffective: {
				attackScalar: [1, 1.25, 1, .8, 1, 1, 1, 1, .8, .8, 1, 1, 1, 1, 1, 1.25, 1.25, 1],
				attackType: "POKEMON_TYPE_FAIRY"
			}
		}, {
			templateId: "POKEMON_TYPE_FIGHTING",
			typeEffective: {
				attackScalar: [1.25, 1, .8, .8, 1, 1.25, .8, .8, 1.25, 1, 1, 1, 1, .8, 1.25, 1, 1.25, .8],
				attackType: "POKEMON_TYPE_FIGHTING"
			}
		}, {
			templateId: "POKEMON_TYPE_FIRE",
			typeEffective: {
				attackScalar: [1, 1, 1, 1, 1, .8, 1.25, 1, 1.25, .8, .8, 1.25, 1, 1, 1.25, .8, 1, 1],
				attackType: "POKEMON_TYPE_FIRE"
			}
		}, {
			templateId: "POKEMON_TYPE_FLYING",
			typeEffective: {
				attackScalar: [1, 1.25, 1, 1, 1, .8, 1.25, 1, .8, 1, 1, 1.25, .8, 1, 1, 1, 1, 1],
				attackType: "POKEMON_TYPE_FLYING"
			}
		}, {
			templateId: "POKEMON_TYPE_GHOST",
			typeEffective: {
				attackScalar: [.8, 1, 1, 1, 1, 1, 1, 1.25, 1, 1, 1, 1, 1, 1.25, 1, 1, .8, 1],
				attackType: "POKEMON_TYPE_GHOST"
			}
		}, {
			templateId: "POKEMON_TYPE_GRASS",
			typeEffective: {
				attackScalar: [1, 1, .8, .8, 1.25, 1.25, .8, 1, .8, .8, 1.25, .8, 1, 1, 1, .8, 1, 1],
				attackType: "POKEMON_TYPE_GRASS"
			}
		}, {
			templateId: "POKEMON_TYPE_GROUND",
			typeEffective: {
				attackScalar: [1, 1, .8, 1.25, 1, 1.25, .8, 1, 1.25, 1.25, 1, .8, 1.25, 1, 1, 1, 1, 1],
				attackType: "POKEMON_TYPE_GROUND"
			}
		}, {
			templateId: "POKEMON_TYPE_ICE",
			typeEffective: {
				attackScalar: [1, 1, 1.25, 1, 1.25, 1, 1, 1, .8, .8, .8, 1.25, 1, 1, .8, 1.25, 1, 1],
				attackType: "POKEMON_TYPE_ICE"
			}
		}, {
			templateId: "POKEMON_TYPE_NORMAL",
			typeEffective: {
				attackScalar: [1, 1, 1, 1, 1, .8, 1, .8, .8, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				attackType: "POKEMON_TYPE_NORMAL"
			}
		}, {
			templateId: "POKEMON_TYPE_POISON",
			typeEffective: {
				attackScalar: [1, 1, 1, .8, .8, .8, 1, .8, .8, 1, 1, 1.25, 1, 1, 1, 1, 1, 1.25],
				attackType: "POKEMON_TYPE_POISON"
			}
		}, {
			templateId: "POKEMON_TYPE_PSYCHIC",
			typeEffective: {
				attackScalar: [1, 1.25, 1, 1.25, 1, 1, 1, 1, .8, 1, 1, 1, 1, .8, 1, 1, .8, 1],
				attackType: "POKEMON_TYPE_PSYCHIC"
			}
		}, {
			templateId: "POKEMON_TYPE_ROCK",
			typeEffective: {
				attackScalar: [1, .8, 1.25, 1, .8, 1, 1.25, 1, .8, 1.25, 1, 1, 1, 1, 1.25, 1, 1, 1],
				attackType: "POKEMON_TYPE_ROCK"
			}
		}, {
			templateId: "POKEMON_TYPE_STEEL",
			typeEffective: {
				attackScalar: [1, 1, 1, 1, 1, 1.25, 1, 1, .8, .8, .8, 1, .8, 1, 1.25, 1, 1, 1.25],
				attackType: "POKEMON_TYPE_STEEL"
			}
		}, {
			templateId: "POKEMON_TYPE_WATER",
			typeEffective: {
				attackScalar: [1, 1, 1, 1, 1.25, 1.25, 1, 1, 1, 1.25, .8, .8, 1, 1, 1, .8, 1, 1],
				attackType: "POKEMON_TYPE_WATER"
			}
		}, {
			templateId: "POKEMON_UPGRADE_SETTINGS",
			pokemonUpgrades: {
				upgradesPerLevel: 2,
				allowedLevelsAbovePlayer: 2,
				candyCost: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 6, 6, 8, 8, 10, 10, 12, 12, 15, 15],
				stardustCost: [200, 200, 400, 400, 600, 600, 800, 800, 1e3, 1e3, 1300, 1300, 1600, 1600, 1900, 1900, 2200, 2200, 2500, 2500, 3e3, 3e3, 3500, 3500, 4e3, 4e3, 4500, 4500, 5e3, 5e3, 6e3, 6e3, 7e3, 7e3, 8e3, 8e3, 9e3, 9e3, 1e4, 1e4]
			}
		}, {
			templateId: "V0001_POKEMON_BULBASAUR",
			pokemonSettings: {
				pokemonId: "BULBASAUR",
				modelScale: 1.09,
				type: "POKEMON_TYPE_GRASS",
				type2: "POKEMON_TYPE_POISON",
				camera: {
					diskRadiusM: .5723,
					cylinderRadiusM: .3815,
					cylinderHeightM: .763,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .16,
					baseFleeRate: .1,
					collisionRadiusM: .3815,
					collisionHeightM: .654,
					collisionHeadRadiusM: .2725,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 10,
					jumpTimeS: 1.15,
					attackTimerS: 29
				},
				stats: {
					baseStamina: 90,
					baseAttack: 118,
					baseDefense: 118
				},
				quickMoves: ["VINE_WHIP_FAST", "TACKLE_FAST"],
				cinematicMoves: ["SLUDGE_BOMB", "SEED_BOMB", "POWER_WHIP"],
				animationTime: [1.6667, .6667, 1.6667, 1.8333, 0, 2.1667, 1.4, 1.4666671],
				evolutionIds: ["IVYSAUR"],
				evolutionPips: 1,
				pokedexHeightM: .7,
				pokedexWeightKg: 6.9,
				heightStdDev: .0875,
				weightStdDev: .8625,
				familyId: "FAMILY_BULBASAUR",
				candyToEvolve: 25,
				kmBuddyDistance: 1.5,
				modelHeight: .7
			}
		}, {
			templateId: "V0002_POKEMON_IVYSAUR",
			pokemonSettings: {
				pokemonId: "IVYSAUR",
				modelScale: .85,
				type: "POKEMON_TYPE_GRASS",
				type2: "POKEMON_TYPE_POISON",
				camera: {
					diskRadiusM: .765,
					cylinderRadiusM: .51,
					cylinderHeightM: 1.0625,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .08,
					baseFleeRate: .07,
					collisionRadiusM: .31875,
					collisionHeightM: .6375,
					collisionHeadRadiusM: .255,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 23,
					jumpTimeS: 1.5,
					attackTimerS: 8
				},
				stats: {
					baseStamina: 120,
					baseAttack: 151,
					baseDefense: 151
				},
				quickMoves: ["RAZOR_LEAF_FAST", "VINE_WHIP_FAST"],
				cinematicMoves: ["SLUDGE_BOMB", "SOLAR_BEAM", "POWER_WHIP"],
				animationTime: [2.6667, .6667, 1.6667, 2.1667, 0, 2, 1.6667, 1.733333],
				evolutionIds: ["VENUSAUR"],
				evolutionPips: 1,
				pokedexHeightM: 1,
				pokedexWeightKg: 13,
				parentPokemonId: "BULBASAUR",
				heightStdDev: .125,
				weightStdDev: 1.625,
				familyId: "FAMILY_BULBASAUR",
				candyToEvolve: 100,
				kmBuddyDistance: 1.5,
				modelHeight: 1.25
			}
		}, {
			templateId: "V0003_POKEMON_VENUSAUR",
			pokemonSettings: {
				pokemonId: "VENUSAUR",
				modelScale: .69,
				type: "POKEMON_TYPE_GRASS",
				type2: "POKEMON_TYPE_POISON",
				camera: {
					diskRadiusM: 1.1385,
					cylinderRadiusM: .759,
					cylinderHeightM: 1.2075,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .04,
					baseFleeRate: .05,
					collisionRadiusM: .759,
					collisionHeightM: 1.035,
					collisionHeadRadiusM: .3795,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 11,
					jumpTimeS: 1.25,
					attackTimerS: 4
				},
				stats: {
					baseStamina: 160,
					baseAttack: 198,
					baseDefense: 198
				},
				quickMoves: ["RAZOR_LEAF_FAST", "VINE_WHIP_FAST"],
				cinematicMoves: ["SLUDGE_BOMB", "PETAL_BLIZZARD", "SOLAR_BEAM"],
				animationTime: [2.4667, .6667, 1.6667, 1.8333, 0, 2.1333, 2, 2.0666671],
				evolutionPips: 1,
				pokedexHeightM: 2,
				pokedexWeightKg: 100,
				parentPokemonId: "IVYSAUR",
				heightStdDev: .25,
				weightStdDev: 12.5,
				familyId: "FAMILY_BULBASAUR",
				kmBuddyDistance: 1.5,
				modelHeight: 1.9
			}
		}, {
			templateId: "V0004_POKEMON_CHARMANDER",
			pokemonSettings: {
				pokemonId: "CHARMANDER",
				modelScale: 1.25,
				type: "POKEMON_TYPE_FIRE",
				camera: {
					diskRadiusM: .4688,
					cylinderRadiusM: .3125,
					cylinderHeightM: .75,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .16,
					baseFleeRate: .1,
					collisionRadiusM: .15625,
					collisionHeightM: .46875,
					collisionHeadRadiusM: .15625,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 29,
					jumpTimeS: 1.25,
					attackTimerS: 10
				},
				stats: {
					baseStamina: 78,
					baseAttack: 116,
					baseDefense: 96
				},
				quickMoves: ["EMBER_FAST", "SCRATCH_FAST"],
				cinematicMoves: ["FLAME_CHARGE", "FLAME_BURST", "FLAMETHROWER"],
				animationTime: [2.1333, .6667, 1.6667, 1.8333, 0, 2.1333, 1.1667, 1.333333],
				evolutionIds: ["CHARMELEON"],
				evolutionPips: 1,
				pokedexHeightM: .6,
				pokedexWeightKg: 8.5,
				heightStdDev: .075,
				weightStdDev: 1.0625,
				familyId: "FAMILY_CHARMANDER",
				candyToEvolve: 25,
				kmBuddyDistance: 1.5,
				modelHeight: .6
			}
		}, {
			templateId: "V0005_POKEMON_CHARMELEON",
			pokemonSettings: {
				pokemonId: "CHARMELEON",
				modelScale: 1.03,
				type: "POKEMON_TYPE_FIRE",
				camera: {
					diskRadiusM: .6953,
					cylinderRadiusM: .4635,
					cylinderHeightM: 1.133,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .08,
					baseFleeRate: .07,
					collisionRadiusM: .2575,
					collisionHeightM: .7725,
					collisionHeadRadiusM: .23175,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 23,
					jumpTimeS: 1,
					attackTimerS: 8
				},
				stats: {
					baseStamina: 116,
					baseAttack: 158,
					baseDefense: 129
				},
				quickMoves: ["EMBER_FAST", "SCRATCH_FAST"],
				cinematicMoves: ["FIRE_PUNCH", "FLAME_BURST", "FLAMETHROWER"],
				animationTime: [1.8667, .6667, 1.8333, 1.5, 6.666667, 2.3333, 2, 2.533334],
				evolutionIds: ["CHARIZARD"],
				evolutionPips: 1,
				pokedexHeightM: 1.1,
				pokedexWeightKg: 19,
				parentPokemonId: "CHARMANDER",
				heightStdDev: .1375,
				weightStdDev: 2.375,
				familyId: "FAMILY_CHARMANDER",
				candyToEvolve: 100,
				kmBuddyDistance: 1.5,
				modelHeight: 1.03
			}
		}, {
			templateId: "V0006_POKEMON_CHARIZARD",
			pokemonSettings: {
				pokemonId: "CHARIZARD",
				modelScale: .81,
				type: "POKEMON_TYPE_FIRE",
				type2: "POKEMON_TYPE_FLYING",
				camera: {
					diskRadiusM: 1.215,
					cylinderRadiusM: .81,
					cylinderHeightM: 1.377,
					cylinderGroundM: .405,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .04,
					baseFleeRate: .05,
					collisionRadiusM: .405,
					collisionHeightM: 1.0125,
					collisionHeadRadiusM: .2025,
					movementType: "MOVEMENT_FLYING",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 4
				},
				stats: {
					baseStamina: 156,
					baseAttack: 223,
					baseDefense: 176
				},
				quickMoves: ["EMBER_FAST", "WING_ATTACK_FAST"],
				cinematicMoves: ["FIRE_BLAST", "DRAGON_CLAW", "FLAMETHROWER"],
				animationTime: [2.2, .6667, 1.6667, .8667, 6.666667, 2, 1.6, 2],
				evolutionPips: 1,
				pokedexHeightM: 1.7,
				pokedexWeightKg: 90.5,
				parentPokemonId: "CHARMELEON",
				heightStdDev: .2125,
				weightStdDev: 11.3125,
				familyId: "FAMILY_CHARMANDER",
				kmBuddyDistance: 1.5,
				modelHeight: 1.91
			}
		}, {
			templateId: "V0007_POKEMON_SQUIRTLE",
			pokemonSettings: {
				pokemonId: "SQUIRTLE",
				modelScale: 1.53,
				type: "POKEMON_TYPE_WATER",
				camera: {
					diskRadiusM: .5738,
					cylinderRadiusM: .3825,
					cylinderHeightM: .64259988,
					shoulderModeScale: .1
				},
				encounter: {
					baseCaptureRate: .16,
					baseFleeRate: .1,
					collisionRadiusM: .2295,
					collisionHeightM: .3825,
					collisionHeadRadiusM: .19125,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 10,
					jumpTimeS: 1,
					attackTimerS: 29
				},
				stats: {
					baseStamina: 88,
					baseAttack: 94,
					baseDefense: 122
				},
				quickMoves: ["BUBBLE_FAST", "TACKLE_FAST"],
				cinematicMoves: ["AQUA_JET", "AQUA_TAIL", "WATER_PULSE"],
				animationTime: [1.7333, .6667, 1.6667, 1.5, 0, 2.1667, 1, 1.333333],
				evolutionIds: ["WARTORTLE"],
				evolutionPips: 1,
				pokedexHeightM: .5,
				pokedexWeightKg: 9,
				heightStdDev: .0625,
				weightStdDev: 1.125,
				familyId: "FAMILY_SQUIRTLE",
				candyToEvolve: 25,
				kmBuddyDistance: 1.5,
				modelHeight: .43
			}
		}, {
			templateId: "V0008_POKEMON_WARTORTLE",
			pokemonSettings: {
				pokemonId: "WARTORTLE",
				modelScale: 1,
				type: "POKEMON_TYPE_WATER",
				camera: {
					diskRadiusM: .5625,
					cylinderRadiusM: .375,
					cylinderHeightM: 1,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .08,
					baseFleeRate: .07,
					collisionRadiusM: .25,
					collisionHeightM: .625,
					collisionHeadRadiusM: .1875,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 23,
					jumpTimeS: 1.25,
					attackTimerS: 8
				},
				stats: {
					baseStamina: 118,
					baseAttack: 126,
					baseDefense: 155
				},
				quickMoves: ["WATER_GUN_FAST", "BITE_FAST"],
				cinematicMoves: ["AQUA_JET", "ICE_BEAM", "HYDRO_PUMP"],
				animationTime: [2, .6667, 1.6667, 1.8333, 0, 1.8, 1.0667, 1.133333],
				evolutionIds: ["BLASTOISE"],
				evolutionPips: 1,
				pokedexHeightM: 1,
				pokedexWeightKg: 22.5,
				parentPokemonId: "SQUIRTLE",
				heightStdDev: .125,
				weightStdDev: 2.8125,
				familyId: "FAMILY_SQUIRTLE",
				candyToEvolve: 100,
				kmBuddyDistance: 1.5,
				modelHeight: 1
			}
		}, {
			templateId: "V0009_POKEMON_BLASTOISE",
			pokemonSettings: {
				pokemonId: "BLASTOISE",
				modelScale: .94,
				type: "POKEMON_TYPE_WATER",
				camera: {
					diskRadiusM: .846,
					cylinderRadiusM: .564,
					cylinderHeightM: 1.2925,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .04,
					baseFleeRate: .05,
					collisionRadiusM: .564,
					collisionHeightM: 1.175,
					collisionHeadRadiusM: .282,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 14,
					jumpTimeS: 1.25,
					attackTimerS: 5
				},
				stats: {
					baseStamina: 158,
					baseAttack: 171,
					baseDefense: 210
				},
				quickMoves: ["WATER_GUN_FAST", "BITE_FAST"],
				cinematicMoves: ["FLASH_CANNON", "ICE_BEAM", "HYDRO_PUMP"],
				animationTime: [2.1333, .6667, 1.6667, 1.8333, 0, 2, 2.6667, 1.333333],
				evolutionPips: 1,
				pokedexHeightM: 1.6,
				pokedexWeightKg: 85.5,
				parentPokemonId: "WARTORTLE",
				heightStdDev: .2,
				weightStdDev: 10.6875,
				familyId: "FAMILY_SQUIRTLE",
				kmBuddyDistance: 1.5,
				modelHeight: 1.39
			}
		}, {
			templateId: "V0010_POKEMON_CATERPIE",
			pokemonSettings: {
				pokemonId: "CATERPIE",
				modelScale: 2.04,
				type: "POKEMON_TYPE_BUG",
				camera: {
					diskRadiusM: .459,
					cylinderRadiusM: .306,
					cylinderHeightM: .408
				},
				encounter: {
					baseCaptureRate: .4,
					baseFleeRate: .2,
					collisionRadiusM: .102,
					collisionHeightM: .306,
					collisionHeadRadiusM: .153,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 10,
					attackTimerS: 29
				},
				stats: {
					baseStamina: 90,
					baseAttack: 55,
					baseDefense: 62
				},
				quickMoves: ["BUG_BITE_FAST", "TACKLE_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [0, .6667, 1.6667, 1.6667, 0, 1.8333, 1.6667, 0],
				evolutionIds: ["METAPOD"],
				evolutionPips: 1,
				pokedexHeightM: .3,
				pokedexWeightKg: 2.9,
				heightStdDev: .0375,
				weightStdDev: .3625,
				familyId: "FAMILY_CATERPIE",
				candyToEvolve: 12,
				kmBuddyDistance: .5,
				modelHeight: .19
			}
		}, {
			templateId: "V0011_POKEMON_METAPOD",
			pokemonSettings: {
				pokemonId: "METAPOD",
				modelScale: 1.17,
				type: "POKEMON_TYPE_BUG",
				camera: {
					diskRadiusM: .5265,
					cylinderRadiusM: .351,
					cylinderHeightM: .6435,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .2,
					baseFleeRate: .09,
					collisionRadiusM: .117,
					collisionHeightM: .6435,
					collisionHeadRadiusM: .1755,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 3600,
					jumpTimeS: 1,
					attackTimerS: 3600
				},
				stats: {
					baseStamina: 100,
					baseAttack: 45,
					baseDefense: 94
				},
				quickMoves: ["BUG_BITE_FAST", "TACKLE_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.8333, 1.6667, 0, 1.5667, 2, 0],
				evolutionIds: ["BUTTERFREE"],
				evolutionPips: 1,
				pokedexHeightM: .7,
				pokedexWeightKg: 9.9,
				parentPokemonId: "CATERPIE",
				heightStdDev: .0875,
				weightStdDev: 1.2375,
				familyId: "FAMILY_CATERPIE",
				candyToEvolve: 50,
				kmBuddyDistance: .5,
				modelHeight: .7
			}
		}, {
			templateId: "V0012_POKEMON_BUTTERFREE",
			pokemonSettings: {
				pokemonId: "BUTTERFREE",
				modelScale: 1.11,
				type: "POKEMON_TYPE_BUG",
				type2: "POKEMON_TYPE_FLYING",
				camera: {
					diskRadiusM: .999,
					cylinderRadiusM: .666,
					cylinderHeightM: 1.11,
					cylinderGroundM: .555,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .1,
					baseFleeRate: .06,
					collisionRadiusM: .1665,
					collisionHeightM: .555,
					collisionHeadRadiusM: .1776,
					movementType: "MOVEMENT_FLYING",
					movementTimerS: 6,
					jumpTimeS: 1,
					attackTimerS: 17
				},
				stats: {
					baseStamina: 120,
					baseAttack: 167,
					baseDefense: 151
				},
				quickMoves: ["BUG_BITE_FAST", "CONFUSION_FAST"],
				cinematicMoves: ["BUG_BUZZ", "PSYCHIC", "SIGNAL_BEAM"],
				animationTime: [2, .6667, 1.7333, .6667, 0, 2.4667, 2.1333, 0],
				evolutionPips: 1,
				pokedexHeightM: 1.1,
				pokedexWeightKg: 32,
				parentPokemonId: "METAPOD",
				heightStdDev: .1375,
				weightStdDev: 4,
				familyId: "FAMILY_CATERPIE",
				kmBuddyDistance: .5,
				modelHeight: .95
			}
		}, {
			templateId: "V0013_MOVE_WRAP",
			moveSettings: {
				movementId: "WRAP",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_NORMAL",
				power: 25,
				accuracyChance: 1,
				criticalChance: .05,
				staminaLossScalar: .06,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "wrap",
				durationMs: 4e3,
				damageWindowStartMs: 2800,
				damageWindowEndMs: 3400,
				energyDelta: -20
			}
		}, {
			templateId: "V0013_POKEMON_WEEDLE",
			pokemonSettings: {
				pokemonId: "WEEDLE",
				modelScale: 2.09,
				type: "POKEMON_TYPE_BUG",
				type2: "POKEMON_TYPE_POISON",
				camera: {
					diskRadiusM: .3135,
					cylinderRadiusM: .209,
					cylinderHeightM: .418,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .4,
					baseFleeRate: .2,
					collisionRadiusM: .1045,
					collisionHeightM: .209,
					collisionHeadRadiusM: .15675,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 10,
					jumpTimeS: 1.25,
					attackTimerS: 29
				},
				stats: {
					baseStamina: 80,
					baseAttack: 63,
					baseDefense: 55
				},
				quickMoves: ["BUG_BITE_FAST", "POISON_STING_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [0, .6667, 1.6667, 1.8333, 0, 1.6667, 2, 0],
				evolutionIds: ["KAKUNA"],
				evolutionPips: 1,
				pokedexHeightM: .3,
				pokedexWeightKg: 3.2,
				heightStdDev: .0375,
				weightStdDev: .4,
				familyId: "FAMILY_WEEDLE",
				candyToEvolve: 12,
				kmBuddyDistance: .5,
				modelHeight: .18
			}
		}, {
			templateId: "V0014_MOVE_HYPER_BEAM",
			moveSettings: {
				movementId: "HYPER_BEAM",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_NORMAL",
				power: 120,
				accuracyChance: 1,
				criticalChance: .05,
				staminaLossScalar: .15,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "hyperBeam",
				durationMs: 5e3,
				damageWindowStartMs: 4e3,
				damageWindowEndMs: 4800,
				energyDelta: -100
			}
		}, {
			templateId: "V0014_POKEMON_KAKUNA",
			pokemonSettings: {
				pokemonId: "KAKUNA",
				modelScale: 1.25,
				type: "POKEMON_TYPE_BUG",
				type2: "POKEMON_TYPE_POISON",
				camera: {
					diskRadiusM: .375,
					cylinderRadiusM: .25,
					cylinderHeightM: .75,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .2,
					baseFleeRate: .09,
					collisionRadiusM: .25,
					collisionHeightM: .75,
					collisionHeadRadiusM: .125,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 3600,
					attackTimerS: 3600
				},
				stats: {
					baseStamina: 90,
					baseAttack: 46,
					baseDefense: 86
				},
				quickMoves: ["BUG_BITE_FAST", "POISON_STING_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [0, .6667, 0, 1.6667, 0, 2, 2.5, 0],
				evolutionIds: ["BEEDRILL"],
				evolutionPips: 1,
				pokedexHeightM: .6,
				pokedexWeightKg: 10,
				parentPokemonId: "WEEDLE",
				heightStdDev: .075,
				weightStdDev: 1.25,
				familyId: "FAMILY_WEEDLE",
				candyToEvolve: 50,
				kmBuddyDistance: .5,
				modelHeight: .6
			}
		}, {
			templateId: "V0015_POKEMON_BEEDRILL",
			pokemonSettings: {
				pokemonId: "BEEDRILL",
				modelScale: .77,
				type: "POKEMON_TYPE_BUG",
				type2: "POKEMON_TYPE_POISON",
				camera: {
					diskRadiusM: .693,
					cylinderRadiusM: .462,
					cylinderHeightM: .77,
					cylinderGroundM: .385,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .1,
					baseFleeRate: .06,
					collisionRadiusM: .308,
					collisionHeightM: .5775,
					collisionHeadRadiusM: .231,
					movementType: "MOVEMENT_ELECTRIC",
					movementTimerS: 6,
					jumpTimeS: 1,
					attackTimerS: 17
				},
				stats: {
					baseStamina: 130,
					baseAttack: 169,
					baseDefense: 150
				},
				quickMoves: ["BUG_BITE_FAST", "POISON_JAB_FAST"],
				cinematicMoves: ["SLUDGE_BOMB", "AERIAL_ACE", "X_SCISSOR"],
				animationTime: [1.6667, .6667, 1.6667, .6667, .2, 1.8, 1.3333, 0],
				evolutionPips: 1,
				pokedexHeightM: 1,
				pokedexWeightKg: 29.5,
				parentPokemonId: "KAKUNA",
				heightStdDev: .125,
				weightStdDev: 3.6875,
				familyId: "FAMILY_WEEDLE",
				kmBuddyDistance: .5,
				modelHeight: 1.28
			}
		}, {
			templateId: "V0016_MOVE_DARK_PULSE",
			moveSettings: {
				movementId: "DARK_PULSE",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_DARK",
				power: 45,
				accuracyChance: 1,
				criticalChance: .05,
				staminaLossScalar: .08,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "dark_pulse",
				durationMs: 3500,
				damageWindowStartMs: 2300,
				damageWindowEndMs: 3400,
				energyDelta: -33
			}
		}, {
			templateId: "V0016_POKEMON_PIDGEY",
			pokemonSettings: {
				pokemonId: "PIDGEY",
				modelScale: 1.68,
				type: "POKEMON_TYPE_NORMAL",
				type2: "POKEMON_TYPE_FLYING",
				camera: {
					diskRadiusM: .378,
					cylinderRadiusM: .252,
					cylinderHeightM: .504,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .4,
					baseFleeRate: .2,
					collisionRadiusM: .1344,
					collisionHeightM: .252,
					collisionHeadRadiusM: .126,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 10,
					jumpTimeS: 1.4,
					attackTimerS: 29
				},
				stats: {
					baseStamina: 80,
					baseAttack: 85,
					baseDefense: 76
				},
				quickMoves: ["QUICK_ATTACK_FAST", "TACKLE_FAST"],
				cinematicMoves: ["TWISTER", "AERIAL_ACE", "AIR_CUTTER"],
				animationTime: [1.6667, .6667, 1.6667, 1.8333, 0, 1.8333, .8, 1.333333],
				evolutionIds: ["PIDGEOTTO"],
				evolutionPips: 1,
				pokedexHeightM: .3,
				pokedexWeightKg: 1.8,
				heightStdDev: .0375,
				weightStdDev: .225,
				familyId: "FAMILY_PIDGEY",
				candyToEvolve: 12,
				kmBuddyDistance: .5,
				modelHeight: .3
			}
		}, {
			templateId: "V0017_POKEMON_PIDGEOTTO",
			pokemonSettings: {
				pokemonId: "PIDGEOTTO",
				modelScale: .79,
				type: "POKEMON_TYPE_NORMAL",
				type2: "POKEMON_TYPE_FLYING",
				camera: {
					diskRadiusM: .711,
					cylinderRadiusM: .474,
					cylinderHeightM: .9875,
					cylinderGroundM: .395,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .2,
					baseFleeRate: .09,
					collisionRadiusM: .316,
					collisionHeightM: .69125,
					collisionHeadRadiusM: .237,
					movementType: "MOVEMENT_FLYING",
					movementTimerS: 10,
					jumpTimeS: 1,
					attackTimerS: 29
				},
				stats: {
					baseStamina: 126,
					baseAttack: 117,
					baseDefense: 108
				},
				quickMoves: ["WING_ATTACK_FAST", "STEEL_WING_FAST"],
				cinematicMoves: ["TWISTER", "AERIAL_ACE", "AIR_CUTTER"],
				animationTime: [2.6667, .6667, 2, .8, 0, 2, .6667, 0],
				evolutionIds: ["PIDGEOT"],
				evolutionPips: 1,
				pokedexHeightM: 1.1,
				pokedexWeightKg: 30,
				parentPokemonId: "PIDGEY",
				heightStdDev: .1375,
				weightStdDev: 3.75,
				familyId: "FAMILY_PIDGEY",
				candyToEvolve: 50,
				kmBuddyDistance: .5,
				modelHeight: 1.74
			}
		}, {
			templateId: "V0018_MOVE_SLUDGE",
			moveSettings: {
				movementId: "SLUDGE",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_POISON",
				power: 30,
				accuracyChance: 1,
				criticalChance: .05,
				staminaLossScalar: .065,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "sludge",
				durationMs: 2600,
				damageWindowStartMs: 1850,
				damageWindowEndMs: 2350,
				energyDelta: -25
			}
		}, {
			templateId: "V0018_POKEMON_PIDGEOT",
			pokemonSettings: {
				pokemonId: "PIDGEOT",
				modelScale: .72,
				type: "POKEMON_TYPE_NORMAL",
				type2: "POKEMON_TYPE_FLYING",
				camera: {
					diskRadiusM: 1.296,
					cylinderRadiusM: .864,
					cylinderHeightM: 1.44,
					cylinderGroundM: .36,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .1,
					baseFleeRate: .06,
					collisionRadiusM: .36,
					collisionHeightM: 1.008,
					collisionHeadRadiusM: .216,
					movementType: "MOVEMENT_FLYING",
					movementTimerS: 6,
					jumpTimeS: 1,
					attackTimerS: 17
				},
				stats: {
					baseStamina: 166,
					baseAttack: 166,
					baseDefense: 157
				},
				quickMoves: ["WING_ATTACK_FAST", "STEEL_WING_FAST"],
				cinematicMoves: ["HURRICANE", "AERIAL_ACE", "AIR_CUTTER"],
				animationTime: [2.0667, .6667, 1.6667, .6667, 0, 2, 1.8, 0],
				evolutionPips: 1,
				pokedexHeightM: 1.5,
				pokedexWeightKg: 39.5,
				parentPokemonId: "PIDGEOTTO",
				heightStdDev: .1875,
				weightStdDev: 4.9375,
				familyId: "FAMILY_PIDGEY",
				kmBuddyDistance: .5,
				modelHeight: 2.18
			}
		}, {
			templateId: "V0019_POKEMON_RATTATA",
			pokemonSettings: {
				pokemonId: "RATTATA",
				modelScale: 1.26,
				type: "POKEMON_TYPE_NORMAL",
				camera: {
					diskRadiusM: .378,
					cylinderRadiusM: .252,
					cylinderHeightM: .378,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .4,
					baseFleeRate: .2,
					collisionRadiusM: .189,
					collisionHeightM: .252,
					collisionHeadRadiusM: .126,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 10,
					jumpTimeS: .9,
					attackTimerS: 29
				},
				stats: {
					baseStamina: 60,
					baseAttack: 103,
					baseDefense: 70
				},
				quickMoves: ["TACKLE_FAST", "QUICK_ATTACK_FAST"],
				cinematicMoves: ["DIG", "HYPER_FANG", "BODY_SLAM"],
				animationTime: [1.9, .6667, 1.8, 1.7667, 0, 2.4, .8667, 0],
				evolutionIds: ["RATICATE"],
				evolutionPips: 1,
				pokedexHeightM: .3,
				pokedexWeightKg: 3.5,
				heightStdDev: .0375,
				weightStdDev: .4375,
				familyId: "FAMILY_RATTATA",
				candyToEvolve: 25,
				kmBuddyDistance: .5,
				modelHeight: .42
			}
		}, {
			templateId: "V0020_MOVE_VICE_GRIP",
			moveSettings: {
				movementId: "VICE_GRIP",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_NORMAL",
				power: 25,
				accuracyChance: 1,
				criticalChance: .05,
				staminaLossScalar: .055,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "viceGrip",
				durationMs: 2100,
				damageWindowStartMs: 1850,
				damageWindowEndMs: 2100,
				energyDelta: -20
			}
		}, {
			templateId: "V0020_POKEMON_RATICATE",
			pokemonSettings: {
				pokemonId: "RATICATE",
				modelScale: 1.17,
				type: "POKEMON_TYPE_NORMAL",
				camera: {
					diskRadiusM: .7898,
					cylinderRadiusM: .5265,
					cylinderHeightM: .936,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .16,
					baseFleeRate: .07,
					collisionRadiusM: .2925,
					collisionHeightM: .585,
					collisionHeadRadiusM: .26325,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 23,
					jumpTimeS: 1,
					attackTimerS: 8
				},
				stats: {
					baseStamina: 110,
					baseAttack: 161,
					baseDefense: 144
				},
				quickMoves: ["BITE_FAST", "QUICK_ATTACK_FAST"],
				cinematicMoves: ["DIG", "HYPER_FANG", "HYPER_BEAM"],
				animationTime: [1.6667, .6667, 1.7333, 1.6667, 0, 2, 2.0667, 0],
				evolutionPips: 1,
				pokedexHeightM: .7,
				pokedexWeightKg: 18.5,
				parentPokemonId: "RATTATA",
				heightStdDev: .0875,
				weightStdDev: 2.3125,
				familyId: "FAMILY_RATTATA",
				kmBuddyDistance: .5,
				modelHeight: .7
			}
		}, {
			templateId: "V0021_MOVE_FLAME_WHEEL",
			moveSettings: {
				movementId: "FLAME_WHEEL",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_FIRE",
				power: 40,
				accuracyChance: 1,
				criticalChance: .05,
				staminaLossScalar: .06,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "flameWheel",
				durationMs: 4600,
				damageWindowStartMs: 2700,
				damageWindowEndMs: 3200,
				energyDelta: -25
			}
		}, {
			templateId: "V0021_POKEMON_SPEAROW",
			pokemonSettings: {
				pokemonId: "SPEAROW",
				modelScale: 1.48,
				type: "POKEMON_TYPE_NORMAL",
				type2: "POKEMON_TYPE_FLYING",
				camera: {
					diskRadiusM: .444,
					cylinderRadiusM: .296,
					cylinderHeightM: .518,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .4,
					baseFleeRate: .15,
					collisionRadiusM: .148,
					collisionHeightM: .2664,
					collisionHeadRadiusM: .148,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 10,
					jumpTimeS: 1.25,
					attackTimerS: 29
				},
				stats: {
					baseStamina: 80,
					baseAttack: 112,
					baseDefense: 61
				},
				quickMoves: ["PECK_FAST", "QUICK_ATTACK_FAST"],
				cinematicMoves: ["AERIAL_ACE", "DRILL_PECK", "TWISTER"],
				animationTime: [1.5333, .6667, 1.6667, 1.8333, 0, 2.3333, .8, 0],
				evolutionIds: ["FEAROW"],
				evolutionPips: 1,
				pokedexHeightM: .3,
				pokedexWeightKg: 2,
				heightStdDev: .0375,
				weightStdDev: .25,
				familyId: "FAMILY_SPEAROW",
				candyToEvolve: 50,
				kmBuddyDistance: .5,
				modelHeight: .4
			}
		}, {
			templateId: "V0022_MOVE_MEGAHORN",
			moveSettings: {
				movementId: "MEGAHORN",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_BUG",
				power: 80,
				accuracyChance: 1,
				criticalChance: .05,
				staminaLossScalar: .12,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "megahorn",
				durationMs: 3200,
				damageWindowStartMs: 2400,
				damageWindowEndMs: 2700,
				energyDelta: -100
			}
		}, {
			templateId: "V0022_POKEMON_FEAROW",
			pokemonSettings: {
				pokemonId: "FEAROW",
				modelScale: .84,
				type: "POKEMON_TYPE_NORMAL",
				type2: "POKEMON_TYPE_FLYING",
				camera: {
					diskRadiusM: 1.26,
					cylinderRadiusM: .504,
					cylinderHeightM: 1.05,
					cylinderGroundM: .42,
					shoulderModeScale: .375
				},
				encounter: {
					baseCaptureRate: .16,
					baseFleeRate: .07,
					collisionRadiusM: .252,
					collisionHeightM: .63,
					collisionHeadRadiusM: .126,
					movementType: "MOVEMENT_FLYING",
					movementTimerS: 8,
					jumpTimeS: 1,
					attackTimerS: 23
				},
				stats: {
					baseStamina: 130,
					baseAttack: 182,
					baseDefense: 135
				},
				quickMoves: ["PECK_FAST", "STEEL_WING_FAST"],
				cinematicMoves: ["AERIAL_ACE", "DRILL_RUN", "TWISTER"],
				animationTime: [2.6667, .6667, 1.6667, .8333, 0, 2.3333, 1.6667, 0],
				evolutionPips: 1,
				pokedexHeightM: 1.2,
				pokedexWeightKg: 38,
				parentPokemonId: "SPEAROW",
				heightStdDev: .15,
				weightStdDev: 4.75,
				familyId: "FAMILY_SPEAROW",
				kmBuddyDistance: .5,
				modelHeight: 1.5
			}
		}, {
			templateId: "V0023_POKEMON_EKANS",
			pokemonSettings: {
				pokemonId: "EKANS",
				modelScale: 1.73,
				type: "POKEMON_TYPE_POISON",
				camera: {
					diskRadiusM: .6488,
					cylinderRadiusM: .4325,
					cylinderHeightM: .6055,
					shoulderModeScale: .375
				},
				encounter: {
					baseCaptureRate: .4,
					baseFleeRate: .15,
					collisionRadiusM: .2595,
					collisionHeightM: .346,
					collisionHeadRadiusM: .1384,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 29,
					jumpTimeS: 1.25,
					attackTimerS: 10
				},
				stats: {
					baseStamina: 70,
					baseAttack: 110,
					baseDefense: 102
				},
				quickMoves: ["POISON_STING_FAST", "ACID_FAST"],
				cinematicMoves: ["WRAP", "SLUDGE_BOMB", "GUNK_SHOT"],
				animationTime: [1.7333, .6667, 1.6667, 1.8333, 0, 2.2, 1.6, 0],
				evolutionIds: ["ARBOK"],
				evolutionPips: 1,
				pokedexHeightM: 2,
				pokedexWeightKg: 6.9,
				heightStdDev: .25,
				weightStdDev: .8625,
				familyId: "FAMILY_EKANS",
				candyToEvolve: 50,
				kmBuddyDistance: 1.5,
				modelHeight: .28
			}
		}, {
			templateId: "V0024_MOVE_FLAMETHROWER",
			moveSettings: {
				movementId: "FLAMETHROWER",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_FIRE",
				power: 55,
				accuracyChance: 1,
				criticalChance: .05,
				staminaLossScalar: .09,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "flamethrower",
				durationMs: 2900,
				damageWindowStartMs: 1700,
				damageWindowEndMs: 2600,
				energyDelta: -50
			}
		}, {
			templateId: "V0024_POKEMON_ARBOK",
			pokemonSettings: {
				pokemonId: "ARBOK",
				modelScale: .82,
				type: "POKEMON_TYPE_POISON",
				camera: {
					diskRadiusM: .9225,
					cylinderRadiusM: .615,
					cylinderHeightM: 1.353,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .16,
					baseFleeRate: .07,
					collisionRadiusM: .41,
					collisionHeightM: 1.353,
					collisionHeadRadiusM: .164,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 23,
					jumpTimeS: 1,
					attackTimerS: 8
				},
				stats: {
					baseStamina: 120,
					baseAttack: 167,
					baseDefense: 158
				},
				quickMoves: ["BITE_FAST", "ACID_FAST"],
				cinematicMoves: ["DARK_PULSE", "SLUDGE_WAVE", "GUNK_SHOT"],
				animationTime: [2.6667, .6667, 1.6667, 1.5, 0, 2.6667, 2.6667, 0],
				evolutionPips: 1,
				pokedexHeightM: 3.5,
				pokedexWeightKg: 65,
				parentPokemonId: "EKANS",
				heightStdDev: .4375,
				weightStdDev: 8.125,
				familyId: "FAMILY_EKANS",
				kmBuddyDistance: 1.5,
				modelHeight: 1.6
			}
		}, {
			templateId: "V0025_POKEMON_PIKACHU",
			pokemonSettings: {
				pokemonId: "PIKACHU",
				modelScale: 1.48,
				type: "POKEMON_TYPE_ELECTRIC",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: .74,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .16,
					baseFleeRate: .1,
					collisionRadiusM: .185,
					collisionHeightM: .518,
					collisionHeadRadiusM: .185,
					movementTimerS: 10,
					jumpTimeS: 1,
					attackTimerS: 29
				},
				stats: {
					baseStamina: 70,
					baseAttack: 112,
					baseDefense: 101
				},
				quickMoves: ["THUNDER_SHOCK_FAST", "QUICK_ATTACK_FAST"],
				cinematicMoves: ["DISCHARGE", "THUNDERBOLT", "THUNDER"],
				animationTime: [1.8333, .6667, 1.6, 1.5667, 0, 1.8, 1.1333, 1.066667],
				evolutionIds: ["RAICHU"],
				evolutionPips: 1,
				pokedexHeightM: .4,
				pokedexWeightKg: 6,
				parentPokemonId: "PICHU",
				heightStdDev: .05,
				weightStdDev: .75,
				familyId: "FAMILY_PIKACHU",
				candyToEvolve: 50,
				kmBuddyDistance: .5,
				modelHeight: .4
			}
		}, {
			templateId: "V0026_MOVE_DIG",
			moveSettings: {
				movementId: "DIG",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_GROUND",
				power: 70,
				accuracyChance: 1,
				criticalChance: .05,
				staminaLossScalar: .08,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "dig",
				durationMs: 5800,
				damageWindowStartMs: 4600,
				damageWindowEndMs: 5e3,
				energyDelta: -33
			}
		}, {
			templateId: "V0026_POKEMON_RAICHU",
			pokemonSettings: {
				pokemonId: "RAICHU",
				modelScale: 1.08,
				type: "POKEMON_TYPE_ELECTRIC",
				camera: {
					diskRadiusM: .729,
					cylinderRadiusM: .486,
					cylinderHeightM: 1.35,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .08,
					baseFleeRate: .06,
					collisionRadiusM: .27,
					collisionHeightM: .54,
					collisionHeadRadiusM: .216,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 6,
					jumpTimeS: 1.25,
					attackTimerS: 17
				},
				stats: {
					baseStamina: 120,
					baseAttack: 193,
					baseDefense: 165
				},
				quickMoves: ["THUNDER_SHOCK_FAST", "SPARK_FAST"],
				cinematicMoves: ["BRICK_BREAK", "THUNDER_PUNCH", "THUNDER"],
				animationTime: [2.2333, .6667, 2, 2, 0, 2.6667, 1, 1.133333],
				evolutionPips: 1,
				pokedexHeightM: .8,
				pokedexWeightKg: 30,
				parentPokemonId: "PIKACHU",
				heightStdDev: .1,
				weightStdDev: 3.75,
				familyId: "FAMILY_PIKACHU",
				kmBuddyDistance: .5,
				modelHeight: .83
			}
		}, {
			templateId: "V0027_POKEMON_SANDSHREW",
			pokemonSettings: {
				pokemonId: "SANDSHREW",
				modelScale: 1.29,
				type: "POKEMON_TYPE_GROUND",
				camera: {
					diskRadiusM: .4838,
					cylinderRadiusM: .3225,
					cylinderHeightM: .774,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .4,
					baseFleeRate: .1,
					collisionRadiusM: .258,
					collisionHeightM: .48375,
					collisionHeadRadiusM: .1935,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 8,
					jumpTimeS: 1,
					attackTimerS: 23
				},
				stats: {
					baseStamina: 100,
					baseAttack: 126,
					baseDefense: 145
				},
				quickMoves: ["SCRATCH_FAST", "MUD_SHOT_FAST"],
				cinematicMoves: ["DIG", "ROCK_SLIDE", "ROCK_TOMB"],
				animationTime: [1.8, .6667, 1.4667, 1.6667, 0, 2.6667, 1, 0],
				evolutionIds: ["SANDSLASH"],
				evolutionPips: 1,
				pokedexHeightM: .6,
				pokedexWeightKg: 12,
				heightStdDev: .075,
				weightStdDev: 1.5,
				familyId: "FAMILY_SANDSHREW",
				candyToEvolve: 50,
				kmBuddyDistance: 1.5,
				modelHeight: .55
			}
		}, {
			templateId: "V0028_MOVE_CROSS_CHOP",
			moveSettings: {
				movementId: "CROSS_CHOP",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_FIGHTING",
				power: 60,
				accuracyChance: 1,
				criticalChance: .25,
				staminaLossScalar: .1,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "crossChop",
				durationMs: 2e3,
				damageWindowStartMs: 1500,
				damageWindowEndMs: 1800,
				energyDelta: -100
			}
		}, {
			templateId: "V0028_POKEMON_SANDSLASH",
			pokemonSettings: {
				pokemonId: "SANDSLASH",
				modelScale: 1,
				type: "POKEMON_TYPE_GROUND",
				camera: {
					diskRadiusM: .6,
					cylinderRadiusM: .4,
					cylinderHeightM: 1,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .16,
					baseFleeRate: .06,
					collisionRadiusM: .35,
					collisionHeightM: .9,
					collisionHeadRadiusM: .35,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 4
				},
				stats: {
					baseStamina: 150,
					baseAttack: 182,
					baseDefense: 202
				},
				quickMoves: ["METAL_CLAW_FAST", "MUD_SHOT_FAST"],
				cinematicMoves: ["EARTHQUAKE", "ROCK_TOMB", "BULLDOZE"],
				animationTime: [1.7333, .6667, 1.6667, 1.6667, 0, 2, 1.6, 0],
				evolutionPips: 1,
				pokedexHeightM: 1,
				pokedexWeightKg: 29.5,
				parentPokemonId: "SANDSHREW",
				heightStdDev: .125,
				weightStdDev: 3.6875,
				familyId: "FAMILY_SANDSHREW",
				kmBuddyDistance: 1.5,
				modelHeight: 1
			}
		}, {
			templateId: "V0029_POKEMON_NIDORAN",
			pokemonSettings: {
				pokemonId: "NIDORAN_FEMALE",
				modelScale: 1.48,
				type: "POKEMON_TYPE_POISON",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: .666,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .4,
					baseFleeRate: .15,
					collisionRadiusM: .185,
					collisionHeightM: .37,
					collisionHeadRadiusM: .185,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 29,
					jumpTimeS: 1.25,
					attackTimerS: 10
				},
				stats: {
					baseStamina: 110,
					baseAttack: 86,
					baseDefense: 94
				},
				quickMoves: ["BITE_FAST", "POISON_STING_FAST"],
				cinematicMoves: ["POISON_FANG", "BODY_SLAM", "SLUDGE_BOMB"],
				animationTime: [1.3333, .6667, 1.6667, 1.8333, 0, 1.6667, 2.1333, 0],
				evolutionIds: ["NIDORINA"],
				evolutionPips: 1,
				pokedexHeightM: .4,
				pokedexWeightKg: 7,
				heightStdDev: .05,
				weightStdDev: .875,
				familyId: "FAMILY_NIDORAN_FEMALE",
				candyToEvolve: 25,
				kmBuddyDistance: 1.5,
				modelHeight: .4
			}
		}, {
			templateId: "V0030_MOVE_PSYBEAM",
			moveSettings: {
				movementId: "PSYBEAM",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_PSYCHIC",
				power: 40,
				accuracyChance: 1,
				criticalChance: .05,
				staminaLossScalar: .065,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "psybeam",
				durationMs: 3800,
				damageWindowStartMs: 2300,
				damageWindowEndMs: 3600,
				energyDelta: -25
			}
		}, {
			templateId: "V0030_POKEMON_NIDORINA",
			pokemonSettings: {
				pokemonId: "NIDORINA",
				modelScale: 1.17,
				type: "POKEMON_TYPE_POISON",
				camera: {
					diskRadiusM: .6581,
					cylinderRadiusM: .4388,
					cylinderHeightM: .87749988,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .2,
					baseFleeRate: .07,
					collisionRadiusM: .2925,
					collisionHeightM: .585,
					collisionHeadRadiusM: .1755,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 23,
					jumpTimeS: 1,
					attackTimerS: 8
				},
				stats: {
					baseStamina: 140,
					baseAttack: 117,
					baseDefense: 126
				},
				quickMoves: ["BITE_FAST", "POISON_STING_FAST"],
				cinematicMoves: ["POISON_FANG", "DIG", "SLUDGE_BOMB"],
				animationTime: [1.6667, .6667, 1.7667, 1.4667, 0, 2, 1.3333, 0],
				evolutionIds: ["NIDOQUEEN"],
				evolutionPips: 1,
				pokedexHeightM: .8,
				pokedexWeightKg: 20,
				parentPokemonId: "NIDORAN_FEMALE",
				heightStdDev: .1,
				weightStdDev: 2.5,
				familyId: "FAMILY_NIDORAN_FEMALE",
				candyToEvolve: 100,
				kmBuddyDistance: 1.5,
				modelHeight: .7
			}
		}, {
			templateId: "V0031_MOVE_EARTHQUAKE",
			moveSettings: {
				movementId: "EARTHQUAKE",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_GROUND",
				power: 100,
				accuracyChance: 1,
				criticalChance: .05,
				staminaLossScalar: .1,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "earthquake",
				durationMs: 4200,
				damageWindowStartMs: 2e3,
				damageWindowEndMs: 3950,
				energyDelta: -100
			}
		}, {
			templateId: "V0031_POKEMON_NIDOQUEEN",
			pokemonSettings: {
				pokemonId: "NIDOQUEEN",
				modelScale: .91,
				type: "POKEMON_TYPE_POISON",
				type2: "POKEMON_TYPE_GROUND",
				camera: {
					diskRadiusM: .6143,
					cylinderRadiusM: .4095,
					cylinderHeightM: 1.183,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .1,
					baseFleeRate: .05,
					collisionRadiusM: .455,
					collisionHeightM: .79625,
					collisionHeadRadiusM: .2275,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 14,
					jumpTimeS: 1,
					attackTimerS: 5
				},
				stats: {
					baseStamina: 180,
					baseAttack: 180,
					baseDefense: 174
				},
				quickMoves: ["POISON_JAB_FAST", "BITE_FAST"],
				cinematicMoves: ["EARTHQUAKE", "SLUDGE_WAVE", "STONE_EDGE"],
				animationTime: [1.8333, .6667, 1.6667, 1.6667, 0, 2, 1.6667, 0],
				evolutionPips: 1,
				pokedexHeightM: 1.3,
				pokedexWeightKg: 60,
				parentPokemonId: "NIDORINA",
				heightStdDev: .1625,
				weightStdDev: 7.5,
				familyId: "FAMILY_NIDORAN_FEMALE",
				kmBuddyDistance: 1.5,
				modelHeight: 1.25
			}
		}, {
			templateId: "V0032_MOVE_STONE_EDGE",
			moveSettings: {
				movementId: "STONE_EDGE",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_ROCK",
				power: 80,
				accuracyChance: 1,
				criticalChance: .5,
				staminaLossScalar: .1,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "stoneEdge",
				durationMs: 3100,
				damageWindowStartMs: 1400,
				damageWindowEndMs: 1800,
				energyDelta: -100
			}
		}, {
			templateId: "V0032_POKEMON_NIDORAN",
			pokemonSettings: {
				pokemonId: "NIDORAN_MALE",
				modelScale: 1.26,
				type: "POKEMON_TYPE_POISON",
				camera: {
					diskRadiusM: .7088,
					cylinderRadiusM: .4725,
					cylinderHeightM: .756,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .4,
					baseFleeRate: .15,
					collisionRadiusM: .252,
					collisionHeightM: .315,
					collisionHeadRadiusM: .1575,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 29,
					jumpTimeS: 1,
					attackTimerS: 10
				},
				stats: {
					baseStamina: 92,
					baseAttack: 105,
					baseDefense: 76
				},
				quickMoves: ["PECK_FAST", "POISON_STING_FAST"],
				cinematicMoves: ["HORN_ATTACK", "BODY_SLAM", "SLUDGE_BOMB"],
				animationTime: [1.8333, .6667, 1.6667, 1.6667, 0, 2, 1.6667, 0],
				evolutionIds: ["NIDORINO"],
				evolutionPips: 1,
				pokedexHeightM: .5,
				pokedexWeightKg: 9,
				heightStdDev: .0625,
				weightStdDev: 1.125,
				familyId: "FAMILY_NIDORAN_MALE",
				candyToEvolve: 25,
				kmBuddyDistance: 1.5,
				modelHeight: .5
			}
		}, {
			templateId: "V0033_MOVE_ICE_PUNCH",
			moveSettings: {
				movementId: "ICE_PUNCH",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_ICE",
				power: 45,
				accuracyChance: 1,
				criticalChance: .05,
				staminaLossScalar: .075,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "ice_punch",
				durationMs: 3500,
				damageWindowStartMs: 2100,
				damageWindowEndMs: 3200,
				energyDelta: -33
			}
		}, {
			templateId: "V0033_POKEMON_NIDORINO",
			pokemonSettings: {
				pokemonId: "NIDORINO",
				modelScale: .99,
				type: "POKEMON_TYPE_POISON",
				camera: {
					diskRadiusM: .7425,
					cylinderRadiusM: .495,
					cylinderHeightM: .792,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .2,
					baseFleeRate: .07,
					collisionRadiusM: .297,
					collisionHeightM: .594,
					collisionHeadRadiusM: .2475,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 23,
					jumpTimeS: 1,
					attackTimerS: 8
				},
				stats: {
					baseStamina: 122,
					baseAttack: 137,
					baseDefense: 112
				},
				quickMoves: ["POISON_JAB_FAST", "POISON_STING_FAST"],
				cinematicMoves: ["HORN_ATTACK", "DIG", "SLUDGE_BOMB"],
				animationTime: [1.8, .6667, 1.6667, 1.7333, 0, 1.6667, 1.6667, 0],
				evolutionIds: ["NIDOKING"],
				evolutionPips: 1,
				pokedexHeightM: .9,
				pokedexWeightKg: 19.5,
				parentPokemonId: "NIDORAN_MALE",
				heightStdDev: .1125,
				weightStdDev: 2.4375,
				familyId: "FAMILY_NIDORAN_MALE",
				candyToEvolve: 100,
				kmBuddyDistance: 1.5,
				modelHeight: .9
			}
		}, {
			templateId: "V0034_MOVE_HEART_STAMP",
			moveSettings: {
				movementId: "HEART_STAMP",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_PSYCHIC",
				power: 25,
				accuracyChance: 1,
				criticalChance: .05,
				staminaLossScalar: .06,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "heartStamp",
				durationMs: 2550,
				damageWindowStartMs: 1950,
				damageWindowEndMs: 2250,
				energyDelta: -25
			}
		}, {
			templateId: "V0034_POKEMON_NIDOKING",
			pokemonSettings: {
				pokemonId: "NIDOKING",
				modelScale: .87,
				type: "POKEMON_TYPE_POISON",
				type2: "POKEMON_TYPE_GROUND",
				camera: {
					diskRadiusM: .8222,
					cylinderRadiusM: .5481,
					cylinderHeightM: 1.305,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .1,
					baseFleeRate: .05,
					collisionRadiusM: .5481,
					collisionHeightM: .87,
					collisionHeadRadiusM: .27405,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 14,
					jumpTimeS: 1,
					attackTimerS: 5
				},
				stats: {
					baseStamina: 162,
					baseAttack: 204,
					baseDefense: 157
				},
				quickMoves: ["POISON_JAB_FAST", "FURY_CUTTER_FAST"],
				cinematicMoves: ["EARTHQUAKE", "SLUDGE_WAVE", "MEGAHORN"],
				animationTime: [2, .6667, 2, 1.5, 0, 2.1667, 1.4, 0],
				evolutionPips: 1,
				pokedexHeightM: 1.4,
				pokedexWeightKg: 62,
				parentPokemonId: "NIDORINO",
				heightStdDev: .175,
				weightStdDev: 7.75,
				familyId: "FAMILY_NIDORAN_MALE",
				kmBuddyDistance: 1.5,
				modelHeight: 1.4
			}
		}, {
			templateId: "V0035_MOVE_DISCHARGE",
			moveSettings: {
				movementId: "DISCHARGE",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_ELECTRIC",
				power: 35,
				accuracyChance: 1,
				criticalChance: .05,
				staminaLossScalar: .08,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "discharge",
				durationMs: 2500,
				damageWindowStartMs: 1600,
				damageWindowEndMs: 2300,
				energyDelta: -33
			}
		}, {
			templateId: "V0035_POKEMON_CLEFAIRY",
			pokemonSettings: {
				pokemonId: "CLEFAIRY",
				modelScale: 1.25,
				type: "POKEMON_TYPE_FAIRY",
				camera: {
					diskRadiusM: .675,
					cylinderRadiusM: .45,
					cylinderHeightM: .75,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .24,
					baseFleeRate: .1,
					collisionRadiusM: .3125,
					collisionHeightM: .75,
					collisionHeadRadiusM: .225,
					movementTimerS: 8,
					jumpTimeS: 1.25,
					attackTimerS: 23
				},
				stats: {
					baseStamina: 140,
					baseAttack: 107,
					baseDefense: 116
				},
				quickMoves: ["POUND_FAST", "ZEN_HEADBUTT_FAST"],
				cinematicMoves: ["DISARMING_VOICE", "BODY_SLAM", "MOONBLAST"],
				animationTime: [2, .6667, 1.6667, 1.8333, 0, 2, 1.3333, 1.666667],
				evolutionIds: ["CLEFABLE"],
				evolutionPips: 1,
				pokedexHeightM: .6,
				pokedexWeightKg: 7.5,
				parentPokemonId: "CLEFFA",
				heightStdDev: .075,
				weightStdDev: .9375,
				familyId: "FAMILY_CLEFAIRY",
				candyToEvolve: 50,
				kmBuddyDistance: .5,
				modelHeight: .6
			}
		}, {
			templateId: "V0036_MOVE_FLASH_CANNON",
			moveSettings: {
				movementId: "FLASH_CANNON",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_STEEL",
				power: 60,
				accuracyChance: 1,
				criticalChance: .05,
				staminaLossScalar: .08,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "flashCannon",
				durationMs: 3900,
				damageWindowStartMs: 2400,
				damageWindowEndMs: 3500,
				energyDelta: -33
			}
		}, {
			templateId: "V0036_POKEMON_CLEFABLE",
			pokemonSettings: {
				pokemonId: "CLEFABLE",
				modelScale: .89,
				type: "POKEMON_TYPE_FAIRY",
				camera: {
					diskRadiusM: 1.1681,
					cylinderRadiusM: .712,
					cylinderHeightM: 1.44625,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .08,
					baseFleeRate: .06,
					collisionRadiusM: .445,
					collisionHeightM: 1.1125,
					collisionHeadRadiusM: .445,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 4,
					jumpTimeS: 1.25,
					attackTimerS: 11
				},
				stats: {
					baseStamina: 190,
					baseAttack: 178,
					baseDefense: 171
				},
				quickMoves: ["POUND_FAST", "ZEN_HEADBUTT_FAST"],
				cinematicMoves: ["DAZZLING_GLEAM", "PSYCHIC", "MOONBLAST"],
				animationTime: [2.3333, .6667, 1.6667, 1.8333, 0, 2.6667, 1.3333, 0],
				evolutionPips: 1,
				pokedexHeightM: 1.3,
				pokedexWeightKg: 40,
				parentPokemonId: "CLEFAIRY",
				heightStdDev: .1625,
				weightStdDev: 5,
				familyId: "FAMILY_CLEFAIRY",
				kmBuddyDistance: .5,
				modelHeight: 1.3
			}
		}, {
			templateId: "V0037_POKEMON_VULPIX",
			pokemonSettings: {
				pokemonId: "VULPIX",
				modelScale: 1.26,
				type: "POKEMON_TYPE_FIRE",
				camera: {
					diskRadiusM: .8505,
					cylinderRadiusM: .567,
					cylinderHeightM: .756,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .24,
					baseFleeRate: .1,
					collisionRadiusM: .315,
					collisionHeightM: .63,
					collisionHeadRadiusM: .252,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 10,
					jumpTimeS: 1,
					attackTimerS: 29
				},
				stats: {
					baseStamina: 76,
					baseAttack: 96,
					baseDefense: 122
				},
				quickMoves: ["QUICK_ATTACK_FAST", "EMBER_FAST"],
				cinematicMoves: ["BODY_SLAM", "FLAMETHROWER", "FLAME_CHARGE"],
				animationTime: [1.6667, .6667, 1.6667, 1.6, 0, 2, 1.3333, 2.2],
				evolutionIds: ["NINETALES"],
				evolutionPips: 1,
				pokedexHeightM: .6,
				pokedexWeightKg: 9.9,
				heightStdDev: .075,
				weightStdDev: 1.2375,
				familyId: "FAMILY_VULPIX",
				candyToEvolve: 50,
				kmBuddyDistance: 1.5,
				modelHeight: .58
			}
		}, {
			templateId: "V0038_MOVE_DRILL_PECK",
			moveSettings: {
				movementId: "DRILL_PECK",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_FLYING",
				power: 40,
				accuracyChance: 1,
				criticalChance: .05,
				staminaLossScalar: .08,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "drill_peck",
				durationMs: 2700,
				damageWindowStartMs: 1600,
				damageWindowEndMs: 2500,
				energyDelta: -33
			}
		}, {
			templateId: "V0038_POKEMON_NINETALES",
			pokemonSettings: {
				pokemonId: "NINETALES",
				modelScale: .96,
				type: "POKEMON_TYPE_FIRE",
				camera: {
					diskRadiusM: 1.296,
					cylinderRadiusM: .864,
					cylinderHeightM: 1.2,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .08,
					baseFleeRate: .06,
					collisionRadiusM: .36,
					collisionHeightM: .96,
					collisionHeadRadiusM: .24,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 5,
					jumpTimeS: 1.25,
					attackTimerS: 14
				},
				stats: {
					baseStamina: 146,
					baseAttack: 169,
					baseDefense: 204
				},
				quickMoves: ["FEINT_ATTACK_FAST", "EMBER_FAST"],
				cinematicMoves: ["HEAT_WAVE", "FLAMETHROWER", "FIRE_BLAST"],
				animationTime: [2.6667, .6667, 2, 2, 0, 2.1667, 2, 2],
				evolutionPips: 1,
				pokedexHeightM: 1.1,
				pokedexWeightKg: 19.9,
				parentPokemonId: "VULPIX",
				heightStdDev: .1375,
				weightStdDev: 2.4875,
				familyId: "FAMILY_VULPIX",
				kmBuddyDistance: 1.5,
				modelHeight: 1.11
			}
		}, {
			templateId: "V0039_MOVE_ICE_BEAM",
			moveSettings: {
				movementId: "ICE_BEAM",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_ICE",
				power: 65,
				accuracyChance: 1,
				criticalChance: .05,
				staminaLossScalar: .09,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "iceBeam",
				durationMs: 3650,
				damageWindowStartMs: 2150,
				damageWindowEndMs: 3500,
				energyDelta: -50
			}
		}, {
			templateId: "V0039_POKEMON_JIGGLYPUFF",
			pokemonSettings: {
				pokemonId: "JIGGLYPUFF",
				modelScale: 1.28,
				type: "POKEMON_TYPE_NORMAL",
				type2: "POKEMON_TYPE_FAIRY",
				camera: {
					diskRadiusM: .768,
					cylinderRadiusM: .512,
					cylinderHeightM: .96,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .4,
					baseFleeRate: .1,
					collisionRadiusM: .32,
					collisionHeightM: .64,
					collisionHeadRadiusM: .256,
					movementTimerS: 10,
					jumpTimeS: 3,
					attackTimerS: 29
				},
				stats: {
					baseStamina: 230,
					baseAttack: 80,
					baseDefense: 44
				},
				quickMoves: ["POUND_FAST", "FEINT_ATTACK_FAST"],
				cinematicMoves: ["DISARMING_VOICE", "BODY_SLAM", "DAZZLING_GLEAM"],
				animationTime: [2.6667, .6667, 1.6667, 3.6667, 0, 2.6667, 1.6667, 2],
				evolutionIds: ["WIGGLYTUFF"],
				evolutionPips: 1,
				pokedexHeightM: .5,
				pokedexWeightKg: 5.5,
				parentPokemonId: "IGGLYBUFF",
				heightStdDev: .0625,
				weightStdDev: .6875,
				familyId: "FAMILY_JIGGLYPUFF",
				candyToEvolve: 50,
				kmBuddyDistance: .5,
				modelHeight: .56
			}
		}, {
			templateId: "V0040_MOVE_BLIZZARD",
			moveSettings: {
				movementId: "BLIZZARD",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_ICE",
				power: 100,
				accuracyChance: 1,
				criticalChance: .05,
				staminaLossScalar: .11,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "blizzard",
				durationMs: 3900,
				damageWindowStartMs: 3600,
				damageWindowEndMs: 3600,
				energyDelta: -100
			}
		}, {
			templateId: "V0040_POKEMON_WIGGLYTUFF",
			pokemonSettings: {
				pokemonId: "WIGGLYTUFF",
				modelScale: .89,
				type: "POKEMON_TYPE_NORMAL",
				type2: "POKEMON_TYPE_FAIRY",
				camera: {
					diskRadiusM: 1.0013,
					cylinderRadiusM: .445,
					cylinderHeightM: 1.22375,
					shoulderModeScale: .4
				},
				encounter: {
					baseCaptureRate: .16,
					baseFleeRate: .06,
					collisionRadiusM: .356,
					collisionHeightM: .89,
					collisionHeadRadiusM: .2225,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 4,
					jumpTimeS: 1.25,
					attackTimerS: 11
				},
				stats: {
					baseStamina: 280,
					baseAttack: 156,
					baseDefense: 93
				},
				quickMoves: ["POUND_FAST", "FEINT_ATTACK_FAST"],
				cinematicMoves: ["DAZZLING_GLEAM", "HYPER_BEAM", "PLAY_ROUGH"],
				animationTime: [1.6667, .6667, 1.6333, 1.8333, 0, 1.8333, 2, 0],
				evolutionPips: 1,
				pokedexHeightM: 1,
				pokedexWeightKg: 12,
				parentPokemonId: "JIGGLYPUFF",
				heightStdDev: .125,
				weightStdDev: 1.5,
				familyId: "FAMILY_JIGGLYPUFF",
				kmBuddyDistance: .5,
				modelHeight: 1.3
			}
		}, {
			templateId: "V0041_POKEMON_ZUBAT",
			pokemonSettings: {
				pokemonId: "ZUBAT",
				modelScale: 1.07,
				type: "POKEMON_TYPE_POISON",
				type2: "POKEMON_TYPE_FLYING",
				camera: {
					diskRadiusM: .963,
					cylinderRadiusM: .642,
					cylinderHeightM: .6955,
					cylinderGroundM: .535,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .4,
					baseFleeRate: .2,
					collisionRadiusM: .0535,
					collisionHeightM: .0535,
					collisionHeadRadiusM: .1605,
					movementType: "MOVEMENT_FLYING",
					movementTimerS: 10,
					jumpTimeS: 1,
					attackTimerS: 29
				},
				stats: {
					baseStamina: 80,
					baseAttack: 83,
					baseDefense: 76
				},
				quickMoves: ["QUICK_ATTACK_FAST", "BITE_FAST"],
				cinematicMoves: ["POISON_FANG", "AIR_CUTTER", "SLUDGE_BOMB"],
				animationTime: [1.3333, .6667, 1.3333, .6667, 0, 1.5, 1.3333, 0],
				evolutionIds: ["GOLBAT"],
				evolutionPips: 1,
				pokedexHeightM: .8,
				pokedexWeightKg: 7.5,
				heightStdDev: .1,
				weightStdDev: .9375,
				familyId: "FAMILY_ZUBAT",
				candyToEvolve: 50,
				kmBuddyDistance: .5,
				modelHeight: .85
			}
		}, {
			templateId: "V0042_MOVE_HEAT_WAVE",
			moveSettings: {
				movementId: "HEAT_WAVE",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_FIRE",
				power: 80,
				accuracyChance: 1,
				criticalChance: .05,
				staminaLossScalar: .095,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "heatWave",
				durationMs: 3800,
				damageWindowStartMs: 3e3,
				damageWindowEndMs: 3400,
				energyDelta: -100
			}
		}, {
			templateId: "V0042_POKEMON_GOLBAT",
			pokemonSettings: {
				pokemonId: "GOLBAT",
				modelScale: .71,
				type: "POKEMON_TYPE_POISON",
				type2: "POKEMON_TYPE_FLYING",
				camera: {
					diskRadiusM: 1.5975,
					cylinderRadiusM: .75,
					cylinderHeightM: 1.2425,
					cylinderGroundM: 1.065,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .16,
					baseFleeRate: .07,
					collisionRadiusM: .0355,
					collisionHeightM: .0355,
					collisionHeadRadiusM: .355,
					movementType: "MOVEMENT_FLYING",
					movementTimerS: 6,
					jumpTimeS: 1,
					attackTimerS: 17
				},
				stats: {
					baseStamina: 150,
					baseAttack: 161,
					baseDefense: 153
				},
				quickMoves: ["WING_ATTACK_FAST", "BITE_FAST"],
				cinematicMoves: ["POISON_FANG", "AIR_CUTTER", "OMINOUS_WIND"],
				animationTime: [1.5, .6667, 1.3333, .6667, 0, 2, 2, 0],
				evolutionPips: 1,
				pokedexHeightM: 1.6,
				pokedexWeightKg: 55,
				parentPokemonId: "ZUBAT",
				heightStdDev: .2,
				weightStdDev: 6.875,
				familyId: "FAMILY_ZUBAT",
				kmBuddyDistance: .5,
				modelHeight: 1.95
			}
		}, {
			templateId: "V0043_POKEMON_ODDISH",
			pokemonSettings: {
				pokemonId: "ODDISH",
				modelScale: 1.35,
				type: "POKEMON_TYPE_GRASS",
				type2: "POKEMON_TYPE_POISON",
				camera: {
					diskRadiusM: .6075,
					cylinderRadiusM: .405,
					cylinderHeightM: .81000012,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .48,
					baseFleeRate: .15,
					collisionRadiusM: .2025,
					collisionHeightM: .50625,
					collisionHeadRadiusM: .2025,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 10,
					jumpTimeS: 1,
					attackTimerS: 29
				},
				stats: {
					baseStamina: 90,
					baseAttack: 131,
					baseDefense: 116
				},
				quickMoves: ["RAZOR_LEAF_FAST", "ACID_FAST"],
				cinematicMoves: ["SEED_BOMB", "SLUDGE_BOMB", "MOONBLAST"],
				animationTime: [1.4667, .6667, 1.6667, 1.6667, 0, 2.5, 1.6667, 0],
				evolutionIds: ["GLOOM"],
				evolutionPips: 1,
				pokedexHeightM: .5,
				pokedexWeightKg: 5.4,
				heightStdDev: .0625,
				weightStdDev: .675,
				familyId: "FAMILY_ODDISH",
				candyToEvolve: 25,
				kmBuddyDistance: 1.5,
				modelHeight: .5
			}
		}, {
			templateId: "V0044_POKEMON_GLOOM",
			pokemonSettings: {
				pokemonId: "GLOOM",
				modelScale: 1.1,
				type: "POKEMON_TYPE_GRASS",
				type2: "POKEMON_TYPE_POISON",
				camera: {
					diskRadiusM: .7425,
					cylinderRadiusM: .495,
					cylinderHeightM: .88000011,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .24,
					baseFleeRate: .07,
					collisionRadiusM: .4125,
					collisionHeightM: .88000011,
					collisionHeadRadiusM: .2475,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 8,
					jumpTimeS: 1,
					attackTimerS: 23
				},
				stats: {
					baseStamina: 120,
					baseAttack: 153,
					baseDefense: 139
				},
				quickMoves: ["RAZOR_LEAF_FAST", "ACID_FAST"],
				cinematicMoves: ["PETAL_BLIZZARD", "SLUDGE_BOMB", "MOONBLAST"],
				animationTime: [1.8333, .6667, 1.6667, 1.6667, 0, 1.6667, 1.2667, 0],
				evolutionIds: ["VILEPLUME"],
				evolutionPips: 1,
				pokedexHeightM: .8,
				pokedexWeightKg: 8.6,
				parentPokemonId: "ODDISH",
				heightStdDev: .1,
				weightStdDev: 1.075,
				familyId: "FAMILY_ODDISH",
				candyToEvolve: 100,
				kmBuddyDistance: 1.5,
				modelHeight: .8
			}
		}, {
			templateId: "V0045_MOVE_AERIAL_ACE",
			moveSettings: {
				movementId: "AERIAL_ACE",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_FLYING",
				power: 30,
				accuracyChance: 1,
				criticalChance: .05,
				staminaLossScalar: .06,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "aerialAce",
				durationMs: 2900,
				damageWindowStartMs: 2e3,
				damageWindowEndMs: 2600,
				energyDelta: -25
			}
		}, {
			templateId: "V0045_POKEMON_VILEPLUME",
			pokemonSettings: {
				pokemonId: "VILEPLUME",
				modelScale: .92,
				type: "POKEMON_TYPE_GRASS",
				type2: "POKEMON_TYPE_POISON",
				camera: {
					diskRadiusM: 1.242,
					cylinderRadiusM: .828,
					cylinderHeightM: 1.196,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: 1.012,
					collisionHeightM: 1.196,
					collisionHeadRadiusM: .552,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 4
				},
				stats: {
					baseStamina: 150,
					baseAttack: 202,
					baseDefense: 170
				},
				quickMoves: ["RAZOR_LEAF_FAST", "ACID_FAST"],
				cinematicMoves: ["PETAL_BLIZZARD", "SOLAR_BEAM", "MOONBLAST"],
				animationTime: [2.1667, .6667, 1.6667, 1.5, 0, 2.1667, .9667, 0],
				evolutionPips: 1,
				pokedexHeightM: 1.2,
				pokedexWeightKg: 18.6,
				parentPokemonId: "GLOOM",
				heightStdDev: .15,
				weightStdDev: 2.325,
				familyId: "FAMILY_ODDISH",
				kmBuddyDistance: 1.5,
				modelHeight: 1.2
			}
		}, {
			templateId: "V0046_MOVE_DRILL_RUN",
			moveSettings: {
				movementId: "DRILL_RUN",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_GROUND",
				power: 50,
				accuracyChance: 1,
				criticalChance: .25,
				staminaLossScalar: .08,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "drillRun",
				durationMs: 3400,
				damageWindowStartMs: 2100,
				damageWindowEndMs: 2800,
				energyDelta: -33
			}
		}, {
			templateId: "V0046_POKEMON_PARAS",
			pokemonSettings: {
				pokemonId: "PARAS",
				modelScale: 1.28,
				type: "POKEMON_TYPE_BUG",
				type2: "POKEMON_TYPE_GRASS",
				camera: {
					diskRadiusM: .576,
					cylinderRadiusM: .384,
					cylinderHeightM: .448,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .32,
					baseFleeRate: .15,
					collisionRadiusM: .192,
					collisionHeightM: .32,
					collisionHeadRadiusM: .192,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 29,
					jumpTimeS: 1.1,
					attackTimerS: 10
				},
				stats: {
					baseStamina: 70,
					baseAttack: 121,
					baseDefense: 99
				},
				quickMoves: ["SCRATCH_FAST", "BUG_BITE_FAST"],
				cinematicMoves: ["CROSS_POISON", "X_SCISSOR", "SEED_BOMB"],
				animationTime: [1.6667, .6667, 1.7667, 1.6333, 0, 2.3333, 1.3333, 1.5333329],
				evolutionIds: ["PARASECT"],
				evolutionPips: 1,
				pokedexHeightM: .3,
				pokedexWeightKg: 5.4,
				heightStdDev: .0375,
				weightStdDev: .675,
				familyId: "FAMILY_PARAS",
				candyToEvolve: 50,
				kmBuddyDistance: 1.5,
				modelHeight: .43
			}
		}, {
			templateId: "V0047_MOVE_PETAL_BLIZZARD",
			moveSettings: {
				movementId: "PETAL_BLIZZARD",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_GRASS",
				power: 65,
				accuracyChance: 1,
				criticalChance: .05,
				staminaLossScalar: .09,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "petalBlizzard",
				durationMs: 3200,
				damageWindowStartMs: 2100,
				damageWindowEndMs: 3100,
				energyDelta: -50
			}
		}, {
			templateId: "V0047_POKEMON_PARASECT",
			pokemonSettings: {
				pokemonId: "PARASECT",
				modelScale: 1.01,
				type: "POKEMON_TYPE_BUG",
				type2: "POKEMON_TYPE_GRASS",
				camera: {
					diskRadiusM: .9469,
					cylinderRadiusM: .6313,
					cylinderHeightM: 1.01,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .16,
					baseFleeRate: .07,
					collisionRadiusM: .4545,
					collisionHeightM: 1.01,
					collisionHeadRadiusM: .505,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 17,
					jumpTimeS: 1.25,
					attackTimerS: 6
				},
				stats: {
					baseStamina: 120,
					baseAttack: 165,
					baseDefense: 146
				},
				quickMoves: ["BUG_BITE_FAST", "FURY_CUTTER_FAST"],
				cinematicMoves: ["CROSS_POISON", "X_SCISSOR", "SOLAR_BEAM"],
				animationTime: [1.6667, .6667, 1.6667, 1.8333, 0, 1.6667, 2, 0],
				evolutionPips: 1,
				pokedexHeightM: 1,
				pokedexWeightKg: 29.5,
				parentPokemonId: "PARAS",
				heightStdDev: .125,
				weightStdDev: 3.6875,
				familyId: "FAMILY_PARAS",
				kmBuddyDistance: 1.5,
				modelHeight: .97
			}
		}, {
			templateId: "V0048_MOVE_MEGA_DRAIN",
			moveSettings: {
				movementId: "MEGA_DRAIN",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_GRASS",
				power: 25,
				accuracyChance: 1,
				criticalChance: .05,
				healScalar: .5,
				staminaLossScalar: .04,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "megaDrain",
				durationMs: 3200,
				damageWindowStartMs: 1400,
				damageWindowEndMs: 2600,
				energyDelta: -20
			}
		}, {
			templateId: "V0048_POKEMON_VENONAT",
			pokemonSettings: {
				pokemonId: "VENONAT",
				modelScale: .71,
				type: "POKEMON_TYPE_BUG",
				type2: "POKEMON_TYPE_POISON",
				camera: {
					diskRadiusM: .7988,
					cylinderRadiusM: .5325,
					cylinderHeightM: 1.1715,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .4,
					baseFleeRate: .15,
					collisionRadiusM: .355,
					collisionHeightM: .71,
					collisionHeadRadiusM: .26625,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 10,
					jumpTimeS: 1.25,
					attackTimerS: 29
				},
				stats: {
					baseStamina: 120,
					baseAttack: 100,
					baseDefense: 102
				},
				quickMoves: ["BUG_BITE_FAST", "CONFUSION_FAST"],
				cinematicMoves: ["POISON_FANG", "PSYBEAM", "SIGNAL_BEAM"],
				animationTime: [2, .6667, 1.6667, 2, 0, 2, 2, 0],
				evolutionIds: ["VENOMOTH"],
				evolutionPips: 1,
				pokedexHeightM: 1,
				pokedexWeightKg: 30,
				heightStdDev: .125,
				weightStdDev: 3.75,
				familyId: "FAMILY_VENONAT",
				candyToEvolve: 50,
				kmBuddyDistance: 1.5,
				modelHeight: 1.42
			}
		}, {
			templateId: "V0049_MOVE_BUG_BUZZ",
			moveSettings: {
				movementId: "BUG_BUZZ",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_BUG",
				power: 75,
				accuracyChance: 1,
				criticalChance: .05,
				staminaLossScalar: .09,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "bugBuzz",
				durationMs: 4250,
				damageWindowStartMs: 2600,
				damageWindowEndMs: 4100,
				energyDelta: -50
			}
		}, {
			templateId: "V0049_POKEMON_VENOMOTH",
			pokemonSettings: {
				pokemonId: "VENOMOTH",
				modelScale: .72,
				type: "POKEMON_TYPE_BUG",
				type2: "POKEMON_TYPE_POISON",
				camera: {
					diskRadiusM: .864,
					cylinderRadiusM: .576,
					cylinderHeightM: 1.08,
					cylinderGroundM: .36,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .16,
					baseFleeRate: .07,
					collisionRadiusM: .36,
					collisionHeightM: .72,
					collisionHeadRadiusM: .288,
					movementType: "MOVEMENT_FLYING",
					movementTimerS: 6,
					jumpTimeS: 1,
					attackTimerS: 17
				},
				stats: {
					baseStamina: 140,
					baseAttack: 179,
					baseDefense: 150
				},
				quickMoves: ["BUG_BITE_FAST", "CONFUSION_FAST"],
				cinematicMoves: ["POISON_FANG", "PSYCHIC", "BUG_BUZZ"],
				animationTime: [0, .6, 1.6667, .6, 0, 2.1333, 1.6, 0],
				evolutionPips: 1,
				pokedexHeightM: 1.5,
				pokedexWeightKg: 12.5,
				parentPokemonId: "VENONAT",
				heightStdDev: .1875,
				weightStdDev: 1.5625,
				familyId: "FAMILY_VENONAT",
				kmBuddyDistance: 1.5,
				modelHeight: 1.6
			}
		}, {
			templateId: "V0050_MOVE_POISON_FANG",
			moveSettings: {
				movementId: "POISON_FANG",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_POISON",
				power: 25,
				accuracyChance: 1,
				criticalChance: .05,
				staminaLossScalar: .05,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "poisonFang",
				durationMs: 2400,
				damageWindowStartMs: 1650,
				damageWindowEndMs: 1850,
				energyDelta: -20
			}
		}, {
			templateId: "V0050_POKEMON_DIGLETT",
			pokemonSettings: {
				pokemonId: "DIGLETT",
				modelScale: 2,
				type: "POKEMON_TYPE_GROUND",
				camera: {
					diskRadiusM: .45,
					cylinderRadiusM: .3,
					cylinderHeightM: .4,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .4,
					baseFleeRate: .1,
					collisionRadiusM: .16,
					collisionHeightM: .4,
					collisionHeadRadiusM: .18,
					movementTimerS: 29,
					attackTimerS: 10
				},
				stats: {
					baseStamina: 20,
					baseAttack: 109,
					baseDefense: 88
				},
				quickMoves: ["MUD_SLAP_FAST", "SCRATCH_FAST"],
				cinematicMoves: ["DIG", "MUD_BOMB", "ROCK_TOMB"],
				animationTime: [1.4333, .6667, 2, .8667, 0, 2.1667, 1.3333, 1.333333],
				evolutionIds: ["DUGTRIO"],
				evolutionPips: 1,
				pokedexHeightM: .2,
				pokedexWeightKg: .8,
				heightStdDev: .025,
				weightStdDev: .1,
				familyId: "FAMILY_DIGLETT",
				candyToEvolve: 50,
				kmBuddyDistance: 1.5,
				modelHeight: .2
			}
		}, {
			templateId: "V0051_MOVE_NIGHT_SLASH",
			moveSettings: {
				movementId: "NIGHT_SLASH",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_DARK",
				power: 30,
				accuracyChance: 1,
				criticalChance: .25,
				staminaLossScalar: .07,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "nightSlash",
				durationMs: 2700,
				damageWindowStartMs: 2400,
				damageWindowEndMs: 2600,
				energyDelta: -25
			}
		}, {
			templateId: "V0051_POKEMON_DUGTRIO",
			pokemonSettings: {
				pokemonId: "DUGTRIO",
				modelScale: 1.12,
				type: "POKEMON_TYPE_GROUND",
				camera: {
					diskRadiusM: 1.008,
					cylinderRadiusM: .672,
					cylinderHeightM: .84,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .16,
					baseFleeRate: .06,
					collisionRadiusM: .448,
					collisionHeightM: .84,
					collisionHeadRadiusM: .336,
					movementTimerS: 29,
					attackTimerS: 10
				},
				stats: {
					baseStamina: 70,
					baseAttack: 167,
					baseDefense: 147
				},
				quickMoves: ["SUCKER_PUNCH_FAST", "MUD_SLAP_FAST"],
				cinematicMoves: ["EARTHQUAKE", "MUD_BOMB", "STONE_EDGE"],
				animationTime: [1.7333, .6667, 1.6667, .9, 0, 2.1333, 2, 0],
				evolutionPips: 1,
				pokedexHeightM: .7,
				pokedexWeightKg: 33.3,
				parentPokemonId: "DIGLETT",
				heightStdDev: .0875,
				weightStdDev: 4.1625,
				familyId: "FAMILY_DIGLETT",
				kmBuddyDistance: 1.5,
				modelHeight: .77
			}
		}, {
			templateId: "V0052_POKEMON_MEOWTH",
			pokemonSettings: {
				pokemonId: "MEOWTH",
				modelScale: 1.6,
				type: "POKEMON_TYPE_NORMAL",
				camera: {
					diskRadiusM: .6,
					cylinderRadiusM: .4,
					cylinderHeightM: .64,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .4,
					baseFleeRate: .15,
					collisionRadiusM: .128,
					collisionHeightM: .4,
					collisionHeadRadiusM: .2,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 29,
					jumpTimeS: 1,
					attackTimerS: 10
				},
				stats: {
					baseStamina: 80,
					baseAttack: 92,
					baseDefense: 81
				},
				quickMoves: ["SCRATCH_FAST", "BITE_FAST"],
				cinematicMoves: ["NIGHT_SLASH", "DARK_PULSE", "BODY_SLAM"],
				animationTime: [2, .6667, 1.7333, 1.5, 0, 2, 1.4, 2],
				evolutionIds: ["PERSIAN"],
				evolutionPips: 1,
				pokedexHeightM: .4,
				pokedexWeightKg: 4.2,
				heightStdDev: .05,
				weightStdDev: .525,
				familyId: "FAMILY_MEOWTH",
				candyToEvolve: 50,
				kmBuddyDistance: 1.5,
				modelHeight: .4
			}
		}, {
			templateId: "V0053_MOVE_BUBBLE_BEAM",
			moveSettings: {
				movementId: "BUBBLE_BEAM",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_WATER",
				power: 30,
				accuracyChance: 1,
				criticalChance: .05,
				staminaLossScalar: .065,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "bubbleBeam",
				durationMs: 2900,
				damageWindowStartMs: 2600,
				damageWindowEndMs: 2800,
				energyDelta: -25
			}
		}, {
			templateId: "V0053_POKEMON_PERSIAN",
			pokemonSettings: {
				pokemonId: "PERSIAN",
				modelScale: .82,
				type: "POKEMON_TYPE_NORMAL",
				camera: {
					diskRadiusM: .7995,
					cylinderRadiusM: .533,
					cylinderHeightM: .902,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .16,
					baseFleeRate: .07,
					collisionRadiusM: .328,
					collisionHeightM: .615,
					collisionHeadRadiusM: .164,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 8,
					jumpTimeS: 1.25,
					attackTimerS: 23
				},
				stats: {
					baseStamina: 130,
					baseAttack: 150,
					baseDefense: 139
				},
				quickMoves: ["SCRATCH_FAST", "FEINT_ATTACK_FAST"],
				cinematicMoves: ["NIGHT_SLASH", "POWER_GEM", "PLAY_ROUGH"],
				animationTime: [2, .6667, 1.6667, 1.8333, 0, 1.6667, 1.6667, 0],
				evolutionPips: 1,
				pokedexHeightM: 1,
				pokedexWeightKg: 32,
				parentPokemonId: "MEOWTH",
				heightStdDev: .125,
				weightStdDev: 4,
				familyId: "FAMILY_MEOWTH",
				kmBuddyDistance: 1.5,
				modelHeight: 1.38
			}
		}, {
			templateId: "V0054_MOVE_SUBMISSION",
			moveSettings: {
				movementId: "SUBMISSION",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_FIGHTING",
				power: 30,
				accuracyChance: 1,
				criticalChance: .05,
				staminaLossScalar: .08,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "submission",
				durationMs: 2100,
				damageWindowStartMs: 1850,
				damageWindowEndMs: 2e3,
				energyDelta: -33
			}
		}, {
			templateId: "V0054_POKEMON_PSYDUCK",
			pokemonSettings: {
				pokemonId: "PSYDUCK",
				modelScale: .97,
				type: "POKEMON_TYPE_WATER",
				camera: {
					diskRadiusM: .5456,
					cylinderRadiusM: .3638,
					cylinderHeightM: .97,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .4,
					baseFleeRate: .1,
					collisionRadiusM: .291,
					collisionHeightM: .60625,
					collisionHeadRadiusM: .3395,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 10,
					jumpTimeS: 1,
					attackTimerS: 29
				},
				stats: {
					baseStamina: 100,
					baseAttack: 122,
					baseDefense: 96
				},
				quickMoves: ["WATER_GUN_FAST", "ZEN_HEADBUTT_FAST"],
				cinematicMoves: ["PSYBEAM", "AQUA_TAIL", "CROSS_CHOP"],
				animationTime: [1.8333, .6667, 1.6667, 1.5, 0, 2.6, 1.6667, 0],
				evolutionIds: ["GOLDUCK"],
				evolutionPips: 1,
				pokedexHeightM: .8,
				pokedexWeightKg: 19.6,
				heightStdDev: .1,
				weightStdDev: 2.45,
				familyId: "FAMILY_PSYDUCK",
				candyToEvolve: 50,
				kmBuddyDistance: 1.5,
				modelHeight: .9
			}
		}, {
			templateId: "V0055_POKEMON_GOLDUCK",
			pokemonSettings: {
				pokemonId: "GOLDUCK",
				modelScale: .93,
				type: "POKEMON_TYPE_WATER",
				camera: {
					diskRadiusM: .9765,
					cylinderRadiusM: .465,
					cylinderHeightM: 1.3485,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .16,
					baseFleeRate: .06,
					collisionRadiusM: .2325,
					collisionHeightM: .81375,
					collisionHeadRadiusM: .2325,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 5,
					jumpTimeS: 1,
					attackTimerS: 14
				},
				stats: {
					baseStamina: 160,
					baseAttack: 191,
					baseDefense: 163
				},
				quickMoves: ["WATER_GUN_FAST", "CONFUSION_FAST"],
				cinematicMoves: ["PSYCHIC", "HYDRO_PUMP", "ICE_BEAM"],
				animationTime: [1.6667, .6667, 1.6667, 1.6667, 0, 2, 1.6667, 0],
				evolutionPips: 1,
				pokedexHeightM: 1.7,
				pokedexWeightKg: 76.6,
				parentPokemonId: "PSYDUCK",
				heightStdDev: .2125,
				weightStdDev: 9.575,
				familyId: "FAMILY_PSYDUCK",
				kmBuddyDistance: 1.5,
				modelHeight: 1.4
			}
		}, {
			templateId: "V0056_MOVE_LOW_SWEEP",
			moveSettings: {
				movementId: "LOW_SWEEP",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_FIGHTING",
				power: 30,
				accuracyChance: 1,
				criticalChance: .05,
				staminaLossScalar: .065,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "lowSweep",
				durationMs: 2250,
				damageWindowStartMs: 2e3,
				damageWindowEndMs: 2150,
				energyDelta: -25
			}
		}, {
			templateId: "V0056_POKEMON_MANKEY",
			pokemonSettings: {
				pokemonId: "MANKEY",
				modelScale: 1.29,
				type: "POKEMON_TYPE_FIGHTING",
				camera: {
					diskRadiusM: .7256,
					cylinderRadiusM: .4838,
					cylinderHeightM: .80625,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .4,
					baseFleeRate: .1,
					collisionRadiusM: .1935,
					collisionHeightM: .645,
					collisionHeadRadiusM: .129,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 29,
					jumpTimeS: 1,
					attackTimerS: 10
				},
				stats: {
					baseStamina: 80,
					baseAttack: 148,
					baseDefense: 87
				},
				quickMoves: ["KARATE_CHOP_FAST", "SCRATCH_FAST"],
				cinematicMoves: ["CROSS_CHOP", "LOW_SWEEP", "BRICK_BREAK"],
				animationTime: [1.5, .6, 1.3333, 1.6333, 0, 1.9667, .9333, 0],
				evolutionIds: ["PRIMEAPE"],
				evolutionPips: 1,
				pokedexHeightM: .5,
				pokedexWeightKg: 28,
				heightStdDev: .0625,
				weightStdDev: 3.5,
				familyId: "FAMILY_MANKEY",
				candyToEvolve: 50,
				kmBuddyDistance: 1.5,
				modelHeight: .55
			}
		}, {
			templateId: "V0057_MOVE_AQUA_JET",
			moveSettings: {
				movementId: "AQUA_JET",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_WATER",
				power: 25,
				accuracyChance: 1,
				criticalChance: .05,
				staminaLossScalar: .04,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "aqua_jet",
				durationMs: 2350,
				damageWindowStartMs: 1700,
				damageWindowEndMs: 2100,
				energyDelta: -20
			}
		}, {
			templateId: "V0057_POKEMON_PRIMEAPE",
			pokemonSettings: {
				pokemonId: "PRIMEAPE",
				modelScale: .92,
				type: "POKEMON_TYPE_FIGHTING",
				camera: {
					diskRadiusM: .69,
					cylinderRadiusM: .46,
					cylinderHeightM: 1.15,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .16,
					baseFleeRate: .06,
					collisionRadiusM: .46,
					collisionHeightM: 1.104,
					collisionHeadRadiusM: .23,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 17,
					jumpTimeS: 1,
					attackTimerS: 6
				},
				stats: {
					baseStamina: 130,
					baseAttack: 207,
					baseDefense: 144
				},
				quickMoves: ["LOW_KICK_FAST", "KARATE_CHOP_FAST"],
				cinematicMoves: ["CROSS_CHOP", "LOW_SWEEP", "NIGHT_SLASH"],
				animationTime: [1.3333, .6667, 1.5, 1.3333, 0, 1.6667, 1.3333, 0],
				evolutionPips: 1,
				pokedexHeightM: 1,
				pokedexWeightKg: 32,
				parentPokemonId: "MANKEY",
				heightStdDev: .125,
				weightStdDev: 4,
				familyId: "FAMILY_MANKEY",
				kmBuddyDistance: 1.5,
				modelHeight: 1.2
			}
		}, {
			templateId: "V0058_MOVE_AQUA_TAIL",
			moveSettings: {
				movementId: "AQUA_TAIL",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_WATER",
				power: 45,
				accuracyChance: 1,
				criticalChance: .05,
				staminaLossScalar: .09,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "aquaTail",
				durationMs: 2350,
				damageWindowStartMs: 2050,
				damageWindowEndMs: 2250,
				energyDelta: -50
			}
		}, {
			templateId: "V0058_POKEMON_GROWLITHE",
			pokemonSettings: {
				pokemonId: "GROWLITHE",
				modelScale: 1.17,
				type: "POKEMON_TYPE_FIRE",
				camera: {
					diskRadiusM: .8775,
					cylinderRadiusM: .585,
					cylinderHeightM: 1.02375,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .24,
					baseFleeRate: .1,
					collisionRadiusM: .234,
					collisionHeightM: .585,
					collisionHeadRadiusM: .1755,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 10,
					jumpTimeS: 1,
					attackTimerS: 29
				},
				stats: {
					baseStamina: 110,
					baseAttack: 136,
					baseDefense: 96
				},
				quickMoves: ["EMBER_FAST", "BITE_FAST"],
				cinematicMoves: ["FLAME_WHEEL", "BODY_SLAM", "FLAMETHROWER"],
				animationTime: [2.0333, .6667, 1.8, 1.5, 0, 2.2667, .8, 1.8],
				evolutionIds: ["ARCANINE"],
				evolutionPips: 1,
				pokedexHeightM: .7,
				pokedexWeightKg: 19,
				heightStdDev: .0875,
				weightStdDev: 2.375,
				familyId: "FAMILY_GROWLITHE",
				candyToEvolve: 50,
				kmBuddyDistance: 1.5,
				modelHeight: .7
			}
		}, {
			templateId: "V0059_MOVE_SEED_BOMB",
			moveSettings: {
				movementId: "SEED_BOMB",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_GRASS",
				power: 40,
				accuracyChance: 1,
				criticalChance: .05,
				staminaLossScalar: .08,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "seedBomb",
				durationMs: 2400,
				damageWindowStartMs: 1300,
				damageWindowEndMs: 1800,
				energyDelta: -33
			}
		}, {
			templateId: "V0059_POKEMON_ARCANINE",
			pokemonSettings: {
				pokemonId: "ARCANINE",
				modelScale: .74,
				type: "POKEMON_TYPE_FIRE",
				camera: {
					diskRadiusM: .999,
					cylinderRadiusM: .666,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .08,
					baseFleeRate: .06,
					collisionRadiusM: .37,
					collisionHeightM: .74,
					collisionHeadRadiusM: .333,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 4,
					jumpTimeS: 1.25,
					attackTimerS: 11
				},
				stats: {
					baseStamina: 180,
					baseAttack: 227,
					baseDefense: 166
				},
				quickMoves: ["FIRE_FANG_FAST", "BITE_FAST"],
				cinematicMoves: ["FIRE_BLAST", "FLAMETHROWER", "BULLDOZE"],
				animationTime: [2.1333, .6667, 1.7333, 1.8333, 0, 1.8667, 1.7333, 2],
				evolutionPips: 1,
				pokedexHeightM: 1.9,
				pokedexWeightKg: 155,
				parentPokemonId: "GROWLITHE",
				heightStdDev: .2375,
				weightStdDev: 19.375,
				familyId: "FAMILY_GROWLITHE",
				kmBuddyDistance: 1.5,
				modelHeight: 2
			}
		}, {
			templateId: "V0060_MOVE_PSYSHOCK",
			moveSettings: {
				movementId: "PSYSHOCK",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_PSYCHIC",
				power: 40,
				accuracyChance: 1,
				criticalChance: .05,
				staminaLossScalar: .08,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "psyshock",
				durationMs: 2700,
				damageWindowStartMs: 2200,
				damageWindowEndMs: 2700,
				energyDelta: -33
			}
		}, {
			templateId: "V0060_POKEMON_POLIWAG",
			pokemonSettings: {
				pokemonId: "POLIWAG",
				modelScale: 1.25,
				type: "POKEMON_TYPE_WATER",
				camera: {
					diskRadiusM: .75,
					cylinderRadiusM: .5,
					cylinderHeightM: .875,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .4,
					baseFleeRate: .15,
					collisionRadiusM: .3125,
					collisionHeightM: .75,
					collisionHeadRadiusM: .3125,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 10,
					jumpTimeS: 1,
					attackTimerS: 29
				},
				stats: {
					baseStamina: 80,
					baseAttack: 101,
					baseDefense: 82
				},
				quickMoves: ["BUBBLE_FAST", "MUD_SHOT_FAST"],
				cinematicMoves: ["BUBBLE_BEAM", "MUD_BOMB", "BODY_SLAM"],
				animationTime: [1.6667, .6667, 2, 1.5, 0, 1.6667, 1.5, 0],
				evolutionIds: ["POLIWHIRL"],
				evolutionPips: 1,
				pokedexHeightM: .6,
				pokedexWeightKg: 12.4,
				heightStdDev: .075,
				weightStdDev: 1.55,
				familyId: "FAMILY_POLIWAG",
				candyToEvolve: 25,
				kmBuddyDistance: 1.5,
				modelHeight: .6
			}
		}, {
			templateId: "V0061_POKEMON_POLIWHIRL",
			pokemonSettings: {
				pokemonId: "POLIWHIRL",
				modelScale: .98,
				type: "POKEMON_TYPE_WATER",
				camera: {
					diskRadiusM: 1.1025,
					cylinderRadiusM: .735,
					cylinderHeightM: 1.078,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .2,
					baseFleeRate: .07,
					collisionRadiusM: .49,
					collisionHeightM: .882,
					collisionHeadRadiusM: .3675,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 8,
					jumpTimeS: .8,
					attackTimerS: 23
				},
				stats: {
					baseStamina: 130,
					baseAttack: 130,
					baseDefense: 130
				},
				quickMoves: ["BUBBLE_FAST", "MUD_SHOT_FAST"],
				cinematicMoves: ["SCALD", "MUD_BOMB", "BUBBLE_BEAM"],
				animationTime: [1.3333, .6667, 2.1667, 1.5, 0, 2, 1.3333, 0],
				evolutionIds: ["POLIWRATH"],
				evolutionPips: 1,
				pokedexHeightM: 1,
				pokedexWeightKg: 20,
				parentPokemonId: "POLIWAG",
				heightStdDev: .125,
				weightStdDev: 2.5,
				familyId: "FAMILY_POLIWAG",
				candyToEvolve: 100,
				kmBuddyDistance: 1.5,
				modelHeight: 1.05
			}
		}, {
			templateId: "V0062_MOVE_ANCIENT_POWER",
			moveSettings: {
				movementId: "ANCIENT_POWER",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_ROCK",
				power: 35,
				accuracyChance: 1,
				criticalChance: .05,
				staminaLossScalar: .06,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "ancient_power",
				durationMs: 3600,
				damageWindowStartMs: 2900,
				damageWindowEndMs: 3250,
				energyDelta: -25
			}
		}, {
			templateId: "V0062_POKEMON_POLIWRATH",
			pokemonSettings: {
				pokemonId: "POLIWRATH",
				modelScale: .86,
				type: "POKEMON_TYPE_WATER",
				type2: "POKEMON_TYPE_FIGHTING",
				camera: {
					diskRadiusM: 1.2255,
					cylinderRadiusM: .817,
					cylinderHeightM: 1.204,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .1,
					baseFleeRate: .05,
					collisionRadiusM: .645,
					collisionHeightM: 1.118,
					collisionHeadRadiusM: .344,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 11,
					jumpTimeS: 1.05,
					attackTimerS: 4
				},
				stats: {
					baseStamina: 180,
					baseAttack: 182,
					baseDefense: 187
				},
				quickMoves: ["BUBBLE_FAST", "MUD_SHOT_FAST"],
				cinematicMoves: ["HYDRO_PUMP", "SUBMISSION", "ICE_PUNCH"],
				animationTime: [2, .6667, 1.6667, 1.6667, 0, 2, 1.2333, 0],
				evolutionPips: 1,
				pokedexHeightM: 1.3,
				pokedexWeightKg: 54,
				parentPokemonId: "POLIWHIRL",
				heightStdDev: .1625,
				weightStdDev: 6.75,
				familyId: "FAMILY_POLIWAG",
				kmBuddyDistance: 1.5,
				modelHeight: 1.42
			}
		}, {
			templateId: "V0063_MOVE_ROCK_TOMB",
			moveSettings: {
				movementId: "ROCK_TOMB",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_ROCK",
				power: 30,
				accuracyChance: 1,
				criticalChance: .25,
				staminaLossScalar: .06,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "rockTomb",
				durationMs: 3400,
				damageWindowStartMs: 2300,
				damageWindowEndMs: 3200,
				energyDelta: -25
			}
		}, {
			templateId: "V0063_POKEMON_ABRA",
			pokemonSettings: {
				pokemonId: "ABRA",
				modelScale: 1.12,
				type: "POKEMON_TYPE_PSYCHIC",
				camera: {
					diskRadiusM: .672,
					cylinderRadiusM: .448,
					cylinderHeightM: .784,
					cylinderGroundM: .168,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .4,
					baseFleeRate: .99,
					collisionRadiusM: .28,
					collisionHeightM: .56,
					collisionHeadRadiusM: .28,
					movementType: "MOVEMENT_PSYCHIC",
					movementTimerS: 29,
					jumpTimeS: 1,
					attackTimerS: 10
				},
				stats: {
					baseStamina: 50,
					baseAttack: 195,
					baseDefense: 103
				},
				quickMoves: ["ZEN_HEADBUTT_FAST"],
				cinematicMoves: ["PSYSHOCK", "SIGNAL_BEAM", "SHADOW_BALL"],
				animationTime: [0, .6667, 1.6667, .6667, 0, 2.1667, 2.6667, 0],
				evolutionIds: ["KADABRA"],
				evolutionPips: 1,
				pokedexHeightM: .9,
				pokedexWeightKg: 19.5,
				heightStdDev: .1125,
				weightStdDev: 2.4375,
				familyId: "FAMILY_ABRA",
				candyToEvolve: 25,
				kmBuddyDistance: 1.5,
				modelHeight: .77
			}
		}, {
			templateId: "V0064_MOVE_ROCK_SLIDE",
			moveSettings: {
				movementId: "ROCK_SLIDE",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_ROCK",
				power: 50,
				accuracyChance: 1,
				criticalChance: .05,
				staminaLossScalar: .075,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "rockSlide",
				durationMs: 3200,
				damageWindowStartMs: 1500,
				damageWindowEndMs: 2900,
				energyDelta: -33
			}
		}, {
			templateId: "V0064_POKEMON_KADABRA",
			pokemonSettings: {
				pokemonId: "KADABRA",
				modelScale: .89,
				type: "POKEMON_TYPE_PSYCHIC",
				camera: {
					diskRadiusM: 1.0013,
					cylinderRadiusM: .6675,
					cylinderHeightM: 1.157,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .2,
					baseFleeRate: .07,
					collisionRadiusM: .445,
					collisionHeightM: .89,
					collisionHeadRadiusM: .33375,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 6,
					jumpTimeS: 1.25,
					attackTimerS: 17
				},
				stats: {
					baseStamina: 80,
					baseAttack: 232,
					baseDefense: 138
				},
				quickMoves: ["PSYCHO_CUT_FAST", "CONFUSION_FAST"],
				cinematicMoves: ["PSYBEAM", "DAZZLING_GLEAM", "SHADOW_BALL"],
				animationTime: [1.7333, .6667, 1.6667, 1.8667, 0, 2.1, 1.7333, 0],
				evolutionIds: ["ALAKAZAM"],
				evolutionPips: 1,
				pokedexHeightM: 1.3,
				pokedexWeightKg: 56.5,
				parentPokemonId: "ABRA",
				heightStdDev: .1625,
				weightStdDev: 7.0625,
				familyId: "FAMILY_ABRA",
				candyToEvolve: 100,
				kmBuddyDistance: 1.5,
				modelHeight: 1.3
			}
		}, {
			templateId: "V0065_MOVE_POWER_GEM",
			moveSettings: {
				movementId: "POWER_GEM",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_ROCK",
				power: 40,
				accuracyChance: 1,
				criticalChance: .05,
				staminaLossScalar: .08,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "powerGem",
				durationMs: 2900,
				damageWindowStartMs: 2e3,
				damageWindowEndMs: 2800,
				energyDelta: -33
			}
		}, {
			templateId: "V0065_POKEMON_ALAKAZAM",
			pokemonSettings: {
				pokemonId: "ALAKAZAM",
				modelScale: .85,
				type: "POKEMON_TYPE_PSYCHIC",
				camera: {
					diskRadiusM: .765,
					cylinderRadiusM: .51,
					cylinderHeightM: 1.275,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .1,
					baseFleeRate: .05,
					collisionRadiusM: .425,
					collisionHeightM: .93500012,
					collisionHeadRadiusM: .255,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 4,
					jumpTimeS: 1,
					attackTimerS: 11
				},
				stats: {
					baseStamina: 110,
					baseAttack: 271,
					baseDefense: 194
				},
				quickMoves: ["PSYCHO_CUT_FAST", "CONFUSION_FAST"],
				cinematicMoves: ["PSYCHIC", "DAZZLING_GLEAM", "SHADOW_BALL"],
				animationTime: [2, .6667, 1.6667, 1.5, 0, 2.3333, 2.5, 2],
				evolutionPips: 1,
				pokedexHeightM: 1.5,
				pokedexWeightKg: 48,
				parentPokemonId: "KADABRA",
				heightStdDev: .1875,
				weightStdDev: 6,
				familyId: "FAMILY_ABRA",
				kmBuddyDistance: 1.5,
				modelHeight: 1.45
			}
		}, {
			templateId: "V0066_MOVE_SHADOW_SNEAK",
			moveSettings: {
				movementId: "SHADOW_SNEAK",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_GHOST",
				power: 25,
				accuracyChance: 1,
				criticalChance: .05,
				staminaLossScalar: .04,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "shadowSneak",
				durationMs: 3100,
				damageWindowStartMs: 2300,
				damageWindowEndMs: 2900,
				energyDelta: -20
			}
		}, {
			templateId: "V0066_POKEMON_MACHOP",
			pokemonSettings: {
				pokemonId: "MACHOP",
				modelScale: 1.1,
				type: "POKEMON_TYPE_FIGHTING",
				camera: {
					diskRadiusM: .6188,
					cylinderRadiusM: .4125,
					cylinderHeightM: .88000011,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .4,
					baseFleeRate: .1,
					collisionRadiusM: .22,
					collisionHeightM: .55,
					collisionHeadRadiusM: .20625,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 23,
					jumpTimeS: 1,
					attackTimerS: 8
				},
				stats: {
					baseStamina: 140,
					baseAttack: 137,
					baseDefense: 88
				},
				quickMoves: ["LOW_KICK_FAST", "KARATE_CHOP_FAST"],
				cinematicMoves: ["LOW_SWEEP", "BRICK_BREAK", "CROSS_CHOP"],
				animationTime: [2.2667, .6667, 2, 1.7333, 0, 2.1667, 1, 0],
				evolutionIds: ["MACHOKE"],
				evolutionPips: 1,
				pokedexHeightM: .8,
				pokedexWeightKg: 19.5,
				heightStdDev: .1,
				weightStdDev: 2.4375,
				familyId: "FAMILY_MACHOP",
				candyToEvolve: 25,
				kmBuddyDistance: 1.5,
				modelHeight: .8
			}
		}, {
			templateId: "V0067_MOVE_SHADOW_PUNCH",
			moveSettings: {
				movementId: "SHADOW_PUNCH",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_GHOST",
				power: 25,
				accuracyChance: 1,
				criticalChance: .05,
				staminaLossScalar: .06,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "shadow_punch",
				durationMs: 2100,
				damageWindowStartMs: 1400,
				damageWindowEndMs: 1700,
				energyDelta: -25
			}
		}, {
			templateId: "V0067_POKEMON_MACHOKE",
			pokemonSettings: {
				pokemonId: "MACHOKE",
				modelScale: .91,
				type: "POKEMON_TYPE_FIGHTING",
				camera: {
					diskRadiusM: .819,
					cylinderRadiusM: .546,
					cylinderHeightM: 1.274,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .2,
					baseFleeRate: .07,
					collisionRadiusM: .54600012,
					collisionHeightM: 1.092,
					collisionHeadRadiusM: .1365,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 14,
					jumpTimeS: 1,
					attackTimerS: 5
				},
				stats: {
					baseStamina: 160,
					baseAttack: 177,
					baseDefense: 130
				},
				quickMoves: ["LOW_KICK_FAST", "KARATE_CHOP_FAST"],
				cinematicMoves: ["SUBMISSION", "BRICK_BREAK", "CROSS_CHOP"],
				animationTime: [1.5, .6667, 1.6667, 1.6667, 0, 2.1667, 1.0667, 0],
				evolutionIds: ["MACHAMP"],
				evolutionPips: 1,
				pokedexHeightM: 1.5,
				pokedexWeightKg: 70.5,
				parentPokemonId: "MACHOP",
				heightStdDev: .1875,
				weightStdDev: 8.8125,
				familyId: "FAMILY_MACHOP",
				candyToEvolve: 100,
				kmBuddyDistance: 1.5,
				modelHeight: 1.4
			}
		}, {
			templateId: "V0068_POKEMON_MACHAMP",
			pokemonSettings: {
				pokemonId: "MACHAMP",
				modelScale: .89,
				type: "POKEMON_TYPE_FIGHTING",
				camera: {
					diskRadiusM: .8678,
					cylinderRadiusM: .5785,
					cylinderHeightM: 1.424,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .1,
					baseFleeRate: .05,
					collisionRadiusM: .5785,
					collisionHeightM: 1.246,
					collisionHeadRadiusM: .1335,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 8,
					jumpTimeS: 1,
					attackTimerS: 3
				},
				stats: {
					baseStamina: 180,
					baseAttack: 234,
					baseDefense: 162
				},
				quickMoves: ["BULLET_PUNCH_FAST", "KARATE_CHOP_FAST"],
				cinematicMoves: ["STONE_EDGE", "SUBMISSION", "CROSS_CHOP"],
				animationTime: [1.6667, .6667, 1.6667, 1.6667, 0, 1.6667, 1.3333, 1.333333],
				evolutionPips: 1,
				pokedexHeightM: 1.6,
				pokedexWeightKg: 130,
				parentPokemonId: "MACHOKE",
				heightStdDev: .2,
				weightStdDev: 16.25,
				familyId: "FAMILY_MACHOP",
				kmBuddyDistance: 1.5,
				modelHeight: 1.5
			}
		}, {
			templateId: "V0069_MOVE_OMINOUS_WIND",
			moveSettings: {
				movementId: "OMINOUS_WIND",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_GHOST",
				power: 30,
				accuracyChance: 1,
				criticalChance: .05,
				staminaLossScalar: .06,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "ominousWind",
				durationMs: 3100,
				damageWindowStartMs: 1850,
				damageWindowEndMs: 2100,
				energyDelta: -25
			}
		}, {
			templateId: "V0069_POKEMON_BELLSPROUT",
			pokemonSettings: {
				pokemonId: "BELLSPROUT",
				modelScale: 1.29,
				type: "POKEMON_TYPE_GRASS",
				type2: "POKEMON_TYPE_POISON",
				camera: {
					diskRadiusM: .6773,
					cylinderRadiusM: .4515,
					cylinderHeightM: .90299988,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .4,
					baseFleeRate: .15,
					collisionRadiusM: .1935,
					collisionHeightM: .4515,
					collisionHeadRadiusM: .22575,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 10,
					jumpTimeS: 1.2,
					attackTimerS: 29
				},
				stats: {
					baseStamina: 100,
					baseAttack: 139,
					baseDefense: 64
				},
				quickMoves: ["VINE_WHIP_FAST", "ACID_FAST"],
				cinematicMoves: ["POWER_WHIP", "SLUDGE_BOMB", "WRAP"],
				animationTime: [1.7, .6667, 2.5, 1.8333, 0, 2, 2, 0],
				evolutionIds: ["WEEPINBELL"],
				evolutionPips: 1,
				pokedexHeightM: .7,
				pokedexWeightKg: 4,
				heightStdDev: .0875,
				weightStdDev: .5,
				familyId: "FAMILY_BELLSPROUT",
				candyToEvolve: 25,
				kmBuddyDistance: 1.5,
				modelHeight: .55
			}
		}, {
			templateId: "V0070_MOVE_SHADOW_BALL",
			moveSettings: {
				movementId: "SHADOW_BALL",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_GHOST",
				power: 45,
				accuracyChance: 1,
				criticalChance: .05,
				staminaLossScalar: .08,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "shadowBall",
				durationMs: 3080,
				damageWindowStartMs: 2300,
				damageWindowEndMs: 2600,
				energyDelta: -33
			}
		}, {
			templateId: "V0070_POKEMON_WEEPINBELL",
			pokemonSettings: {
				pokemonId: "WEEPINBELL",
				modelScale: 1,
				type: "POKEMON_TYPE_GRASS",
				type2: "POKEMON_TYPE_POISON",
				camera: {
					diskRadiusM: .975,
					cylinderRadiusM: .65,
					cylinderHeightM: 1,
					cylinderGroundM: .375,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .2,
					baseFleeRate: .07,
					collisionRadiusM: .25,
					collisionHeightM: .95,
					collisionHeadRadiusM: .25,
					movementType: "MOVEMENT_HOVERING",
					movementTimerS: 8,
					jumpTimeS: 1,
					attackTimerS: 23
				},
				stats: {
					baseStamina: 130,
					baseAttack: 172,
					baseDefense: 95
				},
				quickMoves: ["RAZOR_LEAF_FAST", "ACID_FAST"],
				cinematicMoves: ["POWER_WHIP", "SLUDGE_BOMB", "SEED_BOMB"],
				animationTime: [1.8, .6667, 1.5333, .6667, 0, 2.2667, 2, 0],
				evolutionIds: ["VICTREEBEL"],
				evolutionPips: 1,
				pokedexHeightM: 1,
				pokedexWeightKg: 6.4,
				parentPokemonId: "BELLSPROUT",
				heightStdDev: .125,
				weightStdDev: .8,
				familyId: "FAMILY_BELLSPROUT",
				candyToEvolve: 100,
				kmBuddyDistance: 1.5,
				modelHeight: 1
			}
		}, {
			templateId: "V0071_POKEMON_VICTREEBEL",
			pokemonSettings: {
				pokemonId: "VICTREEBEL",
				modelScale: .84,
				type: "POKEMON_TYPE_GRASS",
				type2: "POKEMON_TYPE_POISON",
				camera: {
					diskRadiusM: .819,
					cylinderRadiusM: .546,
					cylinderHeightM: 1.428,
					cylinderGroundM: .42,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .1,
					baseFleeRate: .05,
					collisionRadiusM: .336,
					collisionHeightM: 1.428,
					collisionHeadRadiusM: .273,
					movementType: "MOVEMENT_HOVERING",
					movementTimerS: 14,
					jumpTimeS: 1,
					attackTimerS: 5
				},
				stats: {
					baseStamina: 160,
					baseAttack: 207,
					baseDefense: 138
				},
				quickMoves: ["RAZOR_LEAF_FAST", "ACID_FAST"],
				cinematicMoves: ["LEAF_BLADE", "SLUDGE_BOMB", "SOLAR_BEAM"],
				animationTime: [2, .6667, 1.6667, .6667, 0, 2.1667, 2, 0],
				evolutionPips: 1,
				pokedexHeightM: 1.7,
				pokedexWeightKg: 15.5,
				parentPokemonId: "WEEPINBELL",
				heightStdDev: .2125,
				weightStdDev: 1.9375,
				familyId: "FAMILY_BELLSPROUT",
				kmBuddyDistance: 1.5,
				modelHeight: 1.48
			}
		}, {
			templateId: "V0072_MOVE_MAGNET_BOMB",
			moveSettings: {
				movementId: "MAGNET_BOMB",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_STEEL",
				power: 30,
				accuracyChance: 1,
				criticalChance: .05,
				staminaLossScalar: .06,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "magnetBomb",
				durationMs: 2800,
				damageWindowStartMs: 1750,
				damageWindowEndMs: 2300,
				energyDelta: -25
			}
		}, {
			templateId: "V0072_POKEMON_TENTACOOL",
			pokemonSettings: {
				pokemonId: "TENTACOOL",
				modelScale: 1.05,
				type: "POKEMON_TYPE_WATER",
				type2: "POKEMON_TYPE_POISON",
				camera: {
					diskRadiusM: .4725,
					cylinderRadiusM: .315,
					cylinderHeightM: .91874993,
					cylinderGroundM: .2625,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .4,
					baseFleeRate: .15,
					collisionRadiusM: .21,
					collisionHeightM: .91874993,
					collisionHeadRadiusM: .1575,
					movementType: "MOVEMENT_HOVERING",
					movementTimerS: 23,
					jumpTimeS: 1,
					attackTimerS: 8
				},
				stats: {
					baseStamina: 80,
					baseAttack: 97,
					baseDefense: 182
				},
				quickMoves: ["BUBBLE_FAST", "POISON_STING_FAST"],
				cinematicMoves: ["BUBBLE_BEAM", "WATER_PULSE", "WRAP"],
				animationTime: [2.6667, .6667, 1.6667, .6667, 0, 2.3, 2, 0],
				evolutionIds: ["TENTACRUEL"],
				evolutionPips: 1,
				pokedexHeightM: .9,
				pokedexWeightKg: 45.5,
				heightStdDev: .1125,
				weightStdDev: 5.6875,
				familyId: "FAMILY_TENTACOOL",
				candyToEvolve: 50,
				kmBuddyDistance: 1.5,
				modelHeight: .9
			}
		}, {
			templateId: "V0073_POKEMON_TENTACRUEL",
			pokemonSettings: {
				pokemonId: "TENTACRUEL",
				modelScale: .82,
				type: "POKEMON_TYPE_WATER",
				type2: "POKEMON_TYPE_POISON",
				camera: {
					diskRadiusM: .738,
					cylinderRadiusM: .492,
					cylinderHeightM: 1.312,
					cylinderGroundM: .205,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .16,
					baseFleeRate: .07,
					collisionRadiusM: .492,
					collisionHeightM: 1.23,
					collisionHeadRadiusM: .246,
					movementType: "MOVEMENT_HOVERING",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 4
				},
				stats: {
					baseStamina: 160,
					baseAttack: 166,
					baseDefense: 237
				},
				quickMoves: ["ACID_FAST", "POISON_JAB_FAST"],
				cinematicMoves: ["HYDRO_PUMP", "SLUDGE_WAVE", "BLIZZARD"],
				animationTime: [2.1667, .6667, 1.3333, .6667, 0, 2, 2.6667, 2],
				evolutionPips: 1,
				pokedexHeightM: 1.6,
				pokedexWeightKg: 55,
				parentPokemonId: "TENTACOOL",
				heightStdDev: .2,
				weightStdDev: 6.875,
				familyId: "FAMILY_TENTACOOL",
				kmBuddyDistance: 1.5,
				modelHeight: 1.6
			}
		}, {
			templateId: "V0074_MOVE_IRON_HEAD",
			moveSettings: {
				movementId: "IRON_HEAD",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_STEEL",
				power: 30,
				accuracyChance: 1,
				criticalChance: .05,
				staminaLossScalar: .08,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "ironHead",
				durationMs: 2e3,
				damageWindowStartMs: 1550,
				damageWindowEndMs: 1800,
				energyDelta: -33
			}
		}, {
			templateId: "V0074_POKEMON_GEODUDE",
			pokemonSettings: {
				pokemonId: "GEODUDE",
				modelScale: .87,
				type: "POKEMON_TYPE_ROCK",
				type2: "POKEMON_TYPE_GROUND",
				camera: {
					diskRadiusM: .5873,
					cylinderRadiusM: .3915,
					cylinderHeightM: .348,
					cylinderGroundM: .261,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .4,
					baseFleeRate: .1,
					collisionRadiusM: .3915,
					collisionHeightM: .1305,
					collisionHeadRadiusM: .19575,
					movementType: "MOVEMENT_HOVERING",
					movementTimerS: 8,
					jumpTimeS: 1,
					attackTimerS: 23
				},
				stats: {
					baseStamina: 80,
					baseAttack: 132,
					baseDefense: 163
				},
				quickMoves: ["ROCK_THROW_FAST", "TACKLE_FAST"],
				cinematicMoves: ["ROCK_SLIDE", "ROCK_TOMB", "DIG"],
				animationTime: [2.3333, .6667, 1.6667, .6667, 0, 2, 1.6667, 0],
				evolutionIds: ["GRAVELER"],
				evolutionPips: 1,
				pokedexHeightM: .4,
				pokedexWeightKg: 20,
				heightStdDev: .05,
				weightStdDev: 2.5,
				familyId: "FAMILY_GEODUDE",
				candyToEvolve: 25,
				kmBuddyDistance: .5,
				modelHeight: 1.38
			}
		}, {
			templateId: "V0075_MOVE_PARABOLIC_CHARGE",
			moveSettings: {
				movementId: "PARABOLIC_CHARGE",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_ELECTRIC",
				power: 25,
				accuracyChance: 1,
				criticalChance: .05,
				healScalar: .5,
				staminaLossScalar: .05,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "parabolicCharge",
				durationMs: 2100,
				damageWindowStartMs: 1300,
				damageWindowEndMs: 1700,
				energyDelta: -20
			}
		}, {
			templateId: "V0075_POKEMON_GRAVELER",
			pokemonSettings: {
				pokemonId: "GRAVELER",
				modelScale: .82,
				type: "POKEMON_TYPE_ROCK",
				type2: "POKEMON_TYPE_GROUND",
				camera: {
					diskRadiusM: 1.0455,
					cylinderRadiusM: .697,
					cylinderHeightM: .82,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .2,
					baseFleeRate: .07,
					collisionRadiusM: .492,
					collisionHeightM: .697,
					collisionHeadRadiusM: .369,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 14,
					jumpTimeS: 1.2,
					attackTimerS: 5
				},
				stats: {
					baseStamina: 110,
					baseAttack: 164,
					baseDefense: 196
				},
				quickMoves: ["ROCK_THROW_FAST", "MUD_SLAP_FAST"],
				cinematicMoves: ["DIG", "STONE_EDGE", "ROCK_SLIDE"],
				animationTime: [2.3333, .6667, 1.8667, 1.8333, 0, 2, 1.6667, 0],
				evolutionIds: ["GOLEM"],
				evolutionPips: 1,
				pokedexHeightM: 1,
				pokedexWeightKg: 105,
				parentPokemonId: "GEODUDE",
				heightStdDev: .125,
				weightStdDev: 13.125,
				familyId: "FAMILY_GEODUDE",
				candyToEvolve: 100,
				kmBuddyDistance: .5,
				modelHeight: 1.6
			}
		}, {
			templateId: "V0076_POKEMON_GOLEM",
			pokemonSettings: {
				pokemonId: "GOLEM",
				modelScale: .84,
				type: "POKEMON_TYPE_ROCK",
				type2: "POKEMON_TYPE_GROUND",
				camera: {
					diskRadiusM: .945,
					cylinderRadiusM: .63,
					cylinderHeightM: 1.092,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .1,
					baseFleeRate: .05,
					collisionRadiusM: .63,
					collisionHeightM: 1.092,
					collisionHeadRadiusM: .315,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 8,
					jumpTimeS: 1.2,
					attackTimerS: 3
				},
				stats: {
					baseStamina: 160,
					baseAttack: 211,
					baseDefense: 229
				},
				quickMoves: ["ROCK_THROW_FAST", "MUD_SLAP_FAST"],
				cinematicMoves: ["STONE_EDGE", "ANCIENT_POWER", "EARTHQUAKE"],
				animationTime: [2.6667, .6667, 2, 2, 0, 2.1667, 2, 0],
				evolutionPips: 1,
				pokedexHeightM: 1.4,
				pokedexWeightKg: 300,
				parentPokemonId: "GRAVELER",
				heightStdDev: .175,
				weightStdDev: 37.5,
				familyId: "FAMILY_GEODUDE",
				kmBuddyDistance: .5,
				modelHeight: 1.5
			}
		}, {
			templateId: "V0077_MOVE_THUNDER_PUNCH",
			moveSettings: {
				movementId: "THUNDER_PUNCH",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_ELECTRIC",
				power: 40,
				accuracyChance: 1,
				criticalChance: .05,
				staminaLossScalar: .075,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "thunder_punch",
				durationMs: 2400,
				damageWindowStartMs: 1950,
				damageWindowEndMs: 2200,
				energyDelta: -33
			}
		}, {
			templateId: "V0077_POKEMON_PONYTA",
			pokemonSettings: {
				pokemonId: "PONYTA",
				modelScale: 1.01,
				type: "POKEMON_TYPE_FIRE",
				camera: {
					diskRadiusM: .5681,
					cylinderRadiusM: .3788,
					cylinderHeightM: 1.2625,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .32,
					baseFleeRate: .1,
					collisionRadiusM: .2525,
					collisionHeightM: .63125,
					collisionHeadRadiusM: .202,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 8,
					jumpTimeS: .95,
					attackTimerS: 23
				},
				stats: {
					baseStamina: 100,
					baseAttack: 170,
					baseDefense: 132
				},
				quickMoves: ["TACKLE_FAST", "EMBER_FAST"],
				cinematicMoves: ["FLAME_CHARGE", "FLAME_WHEEL", "FIRE_BLAST"],
				animationTime: [2.3333, .6667, 1.6667, 1.5, 5.333333, 2.3333, 1.6667, 0],
				evolutionIds: ["RAPIDASH"],
				evolutionPips: 1,
				pokedexHeightM: 1,
				pokedexWeightKg: 30,
				heightStdDev: .125,
				weightStdDev: 3.75,
				familyId: "FAMILY_PONYTA",
				candyToEvolve: 50,
				kmBuddyDistance: 1.5,
				modelHeight: .97
			}
		}, {
			templateId: "V0078_MOVE_THUNDER",
			moveSettings: {
				movementId: "THUNDER",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_ELECTRIC",
				power: 100,
				accuracyChance: 1,
				criticalChance: .05,
				staminaLossScalar: .11,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "thunder",
				durationMs: 4300,
				damageWindowStartMs: 2550,
				damageWindowEndMs: 4100,
				energyDelta: -100
			}
		}, {
			templateId: "V0078_POKEMON_RAPIDASH",
			pokemonSettings: {
				pokemonId: "RAPIDASH",
				modelScale: .81,
				type: "POKEMON_TYPE_FIRE",
				camera: {
					diskRadiusM: .6075,
					cylinderRadiusM: .405,
					cylinderHeightM: 1.701,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .06,
					collisionRadiusM: .324,
					collisionHeightM: .891,
					collisionHeadRadiusM: .243,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 6,
					jumpTimeS: 1,
					attackTimerS: 17
				},
				stats: {
					baseStamina: 130,
					baseAttack: 207,
					baseDefense: 167
				},
				quickMoves: ["LOW_KICK_FAST", "EMBER_FAST"],
				cinematicMoves: ["FIRE_BLAST", "DRILL_RUN", "HEAT_WAVE"],
				animationTime: [2.0667, .8333, 2.3333, 1.8667, 0, 2.1667, 2.6667, 0],
				evolutionPips: 1,
				pokedexHeightM: 1.7,
				pokedexWeightKg: 95,
				parentPokemonId: "PONYTA",
				heightStdDev: .2125,
				weightStdDev: 11.875,
				familyId: "FAMILY_PONYTA",
				kmBuddyDistance: 1.5,
				modelHeight: 1.65
			}
		}, {
			templateId: "V0079_MOVE_THUNDERBOLT",
			moveSettings: {
				movementId: "THUNDERBOLT",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_ELECTRIC",
				power: 55,
				accuracyChance: 1,
				criticalChance: .05,
				staminaLossScalar: .09,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "thunderbolt",
				durationMs: 2700,
				damageWindowStartMs: 1900,
				damageWindowEndMs: 2700,
				energyDelta: -50
			}
		}, {
			templateId: "V0079_POKEMON_SLOWPOKE",
			pokemonSettings: {
				pokemonId: "SLOWPOKE",
				modelScale: .79,
				type: "POKEMON_TYPE_WATER",
				type2: "POKEMON_TYPE_PSYCHIC",
				camera: {
					diskRadiusM: 1.185,
					cylinderRadiusM: .5925,
					cylinderHeightM: .94800007,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .4,
					baseFleeRate: .1,
					collisionRadiusM: .316,
					collisionHeightM: .5135,
					collisionHeadRadiusM: .29625,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 8,
					jumpTimeS: 1,
					attackTimerS: 23
				},
				stats: {
					baseStamina: 180,
					baseAttack: 109,
					baseDefense: 109
				},
				quickMoves: ["WATER_GUN_FAST", "CONFUSION_FAST"],
				cinematicMoves: ["WATER_PULSE", "PSYSHOCK", "PSYCHIC"],
				animationTime: [3, .6667, 2, 1.6667, 0, 2, 1.6667, 0],
				evolutionIds: ["SLOWBRO"],
				evolutionPips: 1,
				pokedexHeightM: 1.2,
				pokedexWeightKg: 36,
				heightStdDev: .15,
				weightStdDev: 4.5,
				familyId: "FAMILY_SLOWPOKE",
				candyToEvolve: 50,
				kmBuddyDistance: 1.5,
				modelHeight: 1.52
			}
		}, {
			templateId: "V0080_MOVE_TWISTER",
			moveSettings: {
				movementId: "TWISTER",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_DRAGON",
				power: 25,
				accuracyChance: 1,
				criticalChance: .05,
				staminaLossScalar: .04,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "twister",
				durationMs: 2700,
				damageWindowStartMs: 850,
				damageWindowEndMs: 2600,
				energyDelta: -20
			}
		}, {
			templateId: "V0080_POKEMON_SLOWBRO",
			pokemonSettings: {
				pokemonId: "SLOWBRO",
				modelScale: .85,
				type: "POKEMON_TYPE_WATER",
				type2: "POKEMON_TYPE_PSYCHIC",
				camera: {
					diskRadiusM: .7013,
					cylinderRadiusM: .4675,
					cylinderHeightM: 1.275,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .16,
					baseFleeRate: .06,
					collisionRadiusM: .425,
					collisionHeightM: .85,
					collisionHeadRadiusM: .255,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 3,
					jumpTimeS: 1,
					attackTimerS: 8
				},
				stats: {
					baseStamina: 190,
					baseAttack: 177,
					baseDefense: 194
				},
				quickMoves: ["WATER_GUN_FAST", "CONFUSION_FAST"],
				cinematicMoves: ["WATER_PULSE", "PSYCHIC", "ICE_BEAM"],
				animationTime: [2.3333, .6667, 1.6667, 2.1, 0, 1.8333, 2, 3],
				evolutionPips: 1,
				pokedexHeightM: 1.6,
				pokedexWeightKg: 78.5,
				parentPokemonId: "SLOWPOKE",
				heightStdDev: .2,
				weightStdDev: 9.8125,
				familyId: "FAMILY_SLOWPOKE",
				kmBuddyDistance: 1.5,
				modelHeight: 1.46
			}
		}, {
			templateId: "V0081_POKEMON_MAGNEMITE",
			pokemonSettings: {
				pokemonId: "MAGNEMITE",
				modelScale: 1.52,
				type: "POKEMON_TYPE_ELECTRIC",
				type2: "POKEMON_TYPE_STEEL",
				camera: {
					diskRadiusM: .684,
					cylinderRadiusM: .456,
					cylinderHeightM: .456,
					cylinderGroundM: .912,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .4,
					baseFleeRate: .1,
					collisionRadiusM: .456,
					collisionHeightM: .456,
					collisionHeadRadiusM: .228,
					movementType: "MOVEMENT_ELECTRIC",
					movementTimerS: 8,
					jumpTimeS: 1,
					attackTimerS: 23
				},
				stats: {
					baseStamina: 50,
					baseAttack: 165,
					baseDefense: 128
				},
				quickMoves: ["SPARK_FAST", "THUNDER_SHOCK_FAST"],
				cinematicMoves: ["DISCHARGE", "MAGNET_BOMB", "THUNDERBOLT"],
				animationTime: [1.3333, .6667, 1.2333, .6667, 0, 2, 1.1667, 1.166667],
				evolutionIds: ["MAGNETON"],
				evolutionPips: 1,
				pokedexHeightM: .3,
				pokedexWeightKg: 6,
				heightStdDev: .0375,
				weightStdDev: .75,
				familyId: "FAMILY_MAGNEMITE",
				candyToEvolve: 50,
				kmBuddyDistance: 1.5,
				modelHeight: .38
			}
		}, {
			templateId: "V0082_MOVE_DRAGON_PULSE",
			moveSettings: {
				movementId: "DRAGON_PULSE",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_DRAGON",
				power: 65,
				accuracyChance: 1,
				criticalChance: .05,
				staminaLossScalar: .085,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "dragon_pulse",
				durationMs: 3600,
				damageWindowStartMs: 2100,
				damageWindowEndMs: 3300,
				energyDelta: -50
			}
		}, {
			templateId: "V0082_POKEMON_MAGNETON",
			pokemonSettings: {
				pokemonId: "MAGNETON",
				modelScale: 1.1,
				type: "POKEMON_TYPE_ELECTRIC",
				type2: "POKEMON_TYPE_STEEL",
				camera: {
					diskRadiusM: .66,
					cylinderRadiusM: .44,
					cylinderHeightM: 1.1,
					cylinderGroundM: .44,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .16,
					baseFleeRate: .06,
					collisionRadiusM: .44,
					collisionHeightM: .825,
					collisionHeadRadiusM: .22,
					movementType: "MOVEMENT_ELECTRIC",
					movementTimerS: 5,
					jumpTimeS: 1,
					attackTimerS: 14
				},
				stats: {
					baseStamina: 100,
					baseAttack: 223,
					baseDefense: 182
				},
				quickMoves: ["SPARK_FAST", "THUNDER_SHOCK_FAST"],
				cinematicMoves: ["DISCHARGE", "MAGNET_BOMB", "FLASH_CANNON"],
				animationTime: [1.5, .6667, 1.3333, .6667, 0, 1.8333, 2, 0],
				evolutionPips: 1,
				pokedexHeightM: 1,
				pokedexWeightKg: 60,
				parentPokemonId: "MAGNEMITE",
				heightStdDev: .125,
				weightStdDev: 7.5,
				familyId: "FAMILY_MAGNEMITE",
				kmBuddyDistance: 1.5,
				modelHeight: .8
			}
		}, {
			templateId: "V0083_MOVE_DRAGON_CLAW",
			moveSettings: {
				movementId: "DRAGON_CLAW",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_DRAGON",
				power: 35,
				accuracyChance: 1,
				criticalChance: .25,
				staminaLossScalar: .08,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "dragonClaw",
				durationMs: 1500,
				damageWindowStartMs: 1200,
				damageWindowEndMs: 1400,
				energyDelta: -50
			}
		}, {
			templateId: "V0083_POKEMON_FARFETCHD",
			pokemonSettings: {
				pokemonId: "FARFETCHD",
				modelScale: 1.13,
				type: "POKEMON_TYPE_NORMAL",
				type2: "POKEMON_TYPE_FLYING",
				camera: {
					diskRadiusM: .678,
					cylinderRadiusM: .452,
					cylinderHeightM: .8475,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .24,
					baseFleeRate: .09,
					collisionRadiusM: .2825,
					collisionHeightM: .42375,
					collisionHeadRadiusM: .2825,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 29,
					jumpTimeS: 1.25,
					attackTimerS: 10
				},
				stats: {
					baseStamina: 104,
					baseAttack: 124,
					baseDefense: 118
				},
				quickMoves: ["CUT_FAST", "FURY_CUTTER_FAST"],
				cinematicMoves: ["AERIAL_ACE", "AIR_CUTTER", "LEAF_BLADE"],
				animationTime: [1.6667, .6667, 1.6667, 1.8333, 0, 1.8333, 1.6, 0],
				evolutionPips: 1,
				pokedexHeightM: .8,
				pokedexWeightKg: 15,
				heightStdDev: .1,
				weightStdDev: 1.875,
				familyId: "FAMILY_FARFETCHD",
				kmBuddyDistance: 1.5,
				modelHeight: .75
			}
		}, {
			templateId: "V0084_MOVE_DISARMING_VOICE",
			moveSettings: {
				movementId: "DISARMING_VOICE",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_FAIRY",
				power: 25,
				accuracyChance: 1,
				criticalChance: .05,
				staminaLossScalar: .04,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "disarming_voice",
				durationMs: 3900,
				damageWindowStartMs: 1800,
				damageWindowEndMs: 3600,
				energyDelta: -20
			}
		}, {
			templateId: "V0084_POKEMON_DODUO",
			pokemonSettings: {
				pokemonId: "DODUO",
				modelScale: .88,
				type: "POKEMON_TYPE_NORMAL",
				type2: "POKEMON_TYPE_FLYING",
				camera: {
					diskRadiusM: .594,
					cylinderRadiusM: .396,
					cylinderHeightM: 1.232,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .4,
					baseFleeRate: .1,
					collisionRadiusM: .352,
					collisionHeightM: 1.232,
					collisionHeadRadiusM: .198,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 10,
					jumpTimeS: 1,
					attackTimerS: 29
				},
				stats: {
					baseStamina: 70,
					baseAttack: 158,
					baseDefense: 88
				},
				quickMoves: ["PECK_FAST", "QUICK_ATTACK_FAST"],
				cinematicMoves: ["DRILL_PECK", "AERIAL_ACE", "SWIFT"],
				animationTime: [2, .6667, 1.6667, 1.5, 0, 2, 1.5333, 0],
				evolutionIds: ["DODRIO"],
				evolutionPips: 1,
				pokedexHeightM: 1.4,
				pokedexWeightKg: 39.2,
				heightStdDev: .175,
				weightStdDev: 4.9,
				familyId: "FAMILY_DODUO",
				candyToEvolve: 50,
				kmBuddyDistance: 1.5,
				modelHeight: 1.35
			}
		}, {
			templateId: "V0085_MOVE_DRAINING_KISS",
			moveSettings: {
				movementId: "DRAINING_KISS",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_FAIRY",
				power: 25,
				accuracyChance: 1,
				criticalChance: .05,
				healScalar: 1,
				staminaLossScalar: .05,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "draining_kiss",
				durationMs: 2800,
				damageWindowStartMs: 1e3,
				damageWindowEndMs: 1100,
				energyDelta: -20
			}
		}, {
			templateId: "V0085_POKEMON_DODRIO",
			pokemonSettings: {
				pokemonId: "DODRIO",
				modelScale: .78,
				type: "POKEMON_TYPE_NORMAL",
				type2: "POKEMON_TYPE_FLYING",
				camera: {
					diskRadiusM: .7722,
					cylinderRadiusM: .5148,
					cylinderHeightM: 1.287,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .16,
					baseFleeRate: .06,
					collisionRadiusM: .39,
					collisionHeightM: 1.287,
					collisionHeadRadiusM: .2574,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 6,
					jumpTimeS: 1.25,
					attackTimerS: 17
				},
				stats: {
					baseStamina: 120,
					baseAttack: 218,
					baseDefense: 145
				},
				quickMoves: ["FEINT_ATTACK_FAST", "STEEL_WING_FAST"],
				cinematicMoves: ["DRILL_PECK", "AERIAL_ACE", "AIR_CUTTER"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 2, 0],
				evolutionPips: 1,
				pokedexHeightM: 1.8,
				pokedexWeightKg: 85.2,
				parentPokemonId: "DODUO",
				heightStdDev: .225,
				weightStdDev: 10.65,
				familyId: "FAMILY_DODUO",
				kmBuddyDistance: 1.5,
				modelHeight: 1.8
			}
		}, {
			templateId: "V0086_MOVE_DAZZLING_GLEAM",
			moveSettings: {
				movementId: "DAZZLING_GLEAM",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_FAIRY",
				power: 55,
				accuracyChance: 1,
				criticalChance: .05,
				staminaLossScalar: .08,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "dazzlingGleam",
				durationMs: 4200,
				damageWindowStartMs: 3300,
				damageWindowEndMs: 4100,
				energyDelta: -33
			}
		}, {
			templateId: "V0086_POKEMON_SEEL",
			pokemonSettings: {
				pokemonId: "SEEL",
				modelScale: 1.1,
				type: "POKEMON_TYPE_WATER",
				camera: {
					diskRadiusM: .4125,
					cylinderRadiusM: .275,
					cylinderHeightM: .55,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .4,
					baseFleeRate: .09,
					collisionRadiusM: .275,
					collisionHeightM: .4125,
					collisionHeadRadiusM: .22,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 10,
					jumpTimeS: .9,
					attackTimerS: 29
				},
				stats: {
					baseStamina: 130,
					baseAttack: 85,
					baseDefense: 128
				},
				quickMoves: ["ICE_SHARD_FAST", "LICK_FAST"],
				cinematicMoves: ["AQUA_JET", "ICY_WIND", "AQUA_TAIL"],
				animationTime: [2.6667, .6667, 1.8333, 1.6667, 0, 2, 2, 0],
				evolutionIds: ["DEWGONG"],
				evolutionPips: 1,
				pokedexHeightM: 1.1,
				pokedexWeightKg: 90,
				heightStdDev: .1375,
				weightStdDev: 11.25,
				familyId: "FAMILY_SEEL",
				candyToEvolve: 50,
				kmBuddyDistance: 1.5,
				modelHeight: .8
			}
		}, {
			templateId: "V0087_MOVE_MOONBLAST",
			moveSettings: {
				movementId: "MOONBLAST",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_FAIRY",
				power: 85,
				accuracyChance: 1,
				criticalChance: .05,
				staminaLossScalar: .095,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "moonblast",
				durationMs: 4100,
				damageWindowStartMs: 3500,
				damageWindowEndMs: 4100,
				energyDelta: -100
			}
		}, {
			templateId: "V0087_POKEMON_DEWGONG",
			pokemonSettings: {
				pokemonId: "DEWGONG",
				modelScale: 1.05,
				type: "POKEMON_TYPE_WATER",
				type2: "POKEMON_TYPE_ICE",
				camera: {
					diskRadiusM: .7875,
					cylinderRadiusM: .525,
					cylinderHeightM: .84,
					cylinderGroundM: .39375,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .16,
					baseFleeRate: .06,
					collisionRadiusM: .315,
					collisionHeightM: .63,
					collisionHeadRadiusM: .13125,
					movementType: "MOVEMENT_HOVERING",
					movementTimerS: 5,
					jumpTimeS: 1,
					attackTimerS: 14
				},
				stats: {
					baseStamina: 180,
					baseAttack: 139,
					baseDefense: 184
				},
				quickMoves: ["FROST_BREATH_FAST", "ICE_SHARD_FAST"],
				cinematicMoves: ["ICY_WIND", "AQUA_JET", "BLIZZARD"],
				animationTime: [2.0667, .8333, 1.6667, .6667, 0, 2.3333, 2, 0],
				evolutionPips: 1,
				pokedexHeightM: 1.7,
				pokedexWeightKg: 120,
				parentPokemonId: "SEEL",
				heightStdDev: .2125,
				weightStdDev: 15,
				familyId: "FAMILY_SEEL",
				kmBuddyDistance: 1.5,
				modelHeight: .89
			}
		}, {
			templateId: "V0088_MOVE_PLAY_ROUGH",
			moveSettings: {
				movementId: "PLAY_ROUGH",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_FAIRY",
				power: 55,
				accuracyChance: 1,
				criticalChance: .05,
				staminaLossScalar: .1,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "playRough",
				durationMs: 2900,
				damageWindowStartMs: 1400,
				damageWindowEndMs: 2700,
				energyDelta: -50
			}
		}, {
			templateId: "V0088_POKEMON_GRIMER",
			pokemonSettings: {
				pokemonId: "GRIMER",
				modelScale: .98,
				type: "POKEMON_TYPE_POISON",
				camera: {
					diskRadiusM: .882,
					cylinderRadiusM: .588,
					cylinderHeightM: .98,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .4,
					baseFleeRate: .1,
					collisionRadiusM: .49,
					collisionHeightM: .83300012,
					collisionHeadRadiusM: .294,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 23,
					jumpTimeS: 1,
					attackTimerS: 8
				},
				stats: {
					baseStamina: 160,
					baseAttack: 135,
					baseDefense: 90
				},
				quickMoves: ["POISON_JAB_FAST", "MUD_SLAP_FAST"],
				cinematicMoves: ["SLUDGE", "MUD_BOMB", "SLUDGE_BOMB"],
				animationTime: [1.6667, .6667, 1.6667, 1.6667, 10, 1.6667, 2.6667, 0],
				evolutionIds: ["MUK"],
				evolutionPips: 1,
				pokedexHeightM: .9,
				pokedexWeightKg: 30,
				heightStdDev: .1125,
				weightStdDev: 3.75,
				familyId: "FAMILY_GRIMER",
				candyToEvolve: 50,
				kmBuddyDistance: 1.5,
				modelHeight: 1.05
			}
		}, {
			templateId: "V0089_MOVE_CROSS_POISON",
			moveSettings: {
				movementId: "CROSS_POISON",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_POISON",
				power: 25,
				accuracyChance: 1,
				criticalChance: .25,
				staminaLossScalar: .07,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "cross_poison",
				durationMs: 1500,
				damageWindowStartMs: 1200,
				damageWindowEndMs: 1500,
				energyDelta: -25
			}
		}, {
			templateId: "V0089_POKEMON_MUK",
			pokemonSettings: {
				pokemonId: "MUK",
				modelScale: .76,
				type: "POKEMON_TYPE_POISON",
				camera: {
					diskRadiusM: 1.14,
					cylinderRadiusM: .86,
					cylinderHeightM: .912,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .16,
					baseFleeRate: .06,
					collisionRadiusM: .76,
					collisionHeightM: .57,
					collisionHeadRadiusM: .38,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 8,
					jumpTimeS: 1.25,
					attackTimerS: 3
				},
				stats: {
					baseStamina: 210,
					baseAttack: 190,
					baseDefense: 184
				},
				quickMoves: ["LICK_FAST", "POISON_JAB_FAST"],
				cinematicMoves: ["DARK_PULSE", "GUNK_SHOT", "SLUDGE_WAVE"],
				animationTime: [2, 1, 1.6667, 2.1667, 10, 2, 2.6667, 0],
				evolutionPips: 1,
				pokedexHeightM: 1.2,
				pokedexWeightKg: 30,
				parentPokemonId: "GRIMER",
				heightStdDev: .15,
				weightStdDev: 3.75,
				familyId: "FAMILY_GRIMER",
				kmBuddyDistance: 1.5,
				modelHeight: 1.88
			}
		}, {
			templateId: "V0090_MOVE_SLUDGE_BOMB",
			moveSettings: {
				movementId: "SLUDGE_BOMB",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_POISON",
				power: 55,
				accuracyChance: 1,
				criticalChance: .05,
				staminaLossScalar: .09,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "sludgeBomb",
				durationMs: 2600,
				damageWindowStartMs: 1950,
				damageWindowEndMs: 2450,
				energyDelta: -50
			}
		}, {
			templateId: "V0090_POKEMON_SHELLDER",
			pokemonSettings: {
				pokemonId: "SHELLDER",
				modelScale: 1.68,
				type: "POKEMON_TYPE_WATER",
				camera: {
					diskRadiusM: .5796,
					cylinderRadiusM: .3864,
					cylinderHeightM: .504,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .4,
					baseFleeRate: .1,
					collisionRadiusM: .336,
					collisionHeightM: .504,
					collisionHeadRadiusM: .294,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 23,
					jumpTimeS: 1.2,
					attackTimerS: 8
				},
				stats: {
					baseStamina: 60,
					baseAttack: 116,
					baseDefense: 168
				},
				quickMoves: ["ICE_SHARD_FAST", "TACKLE_FAST"],
				cinematicMoves: ["BUBBLE_BEAM", "WATER_PULSE", "ICY_WIND"],
				animationTime: [2, .6667, 1.6667, 1.6667, 0, 1.6667, 2.6667, 0],
				evolutionIds: ["CLOYSTER"],
				evolutionPips: 1,
				pokedexHeightM: .3,
				pokedexWeightKg: 4,
				heightStdDev: .0375,
				weightStdDev: .5,
				familyId: "FAMILY_SHELLDER",
				candyToEvolve: 50,
				kmBuddyDistance: 1.5,
				modelHeight: .3
			}
		}, {
			templateId: "V0091_MOVE_SLUDGE_WAVE",
			moveSettings: {
				movementId: "SLUDGE_WAVE",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_POISON",
				power: 70,
				accuracyChance: 1,
				criticalChance: .05,
				staminaLossScalar: .095,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "sludgeWave",
				durationMs: 3400,
				damageWindowStartMs: 2400,
				damageWindowEndMs: 3300,
				energyDelta: -100
			}
		}, {
			templateId: "V0091_POKEMON_CLOYSTER",
			pokemonSettings: {
				pokemonId: "CLOYSTER",
				modelScale: .84,
				type: "POKEMON_TYPE_WATER",
				type2: "POKEMON_TYPE_ICE",
				camera: {
					diskRadiusM: .945,
					cylinderRadiusM: .63,
					cylinderHeightM: 1.05,
					cylinderGroundM: .42,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .16,
					baseFleeRate: .06,
					collisionRadiusM: .42,
					collisionHeightM: 1.05,
					collisionHeadRadiusM: .54599988,
					movementType: "MOVEMENT_HOVERING",
					movementTimerS: 3,
					jumpTimeS: 1,
					attackTimerS: 8
				},
				stats: {
					baseStamina: 100,
					baseAttack: 186,
					baseDefense: 323
				},
				quickMoves: ["FROST_BREATH_FAST", "ICE_SHARD_FAST"],
				cinematicMoves: ["ICY_WIND", "HYDRO_PUMP", "BLIZZARD"],
				animationTime: [2.4333, .6667, 1.7333, .6667, 0, 2.3333, 1.9667, 3.8],
				evolutionPips: 1,
				pokedexHeightM: 1.5,
				pokedexWeightKg: 132.5,
				parentPokemonId: "SHELLDER",
				heightStdDev: .1875,
				weightStdDev: 16.5625,
				familyId: "FAMILY_SHELLDER",
				kmBuddyDistance: 1.5,
				modelHeight: 1.5
			}
		}, {
			templateId: "V0092_MOVE_GUNK_SHOT",
			moveSettings: {
				movementId: "GUNK_SHOT",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_POISON",
				power: 65,
				accuracyChance: 1,
				criticalChance: .05,
				staminaLossScalar: .12,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "gunkShot",
				durationMs: 3e3,
				damageWindowStartMs: 2e3,
				damageWindowEndMs: 2400,
				energyDelta: -100
			}
		}, {
			templateId: "V0092_POKEMON_GASTLY",
			pokemonSettings: {
				pokemonId: "GASTLY",
				modelScale: 1,
				type: "POKEMON_TYPE_GHOST",
				type2: "POKEMON_TYPE_POISON",
				camera: {
					diskRadiusM: .675,
					cylinderRadiusM: .45,
					cylinderHeightM: .8,
					cylinderGroundM: .6,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .32,
					baseFleeRate: .1,
					collisionRadiusM: .25,
					collisionHeightM: .6,
					collisionHeadRadiusM: .3,
					movementType: "MOVEMENT_PSYCHIC",
					movementTimerS: 29,
					jumpTimeS: 1,
					attackTimerS: 10
				},
				stats: {
					baseStamina: 60,
					baseAttack: 186,
					baseDefense: 70
				},
				quickMoves: ["LICK_FAST", "SUCKER_PUNCH_FAST"],
				cinematicMoves: ["OMINOUS_WIND", "DARK_PULSE", "SLUDGE_BOMB"],
				animationTime: [0, .6667, 1.6667, 1, 0, 2.1333, 2.1333, 0],
				evolutionIds: ["HAUNTER"],
				evolutionPips: 1,
				pokedexHeightM: 1.3,
				pokedexWeightKg: .1,
				heightStdDev: .1625,
				weightStdDev: .0125,
				familyId: "FAMILY_GASTLY",
				candyToEvolve: 25,
				kmBuddyDistance: 1.5,
				modelHeight: 1
			}
		}, {
			templateId: "V0093_POKEMON_HAUNTER",
			pokemonSettings: {
				pokemonId: "HAUNTER",
				modelScale: .68,
				type: "POKEMON_TYPE_GHOST",
				type2: "POKEMON_TYPE_POISON",
				camera: {
					diskRadiusM: .765,
					cylinderRadiusM: .51,
					cylinderHeightM: 1.088,
					cylinderGroundM: .34,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .16,
					baseFleeRate: .07,
					collisionRadiusM: .442,
					collisionHeightM: 1.156,
					collisionHeadRadiusM: .442,
					movementType: "MOVEMENT_PSYCHIC",
					movementTimerS: 23,
					jumpTimeS: 1,
					attackTimerS: 8
				},
				stats: {
					baseStamina: 90,
					baseAttack: 223,
					baseDefense: 112
				},
				quickMoves: ["SHADOW_CLAW_FAST", "LICK_FAST"],
				cinematicMoves: ["SHADOW_BALL", "DARK_PULSE", "SLUDGE_BOMB"],
				animationTime: [2.1667, .6667, 1.6667, .6667, 0, 2.3333, 2, 0],
				evolutionIds: ["GENGAR"],
				evolutionPips: 1,
				pokedexHeightM: 1.6,
				pokedexWeightKg: .1,
				parentPokemonId: "GASTLY",
				heightStdDev: .2,
				weightStdDev: .0125,
				familyId: "FAMILY_GASTLY",
				candyToEvolve: 100,
				kmBuddyDistance: 1.5,
				modelHeight: 1.87
			}
		}, {
			templateId: "V0094_MOVE_BONE_CLUB",
			moveSettings: {
				movementId: "BONE_CLUB",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_GROUND",
				power: 25,
				accuracyChance: 1,
				criticalChance: .05,
				staminaLossScalar: .065,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "boneClub",
				durationMs: 1600,
				damageWindowStartMs: 1250,
				damageWindowEndMs: 1500,
				energyDelta: -25
			}
		}, {
			templateId: "V0094_POKEMON_GENGAR",
			pokemonSettings: {
				pokemonId: "GENGAR",
				modelScale: .84,
				type: "POKEMON_TYPE_GHOST",
				type2: "POKEMON_TYPE_POISON",
				camera: {
					diskRadiusM: .693,
					cylinderRadiusM: .462,
					cylinderHeightM: 1.176,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .08,
					baseFleeRate: .05,
					collisionRadiusM: .462,
					collisionHeightM: 1.092,
					collisionHeadRadiusM: .504,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 14,
					jumpTimeS: 1.3,
					attackTimerS: 5
				},
				stats: {
					baseStamina: 120,
					baseAttack: 261,
					baseDefense: 156
				},
				quickMoves: ["SUCKER_PUNCH_FAST", "SHADOW_CLAW_FAST"],
				cinematicMoves: ["SHADOW_BALL", "DARK_PULSE", "SLUDGE_BOMB"],
				animationTime: [1.6667, .6667, 1.6667, 1.8333, 0, 1.6667, 1.3333, 1.666667],
				evolutionPips: 1,
				pokedexHeightM: 1.5,
				pokedexWeightKg: 40.5,
				parentPokemonId: "HAUNTER",
				heightStdDev: .1875,
				weightStdDev: 5.0625,
				familyId: "FAMILY_GASTLY",
				kmBuddyDistance: 1.5,
				modelHeight: 1.5
			}
		}, {
			templateId: "V0095_MOVE_BULLDOZE",
			moveSettings: {
				movementId: "BULLDOZE",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_GROUND",
				power: 35,
				accuracyChance: 1,
				criticalChance: .05,
				staminaLossScalar: .06,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "bulldoze",
				durationMs: 3400,
				damageWindowStartMs: 1900,
				damageWindowEndMs: 3e3,
				energyDelta: -25
			}
		}, {
			templateId: "V0095_POKEMON_ONIX",
			pokemonSettings: {
				pokemonId: "ONIX",
				modelScale: .47,
				type: "POKEMON_TYPE_ROCK",
				type2: "POKEMON_TYPE_GROUND",
				camera: {
					diskRadiusM: .987,
					cylinderRadiusM: .658,
					cylinderHeightM: 1.41,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .16,
					baseFleeRate: .09,
					collisionRadiusM: .658,
					collisionHeightM: 1.175,
					collisionHeadRadiusM: .376,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 17,
					jumpTimeS: 1,
					attackTimerS: 6
				},
				stats: {
					baseStamina: 70,
					baseAttack: 85,
					baseDefense: 288
				},
				quickMoves: ["ROCK_THROW_FAST", "TACKLE_FAST"],
				cinematicMoves: ["ROCK_SLIDE", "STONE_EDGE", "IRON_HEAD"],
				animationTime: [2.3333, .6667, 1.7333, 1.7333, 0, 2.3333, 2.0333, 0],
				evolutionPips: 1,
				pokedexHeightM: 8.8,
				pokedexWeightKg: 210,
				heightStdDev: 1.1,
				weightStdDev: 26.25,
				familyId: "FAMILY_ONIX",
				kmBuddyDistance: 2.5,
				modelHeight: 5.75
			}
		}, {
			templateId: "V0096_MOVE_MUD_BOMB",
			moveSettings: {
				movementId: "MUD_BOMB",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_GROUND",
				power: 30,
				accuracyChance: 1,
				criticalChance: .05,
				staminaLossScalar: .065,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "mudBomb",
				durationMs: 2600,
				damageWindowStartMs: 2050,
				damageWindowEndMs: 2500,
				energyDelta: -25
			}
		}, {
			templateId: "V0096_POKEMON_DROWZEE",
			pokemonSettings: {
				pokemonId: "DROWZEE",
				modelScale: 1.05,
				type: "POKEMON_TYPE_PSYCHIC",
				camera: {
					diskRadiusM: .63,
					cylinderRadiusM: .42,
					cylinderHeightM: 1.05,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .4,
					baseFleeRate: .1,
					collisionRadiusM: .3675,
					collisionHeightM: .63,
					collisionHeadRadiusM: .2625,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 8,
					jumpTimeS: 1.25,
					attackTimerS: 23
				},
				stats: {
					baseStamina: 120,
					baseAttack: 89,
					baseDefense: 158
				},
				quickMoves: ["POUND_FAST", "CONFUSION_FAST"],
				cinematicMoves: ["PSYBEAM", "PSYSHOCK", "PSYCHIC"],
				animationTime: [1.8333, .6667, 1.6667, 1.7667, 0, 2, 2.3333, 0],
				evolutionIds: ["HYPNO"],
				evolutionPips: 1,
				pokedexHeightM: 1,
				pokedexWeightKg: 32.4,
				heightStdDev: .125,
				weightStdDev: 4.05,
				familyId: "FAMILY_DROWZEE",
				candyToEvolve: 50,
				kmBuddyDistance: 1.5,
				modelHeight: .9
			}
		}, {
			templateId: "V0097_POKEMON_HYPNO",
			pokemonSettings: {
				pokemonId: "HYPNO",
				modelScale: .83,
				type: "POKEMON_TYPE_PSYCHIC",
				camera: {
					diskRadiusM: .9338,
					cylinderRadiusM: .6225,
					cylinderHeightM: 1.328,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .16,
					baseFleeRate: .06,
					collisionRadiusM: .332,
					collisionHeightM: .83,
					collisionHeadRadiusM: .332,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 11,
					jumpTimeS: .8,
					attackTimerS: 4
				},
				stats: {
					baseStamina: 170,
					baseAttack: 144,
					baseDefense: 215
				},
				quickMoves: ["ZEN_HEADBUTT_FAST", "CONFUSION_FAST"],
				cinematicMoves: ["PSYSHOCK", "PSYCHIC", "SHADOW_BALL"],
				animationTime: [1.8667, .6667, 2, 1.4333, 0, 2.6667, 1.6, 0],
				evolutionPips: 1,
				pokedexHeightM: 1.6,
				pokedexWeightKg: 75.6,
				parentPokemonId: "DROWZEE",
				heightStdDev: .2,
				weightStdDev: 9.45,
				familyId: "FAMILY_DROWZEE",
				kmBuddyDistance: 1.5,
				modelHeight: 1.55
			}
		}, {
			templateId: "V0098_POKEMON_KRABBY",
			pokemonSettings: {
				pokemonId: "KRABBY",
				modelScale: 1.16,
				type: "POKEMON_TYPE_WATER",
				camera: {
					diskRadiusM: .783,
					cylinderRadiusM: .522,
					cylinderHeightM: .87,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .4,
					baseFleeRate: .15,
					collisionRadiusM: .522,
					collisionHeightM: .87,
					collisionHeadRadiusM: .261,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 23,
					jumpTimeS: 1,
					attackTimerS: 8
				},
				stats: {
					baseStamina: 60,
					baseAttack: 181,
					baseDefense: 156
				},
				quickMoves: ["BUBBLE_FAST", "MUD_SHOT_FAST"],
				cinematicMoves: ["VICE_GRIP", "BUBBLE_BEAM", "WATER_PULSE"],
				animationTime: [1.4333, .6667, 1.6667, 1.5, 0, 2.3333, 1.3333, 0],
				evolutionIds: ["KINGLER"],
				evolutionPips: 1,
				pokedexHeightM: .4,
				pokedexWeightKg: 6.5,
				heightStdDev: .05,
				weightStdDev: .8125,
				familyId: "FAMILY_KRABBY",
				candyToEvolve: 50,
				kmBuddyDistance: 1.5,
				modelHeight: .71
			}
		}, {
			templateId: "V0099_MOVE_SIGNAL_BEAM",
			moveSettings: {
				movementId: "SIGNAL_BEAM",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_BUG",
				power: 45,
				accuracyChance: 1,
				criticalChance: .05,
				staminaLossScalar: .075,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "signalBeam",
				durationMs: 3100,
				damageWindowStartMs: 2e3,
				damageWindowEndMs: 3e3,
				energyDelta: -33
			}
		}, {
			templateId: "V0099_POKEMON_KINGLER",
			pokemonSettings: {
				pokemonId: "KINGLER",
				modelScale: .87,
				type: "POKEMON_TYPE_WATER",
				camera: {
					diskRadiusM: .9788,
					cylinderRadiusM: .6525,
					cylinderHeightM: 1.0005,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .16,
					baseFleeRate: .07,
					collisionRadiusM: .6525,
					collisionHeightM: 1.0005,
					collisionHeadRadiusM: .32625,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 8,
					jumpTimeS: .8,
					attackTimerS: 3
				},
				stats: {
					baseStamina: 110,
					baseAttack: 240,
					baseDefense: 214
				},
				quickMoves: ["METAL_CLAW_FAST", "MUD_SHOT_FAST"],
				cinematicMoves: ["VICE_GRIP", "X_SCISSOR", "WATER_PULSE"],
				animationTime: [2.2667, .6667, 1.8, 1.5667, 0, 2, 1.5333, 0],
				evolutionPips: 1,
				pokedexHeightM: 1.3,
				pokedexWeightKg: 60,
				parentPokemonId: "KRABBY",
				heightStdDev: .1625,
				weightStdDev: 7.5,
				familyId: "FAMILY_KRABBY",
				kmBuddyDistance: 1.5,
				modelHeight: 1.37
			}
		}, {
			templateId: "V0100_MOVE_X_SCISSOR",
			moveSettings: {
				movementId: "X_SCISSOR",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_BUG",
				power: 35,
				accuracyChance: 1,
				criticalChance: .05,
				staminaLossScalar: .08,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "xScissor",
				durationMs: 2100,
				damageWindowStartMs: 1350,
				damageWindowEndMs: 1600,
				energyDelta: -33
			}
		}, {
			templateId: "V0100_POKEMON_VOLTORB",
			pokemonSettings: {
				pokemonId: "VOLTORB",
				modelScale: 1.35,
				type: "POKEMON_TYPE_ELECTRIC",
				camera: {
					diskRadiusM: .5063,
					cylinderRadiusM: .3375,
					cylinderHeightM: .675,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .4,
					baseFleeRate: .1,
					collisionRadiusM: .3375,
					collisionHeightM: .675,
					collisionHeadRadiusM: .16875,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 10,
					jumpTimeS: 1.2,
					attackTimerS: 29
				},
				stats: {
					baseStamina: 80,
					baseAttack: 109,
					baseDefense: 114
				},
				quickMoves: ["SPARK_FAST", "TACKLE_FAST"],
				cinematicMoves: ["DISCHARGE", "THUNDERBOLT", "SIGNAL_BEAM"],
				animationTime: [2.6667, .6667, 1.6667, 1.8333, 0, 2.3333, 2, 2],
				evolutionIds: ["ELECTRODE"],
				evolutionPips: 1,
				pokedexHeightM: .5,
				pokedexWeightKg: 10.4,
				heightStdDev: .0625,
				weightStdDev: 1.3,
				familyId: "FAMILY_VOLTORB",
				candyToEvolve: 50,
				kmBuddyDistance: 1.5,
				modelHeight: .5
			}
		}, {
			templateId: "V0101_MOVE_FLAME_CHARGE",
			moveSettings: {
				movementId: "FLAME_CHARGE",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_FIRE",
				power: 25,
				accuracyChance: 1,
				criticalChance: .05,
				staminaLossScalar: .05,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "flameCharge",
				durationMs: 3100,
				damageWindowStartMs: 2700,
				damageWindowEndMs: 2900,
				energyDelta: -20
			}
		}, {
			templateId: "V0101_POKEMON_ELECTRODE",
			pokemonSettings: {
				pokemonId: "ELECTRODE",
				modelScale: .92,
				type: "POKEMON_TYPE_ELECTRIC",
				camera: {
					diskRadiusM: .828,
					cylinderRadiusM: .552,
					cylinderHeightM: 1.104,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .16,
					baseFleeRate: .06,
					collisionRadiusM: .552,
					collisionHeightM: 1.104,
					collisionHeadRadiusM: .276,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 8,
					jumpTimeS: 1.2,
					attackTimerS: 23
				},
				stats: {
					baseStamina: 120,
					baseAttack: 173,
					baseDefense: 179
				},
				quickMoves: ["SPARK_FAST", "TACKLE_FAST"],
				cinematicMoves: ["DISCHARGE", "THUNDERBOLT", "HYPER_BEAM"],
				animationTime: [2.3333, .6667, 1.6667, 1.8333, 0, 2.3333, 3, 0],
				evolutionPips: 1,
				pokedexHeightM: 1.2,
				pokedexWeightKg: 66.6,
				parentPokemonId: "VOLTORB",
				heightStdDev: .15,
				weightStdDev: 8.325,
				familyId: "FAMILY_VOLTORB",
				kmBuddyDistance: 1.5,
				modelHeight: 1.2
			}
		}, {
			templateId: "V0102_MOVE_FLAME_BURST",
			moveSettings: {
				movementId: "FLAME_BURST",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_FIRE",
				power: 30,
				accuracyChance: 1,
				criticalChance: .05,
				staminaLossScalar: .07,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "flameBurst",
				durationMs: 2100,
				damageWindowStartMs: 1200,
				damageWindowEndMs: 1600,
				energyDelta: -25
			}
		}, {
			templateId: "V0102_POKEMON_EXEGGCUTE",
			pokemonSettings: {
				pokemonId: "EXEGGCUTE",
				modelScale: 1.03,
				type: "POKEMON_TYPE_GRASS",
				type2: "POKEMON_TYPE_PSYCHIC",
				camera: {
					diskRadiusM: .7725,
					cylinderRadiusM: .515,
					cylinderHeightM: .412,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .4,
					baseFleeRate: .1,
					collisionRadiusM: .515,
					collisionHeightM: .412,
					collisionHeadRadiusM: .2575,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 8,
					jumpTimeS: 1,
					attackTimerS: 23
				},
				stats: {
					baseStamina: 120,
					baseAttack: 107,
					baseDefense: 140
				},
				quickMoves: ["CONFUSION_FAST"],
				cinematicMoves: ["SEED_BOMB", "PSYCHIC", "ANCIENT_POWER"],
				animationTime: [2.5, .6667, 1.6667, 1.6667, 0, 2, 2, 0],
				evolutionIds: ["EXEGGUTOR"],
				evolutionPips: 1,
				pokedexHeightM: .4,
				pokedexWeightKg: 2.5,
				heightStdDev: .05,
				weightStdDev: .3125,
				familyId: "FAMILY_EXEGGCUTE",
				candyToEvolve: 50,
				kmBuddyDistance: 1.5,
				modelHeight: .93
			}
		}, {
			templateId: "V0103_MOVE_FIRE_BLAST",
			moveSettings: {
				movementId: "FIRE_BLAST",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_FIRE",
				power: 100,
				accuracyChance: 1,
				criticalChance: .05,
				staminaLossScalar: .11,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "fireBlast",
				durationMs: 4100,
				damageWindowStartMs: 3600,
				damageWindowEndMs: 4e3,
				energyDelta: -100
			}
		}, {
			templateId: "V0103_POKEMON_EXEGGUTOR",
			pokemonSettings: {
				pokemonId: "EXEGGUTOR",
				modelScale: .78,
				type: "POKEMON_TYPE_GRASS",
				type2: "POKEMON_TYPE_PSYCHIC",
				camera: {
					diskRadiusM: .7605,
					cylinderRadiusM: .507,
					cylinderHeightM: 1.365,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .16,
					baseFleeRate: .06,
					collisionRadiusM: .507,
					collisionHeightM: 1.365,
					collisionHeadRadiusM: .2535,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 8,
					jumpTimeS: 1,
					attackTimerS: 3
				},
				stats: {
					baseStamina: 190,
					baseAttack: 233,
					baseDefense: 158
				},
				quickMoves: ["CONFUSION_FAST", "ZEN_HEADBUTT_FAST"],
				cinematicMoves: ["SEED_BOMB", "PSYCHIC", "SOLAR_BEAM"],
				animationTime: [2.4667, .6667, 1.6667, 2, 0, 2.2, 1.6, 0],
				evolutionPips: 1,
				pokedexHeightM: 2,
				pokedexWeightKg: 120,
				parentPokemonId: "EXEGGCUTE",
				heightStdDev: .25,
				weightStdDev: 15,
				familyId: "FAMILY_EXEGGCUTE",
				kmBuddyDistance: 1.5,
				modelHeight: 1.8
			}
		}, {
			templateId: "V0104_MOVE_BRINE",
			moveSettings: {
				movementId: "BRINE",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_WATER",
				power: 25,
				accuracyChance: 1,
				criticalChance: .05,
				staminaLossScalar: .065,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "brine",
				durationMs: 2400,
				damageWindowStartMs: 1650,
				damageWindowEndMs: 2e3,
				energyDelta: -25
			}
		}, {
			templateId: "V0104_POKEMON_CUBONE",
			pokemonSettings: {
				pokemonId: "CUBONE",
				modelScale: 1.48,
				type: "POKEMON_TYPE_GROUND",
				camera: {
					diskRadiusM: .444,
					cylinderRadiusM: .296,
					cylinderHeightM: .592,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .32,
					baseFleeRate: .1,
					collisionRadiusM: .222,
					collisionHeightM: .37,
					collisionHeadRadiusM: .222,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 8,
					jumpTimeS: 1,
					attackTimerS: 23
				},
				stats: {
					baseStamina: 100,
					baseAttack: 90,
					baseDefense: 165
				},
				quickMoves: ["MUD_SLAP_FAST", "ROCK_SMASH_FAST"],
				cinematicMoves: ["BONE_CLUB", "DIG", "BULLDOZE"],
				animationTime: [1.7333, .6667, 1.6, 1.6, 0, 1.8333, 1.6, 0],
				evolutionIds: ["MAROWAK"],
				evolutionPips: 1,
				pokedexHeightM: .4,
				pokedexWeightKg: 6.5,
				heightStdDev: .05,
				weightStdDev: .8125,
				familyId: "FAMILY_CUBONE",
				candyToEvolve: 50,
				kmBuddyDistance: 1.5,
				modelHeight: .4
			}
		}, {
			templateId: "V0105_MOVE_WATER_PULSE",
			moveSettings: {
				movementId: "WATER_PULSE",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_WATER",
				power: 35,
				accuracyChance: 1,
				criticalChance: .05,
				staminaLossScalar: .06,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "water_pulse",
				durationMs: 3300,
				damageWindowStartMs: 1900,
				damageWindowEndMs: 2900,
				energyDelta: -25
			}
		}, {
			templateId: "V0105_POKEMON_MAROWAK",
			pokemonSettings: {
				pokemonId: "MAROWAK",
				modelScale: 1,
				type: "POKEMON_TYPE_GROUND",
				camera: {
					diskRadiusM: .525,
					cylinderRadiusM: .35,
					cylinderHeightM: 1,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .06,
					collisionRadiusM: .25,
					collisionHeightM: .75,
					collisionHeadRadiusM: .25,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 14,
					jumpTimeS: .85,
					attackTimerS: 5
				},
				stats: {
					baseStamina: 120,
					baseAttack: 144,
					baseDefense: 200
				},
				quickMoves: ["MUD_SLAP_FAST", "ROCK_SMASH_FAST"],
				cinematicMoves: ["BONE_CLUB", "DIG", "EARTHQUAKE"],
				animationTime: [2, .6667, 1.6667, 1.5, 0, 2, 1.4, 0],
				evolutionPips: 1,
				pokedexHeightM: 1,
				pokedexWeightKg: 45,
				parentPokemonId: "CUBONE",
				heightStdDev: .125,
				weightStdDev: 5.625,
				familyId: "FAMILY_CUBONE",
				kmBuddyDistance: 1.5,
				modelHeight: 1
			}
		}, {
			templateId: "V0106_MOVE_SCALD",
			moveSettings: {
				movementId: "SCALD",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_WATER",
				power: 55,
				accuracyChance: 1,
				criticalChance: .05,
				staminaLossScalar: .08,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "scald",
				durationMs: 4e3,
				damageWindowStartMs: 1800,
				damageWindowEndMs: 3900,
				energyDelta: -33
			}
		}, {
			templateId: "V0106_POKEMON_HITMONLEE",
			pokemonSettings: {
				pokemonId: "HITMONLEE",
				modelScale: .83,
				type: "POKEMON_TYPE_FIGHTING",
				camera: {
					diskRadiusM: .6225,
					cylinderRadiusM: .415,
					cylinderHeightM: 1.245,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .16,
					baseFleeRate: .09,
					collisionRadiusM: .415,
					collisionHeightM: 1.245,
					collisionHeadRadiusM: .2075,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 11,
					jumpTimeS: .8,
					attackTimerS: 4
				},
				stats: {
					baseStamina: 100,
					baseAttack: 224,
					baseDefense: 211
				},
				quickMoves: ["LOW_KICK_FAST", "ROCK_SMASH_FAST"],
				cinematicMoves: ["BRICK_BREAK", "LOW_SWEEP", "STONE_EDGE"],
				animationTime: [1.6667, .6667, 1.6667, 1.5, 0, 2, .9333, 0],
				evolutionPips: 1,
				pokedexHeightM: 1.5,
				pokedexWeightKg: 49.8,
				heightStdDev: .1875,
				weightStdDev: 6.225,
				familyId: "FAMILY_HITMONLEE",
				kmBuddyDistance: 2.5,
				modelHeight: 1.44
			}
		}, {
			templateId: "V0107_MOVE_HYDRO_PUMP",
			moveSettings: {
				movementId: "HYDRO_PUMP",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_WATER",
				power: 90,
				accuracyChance: 1,
				criticalChance: .05,
				staminaLossScalar: .11,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "hydro_pump",
				durationMs: 3800,
				damageWindowStartMs: 1500,
				damageWindowEndMs: 3600,
				energyDelta: -100
			}
		}, {
			templateId: "V0107_POKEMON_HITMONCHAN",
			pokemonSettings: {
				pokemonId: "HITMONCHAN",
				modelScale: 1.02,
				type: "POKEMON_TYPE_FIGHTING",
				camera: {
					diskRadiusM: .6885,
					cylinderRadiusM: .459,
					cylinderHeightM: 1.428,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .16,
					baseFleeRate: .09,
					collisionRadiusM: .3315,
					collisionHeightM: 1.02,
					collisionHeadRadiusM: .255,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 14,
					jumpTimeS: 1.1,
					attackTimerS: 5
				},
				stats: {
					baseStamina: 100,
					baseAttack: 193,
					baseDefense: 212
				},
				quickMoves: ["BULLET_PUNCH_FAST", "ROCK_SMASH_FAST"],
				cinematicMoves: ["FIRE_PUNCH", "ICE_PUNCH", "THUNDER_PUNCH", "BRICK_BREAK"],
				animationTime: [1.5, .6667, 1.6667, 1.6667, 0, 1.7333, .6667, 0],
				evolutionPips: 1,
				pokedexHeightM: 1.4,
				pokedexWeightKg: 50.2,
				heightStdDev: .175,
				weightStdDev: 6.275,
				familyId: "FAMILY_HITMONCHAN",
				kmBuddyDistance: 2.5,
				modelHeight: 1.14
			}
		}, {
			templateId: "V0108_MOVE_PSYCHIC",
			moveSettings: {
				movementId: "PSYCHIC",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_PSYCHIC",
				power: 55,
				accuracyChance: 1,
				criticalChance: .05,
				staminaLossScalar: .09,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "psychic",
				durationMs: 2800,
				damageWindowStartMs: 1600,
				damageWindowEndMs: 2800,
				energyDelta: -50
			}
		}, {
			templateId: "V0108_POKEMON_LICKITUNG",
			pokemonSettings: {
				pokemonId: "LICKITUNG",
				modelScale: .92,
				type: "POKEMON_TYPE_NORMAL",
				camera: {
					diskRadiusM: .69,
					cylinderRadiusM: .46,
					cylinderHeightM: 1.104,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .16,
					baseFleeRate: .09,
					collisionRadiusM: .46,
					collisionHeightM: .92,
					collisionHeadRadiusM: .253,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 23,
					jumpTimeS: 1.25,
					attackTimerS: 8
				},
				stats: {
					baseStamina: 180,
					baseAttack: 108,
					baseDefense: 137
				},
				quickMoves: ["LICK_FAST", "ZEN_HEADBUTT_FAST"],
				cinematicMoves: ["HYPER_BEAM", "STOMP", "POWER_WHIP"],
				animationTime: [1.6667, .6667, 1.6667, 1.7333, 0, 2, .8, 0],
				evolutionPips: 1,
				pokedexHeightM: 1.2,
				pokedexWeightKg: 65.5,
				heightStdDev: .15,
				weightStdDev: 8.1875,
				familyId: "FAMILY_LICKITUNG",
				kmBuddyDistance: 1.5,
				modelHeight: 1.2
			}
		}, {
			templateId: "V0109_MOVE_PSYSTRIKE",
			moveSettings: {
				movementId: "PSYSTRIKE",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_PSYCHIC",
				power: 100,
				accuracyChance: 1,
				criticalChance: .05,
				staminaLossScalar: .1,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "psystrike",
				durationMs: 5100,
				damageWindowStartMs: 4400,
				damageWindowEndMs: 5300,
				energyDelta: -100
			}
		}, {
			templateId: "V0109_POKEMON_KOFFING",
			pokemonSettings: {
				pokemonId: "KOFFING",
				modelScale: 1.2,
				type: "POKEMON_TYPE_POISON",
				camera: {
					diskRadiusM: .72,
					cylinderRadiusM: .48,
					cylinderHeightM: .72,
					cylinderGroundM: .6,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .4,
					baseFleeRate: .1,
					collisionRadiusM: .36,
					collisionHeightM: .66,
					collisionHeadRadiusM: .6,
					movementType: "MOVEMENT_FLYING",
					movementTimerS: 8,
					jumpTimeS: 1,
					attackTimerS: 23
				},
				stats: {
					baseStamina: 80,
					baseAttack: 119,
					baseDefense: 164
				},
				quickMoves: ["TACKLE_FAST"],
				cinematicMoves: ["SLUDGE", "SLUDGE_BOMB", "DARK_PULSE"],
				animationTime: [1.3333, .6667, 1.5, .6667, 6.666667, 2, 2, 0],
				evolutionIds: ["WEEZING"],
				evolutionPips: 1,
				pokedexHeightM: .6,
				pokedexWeightKg: 1,
				heightStdDev: .075,
				weightStdDev: .125,
				familyId: "FAMILY_KOFFING",
				candyToEvolve: 50,
				kmBuddyDistance: 1.5,
				modelHeight: .65
			}
		}, {
			templateId: "V0110_POKEMON_WEEZING",
			pokemonSettings: {
				pokemonId: "WEEZING",
				modelScale: 1.24,
				type: "POKEMON_TYPE_POISON",
				camera: {
					diskRadiusM: .93,
					cylinderRadiusM: .62,
					cylinderHeightM: .744,
					cylinderGroundM: .62,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .16,
					baseFleeRate: .06,
					collisionRadiusM: .682,
					collisionHeightM: .744,
					collisionHeadRadiusM: .465,
					movementType: "MOVEMENT_FLYING",
					movementTimerS: 4,
					jumpTimeS: 1,
					attackTimerS: 11
				},
				stats: {
					baseStamina: 130,
					baseAttack: 174,
					baseDefense: 221
				},
				quickMoves: ["TACKLE_FAST"],
				cinematicMoves: ["SLUDGE_BOMB", "SHADOW_BALL", "DARK_PULSE"],
				animationTime: [2, .6667, 1.6667, .6667, 3.333333, 2.4667, 2.6667, 0],
				evolutionPips: 1,
				pokedexHeightM: 1.2,
				pokedexWeightKg: 9.5,
				parentPokemonId: "KOFFING",
				heightStdDev: .15,
				weightStdDev: 1.1875,
				familyId: "FAMILY_KOFFING",
				kmBuddyDistance: 1.5,
				modelHeight: .76
			}
		}, {
			templateId: "V0111_MOVE_ICY_WIND",
			moveSettings: {
				movementId: "ICY_WIND",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_ICE",
				power: 25,
				accuracyChance: 1,
				criticalChance: .05,
				staminaLossScalar: .055,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "icyWind",
				durationMs: 3800,
				damageWindowStartMs: 2e3,
				damageWindowEndMs: 2700,
				energyDelta: -20
			}
		}, {
			templateId: "V0111_POKEMON_RHYHORN",
			pokemonSettings: {
				pokemonId: "RHYHORN",
				modelScale: 1,
				type: "POKEMON_TYPE_GROUND",
				type2: "POKEMON_TYPE_ROCK",
				camera: {
					diskRadiusM: .75,
					cylinderRadiusM: .5,
					cylinderHeightM: .85,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .4,
					baseFleeRate: .1,
					collisionRadiusM: .5,
					collisionHeightM: .85,
					collisionHeadRadiusM: .3,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 14,
					jumpTimeS: 1.25,
					attackTimerS: 5
				},
				stats: {
					baseStamina: 160,
					baseAttack: 140,
					baseDefense: 157
				},
				quickMoves: ["MUD_SLAP_FAST", "ROCK_SMASH_FAST"],
				cinematicMoves: ["BULLDOZE", "HORN_ATTACK", "STOMP"],
				animationTime: [1.7667, 1, 1.5, 1.8333, 0, 2.6667, 2.4, 0],
				evolutionIds: ["RHYDON"],
				evolutionPips: 1,
				pokedexHeightM: 1,
				pokedexWeightKg: 115,
				heightStdDev: .125,
				weightStdDev: 14.375,
				familyId: "FAMILY_RHYHORN",
				candyToEvolve: 50,
				kmBuddyDistance: 1.5,
				modelHeight: 1
			}
		}, {
			templateId: "V0112_POKEMON_RHYDON",
			pokemonSettings: {
				pokemonId: "RHYDON",
				modelScale: .79,
				type: "POKEMON_TYPE_GROUND",
				type2: "POKEMON_TYPE_ROCK",
				camera: {
					diskRadiusM: 1.185,
					cylinderRadiusM: .79,
					cylinderHeightM: 1.343,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .16,
					baseFleeRate: .06,
					collisionRadiusM: .5925,
					collisionHeightM: 1.185,
					collisionHeadRadiusM: .395,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 8,
					jumpTimeS: 1,
					attackTimerS: 3
				},
				stats: {
					baseStamina: 210,
					baseAttack: 222,
					baseDefense: 206
				},
				quickMoves: ["MUD_SLAP_FAST", "ROCK_SMASH_FAST"],
				cinematicMoves: ["MEGAHORN", "EARTHQUAKE", "STONE_EDGE"],
				animationTime: [1.7, .6667, 2.1, 1.7, 0, 2, 1.6, 0],
				evolutionPips: 1,
				pokedexHeightM: 1.9,
				pokedexWeightKg: 120,
				parentPokemonId: "RHYHORN",
				heightStdDev: .2375,
				weightStdDev: 15,
				familyId: "FAMILY_RHYHORN",
				kmBuddyDistance: 1.5,
				modelHeight: 1.85
			}
		}, {
			templateId: "V0113_POKEMON_CHANSEY",
			pokemonSettings: {
				pokemonId: "CHANSEY",
				modelScale: .96,
				type: "POKEMON_TYPE_NORMAL",
				camera: {
					diskRadiusM: .72,
					cylinderRadiusM: .48,
					cylinderHeightM: 1.056,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .16,
					baseFleeRate: .09,
					collisionRadiusM: .48,
					collisionHeightM: 1.056,
					collisionHeadRadiusM: .24,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 3,
					jumpTimeS: 1,
					attackTimerS: 8
				},
				stats: {
					baseStamina: 500,
					baseAttack: 60,
					baseDefense: 176
				},
				quickMoves: ["POUND_FAST", "ZEN_HEADBUTT_FAST"],
				cinematicMoves: ["PSYCHIC", "HYPER_BEAM", "DAZZLING_GLEAM"],
				animationTime: [2.1667, .6667, 2, 1.5667, 0, 2.1667, 1.7333, 1.666667],
				evolutionPips: 1,
				pokedexHeightM: 1.1,
				pokedexWeightKg: 34.6,
				heightStdDev: .1375,
				weightStdDev: 4.325,
				familyId: "FAMILY_CHANSEY",
				kmBuddyDistance: 2.5,
				modelHeight: 1.1
			}
		}, {
			templateId: "V0114_MOVE_GIGA_DRAIN",
			moveSettings: {
				movementId: "GIGA_DRAIN",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_GRASS",
				power: 50,
				accuracyChance: 1,
				criticalChance: .05,
				healScalar: .5,
				staminaLossScalar: .075,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "gigaDrain",
				durationMs: 3600,
				damageWindowStartMs: 350,
				damageWindowEndMs: 1500,
				energyDelta: -33
			}
		}, {
			templateId: "V0114_POKEMON_TANGELA",
			pokemonSettings: {
				pokemonId: "TANGELA",
				modelScale: 1,
				type: "POKEMON_TYPE_GRASS",
				camera: {
					diskRadiusM: 1.095,
					cylinderRadiusM: .73,
					cylinderHeightM: 1,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .32,
					baseFleeRate: .09,
					collisionRadiusM: .5,
					collisionHeightM: .9,
					collisionHeadRadiusM: .365,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 4,
					jumpTimeS: 1.25,
					attackTimerS: 11
				},
				stats: {
					baseStamina: 130,
					baseAttack: 183,
					baseDefense: 205
				},
				quickMoves: ["VINE_WHIP_FAST"],
				cinematicMoves: ["POWER_WHIP", "SLUDGE_BOMB", "SOLAR_BEAM"],
				animationTime: [2, .6667, 1.8333, 1.8333, 0, 2.5, 1.8667, 0],
				evolutionPips: 1,
				pokedexHeightM: 1,
				pokedexWeightKg: 35,
				heightStdDev: .125,
				weightStdDev: 4.375,
				familyId: "FAMILY_TANGELA",
				kmBuddyDistance: 1.5,
				modelHeight: 1
			}
		}, {
			templateId: "V0115_MOVE_FIRE_PUNCH",
			moveSettings: {
				movementId: "FIRE_PUNCH",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_FIRE",
				power: 40,
				accuracyChance: 1,
				criticalChance: .05,
				staminaLossScalar: .075,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "fire_punch",
				durationMs: 2800,
				damageWindowStartMs: 1690,
				damageWindowEndMs: 2200,
				energyDelta: -33
			}
		}, {
			templateId: "V0115_POKEMON_KANGASKHAN",
			pokemonSettings: {
				pokemonId: "KANGASKHAN",
				modelScale: .72,
				type: "POKEMON_TYPE_NORMAL",
				camera: {
					diskRadiusM: .864,
					cylinderRadiusM: .576,
					cylinderHeightM: 1.584,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .16,
					baseFleeRate: .09,
					collisionRadiusM: .504,
					collisionHeightM: 1.26,
					collisionHeadRadiusM: .36,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 11,
					jumpTimeS: .7,
					attackTimerS: 4
				},
				stats: {
					baseStamina: 210,
					baseAttack: 181,
					baseDefense: 165
				},
				quickMoves: ["MUD_SLAP_FAST", "LOW_KICK_FAST"],
				cinematicMoves: ["BRICK_BREAK", "EARTHQUAKE", "STOMP"],
				animationTime: [2.1333, .6667, 1.6667, 1.5, 0, 2.3333, 2.3333, 2.333333],
				evolutionPips: 1,
				pokedexHeightM: 2.2,
				pokedexWeightKg: 80,
				heightStdDev: .275,
				weightStdDev: 10,
				familyId: "FAMILY_KANGASKHAN",
				kmBuddyDistance: 1.5,
				modelHeight: 2.18
			}
		}, {
			templateId: "V0116_MOVE_SOLAR_BEAM",
			moveSettings: {
				movementId: "SOLAR_BEAM",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_GRASS",
				power: 120,
				accuracyChance: 1,
				criticalChance: .05,
				staminaLossScalar: .12,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "solarBeam",
				durationMs: 4900,
				damageWindowStartMs: 3100,
				damageWindowEndMs: 4800,
				energyDelta: -100
			}
		}, {
			templateId: "V0116_POKEMON_HORSEA",
			pokemonSettings: {
				pokemonId: "HORSEA",
				modelScale: 1.48,
				type: "POKEMON_TYPE_WATER",
				camera: {
					diskRadiusM: .2775,
					cylinderRadiusM: .25,
					cylinderHeightM: .74,
					cylinderGroundM: .185,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .4,
					baseFleeRate: .1,
					collisionRadiusM: .148,
					collisionHeightM: .444,
					collisionHeadRadiusM: .185,
					movementType: "MOVEMENT_HOVERING",
					movementTimerS: 10,
					jumpTimeS: 1,
					attackTimerS: 29
				},
				stats: {
					baseStamina: 60,
					baseAttack: 129,
					baseDefense: 125
				},
				quickMoves: ["WATER_GUN_FAST", "BUBBLE_FAST"],
				cinematicMoves: ["BUBBLE_BEAM", "DRAGON_PULSE", "FLASH_CANNON"],
				animationTime: [0, .6667, 1.7333, .8333, .333333, 1.6667, 2, 0],
				evolutionIds: ["SEADRA"],
				evolutionPips: 1,
				pokedexHeightM: .4,
				pokedexWeightKg: 8,
				heightStdDev: .05,
				weightStdDev: 1,
				familyId: "FAMILY_HORSEA",
				candyToEvolve: 50,
				kmBuddyDistance: 1.5,
				modelHeight: .4
			}
		}, {
			templateId: "V0117_MOVE_LEAF_BLADE",
			moveSettings: {
				movementId: "LEAF_BLADE",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_GRASS",
				power: 55,
				accuracyChance: 1,
				criticalChance: .25,
				staminaLossScalar: .09,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "leafBlade",
				durationMs: 2800,
				damageWindowStartMs: 1200,
				damageWindowEndMs: 2200,
				energyDelta: -50
			}
		}, {
			templateId: "V0117_POKEMON_SEADRA",
			pokemonSettings: {
				pokemonId: "SEADRA",
				modelScale: .92,
				type: "POKEMON_TYPE_WATER",
				camera: {
					diskRadiusM: .69,
					cylinderRadiusM: .46,
					cylinderHeightM: 1.15,
					cylinderGroundM: .46,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .16,
					baseFleeRate: .06,
					collisionRadiusM: .322,
					collisionHeightM: .46,
					collisionHeadRadiusM: .414,
					movementType: "MOVEMENT_HOVERING",
					movementTimerS: 6,
					jumpTimeS: 1,
					attackTimerS: 17
				},
				stats: {
					baseStamina: 110,
					baseAttack: 187,
					baseDefense: 182
				},
				quickMoves: ["WATER_GUN_FAST", "DRAGON_BREATH_FAST"],
				cinematicMoves: ["BLIZZARD", "DRAGON_PULSE", "HYDRO_PUMP"],
				animationTime: [0, .6667, 1.6667, .6667, 0, 1.8333, 2, 0],
				evolutionPips: 1,
				pokedexHeightM: 1.2,
				pokedexWeightKg: 25,
				parentPokemonId: "HORSEA",
				heightStdDev: .15,
				weightStdDev: 3.125,
				familyId: "FAMILY_HORSEA",
				kmBuddyDistance: 1.5,
				modelHeight: 1.2
			}
		}, {
			templateId: "V0118_MOVE_POWER_WHIP",
			moveSettings: {
				movementId: "POWER_WHIP",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_GRASS",
				power: 70,
				accuracyChance: 1,
				staminaLossScalar: .12,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "powerWhip",
				durationMs: 2800,
				damageWindowStartMs: 1500,
				damageWindowEndMs: 2800,
				energyDelta: -100
			}
		}, {
			templateId: "V0118_POKEMON_GOLDEEN",
			pokemonSettings: {
				pokemonId: "GOLDEEN",
				modelScale: 1.35,
				type: "POKEMON_TYPE_WATER",
				camera: {
					diskRadiusM: .405,
					cylinderRadiusM: .27,
					cylinderHeightM: .3375,
					cylinderGroundM: .3375,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .4,
					baseFleeRate: .15,
					collisionRadiusM: .135,
					collisionHeightM: .16875,
					collisionHeadRadiusM: .16875,
					movementType: "MOVEMENT_HOVERING",
					movementTimerS: 10,
					jumpTimeS: 1,
					attackTimerS: 29
				},
				stats: {
					baseStamina: 90,
					baseAttack: 123,
					baseDefense: 115
				},
				quickMoves: ["PECK_FAST", "MUD_SHOT_FAST"],
				cinematicMoves: ["WATER_PULSE", "HORN_ATTACK", "AQUA_TAIL"],
				animationTime: [3, 1, 1.6667, .6667, 0, 2.1667, 2.3, 0],
				evolutionIds: ["SEAKING"],
				evolutionPips: 1,
				pokedexHeightM: .6,
				pokedexWeightKg: 15,
				heightStdDev: .075,
				weightStdDev: 1.875,
				familyId: "FAMILY_GOLDEEN",
				candyToEvolve: 50,
				kmBuddyDistance: 1.5,
				modelHeight: .5
			}
		}, {
			templateId: "V0119_POKEMON_SEAKING",
			pokemonSettings: {
				pokemonId: "SEAKING",
				modelScale: .88,
				type: "POKEMON_TYPE_WATER",
				camera: {
					diskRadiusM: .594,
					cylinderRadiusM: .396,
					cylinderHeightM: .748,
					cylinderGroundM: .33,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .16,
					baseFleeRate: .07,
					collisionRadiusM: .044,
					collisionHeightM: .044,
					collisionHeadRadiusM: .242,
					movementType: "MOVEMENT_HOVERING",
					movementTimerS: 14,
					jumpTimeS: 1,
					attackTimerS: 5
				},
				stats: {
					baseStamina: 160,
					baseAttack: 175,
					baseDefense: 154
				},
				quickMoves: ["PECK_FAST", "POISON_JAB_FAST"],
				cinematicMoves: ["ICY_WIND", "DRILL_RUN", "MEGAHORN"],
				animationTime: [3.5, .6667, 1.6667, .8333, 0, 1.6667, 2, 0],
				evolutionPips: 1,
				pokedexHeightM: 1.3,
				pokedexWeightKg: 39,
				parentPokemonId: "GOLDEEN",
				heightStdDev: .1625,
				weightStdDev: 4.875,
				familyId: "FAMILY_GOLDEEN",
				kmBuddyDistance: 1.5,
				modelHeight: 1.36
			}
		}, {
			templateId: "V0120_POKEMON_STARYU",
			pokemonSettings: {
				pokemonId: "STARYU",
				modelScale: 1.1,
				type: "POKEMON_TYPE_WATER",
				camera: {
					diskRadiusM: .6188,
					cylinderRadiusM: .4125,
					cylinderHeightM: .88000011,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .4,
					baseFleeRate: .15,
					collisionRadiusM: .4125,
					collisionHeightM: .88000011,
					collisionHeadRadiusM: .20625,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 10,
					jumpTimeS: 1.35,
					attackTimerS: 29
				},
				stats: {
					baseStamina: 60,
					baseAttack: 137,
					baseDefense: 112
				},
				quickMoves: ["TACKLE_FAST", "WATER_GUN_FAST"],
				cinematicMoves: ["SWIFT", "BUBBLE_BEAM", "POWER_GEM"],
				animationTime: [1.3333, .6667, 1.6667, 1.8333, 0, 1.6667, 2, 2],
				evolutionIds: ["STARMIE"],
				evolutionPips: 1,
				pokedexHeightM: .8,
				pokedexWeightKg: 34.5,
				heightStdDev: .1,
				weightStdDev: 4.3125,
				familyId: "FAMILY_STARYU",
				candyToEvolve: 50,
				kmBuddyDistance: 1.5,
				modelHeight: .8
			}
		}, {
			templateId: "V0121_MOVE_AIR_CUTTER",
			moveSettings: {
				movementId: "AIR_CUTTER",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_FLYING",
				power: 30,
				accuracyChance: 1,
				criticalChance: .25,
				staminaLossScalar: .06,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "airCutter",
				durationMs: 3300,
				damageWindowStartMs: 2200,
				damageWindowEndMs: 3100,
				energyDelta: -25
			}
		}, {
			templateId: "V0121_POKEMON_STARMIE",
			pokemonSettings: {
				pokemonId: "STARMIE",
				modelScale: .97,
				type: "POKEMON_TYPE_WATER",
				type2: "POKEMON_TYPE_PSYCHIC",
				camera: {
					diskRadiusM: .7275,
					cylinderRadiusM: .485,
					cylinderHeightM: 1.067,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .16,
					baseFleeRate: .06,
					collisionRadiusM: .485,
					collisionHeightM: 1.067,
					collisionHeadRadiusM: .2425,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 6,
					jumpTimeS: 1.6,
					attackTimerS: 17
				},
				stats: {
					baseStamina: 120,
					baseAttack: 210,
					baseDefense: 184
				},
				quickMoves: ["TACKLE_FAST", "WATER_GUN_FAST"],
				cinematicMoves: ["HYDRO_PUMP", "POWER_GEM", "PSYCHIC"],
				animationTime: [1.7333, .6667, 1.8667, 2.1, 0, 2.6667, 1.9, 2.1],
				evolutionPips: 1,
				pokedexHeightM: 1.1,
				pokedexWeightKg: 80,
				parentPokemonId: "STARYU",
				heightStdDev: .1375,
				weightStdDev: 10,
				familyId: "FAMILY_STARYU",
				kmBuddyDistance: 1.5,
				modelHeight: 1.08
			}
		}, {
			templateId: "V0122_MOVE_HURRICANE",
			moveSettings: {
				movementId: "HURRICANE",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_FLYING",
				power: 80,
				accuracyChance: 1,
				criticalChance: .05,
				staminaLossScalar: .11,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "hurricane",
				durationMs: 3200,
				damageWindowStartMs: 1030,
				damageWindowEndMs: 2800,
				energyDelta: -100
			}
		}, {
			templateId: "V0122_POKEMON_MR_MIME",
			pokemonSettings: {
				pokemonId: "MR_MIME",
				modelScale: .89,
				type: "POKEMON_TYPE_PSYCHIC",
				type2: "POKEMON_TYPE_FAIRY",
				camera: {
					diskRadiusM: .6675,
					cylinderRadiusM: .445,
					cylinderHeightM: 1.157,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .24,
					baseFleeRate: .09,
					collisionRadiusM: .267,
					collisionHeightM: .6675,
					collisionHeadRadiusM: .267,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 5,
					jumpTimeS: 1,
					attackTimerS: 14
				},
				stats: {
					baseStamina: 80,
					baseAttack: 192,
					baseDefense: 233
				},
				quickMoves: ["CONFUSION_FAST", "ZEN_HEADBUTT_FAST"],
				cinematicMoves: ["PSYBEAM", "PSYCHIC", "SHADOW_BALL"],
				animationTime: [2.6667, .8333, 1.8333, 2, 0, 2, 2.5333, 0],
				evolutionPips: 1,
				pokedexHeightM: 1.3,
				pokedexWeightKg: 54.5,
				heightStdDev: .1625,
				weightStdDev: 6.8125,
				familyId: "FAMILY_MR_MIME",
				kmBuddyDistance: 2.5,
				modelHeight: 1.3
			}
		}, {
			templateId: "V0123_MOVE_BRICK_BREAK",
			moveSettings: {
				movementId: "BRICK_BREAK",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_FIGHTING",
				power: 30,
				accuracyChance: 1,
				criticalChance: .25,
				staminaLossScalar: .075,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "brickBreak",
				durationMs: 1600,
				damageWindowStartMs: 1100,
				damageWindowEndMs: 1500,
				energyDelta: -33
			}
		}, {
			templateId: "V0123_POKEMON_SCYTHER",
			pokemonSettings: {
				pokemonId: "SCYTHER",
				modelScale: .8,
				type: "POKEMON_TYPE_BUG",
				type2: "POKEMON_TYPE_FLYING",
				camera: {
					diskRadiusM: 1.14,
					cylinderRadiusM: .76,
					cylinderHeightM: 1.2,
					cylinderGroundM: .4,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .24,
					baseFleeRate: .09,
					collisionRadiusM: .4,
					collisionHeightM: 1,
					collisionHeadRadiusM: .2,
					movementType: "MOVEMENT_FLYING",
					movementTimerS: 14,
					jumpTimeS: 1,
					attackTimerS: 5
				},
				stats: {
					baseStamina: 140,
					baseAttack: 218,
					baseDefense: 170
				},
				quickMoves: ["FURY_CUTTER_FAST", "STEEL_WING_FAST"],
				cinematicMoves: ["NIGHT_SLASH", "X_SCISSOR", "BUG_BUZZ"],
				animationTime: [1.7333, .6667, 1.6667, .6667, 0, 2, 2, 0],
				evolutionPips: 1,
				pokedexHeightM: 1.5,
				pokedexWeightKg: 56,
				heightStdDev: .1875,
				weightStdDev: 7,
				familyId: "FAMILY_SCYTHER",
				kmBuddyDistance: 2.5,
				modelHeight: 1.5
			}
		}, {
			templateId: "V0124_POKEMON_JYNX",
			pokemonSettings: {
				pokemonId: "JYNX",
				modelScale: .87,
				type: "POKEMON_TYPE_ICE",
				type2: "POKEMON_TYPE_PSYCHIC",
				camera: {
					diskRadiusM: .9788,
					cylinderRadiusM: .6525,
					cylinderHeightM: 1.218,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .24,
					baseFleeRate: .09,
					collisionRadiusM: .435,
					collisionHeightM: .87,
					collisionHeadRadiusM: .522,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 4,
					jumpTimeS: 1.25,
					attackTimerS: 11
				},
				stats: {
					baseStamina: 130,
					baseAttack: 223,
					baseDefense: 182
				},
				quickMoves: ["FROST_BREATH_FAST", "POUND_FAST"],
				cinematicMoves: ["DRAINING_KISS", "ICE_PUNCH", "PSYSHOCK"],
				animationTime: [2.2667, .6667, 1.6667, 1.7667, 0, 1.8667, 2, 0],
				evolutionPips: 1,
				pokedexHeightM: 1.4,
				pokedexWeightKg: 40.6,
				parentPokemonId: "SMOOCHUM",
				heightStdDev: .175,
				weightStdDev: 5.075,
				familyId: "FAMILY_JYNX",
				kmBuddyDistance: 2.5,
				modelHeight: 1.4
			}
		}, {
			templateId: "V0125_MOVE_SWIFT",
			moveSettings: {
				movementId: "SWIFT",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_NORMAL",
				power: 30,
				accuracyChance: 1,
				criticalChance: .05,
				staminaLossScalar: .06,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "swift",
				durationMs: 3e3,
				damageWindowStartMs: 2300,
				damageWindowEndMs: 2800,
				energyDelta: -25
			}
		}, {
			templateId: "V0125_POKEMON_ELECTABUZZ",
			pokemonSettings: {
				pokemonId: "ELECTABUZZ",
				modelScale: .98,
				type: "POKEMON_TYPE_ELECTRIC",
				camera: {
					diskRadiusM: .8453,
					cylinderRadiusM: .5635,
					cylinderHeightM: .98,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .24,
					baseFleeRate: .09,
					collisionRadiusM: .392,
					collisionHeightM: .735,
					collisionHeadRadiusM: .28175,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 6,
					jumpTimeS: 1,
					attackTimerS: 17
				},
				stats: {
					baseStamina: 130,
					baseAttack: 198,
					baseDefense: 173
				},
				quickMoves: ["THUNDER_SHOCK_FAST", "LOW_KICK_FAST"],
				cinematicMoves: ["THUNDER_PUNCH", "THUNDERBOLT", "THUNDER"],
				animationTime: [1.5, .6667, 1.5, 1.5, 0, 1.6667, 1.3333, 0],
				evolutionPips: 1,
				pokedexHeightM: 1.1,
				pokedexWeightKg: 30,
				parentPokemonId: "ELEKID",
				heightStdDev: .1375,
				weightStdDev: 3.75,
				familyId: "FAMILY_ELECTABUZZ",
				kmBuddyDistance: 2.5,
				modelHeight: 1.2
			}
		}, {
			templateId: "V0126_MOVE_HORN_ATTACK",
			moveSettings: {
				movementId: "HORN_ATTACK",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_NORMAL",
				power: 25,
				accuracyChance: 1,
				criticalChance: .05,
				staminaLossScalar: .065,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "hornAttack",
				durationMs: 2200,
				damageWindowStartMs: 1600,
				damageWindowEndMs: 1900,
				energyDelta: -25
			}
		}, {
			templateId: "V0126_POKEMON_MAGMAR",
			pokemonSettings: {
				pokemonId: "MAGMAR",
				modelScale: .88,
				type: "POKEMON_TYPE_FIRE",
				camera: {
					diskRadiusM: .99,
					cylinderRadiusM: .66,
					cylinderHeightM: 1.144,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .24,
					baseFleeRate: .09,
					collisionRadiusM: .44,
					collisionHeightM: .88,
					collisionHeadRadiusM: .33,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 14,
					jumpTimeS: 1.25,
					attackTimerS: 5
				},
				stats: {
					baseStamina: 130,
					baseAttack: 206,
					baseDefense: 169
				},
				quickMoves: ["EMBER_FAST", "KARATE_CHOP_FAST"],
				cinematicMoves: ["FIRE_BLAST", "FIRE_PUNCH", "FLAMETHROWER"],
				animationTime: [1.6667, .6667, 1.6667, 1.8333, 8, 2, 2, 0],
				evolutionPips: 1,
				pokedexHeightM: 1.3,
				pokedexWeightKg: 44.5,
				parentPokemonId: "MAGBY",
				heightStdDev: .1625,
				weightStdDev: 5.5625,
				familyId: "FAMILY_MAGMAR",
				kmBuddyDistance: 2.5,
				modelHeight: 1.35
			}
		}, {
			templateId: "V0127_MOVE_STOMP",
			moveSettings: {
				movementId: "STOMP",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_NORMAL",
				power: 30,
				accuracyChance: 1,
				criticalChance: .05,
				staminaLossScalar: .065,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "stomp",
				durationMs: 2100,
				damageWindowStartMs: 1200,
				damageWindowEndMs: 1900,
				energyDelta: -25
			}
		}, {
			templateId: "V0127_POKEMON_PINSIR",
			pokemonSettings: {
				pokemonId: "PINSIR",
				modelScale: .87,
				type: "POKEMON_TYPE_BUG",
				camera: {
					diskRadiusM: .522,
					cylinderRadiusM: .348,
					cylinderHeightM: 1.131,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .24,
					baseFleeRate: .09,
					collisionRadiusM: .348,
					collisionHeightM: .87,
					collisionHeadRadiusM: .348,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 8,
					jumpTimeS: 1.25,
					attackTimerS: 3
				},
				stats: {
					baseStamina: 130,
					baseAttack: 238,
					baseDefense: 197
				},
				quickMoves: ["ROCK_SMASH_FAST", "FURY_CUTTER_FAST"],
				cinematicMoves: ["VICE_GRIP", "X_SCISSOR", "SUBMISSION"],
				animationTime: [2, .6667, 1.6667, 1.8333, 0, 2, 1.3333, 0],
				evolutionPips: 1,
				pokedexHeightM: 1.5,
				pokedexWeightKg: 55,
				heightStdDev: .1875,
				weightStdDev: 6.875,
				familyId: "FAMILY_PINSIR",
				kmBuddyDistance: 2.5,
				modelHeight: 1.4
			}
		}, {
			templateId: "V0128_POKEMON_TAUROS",
			pokemonSettings: {
				pokemonId: "TAUROS",
				modelScale: .87,
				type: "POKEMON_TYPE_NORMAL",
				camera: {
					diskRadiusM: .8613,
					cylinderRadiusM: .5742,
					cylinderHeightM: 1.19625,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .24,
					baseFleeRate: .09,
					collisionRadiusM: .435,
					collisionHeightM: 1.19625,
					collisionHeadRadiusM: .2871,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 4,
					jumpTimeS: 1.2,
					attackTimerS: 11
				},
				stats: {
					baseStamina: 150,
					baseAttack: 198,
					baseDefense: 197
				},
				quickMoves: ["TACKLE_FAST", "ZEN_HEADBUTT_FAST"],
				cinematicMoves: ["HORN_ATTACK", "IRON_HEAD", "EARTHQUAKE"],
				animationTime: [2.3333, .6667, 1.6667, 2, 0, 1.6667, 1.6, 0],
				evolutionPips: 1,
				pokedexHeightM: 1.4,
				pokedexWeightKg: 88.4,
				heightStdDev: .175,
				weightStdDev: 11.05,
				familyId: "FAMILY_TAUROS",
				kmBuddyDistance: 1.5,
				modelHeight: 1.4
			}
		}, {
			templateId: "V0129_MOVE_HYPER_FANG",
			moveSettings: {
				movementId: "HYPER_FANG",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_NORMAL",
				power: 35,
				accuracyChance: 1,
				criticalChance: .05,
				staminaLossScalar: .08,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "hyperFang",
				durationMs: 2100,
				damageWindowStartMs: 1700,
				damageWindowEndMs: 2e3,
				energyDelta: -33
			}
		}, {
			templateId: "V0129_POKEMON_MAGIKARP",
			pokemonSettings: {
				pokemonId: "MAGIKARP",
				modelScale: 1.07,
				type: "POKEMON_TYPE_WATER",
				camera: {
					diskRadiusM: .642,
					cylinderRadiusM: .428,
					cylinderHeightM: .535,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .56,
					baseFleeRate: .15,
					collisionRadiusM: .2675,
					collisionHeightM: .4815,
					collisionHeadRadiusM: .321,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 3600,
					jumpTimeS: 1.3,
					attackTimerS: 3600
				},
				stats: {
					baseStamina: 40,
					baseAttack: 29,
					baseDefense: 102
				},
				quickMoves: ["SPLASH_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 0, 1.5, 0, 0, 1, 0],
				evolutionIds: ["GYARADOS"],
				evolutionPips: 1,
				pokedexHeightM: .9,
				pokedexWeightKg: 10,
				heightStdDev: .1125,
				weightStdDev: 1.25,
				familyId: "FAMILY_MAGIKARP",
				candyToEvolve: 400,
				kmBuddyDistance: .5,
				modelHeight: .85
			}
		}, {
			templateId: "V0130_POKEMON_GYARADOS",
			pokemonSettings: {
				pokemonId: "GYARADOS",
				modelScale: .48,
				type: "POKEMON_TYPE_WATER",
				type2: "POKEMON_TYPE_FLYING",
				camera: {
					diskRadiusM: .72,
					cylinderRadiusM: .48,
					cylinderHeightM: 1.2,
					cylinderGroundM: .48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .08,
					baseFleeRate: .07,
					collisionRadiusM: .24,
					collisionHeightM: .48,
					collisionHeadRadiusM: .36,
					movementType: "MOVEMENT_HOVERING",
					movementTimerS: 8,
					jumpTimeS: 1,
					attackTimerS: 3
				},
				stats: {
					baseStamina: 190,
					baseAttack: 237,
					baseDefense: 197
				},
				quickMoves: ["BITE_FAST"],
				cinematicMoves: ["HYDRO_PUMP", "TWISTER", "DRAGON_PULSE"],
				animationTime: [2, .6667, 1.5, .6667, 0, 2.3333, 2, 2],
				evolutionPips: 1,
				pokedexHeightM: 6.5,
				pokedexWeightKg: 235,
				parentPokemonId: "MAGIKARP",
				heightStdDev: .8125,
				weightStdDev: 29.375,
				familyId: "FAMILY_MAGIKARP",
				kmBuddyDistance: .5,
				modelHeight: 5.56
			}
		}, {
			templateId: "V0131_MOVE_BODY_SLAM",
			moveSettings: {
				movementId: "BODY_SLAM",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_NORMAL",
				power: 40,
				accuracyChance: 1,
				criticalChance: .05,
				staminaLossScalar: .085,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "bodySlam",
				durationMs: 1560,
				damageWindowStartMs: 1100,
				damageWindowEndMs: 1300,
				energyDelta: -50
			}
		}, {
			templateId: "V0131_POKEMON_LAPRAS",
			pokemonSettings: {
				pokemonId: "LAPRAS",
				modelScale: .7,
				type: "POKEMON_TYPE_WATER",
				type2: "POKEMON_TYPE_ICE",
				camera: {
					diskRadiusM: 1.05,
					cylinderRadiusM: .7,
					cylinderHeightM: 1.75,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .16,
					baseFleeRate: .09,
					collisionRadiusM: .525,
					collisionHeightM: .7,
					collisionHeadRadiusM: .35,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 3,
					jumpTimeS: 1.2,
					attackTimerS: 8
				},
				stats: {
					baseStamina: 260,
					baseAttack: 186,
					baseDefense: 190
				},
				quickMoves: ["FROST_BREATH_FAST", "ICE_SHARD_FAST"],
				cinematicMoves: ["DRAGON_PULSE", "ICE_BEAM", "BLIZZARD"],
				animationTime: [2.6667, .6667, 1.6667, 1.9, 0, 2.4, 3, 2.666667],
				evolutionPips: 1,
				pokedexHeightM: 2.5,
				pokedexWeightKg: 220,
				heightStdDev: .3125,
				weightStdDev: 27.5,
				familyId: "FAMILY_LAPRAS",
				kmBuddyDistance: 2.5,
				modelHeight: 2.57
			}
		}, {
			templateId: "V0132_MOVE_REST",
			moveSettings: {
				movementId: "REST",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_NORMAL",
				power: 50,
				accuracyChance: 1,
				healScalar: 1,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "rest",
				durationMs: 3100,
				damageWindowStartMs: 1395,
				damageWindowEndMs: 2691,
				energyDelta: -33
			}
		}, {
			templateId: "V0132_POKEMON_DITTO",
			pokemonSettings: {
				pokemonId: "DITTO",
				modelScale: 1.61,
				type: "POKEMON_TYPE_NORMAL",
				camera: {
					diskRadiusM: .6038,
					cylinderRadiusM: .4025,
					cylinderHeightM: .52325,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .16,
					baseFleeRate: .1,
					collisionRadiusM: .4025,
					collisionHeightM: .52325,
					collisionHeadRadiusM: .20125,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 3600,
					jumpTimeS: 1,
					attackTimerS: 3600
				},
				stats: {
					baseStamina: 96,
					baseAttack: 91,
					baseDefense: 91
				},
				quickMoves: ["TRANSFORM_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [0, .6667, 1.6667, 1.6667, 0, 2, 2, 0],
				evolutionPips: 1,
				pokedexHeightM: .3,
				pokedexWeightKg: 4,
				heightStdDev: .0375,
				weightStdDev: .5,
				familyId: "FAMILY_DITTO",
				kmBuddyDistance: 1.5,
				modelHeight: .33
			}
		}, {
			templateId: "V0133_MOVE_STRUGGLE",
			moveSettings: {
				movementId: "STRUGGLE",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_NORMAL",
				power: 15,
				accuracyChance: 1,
				staminaLossScalar: .1,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "struggle",
				durationMs: 1695,
				damageWindowStartMs: 800,
				damageWindowEndMs: 1500
			}
		}, {
			templateId: "V0133_POKEMON_EEVEE",
			pokemonSettings: {
				pokemonId: "EEVEE",
				modelScale: 1.68,
				type: "POKEMON_TYPE_NORMAL",
				camera: {
					diskRadiusM: .63,
					cylinderRadiusM: .42,
					cylinderHeightM: .504,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .32,
					baseFleeRate: .1,
					collisionRadiusM: .252,
					collisionHeightM: .336,
					collisionHeadRadiusM: .252,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 10,
					jumpTimeS: 1.35,
					attackTimerS: 29
				},
				stats: {
					baseStamina: 110,
					baseAttack: 104,
					baseDefense: 121
				},
				quickMoves: ["QUICK_ATTACK_FAST", "TACKLE_FAST"],
				cinematicMoves: ["DIG", "SWIFT", "BODY_SLAM"],
				animationTime: [2.4667, .6667, 2.0667, 1.8333, 0, 2.3333, .8667, 1.233333],
				evolutionIds: ["VAPOREON", "JOLTEON", "FLAREON"],
				evolutionPips: 1,
				pokedexHeightM: .3,
				pokedexWeightKg: 6.5,
				heightStdDev: .0375,
				weightStdDev: .8125,
				familyId: "FAMILY_EEVEE",
				candyToEvolve: 25,
				kmBuddyDistance: 2.5,
				modelHeight: .3
			}
		}, {
			templateId: "V0134_MOVE_SCALD_BLASTOISE",
			moveSettings: {
				movementId: "SCALD_BLASTOISE",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_WATER",
				power: 50,
				accuracyChance: 1,
				criticalChance: .05,
				staminaLossScalar: .08,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "scaldBlastoise",
				durationMs: 4e3,
				damageWindowStartMs: 1800,
				damageWindowEndMs: 3900,
				energyDelta: -33
			}
		}, {
			templateId: "V0134_POKEMON_VAPOREON",
			pokemonSettings: {
				pokemonId: "VAPOREON",
				modelScale: 1.05,
				type: "POKEMON_TYPE_WATER",
				camera: {
					diskRadiusM: .5198,
					cylinderRadiusM: .3465,
					cylinderHeightM: .94499987,
					shoulderModeScale: .4
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .06,
					collisionRadiusM: .21,
					collisionHeightM: .525,
					collisionHeadRadiusM: .2625,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 3,
					jumpTimeS: 1,
					attackTimerS: 8
				},
				stats: {
					baseStamina: 260,
					baseAttack: 205,
					baseDefense: 177
				},
				quickMoves: ["WATER_GUN_FAST"],
				cinematicMoves: ["WATER_PULSE", "HYDRO_PUMP", "AQUA_TAIL"],
				animationTime: [1.8667, .6667, 1.9, 1.7, 0, 2, 2.1333, 2.133333],
				evolutionPips: 1,
				pokedexHeightM: 1,
				pokedexWeightKg: 29,
				parentPokemonId: "EEVEE",
				heightStdDev: .125,
				weightStdDev: 3.625,
				familyId: "FAMILY_EEVEE",
				kmBuddyDistance: 2.5,
				modelHeight: .89
			}
		}, {
			templateId: "V0135_MOVE_HYDRO_PUMP_BLASTOISE",
			moveSettings: {
				movementId: "HYDRO_PUMP_BLASTOISE",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_WATER",
				power: 90,
				accuracyChance: 1,
				criticalChance: .05,
				staminaLossScalar: .11,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "hydro_pumpBlastoise",
				durationMs: 3800,
				damageWindowStartMs: 1500,
				damageWindowEndMs: 3600,
				energyDelta: -100
			}
		}, {
			templateId: "V0135_POKEMON_JOLTEON",
			pokemonSettings: {
				pokemonId: "JOLTEON",
				modelScale: 1.1,
				type: "POKEMON_TYPE_ELECTRIC",
				camera: {
					diskRadiusM: .495,
					cylinderRadiusM: .33,
					cylinderHeightM: .88000011,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .06,
					collisionRadiusM: .22,
					collisionHeightM: .55,
					collisionHeadRadiusM: .22,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 4,
					jumpTimeS: 1.3,
					attackTimerS: 11
				},
				stats: {
					baseStamina: 130,
					baseAttack: 232,
					baseDefense: 201
				},
				quickMoves: ["THUNDER_SHOCK_FAST"],
				cinematicMoves: ["DISCHARGE", "THUNDERBOLT", "THUNDER"],
				animationTime: [2.6333, .6667, 1.9333, 2.3333, 0, 2.6667, 1.3333, 1.866667],
				evolutionPips: 1,
				pokedexHeightM: .8,
				pokedexWeightKg: 24.5,
				parentPokemonId: "EEVEE",
				heightStdDev: .1,
				weightStdDev: 3.0625,
				familyId: "FAMILY_EEVEE",
				kmBuddyDistance: 2.5,
				modelHeight: .8
			}
		}, {
			templateId: "V0136_MOVE_WRAP_GREEN",
			moveSettings: {
				movementId: "WRAP_GREEN",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_NORMAL",
				power: 25,
				accuracyChance: 1,
				criticalChance: .05,
				staminaLossScalar: .06,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "wrapGreen",
				durationMs: 3700,
				damageWindowStartMs: 2200,
				damageWindowEndMs: 3200,
				energyDelta: -20
			}
		}, {
			templateId: "V0136_POKEMON_FLAREON",
			pokemonSettings: {
				pokemonId: "FLAREON",
				modelScale: .87,
				type: "POKEMON_TYPE_FIRE",
				camera: {
					diskRadiusM: .4568,
					cylinderRadiusM: .3045,
					cylinderHeightM: .783,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .06,
					collisionRadiusM: .2175,
					collisionHeightM: .522,
					collisionHeadRadiusM: .19575,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 3,
					jumpTimeS: 1.35,
					attackTimerS: 8
				},
				stats: {
					baseStamina: 130,
					baseAttack: 246,
					baseDefense: 204
				},
				quickMoves: ["EMBER_FAST"],
				cinematicMoves: ["FIRE_BLAST", "FLAMETHROWER", "HEAT_WAVE"],
				animationTime: [2.5, .6667, 1.6667, 2.0667, 0, 2.3333, 1, 2.666667],
				evolutionPips: 1,
				pokedexHeightM: .9,
				pokedexWeightKg: 25,
				parentPokemonId: "EEVEE",
				heightStdDev: .1125,
				weightStdDev: 3.125,
				familyId: "FAMILY_EEVEE",
				kmBuddyDistance: 2.5,
				modelHeight: 1.27
			}
		}, {
			templateId: "V0137_MOVE_WRAP_PINK",
			moveSettings: {
				movementId: "WRAP_PINK",
				animationId: 5,
				pokemonType: "POKEMON_TYPE_NORMAL",
				power: 25,
				accuracyChance: 1,
				criticalChance: .05,
				staminaLossScalar: .06,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "wrap_pink",
				durationMs: 3700,
				damageWindowStartMs: 2200,
				damageWindowEndMs: 3200,
				energyDelta: -20
			}
		}, {
			templateId: "V0137_POKEMON_PORYGON",
			pokemonSettings: {
				pokemonId: "PORYGON",
				modelScale: 1.1,
				type: "POKEMON_TYPE_NORMAL",
				camera: {
					diskRadiusM: .825,
					cylinderRadiusM: .55,
					cylinderHeightM: .93500012,
					cylinderGroundM: .55,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .32,
					baseFleeRate: .09,
					collisionRadiusM: .385,
					collisionHeightM: .55,
					collisionHeadRadiusM: .33,
					movementType: "MOVEMENT_HOVERING",
					movementTimerS: 8,
					jumpTimeS: 1,
					attackTimerS: 23
				},
				stats: {
					baseStamina: 130,
					baseAttack: 153,
					baseDefense: 139
				},
				quickMoves: ["ZEN_HEADBUTT_FAST", "TACKLE_FAST"],
				cinematicMoves: ["PSYBEAM", "SIGNAL_BEAM", "DISCHARGE"],
				animationTime: [1.8333, .6667, 0, .6667, 0, 2.6667, 1.6, 0],
				evolutionPips: 1,
				pokedexHeightM: .8,
				pokedexWeightKg: 36.5,
				heightStdDev: .1,
				weightStdDev: 4.5625,
				familyId: "FAMILY_PORYGON",
				kmBuddyDistance: 1.5,
				modelHeight: .8
			}
		}, {
			templateId: "V0138_POKEMON_OMANYTE",
			pokemonSettings: {
				pokemonId: "OMANYTE",
				modelScale: 1.48,
				type: "POKEMON_TYPE_ROCK",
				type2: "POKEMON_TYPE_WATER",
				camera: {
					diskRadiusM: .333,
					cylinderRadiusM: .222,
					cylinderHeightM: .592,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .32,
					baseFleeRate: .09,
					collisionRadiusM: .222,
					collisionHeightM: .592,
					collisionHeadRadiusM: .111,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 8,
					jumpTimeS: 1.3,
					attackTimerS: 23
				},
				stats: {
					baseStamina: 70,
					baseAttack: 155,
					baseDefense: 174
				},
				quickMoves: ["WATER_GUN_FAST", "MUD_SHOT_FAST"],
				cinematicMoves: ["ANCIENT_POWER", "BRINE", "ROCK_TOMB"],
				animationTime: [2, .6667, 1.6667, 1.8333, 0, 2.3333, 2.6667, 0],
				evolutionIds: ["OMASTAR"],
				evolutionPips: 1,
				pokedexHeightM: .4,
				pokedexWeightKg: 7.5,
				heightStdDev: .05,
				weightStdDev: .9375,
				familyId: "FAMILY_OMANYTE",
				candyToEvolve: 50,
				kmBuddyDistance: 2.5,
				modelHeight: .4
			}
		}, {
			templateId: "V0139_POKEMON_OMASTAR",
			pokemonSettings: {
				pokemonId: "OMASTAR",
				modelScale: 1,
				type: "POKEMON_TYPE_ROCK",
				type2: "POKEMON_TYPE_WATER",
				camera: {
					diskRadiusM: .5625,
					cylinderRadiusM: .375,
					cylinderHeightM: 1,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .25,
					collisionHeightM: .9,
					collisionHeadRadiusM: .1875,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 3,
					jumpTimeS: 1.25,
					attackTimerS: 8
				},
				stats: {
					baseStamina: 140,
					baseAttack: 207,
					baseDefense: 227
				},
				quickMoves: ["MUD_SHOT_FAST", "WATER_GUN_FAST"],
				cinematicMoves: ["ANCIENT_POWER", "HYDRO_PUMP", "ROCK_SLIDE"],
				animationTime: [2, .6667, 1.6667, 1.8333, 0, 2, 2.6667, 0],
				evolutionPips: 1,
				pokedexHeightM: 1,
				pokedexWeightKg: 35,
				parentPokemonId: "OMANYTE",
				heightStdDev: .125,
				weightStdDev: 4.375,
				familyId: "FAMILY_OMANYTE",
				kmBuddyDistance: 2.5,
				modelHeight: 1
			}
		}, {
			templateId: "V0140_POKEMON_KABUTO",
			pokemonSettings: {
				pokemonId: "KABUTO",
				modelScale: 1.35,
				type: "POKEMON_TYPE_ROCK",
				type2: "POKEMON_TYPE_WATER",
				camera: {
					diskRadiusM: .5063,
					cylinderRadiusM: .3375,
					cylinderHeightM: .50625,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .32,
					baseFleeRate: .09,
					collisionRadiusM: .3375,
					collisionHeightM: .50625,
					collisionHeadRadiusM: .16875,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 8,
					jumpTimeS: .9,
					attackTimerS: 23
				},
				stats: {
					baseStamina: 60,
					baseAttack: 148,
					baseDefense: 162
				},
				quickMoves: ["SCRATCH_FAST", "MUD_SHOT_FAST"],
				cinematicMoves: ["ANCIENT_POWER", "AQUA_JET", "ROCK_TOMB"],
				animationTime: [0, .6667, 0, 1.5, 0, 2, 2, 0],
				evolutionIds: ["KABUTOPS"],
				evolutionPips: 1,
				pokedexHeightM: .5,
				pokedexWeightKg: 11.5,
				heightStdDev: .0625,
				weightStdDev: 1.4375,
				familyId: "FAMILY_KABUTO",
				candyToEvolve: 50,
				kmBuddyDistance: 2.5,
				modelHeight: .5
			}
		}, {
			templateId: "V0141_POKEMON_KABUTOPS",
			pokemonSettings: {
				pokemonId: "KABUTOPS",
				modelScale: .91,
				type: "POKEMON_TYPE_ROCK",
				type2: "POKEMON_TYPE_WATER",
				camera: {
					diskRadiusM: .6825,
					cylinderRadiusM: .455,
					cylinderHeightM: 1.1375,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 4
				},
				stats: {
					baseStamina: 120,
					baseAttack: 220,
					baseDefense: 203
				},
				quickMoves: ["MUD_SHOT_FAST", "FURY_CUTTER_FAST"],
				cinematicMoves: ["ANCIENT_POWER", "WATER_PULSE", "STONE_EDGE"],
				animationTime: [2.1667, .6667, 1.6667, 1.6, 0, 2.2, 1.2, 0],
				evolutionPips: 1,
				pokedexHeightM: 1.3,
				pokedexWeightKg: 40.5,
				parentPokemonId: "KABUTO",
				heightStdDev: .1625,
				weightStdDev: 5.0625,
				familyId: "FAMILY_KABUTO",
				kmBuddyDistance: 2.5,
				modelHeight: 1.25
			}
		}, {
			templateId: "V0142_POKEMON_AERODACTYL",
			pokemonSettings: {
				pokemonId: "AERODACTYL",
				modelScale: .57,
				type: "POKEMON_TYPE_ROCK",
				type2: "POKEMON_TYPE_FLYING",
				camera: {
					diskRadiusM: .5985,
					cylinderRadiusM: .399,
					cylinderHeightM: .9975,
					cylinderGroundM: .855,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .16,
					baseFleeRate: .09,
					collisionRadiusM: .285,
					collisionHeightM: .9975,
					collisionHeadRadiusM: .285,
					movementType: "MOVEMENT_FLYING",
					movementTimerS: 5,
					jumpTimeS: 1,
					attackTimerS: 14
				},
				stats: {
					baseStamina: 160,
					baseAttack: 221,
					baseDefense: 164
				},
				quickMoves: ["STEEL_WING_FAST", "BITE_FAST"],
				cinematicMoves: ["ANCIENT_POWER", "IRON_HEAD", "HYPER_BEAM"],
				animationTime: [2.1667, .9, 1.5, .7333, 0, 2, 1.3333, 1.666667],
				evolutionPips: 1,
				pokedexHeightM: 1.8,
				pokedexWeightKg: 59,
				heightStdDev: .225,
				weightStdDev: 7.375,
				familyId: "FAMILY_AERODACTYL",
				kmBuddyDistance: 2.5,
				modelHeight: 3.7
			}
		}, {
			templateId: "V0143_POKEMON_SNORLAX",
			pokemonSettings: {
				pokemonId: "SNORLAX",
				modelScale: .74,
				type: "POKEMON_TYPE_NORMAL",
				camera: {
					diskRadiusM: 1.11,
					cylinderRadiusM: .74,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .16,
					baseFleeRate: .09,
					collisionRadiusM: .74,
					collisionHeightM: 1.11,
					collisionHeadRadiusM: .481,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 3,
					jumpTimeS: 1,
					attackTimerS: 8
				},
				stats: {
					baseStamina: 320,
					baseAttack: 190,
					baseDefense: 190
				},
				quickMoves: ["ZEN_HEADBUTT_FAST", "LICK_FAST"],
				cinematicMoves: ["BODY_SLAM", "HYPER_BEAM", "EARTHQUAKE"],
				animationTime: [2.4, .6667, 1.8333, 1.6667, 0, 2.5, 2.5, 2.333333],
				evolutionPips: 1,
				pokedexHeightM: 2.1,
				pokedexWeightKg: 460,
				heightStdDev: .2625,
				weightStdDev: 57.5,
				familyId: "FAMILY_SNORLAX",
				kmBuddyDistance: 2.5,
				modelHeight: 2
			}
		}, {
			templateId: "V0144_POKEMON_ARTICUNO",
			pokemonSettings: {
				pokemonId: "ARTICUNO",
				modelScale: .66,
				type: "POKEMON_TYPE_ICE",
				type2: "POKEMON_TYPE_FLYING",
				camera: {
					diskRadiusM: .594,
					cylinderRadiusM: .396,
					cylinderHeightM: .99,
					cylinderGroundM: .66,
					shoulderModeScale: .5
				},
				encounter: {
					baseFleeRate: .1,
					collisionRadiusM: .231,
					collisionHeightM: .66,
					collisionHeadRadiusM: .231,
					movementType: "MOVEMENT_FLYING",
					movementTimerS: 3,
					jumpTimeS: 1,
					attackTimerS: 8
				},
				stats: {
					baseStamina: 180,
					baseAttack: 192,
					baseDefense: 249
				},
				quickMoves: ["FROST_BREATH_FAST"],
				cinematicMoves: ["ICE_BEAM", "ICY_WIND", "BLIZZARD"],
				animationTime: [2.0667, 1, 1.6667, .6667, 0, 2.4, 1.3333, 1.333333],
				evolutionPips: 1,
				pokedexHeightM: 1.7,
				pokedexWeightKg: 55.4,
				heightStdDev: .2125,
				weightStdDev: 6.925,
				familyId: "FAMILY_ARTICUNO",
				kmBuddyDistance: 2.5,
				modelHeight: 2.6
			}
		}, {
			templateId: "V0145_POKEMON_ZAPDOS",
			pokemonSettings: {
				pokemonId: "ZAPDOS",
				modelScale: .69,
				type: "POKEMON_TYPE_ELECTRIC",
				type2: "POKEMON_TYPE_FLYING",
				camera: {
					diskRadiusM: .7763,
					cylinderRadiusM: .5175,
					cylinderHeightM: 1.035,
					cylinderGroundM: .8625,
					shoulderModeScale: .5
				},
				encounter: {
					baseFleeRate: .1,
					collisionRadiusM: .4485,
					collisionHeightM: .759,
					collisionHeadRadiusM: .276,
					movementType: "MOVEMENT_ELECTRIC",
					movementTimerS: 3,
					jumpTimeS: 1,
					attackTimerS: 8
				},
				stats: {
					baseStamina: 180,
					baseAttack: 253,
					baseDefense: 188
				},
				quickMoves: ["THUNDER_SHOCK_FAST"],
				cinematicMoves: ["DISCHARGE", "THUNDERBOLT", "THUNDER"],
				animationTime: [1.6, .8333, 1.5, .8333, 0, 2, 1, 1.666667],
				evolutionPips: 1,
				pokedexHeightM: 1.6,
				pokedexWeightKg: 52.6,
				heightStdDev: .2,
				weightStdDev: 6.575,
				familyId: "FAMILY_ZAPDOS",
				kmBuddyDistance: 2.5,
				modelHeight: 2.36
			}
		}, {
			templateId: "V0146_POKEMON_MOLTRES",
			pokemonSettings: {
				pokemonId: "MOLTRES",
				modelScale: .62,
				type: "POKEMON_TYPE_FIRE",
				type2: "POKEMON_TYPE_FLYING",
				camera: {
					diskRadiusM: .93,
					cylinderRadiusM: .62,
					cylinderHeightM: 1.395,
					cylinderGroundM: .93,
					shoulderModeScale: .25
				},
				encounter: {
					baseFleeRate: .1,
					collisionRadiusM: .403,
					collisionHeightM: .93,
					collisionHeadRadiusM: .217,
					movementType: "MOVEMENT_FLYING",
					movementTimerS: 3,
					jumpTimeS: 1,
					attackTimerS: 8
				},
				stats: {
					baseStamina: 180,
					baseAttack: 251,
					baseDefense: 184
				},
				quickMoves: ["EMBER_FAST"],
				cinematicMoves: ["FIRE_BLAST", "HEAT_WAVE", "FLAMETHROWER"],
				animationTime: [2.7333, 1.3333, 2, 1.1667, 0, 2.5, 1.8, 1.8],
				evolutionPips: 1,
				pokedexHeightM: 2,
				pokedexWeightKg: 60,
				heightStdDev: .25,
				weightStdDev: 7.5,
				familyId: "FAMILY_MOLTRES",
				kmBuddyDistance: 2.5,
				modelHeight: 3
			}
		}, {
			templateId: "V0147_POKEMON_DRATINI",
			pokemonSettings: {
				pokemonId: "DRATINI",
				modelScale: 1.11,
				type: "POKEMON_TYPE_DRAGON",
				camera: {
					diskRadiusM: .4163,
					cylinderRadiusM: .2775,
					cylinderHeightM: .8325,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .32,
					baseFleeRate: .09,
					collisionRadiusM: .2775,
					collisionHeightM: .555,
					collisionHeadRadiusM: .19425,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 10,
					jumpTimeS: .85,
					attackTimerS: 29
				},
				stats: {
					baseStamina: 82,
					baseAttack: 119,
					baseDefense: 94
				},
				quickMoves: ["DRAGON_BREATH_FAST"],
				cinematicMoves: ["WRAP", "TWISTER", "AQUA_TAIL"],
				animationTime: [1.6667, .6667, 1.8333, 1.4333, 0, 2, 1.6, 0],
				evolutionIds: ["DRAGONAIR"],
				evolutionPips: 1,
				pokedexHeightM: 1.8,
				pokedexWeightKg: 3.3,
				heightStdDev: .225,
				weightStdDev: .4125,
				familyId: "FAMILY_DRATINI",
				candyToEvolve: 25,
				kmBuddyDistance: 2.5,
				modelHeight: .78
			}
		}, {
			templateId: "V0148_POKEMON_DRAGONAIR",
			pokemonSettings: {
				pokemonId: "DRAGONAIR",
				modelScale: .75,
				type: "POKEMON_TYPE_DRAGON",
				camera: {
					diskRadiusM: .8438,
					cylinderRadiusM: .5625,
					cylinderHeightM: 1.5,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .08,
					baseFleeRate: .06,
					collisionRadiusM: .375,
					collisionHeightM: 1.125,
					collisionHeadRadiusM: .28125,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 8,
					jumpTimeS: 1.25,
					attackTimerS: 23
				},
				stats: {
					baseStamina: 122,
					baseAttack: 163,
					baseDefense: 138
				},
				quickMoves: ["DRAGON_BREATH_FAST"],
				cinematicMoves: ["WRAP", "AQUA_TAIL", "DRAGON_PULSE"],
				animationTime: [1.6, .6667, 1.6667, 2, 0, 2.5, 2, 2],
				evolutionIds: ["DRAGONITE"],
				evolutionPips: 1,
				pokedexHeightM: 4,
				pokedexWeightKg: 16.5,
				parentPokemonId: "DRATINI",
				heightStdDev: .5,
				weightStdDev: 2.0625,
				familyId: "FAMILY_DRATINI",
				candyToEvolve: 100,
				kmBuddyDistance: 2.5,
				modelHeight: 1.95
			}
		}, {
			templateId: "V0149_POKEMON_DRAGONITE",
			pokemonSettings: {
				pokemonId: "DRAGONITE",
				modelScale: .7,
				type: "POKEMON_TYPE_DRAGON",
				type2: "POKEMON_TYPE_FLYING",
				camera: {
					diskRadiusM: .63,
					cylinderRadiusM: .42,
					cylinderHeightM: 1.47,
					cylinderGroundM: .595,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .04,
					baseFleeRate: .05,
					collisionRadiusM: .42,
					collisionHeightM: 1.05,
					collisionHeadRadiusM: .245,
					movementType: "MOVEMENT_FLYING",
					movementTimerS: 3,
					jumpTimeS: 1,
					attackTimerS: 8
				},
				stats: {
					baseStamina: 182,
					baseAttack: 263,
					baseDefense: 201
				},
				quickMoves: ["DRAGON_BREATH_FAST", "STEEL_WING_FAST"],
				cinematicMoves: ["DRAGON_PULSE", "HYPER_BEAM", "DRAGON_CLAW"],
				animationTime: [2.6667, .6667, 1.6667, .8333, 0, 2.6667, 1.5, 1.5],
				evolutionPips: 1,
				pokedexHeightM: 2.2,
				pokedexWeightKg: 210,
				parentPokemonId: "DRAGONAIR",
				heightStdDev: .275,
				weightStdDev: 26.25,
				familyId: "FAMILY_DRATINI",
				kmBuddyDistance: 2.5,
				modelHeight: 2.28
			}
		}, {
			templateId: "V0150_POKEMON_MEWTWO",
			pokemonSettings: {
				pokemonId: "MEWTWO",
				modelScale: .74,
				type: "POKEMON_TYPE_PSYCHIC",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseFleeRate: .1,
					collisionRadiusM: .37,
					collisionHeightM: 1.184,
					collisionHeadRadiusM: .185,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 8,
					jumpTimeS: 1.2,
					attackTimerS: 3
				},
				stats: {
					baseStamina: 212,
					baseAttack: 330,
					baseDefense: 200
				},
				quickMoves: ["PSYCHO_CUT_FAST", "CONFUSION_FAST"],
				cinematicMoves: ["PSYCHIC", "SHADOW_BALL", "HYPER_BEAM"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionPips: 1,
				pokedexHeightM: 2,
				pokedexWeightKg: 122,
				heightStdDev: .25,
				weightStdDev: 15.25,
				familyId: "FAMILY_MEWTWO",
				kmBuddyDistance: 2.5,
				modelHeight: 2
			}
		}, {
			templateId: "V0151_POKEMON_MEW",
			pokemonSettings: {
				pokemonId: "MEW",
				modelScale: 1.41,
				type: "POKEMON_TYPE_PSYCHIC",
				camera: {
					diskRadiusM: .423,
					cylinderRadiusM: .282,
					cylinderHeightM: .7755,
					cylinderGroundM: .0705,
					shoulderModeScale: .5
				},
				encounter: {
					baseFleeRate: .1,
					collisionRadiusM: .141,
					collisionHeightM: .564,
					collisionHeadRadiusM: .17625,
					movementType: "MOVEMENT_PSYCHIC",
					movementTimerS: 3,
					jumpTimeS: 1,
					attackTimerS: 8
				},
				stats: {
					baseStamina: 200,
					baseAttack: 210,
					baseDefense: 210
				},
				quickMoves: ["POUND_FAST"],
				cinematicMoves: ["BLIZZARD", "EARTHQUAKE", "PSYCHIC", "DRAGON_PULSE", "THUNDER", "FIRE_BLAST", "SOLAR_BEAM", "HYPER_BEAM"],
				animationTime: [2.6667, .6667, 1.6667, .6667, 0, 2.6667, 1.6667, 2],
				evolutionPips: 1,
				pokedexHeightM: .4,
				pokedexWeightKg: 4,
				heightStdDev: .05,
				weightStdDev: .5,
				familyId: "FAMILY_MEW",
				kmBuddyDistance: 2.5,
				modelHeight: .45
			}
		}, {
			templateId: "V0152_POKEMON_CHIKORITA",
			pokemonSettings: {
				pokemonId: "CHIKORITA",
				modelScale: 1.11,
				type: "POKEMON_TYPE_GRASS",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .32,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 90,
					baseAttack: 92,
					baseDefense: 122
				},
				quickMoves: ["RAZOR_LEAF_FAST", "TACKLE_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionIds: ["BAYLEEF"],
				evolutionPips: 1,
				pokedexHeightM: .89,
				pokedexWeightKg: 6.4,
				heightStdDev: .11125,
				weightStdDev: .8,
				familyId: "FAMILY_CHIKORITA",
				candyToEvolve: 25,
				kmBuddyDistance: 1,
				modelHeight: .78
			}
		}, {
			templateId: "V0153_POKEMON_BAYLEEF",
			pokemonSettings: {
				pokemonId: "BAYLEEF",
				modelScale: .75,
				type: "POKEMON_TYPE_GRASS",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .25,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 120,
					baseAttack: 122,
					baseDefense: 155
				},
				quickMoves: ["RAZOR_LEAF_FAST", "TACKLE_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionIds: ["MEGANIUM"],
				evolutionPips: 1,
				pokedexHeightM: 1.19,
				pokedexWeightKg: 15.8,
				parentPokemonId: "CHIKORITA",
				heightStdDev: .14875,
				weightStdDev: 1.975,
				familyId: "FAMILY_CHIKORITA",
				candyToEvolve: 100,
				kmBuddyDistance: 1,
				modelHeight: 1.95
			}
		}, {
			templateId: "V0154_POKEMON_MEGANIUM",
			pokemonSettings: {
				pokemonId: "MEGANIUM",
				modelScale: .7,
				type: "POKEMON_TYPE_GRASS",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 160,
					baseAttack: 168,
					baseDefense: 202
				},
				quickMoves: ["RAZOR_LEAF_FAST", "VINE_WHIP_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionPips: 1,
				pokedexHeightM: 1.8,
				pokedexWeightKg: 100.5,
				parentPokemonId: "BAYLEEF",
				heightStdDev: .225,
				weightStdDev: 12.5625,
				familyId: "FAMILY_CHIKORITA",
				kmBuddyDistance: 1,
				modelHeight: 2.28
			}
		}, {
			templateId: "V0155_POKEMON_CYNDAQUIL",
			pokemonSettings: {
				pokemonId: "CYNDAQUIL",
				modelScale: 1,
				type: "POKEMON_TYPE_FIRE",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 78,
					baseAttack: 116,
					baseDefense: 96
				},
				quickMoves: ["EMBER_FAST", "TACKLE_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionIds: ["QUILAVA"],
				evolutionPips: 1,
				pokedexHeightM: .51,
				pokedexWeightKg: 7.9,
				heightStdDev: .06375,
				weightStdDev: .9875,
				familyId: "FAMILY_CYNDAQUIL",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "V0156_POKEMON_QUILAVA",
			pokemonSettings: {
				pokemonId: "QUILAVA",
				modelScale: 1,
				type: "POKEMON_TYPE_FIRE",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 116,
					baseAttack: 158,
					baseDefense: 129
				},
				quickMoves: ["EMBER_FAST", "TACKLE_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionIds: ["TYPHLOSION"],
				evolutionPips: 1,
				pokedexHeightM: .89,
				pokedexWeightKg: 19,
				parentPokemonId: "CYNDAQUIL",
				heightStdDev: .11125,
				weightStdDev: 2.375,
				familyId: "FAMILY_CYNDAQUIL",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "V0157_POKEMON_TYPHLOSION",
			pokemonSettings: {
				pokemonId: "TYPHLOSION",
				modelScale: 1,
				type: "POKEMON_TYPE_FIRE",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 156,
					baseAttack: 223,
					baseDefense: 176
				},
				quickMoves: ["EMBER_FAST", "SHADOW_CLAW_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionPips: 1,
				pokedexHeightM: 1.7,
				pokedexWeightKg: 79.5,
				parentPokemonId: "QUILAVA",
				heightStdDev: .2125,
				weightStdDev: 9.9375,
				familyId: "FAMILY_CYNDAQUIL",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "V0158_POKEMON_TOTODILE",
			pokemonSettings: {
				pokemonId: "TOTODILE",
				modelScale: 1,
				type: "POKEMON_TYPE_WATER",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 100,
					baseAttack: 117,
					baseDefense: 116
				},
				quickMoves: ["WATER_GUN_FAST", "SCRATCH_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionIds: ["CROCONAW"],
				evolutionPips: 1,
				pokedexHeightM: .61,
				pokedexWeightKg: 9.5,
				heightStdDev: .07625,
				weightStdDev: 1.1875,
				familyId: "FAMILY_TOTODILE",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "V0159_POKEMON_CROCONAW",
			pokemonSettings: {
				pokemonId: "CROCONAW",
				modelScale: 1,
				type: "POKEMON_TYPE_WATER",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 130,
					baseAttack: 150,
					baseDefense: 151
				},
				quickMoves: ["WATER_GUN_FAST", "SCRATCH_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionIds: ["FERALIGATR"],
				evolutionPips: 1,
				pokedexHeightM: 1.09,
				pokedexWeightKg: 25,
				parentPokemonId: "TOTODILE",
				heightStdDev: .13625,
				weightStdDev: 3.125,
				familyId: "FAMILY_TOTODILE",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "V0160_POKEMON_FERALIGATR",
			pokemonSettings: {
				pokemonId: "FERALIGATR",
				modelScale: 1,
				type: "POKEMON_TYPE_WATER",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 170,
					baseAttack: 205,
					baseDefense: 197
				},
				quickMoves: ["WATER_GUN_FAST", "BITE_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionPips: 1,
				pokedexHeightM: 2.31,
				pokedexWeightKg: 88.8,
				parentPokemonId: "CROCONAW",
				heightStdDev: .28875,
				weightStdDev: 11.1,
				familyId: "FAMILY_TOTODILE",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "V0161_POKEMON_SENTRET",
			pokemonSettings: {
				pokemonId: "SENTRET",
				modelScale: 1,
				type: "POKEMON_TYPE_NORMAL",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 70,
					baseAttack: 79,
					baseDefense: 77
				},
				quickMoves: ["SCRATCH_FAST", "QUICK_ATTACK_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionIds: ["FURRET"],
				evolutionPips: 1,
				pokedexHeightM: .79,
				pokedexWeightKg: 6,
				heightStdDev: .09875,
				weightStdDev: .75,
				familyId: "FAMILY_SENTRET",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "V0162_POKEMON_FURRET",
			pokemonSettings: {
				pokemonId: "FURRET",
				modelScale: 1,
				type: "POKEMON_TYPE_NORMAL",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 170,
					baseAttack: 148,
					baseDefense: 130
				},
				quickMoves: ["QUICK_ATTACK_FAST", "SUCKER_PUNCH_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionPips: 1,
				pokedexHeightM: 1.8,
				pokedexWeightKg: 32.5,
				parentPokemonId: "SENTRET",
				heightStdDev: .225,
				weightStdDev: 4.0625,
				familyId: "FAMILY_SENTRET",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "V0163_POKEMON_HOOTHOOT",
			pokemonSettings: {
				pokemonId: "HOOTHOOT",
				modelScale: 1,
				type: "POKEMON_TYPE_NORMAL",
				type2: "POKEMON_TYPE_FLYING",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 120,
					baseAttack: 67,
					baseDefense: 101
				},
				quickMoves: ["TACKLE_FAST", "PECK_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionIds: ["NOCTOWL"],
				evolutionPips: 1,
				pokedexHeightM: .71,
				pokedexWeightKg: 21.2,
				heightStdDev: .08875,
				weightStdDev: 2.65,
				familyId: "FAMILY_HOOTHOOT",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "V0164_POKEMON_NOCTOWL",
			pokemonSettings: {
				pokemonId: "NOCTOWL",
				modelScale: 1,
				type: "POKEMON_TYPE_NORMAL",
				type2: "POKEMON_TYPE_FLYING",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_FLYING",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 200,
					baseAttack: 145,
					baseDefense: 179
				},
				quickMoves: ["TACKLE_FAST", "PECK_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionPips: 1,
				pokedexHeightM: 1.6,
				pokedexWeightKg: 40.8,
				parentPokemonId: "HOOTHOOT",
				heightStdDev: .2,
				weightStdDev: 5.1,
				familyId: "FAMILY_HOOTHOOT",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "V0165_POKEMON_LEDYBA",
			pokemonSettings: {
				pokemonId: "LEDYBA",
				modelScale: 1,
				type: "POKEMON_TYPE_BUG",
				type2: "POKEMON_TYPE_FLYING",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_FLYING",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 80,
					baseAttack: 72,
					baseDefense: 142
				},
				quickMoves: ["TACKLE_FAST", "BUG_BITE_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionIds: ["LEDIAN"],
				evolutionPips: 1,
				pokedexHeightM: .99,
				pokedexWeightKg: 10.8,
				heightStdDev: .12375,
				weightStdDev: 1.35,
				familyId: "FAMILY_LEDYBA",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "V0166_POKEMON_LEDIAN",
			pokemonSettings: {
				pokemonId: "LEDIAN",
				modelScale: 1,
				type: "POKEMON_TYPE_BUG",
				type2: "POKEMON_TYPE_FLYING",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_FLYING",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 110,
					baseAttack: 107,
					baseDefense: 209
				},
				quickMoves: ["TACKLE_FAST", "BUG_BITE_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionPips: 1,
				pokedexHeightM: 1.4,
				pokedexWeightKg: 35.6,
				parentPokemonId: "LEDYBA",
				heightStdDev: .175,
				weightStdDev: 4.45,
				familyId: "FAMILY_LEDYBA",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "V0167_POKEMON_SPINARAK",
			pokemonSettings: {
				pokemonId: "SPINARAK",
				modelScale: 1,
				type: "POKEMON_TYPE_BUG",
				type2: "POKEMON_TYPE_POISON",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 80,
					baseAttack: 105,
					baseDefense: 73
				},
				quickMoves: ["POISON_STING_FAST", "BUG_BITE_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionIds: ["ARIADOS"],
				evolutionPips: 1,
				pokedexHeightM: .51,
				pokedexWeightKg: 8.5,
				heightStdDev: .06375,
				weightStdDev: 1.0625,
				familyId: "FAMILY_SPINARAK",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "V0168_POKEMON_ARIADOS",
			pokemonSettings: {
				pokemonId: "ARIADOS",
				modelScale: 1,
				type: "POKEMON_TYPE_BUG",
				type2: "POKEMON_TYPE_POISON",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 140,
					baseAttack: 161,
					baseDefense: 128
				},
				quickMoves: ["POISON_STING_FAST", "BUG_BITE_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionPips: 1,
				pokedexHeightM: 1.09,
				pokedexWeightKg: 33.5,
				parentPokemonId: "SPINARAK",
				heightStdDev: .13625,
				weightStdDev: 4.1875,
				familyId: "FAMILY_SPINARAK",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "V0169_POKEMON_CROBAT",
			pokemonSettings: {
				pokemonId: "CROBAT",
				modelScale: 1,
				type: "POKEMON_TYPE_POISON",
				type2: "POKEMON_TYPE_FLYING",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_FLYING",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 170,
					baseAttack: 194,
					baseDefense: 178
				},
				quickMoves: ["WING_ATTACK_FAST", "BITE_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionPips: 1,
				pokedexHeightM: 1.8,
				pokedexWeightKg: 75,
				parentPokemonId: "GOLBAT",
				heightStdDev: .225,
				weightStdDev: 9.375,
				familyId: "FAMILY_ZUBAT",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "V0170_POKEMON_CHINCHOU",
			pokemonSettings: {
				pokemonId: "CHINCHOU",
				modelScale: 1,
				type: "POKEMON_TYPE_WATER",
				type2: "POKEMON_TYPE_ELECTRIC",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_HOVERING",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 150,
					baseAttack: 106,
					baseDefense: 106
				},
				quickMoves: ["BUBBLE_FAST", "SPARK_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionIds: ["LANTURN"],
				evolutionPips: 1,
				pokedexHeightM: .51,
				pokedexWeightKg: 12,
				heightStdDev: .06375,
				weightStdDev: 1.5,
				familyId: "FAMILY_CHINCHOU",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "V0171_POKEMON_LANTURN",
			pokemonSettings: {
				pokemonId: "LANTURN",
				modelScale: 1,
				type: "POKEMON_TYPE_WATER",
				type2: "POKEMON_TYPE_ELECTRIC",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_HOVERING",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 250,
					baseAttack: 146,
					baseDefense: 146
				},
				quickMoves: ["WATER_GUN_FAST", "SPARK_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionPips: 1,
				pokedexHeightM: 1.19,
				pokedexWeightKg: 22.5,
				parentPokemonId: "CHINCHOU",
				heightStdDev: .14875,
				weightStdDev: 2.8125,
				familyId: "FAMILY_CHINCHOU",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "V0172_POKEMON_PICHU",
			pokemonSettings: {
				pokemonId: "PICHU",
				modelScale: 1.76,
				type: "POKEMON_TYPE_ELECTRIC",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: .65,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .185,
					collisionHeightM: .42,
					collisionHeadRadiusM: .185,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 40,
					baseAttack: 77,
					baseDefense: 63
				},
				quickMoves: ["THUNDER_SHOCK_FAST", "QUICK_ATTACK_FAST"],
				cinematicMoves: ["THUNDERBOLT", "DISARMING_VOICE", "THUNDER_PUNCH"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionIds: ["PIKACHU"],
				evolutionPips: 1,
				pokedexHeightM: .3,
				pokedexWeightKg: 2,
				heightStdDev: .0375,
				weightStdDev: .25,
				familyId: "FAMILY_PIKACHU",
				candyToEvolve: 25,
				kmBuddyDistance: .5,
				modelHeight: .37
			}
		}, {
			templateId: "V0173_POKEMON_CLEFFA",
			pokemonSettings: {
				pokemonId: "CLEFFA",
				modelScale: 2,
				type: "POKEMON_TYPE_FAIRY",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .45,
					cylinderHeightM: .65,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .2,
					collisionHeightM: .52,
					collisionHeadRadiusM: .215,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 11,
					jumpTimeS: .9,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 100,
					baseAttack: 75,
					baseDefense: 91
				},
				quickMoves: ["POUND_FAST", "ZEN_HEADBUTT_FAST"],
				cinematicMoves: ["BODY_SLAM", "PSYCHIC", "SIGNAL_BEAM"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionIds: ["CLEFAIRY"],
				evolutionPips: 1,
				pokedexHeightM: .3,
				pokedexWeightKg: 3,
				heightStdDev: .0375,
				weightStdDev: .375,
				familyId: "FAMILY_CLEFAIRY",
				candyToEvolve: 25,
				kmBuddyDistance: .5,
				modelHeight: .3
			}
		}, {
			templateId: "V0174_POKEMON_IGGLYBUFF",
			pokemonSettings: {
				pokemonId: "IGGLYBUFF",
				modelScale: 1.88,
				type: "POKEMON_TYPE_NORMAL",
				type2: "POKEMON_TYPE_FAIRY",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .4,
					cylinderHeightM: .74,
					cylinderGroundM: .4,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .2,
					collisionHeightM: .42,
					collisionHeadRadiusM: .45,
					movementType: "MOVEMENT_HOVERING",
					movementTimerS: 11,
					jumpTimeS: .2,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 180,
					baseAttack: 69,
					baseDefense: 34
				},
				quickMoves: ["POUND_FAST", "FEINT_ATTACK_FAST"],
				cinematicMoves: ["BODY_SLAM", "SHADOW_BALL", "PSYCHIC"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionIds: ["JIGGLYPUFF"],
				evolutionPips: 1,
				pokedexHeightM: .3,
				pokedexWeightKg: 1,
				heightStdDev: .0375,
				weightStdDev: .125,
				familyId: "FAMILY_JIGGLYPUFF",
				candyToEvolve: 25,
				kmBuddyDistance: .5,
				modelHeight: .33
			}
		}, {
			templateId: "V0175_POKEMON_TOGEPI",
			pokemonSettings: {
				pokemonId: "TOGEPI",
				modelScale: 2,
				type: "POKEMON_TYPE_FAIRY",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .4,
					cylinderHeightM: .65,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .2,
					collisionHeightM: .45,
					collisionHeadRadiusM: .185,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 11,
					jumpTimeS: .8,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 70,
					baseAttack: 67,
					baseDefense: 116
				},
				quickMoves: ["ZEN_HEADBUTT_FAST", "PECK_FAST"],
				cinematicMoves: ["ANCIENT_POWER", "PSYSHOCK", "DAZZLING_GLEAM"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionIds: ["TOGETIC"],
				evolutionPips: 1,
				pokedexHeightM: .3,
				pokedexWeightKg: 1.5,
				heightStdDev: .0375,
				weightStdDev: .1875,
				familyId: "FAMILY_TOGEPI",
				candyToEvolve: 50,
				kmBuddyDistance: 2.5,
				modelHeight: .3
			}
		}, {
			templateId: "V0176_POKEMON_TOGETIC",
			pokemonSettings: {
				pokemonId: "TOGETIC",
				modelScale: 1.33,
				type: "POKEMON_TYPE_FAIRY",
				type2: "POKEMON_TYPE_FLYING",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .45,
					cylinderHeightM: .8,
					cylinderGroundM: .4,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .2,
					collisionHeightM: .7,
					collisionHeadRadiusM: .185,
					movementType: "MOVEMENT_FLYING",
					movementTimerS: 11,
					jumpTimeS: .2,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 110,
					baseAttack: 139,
					baseDefense: 191
				},
				quickMoves: ["ZEN_HEADBUTT_FAST", "STEEL_WING_FAST"],
				cinematicMoves: ["ANCIENT_POWER", "DAZZLING_GLEAM", "AERIAL_ACE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionPips: 1,
				pokedexHeightM: .61,
				pokedexWeightKg: 3.2,
				parentPokemonId: "TOGEPI",
				heightStdDev: .07625,
				weightStdDev: .4,
				familyId: "FAMILY_TOGEPI",
				candyToEvolve: 1,
				kmBuddyDistance: 2.5,
				modelHeight: .6
			}
		}, {
			templateId: "V0177_POKEMON_NATU",
			pokemonSettings: {
				pokemonId: "NATU",
				modelScale: 1,
				type: "POKEMON_TYPE_PSYCHIC",
				type2: "POKEMON_TYPE_FLYING",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 80,
					baseAttack: 134,
					baseDefense: 89
				},
				quickMoves: ["PECK_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionIds: ["XATU"],
				evolutionPips: 1,
				pokedexHeightM: .2,
				pokedexWeightKg: 2,
				heightStdDev: .025,
				weightStdDev: .25,
				familyId: "FAMILY_NATU",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "V0178_POKEMON_XATU",
			pokemonSettings: {
				pokemonId: "XATU",
				modelScale: 1,
				type: "POKEMON_TYPE_PSYCHIC",
				type2: "POKEMON_TYPE_FLYING",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_FLYING",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 130,
					baseAttack: 192,
					baseDefense: 146
				},
				quickMoves: ["TACKLE_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionPips: 1,
				pokedexHeightM: 1.5,
				pokedexWeightKg: 15,
				parentPokemonId: "NATU",
				heightStdDev: .1875,
				weightStdDev: 1.875,
				familyId: "FAMILY_NATU",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "V0179_POKEMON_MAREEP",
			pokemonSettings: {
				pokemonId: "MAREEP",
				modelScale: 1,
				type: "POKEMON_TYPE_ELECTRIC",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 110,
					baseAttack: 114,
					baseDefense: 82
				},
				quickMoves: ["TACKLE_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionIds: ["FLAAFFY"],
				evolutionPips: 1,
				pokedexHeightM: .61,
				pokedexWeightKg: 7.8,
				heightStdDev: .07625,
				weightStdDev: .975,
				familyId: "FAMILY_MAREEP",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "V0180_POKEMON_FLAAFFY",
			pokemonSettings: {
				pokemonId: "FLAAFFY",
				modelScale: 1,
				type: "POKEMON_TYPE_ELECTRIC",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 140,
					baseAttack: 145,
					baseDefense: 112
				},
				quickMoves: ["TACKLE_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionIds: ["AMPHAROS"],
				evolutionPips: 1,
				pokedexHeightM: .79,
				pokedexWeightKg: 13.3,
				parentPokemonId: "MAREEP",
				heightStdDev: .09875,
				weightStdDev: 1.6625,
				familyId: "FAMILY_MAREEP",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "V0181_POKEMON_AMPHAROS",
			pokemonSettings: {
				pokemonId: "AMPHAROS",
				modelScale: 1,
				type: "POKEMON_TYPE_ELECTRIC",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 180,
					baseAttack: 211,
					baseDefense: 172
				},
				quickMoves: ["TACKLE_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionPips: 1,
				pokedexHeightM: 1.4,
				pokedexWeightKg: 61.5,
				parentPokemonId: "FLAAFFY",
				heightStdDev: .175,
				weightStdDev: 7.6875,
				familyId: "FAMILY_MAREEP",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "V0182_POKEMON_BELLOSSOM",
			pokemonSettings: {
				pokemonId: "BELLOSSOM",
				modelScale: 1,
				type: "POKEMON_TYPE_GRASS",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 150,
					baseAttack: 169,
					baseDefense: 189
				},
				quickMoves: ["TACKLE_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionPips: 1,
				pokedexHeightM: .41,
				pokedexWeightKg: 5.8,
				parentPokemonId: "GLOOM",
				heightStdDev: .05125,
				weightStdDev: .725,
				familyId: "FAMILY_ODDISH",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "V0183_POKEMON_MARILL",
			pokemonSettings: {
				pokemonId: "MARILL",
				modelScale: 1,
				type: "POKEMON_TYPE_WATER",
				type2: "POKEMON_TYPE_FAIRY",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 140,
					baseAttack: 37,
					baseDefense: 93
				},
				quickMoves: ["TACKLE_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionIds: ["AZUMARILL"],
				evolutionPips: 1,
				pokedexHeightM: .41,
				pokedexWeightKg: 8.5,
				heightStdDev: .05125,
				weightStdDev: 1.0625,
				familyId: "FAMILY_MARILL",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "V0184_POKEMON_AZUMARILL",
			pokemonSettings: {
				pokemonId: "AZUMARILL",
				modelScale: 1,
				type: "POKEMON_TYPE_WATER",
				type2: "POKEMON_TYPE_FAIRY",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 200,
					baseAttack: 112,
					baseDefense: 152
				},
				quickMoves: ["TACKLE_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionPips: 1,
				pokedexHeightM: .79,
				pokedexWeightKg: 28.5,
				parentPokemonId: "MARILL",
				heightStdDev: .09875,
				weightStdDev: 3.5625,
				familyId: "FAMILY_MARILL",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "V0185_POKEMON_SUDOWOODO",
			pokemonSettings: {
				pokemonId: "SUDOWOODO",
				modelScale: 1,
				type: "POKEMON_TYPE_ROCK",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 140,
					baseAttack: 167,
					baseDefense: 198
				},
				quickMoves: ["TACKLE_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionPips: 1,
				pokedexHeightM: 1.19,
				pokedexWeightKg: 38,
				heightStdDev: .14875,
				weightStdDev: 4.75,
				familyId: "FAMILY_SUDOWOODO",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "V0186_POKEMON_POLITOED",
			pokemonSettings: {
				pokemonId: "POLITOED",
				modelScale: 1,
				type: "POKEMON_TYPE_WATER",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 180,
					baseAttack: 174,
					baseDefense: 192
				},
				quickMoves: ["TACKLE_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionPips: 1,
				pokedexHeightM: 10.9,
				pokedexWeightKg: 33.9,
				parentPokemonId: "POLIWHIRL",
				heightStdDev: 1.3625,
				weightStdDev: 4.2375,
				familyId: "FAMILY_POLIWAG",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "V0187_POKEMON_HOPPIP",
			pokemonSettings: {
				pokemonId: "HOPPIP",
				modelScale: 1,
				type: "POKEMON_TYPE_GRASS",
				type2: "POKEMON_TYPE_FLYING",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_FLYING",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 70,
					baseAttack: 67,
					baseDefense: 101
				},
				quickMoves: ["TACKLE_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionIds: ["SKIPLOOM"],
				evolutionPips: 1,
				pokedexHeightM: .41,
				pokedexWeightKg: .5,
				parentPokemonId: "SKIPLOOM",
				heightStdDev: .05125,
				weightStdDev: .0625,
				familyId: "FAMILY_HOPPIP",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "V0188_POKEMON_SKIPLOOM",
			pokemonSettings: {
				pokemonId: "SKIPLOOM",
				modelScale: 1,
				type: "POKEMON_TYPE_GRASS",
				type2: "POKEMON_TYPE_FLYING",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_FLYING",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 110,
					baseAttack: 91,
					baseDefense: 127
				},
				quickMoves: ["TACKLE_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionIds: ["JUMPLUFF"],
				evolutionPips: 1,
				pokedexHeightM: .61,
				pokedexWeightKg: 1,
				parentPokemonId: "JUMPLUFF",
				heightStdDev: .07625,
				weightStdDev: .125,
				familyId: "FAMILY_HOPPIP",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "V0189_POKEMON_JUMPLUFF",
			pokemonSettings: {
				pokemonId: "JUMPLUFF",
				modelScale: 1,
				type: "POKEMON_TYPE_GRASS",
				type2: "POKEMON_TYPE_FLYING",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_FLYING",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 150,
					baseAttack: 118,
					baseDefense: 197
				},
				quickMoves: ["TACKLE_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionPips: 1,
				pokedexHeightM: .79,
				pokedexWeightKg: 3,
				heightStdDev: .09875,
				weightStdDev: .375,
				familyId: "FAMILY_HOPPIP",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "V0190_POKEMON_AIPOM",
			pokemonSettings: {
				pokemonId: "AIPOM",
				modelScale: 1,
				type: "POKEMON_TYPE_NORMAL",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 110,
					baseAttack: 136,
					baseDefense: 112
				},
				quickMoves: ["TACKLE_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionPips: 1,
				pokedexHeightM: .79,
				pokedexWeightKg: 11.5,
				heightStdDev: .09875,
				weightStdDev: 1.4375,
				familyId: "FAMILY_AIPOM",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "V0191_POKEMON_SUNKERN",
			pokemonSettings: {
				pokemonId: "SUNKERN",
				modelScale: 1,
				type: "POKEMON_TYPE_GRASS",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 60,
					baseAttack: 55,
					baseDefense: 55
				},
				quickMoves: ["TACKLE_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionIds: ["SUNFLORA"],
				evolutionPips: 1,
				pokedexHeightM: .3,
				pokedexWeightKg: 1.8,
				parentPokemonId: "SUNFLORA",
				heightStdDev: .0375,
				weightStdDev: .225,
				familyId: "FAMILY_SUNKERN",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "V0192_POKEMON_SUNFLORA",
			pokemonSettings: {
				pokemonId: "SUNFLORA",
				modelScale: 1,
				type: "POKEMON_TYPE_GRASS",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 150,
					baseAttack: 185,
					baseDefense: 148
				},
				quickMoves: ["TACKLE_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionPips: 1,
				pokedexHeightM: .79,
				pokedexWeightKg: 8.5,
				heightStdDev: .09875,
				weightStdDev: 1.0625,
				familyId: "FAMILY_SUNKERN",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "V0193_POKEMON_YANMA",
			pokemonSettings: {
				pokemonId: "YANMA",
				modelScale: 1,
				type: "POKEMON_TYPE_BUG",
				type2: "POKEMON_TYPE_FLYING",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_FLYING",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 130,
					baseAttack: 154,
					baseDefense: 94
				},
				quickMoves: ["TACKLE_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionPips: 1,
				pokedexHeightM: 1.19,
				pokedexWeightKg: 38,
				heightStdDev: .14875,
				weightStdDev: 4.75,
				familyId: "FAMILY_YANMA",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "V0194_POKEMON_WOOPER",
			pokemonSettings: {
				pokemonId: "WOOPER",
				modelScale: 1,
				type: "POKEMON_TYPE_WATER",
				type2: "POKEMON_TYPE_GROUND",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 110,
					baseAttack: 75,
					baseDefense: 75
				},
				quickMoves: ["TACKLE_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionIds: ["QUAGSIRE"],
				evolutionPips: 1,
				pokedexHeightM: .41,
				pokedexWeightKg: 8.5,
				parentPokemonId: "QUAGSIRE",
				heightStdDev: .05125,
				weightStdDev: 1.0625,
				familyId: "FAMILY_WOOPER",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "V0195_POKEMON_QUAGSIRE",
			pokemonSettings: {
				pokemonId: "QUAGSIRE",
				modelScale: 1,
				type: "POKEMON_TYPE_WATER",
				type2: "POKEMON_TYPE_GROUND",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 190,
					baseAttack: 152,
					baseDefense: 152
				},
				quickMoves: ["TACKLE_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionPips: 1,
				pokedexHeightM: 1.4,
				pokedexWeightKg: 75,
				heightStdDev: .175,
				weightStdDev: 9.375,
				familyId: "FAMILY_WOOPER",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "V0196_POKEMON_ESPEON",
			pokemonSettings: {
				pokemonId: "ESPEON",
				modelScale: 1.25,
				type: "POKEMON_TYPE_PSYCHIC",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .4,
					cylinderHeightM: 1,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .2525,
					collisionHeightM: .9,
					collisionHeadRadiusM: .185,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 11,
					jumpTimeS: 1.1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 130,
					baseAttack: 261,
					baseDefense: 194
				},
				quickMoves: ["CONFUSION_FAST", "ZEN_HEADBUTT_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionPips: 1,
				pokedexHeightM: .89,
				pokedexWeightKg: 26.5,
				parentPokemonId: "EEVEE",
				heightStdDev: .11125,
				weightStdDev: 3.3125,
				familyId: "FAMILY_EEVEE",
				candyToEvolve: 1,
				kmBuddyDistance: 5,
				modelHeight: .76
			}
		}, {
			templateId: "V0197_POKEMON_UMBREON",
			pokemonSettings: {
				pokemonId: "UMBREON",
				modelScale: 1.01,
				type: "POKEMON_TYPE_DARK",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .4,
					cylinderHeightM: .85,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .2525,
					collisionHeightM: .8,
					collisionHeadRadiusM: .185,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 11,
					jumpTimeS: 1.1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 190,
					baseAttack: 126,
					baseDefense: 250
				},
				quickMoves: ["FEINT_ATTACK_FAST", "BITE_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionPips: 1,
				pokedexHeightM: .99,
				pokedexWeightKg: 27,
				parentPokemonId: "EEVEE",
				heightStdDev: .12375,
				weightStdDev: 3.375,
				familyId: "FAMILY_EEVEE",
				candyToEvolve: 1,
				kmBuddyDistance: 5,
				modelHeight: 1
			}
		}, {
			templateId: "V0198_POKEMON_MURKROW",
			pokemonSettings: {
				pokemonId: "MURKROW",
				modelScale: 1,
				type: "POKEMON_TYPE_DARK",
				type2: "POKEMON_TYPE_FLYING",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 120,
					baseAttack: 175,
					baseDefense: 87
				},
				quickMoves: ["TACKLE_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionPips: 1,
				pokedexHeightM: .51,
				pokedexWeightKg: 2.1,
				heightStdDev: .06375,
				weightStdDev: .2625,
				familyId: "FAMILY_MURKROW",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "V0199_POKEMON_SLOWKING",
			pokemonSettings: {
				pokemonId: "SLOWKING",
				modelScale: 1,
				type: "POKEMON_TYPE_WATER",
				type2: "POKEMON_TYPE_PSYCHIC",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 190,
					baseAttack: 177,
					baseDefense: 194
				},
				quickMoves: ["TACKLE_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionPips: 1,
				pokedexHeightM: 2.01,
				pokedexWeightKg: 79.5,
				parentPokemonId: "SLOWPOKE",
				heightStdDev: .25125,
				weightStdDev: 9.9375,
				familyId: "FAMILY_SLOWPOKE",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "V0200_MOVE_FURY_CUTTER_FAST",
			moveSettings: {
				movementId: "FURY_CUTTER_FAST",
				animationId: 4,
				pokemonType: "POKEMON_TYPE_BUG",
				power: 3,
				accuracyChance: 1,
				staminaLossScalar: .01,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "furyCutterFast",
				durationMs: 400,
				damageWindowStartMs: 200,
				damageWindowEndMs: 400,
				energyDelta: 6
			}
		}, {
			templateId: "V0200_POKEMON_MISDREAVUS",
			pokemonSettings: {
				pokemonId: "MISDREAVUS",
				modelScale: 1,
				type: "POKEMON_TYPE_GHOST",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_PSYCHIC",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 120,
					baseAttack: 167,
					baseDefense: 167
				},
				quickMoves: ["TACKLE_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionPips: 1,
				pokedexHeightM: .71,
				pokedexWeightKg: 1,
				heightStdDev: .08875,
				weightStdDev: .125,
				familyId: "FAMILY_MISDREAVUS",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "V0201_MOVE_BUG_BITE_FAST",
			moveSettings: {
				movementId: "BUG_BITE_FAST",
				animationId: 4,
				pokemonType: "POKEMON_TYPE_BUG",
				power: 5,
				accuracyChance: 1,
				staminaLossScalar: .01,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "bugBiteFast",
				durationMs: 450,
				damageWindowStartMs: 250,
				damageWindowEndMs: 450,
				energyDelta: 7
			}
		}, {
			templateId: "V0201_POKEMON_UNOWN",
			pokemonSettings: {
				pokemonId: "UNOWN",
				modelScale: 1,
				type: "POKEMON_TYPE_PSYCHIC",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_PSYCHIC",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 96,
					baseAttack: 136,
					baseDefense: 91
				},
				quickMoves: ["TACKLE_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionPips: 1,
				pokedexHeightM: .51,
				pokedexWeightKg: 5,
				heightStdDev: .06375,
				weightStdDev: .625,
				familyId: "FAMILY_UNOWN",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "V0202_MOVE_BITE_FAST",
			moveSettings: {
				movementId: "BITE_FAST",
				animationId: 4,
				pokemonType: "POKEMON_TYPE_DARK",
				power: 6,
				accuracyChance: 1,
				staminaLossScalar: .01,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "biteFast",
				durationMs: 500,
				damageWindowStartMs: 300,
				damageWindowEndMs: 500,
				energyDelta: 7
			}
		}, {
			templateId: "V0202_POKEMON_WOBBUFFET",
			pokemonSettings: {
				pokemonId: "WOBBUFFET",
				modelScale: 1,
				type: "POKEMON_TYPE_PSYCHIC",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 380,
					baseAttack: 60,
					baseDefense: 106
				},
				quickMoves: ["TACKLE_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionPips: 1,
				pokedexHeightM: 1.3,
				pokedexWeightKg: 28.5,
				heightStdDev: .1625,
				weightStdDev: 3.5625,
				familyId: "FAMILY_WOBBUFFET",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "V0203_MOVE_SUCKER_PUNCH_FAST",
			moveSettings: {
				movementId: "SUCKER_PUNCH_FAST",
				animationId: 4,
				pokemonType: "POKEMON_TYPE_DARK",
				power: 7,
				accuracyChance: 1,
				staminaLossScalar: .01,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "sucker_punchFast",
				durationMs: 700,
				damageWindowStartMs: 500,
				damageWindowEndMs: 700,
				energyDelta: 9
			}
		}, {
			templateId: "V0203_POKEMON_GIRAFARIG",
			pokemonSettings: {
				pokemonId: "GIRAFARIG",
				modelScale: 1,
				type: "POKEMON_TYPE_NORMAL",
				type2: "POKEMON_TYPE_PSYCHIC",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 140,
					baseAttack: 182,
					baseDefense: 133
				},
				quickMoves: ["TACKLE_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionPips: 1,
				pokedexHeightM: 1.5,
				pokedexWeightKg: 41.5,
				heightStdDev: .1875,
				weightStdDev: 5.1875,
				familyId: "FAMILY_GIRAFARIG",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "V0204_MOVE_DRAGON_BREATH_FAST",
			moveSettings: {
				movementId: "DRAGON_BREATH_FAST",
				animationId: 4,
				pokemonType: "POKEMON_TYPE_DRAGON",
				power: 6,
				accuracyChance: 1,
				staminaLossScalar: .01,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "dragonBreathFast",
				durationMs: 500,
				damageWindowStartMs: 300,
				damageWindowEndMs: 500,
				energyDelta: 7
			}
		}, {
			templateId: "V0204_POKEMON_PINECO",
			pokemonSettings: {
				pokemonId: "PINECO",
				modelScale: 1,
				type: "POKEMON_TYPE_BUG",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 100,
					baseAttack: 108,
					baseDefense: 146
				},
				quickMoves: ["TACKLE_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionIds: ["FORRETRESS"],
				evolutionPips: 1,
				pokedexHeightM: .61,
				pokedexWeightKg: 7.2,
				heightStdDev: .07625,
				weightStdDev: .9,
				familyId: "FAMILY_PINECO",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "V0205_MOVE_THUNDER_SHOCK_FAST",
			moveSettings: {
				movementId: "THUNDER_SHOCK_FAST",
				animationId: 4,
				pokemonType: "POKEMON_TYPE_ELECTRIC",
				power: 5,
				accuracyChance: 1,
				staminaLossScalar: .01,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "thunderShockFast",
				durationMs: 600,
				damageWindowStartMs: 400,
				damageWindowEndMs: 600,
				energyDelta: 8
			}
		}, {
			templateId: "V0205_POKEMON_FORRETRESS",
			pokemonSettings: {
				pokemonId: "FORRETRESS",
				modelScale: 1,
				type: "POKEMON_TYPE_BUG",
				type2: "POKEMON_TYPE_STEEL",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 150,
					baseAttack: 161,
					baseDefense: 242
				},
				quickMoves: ["TACKLE_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionPips: 1,
				pokedexHeightM: 1.19,
				pokedexWeightKg: 125.8,
				parentPokemonId: "PINECO",
				heightStdDev: .14875,
				weightStdDev: 15.725,
				familyId: "FAMILY_PINECO",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "V0206_MOVE_SPARK_FAST",
			moveSettings: {
				movementId: "SPARK_FAST",
				animationId: 4,
				pokemonType: "POKEMON_TYPE_ELECTRIC",
				power: 7,
				accuracyChance: 1,
				staminaLossScalar: .01,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "sparkFast",
				durationMs: 700,
				damageWindowStartMs: 500,
				damageWindowEndMs: 700,
				energyDelta: 8
			}
		}, {
			templateId: "V0206_POKEMON_DUNSPARCE",
			pokemonSettings: {
				pokemonId: "DUNSPARCE",
				modelScale: 1,
				type: "POKEMON_TYPE_NORMAL",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 200,
					baseAttack: 131,
					baseDefense: 131
				},
				quickMoves: ["TACKLE_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionPips: 1,
				pokedexHeightM: 1.5,
				pokedexWeightKg: 14,
				heightStdDev: .1875,
				weightStdDev: 1.75,
				familyId: "FAMILY_DUNSPARCE",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "V0207_MOVE_LOW_KICK_FAST",
			moveSettings: {
				movementId: "LOW_KICK_FAST",
				animationId: 4,
				pokemonType: "POKEMON_TYPE_FIGHTING",
				power: 5,
				accuracyChance: 1,
				staminaLossScalar: .01,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "low_kickFast",
				durationMs: 600,
				damageWindowStartMs: 400,
				damageWindowEndMs: 600,
				energyDelta: 7
			}
		}, {
			templateId: "V0207_POKEMON_GLIGAR",
			pokemonSettings: {
				pokemonId: "GLIGAR",
				modelScale: 1,
				type: "POKEMON_TYPE_GROUND",
				type2: "POKEMON_TYPE_FLYING",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_FLYING",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 130,
					baseAttack: 143,
					baseDefense: 204
				},
				quickMoves: ["TACKLE_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionPips: 1,
				pokedexHeightM: 1.09,
				pokedexWeightKg: 64.8,
				heightStdDev: .13625,
				weightStdDev: 8.1,
				familyId: "FAMILY_GLIGAR",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "V0208_MOVE_KARATE_CHOP_FAST",
			moveSettings: {
				movementId: "KARATE_CHOP_FAST",
				animationId: 4,
				pokemonType: "POKEMON_TYPE_FIGHTING",
				power: 6,
				accuracyChance: 1,
				staminaLossScalar: .01,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "karateChopFast",
				durationMs: 800,
				damageWindowStartMs: 600,
				damageWindowEndMs: 800,
				energyDelta: 8
			}
		}, {
			templateId: "V0208_POKEMON_STEELIX",
			pokemonSettings: {
				pokemonId: "STEELIX",
				modelScale: 1,
				type: "POKEMON_TYPE_STEEL",
				type2: "POKEMON_TYPE_GROUND",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 150,
					baseAttack: 148,
					baseDefense: 333
				},
				quickMoves: ["TACKLE_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionPips: 1,
				pokedexHeightM: 9.19,
				pokedexWeightKg: 400,
				parentPokemonId: "ONIX",
				heightStdDev: 1.14875,
				weightStdDev: 50,
				familyId: "FAMILY_ONIX",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "V0209_MOVE_EMBER_FAST",
			moveSettings: {
				movementId: "EMBER_FAST",
				animationId: 4,
				pokemonType: "POKEMON_TYPE_FIRE",
				power: 10,
				accuracyChance: 1,
				staminaLossScalar: .01,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "emberFast",
				durationMs: 1050,
				damageWindowStartMs: 850,
				damageWindowEndMs: 1050,
				energyDelta: 10
			}
		}, {
			templateId: "V0209_POKEMON_SNUBBULL",
			pokemonSettings: {
				pokemonId: "SNUBBULL",
				modelScale: 1,
				type: "POKEMON_TYPE_FAIRY",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 120,
					baseAttack: 137,
					baseDefense: 89
				},
				quickMoves: ["TACKLE_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionIds: ["GRANBULL"],
				evolutionPips: 1,
				pokedexHeightM: .61,
				pokedexWeightKg: 7.8,
				heightStdDev: .07625,
				weightStdDev: .975,
				familyId: "FAMILY_SNUBBULL",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "V0210_MOVE_WING_ATTACK_FAST",
			moveSettings: {
				movementId: "WING_ATTACK_FAST",
				animationId: 4,
				pokemonType: "POKEMON_TYPE_FLYING",
				power: 9,
				accuracyChance: 1,
				staminaLossScalar: .01,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "wingAttackFast",
				durationMs: 750,
				damageWindowStartMs: 550,
				damageWindowEndMs: 750,
				energyDelta: 7
			}
		}, {
			templateId: "V0210_POKEMON_GRANBULL",
			pokemonSettings: {
				pokemonId: "GRANBULL",
				modelScale: 1,
				type: "POKEMON_TYPE_FAIRY",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 180,
					baseAttack: 212,
					baseDefense: 137
				},
				quickMoves: ["TACKLE_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionPips: 1,
				pokedexHeightM: 1.4,
				pokedexWeightKg: 48.7,
				parentPokemonId: "SNUBBULL",
				heightStdDev: .175,
				weightStdDev: 6.0875,
				familyId: "FAMILY_SNUBBULL",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "V0211_MOVE_PECK_FAST",
			moveSettings: {
				movementId: "PECK_FAST",
				animationId: 4,
				pokemonType: "POKEMON_TYPE_FLYING",
				power: 10,
				accuracyChance: 1,
				staminaLossScalar: .01,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "peckFast",
				durationMs: 1150,
				damageWindowStartMs: 950,
				damageWindowEndMs: 1150,
				energyDelta: 10
			}
		}, {
			templateId: "V0211_POKEMON_QWILFISH",
			pokemonSettings: {
				pokemonId: "QWILFISH",
				modelScale: 1,
				type: "POKEMON_TYPE_WATER",
				type2: "POKEMON_TYPE_POISON",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_HOVERING",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 130,
					baseAttack: 184,
					baseDefense: 148
				},
				quickMoves: ["TACKLE_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionPips: 1,
				pokedexHeightM: .51,
				pokedexWeightKg: 3.9,
				heightStdDev: .06375,
				weightStdDev: .4875,
				familyId: "FAMILY_QWILFISH",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "V0212_MOVE_LICK_FAST",
			moveSettings: {
				movementId: "LICK_FAST",
				animationId: 4,
				pokemonType: "POKEMON_TYPE_GHOST",
				power: 5,
				accuracyChance: 1,
				staminaLossScalar: .01,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "lickFast",
				durationMs: 500,
				damageWindowStartMs: 300,
				damageWindowEndMs: 500,
				energyDelta: 6
			}
		}, {
			templateId: "V0212_POKEMON_SCIZOR",
			pokemonSettings: {
				pokemonId: "SCIZOR",
				modelScale: 1,
				type: "POKEMON_TYPE_BUG",
				type2: "POKEMON_TYPE_STEEL",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 140,
					baseAttack: 236,
					baseDefense: 191
				},
				quickMoves: ["TACKLE_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionPips: 1,
				pokedexHeightM: 2.01,
				pokedexWeightKg: 125,
				parentPokemonId: "SCYTHER",
				heightStdDev: .25125,
				weightStdDev: 15.625,
				familyId: "FAMILY_SCYTHER",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "V0213_MOVE_SHADOW_CLAW_FAST",
			moveSettings: {
				movementId: "SHADOW_CLAW_FAST",
				animationId: 4,
				pokemonType: "POKEMON_TYPE_GHOST",
				power: 11,
				accuracyChance: 1,
				staminaLossScalar: .01,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "shadowClawFast",
				durationMs: 950,
				damageWindowStartMs: 750,
				damageWindowEndMs: 950,
				energyDelta: 8
			}
		}, {
			templateId: "V0213_POKEMON_SHUCKLE",
			pokemonSettings: {
				pokemonId: "SHUCKLE",
				modelScale: 1,
				type: "POKEMON_TYPE_BUG",
				type2: "POKEMON_TYPE_ROCK",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 40,
					baseAttack: 17,
					baseDefense: 396
				},
				quickMoves: ["TACKLE_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionPips: 1,
				pokedexHeightM: .61,
				pokedexWeightKg: 20.5,
				heightStdDev: .07625,
				weightStdDev: 2.5625,
				familyId: "FAMILY_SHUCKLE",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "V0214_MOVE_VINE_WHIP_FAST",
			moveSettings: {
				movementId: "VINE_WHIP_FAST",
				animationId: 4,
				pokemonType: "POKEMON_TYPE_GRASS",
				power: 7,
				accuracyChance: 1,
				staminaLossScalar: .01,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "vineWhipFast",
				durationMs: 650,
				damageWindowStartMs: 450,
				damageWindowEndMs: 650,
				energyDelta: 7
			}
		}, {
			templateId: "V0214_POKEMON_HERACROSS",
			pokemonSettings: {
				pokemonId: "HERACROSS",
				modelScale: 1,
				type: "POKEMON_TYPE_BUG",
				type2: "POKEMON_TYPE_FIGHTING",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 160,
					baseAttack: 234,
					baseDefense: 189
				},
				quickMoves: ["TACKLE_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionPips: 1,
				pokedexHeightM: 1.5,
				pokedexWeightKg: 54,
				heightStdDev: .1875,
				weightStdDev: 6.75,
				familyId: "FAMILY_HERACROSS",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "V0215_MOVE_RAZOR_LEAF_FAST",
			moveSettings: {
				movementId: "RAZOR_LEAF_FAST",
				animationId: 4,
				pokemonType: "POKEMON_TYPE_GRASS",
				power: 15,
				accuracyChance: 1,
				staminaLossScalar: .01,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "razorLeafFast",
				durationMs: 1450,
				damageWindowStartMs: 1250,
				damageWindowEndMs: 1450,
				energyDelta: 12
			}
		}, {
			templateId: "V0215_POKEMON_SNEASEL",
			pokemonSettings: {
				pokemonId: "SNEASEL",
				modelScale: 1,
				type: "POKEMON_TYPE_DARK",
				type2: "POKEMON_TYPE_ICE",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 110,
					baseAttack: 189,
					baseDefense: 157
				},
				quickMoves: ["TACKLE_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionPips: 1,
				pokedexHeightM: .89,
				pokedexWeightKg: 28,
				heightStdDev: .11125,
				weightStdDev: 3.5,
				familyId: "FAMILY_SNEASEL",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "V0216_MOVE_MUD_SHOT_FAST",
			moveSettings: {
				movementId: "MUD_SHOT_FAST",
				animationId: 4,
				pokemonType: "POKEMON_TYPE_GROUND",
				power: 6,
				accuracyChance: 1,
				staminaLossScalar: .01,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "mudShotFast",
				durationMs: 550,
				damageWindowStartMs: 350,
				damageWindowEndMs: 550,
				energyDelta: 7
			}
		}, {
			templateId: "V0216_POKEMON_TEDDIURSA",
			pokemonSettings: {
				pokemonId: "TEDDIURSA",
				modelScale: 1,
				type: "POKEMON_TYPE_NORMAL",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 120,
					baseAttack: 142,
					baseDefense: 93
				},
				quickMoves: ["TACKLE_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionIds: ["URSARING"],
				evolutionPips: 1,
				pokedexHeightM: .61,
				pokedexWeightKg: 8.8,
				heightStdDev: .07625,
				weightStdDev: 1.1,
				familyId: "FAMILY_TEDDIURSA",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "V0217_MOVE_ICE_SHARD_FAST",
			moveSettings: {
				movementId: "ICE_SHARD_FAST",
				animationId: 4,
				pokemonType: "POKEMON_TYPE_ICE",
				power: 15,
				accuracyChance: 1,
				staminaLossScalar: .01,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "iceShardFast",
				durationMs: 1400,
				damageWindowStartMs: 1200,
				damageWindowEndMs: 1400,
				energyDelta: 12
			}
		}, {
			templateId: "V0217_POKEMON_URSARING",
			pokemonSettings: {
				pokemonId: "URSARING",
				modelScale: 1,
				type: "POKEMON_TYPE_NORMAL",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 180,
					baseAttack: 236,
					baseDefense: 144
				},
				quickMoves: ["TACKLE_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionPips: 1,
				pokedexHeightM: 1.8,
				pokedexWeightKg: 125.8,
				parentPokemonId: "TEDDIURSA",
				heightStdDev: .225,
				weightStdDev: 15.725,
				familyId: "FAMILY_TEDDIURSA",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "V0218_MOVE_FROST_BREATH_FAST",
			moveSettings: {
				movementId: "FROST_BREATH_FAST",
				animationId: 4,
				pokemonType: "POKEMON_TYPE_ICE",
				power: 9,
				accuracyChance: 1,
				staminaLossScalar: .01,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "frostBreathFast",
				durationMs: 810,
				damageWindowStartMs: 610,
				damageWindowEndMs: 810,
				energyDelta: 7
			}
		}, {
			templateId: "V0218_POKEMON_SLUGMA",
			pokemonSettings: {
				pokemonId: "SLUGMA",
				modelScale: 1,
				type: "POKEMON_TYPE_FIRE",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 80,
					baseAttack: 118,
					baseDefense: 71
				},
				quickMoves: ["TACKLE_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionIds: ["MAGCARGO"],
				evolutionPips: 1,
				pokedexHeightM: .71,
				pokedexWeightKg: 35,
				heightStdDev: .08875,
				weightStdDev: 4.375,
				familyId: "FAMILY_SLUGMA",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "V0219_MOVE_QUICK_ATTACK_FAST",
			moveSettings: {
				movementId: "QUICK_ATTACK_FAST",
				animationId: 4,
				pokemonType: "POKEMON_TYPE_NORMAL",
				power: 10,
				accuracyChance: 1,
				staminaLossScalar: .01,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "quickAttackFast",
				durationMs: 1330,
				damageWindowStartMs: 1130,
				damageWindowEndMs: 1330,
				energyDelta: 12
			}
		}, {
			templateId: "V0219_POKEMON_MAGCARGO",
			pokemonSettings: {
				pokemonId: "MAGCARGO",
				modelScale: 1,
				type: "POKEMON_TYPE_FIRE",
				type2: "POKEMON_TYPE_ROCK",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 100,
					baseAttack: 139,
					baseDefense: 209
				},
				quickMoves: ["TACKLE_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionPips: 1,
				pokedexHeightM: .79,
				pokedexWeightKg: 55,
				parentPokemonId: "SLUGMA",
				heightStdDev: .09875,
				weightStdDev: 6.875,
				familyId: "FAMILY_SLUGMA",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "V0220_MOVE_SCRATCH_FAST",
			moveSettings: {
				movementId: "SCRATCH_FAST",
				animationId: 4,
				pokemonType: "POKEMON_TYPE_NORMAL",
				power: 6,
				accuracyChance: 1,
				staminaLossScalar: .01,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "scratchFast",
				durationMs: 500,
				damageWindowStartMs: 300,
				damageWindowEndMs: 500,
				energyDelta: 7
			}
		}, {
			templateId: "V0220_POKEMON_SWINUB",
			pokemonSettings: {
				pokemonId: "SWINUB",
				modelScale: 1,
				type: "POKEMON_TYPE_ICE",
				type2: "POKEMON_TYPE_GROUND",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 100,
					baseAttack: 90,
					baseDefense: 74
				},
				quickMoves: ["TACKLE_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionIds: ["PILOSWINE"],
				evolutionPips: 1,
				pokedexHeightM: .41,
				pokedexWeightKg: 6.5,
				heightStdDev: .05125,
				weightStdDev: .8125,
				familyId: "FAMILY_SWINUB",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "V0221_MOVE_TACKLE_FAST",
			moveSettings: {
				movementId: "TACKLE_FAST",
				animationId: 4,
				pokemonType: "POKEMON_TYPE_NORMAL",
				power: 12,
				accuracyChance: 1,
				staminaLossScalar: .01,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "tackleFast",
				durationMs: 1100,
				damageWindowStartMs: 900,
				damageWindowEndMs: 1100,
				energyDelta: 10
			}
		}, {
			templateId: "V0221_POKEMON_PILOSWINE",
			pokemonSettings: {
				pokemonId: "PILOSWINE",
				modelScale: 1,
				type: "POKEMON_TYPE_ICE",
				type2: "POKEMON_TYPE_GROUND",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 200,
					baseAttack: 181,
					baseDefense: 147
				},
				quickMoves: ["TACKLE_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionPips: 1,
				pokedexHeightM: 1.09,
				pokedexWeightKg: 55.8,
				parentPokemonId: "SWINUB",
				heightStdDev: .13625,
				weightStdDev: 6.975,
				familyId: "FAMILY_SWINUB",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "V0222_MOVE_POUND_FAST",
			moveSettings: {
				movementId: "POUND_FAST",
				animationId: 4,
				pokemonType: "POKEMON_TYPE_NORMAL",
				power: 7,
				accuracyChance: 1,
				staminaLossScalar: .01,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "poundFast",
				durationMs: 540,
				damageWindowStartMs: 340,
				damageWindowEndMs: 540,
				energyDelta: 7
			}
		}, {
			templateId: "V0222_POKEMON_CORSOLA",
			pokemonSettings: {
				pokemonId: "CORSOLA",
				modelScale: 1,
				type: "POKEMON_TYPE_WATER",
				type2: "POKEMON_TYPE_ROCK",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 110,
					baseAttack: 118,
					baseDefense: 156
				},
				quickMoves: ["TACKLE_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionPips: 1,
				pokedexHeightM: .61,
				pokedexWeightKg: 5,
				heightStdDev: .07625,
				weightStdDev: .625,
				familyId: "FAMILY_CORSOLA",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "V0223_MOVE_CUT_FAST",
			moveSettings: {
				movementId: "CUT_FAST",
				animationId: 4,
				pokemonType: "POKEMON_TYPE_NORMAL",
				power: 12,
				accuracyChance: 1,
				staminaLossScalar: .01,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "cutFast",
				durationMs: 1130,
				damageWindowStartMs: 930,
				damageWindowEndMs: 1130,
				energyDelta: 10
			}
		}, {
			templateId: "V0223_POKEMON_REMORAID",
			pokemonSettings: {
				pokemonId: "REMORAID",
				modelScale: 1,
				type: "POKEMON_TYPE_WATER",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_HOVERING",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 70,
					baseAttack: 127,
					baseDefense: 69
				},
				quickMoves: ["TACKLE_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionIds: ["OCTILLERY"],
				evolutionPips: 1,
				pokedexHeightM: .61,
				pokedexWeightKg: 12,
				heightStdDev: .07625,
				weightStdDev: 1.5,
				familyId: "FAMILY_REMORAID",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "V0224_MOVE_POISON_JAB_FAST",
			moveSettings: {
				movementId: "POISON_JAB_FAST",
				animationId: 4,
				pokemonType: "POKEMON_TYPE_POISON",
				power: 12,
				accuracyChance: 1,
				staminaLossScalar: .01,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "poison_jabFast",
				durationMs: 1050,
				damageWindowStartMs: 850,
				damageWindowEndMs: 1050,
				energyDelta: 10
			}
		}, {
			templateId: "V0224_POKEMON_OCTILLERY",
			pokemonSettings: {
				pokemonId: "OCTILLERY",
				modelScale: 1,
				type: "POKEMON_TYPE_WATER",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_HOVERING",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 150,
					baseAttack: 197,
					baseDefense: 141
				},
				quickMoves: ["TACKLE_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionPips: 1,
				pokedexHeightM: .89,
				pokedexWeightKg: 28.5,
				parentPokemonId: "REMORAID",
				heightStdDev: .11125,
				weightStdDev: 3.5625,
				familyId: "FAMILY_REMORAID",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "V0225_MOVE_ACID_FAST",
			moveSettings: {
				movementId: "ACID_FAST",
				animationId: 4,
				pokemonType: "POKEMON_TYPE_POISON",
				power: 10,
				accuracyChance: 1,
				staminaLossScalar: .01,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "acidFast",
				durationMs: 1050,
				damageWindowStartMs: 850,
				damageWindowEndMs: 1050,
				energyDelta: 10
			}
		}, {
			templateId: "V0225_POKEMON_DELIBIRD",
			pokemonSettings: {
				pokemonId: "DELIBIRD",
				modelScale: 1,
				type: "POKEMON_TYPE_ICE",
				type2: "POKEMON_TYPE_FLYING",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 90,
					baseAttack: 128,
					baseDefense: 90
				},
				quickMoves: ["TACKLE_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionPips: 1,
				pokedexHeightM: .89,
				pokedexWeightKg: 16,
				heightStdDev: .11125,
				weightStdDev: 2,
				familyId: "FAMILY_DELIBIRD",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "V0226_MOVE_PSYCHO_CUT_FAST",
			moveSettings: {
				movementId: "PSYCHO_CUT_FAST",
				animationId: 4,
				pokemonType: "POKEMON_TYPE_PSYCHIC",
				power: 7,
				accuracyChance: 1,
				staminaLossScalar: .01,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "psychoCutFast",
				durationMs: 570,
				damageWindowStartMs: 370,
				damageWindowEndMs: 570,
				energyDelta: 7
			}
		}, {
			templateId: "V0226_POKEMON_MANTINE",
			pokemonSettings: {
				pokemonId: "MANTINE",
				modelScale: 1,
				type: "POKEMON_TYPE_WATER",
				type2: "POKEMON_TYPE_FLYING",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_HOVERING",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 130,
					baseAttack: 148,
					baseDefense: 260
				},
				quickMoves: ["TACKLE_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionPips: 1,
				pokedexHeightM: 2.11,
				pokedexWeightKg: 220,
				heightStdDev: .26375,
				weightStdDev: 27.5,
				familyId: "FAMILY_MANTINE",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "V0227_MOVE_ROCK_THROW_FAST",
			moveSettings: {
				movementId: "ROCK_THROW_FAST",
				animationId: 4,
				pokemonType: "POKEMON_TYPE_ROCK",
				power: 12,
				accuracyChance: 1,
				staminaLossScalar: .01,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "rockThrowFast",
				durationMs: 1360,
				damageWindowStartMs: 1160,
				damageWindowEndMs: 1360,
				energyDelta: 15
			}
		}, {
			templateId: "V0227_POKEMON_SKARMORY",
			pokemonSettings: {
				pokemonId: "SKARMORY",
				modelScale: 1,
				type: "POKEMON_TYPE_STEEL",
				type2: "POKEMON_TYPE_FLYING",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_FLYING",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 130,
					baseAttack: 148,
					baseDefense: 260
				},
				quickMoves: ["TACKLE_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionPips: 1,
				pokedexHeightM: 1.7,
				pokedexWeightKg: 50.5,
				heightStdDev: .2125,
				weightStdDev: 6.3125,
				familyId: "FAMILY_SKARMORY",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "V0228_MOVE_METAL_CLAW_FAST",
			moveSettings: {
				movementId: "METAL_CLAW_FAST",
				animationId: 4,
				pokemonType: "POKEMON_TYPE_STEEL",
				power: 8,
				accuracyChance: 1,
				staminaLossScalar: .01,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "metalClawFast",
				durationMs: 630,
				damageWindowStartMs: 430,
				damageWindowEndMs: 630,
				energyDelta: 7
			}
		}, {
			templateId: "V0228_POKEMON_HOUNDOUR",
			pokemonSettings: {
				pokemonId: "HOUNDOUR",
				modelScale: 1,
				type: "POKEMON_TYPE_DARK",
				type2: "POKEMON_TYPE_FIRE",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 90,
					baseAttack: 152,
					baseDefense: 93
				},
				quickMoves: ["TACKLE_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionIds: ["HOUNDOOM"],
				evolutionPips: 1,
				pokedexHeightM: .61,
				pokedexWeightKg: 10.8,
				heightStdDev: .07625,
				weightStdDev: 1.35,
				familyId: "FAMILY_HOUNDOUR",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "V0229_MOVE_BULLET_PUNCH_FAST",
			moveSettings: {
				movementId: "BULLET_PUNCH_FAST",
				animationId: 4,
				pokemonType: "POKEMON_TYPE_STEEL",
				power: 10,
				accuracyChance: 1,
				staminaLossScalar: .01,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "bullet_punchFast",
				durationMs: 1200,
				damageWindowStartMs: 1e3,
				damageWindowEndMs: 1200,
				energyDelta: 10
			}
		}, {
			templateId: "V0229_POKEMON_HOUNDOOM",
			pokemonSettings: {
				pokemonId: "HOUNDOOM",
				modelScale: 1,
				type: "POKEMON_TYPE_DARK",
				type2: "POKEMON_TYPE_FIRE",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 150,
					baseAttack: 224,
					baseDefense: 159
				},
				quickMoves: ["TACKLE_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionPips: 1,
				pokedexHeightM: 1.4,
				pokedexWeightKg: 35,
				parentPokemonId: "HOUNDOUR",
				heightStdDev: .175,
				weightStdDev: 4.375,
				familyId: "FAMILY_HOUNDOUR",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "V0230_MOVE_WATER_GUN_FAST",
			moveSettings: {
				movementId: "WATER_GUN_FAST",
				animationId: 4,
				pokemonType: "POKEMON_TYPE_WATER",
				power: 6,
				accuracyChance: 1,
				staminaLossScalar: .01,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "waterGunFast",
				durationMs: 500,
				damageWindowStartMs: 300,
				damageWindowEndMs: 500,
				energyDelta: 7
			}
		}, {
			templateId: "V0230_POKEMON_KINGDRA",
			pokemonSettings: {
				pokemonId: "KINGDRA",
				modelScale: 1,
				type: "POKEMON_TYPE_WATER",
				type2: "POKEMON_TYPE_DRAGON",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_HOVERING",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 150,
					baseAttack: 194,
					baseDefense: 194
				},
				quickMoves: ["TACKLE_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionPips: 1,
				pokedexHeightM: 1.8,
				pokedexWeightKg: 152,
				heightStdDev: .225,
				weightStdDev: 19,
				familyId: "FAMILY_HORSEA",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "V0231_MOVE_SPLASH_FAST",
			moveSettings: {
				movementId: "SPLASH_FAST",
				animationId: 4,
				pokemonType: "POKEMON_TYPE_WATER",
				accuracyChance: 1,
				staminaLossScalar: .01,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "splashFast",
				durationMs: 1230,
				damageWindowStartMs: 1030,
				damageWindowEndMs: 1230,
				energyDelta: 10
			}
		}, {
			templateId: "V0231_POKEMON_PHANPY",
			pokemonSettings: {
				pokemonId: "PHANPY",
				modelScale: 1,
				type: "POKEMON_TYPE_GROUND",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 180,
					baseAttack: 107,
					baseDefense: 107
				},
				quickMoves: ["TACKLE_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionIds: ["DONPHAN"],
				evolutionPips: 1,
				pokedexHeightM: .51,
				pokedexWeightKg: 33.5,
				heightStdDev: .06375,
				weightStdDev: 4.1875,
				familyId: "FAMILY_PHANPY",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "V0232_MOVE_WATER_GUN_FAST_BLASTOISE",
			moveSettings: {
				movementId: "WATER_GUN_FAST_BLASTOISE",
				animationId: 4,
				pokemonType: "POKEMON_TYPE_WATER",
				power: 6,
				accuracyChance: 1,
				staminaLossScalar: .01,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "waterGunFastBlastoise",
				durationMs: 500,
				damageWindowStartMs: 300,
				damageWindowEndMs: 500,
				energyDelta: 7
			}
		}, {
			templateId: "V0232_POKEMON_DONPHAN",
			pokemonSettings: {
				pokemonId: "DONPHAN",
				modelScale: 1,
				type: "POKEMON_TYPE_GROUND",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 180,
					baseAttack: 214,
					baseDefense: 214
				},
				quickMoves: ["TACKLE_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionPips: 1,
				pokedexHeightM: 1.09,
				pokedexWeightKg: 120,
				parentPokemonId: "PHANPY",
				heightStdDev: .13625,
				weightStdDev: 15,
				familyId: "FAMILY_PHANPY",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "V0233_MOVE_MUD_SLAP_FAST",
			moveSettings: {
				movementId: "MUD_SLAP_FAST",
				animationId: 4,
				pokemonType: "POKEMON_TYPE_GROUND",
				power: 15,
				accuracyChance: 1,
				staminaLossScalar: .01,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "mudSlapFast",
				durationMs: 1350,
				damageWindowStartMs: 1150,
				damageWindowEndMs: 1350,
				energyDelta: 12
			}
		}, {
			templateId: "V0233_POKEMON_PORYGON2",
			pokemonSettings: {
				pokemonId: "PORYGON2",
				modelScale: 1,
				type: "POKEMON_TYPE_NORMAL",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_HOVERING",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 170,
					baseAttack: 198,
					baseDefense: 183
				},
				quickMoves: ["TACKLE_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionPips: 1,
				pokedexHeightM: .61,
				pokedexWeightKg: 32.5,
				parentPokemonId: "PORYGON",
				heightStdDev: .07625,
				weightStdDev: 4.0625,
				familyId: "FAMILY_PORYGON",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "V0234_MOVE_ZEN_HEADBUTT_FAST",
			moveSettings: {
				movementId: "ZEN_HEADBUTT_FAST",
				animationId: 4,
				pokemonType: "POKEMON_TYPE_PSYCHIC",
				power: 12,
				accuracyChance: 1,
				staminaLossScalar: .01,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "zenHeadbuttFast",
				durationMs: 1050,
				damageWindowStartMs: 850,
				damageWindowEndMs: 1050,
				energyDelta: 9
			}
		}, {
			templateId: "V0234_POKEMON_STANTLER",
			pokemonSettings: {
				pokemonId: "STANTLER",
				modelScale: 1,
				type: "POKEMON_TYPE_NORMAL",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 146,
					baseAttack: 192,
					baseDefense: 132
				},
				quickMoves: ["TACKLE_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionPips: 1,
				pokedexHeightM: 1.4,
				pokedexWeightKg: 71.2,
				heightStdDev: .175,
				weightStdDev: 8.9,
				familyId: "FAMILY_STANTLER",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "V0235_MOVE_CONFUSION_FAST",
			moveSettings: {
				movementId: "CONFUSION_FAST",
				animationId: 4,
				pokemonType: "POKEMON_TYPE_PSYCHIC",
				power: 15,
				accuracyChance: 1,
				staminaLossScalar: .01,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "confusionFast",
				durationMs: 1510,
				damageWindowStartMs: 1310,
				damageWindowEndMs: 1510,
				energyDelta: 14
			}
		}, {
			templateId: "V0235_POKEMON_SMEARGLE",
			pokemonSettings: {
				pokemonId: "SMEARGLE",
				modelScale: 1,
				type: "POKEMON_TYPE_NORMAL",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 110,
					baseAttack: 40,
					baseDefense: 88
				},
				quickMoves: ["TACKLE_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionPips: 1,
				pokedexHeightM: 1.19,
				pokedexWeightKg: 58,
				heightStdDev: .14875,
				weightStdDev: 7.25,
				familyId: "FAMILY_SMEARGLE",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "V0236_MOVE_POISON_STING_FAST",
			moveSettings: {
				movementId: "POISON_STING_FAST",
				animationId: 4,
				pokemonType: "POKEMON_TYPE_POISON",
				power: 6,
				accuracyChance: 1,
				staminaLossScalar: .01,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "poisonStingFast",
				durationMs: 575,
				damageWindowStartMs: 375,
				damageWindowEndMs: 575,
				energyDelta: 8
			}
		}, {
			templateId: "V0236_POKEMON_TYROGUE",
			pokemonSettings: {
				pokemonId: "TYROGUE",
				modelScale: 1.23,
				type: "POKEMON_TYPE_FIGHTING",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: .85,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .2,
					collisionHeightM: .75,
					collisionHeadRadiusM: .185,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 11,
					jumpTimeS: 1.1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 70,
					baseAttack: 64,
					baseDefense: 64
				},
				quickMoves: ["ROCK_SMASH_FAST", "LOW_KICK_FAST"],
				cinematicMoves: ["BRICK_BREAK", "BODY_SLAM", "LOW_SWEEP"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionPips: 1,
				pokedexHeightM: .71,
				pokedexWeightKg: 21,
				heightStdDev: .08875,
				weightStdDev: 2.625,
				familyId: "FAMILY_TYROGUE",
				candyToEvolve: 25,
				kmBuddyDistance: 5,
				modelHeight: .7
			}
		}, {
			templateId: "V0237_MOVE_BUBBLE_FAST",
			moveSettings: {
				movementId: "BUBBLE_FAST",
				animationId: 4,
				pokemonType: "POKEMON_TYPE_WATER",
				power: 25,
				accuracyChance: 1,
				staminaLossScalar: .01,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "bubbleFast",
				durationMs: 2300,
				damageWindowStartMs: 2100,
				damageWindowEndMs: 2300,
				energyDelta: 25
			}
		}, {
			templateId: "V0237_POKEMON_HITMONTOP",
			pokemonSettings: {
				pokemonId: "HITMONTOP",
				modelScale: 1,
				type: "POKEMON_TYPE_FIGHTING",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 100,
					baseAttack: 173,
					baseDefense: 214
				},
				quickMoves: ["TACKLE_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionPips: 1,
				pokedexHeightM: 1.4,
				pokedexWeightKg: 48,
				parentPokemonId: "TYROGUE",
				heightStdDev: .175,
				weightStdDev: 6,
				familyId: "FAMILY_TYROGUE",
				candyToEvolve: 1,
				kmBuddyDistance: 5,
				modelHeight: 1
			}
		}, {
			templateId: "V0238_MOVE_FEINT_ATTACK_FAST",
			moveSettings: {
				movementId: "FEINT_ATTACK_FAST",
				animationId: 4,
				pokemonType: "POKEMON_TYPE_DARK",
				power: 12,
				accuracyChance: 1,
				staminaLossScalar: .01,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "feintAttackFast",
				durationMs: 1040,
				damageWindowStartMs: 840,
				damageWindowEndMs: 1040,
				energyDelta: 10
			}
		}, {
			templateId: "V0238_POKEMON_SMOOCHUM",
			pokemonSettings: {
				pokemonId: "SMOOCHUM",
				modelScale: 1.52,
				type: "POKEMON_TYPE_ICE",
				type2: "POKEMON_TYPE_PSYCHIC",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .4,
					cylinderHeightM: .075,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .35,
					collisionHeightM: .6,
					collisionHeadRadiusM: .215,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 90,
					baseAttack: 153,
					baseDefense: 116
				},
				quickMoves: ["FROST_BREATH_FAST", "POUND_FAST"],
				cinematicMoves: ["ICE_BEAM", "ICE_PUNCH", "PSYSHOCK"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionIds: ["JYNX"],
				evolutionPips: 1,
				pokedexHeightM: .41,
				pokedexWeightKg: 6,
				heightStdDev: .05125,
				weightStdDev: .75,
				familyId: "FAMILY_JYNX",
				candyToEvolve: 25,
				kmBuddyDistance: 2.5,
				modelHeight: .48
			}
		}, {
			templateId: "V0239_MOVE_STEEL_WING_FAST",
			moveSettings: {
				movementId: "STEEL_WING_FAST",
				animationId: 4,
				pokemonType: "POKEMON_TYPE_STEEL",
				power: 15,
				accuracyChance: 1,
				staminaLossScalar: .01,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "steelWingFast",
				durationMs: 1330,
				damageWindowStartMs: 1130,
				damageWindowEndMs: 1330,
				energyDelta: 12
			}
		}, {
			templateId: "V0239_POKEMON_ELEKID",
			pokemonSettings: {
				pokemonId: "ELEKID",
				modelScale: 1.33,
				type: "POKEMON_TYPE_ELECTRIC",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .4,
					cylinderHeightM: .85,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .3,
					collisionHeightM: .6,
					collisionHeadRadiusM: .215,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 11,
					jumpTimeS: 1.1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 90,
					baseAttack: 135,
					baseDefense: 110
				},
				quickMoves: ["THUNDER_SHOCK_FAST", "LOW_KICK_FAST"],
				cinematicMoves: ["THUNDER_PUNCH", "THUNDERBOLT", "DISCHARGE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionIds: ["ELECTABUZZ"],
				evolutionPips: 1,
				pokedexHeightM: .61,
				pokedexWeightKg: 23.5,
				heightStdDev: .07625,
				weightStdDev: 2.9375,
				familyId: "FAMILY_ELECTABUZZ",
				candyToEvolve: 25,
				kmBuddyDistance: 2.5,
				modelHeight: .6
			}
		}, {
			templateId: "V0240_MOVE_FIRE_FANG_FAST",
			moveSettings: {
				movementId: "FIRE_FANG_FAST",
				animationId: 4,
				pokemonType: "POKEMON_TYPE_FIRE",
				power: 10,
				accuracyChance: 1,
				staminaLossScalar: .01,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "fireFangFast",
				durationMs: 840,
				damageWindowStartMs: 640,
				damageWindowEndMs: 840,
				energyDelta: 8
			}
		}, {
			templateId: "V0240_POKEMON_MAGBY",
			pokemonSettings: {
				pokemonId: "MAGBY",
				modelScale: 1.23,
				type: "POKEMON_TYPE_FIRE",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .4,
					cylinderHeightM: .9,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .35,
					collisionHeightM: .9,
					collisionHeadRadiusM: .215,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 11,
					jumpTimeS: 1.1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 90,
					baseAttack: 151,
					baseDefense: 108
				},
				quickMoves: ["EMBER_FAST", "KARATE_CHOP_FAST"],
				cinematicMoves: ["BRICK_BREAK", "FIRE_PUNCH", "FLAMETHROWER"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionIds: ["MAGMAR"],
				evolutionPips: 1,
				pokedexHeightM: .71,
				pokedexWeightKg: 21.4,
				heightStdDev: .08875,
				weightStdDev: 2.675,
				familyId: "FAMILY_MAGMAR",
				candyToEvolve: 25,
				kmBuddyDistance: 2.5,
				modelHeight: .7
			}
		}, {
			templateId: "V0241_MOVE_ROCK_SMASH_FAST",
			moveSettings: {
				movementId: "ROCK_SMASH_FAST",
				animationId: 4,
				pokemonType: "POKEMON_TYPE_FIGHTING",
				power: 15,
				accuracyChance: 1,
				staminaLossScalar: .01,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "rockSmashFast",
				durationMs: 1410,
				damageWindowStartMs: 1210,
				damageWindowEndMs: 1410,
				energyDelta: 12
			}
		}, {
			templateId: "V0241_POKEMON_MILTANK",
			pokemonSettings: {
				pokemonId: "MILTANK",
				modelScale: 1,
				type: "POKEMON_TYPE_NORMAL",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 190,
					baseAttack: 157,
					baseDefense: 211
				},
				quickMoves: ["TACKLE_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionPips: 1,
				pokedexHeightM: 1.19,
				pokedexWeightKg: 75.5,
				heightStdDev: .14875,
				weightStdDev: 9.4375,
				familyId: "FAMILY_MILTANK",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "V0242_MOVE_TRANSFORM_FAST",
			moveSettings: {
				movementId: "TRANSFORM_FAST",
				animationId: 4,
				pokemonType: "POKEMON_TYPE_NORMAL",
				accuracyChance: 1,
				staminaLossScalar: .01,
				trainerLevelMin: 1,
				trainerLevelMax: 100,
				vfxName: "transformFast",
				durationMs: 1730,
				damageWindowStartMs: 300,
				damageWindowEndMs: 700
			}
		}, {
			templateId: "V0242_POKEMON_BLISSEY",
			pokemonSettings: {
				pokemonId: "BLISSEY",
				modelScale: 1,
				type: "POKEMON_TYPE_NORMAL",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 510,
					baseAttack: 129,
					baseDefense: 229
				},
				quickMoves: ["TACKLE_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionPips: 1,
				pokedexHeightM: 1.5,
				pokedexWeightKg: 46.8,
				parentPokemonId: "CHANSEY",
				heightStdDev: .1875,
				weightStdDev: 5.85,
				familyId: "FAMILY_CHANSEY",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "V0243_POKEMON_RAIKOU",
			pokemonSettings: {
				pokemonId: "RAIKOU",
				modelScale: 1,
				type: "POKEMON_TYPE_ELECTRIC",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 180,
					baseAttack: 241,
					baseDefense: 210
				},
				quickMoves: ["TACKLE_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionPips: 1,
				pokedexHeightM: 1.91,
				pokedexWeightKg: 178,
				heightStdDev: .23875,
				weightStdDev: 22.25,
				familyId: "FAMILY_RAIKOU",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "V0244_POKEMON_ENTEI",
			pokemonSettings: {
				pokemonId: "ENTEI",
				modelScale: 1,
				type: "POKEMON_TYPE_FIRE",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 230,
					baseAttack: 235,
					baseDefense: 176
				},
				quickMoves: ["TACKLE_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionPips: 1,
				pokedexHeightM: 2.11,
				pokedexWeightKg: 198,
				heightStdDev: .26375,
				weightStdDev: 24.75,
				familyId: "FAMILY_ENTEI",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "V0245_POKEMON_SUICUNE",
			pokemonSettings: {
				pokemonId: "SUICUNE",
				modelScale: 1,
				type: "POKEMON_TYPE_WATER",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 200,
					baseAttack: 180,
					baseDefense: 235
				},
				quickMoves: ["TACKLE_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionPips: 1,
				pokedexHeightM: 2.01,
				pokedexWeightKg: 187,
				heightStdDev: .25125,
				weightStdDev: 23.375,
				familyId: "FAMILY_SUICUNE",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "V0246_POKEMON_LARVITAR",
			pokemonSettings: {
				pokemonId: "LARVITAR",
				modelScale: 1,
				type: "POKEMON_TYPE_ROCK",
				type2: "POKEMON_TYPE_GROUND",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 100,
					baseAttack: 115,
					baseDefense: 93
				},
				quickMoves: ["TACKLE_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionIds: ["PUPITAR"],
				evolutionPips: 1,
				pokedexHeightM: .61,
				pokedexWeightKg: 72,
				heightStdDev: .07625,
				weightStdDev: 9,
				familyId: "FAMILY_LARVITAR",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "V0247_POKEMON_PUPITAR",
			pokemonSettings: {
				pokemonId: "PUPITAR",
				modelScale: 1,
				type: "POKEMON_TYPE_ROCK",
				type2: "POKEMON_TYPE_GROUND",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 140,
					baseAttack: 155,
					baseDefense: 133
				},
				quickMoves: ["TACKLE_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionIds: ["TYRANITAR"],
				evolutionPips: 1,
				pokedexHeightM: 1.19,
				pokedexWeightKg: 152,
				parentPokemonId: "LARVITAR",
				heightStdDev: .14875,
				weightStdDev: 19,
				familyId: "FAMILY_LARVITAR",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "V0248_POKEMON_TYRANITAR",
			pokemonSettings: {
				pokemonId: "TYRANITAR",
				modelScale: 1,
				type: "POKEMON_TYPE_ROCK",
				type2: "POKEMON_TYPE_DARK",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_JUMP",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 200,
					baseAttack: 251,
					baseDefense: 212
				},
				quickMoves: ["TACKLE_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionPips: 1,
				pokedexHeightM: 2.01,
				pokedexWeightKg: 202,
				parentPokemonId: "PUPITAR",
				heightStdDev: .25125,
				weightStdDev: 25.25,
				familyId: "FAMILY_LARVITAR",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "V0249_POKEMON_LUGIA",
			pokemonSettings: {
				pokemonId: "LUGIA",
				modelScale: 1,
				type: "POKEMON_TYPE_PSYCHIC",
				type2: "POKEMON_TYPE_FLYING",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_FLYING",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 212,
					baseAttack: 193,
					baseDefense: 323
				},
				quickMoves: ["TACKLE_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionPips: 1,
				pokedexHeightM: 5.21,
				pokedexWeightKg: 216,
				heightStdDev: .65125,
				weightStdDev: 27,
				familyId: "FAMILY_LUGIA",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "V0250_POKEMON_HO_OH",
			pokemonSettings: {
				pokemonId: "HO_OH",
				modelScale: 1,
				type: "POKEMON_TYPE_FIRE",
				type2: "POKEMON_TYPE_FLYING",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_FLYING",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 212,
					baseAttack: 263,
					baseDefense: 301
				},
				quickMoves: ["TACKLE_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionPips: 1,
				pokedexHeightM: 3.81,
				pokedexWeightKg: 199,
				heightStdDev: .47625,
				weightStdDev: 24.875,
				familyId: "FAMILY_HO_OH",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "V0251_POKEMON_CELEBI",
			pokemonSettings: {
				pokemonId: "CELEBI",
				modelScale: 1,
				type: "POKEMON_TYPE_PSYCHIC",
				type2: "POKEMON_TYPE_GRASS",
				camera: {
					diskRadiusM: .555,
					cylinderRadiusM: .37,
					cylinderHeightM: 1.48,
					shoulderModeScale: .5
				},
				encounter: {
					baseCaptureRate: .12,
					baseFleeRate: .05,
					collisionRadiusM: .364,
					collisionHeightM: .91,
					collisionHeadRadiusM: .3185,
					movementType: "MOVEMENT_PSYCHIC",
					movementTimerS: 11,
					jumpTimeS: 1,
					attackTimerS: 20
				},
				stats: {
					baseStamina: 200,
					baseAttack: 210,
					baseDefense: 210
				},
				quickMoves: ["TACKLE_FAST"],
				cinematicMoves: ["STRUGGLE"],
				animationTime: [1.3333, .6667, 1.6667, 2, 0, 2, 3, 3],
				evolutionPips: 1,
				pokedexHeightM: .61,
				pokedexWeightKg: 5,
				heightStdDev: .07625,
				weightStdDev: .625,
				familyId: "FAMILY_CELEBI",
				candyToEvolve: 1,
				kmBuddyDistance: 1,
				modelHeight: 1
			}
		}, {
			templateId: "android.test.canceled",
			iapItemDisplay: {
				sku: "android.test.canceled",
				category: "IAP_CATEGORY_POKECOINS",
				sortOrder: 1002
			}
		}, {
			templateId: "android.test.item_unavailable",
			iapItemDisplay: {
				sku: "android.test.item_unavailable",
				category: "IAP_CATEGORY_POKECOINS",
				sortOrder: 1003
			}
		}, {
			templateId: "android.test.purchased",
			iapItemDisplay: {
				sku: "android.test.purchased",
				category: "IAP_CATEGORY_POKECOINS",
				sortOrder: 1001
			}
		}, {
			templateId: "camera_aerialace",
			camera: {
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER", "CAM_TARGET_DEFENDER"],
				easeInSpeed: [.5, .5],
				eastOutSpeed: [.5, .5],
				durationSeconds: [0, 5],
				waitSeconds: [0, 0],
				transitionSeconds: [0, .2],
				angleDegree: [-20, 170],
				angleOffsetDegree: [0, 0],
				pitchDegree: [20, 20],
				pitchOffsetDegree: [0, 0],
				rollDegree: [0, 0],
				distanceMeters: [0, 1],
				heightPercent: [0, 0],
				vertCtrRatio: [1, .5]
			}
		}, {
			templateId: "camera_aerialace_leader_player_left_",
			camera: {
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER", "CAM_TARGET_DEFENDER"],
				easeInSpeed: [1, 0],
				eastOutSpeed: [1, 0],
				durationSeconds: [0, 5],
				waitSeconds: [0, 0],
				transitionSeconds: [0, .2],
				angleDegree: [160, 160],
				angleOffsetDegree: [0, 0],
				pitchDegree: [20, 10],
				pitchOffsetDegree: [0, -5],
				rollDegree: [0, 0],
				distanceMeters: [5, 1],
				heightPercent: [0, .5],
				vertCtrRatio: [.5, .5]
			}
		}, {
			templateId: "camera_aerialace_leader_player_right_",
			camera: {
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER", "CAM_TARGET_DEFENDER"],
				easeInSpeed: [1, 0],
				eastOutSpeed: [1, 0],
				durationSeconds: [0, 5],
				waitSeconds: [0, 0],
				transitionSeconds: [0, .2],
				angleDegree: [-170, -170],
				angleOffsetDegree: [0, 0],
				pitchDegree: [20, 10],
				pitchOffsetDegree: [0, -5],
				rollDegree: [0, 0],
				distanceMeters: [5, 1],
				heightPercent: [0, .5],
				vertCtrRatio: [.5, .5]
			}
		}, {
			templateId: "camera_aerialace_player_left_leader_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER"],
				easeInSpeed: [0],
				eastOutSpeed: [0],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.2],
				angleDegree: [-150],
				angleOffsetDegree: [0],
				pitchDegree: [10],
				pitchOffsetDegree: [-5],
				rollDegree: [0],
				distanceMeters: [1],
				heightPercent: [.5],
				vertCtrRatio: [.5]
			}
		}, {
			templateId: "camera_aerialace_player_right_leader_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER"],
				easeInSpeed: [0],
				eastOutSpeed: [0],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.2],
				angleDegree: [150],
				angleOffsetDegree: [0],
				pitchDegree: [10],
				pitchOffsetDegree: [-5],
				rollDegree: [0],
				distanceMeters: [1],
				heightPercent: [.5],
				vertCtrRatio: [.5]
			}
		}, {
			templateId: "camera_aircutter",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER"],
				easeInSpeed: [1],
				eastOutSpeed: [0],
				durationSeconds: [10],
				waitSeconds: [0],
				transitionSeconds: [.75],
				angleDegree: [160],
				angleOffsetDegree: [0],
				pitchDegree: [5],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [4],
				heightPercent: [0],
				vertCtrRatio: [.8]
			}
		}, {
			templateId: "camera_aircutter_leader_player_left_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER"],
				easeInSpeed: [1],
				eastOutSpeed: [0],
				durationSeconds: [10],
				waitSeconds: [0],
				transitionSeconds: [.75],
				angleDegree: [20],
				angleOffsetDegree: [0],
				pitchDegree: [5],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [2],
				heightPercent: [0],
				vertCtrRatio: [.8]
			}
		}, {
			templateId: "camera_aircutter_leader_player_right_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER"],
				easeInSpeed: [1],
				eastOutSpeed: [0],
				durationSeconds: [10],
				waitSeconds: [0],
				transitionSeconds: [.75],
				angleDegree: [-20],
				angleOffsetDegree: [0],
				pitchDegree: [5],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [2],
				heightPercent: [0],
				vertCtrRatio: [.8]
			}
		}, {
			templateId: "camera_aircutter_player_left_leader_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER"],
				easeInSpeed: [1],
				eastOutSpeed: [0],
				durationSeconds: [10],
				waitSeconds: [0],
				transitionSeconds: [.75],
				angleDegree: [-160],
				angleOffsetDegree: [0],
				pitchDegree: [5],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [4],
				heightPercent: [0],
				vertCtrRatio: [.8]
			}
		}, {
			templateId: "camera_aircutter_player_right_leader_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER"],
				easeInSpeed: [1],
				eastOutSpeed: [0],
				durationSeconds: [10],
				waitSeconds: [0],
				transitionSeconds: [.75],
				angleDegree: [160],
				angleOffsetDegree: [0],
				pitchDegree: [5],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [4],
				heightPercent: [0],
				vertCtrRatio: [.8]
			}
		}, {
			templateId: "camera_aircutterenter",
			camera: {
				interpolation: ["CAM_INTERP_CUT"],
				targetType: ["CAM_TARGET_ATTACKER_EDGE"],
				easeInSpeed: [0],
				eastOutSpeed: [0],
				durationSeconds: [10],
				waitSeconds: [0],
				transitionSeconds: [.5],
				angleDegree: [-50],
				angleOffsetDegree: [0],
				pitchDegree: [10],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [1],
				heightPercent: [0],
				vertCtrRatio: [1]
			}
		}, {
			templateId: "camera_airslash",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_EDGE"],
				easeInSpeed: [.5],
				eastOutSpeed: [.5],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.5],
				angleDegree: [-150],
				angleOffsetDegree: [0],
				pitchDegree: [0],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [1],
				heightPercent: [0],
				vertCtrRatio: [.75]
			}
		}, {
			templateId: "camera_airslash_swp",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER"],
				easeInSpeed: [.5],
				eastOutSpeed: [.5],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.4],
				angleDegree: [170],
				angleOffsetDegree: [0],
				pitchDegree: [15],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [2],
				heightPercent: [0],
				vertCtrRatio: [.75]
			}
		}, {
			templateId: "camera_ancientpower",
			camera: {
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER", "CAM_TARGET_ATTACKER_DEFENDER", "CAM_TARGET_DEFENDER"],
				easeInSpeed: [.5, .5, .5],
				eastOutSpeed: [.5, .5, .5],
				durationSeconds: [.4, 2.1, 5],
				waitSeconds: [0, 0, 0],
				transitionSeconds: [0, 1.6, .4],
				angleDegree: [-20, -10, 160],
				angleOffsetDegree: [0, 0, 0],
				pitchDegree: [20, 45, 10],
				pitchOffsetDegree: [0, 0, 0],
				rollDegree: [0, 0, 0],
				distanceMeters: [0, 1, 2.5],
				heightPercent: [0, 0, 0],
				vertCtrRatio: [1, 1, .5]
			}
		}, {
			templateId: "camera_ancientpower_leader_player_left_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER", "CAM_TARGET_DEFENDER"],
				easeInSpeed: [.5, .5],
				eastOutSpeed: [.5, .5],
				durationSeconds: [1.9, 5],
				waitSeconds: [0, 0],
				transitionSeconds: [1.25, .4],
				angleDegree: [-10, 160],
				angleOffsetDegree: [5, 0],
				pitchDegree: [45, 10],
				pitchOffsetDegree: [0, 0],
				rollDegree: [0, 0],
				distanceMeters: [1.5, 2.5],
				heightPercent: [0, 0],
				vertCtrRatio: [1, .5]
			}
		}, {
			templateId: "camera_ancientpower_leader_player_right_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER", "CAM_TARGET_DEFENDER"],
				easeInSpeed: [.5, .5],
				eastOutSpeed: [.5, .5],
				durationSeconds: [1.9, 5],
				waitSeconds: [0, 0],
				transitionSeconds: [1.25, .4],
				angleDegree: [10, -160],
				angleOffsetDegree: [-5, 0],
				pitchDegree: [45, 10],
				pitchOffsetDegree: [0, 0],
				rollDegree: [0, 0],
				distanceMeters: [1.5, 2.5],
				heightPercent: [0, 0],
				vertCtrRatio: [1, .5]
			}
		}, {
			templateId: "camera_ancientpower_player_left_leader_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER", "CAM_TARGET_DEFENDER"],
				easeInSpeed: [.5, .5],
				eastOutSpeed: [.5, .5],
				durationSeconds: [1.9, 5],
				waitSeconds: [0, 0],
				transitionSeconds: [1.25, .4],
				angleDegree: [10, -160],
				angleOffsetDegree: [0, 0],
				pitchDegree: [45, 10],
				pitchOffsetDegree: [0, 0],
				rollDegree: [0, 0],
				distanceMeters: [1.5, 2.5],
				heightPercent: [0, 0],
				vertCtrRatio: [1, .5]
			}
		}, {
			templateId: "camera_ancientpower_player_right_leader_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER", "CAM_TARGET_DEFENDER"],
				easeInSpeed: [.5, .5],
				eastOutSpeed: [.5, .5],
				durationSeconds: [1.9, 5],
				waitSeconds: [0, 0],
				transitionSeconds: [1.25, .4],
				angleDegree: [-10, 160],
				angleOffsetDegree: [0, 0],
				pitchDegree: [45, 10],
				pitchOffsetDegree: [0, 0],
				rollDegree: [0, 0],
				distanceMeters: [1.5, 2.5],
				heightPercent: [0, 0],
				vertCtrRatio: [1, .5]
			}
		}, {
			templateId: "camera_aquajet",
			camera: {
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER", "CAM_TARGET_ATTACKER", "CAM_TARGET_DEFENDER"],
				easeInSpeed: [.5, .5, .5],
				eastOutSpeed: [.5, .5, .5],
				durationSeconds: [0, .5, .5],
				waitSeconds: [0, 0, 0],
				transitionSeconds: [0, .33, .5],
				angleDegree: [-20, -90, 165],
				angleOffsetDegree: [0, 0, 0],
				pitchDegree: [20, 5, 5],
				pitchOffsetDegree: [0, 0, 0],
				rollDegree: [0, 0, 0],
				distanceMeters: [0, .5, 3],
				heightPercent: [0, 0, 0],
				vertCtrRatio: [1, .5, .5]
			}
		}, {
			templateId: "camera_aquajet_leader_player_left_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_GROUND", "CAM_TARGET_ATTACKER_DEFENDER_WORLD", "CAM_TARGET_ATTACKER_DEFENDER_WORLD"],
				easeInSpeed: [.5, .5, 0],
				eastOutSpeed: [.5, 0, 1],
				durationSeconds: [.33, .66, 5],
				waitSeconds: [0, 0, 0],
				transitionSeconds: [.33, .66, .33],
				angleDegree: [-150, -165, -165],
				angleOffsetDegree: [0, 0, 0],
				pitchDegree: [10, 10, 10],
				pitchOffsetDegree: [0, 2.5, 0],
				rollDegree: [0, 0, 0],
				distanceMeters: [1, 2, 2],
				heightPercent: [0, 0, 0],
				vertCtrRatio: [.5, 1, 1]
			}
		}, {
			templateId: "camera_aquajet_leader_player_right_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_GROUND", "CAM_TARGET_ATTACKER_DEFENDER_WORLD", "CAM_TARGET_ATTACKER_DEFENDER_WORLD"],
				easeInSpeed: [.5, .5, 0],
				eastOutSpeed: [.5, 0, 1],
				durationSeconds: [.33, .66, 5],
				waitSeconds: [0, 0, 0],
				transitionSeconds: [.33, .66, .33],
				angleDegree: [150, 145, 145],
				angleOffsetDegree: [0, 0, 0],
				pitchDegree: [10, 10, 10],
				pitchOffsetDegree: [0, 2.5, 0],
				rollDegree: [0, 0, 0],
				distanceMeters: [1, 2, 2],
				heightPercent: [0, 0, 0],
				vertCtrRatio: [.5, 1, 1]
			}
		}, {
			templateId: "camera_aquajet_player_left_leader_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER_WORLD", "CAM_TARGET_DEFENDER_GROUND", "CAM_TARGET_DEFENDER_GROUND"],
				easeInSpeed: [.5, .5, 0],
				eastOutSpeed: [.5, 0, 1],
				durationSeconds: [.33, .66, 5],
				waitSeconds: [0, 0, 0],
				transitionSeconds: [.33, .66, .33],
				angleDegree: [-165, -165, -165],
				angleOffsetDegree: [0, 0, 0],
				pitchDegree: [10, 10, 10],
				pitchOffsetDegree: [0, 5, 0],
				rollDegree: [0, 0, 0],
				distanceMeters: [0, 3.5, 3.5],
				heightPercent: [0, 0, 0],
				vertCtrRatio: [1, 1, 1]
			}
		}, {
			templateId: "camera_aquajet_player_right_leader_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER_WORLD", "CAM_TARGET_DEFENDER_GROUND", "CAM_TARGET_DEFENDER_GROUND"],
				easeInSpeed: [.5, .5, 0],
				eastOutSpeed: [.5, 0, 1],
				durationSeconds: [.33, .66, 5],
				waitSeconds: [0, 0, 0],
				transitionSeconds: [.33, .66, .33],
				angleDegree: [150, 150, 150],
				angleOffsetDegree: [0, 0, 0],
				pitchDegree: [10, 10, 10],
				pitchOffsetDegree: [0, 5, 0],
				rollDegree: [0, 0, 0],
				distanceMeters: [0, 3.5, 3.5],
				heightPercent: [0, 0, 0],
				vertCtrRatio: [1, 1, 1]
			}
		}, {
			templateId: "camera_aquajetenter_leader_player_left_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_GROUND"],
				easeInSpeed: [1],
				eastOutSpeed: [.5],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.33],
				angleDegree: [-150],
				angleOffsetDegree: [0],
				pitchDegree: [10],
				pitchOffsetDegree: [-5],
				rollDegree: [0],
				distanceMeters: [1],
				heightPercent: [0],
				vertCtrRatio: [.5]
			}
		}, {
			templateId: "camera_aquajetenter_leader_player_right_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_GROUND"],
				easeInSpeed: [1],
				eastOutSpeed: [.5],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.33],
				angleDegree: [150],
				angleOffsetDegree: [0],
				pitchDegree: [10],
				pitchOffsetDegree: [-5],
				rollDegree: [0],
				distanceMeters: [1],
				heightPercent: [0],
				vertCtrRatio: [.5]
			}
		}, {
			templateId: "camera_aquajetenter_player_left_leader_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER_WORLD"],
				easeInSpeed: [0],
				eastOutSpeed: [.5],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.33],
				angleDegree: [-145],
				angleOffsetDegree: [0],
				pitchDegree: [10],
				pitchOffsetDegree: [5],
				rollDegree: [0],
				distanceMeters: [0],
				heightPercent: [0],
				vertCtrRatio: [1]
			}
		}, {
			templateId: "camera_aquajetenter_player_right_leader_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER_WORLD"],
				easeInSpeed: [0],
				eastOutSpeed: [.5],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.33],
				angleDegree: [145],
				angleOffsetDegree: [0],
				pitchDegree: [10],
				pitchOffsetDegree: [5],
				rollDegree: [0],
				distanceMeters: [0],
				heightPercent: [0],
				vertCtrRatio: [1]
			}
		}, {
			templateId: "camera_aquatail",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER"],
				easeInSpeed: [.5],
				eastOutSpeed: [.5],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.15],
				angleDegree: [160],
				angleOffsetDegree: [0],
				pitchDegree: [20],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [2],
				heightPercent: [0],
				vertCtrRatio: [.5]
			}
		}, {
			templateId: "camera_aquatailenter",
			camera: {
				interpolation: ["CAM_INTERP_CUT"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER"],
				easeInSpeed: [.5],
				eastOutSpeed: [.5],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [0],
				angleDegree: [-20],
				angleOffsetDegree: [0],
				pitchDegree: [20],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [0],
				heightPercent: [0],
				vertCtrRatio: [1]
			}
		}, {
			templateId: "camera_battlefainted",
			camera: {
				nextCamera: "battlefainted",
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER_GROUND"],
				easeInSpeed: [0],
				eastOutSpeed: [0],
				durationSeconds: [2],
				waitSeconds: [0],
				transitionSeconds: [2],
				angleDegree: [-160],
				angleOffsetDegree: [0],
				pitchDegree: [10],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [2.5],
				heightPercent: [0],
				vertCtrRatio: [.85]
			}
		}, {
			templateId: "camera_battlewait",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_SHOULDER_ATTACKER_DEFENDER_MIRROR"],
				easeInSpeed: [.5],
				eastOutSpeed: [.5],
				durationSeconds: [10],
				waitSeconds: [0],
				transitionSeconds: [0],
				angleDegree: [-20],
				angleOffsetDegree: [0],
				pitchDegree: [20],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [0],
				heightPercent: [0],
				vertCtrRatio: [1]
			}
		}, {
			templateId: "camera_bodyslam",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER"],
				easeInSpeed: [0],
				eastOutSpeed: [0],
				durationSeconds: [10],
				waitSeconds: [0],
				transitionSeconds: [.26],
				angleDegree: [170],
				angleOffsetDegree: [0],
				pitchDegree: [20],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [2],
				heightPercent: [0],
				vertCtrRatio: [1]
			}
		}, {
			templateId: "camera_boneclub",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER_EDGE"],
				easeInSpeed: [0],
				eastOutSpeed: [0],
				durationSeconds: [10],
				waitSeconds: [.25],
				transitionSeconds: [.25],
				angleDegree: [120],
				angleOffsetDegree: [0],
				pitchDegree: [15],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [3],
				heightPercent: [0],
				vertCtrRatio: [.5]
			}
		}, {
			templateId: "camera_boneclubenter",
			camera: {
				interpolation: ["CAM_INTERP_CUT"],
				targetType: ["CAM_TARGET_DEFENDER_ATTACKER_EDGE"],
				easeInSpeed: [0],
				eastOutSpeed: [0],
				durationSeconds: [10],
				waitSeconds: [0],
				transitionSeconds: [.5],
				angleDegree: [140],
				angleOffsetDegree: [0],
				pitchDegree: [15],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [.5],
				heightPercent: [0],
				vertCtrRatio: [.5]
			}
		}, {
			templateId: "camera_bothsidecut",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER"],
				easeInSpeed: [.5],
				eastOutSpeed: [.5],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [0],
				angleDegree: [-90],
				angleOffsetDegree: [0],
				pitchDegree: [15],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [1.5],
				heightPercent: [0],
				vertCtrRatio: [1]
			}
		}, {
			templateId: "camera_brickbreak",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER"],
				easeInSpeed: [.5],
				eastOutSpeed: [.5],
				durationSeconds: [10],
				waitSeconds: [.1],
				transitionSeconds: [.2],
				angleDegree: [165],
				angleOffsetDegree: [0],
				pitchDegree: [5],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [3],
				heightPercent: [0],
				vertCtrRatio: [.5]
			}
		}, {
			templateId: "camera_brickbreak_leader_player_left_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER_GROUND"],
				easeInSpeed: [0],
				eastOutSpeed: [0],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.33],
				angleDegree: [-5],
				angleOffsetDegree: [0],
				pitchDegree: [25],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [2],
				heightPercent: [0],
				vertCtrRatio: [.75]
			}
		}, {
			templateId: "camera_brickbreak_leader_player_right_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER_GROUND"],
				easeInSpeed: [0],
				eastOutSpeed: [0],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.33],
				angleDegree: [-20],
				angleOffsetDegree: [0],
				pitchDegree: [20],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [4],
				heightPercent: [0],
				vertCtrRatio: [.75]
			}
		}, {
			templateId: "camera_brickbreak_player_left_leader_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER_GROUND"],
				easeInSpeed: [0],
				eastOutSpeed: [0],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.33],
				angleDegree: [-175],
				angleOffsetDegree: [3],
				pitchDegree: [25],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [3],
				heightPercent: [0],
				vertCtrRatio: [.75]
			}
		}, {
			templateId: "camera_brickbreak_player_right_leader_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER_GROUND"],
				easeInSpeed: [0],
				eastOutSpeed: [0],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.33],
				angleDegree: [145],
				angleOffsetDegree: [-5],
				pitchDegree: [20],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [4],
				heightPercent: [0],
				vertCtrRatio: [.75]
			}
		}, {
			templateId: "camera_brine",
			camera: {
				interpolation: ["CAM_INTERP_CUT"],
				targetType: ["CAM_TARGET_DEFENDER_GROUND"],
				easeInSpeed: [.5],
				eastOutSpeed: [.5],
				durationSeconds: [5],
				waitSeconds: [.25],
				transitionSeconds: [.3],
				angleDegree: [155],
				angleOffsetDegree: [0],
				pitchDegree: [10],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [4],
				heightPercent: [0],
				vertCtrRatio: [1]
			}
		}, {
			templateId: "camera_bubblebeam",
			camera: {
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR", "CAM_INTERP_CUT"],
				targetType: ["CAM_TARGET_ATTACKER_EDGE", "CAM_TARGET_ATTACKER_EDGE", "CAM_TARGET_ATTACKER_EDGE", "CAM_TARGET_DEFENDER"],
				easeInSpeed: [.5, .5, .5, .5],
				eastOutSpeed: [.5, .5, .5, .5],
				durationSeconds: [0, .5, .67, 5],
				waitSeconds: [0, 0, 0, 0],
				transitionSeconds: [0, .5, .67, 0],
				angleDegree: [-135, -120, -160, 140],
				angleOffsetDegree: [0, 0, 0, 0],
				pitchDegree: [20, 5, 0, 15],
				pitchOffsetDegree: [0, 0, 0, 0],
				rollDegree: [0, 0, 5, 0],
				distanceMeters: [2, -.5, 2.5, 1],
				heightPercent: [.25, 0, 0, 0],
				vertCtrRatio: [1, .5, .5, .5]
			}
		}, {
			templateId: "camera_bugbuzz",
			camera: {
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER", "CAM_TARGET_ATTACKER", "CAM_TARGET_DEFENDER"],
				easeInSpeed: [.5, .5, .5],
				eastOutSpeed: [.5, .5, .5],
				durationSeconds: [0, 1.5, 1.67],
				waitSeconds: [0, 0, 0],
				transitionSeconds: [0, 1, .33],
				angleDegree: [-20, -20, 160],
				angleOffsetDegree: [0, 0, 0],
				pitchDegree: [20, 15, 15],
				pitchOffsetDegree: [0, 0, 0],
				rollDegree: [0, 0, 0],
				distanceMeters: [0, 3, 3],
				heightPercent: [0, .15, 0],
				vertCtrRatio: [1, .75, .5]
			}
		}, {
			templateId: "camera_crosschop",
			camera: {
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_SHOULDER_ATTACKER_DEFENDER", "CAM_TARGET_DEFENDER"],
				easeInSpeed: [.5, .5],
				eastOutSpeed: [.5, .5],
				durationSeconds: [0, 5],
				waitSeconds: [0, 0],
				transitionSeconds: [0, .3],
				angleDegree: [-20, 165],
				angleOffsetDegree: [0, 0],
				pitchDegree: [20, 15],
				pitchOffsetDegree: [0, 0],
				rollDegree: [0, 0],
				distanceMeters: [0, 2.5],
				heightPercent: [0, 0],
				vertCtrRatio: [.5, .5]
			}
		}, {
			templateId: "camera_crosspoison",
			camera: {
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER", "CAM_TARGET_DEFENDER", "CAM_TARGET_DEFENDER"],
				easeInSpeed: [.5, .5, .5],
				eastOutSpeed: [.5, .5, .5],
				durationSeconds: [0, .45, 5],
				waitSeconds: [0, 0, 0],
				transitionSeconds: [0, .15, .1],
				angleDegree: [-20, 160, 160],
				angleOffsetDegree: [0, -5, -5],
				pitchDegree: [20, 5, 5],
				pitchOffsetDegree: [0, 0, -3],
				rollDegree: [0, 0, 0],
				distanceMeters: [0, 3, 3.5],
				heightPercent: [0, 0, 0],
				vertCtrRatio: [1, .5, .5]
			}
		}, {
			templateId: "camera_cutfromattacker_player_left_leader_",
			camera: {
				interpolation: ["CAM_INTERP_CUT"],
				targetType: ["CAM_TARGET_ATTACKER_GROUND"],
				easeInSpeed: [1],
				eastOutSpeed: [1],
				durationSeconds: [0],
				waitSeconds: [0],
				transitionSeconds: [0],
				angleDegree: [30],
				angleOffsetDegree: [0],
				pitchDegree: [10],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [4],
				heightPercent: [0],
				vertCtrRatio: [.5]
			}
		}, {
			templateId: "camera_cutfromattacker_player_right_leader_",
			camera: {
				interpolation: ["CAM_INTERP_CUT"],
				targetType: ["CAM_TARGET_ATTACKER_GROUND"],
				easeInSpeed: [1],
				eastOutSpeed: [1],
				durationSeconds: [0],
				waitSeconds: [0],
				transitionSeconds: [0],
				angleDegree: [-30],
				angleOffsetDegree: [0],
				pitchDegree: [10],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [4],
				heightPercent: [0],
				vertCtrRatio: [.5]
			}
		}, {
			templateId: "camera_cutfromdefender_leader_player_left_",
			camera: {
				interpolation: ["CAM_INTERP_CUT"],
				targetType: ["CAM_TARGET_ATTACKER_GROUND"],
				easeInSpeed: [1],
				eastOutSpeed: [1],
				durationSeconds: [0],
				waitSeconds: [0],
				transitionSeconds: [0],
				angleDegree: [-150],
				angleOffsetDegree: [0],
				pitchDegree: [10],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [4],
				heightPercent: [0],
				vertCtrRatio: [.5]
			}
		}, {
			templateId: "camera_cutfromdefender_leader_player_right_",
			camera: {
				interpolation: ["CAM_INTERP_CUT"],
				targetType: ["CAM_TARGET_ATTACKER_GROUND"],
				easeInSpeed: [1],
				eastOutSpeed: [1],
				durationSeconds: [0],
				waitSeconds: [0],
				transitionSeconds: [0],
				angleDegree: [150],
				angleOffsetDegree: [0],
				pitchDegree: [10],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [4],
				heightPercent: [0],
				vertCtrRatio: [.5]
			}
		}, {
			templateId: "camera_cutreturn",
			camera: {
				nextCamera: "battlewait",
				interpolation: ["CAM_INTERP_CUT"],
				targetType: ["CAM_TARGET_SHOULDER_ATTACKER_DEFENDER_MIRROR"],
				easeInSpeed: [.5],
				eastOutSpeed: [.5],
				durationSeconds: [10],
				waitSeconds: [0],
				transitionSeconds: [0],
				angleDegree: [-20],
				angleOffsetDegree: [0],
				pitchDegree: [20],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [0],
				heightPercent: [0],
				vertCtrRatio: [1]
			}
		}, {
			templateId: "camera_cuttofacedefender_leader_player_left_",
			camera: {
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER", "CAM_TARGET_DEFENDER"],
				easeInSpeed: [1, 1],
				eastOutSpeed: [1, 0],
				durationSeconds: [0, 5],
				waitSeconds: [0, 0],
				transitionSeconds: [0, .33],
				angleDegree: [150, 150],
				angleOffsetDegree: [-5, -5],
				pitchDegree: [20, 10],
				pitchOffsetDegree: [0, 0],
				rollDegree: [0, 0],
				distanceMeters: [3.5, 2.5],
				heightPercent: [0, 0],
				vertCtrRatio: [.75, .75]
			}
		}, {
			templateId: "camera_cuttofacedefender_leader_player_right_",
			camera: {
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER", "CAM_TARGET_DEFENDER"],
				easeInSpeed: [1, 1],
				eastOutSpeed: [1, 0],
				durationSeconds: [0, 5],
				waitSeconds: [0, 0],
				transitionSeconds: [0, .33],
				angleDegree: [-150, -150],
				angleOffsetDegree: [5, 5],
				pitchDegree: [20, 10],
				pitchOffsetDegree: [0, 0],
				rollDegree: [0, 0],
				distanceMeters: [3.5, 2.5],
				heightPercent: [0, 0],
				vertCtrRatio: [.75, .75]
			}
		}, {
			templateId: "camera_cuttofacedefender_player_left_leader_",
			camera: {
				interpolation: ["CAM_INTERP_CUT"],
				targetType: ["CAM_TARGET_DEFENDER"],
				easeInSpeed: [1],
				eastOutSpeed: [1],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [0],
				angleDegree: [-140],
				angleOffsetDegree: [5],
				pitchDegree: [10],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [1.5],
				heightPercent: [0],
				vertCtrRatio: [.75]
			}
		}, {
			templateId: "camera_cuttofacedefender_player_right_leader_",
			camera: {
				interpolation: ["CAM_INTERP_CUT"],
				targetType: ["CAM_TARGET_DEFENDER"],
				easeInSpeed: [1],
				eastOutSpeed: [1],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [0],
				angleDegree: [140],
				angleOffsetDegree: [-2.5],
				pitchDegree: [10],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [1.5],
				heightPercent: [0],
				vertCtrRatio: [.75]
			}
		}, {
			templateId: "camera_darkpulse",
			camera: {
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER", "CAM_TARGET_ATTACKER_DEFENDER"],
				easeInSpeed: [.5, .5],
				eastOutSpeed: [.5, .5],
				durationSeconds: [.45, 5],
				waitSeconds: [0, 0],
				transitionSeconds: [.15, .5],
				angleDegree: [-90, -90],
				angleOffsetDegree: [0, 0],
				pitchDegree: [25, 15],
				pitchOffsetDegree: [0, 0],
				rollDegree: [0, 0],
				distanceMeters: [0, 1],
				heightPercent: [0, 0],
				vertCtrRatio: [.5, .5]
			}
		}, {
			templateId: "camera_dazzlinggleam",
			camera: {
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER", "CAM_TARGET_ATTACKER", "CAM_TARGET_ATTACKER_DEFENDER_MIRROR"],
				easeInSpeed: [.5, .5, .5],
				eastOutSpeed: [.5, .5, .5],
				durationSeconds: [0, 1, 5],
				waitSeconds: [0, 0, 0],
				transitionSeconds: [0, .4, .3],
				angleDegree: [-20, -160, -20],
				angleOffsetDegree: [0, 0, 0],
				pitchDegree: [20, 20, 20],
				pitchOffsetDegree: [0, 0, 0],
				rollDegree: [0, 0, 0],
				distanceMeters: [0, .75, 0],
				heightPercent: [0, 0, 0],
				vertCtrRatio: [1, 1, 1]
			}
		}, {
			templateId: "camera_defaultattack",
			camera: {
				interpolation: ["CAM_INTERP_CUT"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER_WORLD"],
				easeInSpeed: [0],
				eastOutSpeed: [0],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [0],
				angleDegree: [-20],
				angleOffsetDegree: [0],
				pitchDegree: [20],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [1],
				heightPercent: [0],
				vertCtrRatio: [1]
			}
		}, {
			templateId: "camera_defaultattack_leader_player_left_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER_WORLD"],
				easeInSpeed: [0],
				eastOutSpeed: [0],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.33],
				angleDegree: [-145],
				angleOffsetDegree: [0],
				pitchDegree: [10],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [0],
				heightPercent: [0],
				vertCtrRatio: [1]
			}
		}, {
			templateId: "camera_defaultattack_leader_player_right_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER_WORLD"],
				easeInSpeed: [0],
				eastOutSpeed: [0],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.33],
				angleDegree: [145],
				angleOffsetDegree: [0],
				pitchDegree: [10],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [0],
				heightPercent: [0],
				vertCtrRatio: [1]
			}
		}, {
			templateId: "camera_defaultattack_player_left_leader_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER_WORLD"],
				easeInSpeed: [0],
				eastOutSpeed: [0],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.33],
				angleDegree: [-145],
				angleOffsetDegree: [0],
				pitchDegree: [10],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [0],
				heightPercent: [0],
				vertCtrRatio: [1]
			}
		}, {
			templateId: "camera_defaultattack_player_right_leader_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER_WORLD"],
				easeInSpeed: [0],
				eastOutSpeed: [0],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.33],
				angleDegree: [145],
				angleOffsetDegree: [0],
				pitchDegree: [10],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [0],
				heightPercent: [0],
				vertCtrRatio: [1]
			}
		}, {
			templateId: "camera_dig",
			camera: {
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_LINEAR", "CAM_INTERP_CUT"],
				targetType: ["CAM_TARGET_ATTACKER", "CAM_TARGET_ATTACKER", "CAM_TARGET_ATTACKER_DEFENDER"],
				easeInSpeed: [.5, .5, .5],
				eastOutSpeed: [.5, .5, .5],
				durationSeconds: [0, 2.3, 5],
				waitSeconds: [0, 0, 0],
				transitionSeconds: [0, .9, 0],
				angleDegree: [-135, -165, -20],
				angleOffsetDegree: [0, 0, 0],
				pitchDegree: [20, 5, 20],
				pitchOffsetDegree: [0, 0, 0],
				rollDegree: [0, 0, 0],
				distanceMeters: [2, .25, 0],
				heightPercent: [0, 0, 0],
				vertCtrRatio: [.5, .5, 1]
			}
		}, {
			templateId: "camera_disarmingvoice",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER_MIRROR", "CAM_TARGET_ATTACKER_DEFENDER_MIRROR"],
				easeInSpeed: [.5, 0],
				eastOutSpeed: [.5, 0],
				durationSeconds: [.4, 5],
				waitSeconds: [0, 0],
				transitionSeconds: [.4, 1.2],
				angleDegree: [-20, -20],
				angleOffsetDegree: [0, 5],
				pitchDegree: [20, 20],
				pitchOffsetDegree: [0, 0],
				rollDegree: [0, 0],
				distanceMeters: [1, 0],
				heightPercent: [0, 0],
				vertCtrRatio: [.5, .5]
			}
		}, {
			templateId: "camera_disarmingvoiceenter",
			camera: {
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER", "CAM_TARGET_ATTACKER"],
				easeInSpeed: [.5, .5],
				eastOutSpeed: [.5, .5],
				durationSeconds: [0, 5],
				waitSeconds: [0, 0],
				transitionSeconds: [0, .6],
				angleDegree: [-20, -160],
				angleOffsetDegree: [0, 0],
				pitchDegree: [20, 0],
				pitchOffsetDegree: [0, 0],
				rollDegree: [0, 0],
				distanceMeters: [.5, 1.75],
				heightPercent: [0, 0],
				vertCtrRatio: [1, .5]
			}
		}, {
			templateId: "camera_discharge",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER", "CAM_TARGET_ATTACKER_DEFENDER"],
				easeInSpeed: [.5, .5],
				eastOutSpeed: [.5, .5],
				durationSeconds: [.6, 5],
				waitSeconds: [0, 0],
				transitionSeconds: [.6, .15],
				angleDegree: [-170, -40],
				angleOffsetDegree: [0, 0],
				pitchDegree: [5, 0],
				pitchOffsetDegree: [0, 0],
				rollDegree: [0, 0],
				distanceMeters: [2, 2],
				heightPercent: [.25, 0],
				vertCtrRatio: [1, 1]
			}
		}, {
			templateId: "camera_dischargeenter",
			camera: {
				interpolation: ["CAM_INTERP_CUT"],
				targetType: ["CAM_TARGET_ATTACKER"],
				easeInSpeed: [.5],
				eastOutSpeed: [.5],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.4],
				angleDegree: [-170],
				angleOffsetDegree: [0],
				pitchDegree: [10],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [1],
				heightPercent: [.25],
				vertCtrRatio: [.5]
			}
		}, {
			templateId: "camera_dragonbreath",
			camera: {
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR", "CAM_INTERP_CUT", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER", "CAM_TARGET_ATTACKER", "CAM_TARGET_ATTACKER", "CAM_TARGET_ATTACKER", "CAM_TARGET_DEFENDER", "CAM_TARGET_DEFENDER"],
				easeInSpeed: [.5, .5, .5, .5, .5, .5],
				eastOutSpeed: [.5, .5, .5, .5, .5, .5],
				durationSeconds: [0, .5, .33, .5, 0, 5],
				waitSeconds: [0, 0, 0, 0, 0, 0],
				transitionSeconds: [0, .5, .33, .5, 0, .5],
				angleDegree: [-160, -160, -160, -135, 160, 175],
				angleOffsetDegree: [0, 0, 0, 0, 0, 0],
				pitchDegree: [0, 0, 0, 0, 10, 0],
				pitchOffsetDegree: [0, 0, 0, 0, 0, 0],
				rollDegree: [0, 0, 0, 0, 0, 0],
				distanceMeters: [.5, 0, 1.5, 2.5, 0, -.5],
				heightPercent: [0, 0, -.25, 0, 0, 0],
				vertCtrRatio: [.5, .5, 0, .5, 1, 1]
			}
		}, {
			templateId: "camera_dragonclaw",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER_ATTACKER"],
				easeInSpeed: [0],
				eastOutSpeed: [0],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.4],
				angleDegree: [140],
				angleOffsetDegree: [0],
				pitchDegree: [2],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [0],
				heightPercent: [0],
				vertCtrRatio: [.5]
			}
		}, {
			templateId: "camera_dragonpulse",
			camera: {
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_CUT", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER", "CAM_TARGET_ATTACKER_DEFENDER", "CAM_TARGET_ATTACKER_DEFENDER"],
				easeInSpeed: [0, .5, .5],
				eastOutSpeed: [0, .5, .5],
				durationSeconds: [1, .5, 1.6],
				waitSeconds: [.25, 0, 0],
				transitionSeconds: [.25, 0, .15],
				angleDegree: [-160, -30, -30],
				angleOffsetDegree: [0, 0, 0],
				pitchDegree: [0, 20, 20],
				pitchOffsetDegree: [0, 0, 0],
				rollDegree: [0, 0, 0],
				distanceMeters: [1.5, -.5, 1],
				heightPercent: [.25, 0, 0],
				vertCtrRatio: [.5, 1, 1]
			}
		}, {
			templateId: "camera_drillpeck",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER_EDGE"],
				easeInSpeed: [0],
				eastOutSpeed: [0],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.15],
				angleDegree: [150],
				angleOffsetDegree: [0],
				pitchDegree: [15],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [4],
				heightPercent: [0],
				vertCtrRatio: [.5]
			}
		}, {
			templateId: "camera_drillrun",
			camera: {
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_SHOULDER_ATTACKER_DEFENDER", "CAM_TARGET_ATTACKER_DEFENDER_EDGE", "CAM_TARGET_DEFENDER_EDGE"],
				easeInSpeed: [.5, .5, .5],
				eastOutSpeed: [.5, .5, .5],
				durationSeconds: [0, .93, 5],
				waitSeconds: [0, 0, 0],
				transitionSeconds: [0, .33, .4],
				angleDegree: [-20, -20, 100],
				angleOffsetDegree: [0, 0, 0],
				pitchDegree: [20, 5, 15],
				pitchOffsetDegree: [0, 0, 0],
				rollDegree: [0, 0, 0],
				distanceMeters: [0, 1.5, .5],
				heightPercent: [0, 0, 0],
				vertCtrRatio: [1, 1, .5]
			}
		}, {
			templateId: "camera_drillrun_leader_player_left_",
			camera: {
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER_EDGE", "CAM_TARGET_ATTACKER_DEFENDER_EDGE", "CAM_TARGET_DEFENDER_EDGE"],
				easeInSpeed: [1, 1, 0],
				eastOutSpeed: [1, 0, 1],
				durationSeconds: [0, .93, 5],
				waitSeconds: [0, 0, 0],
				transitionSeconds: [0, .33, .4],
				angleDegree: [-20, -20, 120],
				angleOffsetDegree: [0, 0, 0],
				pitchDegree: [20, 5, 15],
				pitchOffsetDegree: [0, 0, 0],
				rollDegree: [0, 0, 0],
				distanceMeters: [1.5, 1.5, 3],
				heightPercent: [0, 0, 0],
				vertCtrRatio: [1, 1, .5]
			}
		}, {
			templateId: "camera_drillrun_leader_player_right_",
			camera: {
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER", "CAM_TARGET_ATTACKER_DEFENDER", "CAM_TARGET_DEFENDER"],
				easeInSpeed: [1, 1, 0],
				eastOutSpeed: [1, 0, 1],
				durationSeconds: [0, .93, 5],
				waitSeconds: [0, 0, 0],
				transitionSeconds: [0, .33, .4],
				angleDegree: [20, 20, -120],
				angleOffsetDegree: [0, 0, 5],
				pitchDegree: [20, 5, 15],
				pitchOffsetDegree: [0, 0, 0],
				rollDegree: [0, 0, 0],
				distanceMeters: [1.5, 1.5, 3],
				heightPercent: [0, 0, 0],
				vertCtrRatio: [1, 1, .5]
			}
		}, {
			templateId: "camera_drillrun_player_left_leader_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER", "CAM_TARGET_DEFENDER"],
				easeInSpeed: [1, 0],
				eastOutSpeed: [0, 1],
				durationSeconds: [.93, 5],
				waitSeconds: [0, 0],
				transitionSeconds: [.33, .4],
				angleDegree: [20, -100],
				angleOffsetDegree: [0, 5],
				pitchDegree: [5, 15],
				pitchOffsetDegree: [0, 0],
				rollDegree: [0, 0],
				distanceMeters: [1.5, 3],
				heightPercent: [0, 0],
				vertCtrRatio: [1, .5]
			}
		}, {
			templateId: "camera_drillrun_player_right_leader_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER_EDGE", "CAM_TARGET_DEFENDER_EDGE"],
				easeInSpeed: [1, 0],
				eastOutSpeed: [0, 1],
				durationSeconds: [.93, 5],
				waitSeconds: [0, 0],
				transitionSeconds: [.33, .4],
				angleDegree: [-20, 100],
				angleOffsetDegree: [0, 0],
				pitchDegree: [5, 15],
				pitchOffsetDegree: [0, 0],
				rollDegree: [0, 0],
				distanceMeters: [1.5, 3],
				heightPercent: [0, 0],
				vertCtrRatio: [1, .5]
			}
		}, {
			templateId: "camera_earthquake",
			camera: {
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER", "CAM_TARGET_ATTACKER_DEFENDER"],
				easeInSpeed: [0, .5],
				eastOutSpeed: [0, .5],
				durationSeconds: [.5, 2.5],
				waitSeconds: [.1, 0],
				transitionSeconds: [.3, .27],
				angleDegree: [-20, 0],
				angleOffsetDegree: [0, 0],
				pitchDegree: [20, 25],
				pitchOffsetDegree: [0, 0],
				rollDegree: [0, 0],
				distanceMeters: [0, 3.5],
				heightPercent: [0, 0],
				vertCtrRatio: [1, .5]
			}
		}, {
			templateId: "camera_encounterintro",
			camera: {
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER", "CAM_TARGET_ATTACKER"],
				easeInSpeed: [.5, 1],
				eastOutSpeed: [.5, 1],
				durationSeconds: [0, 3],
				waitSeconds: [0, 0],
				transitionSeconds: [0, 3],
				angleDegree: [180, 180],
				angleOffsetDegree: [0, 0],
				pitchDegree: [5, 5],
				pitchOffsetDegree: [0, 0],
				rollDegree: [0, 0],
				distanceMeters: [0, 0],
				heightPercent: [0, 0],
				vertCtrRatio: [.5, .5]
			}
		}, {
			templateId: "camera_enter",
			camera: {
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER", "CAM_TARGET_ATTACKER_DEFENDER", "CAM_TARGET_SHOULDER_ATTACKER_DEFENDER"],
				easeInSpeed: [.5, 0, 0],
				eastOutSpeed: [.5, 0, 0],
				durationSeconds: [.25, 2.5, 1],
				waitSeconds: [0, 0, 0],
				transitionSeconds: [0, 1, 1],
				angleDegree: [180, -30, -20],
				angleOffsetDegree: [0, 0, 0],
				pitchDegree: [0, 15, 20],
				pitchOffsetDegree: [0, 0, 0],
				rollDegree: [0, 0, 0],
				distanceMeters: [0, 3.5, 0],
				heightPercent: [0, 0, 0],
				vertCtrRatio: [1, 1, 1]
			}
		}, {
			templateId: "camera_enterbehindattacker_leader_player_left_",
			camera: {
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER", "CAM_TARGET_ATTACKER"],
				easeInSpeed: [1, 1],
				eastOutSpeed: [1, 0],
				durationSeconds: [0, 5],
				waitSeconds: [0, 0],
				transitionSeconds: [0, .33],
				angleDegree: [-20, -20],
				angleOffsetDegree: [10, 10],
				pitchDegree: [20, 10],
				pitchOffsetDegree: [0, 0],
				rollDegree: [0, 0],
				distanceMeters: [3, .5],
				heightPercent: [0, -.25],
				vertCtrRatio: [.75, .75]
			}
		}, {
			templateId: "camera_enterbehindattacker_leader_player_right_",
			camera: {
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER", "CAM_TARGET_ATTACKER"],
				easeInSpeed: [1, 1],
				eastOutSpeed: [1, 0],
				durationSeconds: [0, 5],
				waitSeconds: [0, 0],
				transitionSeconds: [0, .33],
				angleDegree: [15, 15],
				angleOffsetDegree: [-5, -5],
				pitchDegree: [20, 10],
				pitchOffsetDegree: [0, 0],
				rollDegree: [0, 0],
				distanceMeters: [3, .5],
				heightPercent: [0, -.25],
				vertCtrRatio: [.75, .75]
			}
		}, {
			templateId: "camera_enterbehindattacker_player_left_leader_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER", "CAM_TARGET_ATTACKER"],
				easeInSpeed: [0, .5],
				eastOutSpeed: [.5, 0],
				durationSeconds: [0, 5],
				waitSeconds: [0, 0],
				transitionSeconds: [.15, .33],
				angleDegree: [20, 20],
				angleOffsetDegree: [-5, -5],
				pitchDegree: [20, 10],
				pitchOffsetDegree: [0, 0],
				rollDegree: [0, 0],
				distanceMeters: [3, 1],
				heightPercent: [0, -.25],
				vertCtrRatio: [.75, .75]
			}
		}, {
			templateId: "camera_enterbehindattacker_player_right_leader_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER", "CAM_TARGET_ATTACKER"],
				easeInSpeed: [0, .5],
				eastOutSpeed: [.5, 0],
				durationSeconds: [0, 5],
				waitSeconds: [0, 0],
				transitionSeconds: [.15, .33],
				angleDegree: [-25, -25],
				angleOffsetDegree: [10, 10],
				pitchDegree: [20, 10],
				pitchOffsetDegree: [0, 0],
				rollDegree: [0, 0],
				distanceMeters: [3, 1],
				heightPercent: [0, -.25],
				vertCtrRatio: [.75, .75]
			}
		}, {
			templateId: "camera_enterbehindattackerfaraway_leader_player_left_",
			camera: {
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER", "CAM_TARGET_ATTACKER_DEFENDER"],
				easeInSpeed: [1, 0],
				eastOutSpeed: [1, 0],
				durationSeconds: [0, 5],
				waitSeconds: [0, 0],
				transitionSeconds: [0, .33],
				angleDegree: [-20, -20],
				angleOffsetDegree: [0, 0],
				pitchDegree: [20, 20],
				pitchOffsetDegree: [0, 0],
				rollDegree: [0, 0],
				distanceMeters: [3.5, 1.5],
				heightPercent: [0, 0],
				vertCtrRatio: [1, 1]
			}
		}, {
			templateId: "camera_enterbehindattackerfaraway_leader_player_right_",
			camera: {
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER", "CAM_TARGET_ATTACKER_DEFENDER"],
				easeInSpeed: [1, 0],
				eastOutSpeed: [1, 0],
				durationSeconds: [0, 5],
				waitSeconds: [0, 0],
				transitionSeconds: [0, .33],
				angleDegree: [20, 20],
				angleOffsetDegree: [0, 0],
				pitchDegree: [20, 20],
				pitchOffsetDegree: [0, 0],
				rollDegree: [0, 0],
				distanceMeters: [3.5, 1.5],
				heightPercent: [0, 0],
				vertCtrRatio: [1, 1]
			}
		}, {
			templateId: "camera_enterbehindattackerfaraway_player_left_leader_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER"],
				easeInSpeed: [0],
				eastOutSpeed: [0],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.33],
				angleDegree: [20],
				angleOffsetDegree: [0],
				pitchDegree: [20],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [1.5],
				heightPercent: [0],
				vertCtrRatio: [1]
			}
		}, {
			templateId: "camera_enterbehindattackerfaraway_player_right_leader_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER"],
				easeInSpeed: [0],
				eastOutSpeed: [0],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.33],
				angleDegree: [-20],
				angleOffsetDegree: [0],
				pitchDegree: [20],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [1.5],
				heightPercent: [0],
				vertCtrRatio: [1]
			}
		}, {
			templateId: "camera_enterfaceattacker_leader_player_left_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_GROUND"],
				easeInSpeed: [0],
				eastOutSpeed: [0],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.33],
				angleDegree: [-150],
				angleOffsetDegree: [0],
				pitchDegree: [10],
				pitchOffsetDegree: [-5],
				rollDegree: [0],
				distanceMeters: [1],
				heightPercent: [0],
				vertCtrRatio: [.5]
			}
		}, {
			templateId: "camera_enterfaceattacker_leader_player_right_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_GROUND"],
				easeInSpeed: [0],
				eastOutSpeed: [0],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.33],
				angleDegree: [150],
				angleOffsetDegree: [0],
				pitchDegree: [10],
				pitchOffsetDegree: [-5],
				rollDegree: [0],
				distanceMeters: [1],
				heightPercent: [0],
				vertCtrRatio: [.5]
			}
		}, {
			templateId: "camera_enterfaceattacker_player_left_leader_",
			camera: {
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_GROUND", "CAM_TARGET_ATTACKER_GROUND"],
				easeInSpeed: [1, 1],
				eastOutSpeed: [1, 0],
				durationSeconds: [0, 5],
				waitSeconds: [0, 0],
				transitionSeconds: [0, .33],
				angleDegree: [160, 150],
				angleOffsetDegree: [-5, -5],
				pitchDegree: [20, 10],
				pitchOffsetDegree: [-5, -5],
				rollDegree: [0, 0],
				distanceMeters: [3.5, 1],
				heightPercent: [0, 0],
				vertCtrRatio: [.5, .5]
			}
		}, {
			templateId: "camera_enterfaceattacker_player_right_leader_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_GROUND"],
				easeInSpeed: [0],
				eastOutSpeed: [0],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.33],
				angleDegree: [-150],
				angleOffsetDegree: [0],
				pitchDegree: [10],
				pitchOffsetDegree: [-5],
				rollDegree: [0],
				distanceMeters: [1],
				heightPercent: [0],
				vertCtrRatio: [.5]
			}
		}, {
			templateId: "camera_enterfacedefender_leader_player_left_",
			camera: {
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER_GROUND", "CAM_TARGET_DEFENDER_GROUND"],
				easeInSpeed: [1, 1],
				eastOutSpeed: [1, 0],
				durationSeconds: [0, 5],
				waitSeconds: [0, 0],
				transitionSeconds: [0, .33],
				angleDegree: [160, 150],
				angleOffsetDegree: [-5, -5],
				pitchDegree: [20, 10],
				pitchOffsetDegree: [0, 0],
				rollDegree: [0, 0],
				distanceMeters: [3.5, 1],
				heightPercent: [0, 0],
				vertCtrRatio: [.75, .75]
			}
		}, {
			templateId: "camera_enterfacedefender_leader_player_right_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER_GROUND"],
				easeInSpeed: [0],
				eastOutSpeed: [0],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.33],
				angleDegree: [-150],
				angleOffsetDegree: [5],
				pitchDegree: [10],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [1],
				heightPercent: [0],
				vertCtrRatio: [.75]
			}
		}, {
			templateId: "camera_enterfacedefender_player_left_leader_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER_GROUND"],
				easeInSpeed: [0],
				eastOutSpeed: [0],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.33],
				angleDegree: [-150],
				angleOffsetDegree: [5],
				pitchDegree: [10],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [1],
				heightPercent: [0],
				vertCtrRatio: [.75]
			}
		}, {
			templateId: "camera_enterfacedefender_player_right_leader_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER_GROUND"],
				easeInSpeed: [0],
				eastOutSpeed: [0],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.33],
				angleDegree: [150],
				angleOffsetDegree: [0],
				pitchDegree: [10],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [1],
				heightPercent: [0],
				vertCtrRatio: [.75]
			}
		}, {
			templateId: "camera_enterfacedefenderfromfaraway_leader_player_left_",
			camera: {
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER_GROUND", "CAM_TARGET_DEFENDER_GROUND"],
				easeInSpeed: [1, 1],
				eastOutSpeed: [1, 0],
				durationSeconds: [0, 5],
				waitSeconds: [0, 0],
				transitionSeconds: [0, .33],
				angleDegree: [160, 150],
				angleOffsetDegree: [-5, -5],
				pitchDegree: [20, 10],
				pitchOffsetDegree: [0, 0],
				rollDegree: [0, 0],
				distanceMeters: [5.5, 4],
				heightPercent: [0, 0],
				vertCtrRatio: [.75, .75]
			}
		}, {
			templateId: "camera_enterfacedefenderfromfaraway_leader_player_right_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER_GROUND"],
				easeInSpeed: [0],
				eastOutSpeed: [0],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.33],
				angleDegree: [-150],
				angleOffsetDegree: [5],
				pitchDegree: [10],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [4],
				heightPercent: [0],
				vertCtrRatio: [.75]
			}
		}, {
			templateId: "camera_enterfacedefenderfromfaraway_player_left_leader_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER_GROUND"],
				easeInSpeed: [0],
				eastOutSpeed: [0],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.33],
				angleDegree: [-150],
				angleOffsetDegree: [5],
				pitchDegree: [10],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [4],
				heightPercent: [0],
				vertCtrRatio: [.75]
			}
		}, {
			templateId: "camera_enterfacedefenderfromfaraway_player_right_leader_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER_GROUND"],
				easeInSpeed: [0],
				eastOutSpeed: [0],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.33],
				angleDegree: [150],
				angleOffsetDegree: [0],
				pitchDegree: [10],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [4],
				heightPercent: [0],
				vertCtrRatio: [.75]
			}
		}, {
			templateId: "camera_face",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER"],
				easeInSpeed: [.5],
				eastOutSpeed: [.5],
				durationSeconds: [3],
				waitSeconds: [0],
				transitionSeconds: [1],
				angleDegree: [180],
				angleOffsetDegree: [0],
				pitchDegree: [0],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [0],
				heightPercent: [0],
				vertCtrRatio: [1]
			}
		}, {
			templateId: "camera_faceattacker",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER"],
				easeInSpeed: [.5],
				eastOutSpeed: [.5],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.5],
				angleDegree: [-150],
				angleOffsetDegree: [0],
				pitchDegree: [0],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [0],
				heightPercent: [0],
				vertCtrRatio: [.75]
			}
		}, {
			templateId: "camera_faceattackertilt_leader_player_left_",
			camera: {
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER", "CAM_TARGET_ATTACKER"],
				easeInSpeed: [1, 1],
				eastOutSpeed: [1, 0],
				durationSeconds: [.3, 5],
				waitSeconds: [0, 0],
				transitionSeconds: [.3, .4],
				angleDegree: [-150, -150],
				angleOffsetDegree: [5, 5],
				pitchDegree: [0, 0],
				pitchOffsetDegree: [0, 0],
				rollDegree: [0, -45],
				distanceMeters: [0, 4],
				heightPercent: [0, 0],
				vertCtrRatio: [.75, .75]
			}
		}, {
			templateId: "camera_faceattackertilt_leader_player_right_",
			camera: {
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER", "CAM_TARGET_ATTACKER"],
				easeInSpeed: [1, 1],
				eastOutSpeed: [1, 0],
				durationSeconds: [.3, 5],
				waitSeconds: [0, 0],
				transitionSeconds: [.3, .4],
				angleDegree: [150, 150],
				angleOffsetDegree: [-5, -5],
				pitchDegree: [0, 0],
				pitchOffsetDegree: [0, 0],
				rollDegree: [0, -45],
				distanceMeters: [0, 4],
				heightPercent: [0, 0],
				vertCtrRatio: [.75, .75]
			}
		}, {
			templateId: "camera_faceattackertilt_player_left_leader_",
			camera: {
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER", "CAM_TARGET_ATTACKER"],
				easeInSpeed: [1, 1],
				eastOutSpeed: [1, 0],
				durationSeconds: [.3, 5],
				waitSeconds: [0, 0],
				transitionSeconds: [.3, .4],
				angleDegree: [160, 160],
				angleOffsetDegree: [-5, -5],
				pitchDegree: [0, 0],
				pitchOffsetDegree: [0, 0],
				rollDegree: [0, -45],
				distanceMeters: [0, 4],
				heightPercent: [0, 0],
				vertCtrRatio: [.75, .75]
			}
		}, {
			templateId: "camera_faceattackertilt_player_right_leader_",
			camera: {
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER", "CAM_TARGET_ATTACKER"],
				easeInSpeed: [1, 1],
				eastOutSpeed: [1, 0],
				durationSeconds: [.3, 5],
				waitSeconds: [0, 0],
				transitionSeconds: [.3, .4],
				angleDegree: [-160, -160],
				angleOffsetDegree: [5, 5],
				pitchDegree: [0, 0],
				pitchOffsetDegree: [0, 0],
				rollDegree: [0, -45],
				distanceMeters: [0, 4],
				heightPercent: [0, 0],
				vertCtrRatio: [.75, .75]
			}
		}, {
			templateId: "camera_facecut",
			camera: {
				interpolation: ["CAM_INTERP_CUT"],
				targetType: ["CAM_TARGET_ATTACKER"],
				easeInSpeed: [.5],
				eastOutSpeed: [.5],
				durationSeconds: [10],
				waitSeconds: [60],
				transitionSeconds: [0],
				angleDegree: [180],
				angleOffsetDegree: [0],
				pitchDegree: [0],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [0],
				heightPercent: [0],
				vertCtrRatio: [1]
			}
		}, {
			templateId: "camera_facecutdefender",
			camera: {
				interpolation: ["CAM_INTERP_CUT"],
				targetType: ["CAM_TARGET_DEFENDER"],
				easeInSpeed: [.5],
				eastOutSpeed: [.5],
				durationSeconds: [10],
				waitSeconds: [60],
				transitionSeconds: [0],
				angleDegree: [180],
				angleOffsetDegree: [0],
				pitchDegree: [0],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [0],
				heightPercent: [0],
				vertCtrRatio: [1]
			}
		}, {
			templateId: "camera_facedefenderzoomout_leader_player_left_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER"],
				easeInSpeed: [0],
				eastOutSpeed: [0],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.8],
				angleDegree: [160],
				angleOffsetDegree: [-5],
				pitchDegree: [10],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [8],
				heightPercent: [-.25],
				vertCtrRatio: [.5]
			}
		}, {
			templateId: "camera_facedefenderzoomout_leader_player_right_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER"],
				easeInSpeed: [0],
				eastOutSpeed: [0],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.8],
				angleDegree: [-175],
				angleOffsetDegree: [5],
				pitchDegree: [10],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [8],
				heightPercent: [-.25],
				vertCtrRatio: [.5]
			}
		}, {
			templateId: "camera_facedefenderzoomout_player_left_leader_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER"],
				easeInSpeed: [0],
				eastOutSpeed: [0],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.8],
				angleDegree: [-160],
				angleOffsetDegree: [5],
				pitchDegree: [10],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [8],
				heightPercent: [-.25],
				vertCtrRatio: [.5]
			}
		}, {
			templateId: "camera_facedefenderzoomout_player_right_leader_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER"],
				easeInSpeed: [0],
				eastOutSpeed: [0],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.8],
				angleDegree: [160],
				angleOffsetDegree: [0],
				pitchDegree: [10],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [8],
				heightPercent: [-.25],
				vertCtrRatio: [.5]
			}
		}, {
			templateId: "camera_faint",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER", "CAM_TARGET_ATTACKER_GROUND", "CAM_TARGET_ATTACKER_GROUND"],
				easeInSpeed: [1, 0, 1],
				eastOutSpeed: [0, 1, 0],
				durationSeconds: [1.25, 1.5, 10],
				waitSeconds: [0, 0, 0],
				transitionSeconds: [1, 1.5, 6],
				angleDegree: [-90, -160, 30],
				angleOffsetDegree: [0, 0, 0],
				pitchDegree: [5, 5, 10],
				pitchOffsetDegree: [0, 0, 0],
				rollDegree: [0, 0, 0],
				distanceMeters: [0, 0, .5],
				heightPercent: [0, 0, 0],
				vertCtrRatio: [1, 1, 1]
			}
		}, {
			templateId: "camera_fireblast",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER", "CAM_TARGET_DEFENDER"],
				easeInSpeed: [0, .5],
				eastOutSpeed: [.5, 0],
				durationSeconds: [.85, 5],
				waitSeconds: [0, 0],
				transitionSeconds: [0, .4],
				angleDegree: [-160, 160],
				angleOffsetDegree: [0, 0],
				pitchDegree: [0, 10],
				pitchOffsetDegree: [0, 0],
				rollDegree: [5, 0],
				distanceMeters: [4, 3.5],
				heightPercent: [0, 0],
				vertCtrRatio: [.75, .75]
			}
		}, {
			templateId: "camera_fireblast_leader_player_left_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER", "CAM_TARGET_DEFENDER_EDGE"],
				easeInSpeed: [0, .5],
				eastOutSpeed: [.5, 0],
				durationSeconds: [.8, 5],
				waitSeconds: [0, 0],
				transitionSeconds: [.15, .4],
				angleDegree: [-150, 60],
				angleOffsetDegree: [0, 0],
				pitchDegree: [10, 20],
				pitchOffsetDegree: [0, 0],
				rollDegree: [5, 0],
				distanceMeters: [4, 3.5],
				heightPercent: [0, 0],
				vertCtrRatio: [.5, .5]
			}
		}, {
			templateId: "camera_fireblast_leader_player_right_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER", "CAM_TARGET_ATTACKER_DEFENDER"],
				easeInSpeed: [0, .5],
				eastOutSpeed: [.5, 0],
				durationSeconds: [.8, 5],
				waitSeconds: [0, 0],
				transitionSeconds: [.15, .4],
				angleDegree: [150, 120],
				angleOffsetDegree: [0, 0],
				pitchDegree: [10, 20],
				pitchOffsetDegree: [0, 0],
				rollDegree: [5, 0],
				distanceMeters: [4, 3.5],
				heightPercent: [0, 0],
				vertCtrRatio: [.5, .5]
			}
		}, {
			templateId: "camera_fireblast_player_left_leader_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER", "CAM_TARGET_DEFENDER"],
				easeInSpeed: [0, .5],
				eastOutSpeed: [.5, 0],
				durationSeconds: [.8, 5],
				waitSeconds: [0, 0],
				transitionSeconds: [.15, .4],
				angleDegree: [160, -145],
				angleOffsetDegree: [0, 0],
				pitchDegree: [10, 20],
				pitchOffsetDegree: [0, 0],
				rollDegree: [5, 0],
				distanceMeters: [4, 3.5],
				heightPercent: [0, 0],
				vertCtrRatio: [.5, .5]
			}
		}, {
			templateId: "camera_fireblast_player_right_leader_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER", "CAM_TARGET_DEFENDER"],
				easeInSpeed: [0, .5],
				eastOutSpeed: [.5, 0],
				durationSeconds: [.8, 5],
				waitSeconds: [0, 0],
				transitionSeconds: [.15, .4],
				angleDegree: [-160, 145],
				angleOffsetDegree: [0, 0],
				pitchDegree: [10, 20],
				pitchOffsetDegree: [0, 0],
				rollDegree: [5, 0],
				distanceMeters: [4, 3.5],
				heightPercent: [0, 0],
				vertCtrRatio: [.5, .5]
			}
		}, {
			templateId: "camera_fireblastenter",
			camera: {
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER", "CAM_TARGET_ATTACKER", "CAM_TARGET_ATTACKER"],
				easeInSpeed: [0, 0, .5],
				eastOutSpeed: [0, .5, 0],
				durationSeconds: [.1, .5, 5],
				waitSeconds: [0, 0, 0],
				transitionSeconds: [0, .5, .3],
				angleDegree: [-20, -160, -160],
				angleOffsetDegree: [0, 0, 0],
				pitchDegree: [20, 0, 0],
				pitchOffsetDegree: [0, 0, 0],
				rollDegree: [0, 0, 5],
				distanceMeters: [0, 2, 4],
				heightPercent: [0, .25, 0],
				vertCtrRatio: [1, .75, .75]
			}
		}, {
			templateId: "camera_firepunch_hit",
			camera: {
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER_EDGE", "CAM_TARGET_DEFENDER"],
				easeInSpeed: [0, 1],
				eastOutSpeed: [0, 0],
				durationSeconds: [0, 5],
				waitSeconds: [0, .45],
				transitionSeconds: [0, .3],
				angleDegree: [-20, 160],
				angleOffsetDegree: [0, 0],
				pitchDegree: [10, 10],
				pitchOffsetDegree: [0, 0],
				rollDegree: [0, 0],
				distanceMeters: [.5, 2],
				heightPercent: [-.25, 0],
				vertCtrRatio: [.5, .5]
			}
		}, {
			templateId: "camera_flameburst",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER_EDGE", "CAM_TARGET_DEFENDER_EDGE"],
				easeInSpeed: [.5, .5],
				eastOutSpeed: [.5, .5],
				durationSeconds: [.5, 10],
				waitSeconds: [0, 0],
				transitionSeconds: [.5, .15],
				angleDegree: [140, 140],
				angleOffsetDegree: [5, 5],
				pitchDegree: [5, 5],
				pitchOffsetDegree: [0, 0],
				rollDegree: [0, 0],
				distanceMeters: [2, 3.5],
				heightPercent: [0, 0],
				vertCtrRatio: [.5, .5]
			}
		}, {
			templateId: "camera_flameburstenter",
			camera: {
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER", "CAM_TARGET_ATTACKER_DEFENDER"],
				easeInSpeed: [.5, 1],
				eastOutSpeed: [.5, 1],
				durationSeconds: [.5, 10],
				waitSeconds: [0, 0],
				transitionSeconds: [.5, .5],
				angleDegree: [-20, -20],
				angleOffsetDegree: [0, 0],
				pitchDegree: [20, 20],
				pitchOffsetDegree: [0, -20],
				rollDegree: [0, 0],
				distanceMeters: [0, 0],
				heightPercent: [0, 0],
				vertCtrRatio: [1, 1]
			}
		}, {
			templateId: "camera_flamecharge",
			camera: {
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER", "CAM_TARGET_ATTACKER_DEFENDER", "CAM_TARGET_DEFENDER"],
				easeInSpeed: [.5, .5, .5],
				eastOutSpeed: [.5, .5, .5],
				durationSeconds: [.4, 1.05, 5],
				waitSeconds: [0, 0, .55],
				transitionSeconds: [.4, .9, .15],
				angleDegree: [-25, -25, 160],
				angleOffsetDegree: [3, 3, 0],
				pitchDegree: [20, 10, 10],
				pitchOffsetDegree: [0, 0, 0],
				rollDegree: [0, 0, 0],
				distanceMeters: [1, 1.5, 3],
				heightPercent: [0, 0, 0],
				vertCtrRatio: [1, 1, .5]
			}
		}, {
			templateId: "camera_flamecharge_leader_player_left_",
			camera: {
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER", "CAM_TARGET_ATTACKER_DEFENDER", "CAM_TARGET_DEFENDER"],
				easeInSpeed: [1, 0, .5],
				eastOutSpeed: [1, .5, 0],
				durationSeconds: [.4, 1.05, 5],
				waitSeconds: [0, 0, .55],
				transitionSeconds: [0, .9, .4],
				angleDegree: [-25, -25, 160],
				angleOffsetDegree: [3, 3, 0],
				pitchDegree: [20, 10, 10],
				pitchOffsetDegree: [0, 0, 0],
				rollDegree: [0, 0, 0],
				distanceMeters: [1, 1.5, 3],
				heightPercent: [0, 0, 0],
				vertCtrRatio: [1, 1, .5]
			}
		}, {
			templateId: "camera_flamecharge_leader_player_right_",
			camera: {
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER", "CAM_TARGET_ATTACKER_DEFENDER", "CAM_TARGET_DEFENDER"],
				easeInSpeed: [1, 0, .5],
				eastOutSpeed: [1, .5, 0],
				durationSeconds: [.4, 1.05, 5],
				waitSeconds: [0, 0, .55],
				transitionSeconds: [0, .9, .4],
				angleDegree: [25, 25, -160],
				angleOffsetDegree: [-3, -3, 0],
				pitchDegree: [20, 10, 10],
				pitchOffsetDegree: [0, 0, 0],
				rollDegree: [0, 0, 0],
				distanceMeters: [1, 1.5, 3],
				heightPercent: [0, 0, 0],
				vertCtrRatio: [1, 1, .5]
			}
		}, {
			templateId: "camera_flamecharge_player_left_leader_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER", "CAM_TARGET_ATTACKER_DEFENDER", "CAM_TARGET_DEFENDER"],
				easeInSpeed: [0, .5, .5],
				eastOutSpeed: [.5, .5, 0],
				durationSeconds: [.4, 1.05, 5],
				waitSeconds: [0, 0, .55],
				transitionSeconds: [.4, .9, .4],
				angleDegree: [25, 25, -160],
				angleOffsetDegree: [-3, -3, 0],
				pitchDegree: [20, 10, 10],
				pitchOffsetDegree: [0, 0, 0],
				rollDegree: [0, 0, 0],
				distanceMeters: [1, 1.5, 3],
				heightPercent: [0, 0, 0],
				vertCtrRatio: [1, 1, .5]
			}
		}, {
			templateId: "camera_flamecharge_player_right_leader_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER", "CAM_TARGET_ATTACKER_DEFENDER", "CAM_TARGET_DEFENDER"],
				easeInSpeed: [0, .5, .5],
				eastOutSpeed: [.5, .5, 0],
				durationSeconds: [.4, 1.05, 5],
				waitSeconds: [0, 0, .55],
				transitionSeconds: [.4, .9, .4],
				angleDegree: [-25, -25, 160],
				angleOffsetDegree: [3, 3, 0],
				pitchDegree: [20, 10, 10],
				pitchOffsetDegree: [0, 0, 0],
				rollDegree: [0, 0, 0],
				distanceMeters: [1, 1.5, 3],
				heightPercent: [0, 0, 0],
				vertCtrRatio: [1, 1, .5]
			}
		}, {
			templateId: "camera_flamethrower",
			camera: {
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR", "CAM_INTERP_CUT"],
				targetType: ["CAM_TARGET_ATTACKER", "CAM_TARGET_ATTACKER", "CAM_TARGET_ATTACKER", "CAM_TARGET_ATTACKER_DEFENDER"],
				easeInSpeed: [.5, .5, .5, .5],
				eastOutSpeed: [.5, .5, .5, .5],
				durationSeconds: [0, .57, .25, 1.6],
				waitSeconds: [0, 0, 0, 0],
				transitionSeconds: [0, .5, .25, 0],
				angleDegree: [-160, -165, -150, -30],
				angleOffsetDegree: [5, 5, 15, 0],
				pitchDegree: [20, 5, 5, 20],
				pitchOffsetDegree: [0, 0, 0, 0],
				rollDegree: [0, 0, 0, 0],
				distanceMeters: [2.5, 2, 4, 0],
				heightPercent: [0, 0, 0, 0],
				vertCtrRatio: [.75, .75, .5, .75]
			}
		}, {
			templateId: "camera_flamewheel",
			camera: {
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_LINEAR", "CAM_INTERP_CUT", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER", "CAM_TARGET_ATTACKER", "CAM_TARGET_ATTACKER_DEFENDER", "CAM_TARGET_DEFENDER"],
				easeInSpeed: [.5, .5, .5, .5],
				eastOutSpeed: [.5, .5, .5, .5],
				durationSeconds: [.66, 1, .15, 5],
				waitSeconds: [0, 0, 0, 0],
				transitionSeconds: [.45, 1, .15, .4],
				angleDegree: [-170, -170, -20, 160],
				angleOffsetDegree: [0, 0, 0, 0],
				pitchDegree: [0, 0, 20, 20],
				pitchOffsetDegree: [0, 0, 0, 0],
				rollDegree: [0, 0, 0, 0],
				distanceMeters: [.5, 0, 4, 2.5],
				heightPercent: [0, 0, 0, 0],
				vertCtrRatio: [.5, .5, 1, .5]
			}
		}, {
			templateId: "camera_flashcannon",
			camera: {
				nextCamera: "flashcannon_hit",
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_EDGE", "CAM_TARGET_ATTACKER_EDGE"],
				easeInSpeed: [.5, .5],
				eastOutSpeed: [.5, .5],
				durationSeconds: [1.35, .55],
				waitSeconds: [0, 0],
				transitionSeconds: [.61, .15],
				angleDegree: [-120, -120],
				angleOffsetDegree: [0, 0],
				pitchDegree: [0, 0],
				pitchOffsetDegree: [0, 0],
				rollDegree: [0, 0],
				distanceMeters: [2, 3.5],
				heightPercent: [.15, .15],
				vertCtrRatio: [.5, .5]
			}
		}, {
			templateId: "camera_flashcannon_hit",
			camera: {
				interpolation: ["CAM_INTERP_CUT"],
				targetType: ["CAM_TARGET_DEFENDER"],
				easeInSpeed: [.5],
				eastOutSpeed: [.5],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [0],
				angleDegree: [160],
				angleOffsetDegree: [0],
				pitchDegree: [20],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [4],
				heightPercent: [0],
				vertCtrRatio: [.5]
			}
		}, {
			templateId: "camera_followarcingprojectile_leader_player_left_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER_WORLD", "CAM_TARGET_DEFENDER_GROUND"],
				easeInSpeed: [0, .5],
				eastOutSpeed: [.5, 1],
				durationSeconds: [.5, 5],
				waitSeconds: [0, 0],
				transitionSeconds: [.5, .5],
				angleDegree: [-145, 30],
				angleOffsetDegree: [0, 0],
				pitchDegree: [10, 10],
				pitchOffsetDegree: [-10, 0],
				rollDegree: [0, 0],
				distanceMeters: [-1, 3],
				heightPercent: [0, 0],
				vertCtrRatio: [1, .75]
			}
		}, {
			templateId: "camera_followarcingprojectile_leader_player_right_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER_WORLD", "CAM_TARGET_DEFENDER_GROUND"],
				easeInSpeed: [0, .5],
				eastOutSpeed: [.5, 1],
				durationSeconds: [.5, 5],
				waitSeconds: [0, 0],
				transitionSeconds: [.5, .5],
				angleDegree: [135, -40],
				angleOffsetDegree: [0, 5],
				pitchDegree: [10, 10],
				pitchOffsetDegree: [-10, 0],
				rollDegree: [0, 0],
				distanceMeters: [0, 3],
				heightPercent: [0, 0],
				vertCtrRatio: [1, .75]
			}
		}, {
			templateId: "camera_followarcingprojectile_player_left_leader_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER_WORLD", "CAM_TARGET_DEFENDER_GROUND"],
				easeInSpeed: [0, .5],
				eastOutSpeed: [.5, 1],
				durationSeconds: [.5, 5],
				waitSeconds: [0, 0],
				transitionSeconds: [.5, .5],
				angleDegree: [-145, -145],
				angleOffsetDegree: [0, 5],
				pitchDegree: [10, 10],
				pitchOffsetDegree: [-10, 0],
				rollDegree: [0, 0],
				distanceMeters: [0, 3],
				heightPercent: [0, 0],
				vertCtrRatio: [1, .75]
			}
		}, {
			templateId: "camera_followarcingprojectile_player_right_leader_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER_WORLD", "CAM_TARGET_DEFENDER_GROUND"],
				easeInSpeed: [0, .5],
				eastOutSpeed: [.5, 1],
				durationSeconds: [.5, 5],
				waitSeconds: [0, 0],
				transitionSeconds: [.5, .5],
				angleDegree: [145, 145],
				angleOffsetDegree: [0, -5],
				pitchDegree: [10, 10],
				pitchOffsetDegree: [-10, 0],
				rollDegree: [0, 0],
				distanceMeters: [0, 3],
				heightPercent: [0, 0],
				vertCtrRatio: [1, .75]
			}
		}, {
			templateId: "camera_fortbidle",
			camera: {
				nextCamera: "fortbidle",
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER_WORLD"],
				easeInSpeed: [0],
				eastOutSpeed: [0],
				durationSeconds: [10],
				waitSeconds: [0],
				transitionSeconds: [1],
				angleDegree: [160],
				angleOffsetDegree: [0],
				pitchDegree: [18],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [0],
				heightPercent: [0],
				vertCtrRatio: [.5]
			}
		}, {
			templateId: "camera_fortdeployintro",
			camera: {
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER", "CAM_TARGET_ATTACKER", "CAM_TARGET_ATTACKER_GROUND"],
				easeInSpeed: [1, 0, 0],
				eastOutSpeed: [0, 0, 0],
				durationSeconds: [0, .5, 2],
				waitSeconds: [0, 0, 0],
				transitionSeconds: [0, .5, 2],
				angleDegree: [-160, 180, 160],
				angleOffsetDegree: [0, 0, 0],
				pitchDegree: [0, 0, 10],
				pitchOffsetDegree: [0, 0, 0],
				rollDegree: [0, 0, 0],
				distanceMeters: [0, 0, 2.5],
				heightPercent: [0, 0, 0],
				vertCtrRatio: [.5, .5, .85]
			}
		}, {
			templateId: "camera_fortfaint",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER", "CAM_TARGET_ATTACKER_GROUND"],
				easeInSpeed: [1, 0],
				eastOutSpeed: [0, 1],
				durationSeconds: [1.25, 20],
				waitSeconds: [0, 0],
				transitionSeconds: [1, 1.5],
				angleDegree: [-90, -160],
				angleOffsetDegree: [0, 0],
				pitchDegree: [5, 10],
				pitchOffsetDegree: [0, 0],
				rollDegree: [0, 0],
				distanceMeters: [0, 2.5],
				heightPercent: [0, 0],
				vertCtrRatio: [1, 1]
			}
		}, {
			templateId: "camera_fortplayerfainted",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER", "CAM_TARGET_DEFENDER"],
				easeInSpeed: [1, 0],
				eastOutSpeed: [0, 0],
				durationSeconds: [1.5, 2],
				waitSeconds: [0, .25],
				transitionSeconds: [1.5, 1.75],
				angleDegree: [-90, -160],
				angleOffsetDegree: [0, 0],
				pitchDegree: [0, 5],
				pitchOffsetDegree: [0, 0],
				rollDegree: [0, 0],
				distanceMeters: [0, 0],
				heightPercent: [0, 0],
				vertCtrRatio: [.5, .5]
			}
		}, {
			templateId: "camera_gigadrain",
			camera: {
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER_GROUND", "CAM_TARGET_SHOULDER_ATTACKER_DEFENDER", "CAM_TARGET_SHOULDER_ATTACKER_DEFENDER"],
				easeInSpeed: [.5, 0, 0],
				eastOutSpeed: [.5, 0, 0],
				durationSeconds: [.5, 1, 10],
				waitSeconds: [0, 0, 0],
				transitionSeconds: [.25, 2, 1],
				angleDegree: [160, -40, -20],
				angleOffsetDegree: [0, 0, 0],
				pitchDegree: [0, 3, 20],
				pitchOffsetDegree: [0, 0, 0],
				rollDegree: [0, 0, 0],
				distanceMeters: [3, 0, 0],
				heightPercent: [0, 0, 0],
				vertCtrRatio: [.5, 1, 1]
			}
		}, {
			templateId: "camera_gunkshot",
			camera: {
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_EDGE", "CAM_TARGET_DEFENDER_EDGE"],
				easeInSpeed: [0, 0],
				eastOutSpeed: [0, 1],
				durationSeconds: [.67, 5],
				waitSeconds: [0, .2],
				transitionSeconds: [.33, .3],
				angleDegree: [-160, 140],
				angleOffsetDegree: [0, 3],
				pitchDegree: [20, 5],
				pitchOffsetDegree: [-5, 0],
				rollDegree: [0, 0],
				distanceMeters: [3, 3],
				heightPercent: [0, 0],
				vertCtrRatio: [.5, .85]
			}
		}, {
			templateId: "camera_gunkshot_leader_player_left_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_GROUND", "CAM_TARGET_DEFENDER_GROUND"],
				easeInSpeed: [0, .5],
				eastOutSpeed: [.5, 0],
				durationSeconds: [.67, 5],
				waitSeconds: [0, .2],
				transitionSeconds: [.15, .3],
				angleDegree: [-160, 40],
				angleOffsetDegree: [0, 0],
				pitchDegree: [10, 20],
				pitchOffsetDegree: [-5, 0],
				rollDegree: [0, 0],
				distanceMeters: [3, 4],
				heightPercent: [0, 0],
				vertCtrRatio: [.5, .85]
			}
		}, {
			templateId: "camera_gunkshot_leader_player_right_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_GROUND", "CAM_TARGET_DEFENDER_GROUND"],
				easeInSpeed: [0, .5],
				eastOutSpeed: [.5, 0],
				durationSeconds: [.67, 5],
				waitSeconds: [0, .2],
				transitionSeconds: [.15, .3],
				angleDegree: [160, -40],
				angleOffsetDegree: [0, 0],
				pitchDegree: [10, 20],
				pitchOffsetDegree: [-5, 0],
				rollDegree: [0, 0],
				distanceMeters: [3, 4],
				heightPercent: [0, 0],
				vertCtrRatio: [.5, .85]
			}
		}, {
			templateId: "camera_gunkshot_player_left_leader_",
			camera: {
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_GROUND", "CAM_TARGET_ATTACKER_GROUND", "CAM_TARGET_DEFENDER_GROUND"],
				easeInSpeed: [1, 0, .5],
				eastOutSpeed: [1, .5, 0],
				durationSeconds: [0, .67, 5],
				waitSeconds: [0, 0, .2],
				transitionSeconds: [0, .15, .3],
				angleDegree: [170, 160, -140],
				angleOffsetDegree: [0, 0, 5],
				pitchDegree: [20, 10, 20],
				pitchOffsetDegree: [0, -5, 0],
				rollDegree: [0, 0, 0],
				distanceMeters: [4, 3, 4],
				heightPercent: [0, 0, 0],
				vertCtrRatio: [.5, .5, .85]
			}
		}, {
			templateId: "camera_gunkshot_player_right_leader_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_GROUND", "CAM_TARGET_DEFENDER_GROUND"],
				easeInSpeed: [0, .5],
				eastOutSpeed: [.5, 0],
				durationSeconds: [.67, 5],
				waitSeconds: [0, .2],
				transitionSeconds: [.15, .3],
				angleDegree: [-160, 140],
				angleOffsetDegree: [0, -5],
				pitchDegree: [10, 20],
				pitchOffsetDegree: [-5, 0],
				rollDegree: [0, 0],
				distanceMeters: [3, 4],
				heightPercent: [0, 0],
				vertCtrRatio: [.5, .85]
			}
		}, {
			templateId: "camera_gymhi",
			camera: {
				nextCamera: "gymhi",
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER_WORLD"],
				easeInSpeed: [0],
				eastOutSpeed: [0],
				durationSeconds: [10],
				waitSeconds: [0],
				transitionSeconds: [1],
				angleDegree: [160],
				angleOffsetDegree: [0],
				pitchDegree: [30],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [0],
				heightPercent: [0],
				vertCtrRatio: [.5]
			}
		}, {
			templateId: "camera_gymlow",
			camera: {
				nextCamera: "gymlow",
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER_WORLD"],
				easeInSpeed: [0],
				eastOutSpeed: [0],
				durationSeconds: [10],
				waitSeconds: [0],
				transitionSeconds: [1],
				angleDegree: [160],
				angleOffsetDegree: [0],
				pitchDegree: [7],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [0],
				heightPercent: [0],
				vertCtrRatio: [.5]
			}
		}, {
			templateId: "camera_gymlowest",
			camera: {
				nextCamera: "gymlowest",
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER_WORLD"],
				easeInSpeed: [0],
				eastOutSpeed: [0],
				durationSeconds: [10],
				waitSeconds: [0],
				transitionSeconds: [1],
				angleDegree: [160],
				angleOffsetDegree: [0],
				pitchDegree: [3],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [0],
				heightPercent: [0],
				vertCtrRatio: [.5]
			}
		}, {
			templateId: "camera_gymmed",
			camera: {
				nextCamera: "gymmed",
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER_WORLD"],
				easeInSpeed: [0],
				eastOutSpeed: [0],
				durationSeconds: [10],
				waitSeconds: [0],
				transitionSeconds: [1],
				angleDegree: [160],
				angleOffsetDegree: [0],
				pitchDegree: [20],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [0],
				heightPercent: [0],
				vertCtrRatio: [.5]
			}
		}, {
			templateId: "camera_heartstamp",
			camera: {
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_SHOULDER_ATTACKER_DEFENDER", "CAM_TARGET_DEFENDER"],
				easeInSpeed: [0, 1],
				eastOutSpeed: [0, 1],
				durationSeconds: [1, 5],
				waitSeconds: [0, 0],
				transitionSeconds: [.5, .4],
				angleDegree: [-20, 160],
				angleOffsetDegree: [0, 0],
				pitchDegree: [20, 20],
				pitchOffsetDegree: [0, 0],
				rollDegree: [0, 0],
				distanceMeters: [0, 1],
				heightPercent: [0, 0],
				vertCtrRatio: [1, .5]
			}
		}, {
			templateId: "camera_heatwave",
			camera: {
				nextCamera: "heatwave_hit",
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER", "CAM_TARGET_ATTACKER"],
				easeInSpeed: [.5, .5],
				eastOutSpeed: [.5, .5],
				durationSeconds: [.3, 5],
				waitSeconds: [0, 0],
				transitionSeconds: [.3, .4],
				angleDegree: [-150, -150],
				angleOffsetDegree: [0, 0],
				pitchDegree: [0, 0],
				pitchOffsetDegree: [0, 0],
				rollDegree: [0, -45],
				distanceMeters: [0, 4],
				heightPercent: [0, 0],
				vertCtrRatio: [.5, .5]
			}
		}, {
			templateId: "camera_heatwave_hit",
			camera: {
				interpolation: ["CAM_INTERP_CUT"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER"],
				easeInSpeed: [.5],
				eastOutSpeed: [.5],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [0],
				angleDegree: [-20],
				angleOffsetDegree: [0],
				pitchDegree: [20],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [0],
				heightPercent: [0],
				vertCtrRatio: [1]
			}
		}, {
			templateId: "camera_hornattack",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER_EDGE"],
				easeInSpeed: [0],
				eastOutSpeed: [0],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.4],
				angleDegree: [135],
				angleOffsetDegree: [0],
				pitchDegree: [0],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [2],
				heightPercent: [0],
				vertCtrRatio: [1]
			}
		}, {
			templateId: "camera_hornattackenter",
			camera: {
				interpolation: ["CAM_INTERP_CUT"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER"],
				easeInSpeed: [0],
				eastOutSpeed: [0],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.4],
				angleDegree: [-45],
				angleOffsetDegree: [0],
				pitchDegree: [0],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [0],
				heightPercent: [0],
				vertCtrRatio: [1]
			}
		}, {
			templateId: "camera_hurricane",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER"],
				easeInSpeed: [0],
				eastOutSpeed: [0],
				durationSeconds: [10],
				waitSeconds: [0],
				transitionSeconds: [.25],
				angleDegree: [-20],
				angleOffsetDegree: [0],
				pitchDegree: [10],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [2],
				heightPercent: [0],
				vertCtrRatio: [1]
			}
		}, {
			templateId: "camera_hydropump",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER", "CAM_TARGET_DEFENDER"],
				easeInSpeed: [.5, .5],
				eastOutSpeed: [.5, .5],
				durationSeconds: [.2, 5],
				waitSeconds: [0, 0],
				transitionSeconds: [.2, 1.5],
				angleDegree: [160, 160],
				angleOffsetDegree: [0, 0],
				pitchDegree: [5, 5],
				pitchOffsetDegree: [0, 0],
				rollDegree: [0, 0],
				distanceMeters: [3, 4.5],
				heightPercent: [0, 0],
				vertCtrRatio: [.5, .5]
			}
		}, {
			templateId: "camera_hydropumpenter",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_EDGE"],
				easeInSpeed: [.5],
				eastOutSpeed: [.5],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.4],
				angleDegree: [-130],
				angleOffsetDegree: [0],
				pitchDegree: [10],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [1.5],
				heightPercent: [.25],
				vertCtrRatio: [.75]
			}
		}, {
			templateId: "camera_hyperbeam",
			camera: {
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER", "CAM_TARGET_ATTACKER"],
				easeInSpeed: [0, 0],
				eastOutSpeed: [0, 0],
				durationSeconds: [.5, 3.5],
				waitSeconds: [0, 0],
				transitionSeconds: [.25, 1],
				angleDegree: [-150, -160],
				angleOffsetDegree: [0, 0],
				pitchDegree: [0, 0],
				pitchOffsetDegree: [0, 0],
				rollDegree: [0, 0],
				distanceMeters: [.25, .25],
				heightPercent: [0, 0],
				vertCtrRatio: [1, 1]
			}
		}, {
			templateId: "camera_hyperbeam_hit",
			camera: {
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_SHOULDER_ATTACKER_DEFENDER_MIRROR", "CAM_TARGET_SHOULDER_ATTACKER_DEFENDER_MIRROR"],
				easeInSpeed: [0, .5],
				eastOutSpeed: [0, .5],
				durationSeconds: [0, 5],
				waitSeconds: [0, 0],
				transitionSeconds: [0, 1],
				angleDegree: [-20, -40],
				angleOffsetDegree: [0, 5],
				pitchDegree: [10, 15],
				pitchOffsetDegree: [0, 0],
				rollDegree: [0, 0],
				distanceMeters: [1, 2],
				heightPercent: [0, 0],
				vertCtrRatio: [1, .25]
			}
		}, {
			templateId: "camera_hyperbeam_leader_player_left_",
			camera: {
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER", "CAM_TARGET_DEFENDER", "CAM_TARGET_DEFENDER"],
				easeInSpeed: [1, 1, .5],
				eastOutSpeed: [1, .5, .5],
				durationSeconds: [0, .33, 5],
				waitSeconds: [0, 0, 0],
				transitionSeconds: [0, .33, 1.5],
				angleDegree: [150, 150, 140],
				angleOffsetDegree: [-5, -5, -5],
				pitchDegree: [20, 0, 10],
				pitchOffsetDegree: [0, 0, 0],
				rollDegree: [0, 0, 0],
				distanceMeters: [4, 3, 5],
				heightPercent: [0, 0, 0],
				vertCtrRatio: [.5, .5, .5]
			}
		}, {
			templateId: "camera_hyperbeam_leader_player_right_",
			camera: {
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER", "CAM_TARGET_DEFENDER", "CAM_TARGET_DEFENDER"],
				easeInSpeed: [1, 1, .5],
				eastOutSpeed: [1, .5, .5],
				durationSeconds: [0, .33, 5],
				waitSeconds: [0, 0, 0],
				transitionSeconds: [0, .33, 1.5],
				angleDegree: [-150, -150, -140],
				angleOffsetDegree: [5, 5, 5],
				pitchDegree: [20, 0, 10],
				pitchOffsetDegree: [0, 0, 0],
				rollDegree: [0, 0, 0],
				distanceMeters: [4, 3, 5],
				heightPercent: [0, 0, 0],
				vertCtrRatio: [.5, .5, .5]
			}
		}, {
			templateId: "camera_hyperbeam_player_left_leader_",
			camera: {
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER", "CAM_TARGET_DEFENDER"],
				easeInSpeed: [1, 1],
				eastOutSpeed: [1, .5],
				durationSeconds: [0, 5],
				waitSeconds: [0, 0],
				transitionSeconds: [0, 1.5],
				angleDegree: [-140, -120],
				angleOffsetDegree: [5, 5],
				pitchDegree: [10, 0],
				pitchOffsetDegree: [0, 0],
				rollDegree: [0, 0],
				distanceMeters: [2, 4],
				heightPercent: [0, 0],
				vertCtrRatio: [.5, .5]
			}
		}, {
			templateId: "camera_hyperbeam_player_right_leader_",
			camera: {
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER", "CAM_TARGET_DEFENDER"],
				easeInSpeed: [1, 1],
				eastOutSpeed: [1, .5],
				durationSeconds: [0, 5],
				waitSeconds: [0, 0],
				transitionSeconds: [0, 1.5],
				angleDegree: [140, 120],
				angleOffsetDegree: [-5, -5],
				pitchDegree: [10, 0],
				pitchOffsetDegree: [0, 0],
				rollDegree: [0, 0],
				distanceMeters: [2, 4],
				heightPercent: [0, 0],
				vertCtrRatio: [.5, .5]
			}
		}, {
			templateId: "camera_hyperfang",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER_GROUND"],
				easeInSpeed: [0],
				eastOutSpeed: [0],
				durationSeconds: [10],
				waitSeconds: [0],
				transitionSeconds: [.25],
				angleDegree: [160],
				angleOffsetDegree: [0],
				pitchDegree: [15],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [3],
				heightPercent: [0],
				vertCtrRatio: [.5]
			}
		}, {
			templateId: "camera_hyperfang_leader_player_left_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER"],
				easeInSpeed: [0],
				eastOutSpeed: [1],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.15],
				angleDegree: [150],
				angleOffsetDegree: [-5],
				pitchDegree: [10],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [1.5],
				heightPercent: [-.25],
				vertCtrRatio: [.5]
			}
		}, {
			templateId: "camera_hyperfang_leader_player_right_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER"],
				easeInSpeed: [0],
				eastOutSpeed: [1],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.15],
				angleDegree: [-160],
				angleOffsetDegree: [5],
				pitchDegree: [10],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [1.5],
				heightPercent: [-.25],
				vertCtrRatio: [.5]
			}
		}, {
			templateId: "camera_hyperfang_player_left_leader_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER"],
				easeInSpeed: [0],
				eastOutSpeed: [1],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.15],
				angleDegree: [-150],
				angleOffsetDegree: [5],
				pitchDegree: [10],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [1.5],
				heightPercent: [-.25],
				vertCtrRatio: [.5]
			}
		}, {
			templateId: "camera_hyperfang_player_right_leader_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER"],
				easeInSpeed: [0],
				eastOutSpeed: [1],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.15],
				angleDegree: [150],
				angleOffsetDegree: [0],
				pitchDegree: [10],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [1.5],
				heightPercent: [-.25],
				vertCtrRatio: [.5]
			}
		}, {
			templateId: "camera_icebeam",
			camera: {
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_EDGE", "CAM_TARGET_DEFENDER_EDGE"],
				easeInSpeed: [0, 1],
				eastOutSpeed: [0, 1],
				durationSeconds: [1.2, 5],
				waitSeconds: [0, 0],
				transitionSeconds: [.37, .15],
				angleDegree: [-160, 150],
				angleOffsetDegree: [0, 0],
				pitchDegree: [15, 5],
				pitchOffsetDegree: [0, 0],
				rollDegree: [0, 0],
				distanceMeters: [1.5, 3.75],
				heightPercent: [0, 0],
				vertCtrRatio: [.5, .5]
			}
		}, {
			templateId: "camera_icebeam_leader_player_left_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER_EDGE"],
				easeInSpeed: [1],
				eastOutSpeed: [1],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.15],
				angleDegree: [150],
				angleOffsetDegree: [0],
				pitchDegree: [5],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [3.75],
				heightPercent: [0],
				vertCtrRatio: [.75]
			}
		}, {
			templateId: "camera_icebeam_leader_player_right_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER_GROUND"],
				easeInSpeed: [1],
				eastOutSpeed: [1],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.15],
				angleDegree: [-160],
				angleOffsetDegree: [5],
				pitchDegree: [5],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [3.75],
				heightPercent: [0],
				vertCtrRatio: [.75]
			}
		}, {
			templateId: "camera_icebeam_player_left_leader_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER_GROUND"],
				easeInSpeed: [1],
				eastOutSpeed: [1],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.15],
				angleDegree: [-150],
				angleOffsetDegree: [5],
				pitchDegree: [5],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [3.75],
				heightPercent: [0],
				vertCtrRatio: [.75]
			}
		}, {
			templateId: "camera_icebeam_player_right_leader_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER_EDGE"],
				easeInSpeed: [1],
				eastOutSpeed: [1],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.15],
				angleDegree: [140],
				angleOffsetDegree: [0],
				pitchDegree: [5],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [3.75],
				heightPercent: [0],
				vertCtrRatio: [.75]
			}
		}, {
			templateId: "camera_icepunch",
			camera: {
				interpolation: ["CAM_INTERP_CUT"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER_EDGE"],
				easeInSpeed: [0],
				eastOutSpeed: [0],
				durationSeconds: [5],
				waitSeconds: [.1],
				transitionSeconds: [.3],
				angleDegree: [-20],
				angleOffsetDegree: [0],
				pitchDegree: [10],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [.5],
				heightPercent: [-.25],
				vertCtrRatio: [.5]
			}
		}, {
			templateId: "camera_icepunch_hit",
			camera: {
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER_EDGE", "CAM_TARGET_DEFENDER"],
				easeInSpeed: [0, 1],
				eastOutSpeed: [0, 0],
				durationSeconds: [0, 5],
				waitSeconds: [0, .45],
				transitionSeconds: [0, .3],
				angleDegree: [-20, 160],
				angleOffsetDegree: [0, 0],
				pitchDegree: [10, 10],
				pitchOffsetDegree: [0, 0],
				rollDegree: [0, 0],
				distanceMeters: [.5, 2],
				heightPercent: [-.25, 0],
				vertCtrRatio: [.5, .5]
			}
		}, {
			templateId: "camera_idle",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR", "CAM_INTERP_CUT", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER", "CAM_TARGET_DEFENDER", "CAM_TARGET_DEFENDER", "CAM_TARGET_ATTACKER_DEFENDER", "CAM_TARGET_ATTACKER_DEFENDER"],
				easeInSpeed: [0, 0, 0, 0, 0],
				eastOutSpeed: [0, 0, 0, 0, 0],
				durationSeconds: [6, 0, 6, 6, 6],
				waitSeconds: [0, 0, 0, 0, 0],
				transitionSeconds: [4, 0, 4, 4, 4],
				angleDegree: [-150, -90, 120, -120, -20],
				angleOffsetDegree: [0, 0, 0, 0, 0],
				pitchDegree: [0, 0, 25, 25, 20],
				pitchOffsetDegree: [0, 0, 0, 0, 0],
				rollDegree: [0, 0, 0, 0, 0],
				distanceMeters: [1.5, 0, 2.5, 1.5, 0],
				heightPercent: [0, 0, 0, 0, 0],
				vertCtrRatio: [.5, 1, .5, .5, 1]
			}
		}, {
			templateId: "camera_ironhead",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER"],
				easeInSpeed: [.5],
				eastOutSpeed: [.5],
				durationSeconds: [5],
				waitSeconds: [.2],
				transitionSeconds: [.6],
				angleDegree: [160],
				angleOffsetDegree: [0],
				pitchDegree: [20],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [2],
				heightPercent: [0],
				vertCtrRatio: [.5]
			}
		}, {
			templateId: "camera_ironhead_leader_player_left_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER"],
				easeInSpeed: [0],
				eastOutSpeed: [0],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.4],
				angleDegree: [150],
				angleOffsetDegree: [-5],
				pitchDegree: [10],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [2],
				heightPercent: [-.25],
				vertCtrRatio: [.5]
			}
		}, {
			templateId: "camera_ironhead_leader_player_right_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER"],
				easeInSpeed: [0],
				eastOutSpeed: [0],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.4],
				angleDegree: [-160],
				angleOffsetDegree: [5],
				pitchDegree: [10],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [2],
				heightPercent: [-.25],
				vertCtrRatio: [.5]
			}
		}, {
			templateId: "camera_ironhead_player_left_leader_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER"],
				easeInSpeed: [0],
				eastOutSpeed: [0],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.4],
				angleDegree: [-150],
				angleOffsetDegree: [5],
				pitchDegree: [10],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [2],
				heightPercent: [-.25],
				vertCtrRatio: [.5]
			}
		}, {
			templateId: "camera_ironhead_player_right_leader_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER"],
				easeInSpeed: [0],
				eastOutSpeed: [0],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.4],
				angleDegree: [150],
				angleOffsetDegree: [0],
				pitchDegree: [10],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [2],
				heightPercent: [-.25],
				vertCtrRatio: [.5]
			}
		}, {
			templateId: "camera_ironheadenter",
			camera: {
				interpolation: ["CAM_INTERP_CUT"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER"],
				easeInSpeed: [.5],
				eastOutSpeed: [.5],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [0],
				angleDegree: [-20],
				angleOffsetDegree: [0],
				pitchDegree: [20],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [0],
				heightPercent: [0],
				vertCtrRatio: [1]
			}
		}, {
			templateId: "camera_karatechop",
			camera: {
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_CUT", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_SHOULDER_ATTACKER_DEFENDER", "CAM_TARGET_ATTACKER_DEFENDER", "CAM_TARGET_DEFENDER"],
				easeInSpeed: [.5, .5, .5],
				eastOutSpeed: [.5, .5, .5],
				durationSeconds: [0, 5, 5],
				waitSeconds: [0, 0, 0],
				transitionSeconds: [0, .33, .33],
				angleDegree: [-20, -20, 160],
				angleOffsetDegree: [0, 0, 0],
				pitchDegree: [20, 20, 20],
				pitchOffsetDegree: [0, 0, 0],
				rollDegree: [0, 0, 0],
				distanceMeters: [0, 0, .5],
				heightPercent: [0, 0, 0],
				vertCtrRatio: [1, 1, 1]
			}
		}, {
			templateId: "camera_leafblade",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER_GROUND"],
				easeInSpeed: [0],
				eastOutSpeed: [0],
				durationSeconds: [10],
				waitSeconds: [0],
				transitionSeconds: [.25],
				angleDegree: [150],
				angleOffsetDegree: [0],
				pitchDegree: [15],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [5],
				heightPercent: [0],
				vertCtrRatio: [.5]
			}
		}, {
			templateId: "camera_leafbladeenter",
			camera: {
				interpolation: ["CAM_INTERP_CUT"],
				targetType: ["CAM_TARGET_SHOULDER_ATTACKER_DEFENDER_MIRROR"],
				easeInSpeed: [0],
				eastOutSpeed: [0],
				durationSeconds: [10],
				waitSeconds: [0],
				transitionSeconds: [1],
				angleDegree: [-30],
				angleOffsetDegree: [0],
				pitchDegree: [20],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [1],
				heightPercent: [0],
				vertCtrRatio: [1]
			}
		}, {
			templateId: "camera_left",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER"],
				easeInSpeed: [.5],
				eastOutSpeed: [.5],
				durationSeconds: [3],
				waitSeconds: [0],
				transitionSeconds: [1],
				angleDegree: [90],
				angleOffsetDegree: [0],
				pitchDegree: [0],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [0],
				heightPercent: [0],
				vertCtrRatio: [1]
			}
		}, {
			templateId: "camera_lowsweep",
			camera: {
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER", "CAM_TARGET_DEFENDER"],
				easeInSpeed: [.5, .5],
				eastOutSpeed: [.5, .5],
				durationSeconds: [0, 1],
				waitSeconds: [0, 0],
				transitionSeconds: [0, .4],
				angleDegree: [-20, 160],
				angleOffsetDegree: [0, 0],
				pitchDegree: [20, 20],
				pitchOffsetDegree: [0, 0],
				rollDegree: [0, 0],
				distanceMeters: [0, 3.5],
				heightPercent: [0, 0],
				vertCtrRatio: [1, .5]
			}
		}, {
			templateId: "camera_magnetbomb",
			camera: {
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_SHOULDER_ATTACKER_DEFENDER", "CAM_TARGET_DEFENDER_EDGE"],
				easeInSpeed: [.5, .5],
				eastOutSpeed: [.5, .5],
				durationSeconds: [1.4, 5],
				waitSeconds: [0, 0],
				transitionSeconds: [.8, .33],
				angleDegree: [-20, 160],
				angleOffsetDegree: [0, 0],
				pitchDegree: [20, 0],
				pitchOffsetDegree: [0, 0],
				rollDegree: [0, 0],
				distanceMeters: [0, 2],
				heightPercent: [0, 0],
				vertCtrRatio: [1, .75]
			}
		}, {
			templateId: "camera_megadrain",
			camera: {
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER_GROUND", "CAM_TARGET_SHOULDER_ATTACKER_DEFENDER", "CAM_TARGET_SHOULDER_ATTACKER_DEFENDER"],
				easeInSpeed: [.5, 0, 0],
				eastOutSpeed: [.5, 0, 0],
				durationSeconds: [0, 1, 10],
				waitSeconds: [0, 0, 0],
				transitionSeconds: [0, 2, 1],
				angleDegree: [176, -40, -20],
				angleOffsetDegree: [0, 0, 0],
				pitchDegree: [0, 3, 20],
				pitchOffsetDegree: [0, 0, 0],
				rollDegree: [0, 0, 0],
				distanceMeters: [0, 0, 0],
				heightPercent: [0, 0, 0],
				vertCtrRatio: [.5, 1, 1]
			}
		}, {
			templateId: "camera_megahorn",
			camera: {
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_EDGE", "CAM_TARGET_DEFENDER_EDGE"],
				easeInSpeed: [0, 0],
				eastOutSpeed: [0, 0],
				durationSeconds: [1.15, 5],
				waitSeconds: [0, 0],
				transitionSeconds: [.4, .4],
				angleDegree: [-150, 135],
				angleOffsetDegree: [0, 0],
				pitchDegree: [0, 0],
				pitchOffsetDegree: [0, 0],
				rollDegree: [0, 0],
				distanceMeters: [1.5, 1],
				heightPercent: [0, 0],
				vertCtrRatio: [1, 1]
			}
		}, {
			templateId: "camera_moonblast",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER", "CAM_TARGET_ATTACKER_DEFENDER", "CAM_TARGET_DEFENDER"],
				easeInSpeed: [0, 0, 0],
				eastOutSpeed: [0, 0, 0],
				durationSeconds: [1.25, .75, 5],
				waitSeconds: [0, 0, 0],
				transitionSeconds: [.25, .33, .5],
				angleDegree: [-20, -10, 165],
				angleOffsetDegree: [0, 0, 0],
				pitchDegree: [20, 15, 10],
				pitchOffsetDegree: [-85, 0, 0],
				rollDegree: [0, 0, 0],
				distanceMeters: [-1.8, 1, 3],
				heightPercent: [0, 0, 0],
				vertCtrRatio: [1, 1, .6]
			}
		}, {
			templateId: "camera_moonblast_leader_player_left_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER", "CAM_TARGET_ATTACKER_DEFENDER", "CAM_TARGET_DEFENDER"],
				easeInSpeed: [0, 0, 0],
				eastOutSpeed: [0, 0, 0],
				durationSeconds: [1.25, .75, 5],
				waitSeconds: [0, 0, 0],
				transitionSeconds: [.25, .33, .66],
				angleDegree: [-160, -140, 30],
				angleOffsetDegree: [0, 0, 0],
				pitchDegree: [10, 15, 10],
				pitchOffsetDegree: [-85, 0, 0],
				rollDegree: [0, 0, 0],
				distanceMeters: [-3.8, -1, 3],
				heightPercent: [0, 0, 0],
				vertCtrRatio: [1, 1, .6]
			}
		}, {
			templateId: "camera_moonblast_leader_player_right_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER", "CAM_TARGET_ATTACKER_DEFENDER", "CAM_TARGET_DEFENDER"],
				easeInSpeed: [0, 0, 0],
				eastOutSpeed: [0, 0, 0],
				durationSeconds: [1.25, .75, 5],
				waitSeconds: [0, 0, 0],
				transitionSeconds: [.25, .33, .66],
				angleDegree: [160, 150, -25],
				angleOffsetDegree: [0, 0, 0],
				pitchDegree: [10, 15, 10],
				pitchOffsetDegree: [-85, 0, 0],
				rollDegree: [0, 0, 0],
				distanceMeters: [-3.8, -1, 3],
				heightPercent: [0, 0, 0],
				vertCtrRatio: [1, 1, .6]
			}
		}, {
			templateId: "camera_moonblast_player_left_leader_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER", "CAM_TARGET_ATTACKER_DEFENDER", "CAM_TARGET_DEFENDER"],
				easeInSpeed: [0, 0, 0],
				eastOutSpeed: [0, 0, 0],
				durationSeconds: [1.25, .75, 5],
				waitSeconds: [0, 0, 0],
				transitionSeconds: [.25, .33, .66],
				angleDegree: [20, 15, -155],
				angleOffsetDegree: [0, 0, 0],
				pitchDegree: [10, 15, 10],
				pitchOffsetDegree: [-85, 0, 0],
				rollDegree: [0, 0, 0],
				distanceMeters: [-3.8, 1, 1],
				heightPercent: [0, 0, 0],
				vertCtrRatio: [1, 1, .6]
			}
		}, {
			templateId: "camera_moonblast_player_right_leader_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER", "CAM_TARGET_ATTACKER_DEFENDER", "CAM_TARGET_DEFENDER"],
				easeInSpeed: [0, 0, 0],
				eastOutSpeed: [0, 0, 0],
				durationSeconds: [1.25, .75, 5],
				waitSeconds: [0, 0, 0],
				transitionSeconds: [.25, .33, .66],
				angleDegree: [-20, -15, 155],
				angleOffsetDegree: [0, 0, 0],
				pitchDegree: [10, 15, 10],
				pitchOffsetDegree: [-85, 0, 0],
				rollDegree: [0, 0, 0],
				distanceMeters: [-3.8, 1, 1],
				heightPercent: [0, 0, 0],
				vertCtrRatio: [1, 1, .6]
			}
		}, {
			templateId: "camera_mudbomb",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER_EDGE"],
				easeInSpeed: [.5],
				eastOutSpeed: [.5],
				durationSeconds: [5],
				waitSeconds: [.25],
				transitionSeconds: [.75],
				angleDegree: [145],
				angleOffsetDegree: [0],
				pitchDegree: [10],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [2],
				heightPercent: [0],
				vertCtrRatio: [1]
			}
		}, {
			templateId: "camera_mudbombenter",
			camera: {
				interpolation: ["CAM_INTERP_CUT"],
				targetType: ["CAM_TARGET_SHOULDER_ATTACKER_DEFENDER"],
				easeInSpeed: [.5],
				eastOutSpeed: [.5],
				durationSeconds: [1.5],
				waitSeconds: [0],
				transitionSeconds: [.5],
				angleDegree: [-20],
				angleOffsetDegree: [0],
				pitchDegree: [20],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [0],
				heightPercent: [0],
				vertCtrRatio: [1]
			}
		}, {
			templateId: "camera_mudshot",
			camera: {
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER", "CAM_TARGET_DEFENDER"],
				easeInSpeed: [.5, .5],
				eastOutSpeed: [.5, .5],
				durationSeconds: [1, 5],
				waitSeconds: [0, 0],
				transitionSeconds: [0, .4],
				angleDegree: [-20, 160],
				angleOffsetDegree: [0, 0],
				pitchDegree: [20, 0],
				pitchOffsetDegree: [0, 0],
				rollDegree: [0, 0],
				distanceMeters: [0, 1],
				heightPercent: [0, 0],
				vertCtrRatio: [1, .88]
			}
		}, {
			templateId: "camera_nightslash",
			camera: {
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_SHOULDER_ATTACKER_DEFENDER", "CAM_TARGET_ATTACKER_EDGE", "CAM_TARGET_ATTACKER_DEFENDER"],
				easeInSpeed: [.5, .5, .5],
				eastOutSpeed: [.5, .5, .5],
				durationSeconds: [0, .6, 5],
				waitSeconds: [0, 0, 0],
				transitionSeconds: [0, .4, .1],
				angleDegree: [-20, -160, -20],
				angleOffsetDegree: [0, 0, 0],
				pitchDegree: [20, 20, 20],
				pitchOffsetDegree: [0, 0, 0],
				rollDegree: [0, 0, 0],
				distanceMeters: [0, 2, 0],
				heightPercent: [0, 0, 0],
				vertCtrRatio: [1, 1, 1]
			}
		}, {
			templateId: "camera_ominouswind",
			camera: {
				interpolation: ["CAM_INTERP_CUT"],
				targetType: ["CAM_TARGET_SHOULDER_ATTACKER_DEFENDER_MIRROR"],
				easeInSpeed: [0],
				eastOutSpeed: [0],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [3],
				angleDegree: [-20],
				angleOffsetDegree: [0],
				pitchDegree: [20],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [1.5],
				heightPercent: [0],
				vertCtrRatio: [1]
			}
		}, {
			templateId: "camera_overhead_leader_player_left_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER_WORLD"],
				easeInSpeed: [.5],
				eastOutSpeed: [.5],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.66],
				angleDegree: [-170],
				angleOffsetDegree: [0],
				pitchDegree: [30],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [1],
				heightPercent: [0],
				vertCtrRatio: [.75]
			}
		}, {
			templateId: "camera_overhead_leader_player_right_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER_WORLD"],
				easeInSpeed: [.5],
				eastOutSpeed: [.5],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.66],
				angleDegree: [170],
				angleOffsetDegree: [0],
				pitchDegree: [30],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [1],
				heightPercent: [0],
				vertCtrRatio: [.75]
			}
		}, {
			templateId: "camera_overhead_player_left_leader_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER_WORLD"],
				easeInSpeed: [.5],
				eastOutSpeed: [.5],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.66],
				angleDegree: [-170],
				angleOffsetDegree: [0],
				pitchDegree: [20],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [1],
				heightPercent: [0],
				vertCtrRatio: [.75]
			}
		}, {
			templateId: "camera_overhead_player_right_leader_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER_WORLD"],
				easeInSpeed: [.5],
				eastOutSpeed: [.5],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.66],
				angleDegree: [160],
				angleOffsetDegree: [0],
				pitchDegree: [20],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [1],
				heightPercent: [0],
				vertCtrRatio: [.75]
			}
		}, {
			templateId: "camera_pantoattacker_leader_player_left_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER"],
				easeInSpeed: [0],
				eastOutSpeed: [0],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.66],
				angleDegree: [-20],
				angleOffsetDegree: [0],
				pitchDegree: [20],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [1.5],
				heightPercent: [0],
				vertCtrRatio: [.75]
			}
		}, {
			templateId: "camera_pantoattacker_leader_player_right_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER"],
				easeInSpeed: [0],
				eastOutSpeed: [0],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.66],
				angleDegree: [20],
				angleOffsetDegree: [0],
				pitchDegree: [20],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [2],
				heightPercent: [0],
				vertCtrRatio: [.75]
			}
		}, {
			templateId: "camera_pantoattacker_player_left_leader_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_GROUND"],
				easeInSpeed: [0],
				eastOutSpeed: [0],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.66],
				angleDegree: [20],
				angleOffsetDegree: [0],
				pitchDegree: [20],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [2],
				heightPercent: [0],
				vertCtrRatio: [.75]
			}
		}, {
			templateId: "camera_pantoattacker_player_right_leader_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_GROUND"],
				easeInSpeed: [0],
				eastOutSpeed: [0],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.66],
				angleDegree: [-20],
				angleOffsetDegree: [0],
				pitchDegree: [20],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [3.5],
				heightPercent: [0],
				vertCtrRatio: [.75]
			}
		}, {
			templateId: "camera_pantodefender_leader_player_left_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER_GROUND"],
				easeInSpeed: [0],
				eastOutSpeed: [0],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.33],
				angleDegree: [20],
				angleOffsetDegree: [0],
				pitchDegree: [20],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [4],
				heightPercent: [0],
				vertCtrRatio: [.75]
			}
		}, {
			templateId: "camera_pantodefender_leader_player_right_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER_GROUND"],
				easeInSpeed: [0],
				eastOutSpeed: [0],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.33],
				angleDegree: [-20],
				angleOffsetDegree: [0],
				pitchDegree: [20],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [4],
				heightPercent: [0],
				vertCtrRatio: [.75]
			}
		}, {
			templateId: "camera_pantodefender_player_left_leader_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER_GROUND"],
				easeInSpeed: [0],
				eastOutSpeed: [0],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.33],
				angleDegree: [-145],
				angleOffsetDegree: [5],
				pitchDegree: [20],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [4],
				heightPercent: [0],
				vertCtrRatio: [.75]
			}
		}, {
			templateId: "camera_pantodefender_player_right_leader_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER_GROUND"],
				easeInSpeed: [0],
				eastOutSpeed: [0],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.33],
				angleDegree: [145],
				angleOffsetDegree: [-5],
				pitchDegree: [20],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [4],
				heightPercent: [0],
				vertCtrRatio: [.75]
			}
		}, {
			templateId: "camera_pantofacedefender_leader_player_left_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER"],
				easeInSpeed: [0],
				eastOutSpeed: [0],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.8],
				angleDegree: [150],
				angleOffsetDegree: [-5],
				pitchDegree: [10],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [3.5],
				heightPercent: [-.25],
				vertCtrRatio: [.5]
			}
		}, {
			templateId: "camera_pantofacedefender_leader_player_right_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER"],
				easeInSpeed: [0],
				eastOutSpeed: [0],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.8],
				angleDegree: [-160],
				angleOffsetDegree: [5],
				pitchDegree: [10],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [3.5],
				heightPercent: [-.25],
				vertCtrRatio: [.5]
			}
		}, {
			templateId: "camera_pantofacedefender_player_left_leader_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER"],
				easeInSpeed: [0],
				eastOutSpeed: [0],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.8],
				angleDegree: [-150],
				angleOffsetDegree: [5],
				pitchDegree: [10],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [2.5],
				heightPercent: [-.25],
				vertCtrRatio: [.5]
			}
		}, {
			templateId: "camera_pantofacedefender_player_right_leader_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER"],
				easeInSpeed: [0],
				eastOutSpeed: [0],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.8],
				angleDegree: [150],
				angleOffsetDegree: [0],
				pitchDegree: [10],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [2.5],
				heightPercent: [-.25],
				vertCtrRatio: [.5]
			}
		}, {
			templateId: "camera_paraboliccharge",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_SHOULDER_ATTACKER_DEFENDER"],
				easeInSpeed: [0],
				eastOutSpeed: [0],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.5],
				angleDegree: [-20],
				angleOffsetDegree: [0],
				pitchDegree: [20],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [4],
				heightPercent: [0],
				vertCtrRatio: [1]
			}
		}, {
			templateId: "camera_paraboliccharge_leader_player_left_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER", "CAM_TARGET_ATTACKER"],
				easeInSpeed: [0, 0],
				eastOutSpeed: [0, 0],
				durationSeconds: [.5, 5],
				waitSeconds: [0, 1],
				transitionSeconds: [.5, 1.5],
				angleDegree: [-20, -20],
				angleOffsetDegree: [0, 0],
				pitchDegree: [10, 10],
				pitchOffsetDegree: [0, 0],
				rollDegree: [0, 0],
				distanceMeters: [4, 3],
				heightPercent: [0, 0],
				vertCtrRatio: [1, 1]
			}
		}, {
			templateId: "camera_paraboliccharge_leader_player_right_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER", "CAM_TARGET_ATTACKER"],
				easeInSpeed: [0, 0],
				eastOutSpeed: [0, 0],
				durationSeconds: [.5, 5],
				waitSeconds: [0, 1],
				transitionSeconds: [.5, 1.5],
				angleDegree: [20, 15],
				angleOffsetDegree: [0, 0],
				pitchDegree: [10, 10],
				pitchOffsetDegree: [0, 0],
				rollDegree: [0, 0],
				distanceMeters: [4, 3],
				heightPercent: [0, 0],
				vertCtrRatio: [1, 1]
			}
		}, {
			templateId: "camera_paraboliccharge_player_left_leader_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER", "CAM_TARGET_ATTACKER"],
				easeInSpeed: [0, 0],
				eastOutSpeed: [0, 0],
				durationSeconds: [.5, 5],
				waitSeconds: [0, 1],
				transitionSeconds: [.5, 1.5],
				angleDegree: [20, 20],
				angleOffsetDegree: [0, 0],
				pitchDegree: [10, 10],
				pitchOffsetDegree: [0, 0],
				rollDegree: [0, 0],
				distanceMeters: [4, 3],
				heightPercent: [0, 0],
				vertCtrRatio: [1, 1]
			}
		}, {
			templateId: "camera_paraboliccharge_player_right_leader_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER", "CAM_TARGET_ATTACKER"],
				easeInSpeed: [0, 0],
				eastOutSpeed: [0, 0],
				durationSeconds: [.5, 5],
				waitSeconds: [0, 1],
				transitionSeconds: [.5, 1.5],
				angleDegree: [-20, -25],
				angleOffsetDegree: [0, 0],
				pitchDegree: [10, 10],
				pitchOffsetDegree: [0, 0],
				rollDegree: [0, 0],
				distanceMeters: [4, 3],
				heightPercent: [0, 0],
				vertCtrRatio: [1, 1]
			}
		}, {
			templateId: "camera_petalblizzard",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER_GROUND"],
				easeInSpeed: [0],
				eastOutSpeed: [0],
				durationSeconds: [10],
				waitSeconds: [0],
				transitionSeconds: [.5],
				angleDegree: [135],
				angleOffsetDegree: [0],
				pitchDegree: [3],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [4],
				heightPercent: [0],
				vertCtrRatio: [.8]
			}
		}, {
			templateId: "camera_playrough",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER"],
				easeInSpeed: [.5],
				eastOutSpeed: [.5],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.13],
				angleDegree: [160],
				angleOffsetDegree: [0],
				pitchDegree: [10],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [2.5],
				heightPercent: [0],
				vertCtrRatio: [.5]
			}
		}, {
			templateId: "camera_playrough_leader_player_left_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER", "CAM_TARGET_DEFENDER", "CAM_TARGET_DEFENDER", "CAM_TARGET_DEFENDER", "CAM_TARGET_DEFENDER", "CAM_TARGET_DEFENDER", "CAM_TARGET_DEFENDER", "CAM_TARGET_DEFENDER"],
				easeInSpeed: [0, 1, 0, 1, 0, 1, 0, 0],
				eastOutSpeed: [1, 0, 1, 0, 1, 0, 0, 0],
				durationSeconds: [.8, .09, .12, .09, .12, .09, .12, 5],
				waitSeconds: [0, 0, 0, 0, 0, 0, 0, 0],
				transitionSeconds: [.15, .09, .12, .09, .12, .09, .12, .3],
				angleDegree: [150, 150, 150, 150, 150, 150, 150, 150],
				angleOffsetDegree: [-5, -5, -5, -5, -5, -5, -5, -5],
				pitchDegree: [10, 10, 10, 10, 10, 10, 10, 10],
				pitchOffsetDegree: [0, 0, 0, 0, 0, 0, 0, 0],
				rollDegree: [0, 15, 10, -15, -10, 10, 5, 0],
				distanceMeters: [1, 1, 1, 1, 1, 1, 1, 1],
				heightPercent: [-.25, -.25, -.25, -.25, -.25, -.25, -.25, -.25],
				vertCtrRatio: [.5, .5, .5, .5, .5, .5, .5, .5]
			}
		}, {
			templateId: "camera_playrough_leader_player_right_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER", "CAM_TARGET_DEFENDER", "CAM_TARGET_DEFENDER", "CAM_TARGET_DEFENDER", "CAM_TARGET_DEFENDER", "CAM_TARGET_DEFENDER", "CAM_TARGET_DEFENDER", "CAM_TARGET_DEFENDER"],
				easeInSpeed: [0, 1, 0, 1, 0, 1, 0, 0],
				eastOutSpeed: [1, 0, 1, 0, 1, 0, 0, 0],
				durationSeconds: [.8, .09, .12, .09, .12, .09, .12, 5],
				waitSeconds: [0, 0, 0, 0, 0, 0, 0, 0],
				transitionSeconds: [.15, .09, .12, .09, .12, .09, .12, .3],
				angleDegree: [-150, -150, -150, -150, -150, -150, -150, -150],
				angleOffsetDegree: [5, 5, 5, 5, 5, 5, 5, 5],
				pitchDegree: [10, 10, 10, 10, 10, 10, 10, 10],
				pitchOffsetDegree: [0, 0, 0, 0, 0, 0, 0, 0],
				rollDegree: [0, 15, 10, -15, -10, 10, 5, 0],
				distanceMeters: [1, 1, 1, 1, 1, 1, 1, 1],
				heightPercent: [-.25, -.25, -.25, -.25, -.25, -.25, -.25, -.25],
				vertCtrRatio: [.5, .5, .5, .5, .5, .5, .5, .5]
			}
		}, {
			templateId: "camera_playrough_player_left_leader_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER", "CAM_TARGET_DEFENDER", "CAM_TARGET_DEFENDER", "CAM_TARGET_DEFENDER", "CAM_TARGET_DEFENDER", "CAM_TARGET_DEFENDER", "CAM_TARGET_DEFENDER", "CAM_TARGET_DEFENDER"],
				easeInSpeed: [0, 1, 0, 1, 0, 1, 0, 0],
				eastOutSpeed: [1, 0, 1, 0, 1, 0, 0, 0],
				durationSeconds: [.8, .09, .12, .09, .12, .09, .12, 5],
				waitSeconds: [0, 0, 0, 0, 0, 0, 0, 0],
				transitionSeconds: [.15, .09, .12, .09, .12, .09, .12, .3],
				angleDegree: [-150, -150, -150, -150, -150, -150, -150, -150],
				angleOffsetDegree: [5, 5, 5, 5, 5, 5, 5, 5],
				pitchDegree: [10, 10, 10, 10, 10, 10, 10, 10],
				pitchOffsetDegree: [0, 0, 0, 0, 0, 0, 0, 0],
				rollDegree: [0, 15, 10, -15, -10, 10, 5, 0],
				distanceMeters: [1.25, 1.25, 1.25, 1.25, 1.25, 1.25, 1.25, 1.25],
				heightPercent: [-.25, -.25, -.25, -.25, -.25, -.25, -.25, -.25],
				vertCtrRatio: [.5, .5, .5, .5, .5, .5, .5, .5]
			}
		}, {
			templateId: "camera_playrough_player_right_leader_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER", "CAM_TARGET_DEFENDER", "CAM_TARGET_DEFENDER", "CAM_TARGET_DEFENDER", "CAM_TARGET_DEFENDER", "CAM_TARGET_DEFENDER", "CAM_TARGET_DEFENDER", "CAM_TARGET_DEFENDER"],
				easeInSpeed: [0, 1, 0, 1, 0, 1, 0, 0],
				eastOutSpeed: [1, 0, 1, 0, 1, 0, 0, 0],
				durationSeconds: [.8, .09, .12, .09, .12, .09, .12, 5],
				waitSeconds: [0, 0, 0, 0, 0, 0, 0, 0],
				transitionSeconds: [.15, .09, .12, .09, .12, .09, .12, .3],
				angleDegree: [150, 150, 150, 150, 150, 150, 150, 150],
				angleOffsetDegree: [0, 0, 0, 0, 0, 0, 0, 0],
				pitchDegree: [10, 10, 10, 10, 10, 10, 10, 10],
				pitchOffsetDegree: [0, 0, 0, 0, 0, 0, 0, 0],
				rollDegree: [0, 15, 10, -15, -10, 10, 5, 0],
				distanceMeters: [1.25, 1.25, 1.25, 1.25, 1.25, 1.25, 1.25, 1.25],
				heightPercent: [-.25, -.25, -.25, -.25, -.25, -.25, -.25, -.25],
				vertCtrRatio: [.5, .5, .5, .5, .5, .5, .5, .5]
			}
		}, {
			templateId: "camera_playroughenter",
			camera: {
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER", "CAM_TARGET_ATTACKER"],
				easeInSpeed: [.5, .5],
				eastOutSpeed: [.5, .5],
				durationSeconds: [0, 5],
				waitSeconds: [0, 0],
				transitionSeconds: [0, .13],
				angleDegree: [-20, -20],
				angleOffsetDegree: [0, 0],
				pitchDegree: [20, 10],
				pitchOffsetDegree: [0, 0],
				rollDegree: [0, 0],
				distanceMeters: [0, -.25],
				heightPercent: [0, .25],
				vertCtrRatio: [1, 1]
			}
		}, {
			templateId: "camera_poisonfang",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER_GROUND"],
				easeInSpeed: [.5],
				eastOutSpeed: [.5],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.33],
				angleDegree: [160],
				angleOffsetDegree: [0],
				pitchDegree: [5],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [2],
				heightPercent: [0],
				vertCtrRatio: [1]
			}
		}, {
			templateId: "camera_poisonjab",
			camera: {
				nextCamera: "poisonjab_hit",
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_EDGE"],
				easeInSpeed: [.5],
				eastOutSpeed: [.5],
				durationSeconds: [5.8],
				waitSeconds: [0],
				transitionSeconds: [1],
				angleDegree: [-135],
				angleOffsetDegree: [0],
				pitchDegree: [10],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [1.25],
				heightPercent: [0],
				vertCtrRatio: [.5]
			}
		}, {
			templateId: "camera_poisonjab_hit",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER", "CAM_TARGET_DEFENDER"],
				easeInSpeed: [.5, .5],
				eastOutSpeed: [.5, .5],
				durationSeconds: [.1, 5],
				waitSeconds: [0, 0],
				transitionSeconds: [.1, .83],
				angleDegree: [135, 180],
				angleOffsetDegree: [0, 0],
				pitchDegree: [0, .25],
				pitchOffsetDegree: [0, 0],
				rollDegree: [0, 0],
				distanceMeters: [.25, 1],
				heightPercent: [0, 0],
				vertCtrRatio: [.5, .5]
			}
		}, {
			templateId: "camera_powerwhip",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER_EDGE"],
				easeInSpeed: [0],
				eastOutSpeed: [1],
				durationSeconds: [3],
				waitSeconds: [.2],
				transitionSeconds: [.5],
				angleDegree: [90],
				angleOffsetDegree: [0],
				pitchDegree: [15],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [4],
				heightPercent: [.25],
				vertCtrRatio: [.5]
			}
		}, {
			templateId: "camera_powerwhip_leader_player_left_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER_EDGE"],
				easeInSpeed: [0],
				eastOutSpeed: [1],
				durationSeconds: [5],
				waitSeconds: [.2],
				transitionSeconds: [.5],
				angleDegree: [90],
				angleOffsetDegree: [0],
				pitchDegree: [10],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [5],
				heightPercent: [.25],
				vertCtrRatio: [.5]
			}
		}, {
			templateId: "camera_powerwhip_leader_player_right_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER_EDGE"],
				easeInSpeed: [0],
				eastOutSpeed: [1],
				durationSeconds: [5],
				waitSeconds: [.2],
				transitionSeconds: [.5],
				angleDegree: [90],
				angleOffsetDegree: [0],
				pitchDegree: [10],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [5],
				heightPercent: [.25],
				vertCtrRatio: [.5]
			}
		}, {
			templateId: "camera_powerwhip_player_left_leader_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER_EDGE"],
				easeInSpeed: [0],
				eastOutSpeed: [1],
				durationSeconds: [5],
				waitSeconds: [.2],
				transitionSeconds: [.5],
				angleDegree: [100],
				angleOffsetDegree: [0],
				pitchDegree: [10],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [5],
				heightPercent: [.25],
				vertCtrRatio: [.5]
			}
		}, {
			templateId: "camera_powerwhip_player_right_leader_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER_EDGE"],
				easeInSpeed: [0],
				eastOutSpeed: [1],
				durationSeconds: [5],
				waitSeconds: [.2],
				transitionSeconds: [.5],
				angleDegree: [80],
				angleOffsetDegree: [0],
				pitchDegree: [10],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [5],
				heightPercent: [.25],
				vertCtrRatio: [.5]
			}
		}, {
			templateId: "camera_psybeam",
			camera: {
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER", "CAM_TARGET_DEFENDER"],
				easeInSpeed: [.5, .5],
				eastOutSpeed: [.5, .5],
				durationSeconds: [0, 5],
				waitSeconds: [0, 0],
				transitionSeconds: [0, .5],
				angleDegree: [170, 170],
				angleOffsetDegree: [-5, -5],
				pitchDegree: [15, 15],
				pitchOffsetDegree: [0, 0],
				rollDegree: [0, 0],
				distanceMeters: [5, 3],
				heightPercent: [0, 0],
				vertCtrRatio: [.5, .5]
			}
		}, {
			templateId: "camera_psybeamenter",
			camera: {
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER", "CAM_TARGET_ATTACKER"],
				easeInSpeed: [.5, .5],
				eastOutSpeed: [.5, .5],
				durationSeconds: [.33, 5],
				waitSeconds: [0, 0],
				transitionSeconds: [.33, .83],
				angleDegree: [-170, -165],
				angleOffsetDegree: [0, 0],
				pitchDegree: [45, 0],
				pitchOffsetDegree: [0, 0],
				rollDegree: [0, 0],
				distanceMeters: [1, 2.5],
				heightPercent: [0, 0],
				vertCtrRatio: [1, .5]
			}
		}, {
			templateId: "camera_psybeamenter_leader_player_left_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_GROUND"],
				easeInSpeed: [0],
				eastOutSpeed: [0],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.83],
				angleDegree: [-150],
				angleOffsetDegree: [0],
				pitchDegree: [10],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [1],
				heightPercent: [0],
				vertCtrRatio: [.5]
			}
		}, {
			templateId: "camera_psybeamenter_leader_player_right_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_GROUND"],
				easeInSpeed: [0],
				eastOutSpeed: [0],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.83],
				angleDegree: [150],
				angleOffsetDegree: [0],
				pitchDegree: [10],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [1],
				heightPercent: [0],
				vertCtrRatio: [.5]
			}
		}, {
			templateId: "camera_psybeamenter_player_left_leader_",
			camera: {
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_GROUND", "CAM_TARGET_ATTACKER_GROUND"],
				easeInSpeed: [0, .5],
				eastOutSpeed: [.5, 0],
				durationSeconds: [0, 5],
				waitSeconds: [0, 0],
				transitionSeconds: [0, .83],
				angleDegree: [160, 150],
				angleOffsetDegree: [-5, -5],
				pitchDegree: [20, 10],
				pitchOffsetDegree: [0, 0],
				rollDegree: [0, 0],
				distanceMeters: [3.5, 1],
				heightPercent: [0, 0],
				vertCtrRatio: [.5, .5]
			}
		}, {
			templateId: "camera_psybeamenter_player_right_leader_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_GROUND"],
				easeInSpeed: [0],
				eastOutSpeed: [0],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.83],
				angleDegree: [-150],
				angleOffsetDegree: [0],
				pitchDegree: [10],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [1],
				heightPercent: [0],
				vertCtrRatio: [.5]
			}
		}, {
			templateId: "camera_psychic",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER"],
				easeInSpeed: [.5],
				eastOutSpeed: [.5],
				durationSeconds: [10],
				waitSeconds: [0],
				transitionSeconds: [.35],
				angleDegree: [165],
				angleOffsetDegree: [0],
				pitchDegree: [7.5],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [2.5],
				heightPercent: [0],
				vertCtrRatio: [1]
			}
		}, {
			templateId: "camera_psychicenter",
			camera: {
				interpolation: ["CAM_INTERP_CUT"],
				targetType: ["CAM_TARGET_ATTACKER_EDGE"],
				easeInSpeed: [.5],
				eastOutSpeed: [.5],
				durationSeconds: [10],
				waitSeconds: [0],
				transitionSeconds: [.75],
				angleDegree: [-60],
				angleOffsetDegree: [0],
				pitchDegree: [15],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [1.75],
				heightPercent: [0],
				vertCtrRatio: [.5]
			}
		}, {
			templateId: "camera_psychocut",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_SHOULDER_ATTACKER_DEFENDER", "CAM_TARGET_DEFENDER"],
				easeInSpeed: [0, .5],
				eastOutSpeed: [0, .5],
				durationSeconds: [.67, 1.46],
				waitSeconds: [0, 0],
				transitionSeconds: [.45, .67],
				angleDegree: [-20, 160],
				angleOffsetDegree: [0, 0],
				pitchDegree: [20, 5],
				pitchOffsetDegree: [0, 0],
				rollDegree: [0, 0],
				distanceMeters: [0, 3.5],
				heightPercent: [0, 0],
				vertCtrRatio: [1, 1]
			}
		}, {
			templateId: "camera_psyshock",
			camera: {
				nextCamera: "psyshock_hit",
				interpolation: ["CAM_INTERP_CUT"],
				targetType: ["CAM_TARGET_SHOULDER_ATTACKER_DEFENDER"],
				easeInSpeed: [.5],
				eastOutSpeed: [.5],
				durationSeconds: [1],
				waitSeconds: [0],
				transitionSeconds: [.25],
				angleDegree: [-20],
				angleOffsetDegree: [3],
				pitchDegree: [20],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [-.5],
				heightPercent: [.25],
				vertCtrRatio: [.5]
			}
		}, {
			templateId: "camera_psyshock_hit",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER"],
				easeInSpeed: [.5],
				eastOutSpeed: [1],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.5],
				angleDegree: [160],
				angleOffsetDegree: [0],
				pitchDegree: [0],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [2.75],
				heightPercent: [0],
				vertCtrRatio: [1]
			}
		}, {
			templateId: "camera_psyshock_leader_player_left_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER"],
				easeInSpeed: [.5],
				eastOutSpeed: [0],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.5],
				angleDegree: [160],
				angleOffsetDegree: [0],
				pitchDegree: [0],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [2.75],
				heightPercent: [0],
				vertCtrRatio: [1]
			}
		}, {
			templateId: "camera_psyshock_leader_player_right_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER"],
				easeInSpeed: [.5],
				eastOutSpeed: [0],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.5],
				angleDegree: [-160],
				angleOffsetDegree: [0],
				pitchDegree: [0],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [2.75],
				heightPercent: [0],
				vertCtrRatio: [1]
			}
		}, {
			templateId: "camera_psyshock_player_left_leader_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER"],
				easeInSpeed: [.5],
				eastOutSpeed: [0],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.5],
				angleDegree: [-160],
				angleOffsetDegree: [0],
				pitchDegree: [0],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [2.75],
				heightPercent: [0],
				vertCtrRatio: [1]
			}
		}, {
			templateId: "camera_psyshock_player_right_leader_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER"],
				easeInSpeed: [.5],
				eastOutSpeed: [0],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.5],
				angleDegree: [160],
				angleOffsetDegree: [0],
				pitchDegree: [0],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [2.75],
				heightPercent: [0],
				vertCtrRatio: [1]
			}
		}, {
			templateId: "camera_psystrike",
			camera: {
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER", "CAM_TARGET_DEFENDER", "CAM_TARGET_DEFENDER", "CAM_TARGET_DEFENDER", "CAM_TARGET_DEFENDER"],
				easeInSpeed: [.5, .5, .5, .5, .5],
				eastOutSpeed: [.5, .5, .5, .5, .5],
				durationSeconds: [1.83, .4, 1.6, .2, 1],
				waitSeconds: [.57, 0, 0, 0, 0],
				transitionSeconds: [.53, .4, 1.25, .2, 1],
				angleDegree: [-120, 135, 160, 160, 160],
				angleOffsetDegree: [0, 0, 0, 0, 0],
				pitchDegree: [10, 20, 60, 60, 20],
				pitchOffsetDegree: [0, 0, 0, 0, 0],
				rollDegree: [0, 0, 0, 0, 0],
				distanceMeters: [2, 0, 3, 0, 0],
				heightPercent: [0, 0, 0, 0, 0],
				vertCtrRatio: [1, .5, .5, .5, 1]
			}
		}, {
			templateId: "camera_psystrike_leader_player_left_",
			camera: {
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER", "CAM_TARGET_DEFENDER", "CAM_TARGET_DEFENDER", "CAM_TARGET_DEFENDER", "CAM_TARGET_DEFENDER", "CAM_TARGET_DEFENDER"],
				easeInSpeed: [1, 0, .5, .5, .5, .5],
				eastOutSpeed: [1, .5, .5, .5, .5, 0],
				durationSeconds: [1.83, .4, 1.75, .15, .15, 5],
				waitSeconds: [.57, 0, 0, 0, 0, 0],
				transitionSeconds: [0, .4, 1.25, .15, .15, 1],
				angleDegree: [-120, 135, 160, 160, 160, 160],
				angleOffsetDegree: [0, 0, 0, 0, 0, 0],
				pitchDegree: [10, 20, 30, 30, 30, 10],
				pitchOffsetDegree: [0, 0, -5, 0, 0, 0],
				rollDegree: [0, 0, 0, 0, 0, 0],
				distanceMeters: [2, 1.5, 4, 1.5, 1.9, 2],
				heightPercent: [0, 0, 0, 0, 0, 0],
				vertCtrRatio: [1, .5, .5, .5, .5, 1]
			}
		}, {
			templateId: "camera_psystrike_leader_player_right_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER", "CAM_TARGET_DEFENDER", "CAM_TARGET_DEFENDER", "CAM_TARGET_DEFENDER", "CAM_TARGET_DEFENDER", "CAM_TARGET_DEFENDER"],
				easeInSpeed: [0, .5, .5, .5, .5, .5],
				eastOutSpeed: [.5, .5, .5, .5, .5, 0],
				durationSeconds: [1.83, .4, 1.75, .15, .15, 5],
				waitSeconds: [.57, 0, 0, 0, 0, 0],
				transitionSeconds: [.53, .4, 1.25, .15, .15, 1],
				angleDegree: [120, -135, -160, -160, -160, -160],
				angleOffsetDegree: [0, 0, 0, 0, 0, 0],
				pitchDegree: [10, 20, 30, 30, 30, 10],
				pitchOffsetDegree: [0, 0, -5, 0, 0, 0],
				rollDegree: [0, 0, 0, 0, 0, 0],
				distanceMeters: [2, 1.5, 4, 1.5, 1.9, 2],
				heightPercent: [0, 0, 0, 0, 0, 0],
				vertCtrRatio: [1, .5, .5, .5, .5, 1]
			}
		}, {
			templateId: "camera_psystrike_player_left_leader_",
			camera: {
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER", "CAM_TARGET_DEFENDER", "CAM_TARGET_DEFENDER", "CAM_TARGET_DEFENDER", "CAM_TARGET_DEFENDER", "CAM_TARGET_DEFENDER"],
				easeInSpeed: [1, 0, .5, .5, .5, .5],
				eastOutSpeed: [1, .5, .5, .5, .5, 0],
				durationSeconds: [1.83, .4, 1.75, .15, .15, 5],
				waitSeconds: [.57, 0, 0, 0, 0, 0],
				transitionSeconds: [0, .4, 1.25, .15, .15, 1],
				angleDegree: [120, -135, -160, -160, -160, -160],
				angleOffsetDegree: [0, 0, 0, 0, 0, 0],
				pitchDegree: [10, 20, 30, 30, 30, 10],
				pitchOffsetDegree: [0, 0, -5, 0, 0, 0],
				rollDegree: [0, 0, 0, 0, 0, 0],
				distanceMeters: [2, 1.5, 4, 1.5, 1.9, 2],
				heightPercent: [0, 0, 0, 0, 0, 0],
				vertCtrRatio: [1, .5, .5, .5, .5, 1]
			}
		}, {
			templateId: "camera_psystrike_player_right_leader_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER", "CAM_TARGET_DEFENDER", "CAM_TARGET_DEFENDER", "CAM_TARGET_DEFENDER", "CAM_TARGET_DEFENDER", "CAM_TARGET_DEFENDER"],
				easeInSpeed: [0, .5, .5, .5, .5, .5],
				eastOutSpeed: [.5, .5, .5, .5, .5, 0],
				durationSeconds: [1.83, .4, 1.75, .15, .15, 5],
				waitSeconds: [.57, 0, 0, 0, 0, 0],
				transitionSeconds: [.53, .4, 1.25, .15, .15, 1],
				angleDegree: [-120, 135, 160, 160, 160, 160],
				angleOffsetDegree: [0, 0, 0, 0, 0, 0],
				pitchDegree: [10, 20, 30, 30, 30, 10],
				pitchOffsetDegree: [0, 0, -5, 0, 0, 0],
				rollDegree: [0, 0, 0, 0, 0, 0],
				distanceMeters: [2, 1.5, 4, 1.5, 1.9, 2],
				heightPercent: [0, 0, 0, 0, 0, 0],
				vertCtrRatio: [1, .5, .5, .5, .5, 1]
			}
		}, {
			templateId: "camera_punchhit_leader_player_left_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER"],
				easeInSpeed: [0],
				eastOutSpeed: [1],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.15],
				angleDegree: [150],
				angleOffsetDegree: [-5],
				pitchDegree: [10],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [.5],
				heightPercent: [-.25],
				vertCtrRatio: [.5]
			}
		}, {
			templateId: "camera_punchhit_leader_player_right_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER"],
				easeInSpeed: [0],
				eastOutSpeed: [1],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.15],
				angleDegree: [-160],
				angleOffsetDegree: [5],
				pitchDegree: [10],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [.5],
				heightPercent: [-.25],
				vertCtrRatio: [.5]
			}
		}, {
			templateId: "camera_punchhit_player_left_leader_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER"],
				easeInSpeed: [0],
				eastOutSpeed: [1],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.15],
				angleDegree: [-150],
				angleOffsetDegree: [5],
				pitchDegree: [10],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [.5],
				heightPercent: [-.25],
				vertCtrRatio: [.5]
			}
		}, {
			templateId: "camera_punchhit_player_right_leader_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER"],
				easeInSpeed: [0],
				eastOutSpeed: [1],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.15],
				angleDegree: [150],
				angleOffsetDegree: [0],
				pitchDegree: [10],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [.5],
				heightPercent: [-.25],
				vertCtrRatio: [.5]
			}
		}, {
			templateId: "camera_quickattacker",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER"],
				easeInSpeed: [.5],
				eastOutSpeed: [.5],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.25],
				angleDegree: [-160],
				angleOffsetDegree: [0],
				pitchDegree: [15],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [1.5],
				heightPercent: [0],
				vertCtrRatio: [1]
			}
		}, {
			templateId: "camera_quickdefender",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER"],
				easeInSpeed: [.5],
				eastOutSpeed: [.5],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.25],
				angleDegree: [-160],
				angleOffsetDegree: [0],
				pitchDegree: [15],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [1.5],
				heightPercent: [0],
				vertCtrRatio: [1]
			}
		}, {
			templateId: "camera_quickreturn",
			camera: {
				nextCamera: "battlewait",
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_SHOULDER_ATTACKER_DEFENDER_MIRROR"],
				easeInSpeed: [0],
				eastOutSpeed: [0],
				durationSeconds: [.5],
				waitSeconds: [0],
				transitionSeconds: [.5],
				angleDegree: [-20],
				angleOffsetDegree: [0],
				pitchDegree: [20],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [0],
				heightPercent: [0],
				vertCtrRatio: [1]
			}
		}, {
			templateId: "camera_rear",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER"],
				easeInSpeed: [.5],
				eastOutSpeed: [.5],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [1],
				angleDegree: [-20],
				angleOffsetDegree: [0],
				pitchDegree: [20],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [0],
				heightPercent: [0],
				vertCtrRatio: [1]
			}
		}, {
			templateId: "camera_rearcut",
			camera: {
				interpolation: ["CAM_INTERP_CUT"],
				targetType: ["CAM_TARGET_ATTACKER"],
				easeInSpeed: [.5],
				eastOutSpeed: [.5],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [0],
				angleDegree: [-20],
				angleOffsetDegree: [0],
				pitchDegree: [20],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [0],
				heightPercent: [0],
				vertCtrRatio: [1]
			}
		}, {
			templateId: "camera_rearcutdefender",
			camera: {
				interpolation: ["CAM_INTERP_CUT"],
				targetType: ["CAM_TARGET_DEFENDER"],
				easeInSpeed: [.5],
				eastOutSpeed: [.5],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [0],
				angleDegree: [-20],
				angleOffsetDegree: [0],
				pitchDegree: [20],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [0],
				heightPercent: [0],
				vertCtrRatio: [1]
			}
		}, {
			templateId: "camera_rockslide",
			camera: {
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_LINEAR", "CAM_INTERP_CUT"],
				targetType: ["CAM_TARGET_ATTACKER", "CAM_TARGET_ATTACKER", "CAM_TARGET_ATTACKER_DEFENDER"],
				easeInSpeed: [.5, .5, .5],
				eastOutSpeed: [.5, .5, .5],
				durationSeconds: [0, 1, 5],
				waitSeconds: [0, 0, 0],
				transitionSeconds: [0, 1, 0],
				angleDegree: [-135, -115, -30],
				angleOffsetDegree: [0, 0, 5],
				pitchDegree: [10, 10, 0],
				pitchOffsetDegree: [0, 0, 0],
				rollDegree: [0, 0, 0],
				distanceMeters: [2, 1, -.25],
				heightPercent: [0, 0, 0],
				vertCtrRatio: [1, .5, 1]
			}
		}, {
			templateId: "camera_rockthrow",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER", "CAM_TARGET_ATTACKER_DEFENDER", "CAM_TARGET_DEFENDER"],
				easeInSpeed: [.5, .5, .5],
				eastOutSpeed: [.5, .5, .5],
				durationSeconds: [5, .25, 5],
				waitSeconds: [0, 0, 0],
				transitionSeconds: [.13, .25, .25],
				angleDegree: [-20, -20, 175],
				angleOffsetDegree: [0, 0, 0],
				pitchDegree: [20, 10, 10],
				pitchOffsetDegree: [0, 0, 0],
				rollDegree: [0, 0, 0],
				distanceMeters: [0, 0, 0],
				heightPercent: [0, 0, 0],
				vertCtrRatio: [1, .5, .5]
			}
		}, {
			templateId: "camera_scald",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER"],
				easeInSpeed: [.5],
				eastOutSpeed: [.5],
				durationSeconds: [10],
				waitSeconds: [.2],
				transitionSeconds: [.4],
				angleDegree: [160],
				angleOffsetDegree: [0],
				pitchDegree: [5],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [3],
				heightPercent: [0],
				vertCtrRatio: [.75]
			}
		}, {
			templateId: "camera_scaldenter",
			camera: {
				interpolation: ["CAM_INTERP_CUT"],
				targetType: ["CAM_TARGET_ATTACKER_EDGE"],
				easeInSpeed: [.5],
				eastOutSpeed: [.5],
				durationSeconds: [1.7],
				waitSeconds: [0],
				transitionSeconds: [.5],
				angleDegree: [-100],
				angleOffsetDegree: [0],
				pitchDegree: [0],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [2],
				heightPercent: [0],
				vertCtrRatio: [1]
			}
		}, {
			templateId: "camera_seedbomb",
			camera: {
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER_EDGE", "CAM_TARGET_DEFENDER_EDGE"],
				easeInSpeed: [0, .5],
				eastOutSpeed: [0, .5],
				durationSeconds: [1, 5],
				waitSeconds: [0, 0],
				transitionSeconds: [.5, .5],
				angleDegree: [-20, 150],
				angleOffsetDegree: [0, 5],
				pitchDegree: [10, 15],
				pitchOffsetDegree: [0, 0],
				rollDegree: [0, 0],
				distanceMeters: [2.5, 2.5],
				heightPercent: [0, 0],
				vertCtrRatio: [1, .5]
			}
		}, {
			templateId: "camera_seedbombenter_leader_player_left_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER_WORLD"],
				easeInSpeed: [0],
				eastOutSpeed: [.5],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.33],
				angleDegree: [-145],
				angleOffsetDegree: [0],
				pitchDegree: [20],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [2],
				heightPercent: [0],
				vertCtrRatio: [1]
			}
		}, {
			templateId: "camera_seedbombenter_leader_player_right_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER_WORLD"],
				easeInSpeed: [0],
				eastOutSpeed: [.5],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.33],
				angleDegree: [145],
				angleOffsetDegree: [0],
				pitchDegree: [20],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [2],
				heightPercent: [0],
				vertCtrRatio: [1]
			}
		}, {
			templateId: "camera_seedbombenter_player_left_leader_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER_WORLD"],
				easeInSpeed: [0],
				eastOutSpeed: [.5],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.33],
				angleDegree: [-145],
				angleOffsetDegree: [0],
				pitchDegree: [20],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [2],
				heightPercent: [0],
				vertCtrRatio: [1]
			}
		}, {
			templateId: "camera_seedbombenter_player_right_leader_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER_WORLD"],
				easeInSpeed: [0],
				eastOutSpeed: [.5],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.33],
				angleDegree: [145],
				angleOffsetDegree: [0],
				pitchDegree: [20],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [2],
				heightPercent: [0],
				vertCtrRatio: [1]
			}
		}, {
			templateId: "camera_seedefender",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER"],
				easeInSpeed: [.5],
				eastOutSpeed: [.5],
				durationSeconds: [1],
				waitSeconds: [0],
				transitionSeconds: [.5],
				angleDegree: [150],
				angleOffsetDegree: [0],
				pitchDegree: [0],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [2],
				heightPercent: [0],
				vertCtrRatio: [.75]
			}
		}, {
			templateId: "camera_shadowball",
			camera: {
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER", "CAM_TARGET_DEFENDER_EDGE"],
				easeInSpeed: [.5, 0],
				eastOutSpeed: [.5, 0],
				durationSeconds: [2, 5],
				waitSeconds: [0, 0],
				transitionSeconds: [.4, .3],
				angleDegree: [-170, 135],
				angleOffsetDegree: [0, 0],
				pitchDegree: [20, 10],
				pitchOffsetDegree: [0, 0],
				rollDegree: [0, 0],
				distanceMeters: [2, 1.5],
				heightPercent: [0, 0],
				vertCtrRatio: [1, 1]
			}
		}, {
			templateId: "camera_shadowpunch_hit",
			camera: {
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER_EDGE", "CAM_TARGET_DEFENDER"],
				easeInSpeed: [0, 1],
				eastOutSpeed: [0, 0],
				durationSeconds: [0, 5],
				waitSeconds: [0, .3],
				transitionSeconds: [0, .3],
				angleDegree: [-20, 160],
				angleOffsetDegree: [0, 0],
				pitchDegree: [10, 10],
				pitchOffsetDegree: [0, 0],
				rollDegree: [0, 0],
				distanceMeters: [.5, 2],
				heightPercent: [-.25, 0],
				vertCtrRatio: [.5, .5]
			}
		}, {
			templateId: "camera_shadowsneak",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER"],
				easeInSpeed: [0],
				eastOutSpeed: [1],
				durationSeconds: [10],
				waitSeconds: [.2],
				transitionSeconds: [.85],
				angleDegree: [150],
				angleOffsetDegree: [0],
				pitchDegree: [15],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [2],
				heightPercent: [0],
				vertCtrRatio: [1]
			}
		}, {
			templateId: "camera_shadowsneak_leader_player_left_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER", "CAM_TARGET_DEFENDER", "CAM_TARGET_DEFENDER"],
				easeInSpeed: [0, .5, 0],
				eastOutSpeed: [.5, 0, 1],
				durationSeconds: [.4, 1.2, 5],
				waitSeconds: [0, 0, 0],
				transitionSeconds: [.4, .6, .55],
				angleDegree: [-20, 150, 150],
				angleOffsetDegree: [0, 0, 0],
				pitchDegree: [20, 15, 15],
				pitchOffsetDegree: [3, 0, -5],
				rollDegree: [0, 0, 0],
				distanceMeters: [.5, 3, 4],
				heightPercent: [0, 0, 0],
				vertCtrRatio: [1, 1, 1]
			}
		}, {
			templateId: "camera_shadowsneak_leader_player_right_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER", "CAM_TARGET_DEFENDER", "CAM_TARGET_DEFENDER"],
				easeInSpeed: [0, .5, 0],
				eastOutSpeed: [.5, 0, 1],
				durationSeconds: [.4, 1.2, 5],
				waitSeconds: [0, 0, 0],
				transitionSeconds: [.4, .6, .55],
				angleDegree: [20, -150, -150],
				angleOffsetDegree: [0, 0, 0],
				pitchDegree: [20, 15, 15],
				pitchOffsetDegree: [3, 0, -5],
				rollDegree: [0, 0, 0],
				distanceMeters: [.5, 3, 4],
				heightPercent: [0, 0, 0],
				vertCtrRatio: [1, 1, 1]
			}
		}, {
			templateId: "camera_shadowsneak_player_left_leader_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER", "CAM_TARGET_DEFENDER", "CAM_TARGET_DEFENDER"],
				easeInSpeed: [0, .5, 0],
				eastOutSpeed: [.5, 0, 1],
				durationSeconds: [.4, 1.2, 5],
				waitSeconds: [0, 0, 0],
				transitionSeconds: [.4, .6, .55],
				angleDegree: [20, -150, -150],
				angleOffsetDegree: [0, 0, 0],
				pitchDegree: [20, 15, 15],
				pitchOffsetDegree: [3, 0, -5],
				rollDegree: [0, 0, 0],
				distanceMeters: [.5, 3, 3],
				heightPercent: [0, 0, 0],
				vertCtrRatio: [1, 1, 1]
			}
		}, {
			templateId: "camera_shadowsneak_player_right_leader_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER", "CAM_TARGET_DEFENDER", "CAM_TARGET_DEFENDER"],
				easeInSpeed: [0, .5, 0],
				eastOutSpeed: [.5, 0, 1],
				durationSeconds: [.4, 1.2, 5],
				waitSeconds: [0, 0, 0],
				transitionSeconds: [.4, .6, .55],
				angleDegree: [-20, 150, 150],
				angleOffsetDegree: [0, 0, 0],
				pitchDegree: [20, 15, 15],
				pitchOffsetDegree: [3, 0, -5],
				rollDegree: [0, 0, 0],
				distanceMeters: [.5, 3, 3],
				heightPercent: [0, 0, 0],
				vertCtrRatio: [1, 1, 1]
			}
		}, {
			templateId: "camera_shadowsneakenter",
			camera: {
				interpolation: ["CAM_INTERP_CUT"],
				targetType: ["CAM_TARGET_DEFENDER_ATTACKER_EDGE"],
				easeInSpeed: [0],
				eastOutSpeed: [0],
				durationSeconds: [10],
				waitSeconds: [0],
				transitionSeconds: [.5],
				angleDegree: [150],
				angleOffsetDegree: [0],
				pitchDegree: [25],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [.5],
				heightPercent: [0],
				vertCtrRatio: [.5]
			}
		}, {
			templateId: "camera_shoot",
			camera: {
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER", "CAM_TARGET_ATTACKER"],
				easeInSpeed: [.5, .5],
				eastOutSpeed: [.5, .5],
				durationSeconds: [0, 2],
				waitSeconds: [0, 0],
				transitionSeconds: [0, .25],
				angleDegree: [180, 180],
				angleOffsetDegree: [0, 0],
				pitchDegree: [15, 5],
				pitchOffsetDegree: [0, 0],
				rollDegree: [0, 0],
				distanceMeters: [3, -1],
				heightPercent: [0, 0],
				vertCtrRatio: [1, 1]
			}
		}, {
			templateId: "camera_signalbeam",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER"],
				easeInSpeed: [.5],
				eastOutSpeed: [.5],
				durationSeconds: [5],
				waitSeconds: [.85],
				transitionSeconds: [.25],
				angleDegree: [160],
				angleOffsetDegree: [-5],
				pitchDegree: [10],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [3],
				heightPercent: [0],
				vertCtrRatio: [.5]
			}
		}, {
			templateId: "camera_signalbeamenter",
			camera: {
				interpolation: ["CAM_INTERP_CUT"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER"],
				easeInSpeed: [.5],
				eastOutSpeed: [.5],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.5],
				angleDegree: [-20],
				angleOffsetDegree: [0],
				pitchDegree: [20],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [0],
				heightPercent: [0],
				vertCtrRatio: [1]
			}
		}, {
			templateId: "camera_sludgebomb",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER_EDGE"],
				easeInSpeed: [.5],
				eastOutSpeed: [.5],
				durationSeconds: [5],
				waitSeconds: [.25],
				transitionSeconds: [.75],
				angleDegree: [140],
				angleOffsetDegree: [3],
				pitchDegree: [5],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [3],
				heightPercent: [0],
				vertCtrRatio: [.85]
			}
		}, {
			templateId: "camera_sludgewave",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER_EDGE"],
				easeInSpeed: [0],
				eastOutSpeed: [0],
				durationSeconds: [10],
				waitSeconds: [.2],
				transitionSeconds: [1],
				angleDegree: [150],
				angleOffsetDegree: [0],
				pitchDegree: [10],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [2],
				heightPercent: [0],
				vertCtrRatio: [1]
			}
		}, {
			templateId: "camera_solarbeam",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER", "CAM_TARGET_DEFENDER_EDGE"],
				easeInSpeed: [0, 0],
				eastOutSpeed: [0, 0],
				durationSeconds: [1.6, 5],
				waitSeconds: [1.35, .25],
				transitionSeconds: [.25, .83],
				angleDegree: [120, 135],
				angleOffsetDegree: [0, 0],
				pitchDegree: [20, 35],
				pitchOffsetDegree: [0, 0],
				rollDegree: [0, 0],
				distanceMeters: [2, 4],
				heightPercent: [0, 0],
				vertCtrRatio: [.5, .6]
			}
		}, {
			templateId: "camera_solarbeam_leader_player_left_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER", "CAM_TARGET_DEFENDER"],
				easeInSpeed: [0, .5],
				eastOutSpeed: [.5, 0],
				durationSeconds: [.25, 5],
				waitSeconds: [0, .25],
				transitionSeconds: [.25, .83],
				angleDegree: [130, 145],
				angleOffsetDegree: [0, -5],
				pitchDegree: [20, 35],
				pitchOffsetDegree: [0, 0],
				rollDegree: [0, 0],
				distanceMeters: [2, 4],
				heightPercent: [0, 0],
				vertCtrRatio: [.5, .6]
			}
		}, {
			templateId: "camera_solarbeam_leader_player_right_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER", "CAM_TARGET_DEFENDER"],
				easeInSpeed: [0, .5],
				eastOutSpeed: [.5, 0],
				durationSeconds: [.25, 5],
				waitSeconds: [0, .25],
				transitionSeconds: [.25, .83],
				angleDegree: [-130, -145],
				angleOffsetDegree: [0, 5],
				pitchDegree: [20, 35],
				pitchOffsetDegree: [0, 0],
				rollDegree: [0, 0],
				distanceMeters: [2, 4],
				heightPercent: [0, 0],
				vertCtrRatio: [.5, .6]
			}
		}, {
			templateId: "camera_solarbeam_player_left_leader_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER", "CAM_TARGET_DEFENDER"],
				easeInSpeed: [0, .5],
				eastOutSpeed: [.5, 0],
				durationSeconds: [.25, 5],
				waitSeconds: [0, .25],
				transitionSeconds: [.25, .83],
				angleDegree: [-120, -135],
				angleOffsetDegree: [0, 5],
				pitchDegree: [20, 35],
				pitchOffsetDegree: [0, 0],
				rollDegree: [0, 0],
				distanceMeters: [2, 4],
				heightPercent: [0, 0],
				vertCtrRatio: [.5, .6]
			}
		}, {
			templateId: "camera_solarbeam_player_right_leader_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER", "CAM_TARGET_DEFENDER"],
				easeInSpeed: [0, .5],
				eastOutSpeed: [.5, 0],
				durationSeconds: [.25, 5],
				waitSeconds: [0, .25],
				transitionSeconds: [.25, .83],
				angleDegree: [120, 135],
				angleOffsetDegree: [0, -5],
				pitchDegree: [20, 35],
				pitchOffsetDegree: [0, 0],
				rollDegree: [0, 0],
				distanceMeters: [2, 4],
				heightPercent: [0, 0],
				vertCtrRatio: [.5, .6]
			}
		}, {
			templateId: "camera_solarbeamenter",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER_WORLD"],
				easeInSpeed: [0],
				eastOutSpeed: [0],
				durationSeconds: [10],
				waitSeconds: [.23],
				transitionSeconds: [.5],
				angleDegree: [-150],
				angleOffsetDegree: [0],
				pitchDegree: [5],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [2],
				heightPercent: [0],
				vertCtrRatio: [1]
			}
		}, {
			templateId: "camera_solarbeamenter_leader_player_left_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_GROUND", "CAM_TARGET_ATTACKER_GROUND"],
				easeInSpeed: [0, .5],
				eastOutSpeed: [.5, 0],
				durationSeconds: [.33, 5],
				waitSeconds: [0, 1.16],
				transitionSeconds: [.33, .5],
				angleDegree: [-150, -150],
				angleOffsetDegree: [0, 0],
				pitchDegree: [10, 10],
				pitchOffsetDegree: [0, -5],
				rollDegree: [0, 0],
				distanceMeters: [3, 3],
				heightPercent: [0, 0],
				vertCtrRatio: [.5, .5]
			}
		}, {
			templateId: "camera_solarbeamenter_leader_player_right_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_GROUND", "CAM_TARGET_ATTACKER_GROUND"],
				easeInSpeed: [0, .5],
				eastOutSpeed: [.5, 0],
				durationSeconds: [.33, 5],
				waitSeconds: [0, 1.16],
				transitionSeconds: [.33, .5],
				angleDegree: [150, 150],
				angleOffsetDegree: [0, 0],
				pitchDegree: [10, 10],
				pitchOffsetDegree: [0, -5],
				rollDegree: [0, 0],
				distanceMeters: [3, 3],
				heightPercent: [0, 0],
				vertCtrRatio: [.5, .5]
			}
		}, {
			templateId: "camera_solarbeamenter_player_left_leader_",
			camera: {
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_GROUND", "CAM_TARGET_ATTACKER_GROUND", "CAM_TARGET_ATTACKER_GROUND"],
				easeInSpeed: [1, 0, .5],
				eastOutSpeed: [1, .5, 0],
				durationSeconds: [0, .33, 5],
				waitSeconds: [0, 0, 1.16],
				transitionSeconds: [0, .33, .5],
				angleDegree: [160, 150, 150],
				angleOffsetDegree: [-5, -5, -5],
				pitchDegree: [20, 10, 10],
				pitchOffsetDegree: [0, 0, -5],
				rollDegree: [0, 0, 0],
				distanceMeters: [4, 3, 3],
				heightPercent: [0, 0, 0],
				vertCtrRatio: [.5, .5, .5]
			}
		}, {
			templateId: "camera_solarbeamenter_player_right_leader_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_GROUND", "CAM_TARGET_ATTACKER_GROUND"],
				easeInSpeed: [0, .5],
				eastOutSpeed: [.5, 0],
				durationSeconds: [.33, 5],
				waitSeconds: [0, 1.16],
				transitionSeconds: [.33, .5],
				angleDegree: [-150, -150],
				angleOffsetDegree: [0, 0],
				pitchDegree: [10, 10],
				pitchOffsetDegree: [0, -5],
				rollDegree: [0, 0],
				distanceMeters: [3, 3],
				heightPercent: [0, 0],
				vertCtrRatio: [.5, .5]
			}
		}, {
			templateId: "camera_spark",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER", "CAM_TARGET_DEFENDER"],
				easeInSpeed: [.5, .5],
				eastOutSpeed: [.5, .5],
				durationSeconds: [1, 5],
				waitSeconds: [0, 0],
				transitionSeconds: [.4, .17],
				angleDegree: [-170, 10],
				angleOffsetDegree: [0, 0],
				pitchDegree: [20, 10],
				pitchOffsetDegree: [0, 0],
				rollDegree: [0, 0],
				distanceMeters: [0, 1],
				heightPercent: [0, 0],
				vertCtrRatio: [1, .5]
			}
		}, {
			templateId: "camera_stoneedge",
			camera: {
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_SHOULDER_ATTACKER_DEFENDER", "CAM_TARGET_SHOULDER_ATTACKER_DEFENDER"],
				easeInSpeed: [0, .5],
				eastOutSpeed: [0, .5],
				durationSeconds: [.5, 5],
				waitSeconds: [0, 0],
				transitionSeconds: [.35, .15],
				angleDegree: [-20, -20],
				angleOffsetDegree: [0, 5],
				pitchDegree: [20, 20],
				pitchOffsetDegree: [0, 0],
				rollDegree: [0, 0],
				distanceMeters: [0, -1],
				heightPercent: [0, 0],
				vertCtrRatio: [1, .5]
			}
		}, {
			templateId: "camera_submission",
			camera: {
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER", "CAM_TARGET_DEFENDER"],
				easeInSpeed: [.5, .5],
				eastOutSpeed: [.5, .5],
				durationSeconds: [0, 5],
				waitSeconds: [0, 0],
				transitionSeconds: [0, .1],
				angleDegree: [-20, 160],
				angleOffsetDegree: [0, 0],
				pitchDegree: [20, 20],
				pitchOffsetDegree: [0, 0],
				rollDegree: [0, 0],
				distanceMeters: [0, .5],
				heightPercent: [0, 0],
				vertCtrRatio: [1, 1]
			}
		}, {
			templateId: "camera_suckerpunch",
			camera: {
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_SHOULDER_ATTACKER_DEFENDER", "CAM_TARGET_DEFENDER"],
				easeInSpeed: [.5, .5],
				eastOutSpeed: [.5, .5],
				durationSeconds: [.5, 2],
				waitSeconds: [0, 0],
				transitionSeconds: [0, .75],
				angleDegree: [-20, 160],
				angleOffsetDegree: [0, 0],
				pitchDegree: [20, 0],
				pitchOffsetDegree: [0, 0],
				rollDegree: [0, 0],
				distanceMeters: [0, .15],
				heightPercent: [0, 0],
				vertCtrRatio: [1, .5]
			}
		}, {
			templateId: "camera_swift",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER"],
				easeInSpeed: [0],
				eastOutSpeed: [1],
				durationSeconds: [5],
				waitSeconds: [.45],
				transitionSeconds: [.3],
				angleDegree: [160],
				angleOffsetDegree: [0],
				pitchDegree: [20],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [2.5],
				heightPercent: [0],
				vertCtrRatio: [.5]
			}
		}, {
			templateId: "camera_tackle",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER", "CAM_TARGET_DEFENDER_EDGE"],
				easeInSpeed: [.5, .5],
				eastOutSpeed: [.5, .5],
				durationSeconds: [.75, 1],
				waitSeconds: [.2, 0],
				transitionSeconds: [.5, .2],
				angleDegree: [-20, 160],
				angleOffsetDegree: [0, 0],
				pitchDegree: [20, 5],
				pitchOffsetDegree: [0, 0],
				rollDegree: [0, 0],
				distanceMeters: [0, .25],
				heightPercent: [0, 0],
				vertCtrRatio: [1, .5]
			}
		}, {
			templateId: "camera_takedown",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER", "CAM_TARGET_DEFENDER"],
				easeInSpeed: [0, .5],
				eastOutSpeed: [0, .5],
				durationSeconds: [5.6, 5],
				waitSeconds: [0, 0],
				transitionSeconds: [.4, .75],
				angleDegree: [-20, 160],
				angleOffsetDegree: [0, 0],
				pitchDegree: [20, 20],
				pitchOffsetDegree: [0, 0],
				rollDegree: [0, 0],
				distanceMeters: [1, 1.5],
				heightPercent: [0, 0],
				vertCtrRatio: [1, 1]
			}
		}, {
			templateId: "camera_thunder",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER", "CAM_TARGET_DEFENDER", "CAM_TARGET_DEFENDER"],
				easeInSpeed: [.5, 0, .5],
				eastOutSpeed: [.5, 0, .5],
				durationSeconds: [.3, 1.9, 1.86],
				waitSeconds: [0, 0, 0],
				transitionSeconds: [.25, .25, .1],
				angleDegree: [175, 175, 170],
				angleOffsetDegree: [0, 0, 0],
				pitchDegree: [10, 10, 20],
				pitchOffsetDegree: [0, -35, 0],
				rollDegree: [0, 0, 0],
				distanceMeters: [3, 4, 6],
				heightPercent: [0, 0, 0],
				vertCtrRatio: [.5, .5, 1]
			}
		}, {
			templateId: "camera_thunder_leader_player_left_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER", "CAM_TARGET_DEFENDER"],
				easeInSpeed: [1, 1],
				eastOutSpeed: [0, 1],
				durationSeconds: [2.15, 1.86],
				waitSeconds: [.25, 0],
				transitionSeconds: [.25, .1],
				angleDegree: [-160, 30],
				angleOffsetDegree: [0, 0],
				pitchDegree: [0, 20],
				pitchOffsetDegree: [-35, 0],
				rollDegree: [0, 0],
				distanceMeters: [4, 6],
				heightPercent: [0, 0],
				vertCtrRatio: [.5, 1]
			}
		}, {
			templateId: "camera_thunder_leader_player_right_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER", "CAM_TARGET_DEFENDER"],
				easeInSpeed: [1, 1],
				eastOutSpeed: [0, 1],
				durationSeconds: [2.15, 1.86],
				waitSeconds: [.25, 0],
				transitionSeconds: [.25, .1],
				angleDegree: [160, -25],
				angleOffsetDegree: [0, 0],
				pitchDegree: [0, 20],
				pitchOffsetDegree: [-35, 0],
				rollDegree: [0, 0],
				distanceMeters: [4, 6],
				heightPercent: [0, 0],
				vertCtrRatio: [.5, 1]
			}
		}, {
			templateId: "camera_thunder_player_left_leader_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER", "CAM_TARGET_DEFENDER"],
				easeInSpeed: [1, 1],
				eastOutSpeed: [0, 1],
				durationSeconds: [2.15, 1.86],
				waitSeconds: [.25, 0],
				transitionSeconds: [.25, .1],
				angleDegree: [-155, -155],
				angleOffsetDegree: [0, 0],
				pitchDegree: [0, 20],
				pitchOffsetDegree: [-30, 0],
				rollDegree: [0, 0],
				distanceMeters: [2, 4],
				heightPercent: [0, 0],
				vertCtrRatio: [.5, 1]
			}
		}, {
			templateId: "camera_thunder_player_right_leader_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER", "CAM_TARGET_DEFENDER"],
				easeInSpeed: [1, 1],
				eastOutSpeed: [0, 1],
				durationSeconds: [2.15, 1.86],
				waitSeconds: [.25, 0],
				transitionSeconds: [.25, .1],
				angleDegree: [155, 155],
				angleOffsetDegree: [0, 0],
				pitchDegree: [0, 20],
				pitchOffsetDegree: [-30, 0],
				rollDegree: [0, 0],
				distanceMeters: [2, 4],
				heightPercent: [0, 0],
				vertCtrRatio: [.5, 1]
			}
		}, {
			templateId: "camera_thunderbolt",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER_EDGE"],
				easeInSpeed: [.5],
				eastOutSpeed: [.5],
				durationSeconds: [5],
				waitSeconds: [.2],
				transitionSeconds: [.5],
				angleDegree: [135],
				angleOffsetDegree: [5],
				pitchDegree: [5],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [3],
				heightPercent: [0],
				vertCtrRatio: [1]
			}
		}, {
			templateId: "camera_thunderboltenter",
			camera: {
				interpolation: ["CAM_INTERP_CUT"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER"],
				easeInSpeed: [.5],
				eastOutSpeed: [.5],
				durationSeconds: [5],
				waitSeconds: [0],
				transitionSeconds: [.6],
				angleDegree: [-30],
				angleOffsetDegree: [-5],
				pitchDegree: [15],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [0],
				heightPercent: [0],
				vertCtrRatio: [1]
			}
		}, {
			templateId: "camera_thunderpunch_hit",
			camera: {
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER_EDGE", "CAM_TARGET_DEFENDER"],
				easeInSpeed: [0, 1],
				eastOutSpeed: [0, 0],
				durationSeconds: [0, 5],
				waitSeconds: [0, .6],
				transitionSeconds: [0, .3],
				angleDegree: [-20, 160],
				angleOffsetDegree: [0, 0],
				pitchDegree: [10, 10],
				pitchOffsetDegree: [0, 0],
				rollDegree: [0, 0],
				distanceMeters: [.5, 2],
				heightPercent: [-.25, 0],
				vertCtrRatio: [.5, .5]
			}
		}, {
			templateId: "camera_twister",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER"],
				easeInSpeed: [0],
				eastOutSpeed: [0],
				durationSeconds: [10],
				waitSeconds: [0],
				transitionSeconds: [.3],
				angleDegree: [165],
				angleOffsetDegree: [0],
				pitchDegree: [10],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [3],
				heightPercent: [0],
				vertCtrRatio: [.8]
			}
		}, {
			templateId: "camera_vicegrip",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER_GROUND"],
				easeInSpeed: [0],
				eastOutSpeed: [0],
				durationSeconds: [10],
				waitSeconds: [0],
				transitionSeconds: [.2],
				angleDegree: [160],
				angleOffsetDegree: [0],
				pitchDegree: [20],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [3],
				heightPercent: [0],
				vertCtrRatio: [.5]
			}
		}, {
			templateId: "camera_watergun",
			camera: {
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_LINEAR", "CAM_INTERP_CUT"],
				targetType: ["CAM_TARGET_ATTACKER", "CAM_TARGET_ATTACKER_EDGE", "CAM_TARGET_DEFENDER"],
				easeInSpeed: [.5, .5, .5],
				eastOutSpeed: [.5, .5, .5],
				durationSeconds: [0, 1, 5],
				waitSeconds: [0, 0, 0],
				transitionSeconds: [0, 1, 0],
				angleDegree: [-160, -170, 160],
				angleOffsetDegree: [0, 0, 0],
				pitchDegree: [20, 10, 0],
				pitchOffsetDegree: [0, 0, 0],
				rollDegree: [0, 0, 0],
				distanceMeters: [.4, .5, 1.4],
				heightPercent: [0, 0, 0],
				vertCtrRatio: [.5, .5, .75]
			}
		}, {
			templateId: "camera_waterpulse",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER"],
				easeInSpeed: [.5],
				eastOutSpeed: [.5],
				durationSeconds: [10],
				waitSeconds: [0],
				transitionSeconds: [.75],
				angleDegree: [150],
				angleOffsetDegree: [0],
				pitchDegree: [10],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [3],
				heightPercent: [0],
				vertCtrRatio: [.75]
			}
		}, {
			templateId: "camera_waterpulseenter",
			camera: {
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER", "CAM_TARGET_ATTACKER_DEFENDER"],
				easeInSpeed: [.5, .5],
				eastOutSpeed: [.5, .5],
				durationSeconds: [.7, 10],
				waitSeconds: [0, 0],
				transitionSeconds: [.4, 1],
				angleDegree: [-20, -25],
				angleOffsetDegree: [0, 0],
				pitchDegree: [20, 35],
				pitchOffsetDegree: [0, 0],
				rollDegree: [0, 0],
				distanceMeters: [0, 0],
				heightPercent: [0, 0],
				vertCtrRatio: [1, .5]
			}
		}, {
			templateId: "camera_waterpulseenter_leader_player_left_",
			camera: {
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER", "CAM_TARGET_ATTACKER_DEFENDER"],
				easeInSpeed: [0, .5],
				eastOutSpeed: [.5, 0],
				durationSeconds: [.7, 5],
				waitSeconds: [0, 0],
				transitionSeconds: [.4, .38],
				angleDegree: [-20, -25],
				angleOffsetDegree: [0, 0],
				pitchDegree: [20, 35],
				pitchOffsetDegree: [0, 0],
				rollDegree: [0, 0],
				distanceMeters: [0, 0],
				heightPercent: [0, 0],
				vertCtrRatio: [1, .5]
			}
		}, {
			templateId: "camera_waterpulseenter_leader_player_right_",
			camera: {
				interpolation: ["CAM_INTERP_CUT", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER", "CAM_TARGET_ATTACKER_DEFENDER"],
				easeInSpeed: [0, .5],
				eastOutSpeed: [.5, 0],
				durationSeconds: [.7, 5],
				waitSeconds: [0, 0],
				transitionSeconds: [.4, .38],
				angleDegree: [20, 25],
				angleOffsetDegree: [0, 0],
				pitchDegree: [20, 35],
				pitchOffsetDegree: [0, 0],
				rollDegree: [0, 0],
				distanceMeters: [0, 0],
				heightPercent: [0, 0],
				vertCtrRatio: [1, .5]
			}
		}, {
			templateId: "camera_waterpulseenter_player_left_leader_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER", "CAM_TARGET_ATTACKER_DEFENDER"],
				easeInSpeed: [0, .5],
				eastOutSpeed: [.5, 0],
				durationSeconds: [.7, 5],
				waitSeconds: [0, 0],
				transitionSeconds: [.4, .38],
				angleDegree: [20, 25],
				angleOffsetDegree: [0, 0],
				pitchDegree: [20, 35],
				pitchOffsetDegree: [0, 0],
				rollDegree: [0, 0],
				distanceMeters: [0, 0],
				heightPercent: [0, 0],
				vertCtrRatio: [1, .5]
			}
		}, {
			templateId: "camera_waterpulseenter_player_right_leader_",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR", "CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_ATTACKER_DEFENDER", "CAM_TARGET_ATTACKER_DEFENDER"],
				easeInSpeed: [0, .5],
				eastOutSpeed: [.5, 0],
				durationSeconds: [.7, 5],
				waitSeconds: [0, 0],
				transitionSeconds: [.4, .38],
				angleDegree: [-20, -25],
				angleOffsetDegree: [0, 0],
				pitchDegree: [20, 35],
				pitchOffsetDegree: [0, 0],
				rollDegree: [0, 0],
				distanceMeters: [0, 0],
				heightPercent: [0, 0],
				vertCtrRatio: [1, .5]
			}
		}, {
			templateId: "camera_xscissor",
			camera: {
				interpolation: ["CAM_INTERP_LINEAR"],
				targetType: ["CAM_TARGET_DEFENDER_GROUND"],
				easeInSpeed: [.5],
				eastOutSpeed: [.5],
				durationSeconds: [10],
				waitSeconds: [0],
				transitionSeconds: [.25],
				angleDegree: [170],
				angleOffsetDegree: [0],
				pitchDegree: [10],
				pitchOffsetDegree: [0],
				rollDegree: [0],
				distanceMeters: [2],
				heightPercent: [0],
				vertCtrRatio: [1]
			}
		}, {
			templateId: "incenseordinary.1",
			iapItemDisplay: {
				sku: "incenseordinary.1",
				category: "IAP_CATEGORY_ITEMS",
				sortOrder: 7,
				itemIds: ["ITEM_INCENSE_ORDINARY"],
				counts: [1]
			}
		}, {
			templateId: "incenseordinary.4",
			iapItemDisplay: {
				sku: "incenseordinary.4",
				category: "IAP_CATEGORY_ITEMS",
				sortOrder: 8,
				itemIds: ["ITEM_INCENSE_ORDINARY"],
				counts: [4]
			}
		}, {
			templateId: "incenseordinary.8",
			iapItemDisplay: {
				sku: "incenseordinary.8",
				category: "IAP_CATEGORY_ITEMS",
				sortOrder: 9,
				itemIds: ["ITEM_INCENSE_ORDINARY"],
				counts: [8]
			}
		}, {
			templateId: "incubatorbasic.1",
			iapItemDisplay: {
				sku: "incubatorbasic.1",
				category: "IAP_CATEGORY_ITEMS",
				sortOrder: 3,
				itemIds: ["ITEM_INCUBATOR_BASIC"],
				counts: [1]
			}
		}, {
			templateId: "incubatorbasic.100",
			iapItemDisplay: {
				sku: "incubatorbasic.100",
				category: "IAP_CATEGORY_ITEMS",
				sortOrder: 10,
				itemIds: ["ITEM_INCUBATOR_BASIC"],
				counts: [100]
			}
		}, {
			templateId: "itemstorageupgrade.1",
			iapItemDisplay: {
				sku: "itemstorageupgrade.1",
				category: "IAP_CATEGORY_UPGRADES",
				sortOrder: 2,
				itemIds: ["ITEM_ITEM_STORAGE_UPGRADE"],
				counts: [1]
			}
		}, {
			templateId: "luckyegg.1",
			iapItemDisplay: {
				sku: "luckyegg.1",
				category: "IAP_CATEGORY_ITEMS",
				sortOrder: 4,
				itemIds: ["ITEM_LUCKY_EGG"],
				counts: [1]
			}
		}, {
			templateId: "luckyegg.20",
			iapItemDisplay: {
				sku: "luckyegg.20",
				category: "IAP_CATEGORY_ITEMS",
				sortOrder: 6,
				itemIds: ["ITEM_LUCKY_EGG"],
				counts: [20]
			}
		}, {
			templateId: "luckyegg.5",
			iapItemDisplay: {
				sku: "luckyegg.5",
				category: "IAP_CATEGORY_ITEMS",
				sortOrder: 5,
				itemIds: ["ITEM_LUCKY_EGG"],
				counts: [5]
			}
		}, {
			templateId: "pokeball.100",
			iapItemDisplay: {
				sku: "pokeball.100",
				category: "IAP_CATEGORY_ITEMS",
				sortOrder: 2,
				itemIds: ["ITEM_POKE_BALL"],
				counts: [100]
			}
		}, {
			templateId: "pokeball.20",
			iapItemDisplay: {
				sku: "pokeball.20",
				category: "IAP_CATEGORY_ITEMS",
				sortOrder: 1,
				itemIds: ["ITEM_POKE_BALL"],
				counts: [20]
			}
		}, {
			templateId: "pokecoin.100",
			iapItemDisplay: {
				sku: "pokecoin.100",
				category: "IAP_CATEGORY_POKECOINS",
				sortOrder: 1
			}
		}, {
			templateId: "pokecoin.1000",
			iapItemDisplay: {
				sku: "pokecoin.1000",
				category: "IAP_CATEGORY_POKECOINS",
				sortOrder: 1
			}
		}, {
			templateId: "pokecoin.1200",
			iapItemDisplay: {
				sku: "pokecoin.1200",
				category: "IAP_CATEGORY_POKECOINS",
				sortOrder: 3
			}
		}, {
			templateId: "pokecoin.14500",
			iapItemDisplay: {
				sku: "pokecoin.14500",
				category: "IAP_CATEGORY_POKECOINS",
				sortOrder: 6
			}
		}, {
			templateId: "pokecoin.2500",
			iapItemDisplay: {
				sku: "pokecoin.2500",
				category: "IAP_CATEGORY_POKECOINS",
				sortOrder: 4
			}
		}, {
			templateId: "pokecoin.5200",
			iapItemDisplay: {
				sku: "pokecoin.5200",
				category: "IAP_CATEGORY_POKECOINS",
				sortOrder: 5
			}
		}, {
			templateId: "pokecoin.550",
			iapItemDisplay: {
				sku: "pokecoin.550",
				category: "IAP_CATEGORY_POKECOINS",
				sortOrder: 2
			}
		}, {
			templateId: "pokemonstorageupgrade.1",
			iapItemDisplay: {
				sku: "pokemonstorageupgrade.1",
				category: "IAP_CATEGORY_UPGRADES",
				sortOrder: 1,
				itemIds: ["ITEM_POKEMON_STORAGE_UPGRADE"],
				counts: [1]
			}
		}, {
			templateId: "sequence_acid_fast",
			moveSequenceSettings: {
				sequence: ["anim attacker atk-move", "f2fvfx attacker acid_fast", "sfx attacker 051-0_acid", "wait 0.15", "vfx defender acid_fast_hit", "anim defender damageS01", "wait 0.35", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_aerial_ace",
			moveSequenceSettings: {
				sequence: ["anim attacker atk-move", "wait 0.733", "cam AerialAce_ATKR_DFND_", "background attacker 0.5/0.75/1.0/0.0", "vfx camera camera_diagonal_vignette", "f2fvfx defender aerial_ace", "sfx attacker 332-0_aerial_ace", "wait 0.6", "anim defender damageS01", "wait 0.4", "anim defender damageS01", "reset_background attacker 0.5/0.75/1.0/0.0", "wait 0.25", "cam CutFromDefender_ATKR_DFND_", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_air_cutter",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_3s", "cam DefaultAttack_ATKR_DFND_", "wait 0.25", "background attacker 0.0/0.25/0.5/0.5", "anim attacker atk-move", "event", "cam AirCutter_ATKR_DFND_", "vfx attacker air_cutter_ground", "sfx attacker 314-0_air_cutter", "wait 0.5", "f2fvfx attacker air_cutter_emit", "vfx defender air_cutter_hit", "wait 0.5", "anim defender damageS01", "wait 1.0", "reset_background attacker 0.0/0.25/0.5/0.5", "wait 0.5", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_ancient_power",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_4s", "cam EnterBehindAttackerFarAway_ATKR_DFND_", "anim attacker atk-move", "background attacker 0.5/0.2/0.5/0.25", "event", "cam AncientPower_ATKR_DFND_", "f2fvfx attacker ancient_power", "sfx attacker 246-0_ancient_power", "wait 2.1", "vfx defender ancient_power_hit", "wait 0.15", "shake SideToSide/0.45", "anim defender damageS01", "reset_background attacker 0.5/0.2/0.5/0.25", "wait 1.0", "cam CutFromDefender_ATKR_DFND_", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_aqua_jet",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_3s", "cam AquaJetEnter_ATKR_DFND_", "anim attacker atk-move", "event", "vfx attacker aqua_jet_emit", "vfx defender aqua_jet_hit", "sfx attacker 453-0_aqua_jet", "cam AquaJet_ATKR_DFND_", "wait 0.2", "hide attacker", "wait 0.667", "anim defender damageS01", "wait 0.7", "unhide attacker", "wait 0.8", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_aqua_tail",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_3s", "cam EnterBehindAttacker_ATKR_DFND_", "anim attacker atk-move", "event", "background attacker 0.0/0.25/1.0/0.0", "vfx attacker aqua_tail_origin", "sfx attacker 401-0_aqua_tail", "wait 0.35", "cam PunchHit_ATKR_DFND_", "f2fvfx defender aqua_tail", "wait 0.3", "shake UpDown/0.67/0.5", "anim defender damageS01", "wait 0.5", "reset_background attacker 0.0/0.25/1.0/0.0", "wait 1.0", "cam CutFromDefender_ATKR_DFND_", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_bite_fast",
			moveSequenceSettings: {
				sequence: ["anim attacker atk-move", "f2fvfx defender bite_fast", "wait 0.25", "sfx attacker 044-0_bite", "wait 0.25", "sfx attacker 044-0_bite", "anim defender damageS01", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_blizzard",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_1s", "cam FaceAttackerTilt_ATKR_DFND_", "anim attacker atk-move", "event", "vfx attacker blizzard", "vfx camera blizzard_camera_ice", "sfx attacker 059-0_blizzard", "background attacker 1.0/1.0/1.0/0.25", "wait 1.0", "cam CutToFaceDefender_ATKR_DFND_", "vfx defender blizzard_hit", "wait 1.0", "anim defender damageS01", "reset_background attacker 1.0/1.0/1.0/0.25", "wait 1.0", "cam CutFromDefender_ATKR_DFND_", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_body_slam",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_2s", "cam DefaultAttack_ATKR_DFND_", "anim attacker atk-move", "sfx attacker 034-0_body_slam", "sink attacker -4/12", "wait 0.5", "cam PanToDefender_ATKR_DFND_", "anim attacker atk-move", "wait 0.2", "vfx camera camera_speed_lines_short_lower_center", "vfx defender body_slam_hit", "squish defender 0.5", "anim defender damageS01", "shake UpDown/1.0/1.0/1.0", "wait 0.5", "sink attacker 0.0/8", "anim defender damageS01", "wait 1.0", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_bone_club",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_2s", "cam DefaultAttack_ATKR_DFND_", "anim attacker atk-move", "event", "cam PanToDefender_ATKR_DFND_", "f2fvfx defender bone_club", "sfx attacker 125-0_bone_club", "wait 0.5", "shake UpDown/0.5/1.0", "anim defender damageS01", "sfx attacker 033-0_tackle", "wait 1.0", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_brick_break",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_2s", "cam DefaultAttack_ATKR_DFND_", "anim attacker atk-move", "event", "cam BrickBreak_ATKR_DFND_", "f2fvfx defender brick_break", "sfx attacker 280-0_brick_break", "wait 0.35", "anim defender damageS01", "shake UpDown/0.5/0.5/2.0", "wait 0.5", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_brine",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_3s", "cam DefaultAttack_ATKR_DFND_", "anim attacker atk-move", "event", "f2fvfx attacker brine", "sfx attacker 362-0_brine", "cam FollowArcingProjectile_ATKR_DFND_", "wait 0.75", "vfx defender brine_hit", "shake UpDown/0.5/1.0", "anim defender damageS01", "wait 1.0", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_bubble_beam",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_3s", "cam EnterFaceAttacker_ATKR_DFND_", "anim attacker atk-move", "event", "f2fvfx attacker bubble_beam", "sfx attacker 061-0_bubble_beam", "wait 0.74", "cam CutToFaceDefender_ATKR_DFND_", "shake BubbleBeam", "wait 0.26", "f2fvfx defender bubble_beam_hit", "vfx camera bubble_beam_camera", "wait 0.66", "anim defender damageS01", "wait 0.5", "cam CutFromDefender_ATKR_DFND_", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_bubble_fast",
			moveSequenceSettings: {
				sequence: ["anim attacker atk-move", "f2fvfx attacker bubble_fast_emit", "wait 0.65", "vfx defender bubble_fast_hit", "anim defender damageS01", "sfx attacker 061-0_bubble_beam", "wait 0.25", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_bug_bite_fast",
			moveSequenceSettings: {
				sequence: ["anim attacker atk-move", "f2fvfx defender bug_bite_fast", "sfx attacker 450-0_bug_bite", "wait 0.15", "anim defender damageS01", "wait 0.35", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_bug_buzz",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_4s", "cam DefaultAttack_ATKR_DFND_", "anim attacker atk-move", "event", "background attacker 0.0/0.0/0.0/0.5", "vfx attacker bug_buzz_waist:Origin/Waist", "sfx attacker 405-0_bug_buzz", "wait 0.25", "f2fvfx attacker bug_buzz", "wait 0.72", "cam EnterFaceDefender_ATKR_DFND_", "wait 0.33", "anim defender damageS01", "wait 1.0", "reset_background attacker 0.0/0.0/0.0/0.5", "wait 1.2", "cam CutFromDefender_ATKR_DFND_", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_bulldoze",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_5s", "cam Overhead_ATKR_DFND_", "anim attacker atk-move", "wait 0.75", "background attacker 0.5/0.4/0.2/0.0", "shake UpDown/2.4/1.5", "vfx attacker bulldoze", "sfx attacker 523-0_bulldoze", "wait 1.0", "anim defender damageS01", "wait 0.5", "reset_background attacker 0.5/0.4/0.2/0.0", "wait 1.8", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_bullet_punch_fast",
			moveSequenceSettings: {
				sequence: ["anim attacker atk-move", "wait 0.25", "anim defender damageS01", "f2fvfx defender bullet_punch_fast", "sfx attacker 418-0_bullet_punch", "wait 0.25", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_confusion_fast",
			moveSequenceSettings: {
				sequence: ["anim attacker atk-move", "f2fvfx attacker confusion_fast_emit", "wait 0.5", "vfx defender confusion_fast_hit", "anim defender damageS01", "sfx attacker 466-0_ominous_wind", "wait 0.25", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_cross_chop",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_3s", "cam EnterFaceDefender_ATKR_DFND_", "anim attacker atk-move", "event", "f2fvfx defender cross_chop", "sfx attacker 238-0_cross_chop", "wait 0.25", "shake Medium/0.5/0.5/0.5", "anim defender damageS01", "wait 1.0", "cam CutFromDefender_ATKR_DFND_", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_cross_poison",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_2s", "cam DefaultAttack_ATKR_DFND_", "anim attacker atk-move", "event", "wait 0.25", "f2fvfx defender cross_poison", "sfx attacker 440-0_cross_poison", "wait 0.25", "shake SideToSide/0.2/0.5", "anim defender damageS01", "silhouette defender 0.6/0.0/1.0/0.0", "wait 0.25", "reset_silhouette defender 0.6/0.0/1.0/0.0", "wait 0.75", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_cut_fast",
			moveSequenceSettings: {
				sequence: ["anim attacker atk-move", "sfx attacker 015-0_cut", "wait 0.15", "f2fvfx defender cut_fast", "wait 0.15", "anim defender damageS01", "wait 0.2", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_dark_pulse",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_4s", "cam EnterFaceAttacker_ATKR_DFND_", "background attacker 0.5/0.0/0.5/0.5", "wait 0.25", "vfx attacker dark_pulse_waist:Origin/Waist", "vfx attacker dark_pulse_origin", "sfx attacker 399-0_dark_pulse", "wait 0.1", "anim attacker atk-move", "wait 0.66", "cam PanToDefender_ATKR_DFND_", "f2fvfx attacker dark_pulse", "wait 0.2", "f2fvfx defender dark_pulse_hit", "anim defender damageS01", "wait 0.6", "anim defender damageS01", "wait 0.6", "reset_background attacker 0.5/0.0/0.5/0.5", "wait 1.0", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_dazzling_gleam",
			moveSequenceSettings: {
				sequence: ["anim attacker atk-move", "wait 0.6", "cam EnterFaceAttacker_ATKR_DFND_", "wait 0.5", "background attacker 1.0/1.0/1.0/0.0", "silhouette attacker 1.0/1.0/1.0/0.1", "f2fvfx attacker dazzling_gleam_emit", "vfx defender dazzling_gleam_hit", "vfx camera dazzling_gleam_camera", "sfx attacker 605-0_dazzling_gleam", "wait 0.5", "cam DefaultAttack_ATKR_DFND_", "reset_silhouette attacker 1.0/1.0/1.0/0.1", "wait 1.5", "anim defender damageS01", "wait 1.0", "reset_background attacker 0.2/0.2/0.2/0.0", "wait 0.5", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_default",
			moveSequenceSettings: {
				sequence: ["anim attacker atk-move", "wait 1.0", "anim defender damageS01", "sys ui-sync", "wait 1.0", "sys complete"]
			}
		}, {
			templateId: "sequence_dig",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_5s", "cam DefaultAttack_ATKR_DFND_", "anim attacker atk-move", "wait 1.0", "dscvfx attacker dig_burrow", "sfx attacker 091-0_dig", "sink attacker 1.5", "shake Medium/1.15/0.25", "wait 1.5", "dscvfx attacker dig_attack", "sfx attacker 091-1_dig", "wait 1.0", "anim defender damageS01", "dscvfx defender dig_hit_ground", "sink attacker 0.0", "wait 1.0", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_disarming_voice",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_5s", "cam EnterFaceAttacker_ATKR_DFND_", "background attacker 1.0/0.5/0.5/0.5", "wait 0.6", "anim attacker atk-move", "event", "f2fvfx attacker disarming_voice", "sfx attacker 574-0_disarming_voice", "wait 0.5", "cam PanToFaceDefender_ATKR_DFND_", "wait 1.5", "anim defender damageS01", "wait 0.5", "reset_background attacker 1.0/0.5/0.5/0.5", "wait 1.0", "cam CutFromDefender_ATKR_DFND_", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_discharge",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_1s", "cam EnterFaceAttacker_ATKR_DFND_", "background attacker 1.0/0.9/0.6/0.5", "anim attacker atk-move", "event", "vfx attacker discharge_waist:Origin/Waist", "sfx attacker 435-0_discharge", "wait 0.5", "cam PanToDefender_ATKR_DFND_", "wait 0.5", "shake SideToSide/0.2/0.25/0.75", "anim defender damageS01", "reset_silhouette defender 1.0/1.0/1.0/0.0", "vfx defender discharge_hit_waist:Origin/Waist", "vfx camera camera_electric", "reset_background attacker 1.0/0.9/0.6/0.5", "wait 1.0", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_dragon_breath_fast",
			moveSequenceSettings: {
				sequence: ["anim attacker atk-move", "f2fvfx attacker dragon_breath_fast", "sfx attacker 225-0_dragon_breath", "shake DragonBreath", "wait 0.25", "anim defender damageS01", "wait 0.25", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_dragon_claw",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_2s", "cam DefaultAttack_ATKR_DFND_", "vfx attacker dragon_claw_charge", "sfx attacker 337-0_dragon_claw", "wait 0.25", "background attacker 0.0/0.0/0.0/0.5", "anim attacker atk-move", "event", "f2fvfx defender dragon_claw", "wait 0.15", "shake SideToSide/0.333/1.5", "anim defender damageS01", "reset_background attacker 0.0/0.0/0.0/0.5", "wait 0.5", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_dragon_pulse",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_4s", "cam EnterFaceAttacker_ATKR_DFND_", "background attacker 0.0/0.0/0.0/0.5", "f2fvfx attacker dragon_pulse_charge_up", "sfx attacker 406-0_dragon_pulse", "wait 0.84", "shake SideToSide/0.66/0.5", "anim attacker atk-move", "wait 0.16", "cam DefaultAttack_ATKR_DFND_", "wait 0.25", "vfx attacker dragon_pulse_ground", "f2fvfx attacker dragon_pulse", "wait 0.25", "f2fvfx defender dragon_pulse_hit", "shake UpDown/1.66/1.5", "wait 0.25", "anim defender damageS01", "wait 0.33", "anim defender damageS01", "wait 0.33", "anim defender damageS01", "wait 0.5", "reset_background attacker 0.0/0.0/0.0/0.5", "wait 0.5", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_draining_kiss",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_1s", "cam DefaultAttack_ATKR_DFND_", "anim attacker atk-move", "event", "f2fvfx defender draining_kiss", "sfx attacker 577-0_draining_kiss", "anim defender damageS01", "wait 0.3", "f2fvfx attacker draining_kiss_projectile", "wait 0.7", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_drill_peck",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_2s", "cam EnterBehindAttacker_ATKR_DFND_", "anim attacker atk-move", "event", "cam PunchHit_ATKR_DFND_", "vfx attacker speed_lines_short", "wait 0.15", "f2fvfx defender drill_peck", "sfx attacker 065-0_drill_peck", "anim defender damageS01", "wait 0.33", "anim defender damageS01", "wait 0.33", "anim defender damageS01", "wait 0.5", "cam CutFromDefender_ATKR_DFND_", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_drill_run",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_4s", "cam DrillRun_ATKR_DFND_", "background attacker 0.5/0.4/0.2/0.5", "anim attacker atk-move", "spin attacker 0.7", "sfx attacker 529-0_drill_run", "wait 0.5", "scale attacker 0.0001", "vfx attacker drill_run_emit", "vfx defender drill_run_hit", "wait 0.833", "shake DrillRun", "anim defender damageS01", "reset_background attacker 1.0/1.0/0.75/0.0", "wait 1.0", "scale attacker 1.0", "wait 1.0", "cam CutFromDefender_ATKR_DFND_", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_earthquake",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_4s", "cam Overhead_ATKR_DFND_", "anim attacker atk-move", "event", "background attacker 0.2/0.15/0.1/0.0", "vfx attacker earthquake", "sfx attacker 089-0_earthquake", "wait 0.5", "shake Earthquake", "wait 1.0", "anim defender damageS01", "wait 0.25", "reset_background attacker 0.2/0.15/0.1/0.0", "sys ui-sync", "wait 1.5", "sys complete"]
			}
		}, {
			templateId: "sequence_ember_fast",
			moveSequenceSettings: {
				sequence: ["anim attacker atk-move", "sfx attacker 052-0_ember", "wait 0.1", "f2fvfx attacker ember_fast", "wait 0.4", "f2fvfx defender ember_fast_hit", "anim defender damageS01", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_feint_attack_fast",
			moveSequenceSettings: {
				sequence: ["anim attacker atk-move", "f2fvfx attacker tackle_fast", "wait 0.65", "vfx defender feint_attack_fast", "anim defender damageS01", "sfx attacker 399-0_dark_pulse", "wait 0.25", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_fire_blast",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_4s", "cam EnterFaceAttacker_ATKR_DFND_", "sfx attacker 126-0_fire_blast", "background attacker 0.0/0.0/0.0/0.0", "wait 0.5", "anim attacker atk-move", "event", "cam FireBlast_ATKR_DFND_", "f2fvfx attacker fire_blast", "wait 0.15", "reset_background attacker 1.0/0.9/0.8/0.0", "wait 0.15", "background attacker 1.0/0.0/0.0/0.5", "wait 1.5", "shake UpDown/1.25/0.5", "vfx camera camera_speed_lines_short", "wait 0.2", "anim defender damageS01", "vfx defender flamethrower_hit_waist:Origin/Waist", "shake UpDownDecay/0.33", "reset_background attacker 1.0/0.0/0.0/0.5", "wait 1.0", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_fire_fang_fast",
			moveSequenceSettings: {
				sequence: ["anim attacker atk-move", "f2fvfx attacker tackle_fast", "wait 0.25", "vfx defender fire_fang_fast", "anim defender damageS01", "sfx attacker 158-0_hyper_fang", "wait 0.25", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_fire_punch",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_1s", "cam EnterBehindAttacker_ATKR_DFND_", "background attacker 0.0/0.0/0.0/0.5", "anim attacker atk-move", "event", "sfx attacker 007-0_fire_punch", "wait 0.15", "f2fvfx defender fire_punch", "wait 0.45", "cam PunchHit_ATKR_DFND_", "wait 0.15", "anim defender damageS01", "shake SideToSideDecay/0.33", "vfx camera fire_punch_camera_flames", "reset_background attacker 1.0/0.25/0.0/0.5", "wait 1.5", "cam CutFromDefender_ATKR_DFND_", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_flame_burst",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_3s", "cam DefaultAttack_ATKR_DFND_", "anim attacker atk-move", "event", "f2fvfx attacker flame_burst", "sfx attacker 481-0_flame_burst", "wait 0.27", "cam PanToDefender_ATKR_DFND_", "wait 0.23", "shake UpDownDecay/1.0/0.5", "vfx defender flamethrower_hit_waist:Origin/Waist", "vfx defender flame_burst_hit", "wait 0.1", "anim defender damageS01", "wait 1.4", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_flame_charge",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_4s", "cam FlameCharge_ATKR_DFND_", "vfx attacker flame_charge", "wait 0.15", "sfx attacker 488-0_flame_charge", "wait 0.75", "anim attacker atk-move", "wait 0.25", "f2fvfx attacker flame_charge_projectile", "wait 0.15", "hide attacker", "wait 0.95", "anim defender damageS01", "vfx defender flamethrower_hit_waist:Origin/Waist", "shake UpDownDecay/0.33/0.5/0.5", "wait 0.9", "unhide attacker", "wait 0.25", "cam CutFromDefender_ATKR_DFND_", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_flame_wheel",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_4s", "cam EnterFaceAttacker_ATKR_DFND_", "silhouette attacker 0.9/1.0/0.7/0.0", "wait 0.15", "anim attacker atk-move", "event", "vfx attacker flame_wheel", "wait 0.15", "sfx attacker 172-0_flame_wheel", "wait 0.2", "cam PanToDefender_ATKR_DFND_", "wait 1.0", "anim defender damageS01", "vfx defender flamethrower_hit_waist:Origin/Waist", "wait 1.0", "sys ui-sync", "sys complete", "sys complete"]
			}
		}, {
			templateId: "sequence_flamethrower",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_4s", "cam EnterFaceAttacker_ATKR_DFND_", "anim attacker atk-move", "event", "cam DefaultAttack_ATKR_DFND_", "f2fvfx attacker flamethrower", "sfx attacker 053-0_flamethrower", "background attacker 0.6/0.15/0.0/0.8", "wait 0.6", "shake Flamethrower", "wait 0.4", "anim defender damageS01", "vfx defender flamethrower_hit_waist:Origin/Waist", "reset_background attacker 0.6/0.15/0.0/0.8", "wait 1.6", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_flash_cannon",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_3s", "cam EnterFaceAttacker_ATKR_DFND_", "background attacker 0.0/0.0/0.0/0.5", "anim attacker atk-move", "event", "f2fvfx attacker flash_cannon", "sfx attacker 430-0_flash_cannon", "wait 0.9", "f2fvfx defender flash_cannon_hit", "wait 0.1", "cam CutToFaceDefender_ATKR_DFND_", "wait 0.1", "reset_background attacker 1.0/1.0/1.0/0.0", "anim defender damageS01", "shake UpDownDecay/0.333/0.5", "wait 0.9", "anim defender damageS01", "wait 1.0", "cam CutFromDefender_ATKR_DFND_", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_frost_breath_fast",
			moveSequenceSettings: {
				sequence: ["anim attacker atk-move", "sfx attacker 524-0_frost_breath", "wait 0.15", "f2fvfx attacker frost_breath_fast", "wait 0.25", "f2fvfx defender frost_breath_fast_hit", "vfx defender frost_breath_fast_hit", "wait 0.1", "anim defender damageS01", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_fury_cutter_fast",
			moveSequenceSettings: {
				sequence: ["anim attacker atk-move", "f2fvfx defender fury_cutter_fast", "sfx attacker 210-0_fury_cutter", "wait 0.15", "anim defender damageS01", "wait 0.35", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_giga_drain",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_4s", "cam EnterFaceDefender_ATKR_DFND_", "background attacker 1.0/0.95/0.8/0.5", "wait 0.25", "f2fvfx attacker giga_drain", "vfx defender giga_drain_hit", "vfx defender giga_drain_hit_waist:Origin/Waist", "sfx attacker 030-0_horn_attack", "wait 0.15", "anim defender damageS01", "wait 0.5", "cam PanToAttacker_ATKR_DFND_", "sfx attacker 202-0_giga_drain", "wait 0.55", "anim attacker atk-move", "wait 0.3", "vfx attacker giga_drain_waist:Origin/Waist", "wait 0.5", "reset_background attacker 1.0/0.95/0.8/0.5", "wait 0.5", "cam CutFromDefender_ATKR_DFND_", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_gunk_shot",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_3s", "cam GunkShot_ATKR_DFND_", "wait 0.333", "anim attacker atk-move", "wait 0.15", "f2fvfx attacker gunk_shot", "sfx attacker 441-0_gunk_shot", "wait 0.2", "shake UpDownDecay/0.15/0.5", "wait 0.25", "vfx camera camera_speed_lines_short", "wait 0.65", "anim defender damageS01", "vfx defender gunk_shot_hit", "shake UpDownDecay/0.667", "wait 1.0", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_heart_stamp",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_2s", "cam DefaultAttack_ATKR_DFND_", "anim attacker atk-move", "vfx attacker heart_stamp_waist:Origin/Waist", "sfx attacker 531-0_heart_stamp", "event", "vfx defender heart_stamp", "wait 0.27", "cam PanToDefender_ATKR_DFND_", "wait 0.33", "anim defender damageS01", "wait 1.0", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_heat_wave",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_1s", "cam FaceAttackerTilt_ATKR_DFND_", "anim attacker atk-move", "event", "vfx attacker heat_wave", "sfx attacker 257-0_heat_wave", "background attacker 1.0/0.25/0.0/0.5", "wait 1.0", "cam CutToFaceDefender_ATKR_DFND_", "wait 0.5", "f2fvfx defender heat_wave_hit", "wait 0.25", "anim defender damageS01", "wait 1.0", "reset_background attacker 1.0/0.25/0.0/0.5", "wait 1.0", "cam CutFromDefender_ATKR_DFND_", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_horn_attack",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_2s", "cam DefaultAttack_ATKR_DFND_", "wait 0.4", "anim attacker atk-move", "event", "f2fvfx attacker horn_attack", "sfx attacker 030-0_horn_attack", "wait 0.25", "f2fvfx defender horn_attack_hit", "wait 0.1", "anim defender damageS01", "shake UpDown/0.5/0.25/2.0", "reset_background attacker 1.0/1.0/1.0/0.75", "wait 0.5", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_hurricane",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_3s", "cam EnterBehindAttackerFarAway_ATKR_DFND_", "background attacker 0.0/0.1/0.2/0.5", "anim attacker atk-move", "event", "cam FaceDefenderZoomOut_ATKR_DFND_", "vfx camera hurricane_camera", "vfx defender hurricane", "sfx attacker 542-0_hurricane", "shake SideToSide/1.5/2.0/0.5", "wait 0.33", "spin defender 1.0", "wait 0.33", "anim defender damageS01", "wait 0.33", "anim defender damageS01", "wait 0.33", "anim defender damageS01", "reset_background attacker 0.0/0.1/0.2/0.5", "wait 1.0", "cam CutFromDefender_ATKR_DFND_", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_hydro_pump",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_4s", "cam EnterFaceAttacker_ATKR_DFND_", "wait 0.233", "anim attacker atk-move", "background attacker 0.0/0.2/0.5/0.5", "event", "f2fvfx attacker hydro_pump", "f2fvfx defender hydro_pump_beam_hit", "sfx attacker 056-0_hydro_pump", "wait 0.2", "cam CutToFaceDefender_ATKR_DFND_", "anim defender damageS01", "vfx defender hydro_pump_hit", "shake UpDown/0.85/0.5", "wait 0.2", "vfx camera camera_speed_lines", "wait 0.13", "anim defender damageS01", "wait 0.67", "anim defender damageS01", "vfx camera camera_speed_lines", "shake SideToSide/0.5/0.5", "wait 0.66", "anim defender damageS01", "shake UpDown/0.5/0.5", "reset_background attacker 0.0/0.2/0.5/0.5", "wait 0.83", "cam CutFromDefender_ATKR_DFND_", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_hydro_pump_blastoise",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_4s", "cam EnterFaceAttacker_ATKR_DFND_", "wait 0.233", "anim attacker atk-move", "background attacker 0.0/0.2/0.5/0.5", "event", "vfx attacker hydro_pump_cannon:Origin/Waist/LFeelerA/LFeelerB/LFeelerC", "vfx attacker hydro_pump_cannon:Origin/Waist/RFeelerA/RFeelerB/RFeelerC", "f2fvfx attacker hydro_pump_double_beam", "sfx attacker 056-0_hydro_pump", "wait 0.2", "cam CutToFaceDefender_ATKR_DFND_", "anim defender damageS01", "vfx defender hydro_pump_hit", "shake UpDown/0.85/0.5", "wait 0.2", "vfx camera camera_speed_lines", "wait 0.13", "anim defender damageS01", "wait 0.67", "anim defender damageS01", "vfx camera camera_speed_lines", "shake SideToSide/0.5/0.5", "wait 0.66", "anim defender damageS01", "shake UpDown/0.5/0.5", "reset_background attacker 0.0/0.2/0.5/0.5", "wait 0.83", "cam CutFromDefender_ATKR_DFND_", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_hyper_beam",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_5s", "cam EnterFaceAttacker_ATKR_DFND_", "background attacker 0.0/0.0/0.0/0.25", "wait 0.5", "f2fvfx attacker hyper_beam_charge_up", "sfx attacker 063-0_hyper_beam", "wait 1.0", "reset_background attacker 0.0/0.0/0.0/0.25", "wait 0.33", "anim attacker atk-move", "background attacker 1.0/1.0/1.0/0.0", "wait 0.67", "f2fvfx attacker hyper_beam", "f2fvfx defender hyper_beam_hit", "cam HyperBeam_ATKR_DFND_", "shake UpDown/0.5/0.5/2.0", "wait 0.15", "anim defender damageS01", "reset_background attacker 1.0/1.0/1.0/0.0", "wait 0.33", "anim defender damageS01", "reset_background attacker 1.0/1.0/1.0/0.0", "wait 0.66", "anim defender damageS01", "reset_background attacker 1.0/1.0/1.0/0.0", "shake UpDown/0.5/0.5/2.0", "wait 1.5", "cam CutFromDefender_ATKR_DFND_", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_hyper_fang",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_2s", "cam EnterBehindAttacker_ATKR_DFND_", "background attacker 0.0/0.0/0.0/0.25", "wait 0.25", "sfx attacker 158-0_hyper_fang", "anim attacker atk-move", "vfx attacker speed_lines", "wait 0.75", "cam HyperFang_ATKR_DFND_", "wait 0.1", "f2fvfx defender hyper_fang", "vfx camera camera_speed_lines_short", "wait 0.15", "anim defender damageS01", "wait 1.0", "cam CutFromDefender_ATKR_DFND_", "reset_background attacker 0.0/0.0/0.0/0.25", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_ice_beam",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_4s", "cam EnterFaceAttacker_ATKR_DFND_", "wait 0.35", "f2fvfx attacker ice_beam_charge_up", "background attacker 0.0/0.25/0.25/0.75", "anim attacker atk-move", "event", "cam IceBeam_ATKR_DFND_", "f2fvfx attacker ice_beam", "sfx attacker 058-0_ice_beam", "wait 0.25", "vfx defender ice_beam_hit_waist:Origin/Waist", "wait 0.5", "vfx defender ice_beam_hit", "anim defender damageS01", "wait 0.5", "anim defender damageS01", "wait 0.8", "reset_background attacker 1.0/1.0/1.0/0.0", "wait 1.0", "cam CutFromDefender_ATKR_DFND_", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_ice_punch",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_1s", "cam EnterBehindAttacker_ATKR_DFND_", "background attacker 0.0/0.0/0.0/0.5", "anim attacker atk-move", "event", "sfx attacker 008-0_ice_punch", "wait 0.15", "f2fvfx defender ice_punch", "wait 0.45", "cam Punch_ATKR_DFND_", "wait 0.15", "anim defender damageS01", "vfx camera ice_punch_camera_ice", "vfx defender ice_punch_hit", "reset_background attacker 1.0/1.0/1.0/0.0", "wait 0.75", "cam CutFromDefender_ATKR_DFND_", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_ice_shard_fast",
			moveSequenceSettings: {
				sequence: ["anim attacker atk-move", "sfx attacker 420-0_ice_shard", "wait 0.25", "f2fvfx attacker ice_shard_fast", "vfx defender ice_shard_fast_hit", "wait 0.25", "anim defender damageS01", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_icy_wind",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_3s", "cam DefaultAttack_ATKR_DFND_", "anim attacker atk-move", "event", "f2fvfx attacker icy_wind", "sfx attacker 196-0_icy_wind", "background attacker 1.0/1.0/1.0/0.75", "wait 0.8", "cam PanToDefender_ATKR_DFND_", "wait 0.2", "vfx defender icy_wind_hit", "wait 0.5", "anim defender damageS01", "reset_background attacker 1.0/1.0/1.0/0.75", "wait 1.0", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_iron_head",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_3s", "cam EnterBehindAttacker_ATKR_DFND_", "background attacker 0.0/0.0/0.0/0.75", "anim attacker atk-move", "event", "sfx attacker 442-0_iron_head", "wait 0.4", "cam IronHead_ATKR_DFND_", "f2fvfx defender iron_head", "wait 0.3", "anim defender damageS01", "shake SideToSide/0.4/0.25/2.0", "wait 0.5", "reset_background attacker 0.0/0.0/0.0/0.75", "wait 1.0", "cam CutFromDefender_ATKR_DFND_", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_karate_chop_fast",
			moveSequenceSettings: {
				sequence: ["anim attacker atk-move", "wait 0.25", "f2fvfx defender karate_chop_fast", "sfx attacker 002-0_karate_chop", "wait 0.25", "anim defender damageS01", "shake UpDown/0.5/0.25/1.0", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_leaf_blade",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_3s", "cam EnterBehindAttacker_ATKR_DFND_", "background attacker 0.0/0.0/0.0/0.5", "anim attacker atk-move", "event", "cam PanToFaceDefender_ATKR_DFND_", "sfx attacker 348-0_leaf_blade", "wait 0.25", "f2fvfx defender leaf_blade", "wait 0.33", "shake UpDown/0.25/0.25/0.5", "anim defender damageS01", "wait 0.33", "shake UpDown/0.25/0.25/0.5", "anim defender damageS01", "wait 0.33", "shake SideToSide/0.25/0.25/0.5", "anim defender damageS01", "reset_background attacker 0.0/0.0/0.0/0.5", "wait 0.5", "cam CutFromDefender_ATKR_DFND_", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_lick_fast",
			moveSequenceSettings: {
				sequence: ["anim attacker atk-move", "f2fvfx attacker lick_fast_slobber", "f2fvfx defender lick_fast", "sfx attacker 122-0_lick", "wait 0.1", "anim defender damageS01", "wait 0.4", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_low_kick_fast",
			moveSequenceSettings: {
				sequence: ["anim attacker atk-move", "sfx attacker 067-0_low_kick", "spin attacker 0.25", "wait 0.15", "vfx attacker low_kick_fast", "wait 0.1", "anim defender damageS01", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_low_sweep",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_3s", "anim attacker atk-move", "event", "vfx defender low_sweep", "cam EnterFaceDefenderFromFarAway_ATKR_DFND_", "wait 0.75", "anim defender damageS01", "sfx attacker 490-0_low_sweep", "shake SideToSide/0.25/1.5/0.5", "wait 1.4", "cam CutFromDefender_ATKR_DFND_", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_magnet_bomb",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_3s", "cam DefaultAttack_ATKR_DFND_", "anim attacker atk-move", "f2fvfx attacker magnet_bomb", "sfx attacker 443-0_magnet_bomb", "wait 1.0", "cam PanToDefender_ATKR_DFND_", "wait 0.6", "anim defender damageS01", "shake UpDown/1.0/0.5/2.0", "wait 1.0", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_mega_drain",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_4s", "cam EnterFaceDefender_ATKR_DFND_", "anim attacker atk-move", "event", "vfx defender mega_drain_hit_waist:Origin/Waist", "f2fvfx attacker mega_drain", "sfx attacker 072-0_mega_drain", "wait 0.15", "cam PanToAttacker_ATKR_DFND_", "anim defender damageS01", "wait 0.85", "vfx attacker mega_drain_waist:Origin/Waist", "wait 1.0", "cam CutFromDefender_ATKR_DFND_", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_megahorn",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_4s", "cam EnterFaceAttacker_ATKR_DFND_", "wait 0.4", "cam PanToDefender_ATKR_DFND_", "anim attacker atk-move", "vfx attacker megahorn_charge", "sfx attacker 224-0_megahorn", "event", "f2fvfx attacker megahorn", "wait 0.5", "f2fvfx defender megahorn_hit", "anim defender damageS01", "shake UpDown/0.5/0.5/2.0", "reset_background attacker 1.0/1.0/1.0/0.5", "wait 0.9", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_metal_claw_fast",
			moveSequenceSettings: {
				sequence: ["anim attacker atk-move", "sfx attacker 232-0_metal_claw", "wait 0.25", "f2fvfx defender metal_claw_fast", "wait 0.25", "anim defender damageS01", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_moonblast",
			moveSequenceSettings: {
				sequence: ["background attacker 0.1/0.0/0.15/0.2", "anim attacker atk-move", "event", "cam Moonblast_ATKR_DFND_", "vfx attacker moonblast", "sfx attacker 585-0_moonblast", "wait 0.33", "anim attacker atk-move", "wait 0.66", "vfx camera camera_horizontal_vignette_2s", "f2fvfx attacker moonblast_projectile_emit", "vfx defender moonblast_projectile_hit", "wait 1.5", "anim defender damageS01", "wait 0.5", "reset_background attacker 0.1/0.0/0.15/0.2", "wait 0.5", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_mud_bomb",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_3s", "cam DefaultAttack_ATKR_DFND_", "anim attacker atk-move", "event", "vfx attacker mud_bomb", "sfx attacker 426-0_mud_bomb", "wait 0.2", "cam FollowArcingProjectile_ATKR_DFND_", "wait 0.8", "shake UpDown/0.5/0.25/2.0", "anim defender damageS01", "vfx defender mud_bomb_hit", "wait 1.0", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_mud_shot_fast",
			moveSequenceSettings: {
				sequence: ["anim attacker atk-move", "f2fvfx attacker mud_shot_fast", "sfx attacker 341-0_mud_shot", "wait 0.25", "vfx defender mud_shot_hit_fast", "wait 0.1", "shake UpDown/0.25/0.25/1.0", "anim defender damageS01", "wait 0.15", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_mud_slap_fast",
			moveSequenceSettings: {
				sequence: ["anim attacker atk-move", "vfx attacker mud_slap_fast_emit", "wait 0.50", "vfx defender mud_slap_fast_hit", "anim defender damageS01", "sfx attacker 341-0_mud_shot", "wait 0.25", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_night_slash",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_3s", "cam EnterFaceAttacker_ATKR_DFND_", "background attacker 0.0/0.0/0.25/0.5", "wait 0.4", "anim attacker atk-move", "event", "vfx attacker night_slash_emit", "vfx defender night_slash_hit", "sfx attacker 400-0_night_slash", "wait 0.42", "cam PanToDefender_ATKR_DFND_", "wait 0.33", "anim defender damageS01", "reset_background attacker 0.0/0.0/0.25/0.5", "wait 1.0", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_ominous_wind",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_3s", "cam DefaultAttack_ATKR_DFND_", "background attacker 0.0/0.1/0.3/0.5", "anim attacker atk-move", "event", "vfx camera ominous_wind_camera_wind", "sfx attacker 466-0_ominous_wind", "wait 1.0", "f2fvfx defender ominous_wind_hit", "anim defender damageS01", "wait 0.33", "anim defender damageS01", "wait 0.33", "anim defender damageS01", "reset_background attacker 0.0/0.1/0.3/0.5", "wait 0.5", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_parabolic_charge",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_3s", "cam EnterBehindAttacker_ATKR_DFND_", "background attacker 1.0/0.9/0.6/0.5", "anim attacker atk-move", "vfx attacker parabolic_charge_waist:Origin/Waist", "sfx attacker 570-0_parabolic_charge", "event", "cam ParabolicCharge_ATKR_DFND_", "vfx attacker parabolic_charge", "wait 0.33", "f2fvfx attacker thunder_shock_fast", "wait 0.33", "anim defender damageS01", "reset_background attacker 1.0/1.0/0.9/0.0", "vfx defender parabolic_charge_hit_waist:Origin/Waist", "wait 0.33", "f2fvfx attacker parabolic_charge_hit", "reset_background attacker 1.0/0.9/0.6/0.5", "wait 2.0", "cam CutFromDefender_ATKR_DFND_", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_peck_fast",
			moveSequenceSettings: {
				sequence: ["anim attacker atk-move", "wait 0.3", "f2fvfx defender peck_fast", "sfx attacker 064-0_peck", "wait 0.2", "anim defender damageS01", "sfx attacker 064-0_peck", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_petal_blizzard",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_4s", "cam EnterFaceDefenderFromFarAway_ATKR_DFND_", "anim attacker atk-move", "event", "vfx camera petal_blizzard_camera", "vfx defender petal_blizzard_hit", "sfx attacker 572-0_petal_blizzard", "wait 1.41", "anim defender damageS01", "wait 2.0", "cam CutFromDefender_ATKR_DFND_", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_play_rough",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_3s", "cam EnterBehindAttacker_ATKR_DFND_", "anim attacker atk-move", "event", "cam PlayRough_ATKR_DFND_", "sfx attacker 583-0_play_rough", "wait 0.45", "vfx defender play_rough", "wait 0.3", "scale defender 0.0001", "anim defender damageS01", "wait 0.3", "scale defender 1", "wait 0.7", "anim defender damageS01", "wait 0.75", "cam CutFromDefender_ATKR_DFND_", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_poison_fang",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_2s", "cam DefaultAttack_ATKR_DFND_", "anim attacker atk-move", "event", "cam PanToDefender_ATKR_DFND_", "f2fvfx defender poison_fang", "sfx attacker 305-0_poison_fang", "wait 0.4", "anim defender damageS01", "reset_background attacker 0.6/0.0/1.0/0.0", "silhouette defender 0.6/0.0/1.0/0.0", "wait 0.25", "reset_silhouette defender 0.6/0.0/1.0/0.0", "wait 0.75", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_poison_jab_fast",
			moveSequenceSettings: {
				sequence: ["anim attacker atk-move", "f2fvfx attacker poison_jab_fast", "vfx defender poison_jab_fast_hit", "sfx attacker 398-0_poison_jab", "wait 0.15", "anim defender damageS01", "wait 0.35", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_poison_sting_fast",
			moveSequenceSettings: {
				sequence: ["anim attacker atk-move", "f2fvfx attacker poison_sting_fast_emit", "wait 0.25", "vfx defender poison_sting_fast_hit", "anim defender damageS01", "sfx attacker 305-0_poison_fang", "wait 0.25", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_pound_fast",
			moveSequenceSettings: {
				sequence: ["anim attacker atk-move", "wait 0.1", "f2fvfx defender pound_fast", "wait 0.1", "anim defender damageS01", "sfx attacker 001-0_pound", "shake UpDown/0.5/1.0", "wait 0.2", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_power_gem",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_3s", "cam DefaultAttack_ATKR_DFND_", "anim attacker atk-move", "event", "f2fvfx attacker power_gem", "sfx attacker 408-0_power_gem", "wait 1.2", "f2fvfx defender power_gem_hit", "anim defender damageS01", "wait 0.2", "anim defender damageS01", "wait 0.2", "anim defender damageS01", "wait 0.2", "anim defender damageS01", "wait 0.5", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_power_whip",
			moveSequenceSettings: {
				sequence: ["cam PowerWhip_ATKR_DFND_", "anim attacker atk-move", "event", "background attacker 0.2/0.8/0.0/0.0", "silhouette attacker 0.0/0.0/0.0/0.0", "silhouette defender 0.0/0.0/0.0/0.0", "vfx defender power_whip", "vfx camera camera_horizontal_vignette", "sfx attacker 438-0_power_whip", "wait 0.1", "sfx attacker 030-0_horn_attack", "wait 0.3", "shake SideToSide/2.0/2.0/0.0", "vfx defender power_whip_hit_waist:Origin/Waist", "anim defender damageS01", "sfx attacker 030-0_horn_attack", "wait 0.4", "anim defender damageS01", "sfx attacker 030-0_horn_attack", "wait 0.4", "anim defender damageS01", "wait 0.2", "reset_background attacker 0.2/0.8/0.0/0.0", "reset_silhouette attacker 0.0/0.0/0.0/0.0", "reset_silhouette defender 0.0/0.0/0.0/0.0", "wait 0.75", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_psybeam",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_2s", "cam PsybeamEnter_ATKR_DFND_", "wait 0.15", "anim attacker atk-move", "event", "f2fvfx attacker psybeam", "sfx attacker 060-0_psybeam", "wait 0.25", "cam PanToDefender_ATKR_DFND_", "vfx camera psybeam_camera_psychic_circles", "wait 0.25", "f2fvfx defender psybeam_hit", "anim defender damageS01", "shake SideToSide/1.5/0.5/0.25", "wait 0.8", "shake SideToSide/1.5/0.5/0.25", "wait 0.5", "anim defender damageS01", "wait 1.0", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_psychic",
			moveSequenceSettings: {
				sequence: ["cam DefaultAttack_ATKR_DFND_", "anim attacker atk-move", "event", "f2fvfx attacker psychic_emit", "vfx defender psychic_hit", "sfx attacker 094-0_psychic", "wait 0.35", "cam EnterFaceDefender_ATKR_DFND_", "vfx camera psychic_camera", "wait 1.0", "anim defender damageS01", "wait 1.0", "cam CutFromDefender_ATKR_DFND_", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_psycho_cut_fast",
			moveSequenceSettings: {
				sequence: ["anim attacker atk-move", "f2fvfx attacker psycho_cut_fast_emit", "vfx defender psycho_cut_fast_hit", "sfx attacker 427-0_psycho_cut", "wait 0.25", "anim defender damageS01", "wait 0.25", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_psyshock",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_3s", "cam EnterBehindAttacker_ATKR_DFND_", "anim attacker atk-move", "event", "vfx attacker psyshock_emit", "vfx defender psyshock_hit", "sfx attacker 473-0_psyshock", "wait 0.5", "cam Psyshock_ATKR_DFND_", "wait 1.0", "anim defender damageS01", "shake UpDown/0.5/1.0/01.0", "wait 0.5", "cam CutFromDefender_ATKR_DFND_", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_psystrike",
			moveSequenceSettings: {
				sequence: ["cam Psystrike_ATKR_DFND_", "background attacker 0.8/0.8/0.8/0.0", "wait 0.5", "anim attacker atk-move", "event", "vfx attacker psystrike_emit", "vfx defender psystrike_hit", "f2fvfx defender psystrike_projectile", "sfx attacker 540-0_psystrike", "wait 3.0", "anim defender damageS01", "wait 1.0", "reset_background attacker 0.8/0.8/0.8/0.0", "wait 0.8", "cam CutFromDefender_ATKR_DFND_", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_quick_attack_fast",
			moveSequenceSettings: {
				sequence: ["anim attacker atk-move", "f2fvfx attacker quick_attack_fast_emit", "vfx defender quick_attack_fast_hit", "sfx attacker 098-0_quick_attack", "wait 0.5", "anim defender damageS01", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_razor_leaf_fast",
			moveSequenceSettings: {
				sequence: ["anim attacker atk-move", "f2fvfx attacker razor_leaf_fast", "sfx attacker 075-0_razor_leaf", "wait 0.5", "anim defender damageS01", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_rest",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_3s", "cam EnterFaceAttacker_ATKR_DFND_", "anim attacker atk-move", "event", "f2fvfx attacker rest", "sfx attacker 156-0_rest", "wait 2.0", "cam CutFromAttacker_ATKR_DFND_", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_rock_slide",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_3s", "cam EnterFaceDefenderFromFarAway_ATKR_DFND_", "anim attacker atk-move", "event", "vfx defender rock_slide", "sfx attacker 157-0_rock_slide", "wait 0.75", "anim defender damageS01", "wait 0.33", "anim defender damageS01", "wait 0.33", "anim defender damageS01", "wait 1.0", "cam CutFromDefender_ATKR_DFND_", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_rock_smash_fast",
			moveSequenceSettings: {
				sequence: ["anim attacker atk-move", "f2fvfx attacker tackle_fast", "wait 0.25", "vfx defender rock_smash_fast", "anim defender damageS01", "sfx attacker 280-0_brick_break", "wait 0.25", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_rock_throw_fast",
			moveSequenceSettings: {
				sequence: ["anim attacker atk-move", "f2fvfx attacker rock_throw_fast_emit", "vfx defender rock_throw_fast_hit", "wait 0.25", "sfx attacker 088-0_rock_throw", "wait 0.25", "anim defender damageS01", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_rock_tomb",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_3s", "cam EnterBehindAttackerFarAway_ATKR_DFND_", "anim attacker atk-move", "event", "sfx attacker 317-0_rock_tomb", "wait 0.5", "vfx defender rock_tomb", "cam PanToFaceDefender_ATKR_DFND_", "wait 1.0", "anim defender damageS01", "wait 1.0", "cam CutFromDefender_ATKR_DFND_", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_scald",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_4s", "cam EnterFaceAttacker_ATKR_DFND_", "wait 0.5", "anim attacker atk-move", "event", "f2fvfx attacker scald", "sfx attacker 503-0_scald", "wait 0.25", "cam CutToFaceDefender_ATKR_DFND_", "vfx defender hydro_pump_hit", "background attacker 1.0/0.0/0.0/0.8", "anim defender damageS01", "wait 0.33", "anim defender damageS01", "silhouette defender 1.0/0.0/0.0/0.5", "wait 0.66", "reset_background attacker 1.0/0.0/0.0/0.8", "wait 0.7", "reset_silhouette defender 1.0/0.0/0.0/0.5", "wait 0.5", "cam CutFromDefender_ATKR_DFND_", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_scald_blastoise",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_4s", "cam EnterFaceAttacker_ATKR_DFND_", "wait 0.5", "anim attacker atk-move", "event", "vfx attacker scald_cannon:Origin/Waist/LFeelerA/LFeelerB/LFeelerC", "vfx attacker scald_cannon:Origin/Waist/RFeelerA/RFeelerB/RFeelerC", "f2fvfx attacker scald_double_beam", "sfx attacker 503-0_scald", "wait 0.25", "cam CutToFaceDefender_ATKR_DFND_", "vfx defender hydro_pump_hit", "background attacker 1.0/0.0/0.0/0.8", "anim defender damageS01", "wait 0.33", "anim defender damageS01", "silhouette defender 1.0/0.0/0.0/0.5", "wait 0.66", "reset_background attacker 1.0/0.0/0.0/0.8", "wait 0.7", "reset_silhouette defender 1.0/0.0/0.0/0.5", "wait 0.5", "cam CutFromDefender_ATKR_DFND_", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_scratch_fast",
			moveSequenceSettings: {
				sequence: ["anim attacker atk-move", "f2fvfx defender scratch_fast", "sfx attacker 010-0_scratch", "wait 0.25", "anim defender damageS01", "wait 0.25", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_seed_bomb",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_2s", "cam SeedBombEnter_ATKR_DFND_", "anim attacker atk-move", "event", "f2fvfx attacker seed_bomb", "sfx attacker 402-0_seed_bomb", "wait 0.3", "cam PanToDefender_ATKR_DFND_", "wait 0.3", "anim defender damageS01", "wait 0.12", "anim defender damageS01", "wait 0.12", "anim defender damageS01", "wait 1.0", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_seq_ding",
			moveSequenceSettings: {
				sequence: ["anim attacker damageS01", "wait 0.5", "sys complete"]
			}
		}, {
			templateId: "sequence_seq_faint",
			moveSequenceSettings: {
				sequence: ["cam FortFaint", "anim attacker down01", "wait 0.9", "vfx attacker pokeball_enter", "wait 0.05", "silhouette attacker 3.0/3.0/3.0/0.0", "wait 0.01", "scale attacker 0.0/3", "wait 0.66", "sys complete"]
			}
		}, {
			templateId: "sequence_seq_fort_faint",
			moveSequenceSettings: {
				sequence: ["cam FortFaint", "wait 1.0", "sys faintbegin", "anim attacker down01", "sys ui-sync", "wait 2.0", "sys scaledown", "wait 0.5", "sys defender_poof", "sys faintvfx", "wait 3.5", "sys complete"]
			}
		}, {
			templateId: "sequence_seq_intro",
			moveSequenceSettings: {
				sequence: ["wait 0.5", "sys complete"]
			}
		}, {
			templateId: "sequence_seq_outro",
			moveSequenceSettings: {
				sequence: ["wait 0.2", "sys complete"]
			}
		}, {
			templateId: "sequence_seq_return",
			moveSequenceSettings: {
				sequence: ["vfx attacker pokeball_enter", "wait 0.05", "silhouette attacker 3.0/3.0/3.0/0.0", "wait 0.01", "scale attacker 0.0/3", "wait 0.66", "sys complete"]
			}
		}, {
			templateId: "sequence_shadow_ball",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_4s", "cam EnterFaceAttacker_ATKR_DFND_", "wait 0.33", "anim attacker atk-move", "vfx attacker shadow_ball_emit", "vfx defender shadow_ball_hit", "sfx attacker 247-0_shadow_ball", "wait 1.25", "cam PanToDefender_ATKR_DFND_", "wait 0.5", "anim defender damageS01", "wait 1.0", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_shadow_claw_fast",
			moveSequenceSettings: {
				sequence: ["anim attacker atk-move", "f2fvfx defender shadow_claw_fast", "sfx attacker 421-0_shadow_claw", "wait 0.4", "anim defender damageS01", "wait 0.1", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_shadow_punch",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_1s", "cam EnterBehindAttacker_ATKR_DFND_", "background attacker 0.0/0.0/0.0/0.25", "silhouette attacker 0.0/0.0/0.0/0.0", "anim attacker atk-move", "event", "sfx attacker 325-0_shadow_punch", "wait 0.15", "f2fvfx defender shadow_punch", "wait 0.3", "cam PunchHit_ATKR_DFND_", "wait 0.15", "anim defender damageS01", "wait 0.25", "reset_background attacker 0.0/0.0/0.0/0.25", "reset_silhouette attacker 0.0/0.0/0.0/0.0", "wait 0.5", "cam CutFromDefender_ATKR_DFND_", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_shadow_sneak",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_3s", "cam EnterBehindAttackerFarAway_ATKR_DFND_", "anim attacker atk-move", "event", "vfx attacker shadow_sneak", "sfx attacker 425-0_shadow_sneak", "cam ShadowSneak_ATKR_DFND_", "wait 1.0", "vfx defender shadow_sneak_hit", "shake UpDown/0.75/1.0/1.0", "wait 0.4", "anim defender damageS01", "wait 1.0", "cam CutFromDefender_ATKR_DFND_", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_signal_beam",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_4s", "cam DefaultAttack_ATKR_DFND_", "anim attacker atk-move", "event", "cam PanToDefender_ATKR_DFND_", "f2fvfx attacker signal_beam", "sfx attacker 324-0_signal_beam", "background attacker 0.0/0.3/0.6/0.25", "wait 0.9", "f2fvfx defender signal_beam_hit", "wait 0.2", "anim defender damageS01", "reset_background attacker 0.4/1.0/0.7/0.25", "wait 0.33", "anim defender damageS01", "reset_background attacker 1.0/0.4/0.7/0.25", "wait 0.5", "anim defender damageS01", "reset_background attacker 0.4/0.7/1.0/0.25", "wait 1.0", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_sludge",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_3s", "cam DefaultAttack_ATKR_DFND_", "anim attacker atk-move", "event", "f2fvfx attacker sludge", "sfx attacker 124-0_sludge", "wait 0.5", "vfx defender sludge_hit", "wait 0.2", "anim defender damageS01", "wait 0.25", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_sludge_bomb",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_3s", "cam DefaultAttack_ATKR_DFND_", "anim attacker atk-move", "event", "vfx attacker sludge_bomb", "sfx attacker 188-0_sludge_bomb", "wait 0.2", "cam FollowArcingProjectile_ATKR_DFND_", "wait 0.8", "shake UpDown/0.5/0.25/2.0", "anim defender damageS01", "vfx defender sludge_bomb_hit", "wait 1.0", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_sludge_wave",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_3s", "cam EnterBehindAttacker_ATKR_DFND_", "anim attacker atk-move", "event", "vfx attacker sludge_wave_ground", "f2fvfx attacker sludge_wave_projectile", "sfx attacker 482-0_sludge_wave", "wait 0.2", "cam PanToFaceDefender_ATKR_DFND_", "wait 1.0", "f2fvfx defender sludge_wave_projectile_hit", "vfx defender sludge_wave_hit", "anim defender damageS01", "wait 0.5", "anim defender damageS01", "wait 1.0", "cam CutFromDefender_ATKR_DFND_", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_solar_beam",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_2s", "cam SolarBeamEnter_ATKR_DFND_", "background attacker 1.0/0.95/0.8/0.5", "anim attacker atk-move", "event", "vfx attacker solar_beam_charge_waist:Origin/Waist", "sfx attacker 076-0_solar_beam", "wait 0.5", "vfx attacker solar_beam_charge", "wait 0.85", "cam SolarBeam_ATKR_DFND_", "wait 0.41", "vfx defender solar_beam_hit", "sfx attacker 076-1_solar_beam", "shake UpDown/0.75/0.5/2.0", "wait 0.4", "shake UpDown/0.75/1.0/1.0", "wait 1.3", "shake UpDown/0.75/2.0/0.5", "anim defender damageS01", "reset_background attacker 1.0/1.0/1.0/0.0", "wait 1.0", "cam CutFromDefender_ATKR_DFND_", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_spark_fast",
			moveSequenceSettings: {
				sequence: ["sfx attacker 209-0_spark", "anim attacker atk-move", "vfx attacker spark_waist_fast:Origin/Waist", "wait 0.15", "f2fvfx attacker spark_fast", "wait 0.15", "anim defender damageS01", "vfx defender spark_hit_waist_fast:Origin/Waist", "wait 0.2", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_splash_fast",
			moveSequenceSettings: {
				sequence: ["anim attacker atk-move", "wait 0.36", "vfx attacker jump", "sfx attacker 150-0_splash", "wait 0.53", "vfx attacker splash", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_steel_wing_fast",
			moveSequenceSettings: {
				sequence: ["anim attacker atk-move", "wait 0.35", "vfx defender steel_wing_fast", "sfx attacker 017-0_wing_attack", "wait 0.15", "anim defender damageS01", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_stomp",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_2s", "cam PanToDefender_ATKR_DFND_", "wait 0.4", "anim attacker atk-move", "event", "vfx defender stomp_hit", "sfx attacker 023-0_stomp", "squish defender 0.9", "wait 0.15", "anim defender damageS01", "shake UpDown/1.0/1.0/1.0", "wait 1.0", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_stone_edge",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_2s", "cam EnterFaceDefenderFromFarAway_ATKR_DFND_", "sfx attacker 444-0_stone_edge", "anim attacker atk-move", "event", "shake UpDown/0.75/0.75", "vfx defender stone_edge", "wait 0.25", "anim defender damageS01", "wait 0.75", "cam CutFromDefender_ATKR_DFND_", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_struggle",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_3s", "cam DefaultAttack_ATKR_DFND_", "shake SideToSide/1.5/0.1/1.0", "anim attacker atk-move", "event", "f2fvfx defender struggle", "sfx attacker 165-0_struggle", "anim defender damageS01", "wait 1.5", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_submission",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_3s", "anim attacker atk-move", "event", "cam PanToDefender_ATKR_DFND_", "background attacker 0.0/0.0/0.0/0.5", "vfx camera camera_speed_lines", "vfx attacker submission", "sfx attacker 066-0_submission", "hide defender", "wait 1.15", "unhide defender", "anim defender damageS01", "shake UpDown/0.5/0.25/1.0", "reset_background attacker 0.0/0.0/0.0/0.5", "wait 0.5", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_sucker_punch_fast",
			moveSequenceSettings: {
				sequence: ["anim attacker atk-move", "f2fvfx defender sucker_punch_fast", "sfx attacker 389-0_sucker_punch", "wait 0.5", "anim defender damageS01", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_swift",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_3s", "cam DefaultAttack_ATKR_DFND_", "anim attacker atk-move", "event", "f2fvfx attacker swift_emit", "vfx defender swift_hit", "sfx attacker 129-0_swift", "wait 1.4", "anim defender damageS01", "shake SideToSide/0.25/0.5/1.0", "wait 1.0", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_tackle_fast",
			moveSequenceSettings: {
				sequence: ["anim attacker atk-move", "f2fvfx attacker tackle_fast", "wait 0.25", "f2fvfx defender tackle_fast_hit", "anim defender damageS01", "sfx attacker 033-0_tackle", "wait 0.25", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_thunder",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_2s", "cam Thunder_ATKR_DFND_", "anim attacker atk-move", "vfx defender thunder", "sfx attacker 087-0_thunder", "wait 1.0", "background attacker 0.0/0.0/0.0/0.0", "wait 1.35", "shake UpDown/0.5/1.0/0.0", "anim defender damageS01", "reset_background attacker 1.0/1.0/0.9/0.0", "wait 0.33", "anim defender damageS01", "reset_background attacker 1.0/1.0/0.9/0.0", "wait 0.33", "anim defender damageS01", "reset_background attacker 1.0/1.0/0.9/0.0", "wait 1.7", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_thunder_punch",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_2s", "cam EnterBehindAttacker_ATKR_DFND_", "background attacker 0.0/0.0/0.0/0.5", "anim attacker atk-move", "event", "sfx attacker 009-0_thunder_punch", "wait 0.15", "f2fvfx defender thunder_punch", "wait 0.85", "cam PunchHit_ATKR_DFND_", "wait 0.15", "anim defender damageS01", "vfx camera camera_electric", "reset_background attacker 1.0/1.0/1.0/0.0", "wait 1.0", "cam CutFromDefender_ATKR_DFND_", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_thunder_shock_fast",
			moveSequenceSettings: {
				sequence: ["anim attacker atk-move", "vfx attacker thunder_shock_waist_fast:Origin/Waist", "f2fvfx attacker thunder_shock_fast", "sfx attacker 084-0_thunder_shock", "wait 0.25", "anim defender damageS01", "vfx defender thunder_shock_hit_waist_fast:Origin/Waist", "wait 0.25", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_thunderbolt",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_1s", "cam EnterBehindAttackerFarAway_ATKR_DFND_", "background attacker 1.0/0.9/0.6/0.5", "anim attacker atk-move", "event", "vfx attacker thunderbolt_waist:Origin/Waist", "f2fvfx attacker thunderbolt", "sfx attacker 085-0_thunderbolt", "wait 0.3", "cam PanToFaceDefender_ATKR_DFND_", "wait 0.6", "vfx defender thunderbolt_hit", "wait 0.15", "anim defender damageS01", "reset_silhouette defender 1.0/1.0/1.0/0.0", "vfx defender thunder_shock_hit_waist_fast:Origin/Waist", "wait 0.15", "anim defender damageS01", "reset_silhouette defender 1.0/1.0/1.0/0.0", "reset_background attacker 1.0/0.9/0.6/0.5", "wait 1.0", "cam CutFromDefender_ATKR_DFND_", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_twister",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_2s", "cam EnterBehindAttackerFarAway_ATKR_DFND_", "anim attacker atk-move", "event", "cam FaceDefenderZoomOut_ATKR_DFND_", "vfx defender twister", "sfx attacker 239-0_twister", "wait 0.33", "spin defender 1.0", "wait 0.33", "anim defender damageS01", "wait 0.33", "anim defender damageS01", "wait 0.33", "anim defender damageS01", "wait 0.5", "cam CutFromDefender_ATKR_DFND_", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_vice_grip",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_3s", "cam DefaultAttack_ATKR_DFND_", "anim attacker atk-move", "event", "cam ViceGrip", "vfx defender vice_grip", "wait 0.3", "sfx attacker 011-0_vice_grip", "wait 0.25", "anim defender damageS01", "wait 0.5", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_vine_whip_fast",
			moveSequenceSettings: {
				sequence: ["anim attacker atk-move", "f2fvfx attacker vine_whip_fast_emit", "vfx defender vine_whip_fast_hit", "sfx attacker 022-0_vine_whip", "wait 0.3", "anim defender damageS01", "wait 0.2", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_water_gun_fast",
			moveSequenceSettings: {
				sequence: ["anim attacker atk-move", "f2fvfx attacker water_gun_fast", "sfx attacker 055-0_water_gun", "wait 0.15", "anim defender damageS01", "wait 0.35", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_water_gun_fast_blastoise",
			moveSequenceSettings: {
				sequence: ["anim attacker atk-move", "f2fvfx attacker water_gun_fast_double_beam_emit", "vfx defender water_gun_fast_double_beam hit", "sfx attacker 055-0_water_gun", "wait 0.15", "anim defender damageS01", "wait 0.35", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_water_pulse",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_4s", "cam WaterPulseEnter_ATKR_DFND_", "wait 0.5", "vfx attacker water_pulse_ring", "sfx attacker 352-0_water_pulse", "wait 0.25", "background attacker 0.0/0.25/1.0/0.5", "anim attacker atk-move", "wait 0.33", "cam PanToFaceDefender_ATKR_DFND_", "f2fvfx attacker water_pulse", "wait 0.4", "f2fvfx defender water_pulse_hit", "wait 0.1", "anim defender damageS01", "wait 1.5", "reset_background attacker 0.0/0.25/1.0/0.5", "wait 0.5", "cam CutFromDefender_ATKR_DFND_", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_wing_attack_fast",
			moveSequenceSettings: {
				sequence: ["anim attacker atk-move", "wait 0.35", "f2fvfx defender wing_attack_fast", "sfx attacker 017-0_wing_attack", "wait 0.15", "anim defender damageS01", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_wrap",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_5s", "cam DefaultAttack_ATKR_DFND_", "anim attacker atk-move", "event", "vfx defender wrap_tentacles", "sfx attacker 035-0_wrap", "wait 1.5", "sfx attacker 035-1_wrap", "wait 0.06", "anim defender damageS01", "wait 0.3", "sfx attacker 035-1_wrap", "wait 0.06", "anim defender damageS01", "wait 0.5", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_wrap_green",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_5s", "cam DefaultAttack_ATKR_DFND_", "anim attacker atk-move", "event", "vfx defender wrap_tentacles_green", "sfx attacker 035-0_wrap", "wait 1.5", "sfx attacker 035-1_wrap", "wait 0.06", "anim defender damageS01", "wait 0.3", "sfx attacker 035-1_wrap", "wait 0.06", "anim defender damageS01", "wait 0.5", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_wrap_pink",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_5s", "cam DefaultAttack_ATKR_DFND_", "anim attacker atk-move", "event", "vfx defender wrap_tentacles_pink", "sfx attacker 035-0_wrap", "wait 1.5", "sfx attacker 035-1_wrap", "wait 0.06", "anim defender damageS01", "wait 0.3", "sfx attacker 035-1_wrap", "wait 0.06", "anim defender damageS01", "wait 0.5", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_x_scissor",
			moveSequenceSettings: {
				sequence: ["vfx camera camera_horizontal_vignette_2s", "cam DefaultAttack_ATKR_DFND_", "anim attacker atk-move", "event", "cam PanToDefender_ATKR_DFND_", "sfx attacker 404-0_x_scissor", "background attacker 0.0/0.0/0.0/0.5", "wait 0.25", "f2fvfx defender x_scissor", "wait 0.25", "anim defender damageS01", "reset_background attacker 0.0/0.0/0.0/0.5", "wait 1.0", "sys ui-sync", "sys complete"]
			}
		}, {
			templateId: "sequence_zen_headbutt_fast",
			moveSequenceSettings: {
				sequence: ["anim attacker atk-move", "f2fvfx attacker zen_headbutt_fast_emit", "wait 0.40", "vfx defender zen_headbutt_fast_hit", "anim defender damageS01", "sfx attacker 442-0_iron_head", "wait 0.25", "sys ui-sync", "sys complete"]
			}
		}],
		timestampMs: "1471650700946"
	},
	StaticData = function() {
		function a() {}
		return a.calculateCurrentLevel = function(b) {
			for (var c = 0; c < a.totalExpForLevel.length; c++)
				if (a.totalExpForLevel[c + 1] >= b) return c;
			throw "Unable to determine level"
		}, a.calculateCurrentGymLevel = function(b) {
			for (var c = 0; c < a.totalExpForGymLevel.length; c++)
				if (a.totalExpForGymLevel[c + 1] >= b) return c;
			throw "Unable to determine gym level"
		}, a.init = function(b) {
			a.initTypeDictionaries(), a.initItemIds(), a.initExpData(), a.pokemonData = [];
			for (var c = _.filter(b.itemTemplates, function(a) {
					return a.pokemonSettings
				}), d = 0; d < c.length; d++) {
				var e = c[d].pokemonSettings;
				e.id = a.parseId(c[d].templateId), e.elements = [];
				var f = a.dictRawPokemonTypeToEasePokemonType[e.type];
				if (e.elements.push(f), e.type2) {
					var g = a.dictRawPokemonTypeToEasePokemonType[e.type2];
					e.elements.push(g)
				}
				a.pokemonData[e.id] = e
			}
			a.moveData = [];
			for (var h = _.filter(b.itemTemplates, function(a) {
					return a.moveSettings
				}), i = function(b) {
					var c = h[b].moveSettings;
					c.id = a.parseId(h[b].templateId), c.element = a.dictRawPokemonTypeToEasePokemonType[c.pokemonType];
					var d = _.filter(a.pokemonData, function(a) {
							return a && _.includes(a.quickMoves, c.movementId)
						}),
						e = _.filter(a.pokemonData, function(a) {
							return a && _.includes(a.cinematicMoves, c.movementId)
						});
					c.moveType = MoveType.None, d.length > 0 && (c.moveType |= MoveType.QuickMove), e.length > 0 && (c.moveType |= MoveType.CinematicMove), c.availableToPokemon = _.concat(d, e), a.moveData[c.id] = c
				}, d = 0; d < h.length; d++) i(d);
			for (var d = 1; d < a.pokemonData.length; d++) {
				var e = a.pokemonData[d];
				e.availableQuickMoves = _.map(e.quickMoves, function(b) {
					return _.find(a.moveData, function(a) {
						return a && a.movementId === b
					})
				}), e.availableCinematicMoves = _.map(e.cinematicMoves, function(b) {
					return _.find(a.moveData, function(a) {
						return a && a.movementId === b
					})
				}), e.evolvesInto = _.map(e.evolutionIds, function(b) {
					return _.find(a.pokemonData, function(a) {
						return a && a.pokemonId === b
					})
				})
			}
		}, a.initItemIds = function() {
			var b = [];
			b[1] = "ItemPokeBall", b[2] = "ItemGreatBall", b[3] = "ItemUltraBall", b[4] = "ItemMasterBall", b[101] = "ItemPotion", b[102] = "ItemSuperPotion", b[103] = "ItemHyperPotion", b[104] = "ItemMaxPotion", b[201] = "ItemRevive", b[202] = "ItemMaxRevive", b[701] = "ItemRazzBerry", b[703] = "ItemNanabBerry", b[705] = "ItemPinapBerry", b[1101] = "ItemSunStone", b[1102] = "ItemKingsRock", b[1103] = "ItemMetalCoat", b[1104] = "ItemDragonScale", b[1105] = "ItemUpGrade", a.itemCodes = b;
			var c = [];
			c.ItemPokeBall = 1, c.ItemGreatBall = 2, c.ItemUltraBall = 3, c.ItemMasterBall = 4, c.ItemPotion = 101, c.ItemSuperPotion = 102, c.ItemHyperPotion = 103, c.ItemMaxPotion = 104, c.ItemRevive = 201, c.ItemMaxRevive = 202, c.ItemRazzBerry = 701, c.ItemNanabBerry = 703, c.ItemPinapBerry = 705, c.ItemSunStone = 1101, c.ItemKingsRock = 1102, c.ItemMetalCoat = 1103, c.ItemDragonScale = 1104, c.ItemUpGrade = 1105, a.itemIds = c, a.berryIds = [701]
		}, a.initExpData = function() {
			var b = [];
			b[0] = -(1 / 0), b[1] = 0, b[2] = 1e3, b[3] = 3e3, b[4] = 6e3, b[5] = 1e4, b[6] = 15e3, b[7] = 21e3, b[8] = 28e3, b[9] = 36e3, b[10] = 45e3, b[11] = 55e3, b[12] = 65e3, b[13] = 75e3, b[14] = 85e3, b[15] = 1e5, b[16] = 12e4, b[17] = 14e4, b[18] = 16e4, b[19] = 185e3, b[20] = 21e4, b[21] = 26e4, b[22] = 335e3, b[23] = 435e3, b[24] = 56e4, b[25] = 71e4, b[26] = 9e5, b[27] = 11e5, b[28] = 135e4, b[29] = 165e4, b[30] = 2e6, b[31] = 25e5, b[32] = 3e6, b[33] = 375e4, b[34] = 475e4, b[35] = 6e6, b[36] = 75e5, b[37] = 95e5, b[38] = 12e6, b[39] = 15e6, b[40] = 2e7, b[41] = 1 / 0, a.totalExpForLevel = b, a.expForLevel = [];
			for (var c = 1; c < b.length; c++) a.expForLevel[c] = a.totalExpForLevel[c] - a.totalExpForLevel[c - 1];
			var d = [];
			d[0] = -(1 / 0), d[1] = 0, d[2] = 2e3, d[3] = 4e3, d[4] = 8e3, d[5] = 12e3, d[6] = 16e3, d[7] = 2e4, d[8] = 3e4, d[9] = 4e4, d[10] = 5e4, d[11] = 1 / 0, a.totalExpForGymLevel = d
		}, a.initTypeDictionaries = function() {
			a.dictRawPokemonTypeToEasePokemonType = {
				POKEMON_TYPE_GRASS: PokeElement.Grass,
				POKEMON_TYPE_DARK: PokeElement.Dark,
				POKEMON_TYPE_FIRE: PokeElement.Fire,
				POKEMON_TYPE_WATER: PokeElement.Water,
				POKEMON_TYPE_BUG: PokeElement.Bug,
				POKEMON_TYPE_NORMAL: PokeElement.Normal,
				POKEMON_TYPE_POISON: PokeElement.Poison,
				POKEMON_TYPE_ELECTRIC: PokeElement.Electric,
				POKEMON_TYPE_GROUND: PokeElement.Ground,
				POKEMON_TYPE_FAIRY: PokeElement.Fairy,
				POKEMON_TYPE_FIGHTING: PokeElement.Fighting,
				POKEMON_TYPE_PSYCHIC: PokeElement.Psychic,
				POKEMON_TYPE_ROCK: PokeElement.Rock,
				POKEMON_TYPE_FLYING: PokeElement.Flying,
				POKEMON_TYPE_STEEL: PokeElement.Steel,
				POKEMON_TYPE_GHOST: PokeElement.Ghost,
				POKEMON_TYPE_ICE: PokeElement.Ice,
				POKEMON_TYPE_DRAGON: PokeElement.Dragon
			}, a.dictEasePokemonTypeToRawPokemonType = [], a.dictEasePokemonTypeToRawPokemonType[PokeElement.Grass] = "POKEMON_TYPE_GRASS", a.dictEasePokemonTypeToRawPokemonType[PokeElement.Dark] = "POKEMON_TYPE_DARK", a.dictEasePokemonTypeToRawPokemonType[PokeElement.Fire] = "POKEMON_TYPE_FIRE", a.dictEasePokemonTypeToRawPokemonType[PokeElement.Water] = "POKEMON_TYPE_WATER", a.dictEasePokemonTypeToRawPokemonType[PokeElement.Bug] = "POKEMON_TYPE_BUG", a.dictEasePokemonTypeToRawPokemonType[PokeElement.Normal] = "POKEMON_TYPE_NORMAL", a.dictEasePokemonTypeToRawPokemonType[PokeElement.Poison] = "POKEMON_TYPE_POISON", a.dictEasePokemonTypeToRawPokemonType[PokeElement.Electric] = "POKEMON_TYPE_ELECTRIC", a.dictEasePokemonTypeToRawPokemonType[PokeElement.Ground] = "POKEMON_TYPE_GROUND", a.dictEasePokemonTypeToRawPokemonType[PokeElement.Fairy] = "POKEMON_TYPE_FAIRY", a.dictEasePokemonTypeToRawPokemonType[PokeElement.Fighting] = "POKEMON_TYPE_FIGHTING", a.dictEasePokemonTypeToRawPokemonType[PokeElement.Psychic] = "POKEMON_TYPE_PSYCHIC", a.dictEasePokemonTypeToRawPokemonType[PokeElement.Rock] = "POKEMON_TYPE_ROCK", a.dictEasePokemonTypeToRawPokemonType[PokeElement.Flying] = "POKEMON_TYPE_FLYING", a.dictEasePokemonTypeToRawPokemonType[PokeElement.Steel] = "POKEMON_TYPE_STEEL", a.dictEasePokemonTypeToRawPokemonType[PokeElement.Ghost] = "POKEMON_TYPE_GHOST", a.dictEasePokemonTypeToRawPokemonType[PokeElement.Ice] = "POKEMON_TYPE_ICE", a.dictEasePokemonTypeToRawPokemonType[PokeElement.Dragon] = "POKEMON_TYPE_DRAGON"
		}, a.parseId = function(a) {
			var b = /V(\d+?)_/,
				c = b.exec(a),
				d = c[1],
				e = parseInt(d);
			return e
		}, a
	}(),
	FortType;
! function(a) {
	a[a.Gym = 0] = "Gym", a[a.PokeStop = 1] = "PokeStop"
}(FortType || (FortType = {}));
var PlayerTeam;
! function(a) {
	a[a.Neutral = 0] = "Neutral", a[a.Mystic = 1] = "Mystic", a[a.Valor = 2] = "Valor", a[a.Instinct = 3] = "Instinct"
}(PlayerTeam || (PlayerTeam = {}));
var HumanWalkEventTypes;
! function(a) {
	a[a.StartWalking = 0] = "StartWalking", a[a.DestinationReached = 1] = "DestinationReached", a[a.PokemonScanned = 2] = "PokemonScanned", a[a.AddedSnipePokemon = 3] = "AddedSnipePokemon", a[a.PokestopUpdated = 4] = "PokestopUpdated", a[a.NotEnoughtPalls = 5] = "NotEnoughtPalls", a[a.TargetedPokemon = 6] = "TargetedPokemon", a[a.ClientRequestUpdate = 7] = "ClientRequestUpdate", a[a.EncounterSnipePokemon = 8] = "EncounterSnipePokemon", a[a.QueueUpdated = 9] = "QueueUpdated"
}(HumanWalkEventTypes || (HumanWalkEventTypes = {}));
var PokemonCatchStatus;
! function(a) {
	a[a.Success = 1] = "Success", a[a.Escape = 2] = "Escape", a[a.Flee = 3] = "Flee"
}(PokemonCatchStatus || (PokemonCatchStatus = {}));
var PokemonEvolveResult;
! function(a) {
	a[a.Unset = 0] = "Unset", a[a.Success = 1] = "Success", a[a.FailedPokemonMissing = 2] = "FailedPokemonMissing", a[a.FailedInsufficientResources = 3] = "FailedInsufficientResources", a[a.FailedPokemonCannotEvolve = 4] = "FailedPokemonCannotEvolve", a[a.FailedPokemonIsDeployed = 5] = "FailedPokemonIsDeployed"
}(PokemonEvolveResult || (PokemonEvolveResult = {}));
var PokeStopStatus;
! function(a) {
	a[a.Normal = 0] = "Normal", a[a.Visited = 1] = "Visited", a[a.Lure = 2] = "Lure", a[a.VisitedLure = 3] = "VisitedLure"
}(PokeStopStatus || (PokeStopStatus = {}));
var MoveType;
! function(a) {
	a[a.None = 0] = "None", a[a.QuickMove = 1] = "QuickMove", a[a.CinematicMove = 2] = "CinematicMove", a[a.Both = 3] = "Both"
}(MoveType || (MoveType = {}));
var PokeElement;
! function(a) {
	a[a.Bug = 0] = "Bug", a[a.Grass = 1] = "Grass", a[a.Dark = 2] = "Dark", a[a.Ground = 3] = "Ground", a[a.Dragon = 4] = "Dragon", a[a.Ice = 5] = "Ice", a[a.Electric = 6] = "Electric", a[a.Normal = 7] = "Normal", a[a.Fairy = 8] = "Fairy", a[a.Poison = 9] = "Poison", a[a.Fighting = 10] = "Fighting", a[a.Psychic = 11] = "Psychic", a[a.Fire = 12] = "Fire", a[a.Rock = 13] = "Rock", a[a.Flying = 14] = "Flying", a[a.Steel = 15] = "Steel", a[a.Ghost = 16] = "Ghost", a[a.Water = 17] = "Water"
}(PokeElement || (PokeElement = {}));
var BotFamily;
! function(a) {
	a[a.Undetermined = 0] = "Undetermined", a[a.Necro = 1] = "Necro", a[a.PMB = 2] = "PMB"
}(BotFamily || (BotFamily = {}));
var BotWSClient = function() {
		function a() {
			var a = this;
			this.start = function(b) {
				a.config = b;
				var c = a.config.settingsService.settings,
					d = a.buildConnectionString(c.clientAddress, c.clientPort, c.clientUseSSL);
				a.webSocket = new WebSocket(d), a.webSocket.onopen = a.clientOnOpen, a.webSocket.onmessage = a.clientOnMessage, a.webSocket.onclose = a.clientOnClose, a.webSocket.onerror = a.clientOnError, a.running = !0
			}, this.buildConnectionString = function(a, b, c) {
				var d = c ? "wss" : "ws";
				return d + "://" + a + ":" + b
			}, this.restart = function() {
				a.restarting = !0, a.stop()
			}, this.stop = function() {
				a.running = !1, a.webSocket.close()
			}, this.clientOnOpen = function(b) {
				console.log("WebSocket connected to " + a.webSocket.url), a.verifyProfileTimeout = setTimeout(a.verifyProfileSent, 5e3)
			}, this.verifyProfileSent = function() {
				a.profileSent || (console.log("Profile event not received. Reconnecting..."), a.restart())
			}, this.clientOnClose = function(b) {
				console.log("WebSocket closed", b), clearTimeout(a.verifyProfileTimeout), a.profileSent = !1, a.running && setTimeout(function() {
					a.start(a.config)
				}, 1e3), a.restarting && (a.restarting = !1, a.start(a.config))
			}, this.clientOnError = function(a) {}, this.clientOnMessage = function(b) {
				var c = JSON.parse(b.data),
					d = Date.now();
				c.Timestamp = d;
				var e = c.$type;
				if (_.includes(e, ".ProfileEvent,")) {
					a.currentBotFamily === BotFamily.Undetermined && (_.startsWith(e, "PoGo.NecroBot.") ? a.currentBotFamily = BotFamily.Necro : _.startsWith(e, "PoGo.PokeMobBot.") && (a.currentBotFamily = BotFamily.PMB));
					var f = c.Profile;
					f.Timestamp = d, f.PlayerData.PokeCoin = a.getCurrency(c, "POKECOIN"), f.PlayerData.StarDust = a.getCurrency(c, "STARDUST"), a.profileSent = !0, _.each(a.config.eventHandlers, function(a) {
						return a.onProfile(f)
					})
				} else if (_.includes(e, ".LogEvent,")) {
					var g = c;
					_.each(a.config.eventHandlers, function(a) {
						return a.onLog(g)
					})
				} else if (_.includes(e, ".PlayerLevelUpEvent,")) {
					var h = c;
					_.each(a.config.eventHandlers, function(a) {
						return a.onPlayerLevelUp(h)
					})
				} else if (_.includes(e, ".UpdatePositionEvent,")) {
					var i = c;
					_.each(a.config.eventHandlers, function(a) {
						return a.onUpdatePosition(i)
					})
				} else if (_.includes(e, ".PokeStopListEvent,")) {
					var j = c.Forts.$values;
					_.each(j, function(a) {
						return a.Timestamp = d
					}), _.each(a.config.eventHandlers, function(a) {
						return a.onPokeStopList(j)
					})
				} else if (_.includes(e, ".FortTargetEvent,")) {
					var k = c;
					_.each(a.config.eventHandlers, function(a) {
						return a.onFortTarget(k)
					})
				} else if (_.includes(e, ".FortUsedEvent,")) {
					var l = c;
					l.ItemsList = a.parseItemString(l.Items), _.each(a.config.eventHandlers, function(a) {
						return a.onFortUsed(l)
					})
				} else if (_.includes(e, ".UseBerry,")) {
					var m = c;
					_.each(a.config.eventHandlers, function(a) {
						return a.onUseBerry(m)
					})
				} else if (_.includes(e, ".PokemonCaptureEvent,")) {
					var n = c;
					n.IsSnipe = a.currentlySniping, _.each(a.config.eventHandlers, function(a) {
						return a.onPokemonCapture(n)
					})
				} else if (_.includes(e, ".EvolveCountEvent,")) {
					var o = c;
					_.each(a.config.eventHandlers, function(a) {
						return a.onEvolveCount(o)
					})
				} else if (_.includes(e, ".PokemonEvolveEvent,")) {
					var p = c;
					_.each(a.config.eventHandlers, function(a) {
						return a.onPokemonEvolve(p)
					})
				} else if (_.includes(e, ".SnipeScanEvent,")) {
					var q = c;
					_.each(a.config.eventHandlers, function(a) {
						return a.onSnipeScan(q)
					})
				} else if (_.includes(e, ".SnipeModeEvent,")) {
					var r = c;
					a.currentlySniping = r.Active, _.each(a.config.eventHandlers, function(a) {
						return a.onSnipeMode(r)
					})
				} else if (_.includes(e, ".SnipeEvent,")) {
					var s = c;
					_.each(a.config.eventHandlers, function(a) {
						return a.onSnipeMessage(s)
					})
				} else if (_.includes(e, ".UpdateEvent,")) {
					var t = c;
					_.each(a.config.eventHandlers, function(a) {
						return a.onUpdate(t)
					})
				} else if (_.includes(e, ".WarnEvent,")) {
					var u = c;
					_.each(a.config.eventHandlers, function(a) {
						return a.onWarn(u)
					})
				} else if (_.includes(e, ".EggHatchedEvent,")) {
					var v = c;
					_.each(a.config.eventHandlers, function(a) {
						return a.onEggHatched(v)
					})
				} else if (_.includes(e, ".EggIncubatorStatusEvent,")) {
					var w = c;
					_.each(a.config.eventHandlers, function(a) {
						return a.onIncubatorStatus(w)
					})
				} else if (_.includes(e, ".ItemRecycledEvent,")) {
					var x = c;
					_.each(a.config.eventHandlers, function(a) {
						return a.onItemRecycle(x)
					})
				} else if (_.includes(e, ".TransferPokemonEvent,")) {
					var y = c;
					_.each(a.config.eventHandlers, function(a) {
						return a.onPokemonTransfer(y)
					})
				} else if (_.includes(e, ".ConfigResponce,")) {
					var z = c.Data;
					z.Timestamp = d, _.each(a.config.eventHandlers, function(a) {
						return a.onGetConfig(z)
					})
				} else if (_.includes(e, ".PokemonListEvent,")) {
					var A = c.PokemonList.$values,
						B = {
							Pokemons: [],
							Timestamp: d
						};
					_.each(A, function(a) {
						var b = a.Item1;
						b.Perfection = a.Item2, b.FamilyCandies = a.Item3, b.Level = a.Item4, B.Pokemons.push(b)
					}), _.each(a.config.eventHandlers, function(a) {
						return a.onPokemonList(B)
					})
				} else if (_.includes(e, ".PokemonListResponce,")) {
					var A = c.Data.$values,
						C = {
							Pokemons: [],
							Timestamp: d
						};
					_.each(A, function(a) {
						var b = a.Base;
						b.Perfection = a.IvPerfection, b.FamilyCandies = a.FamilyCandies, b.Level = a.Level, C.Pokemons.push(b)
					}), _.each(a.config.eventHandlers, function(a) {
						return a.onPokemonList(C)
					})
				} else if (_.includes(e, ".EggsListEvent,")) {
					var D = c;
					D.Incubators = c.Incubators.$values, D.UnusedEggs = c.UnusedEggs.$values, D.Timestamp = d, _.each(a.config.eventHandlers, function(a) {
						return a.onEggList(D)
					})
				} else if (_.includes(e, ".EggListResponce,")) {
					var E = c.Data;
					E.Incubators = c.Data.Incubators.$values, E.UnusedEggs = c.Data.UnusedEggs.$values, E.Timestamp = d, _.each(a.config.eventHandlers, function(a) {
						return a.onEggList(E)
					})
				} else if (_.includes(e, ".InventoryListEvent,")) {
					var F = {
						Items: c.Items.$values,
						Timestamp: d
					};
					_.each(a.config.eventHandlers, function(a) {
						return a.onInventoryList(F)
					})
				} else if (_.includes(e, ".ItemListResponce,")) {
					var G = {
						Items: c.Data.$values,
						Timestamp: d
					};
					_.each(a.config.eventHandlers, function(a) {
						return a.onInventoryList(G)
					})
				} else if (_.includes(e, ".HumanWalkSnipeEvent")) {
					var H = c;
					if (H.Pokemons) {
						var I = {
							Pokemons: H.Pokemons.$values
						};
						_.each(a.config.eventHandlers, function(a) {
							return a.onHumanSnipeList(I)
						})
					}
					switch (H.Type) {
						case HumanWalkEventTypes.StartWalking:
							var J = {
								Latitude: H.Latitude,
								Longitude: H.Longitude,
								PokemonId: H.PokemonId,
								Timestamp: H.Timestamp,
								Distance: H.Distance,
								Estimated: H.Estimate,
								Rarity: H.Rarity
							};
							_.each(a.config.eventHandlers, function(a) {
								return a.onHumanSnipeStart(J)
							});
							break;
						case HumanWalkEventTypes.DestinationReached:
							var K = {
								UniqueId: H.UniqueId,
								PauseDuration: H.PauseDuration,
								Timestamp: H.Timestamp
							};
							_.each(a.config.eventHandlers, function(a) {
								return a.onHumanSnipeReachedDestination(K)
							})
					}
				} else if (_.includes(e, ".PlayerStatsEvent,") || _.includes(e, ".TrainerProfileResponce,")) {
					var L = void 0;
					L = _.includes(e, ".PlayerStatsEvent,") ? c.PlayerStats.$values[0] : c.Data.Stats;
					var M = L;
					M.Experience = parseInt(L.Experience), M.NextLevelXp = parseInt(L.NextLevelXp), M.PrevLevelXp = parseInt(L.PrevLevelXp), M.PokemonCaughtByType = L.PokemonCaughtByType.$values, M.Timestamp = d, _.each(a.config.eventHandlers, function(a) {
						return a.onPlayerStats(M)
					})
				} else if (_.includes(e, ".UpgradePokemonEvent")) {
					var N = c;
					_.each(a.config.eventHandlers, function(a) {
						return a.onPokemonUpgraded(N)
					}), _.each(a.config.eventHandlers, function(a) {
						return a.onPokemonUpgraded(N)
					})
				} else if (_.includes(e, ".HumanWalkSnipeEvent")) {
					var H = c;
					if (H.Pokemons) {
						var O = {
							Pokemons: H.Pokemons.$values
						};
						_.each(a.config.eventHandlers, function(a) {
							return a.onHumanSnipeList(O)
						})
					}
					switch (H.Type) {
						case HumanWalkEventTypes.StartWalking:
							var P = {
								Latitude: H.Latitude,
								Longitude: H.Longitude,
								PokemonId: H.PokemonId,
								Timestamp: H.Timestamp,
								Distance: H.Distance,
								Estimated: H.Estimate,
								Rarity: H.Rarity
							};
							console.log(P), _.each(a.config.eventHandlers, function(a) {
								return a.onHumanSnipeStart(P)
							});
							break;
						case HumanWalkEventTypes.DestinationReached:
							var Q = {
								UniqueId: H.UniqueId,
								PauseDuration: H.PauseDuration,
								Timestamp: H.Timestamp
							};
							_.each(a.config.eventHandlers, function(a) {
								return a.onHumanSnipeReachedDestination(Q)
							})
					}
				} else _.each(a.config.eventHandlers, function(a) {
					a.onUnknownEvent && a.onUnknownEvent(c)
				})
			}, this.sendGetConfigRequest = function() {
				var b = {
					Command: "GetConfig"
				};
				_.each(a.config.eventHandlers, function(a) {
					return a.onSendGetConfigRequest(b)
				}), a.currentBotFamily !== BotFamily.Undetermined && a.currentBotFamily !== BotFamily.Necro || a.sendRequest(b)
			}, this.sendPokemonListRequest = function() {
				var b = {
						Command: "PokemonList"
					},
					c = {
						Command: "GetPokemonList"
					};
				_.each(a.config.eventHandlers, function(a) {
					return a.onSendPokemonListRequest(b)
				}), a.currentBotFamily !== BotFamily.Undetermined && a.currentBotFamily !== BotFamily.PMB || a.sendRequest(b), a.currentBotFamily !== BotFamily.Undetermined && a.currentBotFamily !== BotFamily.Necro || a.sendRequest(c)
			}, this.sendEggsListRequest = function() {
				var b = {
						Command: "EggsList"
					},
					c = {
						Command: "GetEggList"
					};
				_.each(a.config.eventHandlers, function(a) {
					return a.onSendEggsListRequest(b)
				}), a.currentBotFamily !== BotFamily.Undetermined && a.currentBotFamily !== BotFamily.PMB || a.sendRequest(b), a.currentBotFamily !== BotFamily.Undetermined && a.currentBotFamily !== BotFamily.Necro || a.sendRequest(c)
			}, this.sendInventoryListRequest = function() {
				var b = {
						Command: "InventoryList"
					},
					c = {
						Command: "GetItemsList"
					};
				_.each(a.config.eventHandlers, function(a) {
					return a.onSendInventoryListRequest(b)
				}), a.currentBotFamily !== BotFamily.Undetermined && a.currentBotFamily !== BotFamily.PMB || a.sendRequest(b), a.currentBotFamily !== BotFamily.Undetermined && a.currentBotFamily !== BotFamily.Necro || a.sendRequest(c)
			}, this.sendRecycleRequest = function(b, c) {
				var d = {
					Command: "DropItem",
					ItemId: b,
					Count: c
				};
				_.each(a.config.eventHandlers, function(a) {
					return a.onSendRecycleRequest(d)
				}), a.sendRequest(d)
			}, this.sendPlayerStatsRequest = function() {
				var b = {
						Command: "PlayerStats"
					},
					c = {
						Command: "GetTrainerProfile"
					};
				_.each(a.config.eventHandlers, function(a) {
					return a.onSendPlayerStatsRequest(b)
				}), a.currentBotFamily !== BotFamily.Undetermined && a.currentBotFamily !== BotFamily.PMB || a.sendRequest(b), a.currentBotFamily !== BotFamily.Undetermined && a.currentBotFamily !== BotFamily.Necro || a.sendRequest(c)
			}, this.sendGetPokemonSettingsRequest = function() {
				var b = {
					Command: "GetPokemonSettings"
				};
				_.each(a.config.eventHandlers, function(a) {
					return a.onSendGetPokemonSettingsRequest(b)
				}), a.sendRequest(b)
			}, this.sendTransferPokemonRequest = function(b) {
				var c = {
					Command: "TransferPokemon",
					Data: b,
					PokemonId: b
				};
				_.each(a.config.eventHandlers, function(a) {
					return a.onSendTransferPokemonRequest(c)
				}), a.sendRequest(c)
			}, this.sendEvolvePokemonRequest = function(b) {
				var c = {
					Command: "EvolvePokemon",
					Data: b,
					PokemonId: b
				};
				_.each(a.config.eventHandlers, function(a) {
					return a.onSendEvolvePokemonRequest(c)
				}), a.sendRequest(c)
			}, this.sendUpgradePokemonRequest = function(b, c) {
				var d = {
					Command: "UpgradePokemon",
					Data: b,
					PokemonId: b,
					Max: c
				};
				_.each(a.config.eventHandlers, function(a) {
					return a.onSendUpgradePokemonRequest(d)
				}), a.sendRequest(d)
			}, this.sendRequest = function(b) {
				console.log("%c>>> OUTGOING:", "color: red", b);
				var c = JSON.stringify(b);
				a.webSocket.send(c)
			}, this.sendPokemonSnipeListUpdateRequest = function() {
				var b = {
					Command: "PokemonSnipeList"
				};
				_.each(a.config.eventHandlers, function(a) {
					return a.onSendHumanSnipPokemonListUpdateRequest(b)
				}), a.currentBotFamily !== BotFamily.Undetermined && a.currentBotFamily !== BotFamily.Necro || a.sendRequest(b)
			}, this.sendHumanSnipePokemonRemoveRequest = function(b) {
				var c = {
					Command: "RemovePokemon",
					Data: b,
					PokemonId: b,
					Id: b
				};
				_.each(a.config.eventHandlers, function(a) {
					return a.onSendHumanSnipePokemonRemoveRequest(c)
				}), a.sendRequest(c)
			}, this.sendHumanSnipePokemonSnipeRequest = function(b) {
				var c = {
					Command: "SnipePokemon",
					Data: b,
					PokemonId: b,
					Id: b
				};
				_.each(a.config.eventHandlers, function(a) {
					return a.onSendHumanSnipePokemonRequest(c)
				}), a.sendRequest(c)
			}, this.sendHumanSnipPokemonListUpdateRequest = function() {
				var b = {
					Command: "PokemonSnipeList"
				};
				_.each(a.config.eventHandlers, function(a) {
					return a.onSendHumanSnipPokemonListUpdateRequest(b)
				}), a.currentBotFamily !== BotFamily.Undetermined && a.currentBotFamily !== BotFamily.Necro || a.sendRequest(b)
			}, this.sendHumanSnipPokemonRemoveRequest = function(b) {
				var c = {
					Command: "RemovePokemon",
					Data: b,
					PokemonId: b,
					Id: b
				};
				_.each(a.config.eventHandlers, function(a) {
					return a.onSendHumanSnipePokemonRemoveRequest(c)
				}), a.sendRequest(c)
			}, this.sendHumanSnipPokemonSnipeRequest = function(b) {
				var c = {
					Command: "SnipePokemon",
					Data: b,
					PokemonId: b,
					Id: b
				};
				_.each(a.config.eventHandlers, function(a) {
					return a.onSendHumanSnipePokemonRequest(c)
				}), a.sendRequest(c)
			}, this.sendMoveToRequest = function(b, c, d, e) {
				var f = {
					Command: "SetMoveToTarget",
					Latitude: b,
					Longitude: c,
					UseTeleport: d,
					FortId: e
				};
				_.each(a.config.eventHandlers, function(a) {
					return a.onMoveToTargetRequest(f)
				}), a.sendRequest(f)
			}, this.parseItemString = function(a) {
				for (var b = /(\d+) x (.+?)(?:,|$)/g, c = [];;) {
					var d = b.exec(a);
					if (null === d) break;
					c.push({
						Count: parseInt(d[1]),
						Name: d[2]
					})
				}
				return c
			}, this.getCurrency = function(a, b) {
				var c = a.Profile.PlayerData.Currencies.$values,
					d = _.find(c, function(a) {
						return a.Name === b
					});
				return d.Amount
			}, this.currentlySniping = !1, this.running = !1, this.profileSent = !1, this.currentBotFamily = BotFamily.Undetermined
		}
		return a
	}(),
	LocalStorageDataStorage = function() {
		function a() {
			this.setData = function(a, b) {
				var c = JSON.stringify(b);
				localStorage.setItem(a, c)
			}, this.getData = function(a) {
				var b = localStorage.getItem(a);
				if (!b) return null;
				try {
					var c = JSON.parse(b);
					return c
				} catch (a) {
					return null
				}
			}
		}
		return a
	}(),
	FortCacheService = function() {
		function a(a) {
			var b = this;
			this.addFort = function(a, c) {
				var d = {
						Id: a.Id,
						Latitude: a.Latitude,
						Longitude: a.Longitude,
						Name: a.Name,
						Type: a.Type
					},
					e = b.cache[d.Id];
				b.cache[d.Id] = d, e && e.Name && (c && (a.Name = e.Name), d.Name = e.Name), b.saveCache()
			}, this.saveCache = function() {
				b.dataStorage.setData("fortCache", b.cache)
			}, this.loadCache = function() {
				b.cache = b.dataStorage.getData("fortCache") || {}
			}, this.setName = function(a, c) {
				var d = b.cache[a];
				d && (d.Name = c), b.saveCache()
			}, this.getCached = function() {
				return b.cache
			}, this.dataStorage = a, this.loadCache()
		}
		return a
	}(),
	DefaultSettings = function() {
		function a() {}
		return Object.defineProperty(a, "settings", {
			get: function() {
				return {
					mapProvider: MapProvider.GMaps,
					mapFolllowPlayer: !0,
					mapClearing: 0,
					mapGoogleApiKey: "AIzaSyBjrq_CCDjmgNLJZnLBrMRgIxTJrgW_LaY",
					mapOsmApiKey: "",
					clientAddress: "127.0.0.1",
					clientPort: 14252,
					clientUseSSL: !1,
					notificationsJournal: {
						pokestopUsed: !0,
						pokemonCapture: !0,
						pokemonSnipe: !0,
						pokemonEvolved: !0,
						eggHatched: !0,
						incubatorStatus: !0,
						itemRecycle: !0,
						pokemonTransfer: !0
					},
					notificationsDesktop: {
						pokestopUsed: !1,
						pokemonCapture: !1,
						pokemonSnipe: !1,
						pokemonEvolved: !1,
						eggHatched: !1,
						incubatorStatus: !1,
						itemRecycle: !1,
						pokemonTransfer: !1
					},
					notificationsToast: {
						pokestopUsed: !1,
						pokemonCapture: !1,
						pokemonSnipe: !1,
						pokemonEvolved: !1,
						eggHatched: !1,
						incubatorStatus: !1,
						itemRecycle: !1,
						pokemonTransfer: !1
					},
					notificationsAudio: {
						pokestopUsed: !1,
						pokemonCapture: !1,
						pokemonSnipe: !1,
						pokemonEvolved: !1,
						eggHatched: !1,
						incubatorStatus: !1,
						itemRecycle: !1,
						pokemonTransfer: !1
					},
					notificationsJournalClearingAnimation: !0
				}
			},
			enumerable: !0,
			configurable: !0
		}), a
	}(),
	SettingsService = function() {
		function a(a) {
			var b = this;
			this.settingsKey = "settings", this.load = function() {
				var a = b.dataStorage.getData(b.settingsKey);
				return null === a ? void b.apply(DefaultSettings.settings) : void b.apply(a)
			}, this.cloneSettings = function(a) {
				return b.mergeSettings([a])
			}, this.mergeSettings = function(a) {
				var c = {
						pokestopUsed: b.coalesceMap(a, function(a) {
							return a.notificationsJournal && a.notificationsJournal.pokestopUsed
						}),
						pokemonCapture: b.coalesceMap(a, function(a) {
							return a.notificationsJournal && a.notificationsJournal.pokemonCapture
						}),
						pokemonSnipe: b.coalesceMap(a, function(a) {
							return a.notificationsJournal && a.notificationsJournal.pokemonSnipe
						}),
						pokemonEvolved: b.coalesceMap(a, function(a) {
							return a.notificationsJournal && a.notificationsJournal.pokemonEvolved
						}),
						eggHatched: b.coalesceMap(a, function(a) {
							return a.notificationsJournal && a.notificationsJournal.eggHatched
						}),
						incubatorStatus: b.coalesceMap(a, function(a) {
							return a.notificationsJournal && a.notificationsJournal.incubatorStatus
						}),
						itemRecycle: b.coalesceMap(a, function(a) {
							return a.notificationsJournal && a.notificationsJournal.itemRecycle
						}),
						pokemonTransfer: b.coalesceMap(a, function(a) {
							return a.notificationsJournal && a.notificationsJournal.pokemonTransfer
						})
					},
					d = {
						pokestopUsed: b.coalesceMap(a, function(a) {
							return a.notificationsDesktop && a.notificationsDesktop.pokestopUsed
						}),
						pokemonCapture: b.coalesceMap(a, function(a) {
							return a.notificationsDesktop && a.notificationsDesktop.pokemonCapture
						}),
						pokemonSnipe: b.coalesceMap(a, function(a) {
							return a.notificationsDesktop && a.notificationsDesktop.pokemonSnipe
						}),
						pokemonEvolved: b.coalesceMap(a, function(a) {
							return a.notificationsDesktop && a.notificationsDesktop.pokemonEvolved
						}),
						eggHatched: b.coalesceMap(a, function(a) {
							return a.notificationsDesktop && a.notificationsDesktop.eggHatched
						}),
						incubatorStatus: b.coalesceMap(a, function(a) {
							return a.notificationsDesktop && a.notificationsDesktop.incubatorStatus
						}),
						itemRecycle: b.coalesceMap(a, function(a) {
							return a.notificationsDesktop && a.notificationsDesktop.itemRecycle
						}),
						pokemonTransfer: b.coalesceMap(a, function(a) {
							return a.notificationsDesktop && a.notificationsDesktop.pokemonTransfer
						})
					},
					e = {
						pokestopUsed: b.coalesceMap(a, function(a) {
							return a.notificationsToast && a.notificationsToast.pokestopUsed
						}),
						pokemonCapture: b.coalesceMap(a, function(a) {
							return a.notificationsToast && a.notificationsToast.pokemonCapture
						}),
						pokemonSnipe: b.coalesceMap(a, function(a) {
							return a.notificationsToast && a.notificationsToast.pokemonSnipe
						}),
						pokemonEvolved: b.coalesceMap(a, function(a) {
							return a.notificationsToast && a.notificationsToast.pokemonEvolved
						}),
						eggHatched: b.coalesceMap(a, function(a) {
							return a.notificationsToast && a.notificationsToast.eggHatched
						}),
						incubatorStatus: b.coalesceMap(a, function(a) {
							return a.notificationsToast && a.notificationsToast.incubatorStatus
						}),
						itemRecycle: b.coalesceMap(a, function(a) {
							return a.notificationsToast && a.notificationsToast.itemRecycle
						}),
						pokemonTransfer: b.coalesceMap(a, function(a) {
							return a.notificationsToast && a.notificationsToast.pokemonTransfer
						})
					},
					f = {
						pokestopUsed: b.coalesceMap(a, function(a) {
							return a.notificationsAudio && a.notificationsAudio.pokestopUsed
						}),
						pokemonCapture: b.coalesceMap(a, function(a) {
							return a.notificationsAudio && a.notificationsAudio.pokemonCapture
						}),
						pokemonSnipe: b.coalesceMap(a, function(a) {
							return a.notificationsAudio && a.notificationsAudio.pokemonSnipe
						}),
						pokemonEvolved: b.coalesceMap(a, function(a) {
							return a.notificationsAudio && a.notificationsAudio.pokemonEvolved
						}),
						eggHatched: b.coalesceMap(a, function(a) {
							return a.notificationsAudio && a.notificationsAudio.eggHatched
						}),
						incubatorStatus: b.coalesceMap(a, function(a) {
							return a.notificationsAudio && a.notificationsAudio.incubatorStatus
						}),
						itemRecycle: b.coalesceMap(a, function(a) {
							return a.notificationsAudio && a.notificationsAudio.itemRecycle
						}),
						pokemonTransfer: b.coalesceMap(a, function(a) {
							return a.notificationsAudio && a.notificationsAudio.pokemonTransfer
						})
					};
				return {
					mapProvider: b.coalesceMap(a, function(a) {
						return a.mapProvider
					}),
					mapFolllowPlayer: b.coalesceMap(a, function(a) {
						return a.mapFolllowPlayer
					}),
					mapClearing: b.coalesceMap(a, function(a) {
						return a.mapClearing
					}),
					mapGoogleApiKey: b.coalesceMap(a, function(a) {
						return a.mapGoogleApiKey
					}),
					mapOsmApiKey: b.coalesceMap(a, function(a) {
						return a.mapOsmApiKey
					}),
					clientAddress: b.coalesceMap(a, function(a) {
						return a.clientAddress
					}),
					clientPort: b.coalesceMap(a, function(a) {
						return a.clientPort
					}),
					clientUseSSL: b.coalesceMap(a, function(a) {
						return a.clientUseSSL
					}),
					notificationsJournal: c,
					notificationsDesktop: d,
					notificationsToast: e,
					notificationsAudio: f,
					notificationsJournalClearingAnimation: b.coalesceMap(a, function(a) {
						return a.notificationsJournalClearingAnimation
					})
				}
			}, this.coalesce = function(a) {
				for (var b = 0; b < a.length; b++)
					if ("undefined" != typeof a[b]) return a[b];
				throw "No value found"
			}, this.apply = function(a) {
				var c = b.currentSettings,
					d = DefaultSettings.settings,
					e = b.mergeSettings([a, d]);
				b.currentSettings = e;
				for (var f = 0; f < b.subscribers.length; f++) {
					var g = b.cloneSettings(e),
						h = b.cloneSettings(c);
					b.subscribers[f](g, h)
				}
				b.save()
			}, this.save = function() {
				b.dataStorage.setData(b.settingsKey, b.currentSettings)
			}, this.dataStorage = a, this.subscribers = []
		}
		return Object.defineProperty(a.prototype, "settings", {
			get: function() {
				return this.cloneSettings(this.currentSettings)
			},
			enumerable: !0,
			configurable: !0
		}), a.prototype.coalesceMap = function(a, b) {
			var c = _.map(a, b);
			return this.coalesce(c)
		}, a.prototype.subscribe = function(a) {
			this.subscribers.push(a)
		}, a.prototype.settingsEqual = function(a, b) {
			var c = !0;
			return c = c && a.mapProvider === b.mapProvider, c = c && a.mapFolllowPlayer === b.mapFolllowPlayer, c = c && a.mapClearing === b.mapClearing, c = c && a.mapGoogleApiKey === b.mapGoogleApiKey, c = c && a.mapOsmApiKey === b.mapOsmApiKey, c = c && a.clientAddress === b.clientAddress, c = c && a.clientPort === b.clientPort, c = c && a.clientUseSSL === b.clientUseSSL, c = c && this.notificationSettingsEqual(a.notificationsJournal, b.notificationsJournal), c = c && this.notificationSettingsEqual(a.notificationsDesktop, b.notificationsDesktop), c = c && this.notificationSettingsEqual(a.notificationsToast, b.notificationsToast), c = c && this.notificationSettingsEqual(a.notificationsAudio, b.notificationsAudio), c = c && a.notificationsJournalClearingAnimation === b.notificationsJournalClearingAnimation
		}, a.prototype.notificationSettingsEqual = function(a, b) {
			var c = !0;
			return c = c && a.pokestopUsed === b.pokestopUsed, c = c && a.pokemonCapture === b.pokemonCapture, c = c && a.pokemonSnipe === b.pokemonSnipe, c = c && a.pokemonEvolved === b.pokemonEvolved, c = c && a.eggHatched === b.eggHatched, c = c && a.incubatorStatus === b.incubatorStatus, c = c && a.itemRecycle === b.itemRecycle, c = c && a.pokemonTransfer === b.pokemonTransfer
		}, a
	}(),
	Language;
! function(a) {
	a[a.English = 0] = "English", a[a.German = 1] = "German"
}(Language || (Language = {}));
var TranslationService = function() {
		function a(a) {
			var b = this;
			void 0 === a && (a = Language.English), this.getCurrentLanguage = function() {
				return b.currentLanguage
			}, this.setCurrentLanguage = function(a) {
				switch (b.currentLanguage = a, a) {
					case Language.English:
						b.translation = new EnglishTranslation;
						break;
					case Language.German:
						b.translation = new GermanTranslation;
						break;
					default:
						throw "Unknown language"
				}
			}, this.setCurrentLanguage(a)
		}
		return a
	}(),
	EnglishTranslation = function() {
		function a() {
			this.pokemonNames = ["MissingNo", "Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise", "Caterpie", "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot", "Rattata", "Raticate", "Spearow", "Fearow", "Ekans", "Arbok", "Pikachu", "Raichu", "Sandshrew", "Sandslash", "Nidoran♀", "Nidorina", "Nidoqueen", "Nidoran♂", "Nidorino", "Nidoking", "Clefairy", "Clefable", "Vulpix", "Ninetales", "Jigglypuff", "Wigglytuff", "Zubat", "Golbat", "Oddish", "Gloom", "Vileplume", "Paras", "Parasect", "Venonat", "Venomoth", "Diglett", "Dugtrio", "Meowth", "Persian", "Psyduck", "Golduck", "Mankey", "Primeape", "Growlithe", "Arcanine", "Poliwag", "Poliwhirl", "Poliwrath", "Abra", "Kadabra", "Alakazam", "Machop", "Machoke", "Machamp", "Bellsprout", "Weepinbell", "Victreebel", "Tentacool", "Tentacruel", "Geodude", "Graveler", "Golem", "Ponyta", "Rapidash", "Slowpoke", "Slowbro", "Magnemite", "Magneton", "Farfetch'd", "Doduo", "Dodrio", "Seel", "Dewgong", "Grimer", "Muk", "Shellder", "Cloyster", "Gastly", "Haunter", "Gengar", "Onix", "Drowzee", "Hypno", "Krabby", "Kingler", "Voltorb", "Electrode", "Exeggcute", "Exeggutor", "Cubone", "Marowak", "Hitmonlee", "Hitmonchan", "Lickitung", "Koffing", "Weezing", "Rhyhorn", "Rhydon", "Chansey", "Tangela", "Kangaskhan", "Horsea", "Seadra", "Goldeen", "Seaking", "Staryu", "Starmie", "Mr. Mime", "Scyther", "Jynx", "Electabuzz", "Magmar", "Pinsir", "Tauros", "Magikarp", "Gyarados", "Lapras", "Ditto", "Eevee", "Vaporeon", "Jolteon", "Flareon", "Porygon", "Omanyte", "Omastar", "Kabuto", "Kabutops", "Aerodactyl", "Snorlax", "Articuno", "Zapdos", "Moltres", "Dratini", "Dragonair", "Dragonite", "Mewtwo", "Mew", "Chikorita", "Bayleef", "Meganium", "Cyndaquil", "Quilava", "Typhlosion", "Totodile", "Croconaw", "Feraligatr", "Sentret", "Furret", "Hoothoot", "Noctowl", "Ledyba", "Ledian", "Spinarak", "Ariados", "Crobat", "Chinchou", "Lanturn", "Pichu", "Cleffa", "Igglybuff", "Togepi", "Togetic", "Natu", "Xatu", "Mareep", "Flaaffy", "Ampharos", "Bellossom", "Marill", "Azumarill", "Sudowoodo", "Politoed", "Hoppip", "Skiploom", "Jumpluff", "Aipom", "Sunkern", "Sunflora", "Yanma", "Wooper", "Quagsire", "Espeon", "Umbreon", "Murkrow", "Slowking", "Misdreavus", "Unown", "Wobbuffet", "Girafarig", "Pineco", "Forretress", "Dunsparce", "Gligar", "Steelix", "Snubbull", "Granbull", "Qwilfish", "Scizor", "Shuckle", "Heracross", "Sneasel", "Teddiursa", "Ursaring", "Slugma", "Magcargo", "Swinub", "Piloswine", "Corsola", "Remoraid", "Octillery", "Delibird", "Mantine", "Skarmory", "Houndour", "Houndoom", "Kingdra", "Phanpy", "Donphan", "Porygon2", "Stantler", "Smeargle", "Tyrogue", "Hitmontop", "Smoochum", "Elekid", "Magby", "Miltank", "Blissey", "Raikou", "Entei", "Suicune", "Larvitar", "Pupitar", "Tyranitar", "Lugia", "Ho-Oh", "Celebi", "Treecko", "Grovyle", "Sceptile", "Torchic", "Combusken", "Blaziken", "Mudkip", "Marshtomp", "Swampert", "Poochyena", "Mightyena", "Zigzagoon", "Linoone", "Wurmple", "Silcoon", "Beautifly", "Cascoon", "Dustox", "Lotad", "Lombre", "Ludicolo", "Seedot", "Nuzleaf", "Shiftry", "Taillow", "Swellow", "Wingull", "Pelipper", "Ralts", "Kirlia", "Gardevoir", "Surskit", "Masquerain", "Shroomish", "Breloom", "Slakoth", "Vigoroth", "Slaking", "Nincada", "Ninjask", "Shedinja", "Whismur", "Loudred", "Exploud", "Makuhita", "Hariyama", "Azurill", "Nosepass", "Skitty", "Delcatty", "Sableye", "Mawile", "Aron", "Lairon", "Aggron", "Meditite", "Medicham", "Electrike", "Manectric", "Plusle", "Minun", "Volbeat", "Illumise", "Roselia", "Gulpin", "Swalot", "Carvanha", "Sharpedo", "Wailmer", "Wailord", "Numel", "Camerupt", "Torkoal", "Spoink", "Grumpig", "Spinda", "Trapinch", "Vibrava", "Flygon", "Cacnea", "Cacturne", "Swablu", "Altaria", "Zangoose", "Seviper", "Lunatone", "Solrock", "Barboach", "Whiscash", "Corphish", "Crawdaunt", "Baltoy", "Claydol", "Lileep", "Cradily", "Anorith", "Armaldo", "Feebas", "Milotic", "Castform", "Kecleon", "Shuppet", "Banette", "Duskull", "Dusclops", "Tropius", "Chimecho", "Absol", "Wynaut", "Snorunt", "Glalie", "Spheal", "Sealeo", "Walrein", "Clamperl", "Huntail", "Gorebyss", "Relicanth", "Luvdisc", "Bagon", "Shelgon", "Salamence", "Beldum", "Metang", "Metagross", "Regirock", "Regice", "Registeel", "Latias", "Latios", "Kyogre", "Groudon", "Rayquaza", "Jirachi", "Deoxys", "Turtwig", "Grotle", "Torterra", "Chimchar", "Monferno", "Infernape", "Piplup", "Prinplup", "Empoleon", "Starly", "Staravia", "Staraptor", "Bidoof", "Bibarel", "Kricketot", "Kricketune", "Shinx", "Luxio", "Luxray", "Budew", "Roserade", "Cranidos", "Rampardos", "Shieldon", "Bastiodon", "Burmy", "Wormadam", "Mothim", "Combee", "Vespiquen", "Pachirisu", "Buizel", "Floatzel", "Cherubi", "Cherrim", "Shellos", "Gastrodon", "Ambipom", "Drifloon", "Drifblim", "Buneary", "Lopunny", "Mismagius", "Honchkrow", "Glameow", "Purugly", "Chingling", "Stunky", "Skuntank", "Bronzor", "Bronzong", "Bonsly", "Mime Jr.", "Happiny", "Chatot", "Spiritomb", "Gible", "Gabite", "Garchomp", "Munchlax", "Riolu", "Lucario", "Hippopotas", "Hippowdon", "Skorupi", "Drapion", "Croagunk", "Toxicroak", "Carnivine", "Finneon", "Lumineon", "Mantyke", "Snover", "Abomasnow", "Weavile", "Magnezone", "Lickilicky", "Rhyperior", "Tangrowth", "Electivire", "Magmortar", "Togekiss", "Yanmega", "Leafeon", "Glaceon", "Gliscor", "Mamoswine", "Porygon-Z", "Gallade", "Probopass", "Dusknoir", "Froslass", "Rotom", "Uxie", "Mesprit", "Azelf", "Dialga", "Palkia", "Heatran", "Regigigas", "Giratina", "Cresselia", "Phione", "Manaphy", "Darkrai", "Shaymin", "Arceus", "Victini", "Snivy", "Servine", "Serperior", "Tepig", "Pignite", "Emboar", "Oshawott", "Dewott", "Samurott", "Patrat", "Watchog", "Lillipup", "Herdier", "Stoutland", "Purrloin", "Liepard", "Pansage", "Simisage", "Pansear", "Simisear", "Panpour", "Simipour", "Munna", "Musharna", "Pidove", "Tranquill", "Unfezant", "Blitzle", "Zebstrika", "Roggenrola", "Boldore", "Gigalith", "Woobat", "Swoobat", "Drilbur", "Excadrill", "Audino", "Timburr", "Gurdurr", "Conkeldurr", "Tympole", "Palpitoad", "Seismitoad", "Throh", "Sawk", "Sewaddle", "Swadloon", "Leavanny", "Venipede", "Whirlipede", "Scolipede", "Cottonee", "Whimsicott", "Petilil", "Lilligant", "Basculin", "Sandile", "Krokorok", "Krookodile", "Darumaka", "Darmanitan", "Maractus", "Dwebble", "Crustle", "Scraggy", "Scrafty", "Sigilyph", "Yamask", "Cofagrigus", "Tirtouga", "Carracosta", "Archen", "Archeops", "Trubbish", "Garbodor", "Zorua", "Zoroark", "Minccino", "Cinccino", "Gothita", "Gothorita", "Gothitelle", "Solosis", "Duosion", "Reuniclus", "Ducklett", "Swanna", "Vanillite", "Vanillish", "Vanilluxe", "Deerling", "Sawsbuck", "Emolga", "Karrablast", "Escavalier", "Foongus", "Amoonguss", "Frillish", "Jellicent", "Alomomola", "Joltik", "Galvantula", "Ferroseed", "Ferrothorn", "Klink", "Klang", "Klinklang", "Tynamo", "Eelektrik", "Eelektross", "Elgyem", "Beheeyem", "Litwick", "Lampent", "Chandelure", "Axew", "Fraxure", "Haxorus", "Cubchoo", "Beartic", "Cryogonal", "Shelmet", "Accelgor", "Stunfisk", "Mienfoo", "Mienshao", "Druddigon", "Golett", "Golurk", "Pawniard", "Bisharp", "Bouffalant", "Rufflet", "Braviary", "Vullaby", "Mandibuzz", "Heatmor", "Durant", "Deino", "Zweilous", "Hydreigon", "Larvesta", "Volcarona", "Cobalion", "Terrakion", "Virizion", "Tornadus", "Thundurus", "Reshiram", "Zekrom", "Landorus", "Kyurem", "Keldeo", "Meloetta", "Genesect", "Chespin", "Quilladin", "Chesnaught", "Fennekin", "Braixen", "Delphox", "Froakie", "Frogadier", "Greninja", "Bunnelby", "Diggersby", "Fletchling", "Fletchinder", "Talonflame", "Scatterbug", "Spewpa", "Vivillon", "Litleo", "Pyroar", "Flabébé", "Floette", "Florges", "Skiddo", "Gogoat", "Pancham", "Pangoro", "Furfrou", "Espurr", "Meowstic", "Honedge", "Doublade", "Aegislash", "Spritzee", "Aromatisse", "Swirlix", "Slurpuff", "Inkay", "Malamar", "Binacle", "Barbaracle", "Skrelp", "Dragalge", "Clauncher", "Clawitzer", "Helioptile", "Heliolisk", "Tyrunt", "Tyrantrum", "Amaura", "Aurorus", "Sylveon", "Hawlucha", "Dedenne", "Carbink", "Goomy", "Sliggoo", "Goodra", "Klefki", "Phantump", "Trevenant", "Pumpkaboo", "Gourgeist", "Bergmite", "Avalugg", "Noibat", "Noivern", "Xerneas", "Yveltal", "Zygarde", "Diancie", "Hoopa", "Volcanion"], this.eventTypes = {
					example: "example",
					pokestop: "pokestop",
					catch: "catch",
					snipe: "snipe",
					evolve: "evolve",
					recycle: "recycle",
					transfer: "transfer",
					"incubator-status": "incubator",
					"egg-hatched": "hatched"
				}, this.itemNames = [], this.itemNames[1] = "Pokeball", this.itemNames[2] = "Greatball", this.itemNames[3] = "Ultraball", this.itemNames[4] = "Masterball", this.itemNames[101] = "Potion", this.itemNames[102] = "Super Potion", this.itemNames[103] = "Hyper Potion", this.itemNames[104] = "Max Potion", this.itemNames[201] = "Revive", this.itemNames[202] = "Max Revive", this.itemNames[701] = "Razzberry", this.pokemonTypes = [], this.pokemonTypes[PokeElement.Bug] = "Bug", this.pokemonTypes[PokeElement.Grass] = "Grass", this.pokemonTypes[PokeElement.Dark] = "Dark", this.pokemonTypes[PokeElement.Ground] = "Ground", this.pokemonTypes[PokeElement.Dragon] = "Dragon", this.pokemonTypes[PokeElement.Ice] = "Ice", this.pokemonTypes[PokeElement.Electric] = "Electric",
				this.pokemonTypes[PokeElement.Normal] = "Normal", this.pokemonTypes[PokeElement.Fairy] = "Fairy", this.pokemonTypes[PokeElement.Poison] = "Poison", this.pokemonTypes[PokeElement.Fighting] = "Fighting", this.pokemonTypes[PokeElement.Psychic] = "Psychic", this.pokemonTypes[PokeElement.Fire] = "Fire", this.pokemonTypes[PokeElement.Rock] = "Rock", this.pokemonTypes[PokeElement.Flying] = "Flying", this.pokemonTypes[PokeElement.Steel] = "Steel", this.pokemonTypes[PokeElement.Ghost] = "Ghost", this.pokemonTypes[PokeElement.Water] = "Water", this.moveNames = [], this.moveNames[0] = "Move Unset", this.moveNames[1] = "Thunder Shock", this.moveNames[2] = "Quick Attack", this.moveNames[3] = "Scratch", this.moveNames[4] = "Ember", this.moveNames[5] = "Vine Whip", this.moveNames[6] = "Tackle", this.moveNames[7] = "Razor Leaf", this.moveNames[8] = "Take Down", this.moveNames[9] = "Water Gun", this.moveNames[10] = "Bite", this.moveNames[11] = "Pound", this.moveNames[12] = "Double Slap", this.moveNames[13] = "Wrap", this.moveNames[14] = "Hyper Beam", this.moveNames[15] = "Lick", this.moveNames[16] = "Dark Pulse", this.moveNames[17] = "Smog", this.moveNames[18] = "Sludge", this.moveNames[19] = "Metal Claw", this.moveNames[20] = "Vice Grip", this.moveNames[21] = "Flame Wheel", this.moveNames[22] = "Megahorn", this.moveNames[23] = "Wing Attack", this.moveNames[24] = "Flamethrower", this.moveNames[25] = "Sucker Punch", this.moveNames[26] = "Dig", this.moveNames[27] = "Low Kick", this.moveNames[28] = "Cross Chop", this.moveNames[29] = "Psycho Cut", this.moveNames[30] = "Psybeam", this.moveNames[31] = "Earthquake", this.moveNames[32] = "Stone Edge", this.moveNames[33] = "Ice Punch", this.moveNames[34] = "Heart Stamp", this.moveNames[35] = "Discharge", this.moveNames[36] = "Flash Cannon", this.moveNames[37] = "Peck", this.moveNames[38] = "Drill Peck", this.moveNames[39] = "Ice Beam", this.moveNames[40] = "Blizzard", this.moveNames[41] = "Air Slash", this.moveNames[42] = "Heat Wave", this.moveNames[43] = "Twineedle", this.moveNames[44] = "Poison Jab", this.moveNames[45] = "Aerial Ace", this.moveNames[46] = "Drill Run", this.moveNames[47] = "Petal Blizzard", this.moveNames[48] = "Mega Drain", this.moveNames[49] = "Bug Buzz", this.moveNames[50] = "Poison Fang", this.moveNames[51] = "Night Slash", this.moveNames[52] = "Slash", this.moveNames[53] = "Bubble Beam", this.moveNames[54] = "Submission", this.moveNames[55] = "Karate Chop", this.moveNames[56] = "Low Sweep", this.moveNames[57] = "Aqua Jet", this.moveNames[58] = "Aqua Tail", this.moveNames[59] = "Seed Bomb", this.moveNames[60] = "Psyshock", this.moveNames[61] = "Rock Throw", this.moveNames[62] = "Ancient Power", this.moveNames[63] = "Rock Tomb", this.moveNames[64] = "Rock Slide", this.moveNames[65] = "Power Gem", this.moveNames[66] = "Shadow Sneak", this.moveNames[67] = "Shadow Punch", this.moveNames[68] = "Shadow Claw", this.moveNames[69] = "Ominous Wind", this.moveNames[70] = "Shadow Ball", this.moveNames[71] = "Bullet Punch", this.moveNames[72] = "Magnet Bomb", this.moveNames[73] = "Steel Wing", this.moveNames[74] = "Iron Head", this.moveNames[75] = "Parabolic Charge", this.moveNames[76] = "Spark", this.moveNames[77] = "Thunder Punch", this.moveNames[78] = "Thunder", this.moveNames[79] = "Thunderbolt", this.moveNames[80] = "Twister", this.moveNames[81] = "Dragon Breath", this.moveNames[82] = "Dragon Pulse", this.moveNames[83] = "Dragon Claw", this.moveNames[84] = "Disarming Voice", this.moveNames[85] = "Draining Kiss", this.moveNames[86] = "Dazzling Gleam", this.moveNames[87] = "Moonblast", this.moveNames[88] = "Play Rough", this.moveNames[89] = "Cross Poison", this.moveNames[90] = "Sludge Bomb", this.moveNames[91] = "Sludge Wave", this.moveNames[92] = "Gunk Shot", this.moveNames[93] = "Mud Shot", this.moveNames[94] = "Bone Club", this.moveNames[95] = "Bulldoze", this.moveNames[96] = "Mud Bomb", this.moveNames[97] = "Fury Cutter", this.moveNames[98] = "Bug Bite", this.moveNames[99] = "Signal Beam", this.moveNames[100] = "x Scissor", this.moveNames[101] = "Flame Charge", this.moveNames[102] = "Flame Burst", this.moveNames[103] = "Fire Blast", this.moveNames[104] = "Brine", this.moveNames[105] = "Water Pulse", this.moveNames[106] = "Scald", this.moveNames[107] = "Hydro Pump", this.moveNames[108] = "Psychic", this.moveNames[109] = "Psystrike", this.moveNames[110] = "Ice Shard", this.moveNames[111] = "Icy Wind", this.moveNames[112] = "Frost Breath", this.moveNames[113] = "Absorb", this.moveNames[114] = "Giga Drain", this.moveNames[115] = "Fire Punch", this.moveNames[116] = "Solar Beam", this.moveNames[117] = "Leaf Blade", this.moveNames[118] = "Power Whip", this.moveNames[119] = "Splash", this.moveNames[120] = "Acid", this.moveNames[121] = "Air Cutter", this.moveNames[122] = "Hurricane", this.moveNames[123] = "Brick Break", this.moveNames[124] = "Cut", this.moveNames[125] = "Swift", this.moveNames[126] = "Horn Attack", this.moveNames[127] = "Stomp", this.moveNames[128] = "Headbutt", this.moveNames[129] = "Hyper Fang", this.moveNames[130] = "Slam", this.moveNames[131] = "Body Slam", this.moveNames[132] = "Rest", this.moveNames[133] = "Struggle", this.moveNames[134] = "Scald Blastoise", this.moveNames[135] = "Hydro Pump Blastoise", this.moveNames[136] = "Wrap Green", this.moveNames[137] = "Wrap Pink", this.moveNames[200] = "Fury Cutter Fast", this.moveNames[201] = "Bug Bite Fast", this.moveNames[202] = "Bite Fast", this.moveNames[203] = "Sucker Punch Fast", this.moveNames[204] = "Dragon Breath Fast", this.moveNames[205] = "Thunder Shock Fast", this.moveNames[206] = "Spark Fast", this.moveNames[207] = "Low Kick Fast", this.moveNames[208] = "Karate Chop Fast", this.moveNames[209] = "Ember Fast", this.moveNames[210] = "Wing Attack Fast", this.moveNames[211] = "Peck Fast", this.moveNames[212] = "Lick Fast", this.moveNames[213] = "Shadow Claw Fast", this.moveNames[214] = "Vine Whip Fast", this.moveNames[215] = "Razor Leaf Fast", this.moveNames[216] = "Mud Shot Fast", this.moveNames[217] = "Ice Shard Fast", this.moveNames[218] = "Frost Breath Fast", this.moveNames[219] = "Quick Attack Fast", this.moveNames[220] = "Scratch Fast", this.moveNames[221] = "Tackle Fast", this.moveNames[222] = "Pound Fast", this.moveNames[223] = "Cut Fast", this.moveNames[224] = "Poison Jab Fast", this.moveNames[225] = "Acid Fast", this.moveNames[226] = "Psycho Cut Fast", this.moveNames[227] = "Rock Throw Fast";
			this.moveNames[228] = "Metal Claw Fast";
			this.moveNames[229] = "Bullet Punch Fast", this.moveNames[230] = "Water Gun Fast", this.moveNames[231] = "Splash Fast", this.moveNames[232] = "Water Gun Fast Blastoise", this.moveNames[233] = "Mud Slap Fast", this.moveNames[234] = "Zen Headbutt Fast", this.moveNames[235] = "Confusion Fast", this.moveNames[236] = "Poison Sting Fast", this.moveNames[237] = "Bubble Fast", this.moveNames[238] = "Feint Attack Fast", this.moveNames[239] = "Steel Wing Fast", this.moveNames[240] = "Fire Fang Fast", this.moveNames[241] = "Rock Smash Fast", this.moveNames[242] = "Transform Fast", this.moveNames[243] = "Counter Fast", this.moveNames[244] = "Powder Snow Fast", this.moveNames[245] = "Close Combat", this.moveNames[246] = "Dynamic Punch", this.moveNames[247] = "Focus Blast", this.moveNames[248] = "Aurora Beam", this.moveNames[249] = "Charge Beam Fast", this.moveNames[250] = "Volt Switch Fast", this.moveNames[251] = "Wild Charge", this.moveNames[252] = "Zap Cannon", this.moveNames[253] = "Dragon Tail Fast", this.moveNames[254] = "Avalanche", this.moveNames[255] = "Air Slash Fast", this.moveNames[256] = "Brave Bird", this.moveNames[257] = "Sky Attack", this.moveNames[258] = "Sand Tomb", this.moveNames[259] = "Rock Blast", this.moveNames[260] = "Infestation Fast", this.moveNames[261] = "Struggle Bug Fast", this.moveNames[262] = "Silver Wind", this.moveNames[263] = "Astonish Fast", this.moveNames[264] = "Hex Fast", this.moveNames[265] = "Night Shade", this.moveNames[266] = "Iron Tail Fast", this.moveNames[267] = "Gyro Ball", this.moveNames[268] = "Heavy Slam", this.moveNames[269] = "Fire Spin Fast", this.moveNames[270] = "Overheat", this.moveNames[271] = "Bullet Seed Fast", this.moveNames[272] = "Grass Knot", this.moveNames[273] = "Energy Ball", this.moveNames[274] = "Extrasensory Fast", this.moveNames[275] = "Futuresight", this.moveNames[276] = "Mirror Coat", this.moveNames[277] = "Outrage", this.moveNames[278] = "Snarl Fast", this.moveNames[279] = "Crunch", this.moveNames[280] = "Foul Play", this.moveNames[281] = "Hidden Power Fast"
		}
		return a
	}(),
	GermanTranslation = function(a) {
		function b() {
			a.call(this), this.pokemonNames = ["MissingNo", "Bisasam", "Bisaknosp", "Bisaflor", "Glumanda", "Glutexo", "Glurak", "Schiggy", "Schillok", "Turtok", "Raupy", "Safcon", "Smettbo", "Hornliu", "Kokuna", "Bibor", "Taubsi", "Tauboga", "Tauboss", "Rattfratz", "Rattikarl", "Habitak", "Ibitak", "Rettan", "Arbok", "Pikachu", "Raichu", "Sandan", "Sandamer", "Nidoran♀", "Nidorina", "Nidoqueen", "Nidoran♂", "Nidorino", "Nidoking", "Piepi", "Pixi", "Vulpix", "Vulnona", "Pummeluff", "Knuddeluff", "Zubat", "Golbat", "Myrapla", "Duflor", "Giflor", "Paras", "Parasek", "Bluzuk", "Omot", "Digda", "Digdri", "Mauzi", "Snobilikat", "Enton", "Entoron", "Menki", "Rasaff", "Fukano", "Arkani", "Quapsel", "Quaputzi", "Quappo", "Abra", "Kadabra", "Simsala", "Machollo", "Maschock", "Machomei", "Knofensa", "Ultrigaria", "Sarzenia", "Tentacha", "Tentoxa", "Kleinstein", "Georok", "Geowaz", "Ponita", "Gallopa", "Flegmon", "Lahmus", "Magnetilo", "Magneton", "Porenta", "Dodu", "Dodri", "Jurob", "Jugong", "Sleima", "Sleimok", "Muschas", "Austos", "Nebulak", "Alpollo", "Gengar", "Onix", "Traumato", "Hypno", "Krabby", "Kingler", "Voltobal", "Lektrobal", "Owei", "Kokowei", "Tragosso", "Knogga", "Kicklee", "Nockchan", "Schlurp", "Smogon", "Smogmog", "Rihorn", "Rizeros", "Chaneira", "Tangela", "Kangama", "Seeper", "Seemon", "Goldini", "Golking", "Sterndu", "Starmie", "Pantimos", "Sichlor", "Rossana", "Elektek", "Magmar", "Pinsir", "Tauros", "Karpador", "Garados", "Lapras", "Ditto", "Evoli", "Aquana", "Blitza", "Flamara", "Porygon", "Amonitas", "Amoroso", "Kabuto", "Kabutops", "Aerodactyl", "Relaxo", "Arktos", "Zapdos", "Lavados", "Dratini", "Dragonir", "Dragoran", "Mewtu", "Mew", "Chikorita", "Bayleef", "Meganium", "Cyndaquil", "Quilava", "Typhlosion", "Totodile", "Croconaw", "Feraligatr", "Sentret", "Furret", "Hoothoot", "Noctowl", "Ledyba", "Ledian", "Spinarak", "Ariados", "Crobat", "Chinchou", "Lanturn", "Pichu", "Cleffa", "Igglybuff", "Togepi", "Togetic", "Natu", "Xatu", "Mareep", "Flaaffy", "Ampharos", "Bellossom", "Marill", "Azumarill", "Sudowoodo", "Politoed", "Hoppip", "Skiploom", "Jumpluff", "Aipom", "Sunkern", "Sunflora", "Yanma", "Wooper", "Quagsire", "Espeon", "Umbreon", "Murkrow", "Slowking", "Misdreavus", "Unown", "Wobbuffet", "Girafarig", "Pineco", "Forretress", "Dunsparce", "Gligar", "Steelix", "Snubbull", "Granbull", "Qwilfish", "Scizor", "Shuckle", "Heracross", "Sneasel", "Teddiursa", "Ursaring", "Slugma", "Magcargo", "Swinub", "Piloswine", "Corsola", "Remoraid", "Octillery", "Delibird", "Mantine", "Skarmory", "Houndour", "Houndoom", "Kingdra", "Phanpy", "Donphan", "Porygon2", "Stantler", "Smeargle", "Tyrogue", "Hitmontop", "Smoochum", "Elekid", "Magby", "Miltank", "Blissey", "Raikou", "Entei", "Suicune", "Larvitar", "Pupitar", "Tyranitar", "Lugia", "Ho-Oh", "Celebi", "Treecko", "Grovyle", "Sceptile", "Torchic", "Combusken", "Blaziken", "Mudkip", "Marshtomp", "Swampert", "Poochyena", "Mightyena", "Zigzagoon", "Linoone", "Wurmple", "Silcoon", "Beautifly", "Cascoon", "Dustox", "Lotad", "Lombre", "Ludicolo", "Seedot", "Nuzleaf", "Shiftry", "Taillow", "Swellow", "Wingull", "Pelipper", "Ralts", "Kirlia", "Gardevoir", "Surskit", "Masquerain", "Shroomish", "Breloom", "Slakoth", "Vigoroth", "Slaking", "Nincada", "Ninjask", "Shedinja", "Whismur", "Loudred", "Exploud", "Makuhita", "Hariyama", "Azurill", "Nosepass", "Skitty", "Delcatty", "Sableye", "Mawile", "Aron", "Lairon", "Aggron", "Meditite", "Medicham", "Electrike", "Manectric", "Plusle", "Minun", "Volbeat", "Illumise", "Roselia", "Gulpin", "Swalot", "Carvanha", "Sharpedo", "Wailmer", "Wailord", "Numel", "Camerupt", "Torkoal", "Spoink", "Grumpig", "Spinda", "Trapinch", "Vibrava", "Flygon", "Cacnea", "Cacturne", "Swablu", "Altaria", "Zangoose", "Seviper", "Lunatone", "Solrock", "Barboach", "Whiscash", "Corphish", "Crawdaunt", "Baltoy", "Claydol", "Lileep", "Cradily", "Anorith", "Armaldo", "Feebas", "Milotic", "Castform", "Kecleon", "Shuppet", "Banette", "Duskull", "Dusclops", "Tropius", "Chimecho", "Absol", "Wynaut", "Snorunt", "Glalie", "Spheal", "Sealeo", "Walrein", "Clamperl", "Huntail", "Gorebyss", "Relicanth", "Luvdisc", "Bagon", "Shelgon", "Salamence", "Beldum", "Metang", "Metagross", "Regirock", "Regice", "Registeel", "Latias", "Latios", "Kyogre", "Groudon", "Rayquaza", "Jirachi", "Deoxys", "Turtwig", "Grotle", "Torterra", "Chimchar", "Monferno", "Infernape", "Piplup", "Prinplup", "Empoleon", "Starly", "Staravia", "Staraptor", "Bidoof", "Bibarel", "Kricketot", "Kricketune", "Shinx", "Luxio", "Luxray", "Budew", "Roserade", "Cranidos", "Rampardos", "Shieldon", "Bastiodon", "Burmy", "Wormadam", "Mothim", "Combee", "Vespiquen", "Pachirisu", "Buizel", "Floatzel", "Cherubi", "Cherrim", "Shellos", "Gastrodon", "Ambipom", "Drifloon", "Drifblim", "Buneary", "Lopunny", "Mismagius", "Honchkrow", "Glameow", "Purugly", "Chingling", "Stunky", "Skuntank", "Bronzor", "Bronzong", "Bonsly", "Mime Jr.", "Happiny", "Chatot", "Spiritomb", "Gible", "Gabite", "Garchomp", "Munchlax", "Riolu", "Lucario", "Hippopotas", "Hippowdon", "Skorupi", "Drapion", "Croagunk", "Toxicroak", "Carnivine", "Finneon", "Lumineon", "Mantyke", "Snover", "Abomasnow", "Weavile", "Magnezone", "Lickilicky", "Rhyperior", "Tangrowth", "Electivire", "Magmortar", "Togekiss", "Yanmega", "Leafeon", "Glaceon", "Gliscor", "Mamoswine", "Porygon-Z", "Gallade", "Probopass", "Dusknoir", "Froslass", "Rotom", "Uxie", "Mesprit", "Azelf", "Dialga", "Palkia", "Heatran", "Regigigas", "Giratina", "Cresselia", "Phione", "Manaphy", "Darkrai", "Shaymin", "Arceus", "Victini", "Snivy", "Servine", "Serperior", "Tepig", "Pignite", "Emboar", "Oshawott", "Dewott", "Samurott", "Patrat", "Watchog", "Lillipup", "Herdier", "Stoutland", "Purrloin", "Liepard", "Pansage", "Simisage", "Pansear", "Simisear", "Panpour", "Simipour", "Munna", "Musharna", "Pidove", "Tranquill", "Unfezant", "Blitzle", "Zebstrika", "Roggenrola", "Boldore", "Gigalith", "Woobat", "Swoobat", "Drilbur", "Excadrill", "Audino", "Timburr", "Gurdurr", "Conkeldurr", "Tympole", "Palpitoad", "Seismitoad", "Throh", "Sawk", "Sewaddle", "Swadloon", "Leavanny", "Venipede", "Whirlipede", "Scolipede", "Cottonee", "Whimsicott", "Petilil", "Lilligant", "Basculin", "Sandile", "Krokorok", "Krookodile", "Darumaka", "Darmanitan", "Maractus", "Dwebble", "Crustle", "Scraggy", "Scrafty", "Sigilyph", "Yamask", "Cofagrigus", "Tirtouga", "Carracosta", "Archen", "Archeops", "Trubbish", "Garbodor", "Zorua", "Zoroark", "Minccino", "Cinccino", "Gothita", "Gothorita", "Gothitelle", "Solosis", "Duosion", "Reuniclus", "Ducklett", "Swanna", "Vanillite", "Vanillish", "Vanilluxe", "Deerling", "Sawsbuck", "Emolga", "Karrablast", "Escavalier", "Foongus", "Amoonguss", "Frillish", "Jellicent", "Alomomola", "Joltik", "Galvantula", "Ferroseed", "Ferrothorn", "Klink", "Klang", "Klinklang", "Tynamo", "Eelektrik", "Eelektross", "Elgyem", "Beheeyem", "Litwick", "Lampent", "Chandelure", "Axew", "Fraxure", "Haxorus", "Cubchoo", "Beartic", "Cryogonal", "Shelmet", "Accelgor", "Stunfisk", "Mienfoo", "Mienshao", "Druddigon", "Golett", "Golurk", "Pawniard", "Bisharp", "Bouffalant", "Rufflet", "Braviary", "Vullaby", "Mandibuzz", "Heatmor", "Durant", "Deino", "Zweilous", "Hydreigon", "Larvesta", "Volcarona", "Cobalion", "Terrakion", "Virizion", "Tornadus", "Thundurus", "Reshiram", "Zekrom", "Landorus", "Kyurem", "Keldeo", "Meloetta", "Genesect", "Chespin", "Quilladin", "Chesnaught", "Fennekin", "Braixen", "Delphox", "Froakie", "Frogadier", "Greninja", "Bunnelby", "Diggersby", "Fletchling", "Fletchinder", "Talonflame", "Scatterbug", "Spewpa", "Vivillon", "Litleo", "Pyroar", "Flabébé", "Floette", "Florges", "Skiddo", "Gogoat", "Pancham", "Pangoro", "Furfrou", "Espurr", "Meowstic", "Honedge", "Doublade", "Aegislash", "Spritzee", "Aromatisse", "Swirlix", "Slurpuff", "Inkay", "Malamar", "Binacle", "Barbaracle", "Skrelp", "Dragalge", "Clauncher", "Clawitzer", "Helioptile", "Heliolisk", "Tyrunt", "Tyrantrum", "Amaura", "Aurorus", "Sylveon", "Hawlucha", "Dedenne", "Carbink", "Goomy", "Sliggoo", "Goodra", "Klefki", "Phantump", "Trevenant", "Pumpkaboo", "Gourgeist", "Bergmite", "Avalugg", "Noibat", "Noivern", "Xerneas", "Yveltal", "Zygarde", "Diancie", "Hoopa", "Volcanion"], this.itemNames = [], this.itemNames[1] = "Pokéball", this.itemNames[2] = "Superball", this.itemNames[3] = "Hyperball", this.itemNames[4] = "Meisterball", this.itemNames[101] = "Tränk", this.itemNames[102] = "Supertränk", this.itemNames[103] = "Hypertränk", this.itemNames[104] = "Top-Tränk", this.itemNames[201] = "Beleber", this.itemNames[202] = "Top Beleber", this.itemNames[701] = "Himmihbeere", this.eventTypes = {
				example: "beispiel",
				pokestop: "pokéstop",
				catch: "gefangen",
				snipe: "snipe",
				evolve: "Entwickelt",
				recycle: "weggeworfen",
				transfer: "verschickt",
				"incubator-status": "Inkubator",
				"egg-hatched": "Geschlüpft"
			}
		}
		return __extends(b, a), b
	}(EnglishTranslation),
	TimeUtils = function() {
		function a() {}
		return a.getCurrentTimestampMs = function() {
			var a = Date.now();
			return a.toString()
		}, a.timestampToDateStr = function(a) {
			var b, c = Math.floor(a / 1e3),
				d = Math.floor(c / 60),
				e = Math.floor(d / 60),
				f = Math.floor(e / 24);
			return f > 0 ? (b = f + " day", f > 1 && (b += "s")) : e > 0 ? (b = e + " hour", e > 1 && (b += "s")) : d > 0 ? (b = d + " minute", d > 1 && (b += "s")) : (b = c + " second", c > 1 && (b += "s")), b
		}, a
	}(),
	AudioNotificationController = function() {
		function a(a) {
			var b = this;
			this.exampleClicked = function(a) {
				b.addNotificationExample()
			}, this.addHumanSnipeReachedDestination = function(a) {}, this.addPokemonUpgraded = function(a) {
				b.addNotification("powerup")
			}, this.addNotificationExample = function() {
				b.addNotification("generic")
			}, this.addNotificationPokeStopUsed = function(a) {
				b.config.notificationSettings.pokestopUsed && b.addNotification("robbed")
			}, this.addNotificationPokemonCapture = function(a, c) {
				var d = a[a.length - 1];
				(d.IsSnipe || b.config.notificationSettings.pokemonCapture) && (d.IsSnipe && !b.config.notificationSettings.pokemonSnipe || (d.IsSnipe ? b.addNotification("throwing") : b.addNotification("caught")))
			}, this.addNotificationPokemonEvolved = function(a) {
				b.config.notificationSettings.pokemonEvolved && b.addNotification("evolved")
			}, this.addNotificationPokemonTransfer = function(a) {
				b.config.notificationSettings.pokemonTransfer && b.addNotification("transfered")
			}, this.addNotificationItemRecycle = function(a) {
				b.config.notificationSettings.itemRecycle && b.addNotification("bagfull")
			}, this.addNotificationEggHatched = function(a) {
				b.config.notificationSettings.eggHatched && b.addNotification("hatched")
			}, this.addNotificationIncubatorStatus = function(a) {
				b.config.notificationSettings.incubatorStatus && b.addNotification("pickup")
			}, this.addHumanWalkSnipeStart = function(a) {}, this.addNotification = function(a) {
				b.config.container.src = "audio/" + a + ".mp3";
				try {
					b.config.container.play()
				} catch (a) {}
			}, this.onSettingsChanged = function(a, c) {
				b.config.notificationSettings = a.notificationsAudio
			}, this.config = a, this.config.exampleButton.click(this.exampleClicked), this.config.settingsService.subscribe(this.onSettingsChanged)
		}
		return a
	}();
this.app = this.app || {}, this.app.templates = this.app.templates || {}, this.app.templates.InfoWindow = this.app.templates.InfoWindow || {}, this.app.templates.Notifications = this.app.templates.Notifications || {}, this.app.templates.Notifications.Journals = this.app.templates.Notifications.Journals || {}, this.app.templates.Pokemon = this.app.templates.Pokemon || {}, this.app.templates.InfoWindow.GymInfoWindow = Handlebars.template({
	1: function(a, b, c, d, e) {
		return "\r\n"
	},
	3: function(a, b, c, d, e) {
		var f, g = null != b ? b : {},
			h = c.helperMissing,
			i = "function",
			j = a.escapeExpression;
		return '        <div class="iw-detail iw-gym-defender" >\r\n            <span class="iw-detail-header">Defender</span>\r\n            <span class="iw-detail-value">\r\n                <img alt="Defender pokemon" class="iw-gym-defender-icon" src="images/pokemon/' + j((f = null != (f = c.GuardPokemonId || (null != b ? b.GuardPokemonId : b)) ? f : h, typeof f === i ? f.call(g, {
			name: "GuardPokemonId",
			hash: {},
			data: e
		}) : f)) + '.png" />\r\n                <span class="iw-gym-defender-name">' + j((f = null != (f = c.DefenderName || (null != b ? b.DefenderName : b)) ? f : h, typeof f === i ? f.call(g, {
			name: "DefenderName",
			hash: {},
			data: e
		}) : f)) + '</span>\r\n            </span>\r\n        </div>\r\n        <div class="iw-detail iw-gym-defender-cp" >\r\n            <span class="iw-detail-header">CP</span>\r\n            <span class="iw-detail-value">' + j((f = null != (f = c.GuardPokemonCp || (null != b ? b.GuardPokemonCp : b)) ? f : h, typeof f === i ? f.call(g, {
			name: "GuardPokemonCp",
			hash: {},
			data: e
		}) : f)) + '</span>\r\n        </div>\r\n        <hr class="iw-gym-hr-defender"  />\r\n'
	},
	compiler: [7, ">= 4.0.0"],
	main: function(a, b, c, d, e) {
		var f, g, h = null != b ? b : {},
			i = c.helperMissing,
			j = a.escapeExpression,
			k = "function";
		return '<div class="iw-wrap iw-gym iw-gym-' + j((c.getTeamCss || b && b.getTeamCss || i).call(h, null != b ? b.OwnedByTeam : b, {
			name: "getTeamCss",
			hash: {},
			data: e
		})) + '">\r\n    <div class="iw-status">' + j((c.getTeam || b && b.getTeam || i).call(h, null != b ? b.OwnedByTeam : b, {
			name: "getTeam",
			hash: {},
			data: e
		})) + '</div>\r\n    <img src="images/gui/' + j((c.toLowerCase || b && b.toLowerCase || i).call(h, (c.getTeam || b && b.getTeam || i).call(h, null != b ? b.OwnedByTeam : b, {
			name: "getTeam",
			hash: {},
			data: e
		}), {
			name: "toLowerCase",
			hash: {},
			data: e
		})) + '-icon.png" alt="' + j((c.getTeam || b && b.getTeam || i).call(h, null != b ? b.OwnedByTeam : b, {
			name: "getTeam",
			hash: {},
			data: e
		})) + ' icon" class="iw-icon iw-icon-pokestop" />\r\n    <div class="iw-header iw-name">\r\n        <span class="iw-detail-value">' + j((c.default || b && b.default || i).call(h, null != b ? b.Name : b, "Unknown", {
			name: "default",
			hash: {},
			data: e
		})) + '</span>\r\n        <span class="iw-detail-header">GYM</span>\r\n    </div>\r\n    <div class="iw-content">\r\n\r\n        <div class="iw-detail iw-gym-level" >\r\n            <span class="iw-detail-header">Level</span>\r\n            <span class="iw-detail-value">' + j((g = null != (g = c.GymLevel || (null != b ? b.GymLevel : b)) ? g : i, typeof g === k ? g.call(h, {
			name: "GymLevel",
			hash: {},
			data: e
		}) : g)) + '</span>\r\n        </div>\r\n        <div class="iw-detail iw-gym-xp" >\r\n            <span class="iw-detail-header">XP</span>\r\n            <span class="iw-detail-value">' + j((g = null != (g = c.GymPoints || (null != b ? b.GymPoints : b)) ? g : i, typeof g === k ? g.call(h, {
			name: "GymPoints",
			hash: {},
			data: e
		}) : g)) + " / " + j((g = null != (g = c.NextGymLevelRequired || (null != b ? b.NextGymLevelRequired : b)) ? g : i, typeof g === k ? g.call(h, {
			name: "NextGymLevelRequired",
			hash: {},
			data: e
		}) : g)) + '</span>\r\n        </div>\r\n\r\n        <hr class="iw-gym-hr-general"  />\r\n' + (null != (f = (c.if_eq || b && b.if_eq || i).call(h, null != b ? b.OwnedByTeam : b, 0, {
			name: "if_eq",
			hash: {},
			fn: a.program(1, e, 0),
			inverse: a.program(3, e, 0),
			data: e
		})) ? f : "") + '        <div class="iw-detail iw-latitude">\r\n            <span class="iw-detail-header">Latitude</span>\r\n            <span class="iw-detail-value">' + j((g = null != (g = c.Latitude || (null != b ? b.Latitude : b)) ? g : i, typeof g === k ? g.call(h, {
			name: "Latitude",
			hash: {},
			data: e
		}) : g)) + '</span>\r\n        </div>\r\n        <div class="iw-detail iw-longitude">\r\n            <span class="iw-detail-header">Longitude</span>\r\n            <span class="iw-detail-value">' + j((g = null != (g = c.Longitude || (null != b ? b.Longitude : b)) ? g : i, typeof g === k ? g.call(h, {
			name: "Longitude",
			hash: {},
			data: e
		}) : g)) + '</span>\r\n        </div>\r\n        <a id="fort_' + j((g = null != (g = c.Id || (null != b ? b.Id : b)) ? g : i, typeof g === k ? g.call(h, {
			name: "Id",
			hash: {},
			data: e
		}) : g)) + '" title="Order the bot move to ' + j((c.default || b && b.default || i).call(h, null != b ? b.Name : b, "Unknown", {
			name: "default",
			hash: {},
			data: e
		})) + ' now" class="iw-gym-move-to" rel="' + j((g = null != (g = c.Id || (null != b ? b.Id : b)) ? g : i, typeof g === k ? g.call(h, {
			name: "Id",
			hash: {},
			data: e
		}) : g)) + '" data-fortId="' + j((g = null != (g = c.Id || (null != b ? b.Id : b)) ? g : i, typeof g === k ? g.call(h, {
			name: "Id",
			hash: {},
			data: e
		}) : g)) + '" data-latitude="' + j((g = null != (g = c.Latitude || (null != b ? b.Latitude : b)) ? g : i, typeof g === k ? g.call(h, {
			name: "Latitude",
			hash: {},
			data: e
		}) : g)) + '" data-longitude="' + j((g = null != (g = c.Longitude || (null != b ? b.Longitude : b)) ? g : i, typeof g === k ? g.call(h, {
			name: "Longitude",
			hash: {},
			data: e
		}) : g)) + '">\r\n                <img src="images/move.svg" width="30px" height="30px">\r\n        </a>\r\n    </div>\r\n    <img src="images/gui/' + j((c.toLowerCase || b && b.toLowerCase || i).call(h, (c.getTeam || b && b.getTeam || i).call(h, null != b ? b.OwnedByTeam : b, {
			name: "getTeam",
			hash: {},
			data: e
		}), {
			name: "toLowerCase",
			hash: {},
			data: e
		})) + '.png" alt="' + j((c.getTeam || b && b.getTeam || i).call(h, null != b ? b.OwnedByTeam : b, {
			name: "getTeam",
			hash: {},
			data: e
		})) + ' team emblem" class="iw-gym-team-emblem iw-gym-team-emblem-' + j((c.getTeamCss || b && b.getTeamCss || i).call(h, null != b ? b.OwnedByTeam : b, {
			name: "getTeamCss",
			hash: {},
			data: e
		})) + '" />\r\n</div>'
	},
	useData: !0
}), this.app.templates.InfoWindow.PokestopInfoWindow = Handlebars.template({
	compiler: [7, ">= 4.0.0"],
	main: function(a, b, c, d, e) {
		var f, g = null != b ? b : {},
			h = c.helperMissing,
			i = a.escapeExpression,
			j = "function";
		return '<div class="iw-wrap iw-pokestop' + i((c.getPokestopStatusCss || b && b.getPokestopStatusCss || h).call(g, null != b ? b.Status : b, {
			name: "getPokestopStatusCss",
			hash: {},
			data: e
		})) + '">\r\n        <div class="iw-status">' + i((c.getPokestopStatus || b && b.getPokestopStatus || h).call(g, null != b ? b.Status : b, {
			name: "getPokestopStatus",
			hash: {},
			data: e
		})) + '</div>\r\n        <img src="images/gui/pokestop.png" alt="Pokestop icon" class="iw-icon iw-icon-' + i((c.getPokestopStatusIconCss || b && b.getPokestopStatusIconCss || h).call(g, null != b ? b.Status : b, {
			name: "getPokestopStatusIconCss",
			hash: {},
			data: e
		})) + '-pokestop">\r\n        <div class="iw-header iw-name">\r\n            <span class="iw-detail-value">' + i((f = null != (f = c.Name || (null != b ? b.Name : b)) ? f : h, typeof f === j ? f.call(g, {
			name: "Name",
			hash: {},
			data: e
		}) : f)) + '</span>\r\n            <span class="iw-detail-header">Pokestop</span>\r\n        </div>\r\n        <div class="iw-content">\r\n            <div class="iw-detail iw-latitude">\r\n                <span class="iw-detail-header">Latitude</span>\r\n                <span class="iw-detail-value">' + i((f = null != (f = c.Latitude || (null != b ? b.Latitude : b)) ? f : h, typeof f === j ? f.call(g, {
			name: "Latitude",
			hash: {},
			data: e
		}) : f)) + '</span>\r\n            </div>\r\n            <div class="iw-detail iw-longitude">\r\n                <span class="iw-detail-header">Longitude</span>\r\n                <span class="iw-detail-value">' + i((f = null != (f = c.Longitude || (null != b ? b.Longitude : b)) ? f : h, typeof f === j ? f.call(g, {
			name: "Longitude",
			hash: {},
			data: e
		}) : f)) + '</span>\r\n            </div>\r\n            <a id="fort_' + i((f = null != (f = c.Id || (null != b ? b.Id : b)) ? f : h, typeof f === j ? f.call(g, {
			name: "Id",
			hash: {},
			data: e
		}) : f)) + '" title="Click to order bot move to ' + i((f = null != (f = c.Name || (null != b ? b.Name : b)) ? f : h, typeof f === j ? f.call(g, {
			name: "Name",
			hash: {},
			data: e
		}) : f)) + '" class="iw-pokestop-move-to" rel="' + i((f = null != (f = c.Id || (null != b ? b.Id : b)) ? f : h, typeof f === j ? f.call(g, {
			name: "Id",
			hash: {},
			data: e
		}) : f)) + '" data-fortId="' + i((f = null != (f = c.Id || (null != b ? b.Id : b)) ? f : h, typeof f === j ? f.call(g, {
			name: "Id",
			hash: {},
			data: e
		}) : f)) + '" data-latitude="' + i((f = null != (f = c.Latitude || (null != b ? b.Latitude : b)) ? f : h, typeof f === j ? f.call(g, {
			name: "Latitude",
			hash: {},
			data: e
		}) : f)) + '" data-longitude="' + i((f = null != (f = c.Longitude || (null != b ? b.Longitude : b)) ? f : h, typeof f === j ? f.call(g, {
			name: "Longitude",
			hash: {},
			data: e
		}) : f)) + '">\r\n                <img src="images/move.svg" width="30px" height="30px">\r\n            </a>\r\n        </div>\r\n    </div>'
	},
	useData: !0
}), this.app.templates.Notifications.Journals.PokemonUpgraded = Handlebars.template({
	compiler: [7, ">= 4.0.0"],
	main: function(a, b, c, d, e) {
		var f, g = null != b ? b : {},
			h = c.helperMissing,
			i = "function",
			j = a.escapeExpression;
		return '<div class="image">\r\n    <img src="images/pokemon/' + j((f = null != (f = c.PokemonId || (null != b ? b.PokemonId : b)) ? f : h, typeof f === i ? f.call(g, {
			name: "PokemonId",
			hash: {},
			data: e
		}) : f)) + '.png" />\r\n</div>\r\n<div class="info">\r\n    ' + j((f = null != (f = c.PokemonName || (null != b ? b.PokemonName : b)) ? f : h, typeof f === i ? f.call(g, {
			name: "PokemonName",
			hash: {},
			data: e
		}) : f)) + '\r\n    <div class="stats">\r\n        CP  : ' + j((f = null != (f = c.Cp || (null != b ? b.Cp : b)) ? f : h, typeof f === i ? f.call(g, {
			name: "Cp",
			hash: {},
			data: e
		}) : f)) + "m <br />\r\n        IV: " + j((c.round || b && b.round || h).call(g, null != b ? b.Perfection : b, 2, {
			name: "round",
			hash: {},
			data: e
		})) + " %\r\n    </div>\r\n</div>"
	},
	useData: !0
}), this.app.templates.Notifications.Journals.SnipeStartNotification = Handlebars.template({
	compiler: [7, ">= 4.0.0"],
	main: function(a, b, c, d, e) {
		var f, g = null != b ? b : {},
			h = c.helperMissing,
			i = "function",
			j = a.escapeExpression;
		return '<div class="image">\r\n    <img src="images/pokemon/' + j((f = null != (f = c.PokemonId || (null != b ? b.PokemonId : b)) ? f : h, typeof f === i ? f.call(g, {
			name: "PokemonId",
			hash: {},
			data: e
		}) : f)) + '.png" />\r\n</div>\r\n<div class="info">\r\n    ' + j((f = null != (f = c.PokemonName || (null != b ? b.PokemonName : b)) ? f : h, typeof f === i ? f.call(g, {
			name: "PokemonName",
			hash: {},
			data: e
		}) : f)) + '\r\n    <div class="stats">\r\n        Distance  : ' + j((c.round || b && b.round || h).call(g, null != b ? b.Distance : b, 2, {
			name: "round",
			hash: {},
			data: e
		})) + "m <br />\r\n        Walk times: " + j((c.toTime || b && b.toTime || h).call(g, null != b ? b.Estimated : b, {
			name: "toTime",
			hash: {},
			data: e
		})) + "\r\n    </div>\r\n</div>"
	},
	useData: !0
}), this.app.templates.Pokemon.PokemonInfo = Handlebars.template({
	1: function(a, b, c, d, e) {
		return '\r\n    <i class="fa fa-star pokemon-info-favorite" aria-hidden="true"></i> '
	},
	3: function(a, b, c, d, e) {
		var f;
		return '    <h2 id="pokemon-info-nickname">' + a.escapeExpression((f = null != (f = c.Nickname || (null != b ? b.Nickname : b)) ? f : c.helperMissing, "function" == typeof f ? f.call(null != b ? b : {}, {
			name: "Nickname",
			hash: {},
			data: e
		}) : f)) + "</h2>\r\n"
	},
	5: function(a, b, c, d, e) {
		var f = a.lambda,
			g = a.escapeExpression;
		return '        <span class="' + g(f(b, b)) + '">' + g(f(b, b)) + "</span> "
	},
	7: function(a, b, c, d, e) {
		var f;
		return '    <h2 class="poke-level">' + a.escapeExpression((f = null != (f = c.Level || (null != b ? b.Level : b)) ? f : c.helperMissing, "function" == typeof f ? f.call(null != b ? b : {}, {
			name: "Level",
			hash: {},
			data: e
		}) : f)) + "</h2>\r\n"
	},
	compiler: [7, ">= 4.0.0"],
	main: function(a, b, c, d, e) {
		var f, g, h = null != b ? b : {},
			i = c.helperMissing,
			j = "function",
			k = a.escapeExpression;
		return '<div class="vertical-align-helper"></div>\r\n<div id="pokemon-content">\r\n    <i class="fa fa-times close-button"></i> ' + (null != (f = c.if.call(h, null != b ? b.Favorite : b, {
			name: "if",
			hash: {},
			fn: a.program(1, e, 0),
			inverse: a.noop,
			data: e
		})) ? f : "") + '\r\n    <h1 id="pokemon-info-name">' + k((g = null != (g = c.Name || (null != b ? b.Name : b)) ? g : i, typeof g === j ? g.call(h, {
			name: "Name",
			hash: {},
			data: e
		}) : g)) + "</h1>\r\n" + (null != (f = c.if.call(h, null != b ? b.Nickname : b, {
			name: "if",
			hash: {},
			fn: a.program(3, e, 0),
			inverse: a.noop,
			data: e
		})) ? f : "") + '    <img id="pokemon-info-image" src="images/pokemon/' + k((g = null != (g = c.PokemonId || (null != b ? b.PokemonId : b)) ? g : i, typeof g === j ? g.call(h, {
			name: "PokemonId",
			hash: {},
			data: e
		}) : g)) + '.png" />\r\n    <div id="pokemon-type">\r\n' + (null != (f = c.each.call(h, null != b ? b.PokemonTypes : b, {
			name: "each",
			hash: {},
			fn: a.program(5, e, 0),
			inverse: a.noop,
			data: e
		})) ? f : "") + '\r\n    </div>\r\n    <div id="pokemon-iv">\r\n        <div> Attack <span class="attack">' + k((g = null != (g = c.IndividualAttack || (null != b ? b.IndividualAttack : b)) ? g : i, typeof g === j ? g.call(h, {
			name: "IndividualAttack",
			hash: {},
			data: e
		}) : g)) + '</span> </div>\r\n        <div> Defense <span class="defense">' + k((g = null != (g = c.IndividualDefense || (null != b ? b.IndividualDefense : b)) ? g : i, typeof g === j ? g.call(h, {
			name: "IndividualDefense",
			hash: {},
			data: e
		}) : g)) + '</span> </div>\r\n        <div> Stamina <span class="stamina">' + k((g = null != (g = c.IndividualStamina || (null != b ? b.IndividualStamina : b)) ? g : i, typeof g === j ? g.call(h, {
			name: "IndividualStamina",
			hash: {},
			data: e
		}) : g)) + '</span> </div>\r\n    </div>\r\n    <div class="total-iv">' + k((c.round || b && b.round || i).call(h, null != b ? b.Perfection : b, 2, {
			name: "round",
			hash: {},
			data: e
		})) + "%</div>\r\n" + (null != (f = c.if.call(h, null != b ? b.Level : b, {
			name: "if",
			hash: {},
			fn: a.program(7, e, 0),
			inverse: a.noop,
			data: e
		})) ? f : "") + '    <div class="poke-cp">' + k((g = null != (g = c.Cp || (null != b ? b.Cp : b)) ? g : i, typeof g === j ? g.call(h, {
			name: "Cp",
			hash: {},
			data: e
		}) : g)) + '</div>\r\n    <div class="poke-hp">' + k((g = null != (g = c.Stamina || (null != b ? b.Stamina : b)) ? g : i, typeof g === j ? g.call(h, {
			name: "Stamina",
			hash: {},
			data: e
		}) : g)) + " / " + k((g = null != (g = c.StaminaMax || (null != b ? b.StaminaMax : b)) ? g : i, typeof g === j ? g.call(h, {
			name: "StaminaMax",
			hash: {},
			data: e
		}) : g)) + '</div>\r\n    <div class="move move1">' + k((g = null != (g = c.Move1Name || (null != b ? b.Move1Name : b)) ? g : i, typeof g === j ? g.call(h, {
			name: "Move1Name",
			hash: {},
			data: e
		}) : g)) + '</div>\r\n    <div class="move move2">' + k((g = null != (g = c.Move2Name || (null != b ? b.Move2Name : b)) ? g : i, typeof g === j ? g.call(h, {
			name: "Move2Name",
			hash: {},
			data: e
		}) : g)) + '</div>\r\n    <div class="pkm-candies">\r\n        <span id="pkm-candies-val">' + k((g = null != (g = c.FamilyCandies || (null != b ? b.FamilyCandies : b)) ? g : i, typeof g === j ? g.call(h, {
			name: "FamilyCandies",
			hash: {},
			data: e
		}) : g)) + '</span>\r\n        <span id="pkm-candies-req"></span>\r\n    </div>\r\n    <div class="poke-catch">' + k((g = null != (g = c.CreationDateTime || (null != b ? b.CreationDateTime : b)) ? g : i, typeof g === j ? g.call(h, {
			name: "CreationDateTime",
			hash: {},
			data: e
		}) : g)) + '</div>\r\n    <div class="controls">\r\n        <div id="transfer-pokemon-button" class="pokemon-info-button" tabindex="-1">\r\n            <div class="confirm">are you sure? <span id="confirm-transfer" class="confirm-button">yes</span></div>\r\n            <i class="fa fa-trash fa-lg"></i> transfer\r\n        </div>\r\n        <div id="evolve-pokemon-button" class="pokemon-info-button" tabindex="-1">\r\n            <div class="confirm">are you sure? <span id="confirm-evolve" class="confirm-button">yes</span></div>\r\n            <div class="button-disabled-reason">Don\'t even try</div>\r\n            <i class="fa fa-arrow-circle-up fa-lg"></i>\r\n            <span id="evolve-pokemon-button-text">evolve</span>\r\n        </div>\r\n        <div id="upgrade-pokemon-button" class="pokemon-info-button" tabindex="-1">\r\n            <div class="confirm">are you sure? <span id="confirm-upgrade" class="confirm-button">yes</span> <span id="confirm-upgrade-max" class="confirm-button">max</span></div>\r\n            <i class="fa fa-rocket fa-lg"></i> Upgrade\r\n        </div>\r\n    </div>\r\n</div>';
	},
	useData: !0
}), this.app.templates.PokemonInfoPopup = Handlebars.template({
	compiler: [7, ">= 4.0.0"],
	main: function(a, b, c, d, e) {
		var f, g = null != b ? b : {},
			h = c.helperMissing,
			i = "function",
			j = a.escapeExpression;
		return '<div class="iw-wrap iw-pokemon iw-' + j((f = null != (f = c.Rarity || (null != b ? b.Rarity : b)) ? f : h, typeof f === i ? f.call(g, {
			name: "Rarity",
			hash: {},
			data: e
		}) : f)) + '">\r\n    <div class="iw-status">#' + j((f = null != (f = c.PokemonId || (null != b ? b.PokemonId : b)) ? f : h, typeof f === i ? f.call(g, {
			name: "PokemonId",
			hash: {},
			data: e
		}) : f)) + " - " + j((c.friendlyRarityName || b && b.friendlyRarityName || h).call(g, null != b ? b.Rarity : b, {
			name: "friendlyRarityName",
			hash: {},
			data: e
		})) + ' </div>\r\n    <img src="images/pokemon/' + j((f = null != (f = c.PokemonId || (null != b ? b.PokemonId : b)) ? f : h, typeof f === i ? f.call(g, {
			name: "PokemonId",
			hash: {},
			data: e
		}) : f)) + '.png" alt="' + j((f = null != (f = c.Name || (null != b ? b.Name : b)) ? f : h, typeof f === i ? f.call(g, {
			name: "Name",
			hash: {},
			data: e
		}) : f)) + ' icon" class="iw-icon">\r\n    <div class="iw-header iw-name">\r\n        <span class="iw-detail-value">' + j((f = null != (f = c.Name || (null != b ? b.Name : b)) ? f : h, typeof f === i ? f.call(g, {
			name: "Name",
			hash: {},
			data: e
		}) : f)) + '</span>\r\n        <span class="iw-detail-header">' + j((f = null != (f = c.CatchType || (null != b ? b.CatchType : b)) ? f : h, typeof f === i ? f.call(g, {
			name: "CatchType",
			hash: {},
			data: e
		}) : f)) + '</span>\r\n    </div>\r\n    <div class="iw-content">\r\n        <div class="iw-detail" >\r\n            <span class="iw-detail-header">Level</span>\r\n            <span class="iw-detail-value">' + j((f = null != (f = c.Level || (null != b ? b.Level : b)) ? f : h, typeof f === i ? f.call(g, {
			name: "Level",
			hash: {},
			data: e
		}) : f)) + '</span>\r\n        </div>\r\n        <div class="iw-detail" >\r\n            <span class="iw-detail-header">IV</span>\r\n            <span class="iw-detail-value">' + j((f = null != (f = c.Perfection || (null != b ? b.Perfection : b)) ? f : h, typeof f === i ? f.call(g, {
			name: "Perfection",
			hash: {},
			data: e
		}) : f)) + '%</span>\r\n        </div>\r\n\r\n        <div class="iw-detail">\r\n            <span class="iw-detail-header">CP</span>\r\n            <span class="iw-detail-value">' + j((f = null != (f = c.Cp || (null != b ? b.Cp : b)) ? f : h, typeof f === i ? f.call(g, {
			name: "Cp",
			hash: {},
			data: e
		}) : f)) + "/" + j((f = null != (f = c.MaxCp || (null != b ? b.MaxCp : b)) ? f : h, typeof f === i ? f.call(g, {
			name: "MaxCp",
			hash: {},
			data: e
		}) : f)) + '</span>\r\n        </div>\r\n        <hr class="iw-gym-hr-defender" style="display: none">\r\n\r\n        <div class="iw-detail iw-latitude">\r\n            <span class="iw-detail-header">Latitude</span>\r\n            <span class="iw-detail-value">' + j((c.roundCoord || b && b.roundCoord || h).call(g, null != b ? b.Latitude : b, {
			name: "roundCoord",
			hash: {},
			data: e
		})) + '</span>\r\n        </div>\r\n        <div class="iw-detail iw-longitude">\r\n            <span class="iw-detail-header">Longitude</span>\r\n            <span class="iw-detail-value">' + j((c.roundCoord || b && b.roundCoord || h).call(g, null != b ? b.Longitude : b, {
			name: "roundCoord",
			hash: {},
			data: e
		})) + "</span>\r\n        </div>\r\n    </div>\r\n</div>"
	},
	useData: !0
}), this.app.templates.PokemonSnipeInfoPopup = Handlebars.template({
	compiler: [7, ">= 4.0.0"],
	main: function(a, b, c, d, e) {
		var f, g = null != b ? b : {},
			h = c.helperMissing,
			i = "function",
			j = a.escapeExpression;
		return '<div class="iw-wrap iw-pokemon-snip iw-' + j((f = null != (f = c.Rarity || (null != b ? b.Rarity : b)) ? f : h, typeof f === i ? f.call(g, {
			name: "Rarity",
			hash: {},
			data: e
		}) : f)) + '">\r\n    <div class="iw-status">#' + j((f = null != (f = c.PokemonId || (null != b ? b.PokemonId : b)) ? f : h, typeof f === i ? f.call(g, {
			name: "PokemonId",
			hash: {},
			data: e
		}) : f)) + " - " + j((c.friendlyRarityName || b && b.friendlyRarityName || h).call(g, null != b ? b.Rarity : b, {
			name: "friendlyRarityName",
			hash: {},
			data: e
		})) + ' </div>\r\n    <img src="images/pokemon/' + j((f = null != (f = c.PokemonId || (null != b ? b.PokemonId : b)) ? f : h, typeof f === i ? f.call(g, {
			name: "PokemonId",
			hash: {},
			data: e
		}) : f)) + '.png" alt="' + j((f = null != (f = c.Name || (null != b ? b.Name : b)) ? f : h, typeof f === i ? f.call(g, {
			name: "Name",
			hash: {},
			data: e
		}) : f)) + ' icon" class="iw-icon">\r\n    <div class="iw-header iw-name">\r\n        <span class="iw-detail-value">' + j((f = null != (f = c.PokemonName || (null != b ? b.PokemonName : b)) ? f : h, typeof f === i ? f.call(g, {
			name: "PokemonName",
			hash: {},
			data: e
		}) : f)) + '</span>\r\n        <span class="iw-detail-header">' + j((f = null != (f = c.CatchType || (null != b ? b.CatchType : b)) ? f : h, typeof f === i ? f.call(g, {
			name: "CatchType",
			hash: {},
			data: e
		}) : f)) + '</span>\r\n    </div>\r\n    <div class="iw-content">\r\n        <div class="iw-detail" >\r\n            <span class="iw-detail-header">Distance</span>\r\n            <span class="iw-detail-value">' + j((c.round || b && b.round || h).call(g, null != b ? b.Distance : b, {
			name: "round",
			hash: {},
			data: e
		})) + 'm</span>\r\n        </div>\r\n\r\n        <div class="iw-detail">\r\n            <span class="iw-detail-header">Estimated</span>\r\n            <span class="iw-detail-value">' + j((c.toTime || b && b.toTime || h).call(g, null != b ? b.Estimated : b, {
			name: "toTime",
			hash: {},
			data: e
		})) + ' sec</span>\r\n        </div>\r\n        <hr class="iw-gym-hr-defender" style="display: none">\r\n\r\n        <div class="iw-detail iw-latitude">\r\n            <span class="iw-detail-header">Latitude</span>\r\n            <span class="iw-detail-value">' + j((c.roundCoord || b && b.roundCoord || h).call(g, null != b ? b.Latitude : b, {
			name: "roundCoord",
			hash: {},
			data: e
		})) + '</span>\r\n        </div>\r\n        <div class="iw-detail iw-longitude">\r\n            <span class="iw-detail-header">Longitude</span>\r\n            <span class="iw-detail-value">' + j((c.roundCoord || b && b.roundCoord || h).call(g, null != b ? b.Longitude : b, {
			name: "roundCoord",
			hash: {},
			data: e
		})) + "</span>\r\n        </div>\r\n    </div>\r\n</div>"
	},
	useData: !0
}), this.app.templates.SelectedPostionPopup = Handlebars.template({
	compiler: [7, ">= 4.0.0"],
	main: function(a, b, c, d, e) {
		var f, g = null != b ? b : {},
			h = c.helperMissing,
			i = a.escapeExpression;
		return '<div class="iw-wrap iw-selected-possition">\r\n    <div class="iw-status"> MOVE TO HERE ? </div>\r\n    <img id="current-position-move" src="images/move.svg" alt="' + i((f = null != (f = c.Name || (null != b ? b.Name : b)) ? f : h, "function" == typeof f ? f.call(g, {
			name: "Name",
			hash: {},
			data: e
		}) : f)) + ' icon" class="iw-icon">\r\n    <div class="iw-header iw-name">\r\n        <span class="iw-detail-header">Lat: ' + i((c.roundCoord || b && b.roundCoord || h).call(g, null != b ? b.Latitude : b, {
			name: "roundCoord",
			hash: {},
			data: e
		})) + ', </span>\r\n        <span class="iw-detail-header">Lng:' + i((c.roundCoord || b && b.roundCoord || h).call(g, null != b ? b.Longitude : b, {
			name: "roundCoord",
			hash: {},
			data: e
		})) + '</span>\r\n    </div>\r\n    <div class="iw-content">\r\n        <div class="iw-detail iw-latitude">\r\n            <span class="iw-detail-header">Latitude</span>\r\n            <span class="iw-detail-value">' + i((c.roundCoord || b && b.roundCoord || h).call(g, null != b ? b.Latitude : b, {
			name: "roundCoord",
			hash: {},
			data: e
		})) + '</span>\r\n        </div>\r\n        <div class="iw-detail iw-longitude">\r\n            <span class="iw-detail-header">Longitude</span>\r\n            <span class="iw-detail-value">' + i((c.roundCoord || b && b.roundCoord || h).call(g, null != b ? b.Longitude : b, {
			name: "roundCoord",
			hash: {},
			data: e
		})) + "</span>\r\n        </div>\r\n    </div>\r\n</div>"
	},
	useData: !0
}), this.app.templates.SnipePokemonItem = Handlebars.template({
	1: function(a, b, c, d, e) {
		return '    <div id="fountainTextG"><div id="fountainTextG_1" class="fountainTextG">W</div><div id="fountainTextG_2" class="fountainTextG">a</div><div id="fountainTextG_3" class="fountainTextG">l</div><div id="fountainTextG_4" class="fountainTextG">k</div><div id="fountainTextG_5" class="fountainTextG">i</div><div id="fountainTextG_6" class="fountainTextG">n</div><div id="fountainTextG_7" class="fountainTextG">g</div></div> \r\n'
	},
	compiler: [7, ">= 4.0.0"],
	main: function(a, b, c, d, e) {
		var f, g, h = null != b ? b : {},
			i = c.helperMissing,
			j = "function",
			k = a.escapeExpression;
		return '<div class="pokemon ' + k((g = null != (g = c.ClassName || (null != b ? b.ClassName : b)) ? g : i, typeof g === j ? g.call(h, {
			name: "ClassName",
			hash: {},
			data: e
		}) : g)) + '" data-pokemon-unique-id="' + k((g = null != (g = c.UniqueId || (null != b ? b.UniqueId : b)) ? g : i, typeof g === j ? g.call(h, {
			name: "UniqueId",
			hash: {},
			data: e
		}) : g)) + '">\r\n    <a class="delete " data-uniqueId="' + k((g = null != (g = c.UniqueId || (null != b ? b.UniqueId : b)) ? g : i, typeof g === j ? g.call(h, {
			name: "UniqueId",
			hash: {},
			data: e
		}) : g)) + '" title="Remove this Pokemon"></a>\r\n    <h1 class="name">' + k((g = null != (g = c.PokemonName || (null != b ? b.PokemonName : b)) ? g : i, typeof g === j ? g.call(h, {
			name: "PokemonName",
			hash: {},
			data: e
		}) : g)) + '</h1>\r\n    <div class="image-container">\r\n        <img src="images/pokemon/' + k((g = null != (g = c.Id || (null != b ? b.Id : b)) ? g : i, typeof g === j ? g.call(h, {
			name: "Id",
			hash: {},
			data: e
		}) : g)) + '.png" alt="' + k((g = null != (g = c.PokemonName || (null != b ? b.PokemonName : b)) ? g : i, typeof g === j ? g.call(h, {
			name: "PokemonName",
			hash: {},
			data: e
		}) : g)) + '" title="' + k((g = null != (g = c.PokemonName || (null != b ? b.PokemonName : b)) ? g : i, typeof g === j ? g.call(h, {
			name: "PokemonName",
			hash: {},
			data: e
		}) : g)) + '" />\r\n    </div>\r\n' + (null != (f = c.if.call(h, null != b ? b.IsCatching : b, {
			name: "if",
			hash: {},
			fn: a.program(1, e, 0),
			inverse: a.noop,
			data: e
		})) ? f : "") + '    <h3 class="distance">' + k((c.round || b && b.round || i).call(h, null != b ? b.Distance : b, 2, {
			name: "round",
			hash: {},
			data: e
		})) + 'm</h3>\r\n    <h3 class="timer">' + k((c.round || b && b.round || i).call(h, null != b ? b.Estimated : b, 1, {
			name: "round",
			hash: {},
			data: e
		})) + "/" + k((g = null != (g = c.Expired || (null != b ? b.Expired : b)) ? g : i, typeof g === j ? g.call(h, {
			name: "Expired",
			hash: {},
			data: e
		}) : g)) + '</h3>\r\n    <a class="snipe-him" data-uniqueId="' + k((g = null != (g = c.UniqueId || (null != b ? b.UniqueId : b)) ? g : i, typeof g === j ? g.call(h, {
			name: "UniqueId",
			hash: {},
			data: e
		}) : g)) + '" title="Snipe this Pokemon"></a>\r\n</div>'
	},
	useData: !0
}), this.app.templates.SnipePokemonMarker = Handlebars.template({
	compiler: [7, ">= 4.0.0"],
	main: function(a, b, c, d, e) {
		var f;
		return '<div class="marker snipe-marker" style="margin-top:-25px; margin-left:-25px;position: absolute;width: 100px;height: 100px;z-index: 100;background-color:rgba(234, 45, 90, 0.9);border-radius: 50%;">\r\n    <div style="width: 60px;height: 60px;background-image: url(\'images/pokemon/' + a.escapeExpression((f = null != (f = c.PokemonId || (null != b ? b.PokemonId : b)) ? f : c.helperMissing, "function" == typeof f ? f.call(null != b ? b : {}, {
			name: "PokemonId",
			hash: {},
			data: e
		}) : f)) + ".png');background-size: contain;background-position: center center;background-repeat: no-repeat;margin-top: 20px;margin-left: 20px;\"></div>\r\n</div>"
	},
	useData: !0
});
