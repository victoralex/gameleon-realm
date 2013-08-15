
	spellEffects.teleportComplete = function( args )
	{
		this.ID = spellEffects.layer[1].push( this ) - 1;
		this.characterSpellEffectID = args.targetCharacter._internal.spellEffects.push( this ) - 1;
		
		this.draw = function()
		{
			
		}
		
		var effect0 = new spellEffects.teleportAura({ 			
				sourceCharacter: args.sourceCharacter,														
				targetCharacter: args.targetCharacter,
				component: 0
		});
		var effect1 = new spellEffects.teleportAura({ 																							
				sourceCharacter: args.sourceCharacter,
				targetCharacter: args.targetCharacter,
				component: 1
		});
		var effect2 = new spellEffects.teleportAura({ 																						
				sourceCharacter: args.sourceCharacter,
				targetCharacter: args.targetCharacter,
				component: 2
		});	
		var effect00 = new spellEffects.teleport({ 			
				sourceCharacter: args.sourceCharacter,														
				targetCharacter: args.targetCharacter,
				component: 0
		});
		var effect01 = new spellEffects.teleport({ 																							
				sourceCharacter: args.sourceCharacter,
				targetCharacter: args.targetCharacter,
				component: 1
		});

		this.remove = function()
		{
			effect0.remove();
			effect1.remove();
			effect2.remove();
			effect00.remove();
			effect01.remove();
		}
	}