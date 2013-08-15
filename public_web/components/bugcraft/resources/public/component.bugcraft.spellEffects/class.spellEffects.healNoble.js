
	spellEffects.healNoble = function( args )
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
		this.duration = 1000 - Component.bugcraft.latency;
		
		var self = this;
		
		var healNobleImageObject = new Image();
		healNobleImageObject.src = '/components/bugcraft/resources/public/component.bugcraft.spellEffects/images/heal/noble/healing_noble' + args.component + '.png';
		
		//draw the healNoble
		this.draw = function()
		{
			Map.ctx.globalAlpha = self.alpha;
			
			Map.ctx.save();
			
			Map.ctx.translate( args.targetCharacter.characterData.character_zone_x + Map.viewPortX, args.targetCharacter.characterData.character_zone_y + Map.viewPortY );
			
			Map.ctx.rotate( self.rotation );
			
			Map.ctx.drawImage(
											healNobleImageObject,
											- self.offsetX,
											- self.offsetY
										);
										
			self.previousX = args.targetCharacter.characterData.character_zone_x - self.offsetX;
			self.previousY = args.targetCharacter.characterData.character_zone_y - self.offsetY;
	
			Map.ctx.restore();
			
			Map.ctx.globalAlpha = 1;
			
			
		}
		
		//remove the healNoble
		
		
		this.remove = function()
		{
			spellEffects.layerCleaner.push( this );
			spellEffects.layer[1][ this.ID ] = null;
			clearTimeout( _animateFunctionPointer );
			delete args.targetCharacter._internal.spellEffects[ this.characterSpellEffectID ];
		}
		
		
		
		switch( args.component )
		{
			case 0:	
				var i = 0;
		
				var healNobleSound = soundManager.createSound({
						id: 'healNoble' + ( ++spellEffects.soundIncrementor ),
						url: '/components/bugcraft/resources/public/component.bugcraft.spellEffects/sounds/heal/ELECTRONIC.mp3',
						volume: spellEffects.volumeByRange ( Component.bugcraft.currentCharacterObject.characterData.character_zone_x, Component.bugcraft.currentCharacterObject.characterData.character_zone_y, args.targetCharacter.characterData.character_zone_x, args.targetCharacter.characterData.character_zone_y, spellEffects.volumeRangeLong )
				});
				
				this.spellEffectSoundID = args.targetCharacter._internal.soundEffects.push( healNobleSound ) - 1;
				
				soundManager.play( 'healNoble' + spellEffects.soundIncrementor, 
												{
													onfinish: function () 
													{
														delete args.targetCharacter._internal.soundEffects[ self.spellEffectSoundID ];	
													}
												});
		
				var _animateFunction = function()
														{
															healNobleImageObject.src = '/components/bugcraft/resources/public/component.bugcraft.spellEffects/images/heal/noble/healing_noble' + i++ + '.png';
															
															if( i < 2 )
															{
																_animateFunctionPointer = setTimeout( _animateFunction, 70 );
																return;
															}
															
															var _t = setInterval( function()
																				{
																					self.alpha -= 0.1;
																					
																					if( self.alpha > 0 )
																					{
																						return;
																					}
																					
																					self.remove();
																					
																					clearInterval( _t );
																					
																				}, 60 );
													
														}	
				
				var _animateFunctionPointer = setTimeout( _animateFunction, 50 );
				
			break;
			case 2:
				self.alpha = 0;
				var _animateFunction =	function()
																	{
																		if( self.alpha < 1 )
																		{
																			self.alpha += 0.2;
																		}

																		self.rotation -= Math.PI / 16;

																		_animateFunctionPointer = setTimeout( _animateFunction, 30 );
																	}
																	
				var _animateFunctionPointer = setTimeout( _animateFunction, 10 );
		
				setTimeout( function() 
										{ 
											clearTimeout( _animateFunctionPointer );
											
											var _t = setInterval( function()
																				{
																					self.alpha -= 0.1;
																					
																					if( self.alpha > 0 )
																					{
																						return;
																					}
																					
																					self.remove();
																					
																					clearInterval( _t );
																					
																				}, 40 );
										}, self.duration );
			break;
		}
		
		
	} //end spinning aura