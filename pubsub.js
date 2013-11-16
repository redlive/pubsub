(function( global ){
	"use strict";

	var pubsub = {
		publish : function( channelId , params ){
			global.subscribes = global.subscribes || {};
			global.subscribes[channelId] = global.subscribes[channelId] || {
				params 		: null,
				callbacks 	: []
			};
			var oldParams = JSON.stringify( global.subscribes[channelId].params );
			var newParams = JSON.stringify( params );
			if ( oldParams != newParams ) {
				global.subscribes[channelId].params = params;
				for ( var i=0; i < global.subscribes[channelId].callbacks.length; i++) {
					global.subscribes[channelId].callbacks[i]( params );
				}
			}
		},
		subscribe : function( channelId , callback ){
			try {
				global.subscribes = global.subscribes || {};
				global.subscribes[channelId] = global.subscribes[channelId] || {
					params 		: null,
					callbacks 	: []
				};
				global.subscribes[channelId].callbacks.push(callback);
			} catch( e ){
			    console.log( e );
			}
		},
		unSubscribe : function( channelId ){
			delete global.subscribes[channelId];
		}
	};
	
	global.pubsub = pubsub;
	
})( window );
