	
	//
	// Whole Lotta Love ( 44 )
	//
	
	var log = require('../class.log'),
		realmConfig = require('../../config.realm').config,
		quest = require('../class.quest'),
		questCondition = require('../class.questCondition').condition;
	
	exports.questObject = function( args )
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
																
																quest.markCompleted({
																						characterId: _args.characterId,
																						questId: self.id,
																						questServer: args.questServer,
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
					quest.markCompleted({
											characterId: _args.characterId,
											questId: self.id,
											questServer: args.questServer,
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
		
		this.id = 44;
		
		var nrConditions = 2;
		
		this.conditions['q44_1CondomPickedUp'] = new questCondition({parameterName:'q44_1CondomPickedUp', targetValue:1, quest: self, questServer: args.questServer});this.conditions['q44_2HornyTurtleFucked'] = new questCondition({parameterName:'q44_2HornyTurtleFucked', targetValue:1, quest: self, questServer: args.questServer});
		
		return self;
	}
	