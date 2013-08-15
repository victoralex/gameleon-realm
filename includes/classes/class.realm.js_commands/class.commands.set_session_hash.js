
	var log = require( "../class.log" ),
		syncSQL = new (require('../class.syncSQL')).p,
		character = require('../class.character');
	
	exports.performCommand = function( args )
	{
		/*if( 
			typeof args.ws.sessionData.userID == "undefined"
		)
		{
			args.ws.sendUTF( JSON.stringify({
												c: args.res.c,
												r: 300
											}) );
			
			return;
		}
		
		if(
			typeof args.res.characterID == "undefined" ||
			/^[0-9]+$/.test( args.res.characterID ) == false
		)
		{
			args.ws.sendUTF( JSON.stringify({
												c: args.res.c,
												r: 301
											}) );
			
			return;
		}*/
		
		console.log( args.res )

		log.add( "Setting realm session hash " + args.res.sh + " to user ID " + args.res.sd.userID );
											
		syncSQL.q(
					"call session_set_hash(" + args.res.sd.userID + ",'" + args.res.sh + "')",
					function( res )
					{
						if( res[0].result != 200 )
						{
							connection.sendUTF( JSON.stringify({
																		c: args.res.c,
																		r: 301
																	}) );
							
							return;
						}
						
						// hash has been successfully set. any other sessions having the same userID must be closed
						
						if( args.realm._users[ args.res.sd.userID ] )
						{
							// the same user is already logged in. This value is initialized in the restoreSession command
							
							log.add( "Found the same user logged in twice. Removing previous entry" );
							
							args.realm._users[ args.res.sd.userID ].emit("close");
						}
						
						log.add( "Send hash successfull result about user ID " + args.res.sd.userID );
					}
				);
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	