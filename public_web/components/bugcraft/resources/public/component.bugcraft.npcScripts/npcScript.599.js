
	npcScript[ 599 ] = function( npcObject )
	{
		npcObject.events._add( "show", function()
		{
			new spellEffects.wavesrythmical7sec({
													targetCharacter: npcObject
												});
		});
	}