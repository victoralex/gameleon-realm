
		
		npcScript[ 716 ] = function( npcObject )
		{
			
		
			npcObject.events._add( "show", function()
			{
				
		
				new spellEffects.EggPulse(	{
									targetCharacter: npcObject
								});
		
	
			});
		
	
		}
		
	