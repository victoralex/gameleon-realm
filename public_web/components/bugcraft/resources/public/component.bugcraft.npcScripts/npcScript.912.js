
		
		npcScript[ 912 ] = function( npcObject )
		{
			
		
			npcObject.events._add( "show", function()
			{
				
		
				new spellEffects.ShipDroneScary(	{
									targetCharacter: npcObject
								});
		
	
			});
		
	
		}
		
	