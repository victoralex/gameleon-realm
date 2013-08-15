
	spellEffects.debuffConfuseInsect = function( args )
	{
		this.ID = spellEffects.layer[1].push( this ) - 1;
		this.characterSpellEffectID = args.targetCharacter._internal.spellEffects.push( this ) - 1;
		this.alpha = 1;
		this.offsetX = 30;
		this.offsetY = 30;
		this.rotation = Math.random() * (Math.PI * 2);
		this.deleteRange = 60;
		this.previousX = args.targetCharacter.characterData.character_zone_x - this.offsetX;
		this.previousY = args.targetCharacter.characterData.character_zone_y - this.offsetY;
		this.duration = 3000 - Component.bugcraft.latency;
		
		var self = this;
		
		var debuffConfuseInsectImageObject = [];
		for ( var i = 0; i < 4; i++ )
		{
			debuffConfuseInsectImageObject[i] = new Image();
			debuffConfuseInsectImageObject[i].src = '/components/bugcraft/resources/public/component.bugcraft.spellEffects/images/debuffs/confuseInsect/confuseinsect' + i + '.png';
		}
		var debuffConfuseInsectSound = soundManager.createSound({
				id: 'debuffConfuseInsect' + ( ++spellEffects.soundIncrementor ),
				url: '/components/bugcraft/resources/public/component.bugcraft.spellEffects/sounds/debuffs/confuse1.mp3',
				volume: spellEffects.volumeByRange ( Component.bugcraft.currentCharacterObject.characterData.character_zone_x, Component.bugcraft.currentCharacterObject.characterData.character_zone_y, args.targetCharacter.characterData.character_zone_x, args.targetCharacter.characterData.character_zone_y, spellEffects.volumeRangeLong )
		});
		
		this.spellEffectSoundID = args.targetCharacter._internal.soundEffects.push( debuffConfuseInsectSound ) - 1;
		
		soundManager.play( 'debuffConfuseInsect' + spellEffects.soundIncrementor, 
										{
											onfinish: function () 
											{
												delete args.targetCharacter._internal.soundEffects[ self.spellEffectSoundID ];	
											}
										});
		
		//
		//draw the debuffConfuseInsect effect
		//
		this.draw = function()
		{
			Map.ctx.globalAlpha = self.alpha;
			
			Map.ctx.drawImage(
											debuffConfuseInsectImageObject[0],
											args.targetCharacter.characterData.character_zone_x + Map.viewPortX - self.offsetX,
											args.targetCharacter.characterData.character_zone_y + Map.viewPortY - self.offsetY
										);
			Map.ctx.drawImage(
											debuffConfuseInsectImageObject[1],
											args.targetCharacter.characterData.character_zone_x + Map.viewPortX - self.offsetX,
											args.targetCharacter.characterData.character_zone_y + Map.viewPortY - self.offsetY
										);
			Map.ctx.drawImage(
											debuffConfuseInsectImageObject[2],
											args.targetCharacter.characterData.character_zone_x + Map.viewPortX - self.offsetX,
											args.targetCharacter.characterData.character_zone_y + Map.viewPortY - self.offsetY
										);
			Map.ctx.drawImage(
											debuffConfuseInsectImageObject[3],
											args.targetCharacter.characterData.character_zone_x + Map.viewPortX - self.offsetX,
											args.targetCharacter.characterData.character_zone_y + Map.viewPortY - self.offsetY
										);
										
			self.previousX = args.targetCharacter.characterData.character_zone_x - self.offsetX;
			self.previousY = args.targetCharacter.characterData.character_zone_y - self.offsetY;
		
			Map.ctx.globalAlpha = 1;
		}
		
		//remove the debuffConfuseInsect effect
		this.remove = function()
		{
			spellEffects.layerCleaner.push( this );
			spellEffects.layer[1][ this.ID ] = null;
			delete args.targetCharacter._internal.spellEffects[ this.characterSpellEffectID ];
		}
		
		var opacityVariation = 0;
		
		var _animateFunction =  function()
												{
													self.alpha = Math.abs( Math.sin( opacityVariation ) );

													opacityVariation += Math.PI / 32;
													
													if (self.alpha < 0.5 )
													{
														self.alpha = 0.5;
													}
													
													_animateFunctionPointer = setTimeout( _animateFunction, 50 );
												}							
		
		var _animateFunctionPointer = setTimeout( _animateFunction, 50 );
		
		setTimeout( function() 
								{ 
									
									clearTimeout( _animateFunctionPointer );
								
									var _timeout = setInterval( function()
																		{
																			self.alpha -= 0.1;
																			
																			if( self.alpha > 0 )
																			{
																				return;
																			}
																			
																			self.remove();
																			
																			clearInterval( _timeout );
																			
																		}, 100 );
								}, self.duration );
		
	} //end debuffConfuseInsect