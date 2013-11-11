pubsub
======

PUBSUB


Author: Vilder Eugene
Created: 01/08/2013
Description: This is my implemintation of Publish / Subcribe.

Usage:
To set subscribes channels:  

pubsub.subscribe('channelName' , function( data ){
  //do something with data
});

For publishing:
pubsub.publish('channelName' , {});
