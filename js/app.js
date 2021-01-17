// // replace these values with those generated in your TokBox Account
// var apiKey = "47084434";
// var sessionId = "2_MX40NzA4NDQzNH5-MTYxMDgzMTcyNjgyM34rWGdETklDcWFvRWRtUkJBWWNuT3dMOWF-fg";
// var token = "T1==cGFydG5lcl9pZD00NzA4NDQzNCZzaWc9MzI3MzU0NWRiNzc1M2E1OTc0MjBmNmY1ZTU2ZjMwNjYzZDMyMjMxMTpzZXNzaW9uX2lkPTJfTVg0ME56QTRORFF6Tkg1LU1UWXhNRGd6TVRjeU5qZ3lNMzRyV0dkRVRrbERjV0Z2UldSdFVrSkJXV051VDNkTU9XRi1mZyZjcmVhdGVfdGltZT0xNjEwODMxNzU0Jm5vbmNlPTAuNDA3MTA4ODAxMjcyMTMyOSZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNjEwOTE4MTU0JmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9";
//
// initializeSession();
//
// // Handling all of our errors here by alerting them
// function handleError(error) {
//   if (error) {
//     alert(error.message);
//   }
// }
//
// function initializeSession() {
//   var session = OT.initSession(apiKey, sessionId);
//
//   // Subscribe to a newly created stream
//   session.on('streamCreated', function(event) {
//     session.subscribe(event.stream, 'subscriber', {
//       insertMode: 'append',
//       width: '100%',
//       height: '100%',
//     }, handleError);
//   });
//
//   // Create a publisher
//   var publisher = OT.initPublisher('publisher', {
//     insertMode: 'append',
//     width: '100%',
//     height: '100%',
//   }, handleError);
//
//   // Connect to the session
//   session.connect(token, function(error) {
//     // If the connection is successful, publish to the session
//     if (error) {
//       handleError(error);
//     } else {
//       session.publish(publisher, handleError);
//     }
//   });
// }


//page design
