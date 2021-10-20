import OT from '@opentok/client';

var apiKey = '45828062';
var sessionId = '1_MX40NTgyODA2Mn5-MTYzNDY5NDkzODkzMH5GKy9KYThuTmRxYUZrTndiakNyekhveEt-UH4';
var token =
    'T1==cGFydG5lcl9pZD00NTgyODA2MiZzaWc9MWNiOThiMWZkOTdjZjY2OGZjNmNiZGM3N2MyY2Y0MjZjNDFlOTVmNzpzZXNzaW9uX2lkPTFfTVg0ME5UZ3lPREEyTW41LU1UWXpORFk1TkRrek9Ea3pNSDVHS3k5S1lUaHVUbVJ4WVVaclRuZGlha055ZWtodmVFdC1VSDQmY3JlYXRlX3RpbWU9MTYzNDcwMzQ4MSZub25jZT0wLjYzMzM3MzQ5Njg1NDMxOTcmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTYzNDc4OTg4MQ==';

// connect to session
var session = OT.initSession(apiKey, sessionId);


// create publisher
var publisher = OT.initPublisher();
session.connect(token, function (err) {
    // publish publisher
    session.publish(publisher);
})


// export function receiveCall() {
    // create subscriber
    session.on('streamCreated', function (event) {
        session.subscribe(event.stream);
    });
// }

export function endCall() {
    session.disconnect();
}