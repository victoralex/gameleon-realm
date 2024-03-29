	
	//
	// Sweet Love ( 3 )
	//
	
	"use strict";
	
	var log = require('../class.log'),
		realmConfig = require('../../config.realm').config,
		achievementsLibrary = require('../class.achievementsLibrary'),
		achievementCondition = require('../class.achievementCondition').condition;
	
	exports.achievementObject = function( args )
	{ 
		var self = this;
		this.conditions = {};
		this.checkConditions = function( _args )
		{
			var conditionsCompleted = 0;
			//see if condition is met
			var _callCondition = function( parameterName )
			{
				self.conditions[parameterName].checkState({
															characterId: _args.characterId,
															after: function()
															{
																conditionsCompleted++;
																
																if( conditionsCompleted < nrConditions )
																{
																	return;
																}
																
																achievementsLibrary.finalizeAchievement({
																									characterId: _args.characterId,
																									achievementId: self.id,
																									achievementServer: args.achievementServer,
																									after: function(){}
																								});
															}
														});
			}
			
			var _checkAllConditions = function( )
			{
				for( var i in self.conditions )
				{
					_callCondition(i);
				}
			}
			
			//if a conditions value is already known, start the check with it
			if( "parameterName" in _args )
			{
				if( self.conditions[ _args.parameterName ].targetValue > _args.value )
				{
					return;
				}
				
				if( nrConditions == 1 )
				{
					achievementsLibrary.finalizeAchievement({
													characterId: _args.characterId,
													achievementId: self.id,
													achievementServer: args.achievementServer,
													after: function(){}
												});
					return;
				}
			}
			
			_checkAllConditions();
		}
		
		//
		// Variables
		//
		
		this.id = 3;
		
		var nrConditions = 2;
		
		this.conditions['a3_1makesweetlovetome'] = new achievementCondition({parameterName:'a3_1makesweetlovetome', targetValue:999, achievement: self, achievementServer: args.achievementServer});this.conditions['a3_2seethesky'] = new achievementCondition({parameterName:'a3_2seethesky', targetValue:5, achievement: self, achievementServer: args.achievementServer});
		
		return self;
	}
	