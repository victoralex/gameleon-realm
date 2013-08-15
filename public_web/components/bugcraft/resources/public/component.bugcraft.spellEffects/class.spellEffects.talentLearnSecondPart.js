
	spellEffects.talentLearnSecondPart = function( args )
	{//spinning part of the effect
		this.ID = spellEffects.layer[0].push( this ) - 1;
		this.characterSpellEffectID = args.targetCharacter._internal.spellEffects.push( this ) - 1;
		this.alpha = 1;
		this.duration = 2000;
		this.offsetX = 30;
		this.offsetY = 30;
		this.rotation = 0;
		this.deleteRange = 60;
		this.previousX = args.targetCharacter.characterData.character_zone_x - this.offsetX;
		this.previousY = args.targetCharacter.characterData.character_zone_y - this.offsetY;
		
		var self = this;
		
		var talentLearnSecondPartImageObject = new Image();
		talentLearnSecondPartImageObject.src = '/components/bugcraft/resources/public/component.bugcraft.spellEffects/images/other/talentLearn/talentLearn_spin' + args.component + '.png';
		
		//draw the lvl up second part effect
		this.draw = function()
		{
			Map.ctx.globalAlpha = self.alpha;
			
			Map.ctx.save();
			
			Map.ctx.translate( args.targetCharacter.characterData.character_zone_x + Map.viewPortX, args.targetCharacter.characterData.character_zone_y + Map.viewPortY );
			
			Map.ctx.rotate( self.rotation );
			
			Map.ctx.drawImage(
							talentLearnSecondPartImageObject,
							- self.offsetX,
							- self.offsetY
						);
						
			self.previousX = args.targetCharacter.characterData.character_zone_x - self.offsetX;
			self.previousY = args.targetCharacter.characterData.character_zone_y - self.offsetY;
						
			Map.ctx.restore();
						
			Map.ctx.globalAlpha = 1;
		}
		
		//remove the talentLearnSecondPart
		this.remove = function()
		{
			spellEffects.layerCleaner.push( this );
			spellEffects.layer[0][ this.ID ] = null;
			delete args.targetCharacter._internal.spellEffects[ this.characterSpellEffectID ];
		}
		
		switch( args.component )
		{
			case 0:
				self.alpha = 0;
		
				var _animateFunction =	function()
																	{
																		if( self.alpha > 1 )
																		{
																			self.rotation += Math.PI / 32;
																			
																			_animateFunctionPointer = setTimeout( _animateFunction, 50 );
																			return;
																		}
																		
																		self.alpha += 0.2;
																		
																		self.rotation += Math.PI / 32;

																		_animateFunctionPointer = setTimeout( _animateFunction, 50 );
																	}			
			break;
			case 1:
				self.alpha = 0;
				
				var _animateFunction =	function()
																	{
																		if( self.alpha > 1 )
																		{
																			self.rotation -= Math.PI / 32;
																			
																			_animateFunctionPointer = setTimeout( _animateFunction, 50 );
																			return;
																		}
																		
																		self.alpha += 0.2;
																		
																		self.rotation -= Math.PI / 32;

																		_animateFunctionPointer = setTimeout( _animateFunction, 50 );
																	}						
			break;
		}
		
		var _animateFunctionPointer = setTimeout( _animateFunction, 1 );
		
		setTimeout( function() 
								{ 
									clearTimeout( _animateFunctionPointer );
									
									var _t = setInterval( function()
																		{
																			self.alpha -= 0.2;
																			
																			if( self.alpha > 0 )
																			{
																				return;
																			}
																			
																			self.remove();
																			
																			clearInterval( _t );
																			
																		}, 40 );
								}, self.duration );
	} //end the lvl up second part effect