
	npcScript[ 640 ] = function( npcObject )
	{
		npcObject.events._add( "show", function()
		{
			new spellEffects.LargeWaveLoop({
													targetCharacter: npcObject
												});
		});
	}