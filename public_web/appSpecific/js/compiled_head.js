"use strict";















/*
	File: /usr/www/harendar.gameleon.co//public_web/components/appJS/resources/public/application.js
*/

	
	// Application & Component Prototype
	
	/*
		Application prototype
	*/
	
	var Application = {
		
		initState: 0,			// 0 - not initialized, 1 - initializing, 2 - initialized
		configuration: {},
		
		sessionData: {},
		
		init: function()
		{
			Application.initState = 1;
			
			Application.util.init();
			Application.event.init();
			Application.connect.init();
			
			// Load the default configuration
			Application.connect.ajax({
									url: "/configuration/configuration.json",
									successFunction:	function( jsonEl, text )
																{
																	Application.configuration = jsonEl;
																	
																	Application.compatibilityCheck.init({
																								afterInit: function()
																								{
																									Application.effects.init();
																									Application.debug.init({
																														afterInit: 	function()
																																		{
																																			Application.websocket.init({
																																							afterFunction: function()
																																							{
																																								// Restore Session Handler
																																								Application.websocket.handlers.restoreSession = function( jsonEl, ws )
																																								{
																																									if( jsonEl.r != 200 )
																																									{
																																										// an issue has occured restoring the session. redirect to login to reset the config
																																								
																																										document.location.href = 'http://' + Application.configuration.loginURL + "/#realmID=" + jsonEl.rid ;
																																										
																																										return;
																																									}
																																									
																																									Application.sessionData = jsonEl.sd;
																																									
																																									Application.debug.add( "Restored session data: " + JSON.stringify( Application.sessionData ) );
																																									
																																									// Init Components
																																									Component.init();
																																									
																																									// Init queued functions
																																									Application.loader.init();
																																								}
																																								
																																								// Connect handler
																																								Application.websocket.handlers._connect = function( jsonEl, ws )
																																								{
																																									// websocket is connected
																																									
																																									var sessionToken = Application.util.storage.cookie.get({
																																																										name: "sessionToken"
																																																									});
																																									
																																									if( sessionToken )
																																									{
																																										Application.debug.add( "Restoring previous session" );
																																										
																																										// attempt to recover a previous session
																																										Application.websocket.socket.send( '{"c":"restoreSession","sessionToken":"' + sessionToken + '"}' );
																																										
																																										return;
																																									}
																																									
																																									// no previous session. redirect to login to authenticate and obtain a new session
																																									
																																									document.location.href = 'http://' + Application.configuration.loginURL + "/login";
																																								}
																																								
																																								// connect to websocket server
																																								Application.sound.init({
																																														afterFunction: Application.websocket._connect
																																													});
																																							}
																																						});
																																		}
																													});
																								}
																				});
																}
								});
		},
		
		util:
		{
			init: null,
			
			connect:
			{
				init: null,
				
				ajax: null
			},
			
			browserInformation:
			{
				init: null
			},
			
			serialize:
			{
				init: null
			},
			
			style:
			{
				init: null
			},
			
			selectText:
			{
				init: null
			}
		},
		
		event:
		{
			add: null,
			remove: null
		},
		
		sound:
		{
		
		},
		
		debug:
		{
			
		},
		
		loader:
		{
			componentsQueue: [],
			widgetsQueue: [],
			
			initializingScripts: 0,
			
			init: function()
			{
				if( Application.loader.initializingScripts > 0 )
				{
					// Delaying the components and widgets init until the scripts have loaded
					
					setTimeout( Application.loader.init, 50 );
					
					return;
				}
				
				for(var i in Application.loader.widgetsQueue)
				{
					if( typeof Application.loader.widgetsQueue[ i ] != 'object' )
					{
						continue;
					}
					
					Application.loader.widgetsQueue[i].widgetObject().init(
									Application.loader.widgetsQueue[ i ].args
								);
				}
				
				for(var i in Application.loader.componentsQueue)
				{
					if( typeof Application.loader.componentsQueue[ i ] != 'object' )
					{
						continue;
					}
					
					Application.loader.componentsQueue[i].componentObject().init(
									Application.loader.componentsQueue[ i ].args
								);
				}
				
				Application.loader.widgetsQueue = [];
				Application.loader.componentsQueue = [];
				
				Application.initState = 2;		// All fully initialized
			},
			
			addComponent: function( args )
			{
				if(
					typeof args != "object" ||
					!args.componentObject ||
					!args.componentID
				)
				{
					return false;
				}
				
				if( typeof Application.loader.componentsQueue[ args.componentID ] == 'undefined' )
				{
					Application.loader.componentsQueue[ args.componentID ] = {
																									componentObject: args.componentObject,
																									args: []
																								};
				}
				
				Application.loader.componentsQueue[ args.componentID ].args.push( args.initArgs );
				
				return true;
			},
			
			addWidget: function( args )
			{
				if(
					typeof args != "object" ||
					!args.widgetObject ||
					!args.widgetID
				)
				{
					return false;
				}
				
				if( typeof Application.loader.widgetsQueue[ args.widgetID ] == 'undefined' )
				{
					Application.loader.initializingScripts++;
					
					// Load the widget JS file
					var scriptObject = document.createElement('script');
					scriptObject.src = "/widgets/" + args.widgetID + "/application.widget." + args.widgetID + ".js";
					scriptObject.type = "text/javascript";
					document.getElementsByTagName("head")[0].appendChild( scriptObject );
					
					// FF Specific
					scriptObject.onload = 	function()
													{
														Application.loader.initializingScripts--;
														
														/*
														if( Application.debug.add )
														{
															Application.debug.add("Widget " + args.widgetID + " loaded");
														}
														*/
													}
					
					// IE Specific
					scriptObject.onreadystatechange = function()
																	{
																		if( scriptObject.readyState != "loaded" )
																		{
																			return;
																		}
																		
																		Application.loader.initializingScripts--;
																		
																		/*
																		if( Application.debug.add )
																		{
																			Application.debug.add("Widget " + args.widgetID + " loaded");
																		}
																		*/
																	}
																	
					// Append into the init queue
					Application.loader.widgetsQueue[ args.widgetID ] = {
																							widgetObject: args.widgetObject,
																							args: []
																						};
				}
				
				Application.loader.widgetsQueue[ args.widgetID ].args.push( args.initArgs );
				
				return true;
			},
			
			remove: function( args )
			{
				
			}
		},
		
		widget:
		{
			
		}
	};
	
	/*
		Component prototype
	*/
	
	var Component = {
		
		init: function()
		{
			
		}
		
	};
	

/*
	File: /usr/www/harendar.gameleon.co//public_web/components/appJS/resources/public/imported.animationFrame.js
*/


	// shim layer with setTimeout fallback
    window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame       || 
              window.webkitRequestAnimationFrame || 
              window.mozRequestAnimationFrame    || 
              window.oRequestAnimationFrame      || 
              window.msRequestAnimationFrame     || 
              function(/* function */ callback, /* DOMElement */ element){
                window.setTimeout(callback, 1000 / 60);
              };
    })();
	

































































































































































































































































































































































































































































































































































































