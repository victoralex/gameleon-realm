
	spellEffects.slashGreen = function( args )
	{
		this.ID = spellEffects.layer[1].push( this ) - 1;
		this.characterSpellEffectID = args.targetCharacter._internal.spellEffects.push( this ) - 1;
		this.alpha = 1;
		this.rotation = Math.random() * (Math.PI * 2);
		this.offsetX = 50;
		this.offsetY = 30;
		this.deleteRange = 100;
		this.previousX = args.targetCharacter.characterData.character_zone_x - this.offsetX;
		this.previousY = args.targetCharacter.characterData.character_zone_y - this.offsetY - 20;
		
		var self = this;
		
		var slashGreenImageObject = new Image();
		slashGreenImageObject.src = '/components/bugcraft/resources/public/component.bugcraft.spellEffects/images/slash/green/slashgreen1.png';
		
		var slashGreenSound = soundManager.createSound({
				id: 'slashGreen' + ( ++spellEffects.soundIncrementor ),
				url: '/components/bugcraft/resources/public/component.bugcraft.spellEffects/sounds/slash/swosh_0' + Math.floor( Math.random() * 9 ) + '.mp3',
				volume: spellEffects.volumeByRange ( Component.bugcraft.currentCharacterObject.characterData.character_zone_x, Component.bugcraft.currentCharacterObject.characterData.character_zone_y, args.targetCharacter.characterData.character_zone_x, args.targetCharacter.characterData.character_zone_y, spellEffects.volumeRangeLong )
		});
		
		this.spellEffectSoundID = args.targetCharacter._internal.soundEffects.push( slashGreenSound ) - 1;
		
		soundManager.play( 'slashGreen' + spellEffects.soundIncrementor, 
										{
											onfinish: function () 
											{
												delete args.targetCharacter._internal.soundEffects[ self.spellEffectSoundID ];	
											}
										});
		
		//draw the slashGreen effect
		this.draw = function()
		{
			Map.ctx.globalAlpha = self.alpha;
			
			Map.ctx.save();
			
			Map.ctx.translate( args.targetCharacter.characterData.character_zone_x + Map.viewPortX, args.targetCharacter.characterData.character_zone_y + Map.viewPortY );
			
			Map.ctx.rotate( self.rotation );
			
			Map.ctx.drawImage(
											slashGreenImageObject,
											- self.offsetX,
											- self.offsetY
										);
			
			self.previousX = args.targetCharacter.characterData.character_zone_x - self.offsetX;
			self.previousY = args.targetCharacter.characterData.character_zone_y - self.offsetY - 20;
										
			Map.ctx.restore();
			
			Map.ctx.globalAlpha = 1;
		}
		
		//remove the slashGreen effect
		this.remove = function()
		{
			spellEffects.layerCleaner.push( this );
			spellEffects.layer[1][ this.ID ] = null;
			delete args.targetCharacter._internal.spellEffects[ this.characterSpellEffectID ];
		}

		setTimeout( function()
							{
								slashGreenImageObject.src = '/components/bugcraft/resources/public/component.bugcraft.spellEffects/images/slash/green/slashgreen2.png';
								
								setTimeout( function()
													{
														slashGreenImageObject.src = '/components/bugcraft/resources/public/component.bugcraft.spellEffects/images/slash/green/slashgreen3.png';
														
														var _t = setInterval( function()
																			{
																				self.alpha -= 0.1;
																				
																				if( self.alpha > 0 )
																				{
																					return;
																				}
																				
																				self.remove();
																				
																				clearInterval( _t );
																				
																			}, 20 );
														
													}, 100 );
							}, 100 );
							
	} //end slashGreen effect