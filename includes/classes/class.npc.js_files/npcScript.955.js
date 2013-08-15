
	
	"use strict";
	
	var log = require( "../class.log" );
	var realmConfig = require( "../../config.realm" ).config;
	
	 
		var quest = require( "../class.quest" );
	 
		var timerObject = require( "../class.timer" ).timer;
	
	
	
	exports.script = function( npcObject )
	{
		//
		//	Variables
		//
		
		var _iO = npcObject.getArgs().createdByInstanceObject,
			_cooldownPointer = null;
		
		
		var questIdConstant_19 = 58;
														
		var questParameterNameConstant_20 = "q58_1PartsRecovered";
														
		var numberConstant_21 = 1;
														
		var thisCharacterObjectConstant_40 = npcObject;
														
		var timerObjectConstant_44 = new timerObject({ instanceObject: _iO });
														
		var positiveNumberConstant_45 = 30000;
														
		var positiveNumberConstant_46 = 30000;
														
		var thisInstanceObjectConstant_52 = _iO;
														
		var zoneIdConstant_53 = 51;
														
		var objectIdConstant_54 = 958;
														
		
		//
		// Events override
		//
		
		
			npcObject.events._add( "use", function( args )
			{
				
								var byCharacterObject_2 = args.byCharacterObject;
	
				quest.questConditionUpdate(
														{
															characterObject: byCharacterObject_2,
	questId: questIdConstant_19,
	parameterName: questParameterNameConstant_20,
	value: numberConstant_21,
	
														}
													);
	thisCharacterObjectConstant_40.setUnUsable();
	timerObjectConstant_44.startTimer({
			minDelay: positiveNumberConstant_45,
	maxDelay: positiveNumberConstant_46,
	onFinalize: function( args )
								{
									thisCharacterObjectConstant_40.setUsable();
	
								},
	
		});
	thisInstanceObjectConstant_52.addObject(
						{
							zone_id: zoneIdConstant_53,
	object_pool_id: objectIdConstant_54,
	
						},
						
							function( characterObject )
							{
								var after = 
								function( args )
								{
									
								var characterObject_48 = args.characterObject;
	characterObject_48.bindToInstance(
			thisInstanceObjectConstant_52,
			
								function( args )
								{
									
								}
	
		);
	
								}
	
								
								after({ characterObject: characterObject });
							}
						
					);
	
			});
		
		
		//
		// Post all objects initialisation
		//
		
		this.postInit = function()
		{
			
		}
		
		//
		// Initialize
		//
		
		
		// bind to instance
		npcObject.events._add( "afterInit", function( args )
		{
			npcObject.bindToInstance( _iO, function() { } );
		});
		
	}
	