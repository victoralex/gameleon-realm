
		
		npcScript[ 693 ] = function( npcObject )
		{
			
		
			npcObject.events._add( "show", function()
			{
				
		
				new spellEffects.CaveDripEerie(	{
									targetCharacter: npcObject
								});
		
	
			});
		
	
		}
		
	