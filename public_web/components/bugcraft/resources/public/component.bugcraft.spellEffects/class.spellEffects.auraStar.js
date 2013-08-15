
	spellEffects.auraStar = function( args )
	{
		this.ID = spellEffects.layer[0].push( this ) - 1;
		this.characterSpellEffectID = args.targetCharacter._internal.spellEffects.push( this ) - 1;
		this.alpha = 1;
		this.offsetX = 50;
		this.offsetY = 50;
		this.rotation = Math.random() * (Math.PI * 2);
		this.deleteRange = 100;
		this.previousX = args.targetCharacter.characterData.character_zone_x - this.offsetX;
		this.previousY = args.targetCharacter.characterData.character_zone_y - this.offsetY;
		this.duration = 5000 - Component.bugcraft.latency;
		
		var self = this;
		
		var auraStarImageObject = new Image();
		auraStarImageObject.src = '/components/bugcraft/resources/public/component.bugcraft.spellEffects/images/aura/star/star_spinning' + args.component + '.png';
		
		//draw the auraStar
		this.draw = function()
		{
			Map.ctx.globalAlpha = self.alpha;
			
			Map.ctx.save();
			
			Map.ctx.translate( args.targetCharacter.characterData.character_zone_x + Map.viewPortX, args.targetCharacter.characterData.character_zone_y + Map.viewPortY );
			
			Map.ctx.rotate( self.rotation );
			
			Map.ctx.drawImage(
											auraStarImageObject,
											- self.offsetX,
											- self.offsetY
										);
									
			self.previousX = args.targetCharacter.characterData.character_zone_x - self.offsetX;
			self.previousY = args.targetCharacter.characterData.character_zone_y - self.offsetY;
										
			Map.ctx.restore();
			
			Map.ctx.globalAlpha = 1;
		}
		
		//remove the auraStar
		this.remove = function()
		{
			spellEffects.layerCleaner.push( this );
			spellEffects.layer[0][ this.ID ] = null;
			clearTimeout( _animateFunctionPointer );
			delete args.targetCharacter._internal.spellEffects[ this.characterSpellEffectID ];
		}

		switch( args.component )
		{
			case 0:		
				var _animateFunction =	function()
																	{
																		var auraStarSound = soundManager.createSound({
																				id: 'auraStar' + ( ++spellEffects.soundIncrementor ),
																				url: '/components/bugcraft/resources/public/component.bugcraft.spellEffects/sounds/aura/star_aura' + Math.floor( Math.random() * 2 ) + '.mp3',
																				volume: spellEffects.volumeByRange ( Component.bugcraft.currentCharacterObject.characterData.character_zone_x, Component.bugcraft.currentCharacterObject.characterData.character_zone_y, args.targetCharacter.characterData.character_zone_x, args.targetCharacter.characterData.character_zone_y, spellEffects.volumeRangeLong )
																		});

																		this.spellEffectSoundID = args.targetCharacter._internal.soundEffects.push( auraStarSound ) - 1;
																	
																		soundManager.play( 'auraStar' + spellEffects.soundIncrementor, 
																										{
																											onfinish: function () 
																											{
																												delete args.targetCharacter._internal.soundEffects[ self.spellEffectSoundID ];	
																											}
																										});

																	}			
			break;
			case 1:
				var _animateFunction =	function()
																	{
																		self.rotation -= Math.PI / 32;

																		_animateFunctionPointer = setTimeout( _animateFunction, 50 );
																	}						
			break;
			case 2:
				var _animateFunction =	function()
																	{
																		self.rotation += Math.PI / 32;

																		_animateFunctionPointer = setTimeout( _animateFunction, 50 );
																	}			
																	
			break;
		}
		
		var _animateFunctionPointer = setTimeout( _animateFunction, 10 );
		
		setTimeout( function() 
								{ 
									var _t = setInterval( function()
																		{
																			self.alpha -= 0.1;
																			
																			if( self.alpha > 0 )
																			{
																				return;
																			}
																			
																			self.remove();
																			
																			clearInterval( _t );
																			
																		}, 200 );
								}, self.duration );
	} //end spinning aura