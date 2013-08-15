
	spellEffects.buffHerbalShield = function( args )
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
		
		var self = this;
		
		var buffHerbalShieldImageObject = new Image();
		buffHerbalShieldImageObject.src = '/components/bugcraft/resources/public/component.bugcraft.spellEffects/images/buffs/shieldHerbal/herbal_shield0.png';
		
		var buffHerbalShieldSound = soundManager.createSound({
				id: 'buffHerbalShield' + ( ++spellEffects.soundIncrementor ),
				url: '/components/bugcraft/resources/public/component.bugcraft.spellEffects/sounds/buffs/whoosh_magical.mp3', 
				volume: spellEffects.volumeByRange ( Component.bugcraft.currentCharacterObject.characterData.character_zone_x, Component.bugcraft.currentCharacterObject.characterData.character_zone_y, args.targetCharacter.characterData.character_zone_x, args.targetCharacter.characterData.character_zone_y, spellEffects.volumeRangeLong )
		});
		
		this.spellEffectSoundID = args.targetCharacter._internal.soundEffects.push( buffHerbalShieldSound ) - 1;
		
		soundManager.play( 'buffHerbalShield' + spellEffects.soundIncrementor, 
										{
											onfinish: function () 
											{
												delete args.targetCharacter._internal.soundEffects[ self.spellEffectSoundID ];	
											}
										});
		
		//draw the buffHerbalShield
		this.draw = function()
		{
			Map.ctx.globalAlpha = self.alpha;
			
			Map.ctx.save();
			
			Map.ctx.translate( args.targetCharacter.characterData.character_zone_x + Map.viewPortX, args.targetCharacter.characterData.character_zone_y + Map.viewPortY );
			
			Map.ctx.rotate( self.rotation );
			
			Map.ctx.drawImage(
							buffHerbalShieldImageObject,
							- self.offsetX,
							- self.offsetX
						);
						
			self.previousX = args.targetCharacter.characterData.character_zone_x - self.offsetX;
			self.previousY = args.targetCharacter.characterData.character_zone_y - self.offsetY;
						
			Map.ctx.restore();
						
			Map.ctx.globalAlpha = 1;
		}
		
		
		//remove the buffHerbalShield
		this.remove = function()
		{
			spellEffects.layerCleaner.push( this );
			spellEffects.layer[1][ this.ID ] = null;
			delete args.targetCharacter._internal.spellEffects[ this.characterSpellEffectID ];
		}
		
		var i = 0; 
		
		var _nextImage =  function()
							{
								buffHerbalShieldImageObject.src = '/components/bugcraft/resources/public/component.bugcraft.spellEffects/images/buffs/shieldHerbal/herbal_shield' + i++ + '.png';

								if( i > 10 )
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
														
													}, 60 );
								
									return;
								}
								
								setTimeout ( _nextImage, 70 );
						
							}
		
		_nextImage();
							
		var _rotateShield = function()
													{
														if ( i > 10 )
														{
															return;
														}
														
														self.rotation -= Math.PI / 64;

														setTimeout( _rotateShield, 30 );
													}			
		_rotateShield();
							
	} //end buffHerbalShield