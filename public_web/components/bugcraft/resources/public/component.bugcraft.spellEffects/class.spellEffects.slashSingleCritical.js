
	spellEffects.slashSingleCritical = function( args )
	{
		this.ID = spellEffects.layer[1].push( this ) - 1;
		this.characterSpellEffectID = args.targetCharacter._internal.spellEffects.push( this ) - 1;
		this.alpha = 1;
		this.rotation = Math.random() * (Math.PI * 2);
		this.offsetX = 30;
		this.offsetY = 30;
		this.deleteRange = 60;
		this.previousX = args.targetCharacter.characterData.character_zone_x - this.offsetX;
		this.previousY = args.targetCharacter.characterData.character_zone_y - this.offsetY;
		
		var slashSingleCriticalImageObject = new Image();
		slashSingleCriticalImageObject.src = '/components/bugcraft/resources/public/component.bugcraft.spellEffects/images/slash/single/J_slashCrit1.png';
		
		var slashSingleCriticalSound = soundManager.createSound({
				id: 'slashSingleCritical' + ( ++spellEffects.soundIncrementor ),
				url: '/components/bugcraft/resources/public/component.bugcraft.spellEffects/sounds/punch/punch' + Math.floor( Math.random() * 3 ) + '.mp3',
				volume: spellEffects.volumeByRange ( Component.bugcraft.currentCharacterObject.characterData.character_zone_x, Component.bugcraft.currentCharacterObject.characterData.character_zone_y, args.targetCharacter.characterData.character_zone_x, args.targetCharacter.characterData.character_zone_y, spellEffects.volumeRangeLong )
		});
		
		this.spellEffectSoundID = args.targetCharacter._internal.soundEffects.push( slashSingleCriticalSound ) - 1;
		
		soundManager.play( 'slashSingleCritical' + spellEffects.soundIncrementor, 
										{
											onfinish: function () 
											{
												delete args.targetCharacter._internal.soundEffects[ self.spellEffectSoundID ];	
											}
										});
		
		//draw the slashSingleCritical effect
		this.draw = function()
		{
			Map.ctx.globalAlpha = self.alpha;
			
			Map.ctx.save();
			
			Map.ctx.translate( args.targetCharacter.characterData.character_zone_x + Map.viewPortX, args.targetCharacter.characterData.character_zone_y + Map.viewPortY );
			
			Map.ctx.rotate( self.rotation );
			
			Map.ctx.drawImage(
							slashSingleCriticalImageObject,
							- self.offsetX,
							- self.offsetY
						);
			
			self.previousX = args.targetCharacter.characterData.character_zone_x - self.offsetX;
			self.previousY = args.targetCharacter.characterData.character_zone_y - self.offsetY;
			
			Map.ctx.restore();
						
			Map.ctx.globalAlpha = 1;
		}
		
		//remove the slashSingleCritical effect
		var self = this;
		
		this.remove = function()
		{
			spellEffects.layerCleaner.push( this );
			spellEffects.layer[1][ this.ID ] = null;
			delete args.targetCharacter._internal.spellEffects[ this.characterSpellEffectID ];
		}

		setTimeout( function()
							{
								slashSingleCriticalImageObject.src = '/components/bugcraft/resources/public/component.bugcraft.spellEffects/images/slash/single/J_slashCrit2.png';
								
								setTimeout( function()
													{
														slashSingleCriticalImageObject.src = '/components/bugcraft/resources/public/component.bugcraft.spellEffects/images/slash/single/J_slashCrit3.png';
														
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
														
													}, 60 );
							}, 60 );
							
	} //end slashSingleCritical effect