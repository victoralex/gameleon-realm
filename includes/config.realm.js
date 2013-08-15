
	exports.config = {
		
		/*
			Mechanics
		*/
		
		realmLevelCap: 40,
		
		realmMaxCharacterDistance: 480,		// distance in pixels
		
		realmInstanceGridCellWidth: 8,
		realmInstanceGridCellHeight: 8,
		
		realmInstanceCloseOnBattlegroundFinishInterval: 120000,		// 120 seconds
		realmInstanceResurrectionInterval: 30000,								// 30 seconds
		realmCharacterDisconnectTimeout: 5000,									// 15 seconds
		
		realmInstanceEnqueueRandom: {
			
			name: "Random Battleground",
			description: "Random Battleground Description",
			
			winXP: 200,
			lossXP: 100,
			winPolen: 70,
			lossPolen: 30
			
		},
		
		realmServerName: "Harendar",
		
		instanceQueueAutoStartTimeout: 60000,
		instanceQueueAutoRemoveCharacterTimeout: 20000,
		instanceQueueAutoCloseTimeout: 60000,
		
		instanceAuraChecksInterval: 750,
		
		instanceLagChecksInterval: 1000,
		instanceLagChecksMaxDifference: 1050,
		
		questThresholdHigh: 5,
		questThresholdLow: -5,
		
		characterAutoHPRegenIncrement: 1,
		characterAutoHPRegenIntervalPeriodic: 5000,
		characterAutoHPRegenIntervalStart: 10000,
		
		/*
			DNS
		*/
		
		realmServerHost: "harendar.gameleon.co",
		loginServerHost: "login.gameleon.co",
		
		/*
			Technical
		*/
		
		realmServerPort: 10080,
		
		realmDatabaseHost: "sql.harendar.gameleon.co",
		realmDatabaseUser: "realm",
		realmDatabasePass: "parola",
		realmDatabaseDB: "bugtopia_harendar",
		
		realmInstallPath: "/www/harendar.gameleon.co/",
		
		realmSyncSQLUnixSocket: "/tmp/harendar.gameleon.co.sql.sock",
		realmSyncSQLTransactionDelay: 2000,
		
		loginServerPort: 10081,
		loginServerKeepAliveInterval: 2500,
		
		questServer: {
			redisChannel: "questServerChannel",
			questScriptsPath: "/www/harendar.gameleon.co/includes/classes/class.quest.js_files/"
		},
		
		achievementServer: {
			redisChannel: "achievementServerChannel",
			achievementScriptsPath: "/www/harendar.gameleon.co/includes/classes/class.achievement.js_files/"
		},
		
		libraries: {
			mysqlPath: "/www/harendar.gameleon.co/includes/node_modules/mysql-libmysqlclient",
			mysqlSyncPath: "/www/harendar.gameleon.co/includes/node_modules/mysql",
			redisPath: "/www/harendar.gameleon.co/includes/node_modules/redis/index",
			cliColorPath: "/www/harendar.gameleon.co/includes/node_modules/cli-color",
			libXMLJSPath: "/www/harendar.gameleon.co/includes/node_modules/libxmljs",
			webSocketPath: "/www/harendar.gameleon.co/includes/node_modules/websocket",
			miksagoHixieWebSocketPath: "/www/harendar.gameleon.co/includes/node_modules/websocket-server/lib/ws/connection",
			miksagoHixieConnectionPath: "/www/harendar.gameleon.co/includes/node_modules/websocket-server",
			bufferedWriter: "/www/harendar.gameleon.co/includes/node_modules/buffered-writer"
		},
		
		chat:
		{
			roles:
			{
				user: [ "emote", "join", "leave", "changeChannel", "whisper", "levelSet", "server" ],
				admin: [ "emote", "join", "leave", "changeChannel", "whisper", "levelSet", "server" ]
			},
			
			instanceChannels: [ "general", "trade" ],
			
			limitMessagesAmount: 5,
			limitMessagesInterval: 10000
		},
		
		chatTranslationsHash: {
								anterium: {
											1: [
													'c',
													'k',
													't',
													'p',
													'r',
													'z'
												],
												
											2: [
													'rk',
													'ip',
													'ik',
													'ki',
													'ek',
													'ss',
													'ck',
													'mr',
													'eb',
													'ei',
													'ku'
												],
												
											3: [
													'rah',
													'ckk',
													'api',
													'fwi',
													'zel',
													'ytt',
													'ara',
													'ton',
													'tis',
													'kai',
													'kss',
													'sst',
													'clk',
													'lks',
													'kus',
													'cro'
												],
												
											4: [
													'fomi',
													'thyk',
													'agni',
													'sss',
													'ruch',
													'klik',
													'kara',
													'allen',
													'stes',
													'apik',
													'kyke',
													'onos',
													'nyos',
													'klak',
													'ceck',
													'aros'
												],
												
											5: [
													'rarch',
													'sekto',
													'pteri',
													'iruve',
													'nobal',
													'ansek',
													'karaa',
													'reska',
													'entos',
													'eyney',
													'yyros',
													'taros',
													'nekop',
													'makan',
													'mekke',
													'zelki'
												],
												
											6: [
													'kimik',
													'pakpak',
													'thykes',
													'bahin',
													'benkka',
													'karab',
													'akakre',
													'entasi',
													'eirous',
													'paiken',
													'sagogi',
													'entos'
												],
												
											7: [
													'ypoedi',
													'jiruund',
													'kharabi',
													'kitkalu',
													'tigkalu',
													'klikvol',
													'akakrep',
													'entomon',
													'egneys',
													'yttfomi'
												],
												
											8: [
													'dekketis',
													'metogeni',
													'argytero',
													'eksagogi',
													'mekethri',
													'skordyra',
													'myrmosic'
												],
												
											9: [
													'gynysteri',
													'dekketias',
													'mnopteriks',
													'paikenzel',
													'kaetisant',
													'argyteros',
													'myrmiken'
												]
										},
										
								hegemony: {
											1: [
													'a',
													'e',
													'i',
													'o',
													'u',
													'y'
												],
												
											2: [
													'ji',
													'ma',
													'ta',
													're',
													'pe',
													'si',
													'se',
													'es',
													'vo',
													'lo'
												],
												
											3: [
													'hem',
													'bim',
													'bzz',
													'zzt',
													'was',
													'hyt',
													'den',
													'der',
													'zhz',
													'zzm',
													'mzz',
													'mzm',
													'auf',
													'tep',
													'ang'
												],
												
											4: [
													'koko',
													'hyon',
													'voli',
													'ovat',
													'desn',
													'dres',
													'byen',
													'bone',
													'lise',
													'dern',
													'zumz',
													'frond',
													'fule',
													'tarn',
													'lart',
													'twee'
												],
												
											5: [
													'minke',
													'lentaa',
													'jalke',
													'enlik',
													'tulen',
													'rabee',
													'slegi',
													'hemma',
													'zzumz',
													'zanch',
													'tubel',
													'bawur',
													'firre',
													'vroee',
													'geste',
													'tulle'
												],
												
											6: [
													'hyonte',
													'minkke',
													'bykorf',
													'reteen',
													'voodest',
													'sekten',
													'senare',
													'frondig',
													'firrke',
													'feuerg',
													'gestel',
													'semile',
													'rocaste',
													'nucaste'
												],
												
											7: [
													'vuodesti',
													'alussa',
													'heimsal',
													'levinud',
													'inheems',
													'serfilm',
													'eermico',
													'heimorf',
													'fleyder',
													'fleydon',
													'dibfley'
												],
												
											8: [
													'kemenlik',
													'bheimons',
													'foranden',
													'heimsdorf',
													'korfleyd',
													'dwarsder',
													'cumfaarg',
													'kotoisin'
												],
												
											9: [
													'kotoisine',
													'zhzsenare',
													'bawurovat',
													'hyonofule'
												]
										}
							},
							
		chatTranslationsDictionary: {
										ant: {
												anterium: 'fomi',
												hegemony: 'enlik'
											},
											
										bee: {
												anterium: 'apik',
												hegemony: 'bykorf'
											},
										
										fireant: {
												anterium: 'yttfomi',
												hegemony: 'ferenlik'
											},
										
										mantis: {
												anterium: 'makan',
												hegemony: 'jalke'
											},
										
										ladybug: {
												anterium: 'buruk',
												hegemony: 'lentaa'
											},
										
										butterfly: {
												anterium: 'nobul',
												hegemony: 'voli'
											},
										
										honey: {
												anterium: 'myel',
												hegemony: 'hyon'
											},
										
										nectar: {
												anterium: 'ktaros',
												hegemony: 'reteen'
											},
										
										polen: {
												anterium: 'nyamuk',
												hegemony: 'tulen'
											},
										
										amber: {
												anterium: 'nekop',
												hegemony: 'sir'
											},
										
										hello: {
												anterium: 'hromik',
												hegemony: 'hedel'
											},
										
										lol: {
												anterium: 'ike',
												hegemony: 'kos'
											},
										
										no: {
												anterium: 'nk',
												hegemony: 'nob'
											},
										
										yes: {
												anterium: 'ei',
												hegemony: 'ji'
											},
										
										wax: {
												anterium: 'agni',
												hegemony: 'was'
											},
										
										beetle: {
												anterium: 'kharabi',
												hegemony: 'rabee'
											}
									}
	};
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	