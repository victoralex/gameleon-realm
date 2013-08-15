	
	"use strict"
	
	var quest = require( "../class.quest" ),
			npcBehaviors = require( "../class.npcBehaviors" ),
			stats = require( "../class.stats" ),
			chatChannel = require( "../class.chatChannel" ),
			achievementsLibrary = require( "../class.achievementsLibrary" ),
			randomGenerator = require( "../class.randomGenerator" ),
			loot = {};
	
	exports.loot = loot;

	
	
	
	
	loot[ 1 ] = {
	
		
	questIdConstant_10: 66,
														questParameterNameConstant_11: "q66_1seethecondom",
														numberConstant_12: 1,
														onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
				quest.questConditionUpdate(
														{
															characterObject: byCharacterObject_4,
																	questId: this.questIdConstant_10,
																	parameterName: this.questParameterNameConstant_11,
																	value: this.numberConstant_12,
																	
														}
													);
	
		},
	
	};
	
	
	
	
	
	
	loot[ 2 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 3 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 4 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 5 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 6 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 7 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 8 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 9 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 10 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 11 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 12 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 13 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 14 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 15 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 16 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 17 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 18 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 19 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 20 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 21 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 22 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 23 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 24 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 25 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 26 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 27 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 28 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 29 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 30 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 31 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 32 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 33 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 34 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 35 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 36 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 37 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 38 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 39 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 40 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 41 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 42 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 43 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 44 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 45 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 46 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 47 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 48 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 49 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 50 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 51 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 52 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 53 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 54 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 55 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 56 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 57 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 58 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 59 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 60 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 61 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 62 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 63 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 64 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 65 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 66 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 67 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 68 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 69 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 70 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 71 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 72 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 73 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 74 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 75 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 76 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 77 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 78 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 79 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 80 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 81 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 82 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 83 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 84 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 85 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 86 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 87 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 88 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 89 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 90 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 91 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 92 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 93 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 94 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 95 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 96 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 97 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 98 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 99 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 100 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 101 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 102 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 103 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 104 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 105 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 106 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 107 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 108 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 109 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 110 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 111 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 112 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 113 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 114 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 115 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 116 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 117 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 118 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 119 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 120 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 121 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 122 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 123 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 124 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 125 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 126 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 127 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 128 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 129 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 130 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 131 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 132 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 133 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 134 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 135 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 136 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 137 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 138 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 139 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 140 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 141 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 142 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 143 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 144 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 145 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 146 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 147 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 148 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 149 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 150 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 151 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 152 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 153 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 154 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 155 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 156 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 157 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 158 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 159 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 160 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 161 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 162 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 163 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 164 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 165 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 166 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 167 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 168 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 169 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 170 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 171 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 172 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 173 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 174 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 175 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 176 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 177 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 178 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 179 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 180 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 181 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 182 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 183 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 184 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 185 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 186 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 187 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 188 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 189 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 190 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 191 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 192 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 193 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 194 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 195 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 196 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 197 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 198 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 199 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 200 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 201 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 202 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 203 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 204 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 205 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 206 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 207 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 208 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 209 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 210 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 211 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 212 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 213 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 214 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 215 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 216 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 217 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 218 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 219 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 220 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 221 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 222 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 223 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 224 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 225 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 226 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 227 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 228 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 229 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 230 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 231 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 232 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 233 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 234 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 235 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 236 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 237 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 238 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 239 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 240 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 241 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 242 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 243 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 244 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 245 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 246 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 247 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 248 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 249 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 250 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 251 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 252 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 253 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 254 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 255 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 256 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 257 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 258 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 259 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 260 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 261 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 262 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 263 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 264 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 265 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 266 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 267 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 268 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 269 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 270 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 271 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 272 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 273 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 274 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 275 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 276 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 277 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 278 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 279 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 280 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 281 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 282 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 283 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 284 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 285 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 286 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	
	loot[ 287 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 288 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 289 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 290 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 291 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 292 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 293 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 294 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 295 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 296 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 297 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 298 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 299 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 300 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 301 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 302 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 303 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 304 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 305 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 306 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 307 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 308 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 309 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 310 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 311 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 312 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 313 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 314 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 315 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 316 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 317 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 318 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 319 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 320 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 321 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 322 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 323 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 324 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 325 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 326 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 327 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 328 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 329 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 330 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 331 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 332 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 333 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 334 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 335 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 336 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 337 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 338 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 339 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 340 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 341 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 342 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 343 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 344 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 345 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 346 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 347 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 348 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 349 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 350 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 351 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 352 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 353 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 354 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 355 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 356 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 357 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 358 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 359 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 360 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 361 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 362 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 363 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 364 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 365 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 366 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 367 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 368 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 369 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 370 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 371 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 372 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 373 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 374 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 375 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 376 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 377 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 378 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 379 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 380 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 381 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 382 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 383 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 384 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 385 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 386 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 387 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 388 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 389 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 390 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 391 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 392 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 393 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 394 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 395 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 396 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 397 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 398 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 399 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 400 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 401 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 402 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 403 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 404 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 405 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 406 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 407 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 408 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 409 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 410 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 411 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 412 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 413 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 414 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 415 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 416 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 417 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 418 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 419 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 420 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 421 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 422 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 423 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 424 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 425 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 426 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 427 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 428 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 429 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 430 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 431 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 432 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 433 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 434 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 435 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 436 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 437 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 438 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 439 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 440 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 441 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 442 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 443 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 444 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 445 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 446 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 447 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 448 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 449 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 450 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 451 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 452 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 453 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 454 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 455 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 456 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 457 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 458 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 459 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 460 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 461 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 462 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 463 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 464 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 465 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 466 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 467 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 468 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 469 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 470 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 471 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 472 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 473 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 474 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 475 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 476 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 477 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 478 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 479 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 480 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 481 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 482 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 483 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 484 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 485 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 486 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 487 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 488 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 489 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 490 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 491 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 492 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 493 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 494 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 495 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 496 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 497 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 498 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 499 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 500 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 501 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 502 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 503 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 504 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 505 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 506 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 507 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 508 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 509 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 510 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 511 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 512 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 513 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 514 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 515 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 516 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 517 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 518 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 519 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 520 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 521 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 522 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 523 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 524 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 525 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 526 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 527 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 528 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 529 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 530 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 531 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 532 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 533 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 534 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 535 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 536 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 537 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 538 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 539 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 540 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 541 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 542 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 543 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 544 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 545 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 546 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 547 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 548 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 549 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 550 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 551 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 552 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 553 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 554 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 555 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 556 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 557 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 558 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 559 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 560 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 561 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 562 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 563 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 564 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 565 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 566 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 567 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 568 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 569 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 570 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 571 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 572 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 573 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 574 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 575 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 576 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 577 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 578 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 579 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 580 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 581 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 582 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 583 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 584 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 585 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 586 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 587 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 588 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 589 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 590 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 591 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 592 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 593 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 594 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 595 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 596 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 597 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 598 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 599 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 600 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 601 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 602 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 603 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 604 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 605 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 606 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 607 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 608 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 609 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 610 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 611 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 612 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 613 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 614 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 615 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 616 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 617 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 618 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 619 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 620 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 621 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 622 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 623 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 624 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 625 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 626 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 627 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 628 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 629 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 630 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 631 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 632 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 633 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 634 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 635 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 636 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 637 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 638 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 639 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 640 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 641 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 642 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 643 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 644 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 645 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 646 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 647 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 648 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 649 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 650 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 651 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 652 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 653 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 654 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 655 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 656 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 657 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 658 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 659 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 660 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 661 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 662 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 663 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 664 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 665 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 666 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 667 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 668 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 669 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 670 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 671 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 672 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 673 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 674 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 675 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 676 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 677 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 678 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 679 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 680 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 681 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 682 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 683 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 684 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 685 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 686 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 687 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 688 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 689 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 690 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 691 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 692 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 693 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 694 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 695 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 696 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 697 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 698 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 699 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 700 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 701 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 702 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 703 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 704 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 705 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 706 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 707 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 708 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 709 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 710 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 711 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 712 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 713 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 714 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 715 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 716 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 717 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 718 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 719 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 720 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 721 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 722 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 723 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 724 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 725 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 726 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 727 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 728 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 729 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 730 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 731 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 732 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 733 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 734 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 735 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 736 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 737 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 738 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 739 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 740 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 741 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 742 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 743 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 744 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 745 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 746 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 747 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 748 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 749 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 750 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 751 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 752 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 753 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 754 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 755 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 756 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 757 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 758 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 759 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 760 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 761 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 762 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 763 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 764 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 765 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 766 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 767 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 768 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 769 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 770 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 771 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 772 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 773 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 774 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 775 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 776 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 777 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 778 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 779 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 780 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 781 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 782 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 783 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 784 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 785 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 786 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 787 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 788 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 789 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 790 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 791 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 792 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 793 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 794 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 795 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 796 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 797 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 798 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 799 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 800 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 801 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 802 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 803 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 804 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 805 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 806 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 807 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 808 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 809 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 810 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 811 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 812 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 813 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 814 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 815 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 816 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 817 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 818 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 819 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 820 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 821 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 822 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 823 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 824 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 825 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 826 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 827 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 828 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 829 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 830 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 831 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 832 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 833 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 834 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 835 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 836 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 837 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 838 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 839 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 840 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 841 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 842 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 843 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 844 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 845 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 846 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 847 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 848 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 849 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 850 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 851 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 852 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 853 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 854 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 855 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 856 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 857 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 858 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 859 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 860 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 861 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 862 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 863 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 864 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 865 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 866 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 867 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 868 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 869 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 870 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 871 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 872 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 873 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 874 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 875 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 876 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 877 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 878 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 879 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 880 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 881 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 882 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 883 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 884 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 885 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 886 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 887 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 888 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 889 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 890 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 891 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 892 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 893 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 894 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 895 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 896 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 897 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 898 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 899 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 900 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 901 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 902 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 903 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 904 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 905 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 906 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 907 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 908 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 909 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 910 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 911 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 912 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 913 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 914 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 915 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 916 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 917 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 918 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 919 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 920 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 921 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 922 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 923 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 924 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 925 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 926 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 927 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 928 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 929 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 930 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 931 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 932 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 933 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 934 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 935 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 936 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 937 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 938 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 939 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 940 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 941 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 942 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 943 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 944 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 945 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 946 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 947 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 948 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 949 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 950 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 951 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 952 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 953 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 954 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 955 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 956 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 957 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 958 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 959 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 960 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 961 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 962 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 963 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 964 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 965 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 966 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 967 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 968 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 969 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 970 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 971 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 972 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 973 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 974 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 975 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 976 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 977 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 978 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 979 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 980 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 981 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 982 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 983 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 984 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 985 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 986 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 987 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 988 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 989 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 990 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 991 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 992 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 993 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 994 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 995 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 996 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 997 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 998 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 999 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1000 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1001 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1002 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1003 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1004 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1005 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1006 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1007 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1008 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1009 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1010 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1011 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1012 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1013 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1014 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1015 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1016 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1017 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1018 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1019 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1020 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1021 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1022 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1023 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1024 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1025 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1026 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1027 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1028 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1029 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1030 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1031 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1032 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1033 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1034 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1035 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1036 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1037 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1038 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1039 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1040 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1041 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1042 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1043 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1044 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1045 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1046 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1047 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1048 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1049 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1050 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1051 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1052 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1053 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1054 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1055 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1056 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1057 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1058 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1059 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1060 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1061 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1062 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1063 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1064 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1065 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1066 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1067 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1068 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1069 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1070 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1071 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1072 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1073 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1074 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1075 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1076 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1077 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1078 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1079 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1080 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1081 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1082 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1083 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1084 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1085 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1086 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1087 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1088 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1089 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1090 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1091 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1092 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1093 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1094 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1095 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1096 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1097 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1098 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1099 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1100 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1101 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1102 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1103 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1104 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1105 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1106 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1107 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1108 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1109 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1110 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1111 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1112 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1113 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1114 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1115 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1116 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1117 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1118 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1119 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1120 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1121 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1122 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1123 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1124 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1125 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1126 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1127 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1128 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1129 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1130 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1131 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1132 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1133 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1134 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1135 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1136 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1137 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1138 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1139 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1140 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1141 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1142 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1143 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1144 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1145 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1146 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1147 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1148 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1149 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1150 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1151 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1152 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1153 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1154 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1155 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1156 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1157 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1158 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1159 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1160 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1161 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1162 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1163 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1164 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1165 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1166 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1167 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1168 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1169 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1170 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1171 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1172 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1173 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1174 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1175 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1176 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1177 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1178 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1179 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1180 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1181 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1182 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1183 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1184 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1185 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1186 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1187 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1188 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1189 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1190 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1191 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1192 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1193 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1194 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1195 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1196 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1197 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1198 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1199 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1200 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1201 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1202 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1203 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1204 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1205 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1206 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1207 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1208 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1209 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1210 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1211 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1212 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1213 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1214 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1215 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1216 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1217 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1218 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1219 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1220 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1221 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1222 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1223 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1224 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1225 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1226 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1227 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1228 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1229 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1230 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1231 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1232 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1233 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1234 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1235 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1236 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1237 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1238 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1239 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1240 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1241 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1242 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1243 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1244 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1245 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1246 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1247 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1248 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1249 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1250 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1251 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1252 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1253 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1254 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1255 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1256 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1257 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1258 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1259 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1260 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1261 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1262 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1263 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1264 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1265 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1266 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1267 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1268 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1269 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1270 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1271 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1272 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1273 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1274 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1275 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1276 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1277 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1278 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1279 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1280 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1281 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1282 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1283 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1284 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1285 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1286 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1287 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1288 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1289 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1290 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1291 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1292 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1293 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1294 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1295 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1296 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1297 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1298 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1299 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1300 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1301 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1302 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1303 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1304 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1305 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1306 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1307 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1308 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1309 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1310 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1311 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1312 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1313 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1314 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1315 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1316 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1317 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1318 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1319 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1320 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1321 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1322 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1323 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1324 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1325 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1326 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1327 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1328 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1329 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1330 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1331 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1332 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1333 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1334 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1335 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1336 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1337 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1338 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1339 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1340 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1341 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1342 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1343 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1344 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1345 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1346 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1347 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1348 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1349 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1350 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1351 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1352 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1353 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1354 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1355 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1356 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1357 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1358 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1359 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1360 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1361 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1362 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1363 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1364 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1365 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1366 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1367 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1368 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1369 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1370 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1371 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1372 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1373 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1374 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1375 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1376 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1377 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1378 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1379 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1380 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1381 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1382 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1383 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1384 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1385 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1386 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1387 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1388 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1389 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1390 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1391 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1392 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1393 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1394 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1395 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1396 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1397 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1398 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1399 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1400 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1401 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1402 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1403 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1404 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1405 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1406 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1407 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1408 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1409 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1410 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1411 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1412 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1413 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1414 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1415 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1416 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1417 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1418 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1419 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1420 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1421 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1422 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1423 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1424 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1425 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1426 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1427 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1428 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1429 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1430 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1431 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1432 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1433 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1434 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1435 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1436 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1437 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1438 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1439 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1440 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1441 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1442 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1443 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1444 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1445 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1446 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1447 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1448 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1449 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1450 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1451 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1452 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1453 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1454 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1455 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1456 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1457 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1458 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1459 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1460 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1461 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1462 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1463 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1464 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1465 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1466 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1467 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1468 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1469 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1470 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1471 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1472 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1473 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1474 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1475 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1476 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1477 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1478 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1479 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1480 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1481 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1482 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1483 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1484 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1485 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1486 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1487 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1488 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1489 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1490 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1491 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1492 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1493 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1494 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1495 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1496 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1497 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1498 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1499 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1500 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1501 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1502 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1503 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1504 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1505 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1506 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1507 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1508 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1509 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1510 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1511 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1512 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1513 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1514 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1515 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1516 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1517 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1518 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1519 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1520 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1521 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1522 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1523 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1524 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1525 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1526 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1527 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1528 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1529 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1530 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1531 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1532 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1533 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1534 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1535 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1536 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1537 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1538 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1539 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1540 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1541 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1542 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1543 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1544 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1545 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1546 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1547 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1548 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1549 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1550 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1551 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1552 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1553 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1554 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1555 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1556 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1557 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1558 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1559 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1560 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1561 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1562 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1563 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1564 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1565 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1566 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1567 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1568 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1569 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1570 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1571 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1572 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1573 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1574 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1575 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1576 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1577 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1578 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1579 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1580 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1581 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1582 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1583 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1584 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1585 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1586 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1587 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1588 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1589 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1590 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1591 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1592 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1593 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1594 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1595 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1596 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1597 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1598 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1599 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1600 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1601 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1602 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1603 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1604 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1605 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1606 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1607 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1608 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1609 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1610 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1611 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1612 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1613 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1614 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1615 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1616 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1617 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1618 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1619 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1620 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1621 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1622 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1623 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1624 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1625 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1626 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1627 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1628 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1629 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1630 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1631 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1632 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1633 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1634 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1635 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1636 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1637 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1638 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1639 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1640 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1641 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1642 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1643 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1644 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1645 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1646 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1647 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1648 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1649 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1650 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1651 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1652 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1653 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1654 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1655 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1656 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1657 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1658 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1659 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1660 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1661 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1662 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1663 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1664 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1665 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1666 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1667 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1668 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1669 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1670 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1671 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1672 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1673 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1674 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1675 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1676 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1677 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1678 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1679 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1680 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1681 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1682 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1683 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1684 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1685 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1686 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1687 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1688 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1689 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1690 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1691 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1692 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1693 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1694 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1695 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1696 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1697 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1698 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1699 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1700 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1701 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1702 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1703 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1704 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1705 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1706 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1707 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1708 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1709 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1710 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1711 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1712 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1713 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1714 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1715 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1716 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1717 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1718 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1719 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1720 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1721 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1722 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1723 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1724 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1725 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1726 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1727 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1728 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1729 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1730 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1731 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1732 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1733 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1734 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1735 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1736 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1737 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1738 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1739 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1740 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1741 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1742 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1743 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1744 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1745 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1746 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1747 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1748 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1749 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1750 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1751 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1752 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1753 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1754 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1755 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1756 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1757 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1758 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1759 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1760 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1761 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1762 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1763 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1764 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1765 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1766 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1767 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1768 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1769 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1770 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1771 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1772 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1773 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1774 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1775 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1776 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1777 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1778 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1779 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1780 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1781 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1782 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1783 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1784 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1785 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1786 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1787 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1788 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1789 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1790 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1791 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1792 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1793 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1794 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1795 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1796 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1797 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1798 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1799 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1800 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1801 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1802 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1803 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1804 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1805 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1806 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1807 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1808 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1809 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1810 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1811 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1812 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1813 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1814 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1815 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1816 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1817 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1818 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1819 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1820 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1821 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1822 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1823 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1824 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1825 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1826 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1827 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1828 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1829 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1830 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1831 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1832 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1833 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1834 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1835 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1836 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1837 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1838 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1839 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1840 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1841 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1842 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1843 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1844 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1845 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1846 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1847 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1848 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1849 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1850 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1851 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1852 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1853 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1854 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1855 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1856 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1857 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1858 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1859 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1860 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1861 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1862 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1863 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1864 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1865 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1866 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1867 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1868 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1869 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1870 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1871 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1872 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1873 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1874 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1875 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1876 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1877 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1878 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1879 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1880 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1881 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1882 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1883 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1884 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1885 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1886 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1887 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1888 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1889 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1890 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1891 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1892 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1893 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1894 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1895 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1896 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1897 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1898 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1899 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1900 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1901 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1902 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1903 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1904 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1905 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1906 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1907 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1908 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1909 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1910 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1911 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1912 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1913 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1914 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1915 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1916 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1917 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1918 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1919 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1920 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1921 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1922 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1923 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1924 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1925 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1926 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1927 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1928 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1929 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1930 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1931 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1932 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1933 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1934 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1935 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1936 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1937 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1938 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1939 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1940 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1941 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1942 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1943 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1944 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1945 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1946 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1947 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1948 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};
	
	
	
	
	
	loot[ 1949 ] = {
	
		
	onUse: function( args )
		{
			
								var byCharacterObject_1 = args.byCharacterObject;
	
		},
	onEquip: function( args )
		{
			
								var byCharacterObject_2 = args.byCharacterObject;
	
		},
	onUnequip: function( args )
		{
			
								var byCharacterObject_3 = args.byCharacterObject;
	
		},
	onGrab: function( args )
		{
			
								var byCharacterObject_4 = args.byCharacterObject;
	
								var fromCharacterObject_5 = args.fromCharacterObject;
	
		},
	
	};