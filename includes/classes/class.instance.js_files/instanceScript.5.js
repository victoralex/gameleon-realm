		//	// New Gardenia	//		var log = require( "../class.log" );		exports.script = function( instanceObject )	{		instanceObject.sendBattlegroundStatisticsToAllPlayers();				var _spawnedObjectsNumber = 0;				var _spawnObject = function( after )		{			instanceObject.addObject(										{											zone_id: instanceObject.zone_id,											object_pool_id: 79										},										function( npcObject )										{											instanceObject.addObject(																		{																			zone_id: instanceObject.zone_id,																			object_pool_id: 78																		},																		function( npcObject )																		{																			after();																		}																	);										}									);		}				// spawn the NPCs required for this quest		var _spawnObjects = function()		{			if( _spawnedObjectsNumber > 0 )			{				_spawnedObjectsNumber = 0;				setTimeout( _spawnObjects, 15000 );								return;			}						_spawnObject( function()			{				_spawnedObjectsNumber++;								_spawnObjects();			});		}				_spawnObjects();	}																														