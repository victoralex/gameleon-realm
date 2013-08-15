<?php
	
	/*
		Database
	*/
	
	DatabaseConfig::$hostname = "sql.harendar.gameleon.co";
	DatabaseConfig::$username = "realm";
	DatabaseConfig::$password = "parola";
	DatabaseConfig::$database = "bugtopia_ptr3";
	
	/*
		Mail
	*/
	
	SystemConfig::$mailServers = array(
									array(
											"fromAddress" => "bugcraftmailtest@emotionconcept.ro",
											"host" => "mail.emotionconcept.ro",
											"user" => "bugcraftmailtest@emotionconcept.ro",
											"pass" => "parola"
										)
								);
	
	SystemConfig::$maxMailsPerServer = 10;
	
	/*
		System
	*/
	
	// Generic Realm name
	SystemConfig::$realmName = "harendar";
	
	// CDN
	SystemConfig::$defaultCDN = "US";
	SystemConfig::$currentCDN = SystemConfig::$defaultCDN;
	
	// Language
	SystemConfig::$defaultLang = "en-US";
	SystemConfig::$currentLang = SystemConfig::$defaultLang;
	
	// Pages
	SystemConfig::$defaultPage = "index";
	
	// Filesystem
	SystemConfig::$filesystemUser = "www";
	SystemConfig::$filesystemGroup = "www";
	SystemConfig::$filesystemDefaultMode = 0770;
	
	// Daemons
	SystemConfig::$daemonsUID = 65534; // nobody
	SystemConfig::$daemonsGID = 65533; // nogroup
	
	// Paths
	SystemConfig::$installDir = "/usr/www/harendar.gameleon.co/";
	SystemConfig::$logsDir = "/usr/www/harendar.gameleon.co/logs/";
	SystemConfig::$publicWebDir = "/usr/www/harendar.gameleon.co/public_web/";
	SystemConfig::$publicAdminDir = "/usr/www/harendar.gameleon.co/public_admin/";
	SystemConfig::$daemonsPath = "/usr/www/harendar.gameleon.co/daemons/";
	
	// URL
	SystemConfig::$applicationURL = "harendar.gameleon.co";
	SystemConfig::$applicationProtocol = "http";
	SystemConfig::$applicationPort = "80";
	
?>