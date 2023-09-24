/*

https://www.youtube.com/watch?v=-Sn48geZruk&list=PL4CFloQ4GGWICE0Tz6iXKfN3XWkXRlboU&index=6



Requirement:

Resouce Hint --> prefetch, preload etc
Open graph tags --> want to share the link then how it will going to look in other social media or diff platform
Deep linking --> if you are searching something on the browser then it should oppen that in your app (in mobile)


**********************************************************************************************************************************************************

Tech Stack:
Rxjs --> reactive way to handle aync
Restify instead of express
Falcor instead of graphql

Mono Repo --> lerna to handle the dependency and how to scale your team while having your code in the same repo

For image --> Image blobs used by netflix vs sprite used by youtube and couple of places uses SVG

Video tags --> for video player previosly used flash but with html5 use video tags
media source --> speed, quality and many things (like control)

Youtube using http3


************************************************************************************************************************************************************

Stremaning Protocols:

1.Flash Player: We were using Real time Messaging protocol (RTMP)
 With the flash player there was a lot of challenges in terms of we can not control the quality/speed, changing the lanugage on demand and many sort of things

2. Apple: HTTP live streaming (HLS) protocol, still if you have stream something on apple then most probably we need to use this protocol
  It also helpes in order to maintain the quality if you want to have the buffering feature, differen qualities need to be stream and that too automatically you want to achive that
  
3. There is a standard which came all together which was called DASH for the Dynamic Adaptive Streaming over HTTP
   this become the standard, it is ISO published and then most of the streaming platform start using this (still its highly used)
   
4. SRT -> Secure Reliable Transport Protocol designed for low-latency live video transmission




*************************************************************************************************************************************************************

HTTP Protocols:

HTTP 1.0 --> Rest API (Request, response)
HTTP 1.1 --> added new response code, methods and header fields like connection, host etc

HTTP 2.0 --> There are certain restriction in 1.1 which were very critical
             First like for every request you first have to make a connection TCP connection and then get a response
             Like you have a web page inside of that web page there are multiple assests and you have to fetch all those assests so everytime a new connection is made and basically a request is served , so there is multiple round trip which is happening in case of 1.1
             
So in HTTP 2.0 there are multiple things that was introduced:

1. Streaming (Multiplexing)
                                                See Image    

2. Push mechanism: Your sever can keep on sending the data to the client where your client dont have to request multiple times
3. Prioritization: Prioritization of the request can be managed very easily
4. Flow Control: Better compression of the header


before moving to http 3 we need to understand couple of things, first there are different layers which are common in 1.0, 1.1 and 2.0 which is you have an IP, on IP you have a TCP protocol and then you have a TLS which was optional in these cases, which is mostly required for your security purposes

And TCP involves multiple steps where you have to do first handshake with your server once you get the acknowledgement, you make a confirmation.
There are multiple round trip in order to make this handshake and then server start serving the data to the client

So those multiple handshakes and multiple steps are happening in terms of the TCP




*************** VERY IMP ***************

TCP is basically a reliable connection which does the acknowledgement from the server and make sure your data from the server and to the client is 100% transferred, if there is any loss it will give you an error
So it provides you acknowledgement and gurantees the delivery of the packet


But there was a problem as it provides the gurantee you packets will be delivered and in the same order in which it was sent 
It created a HOL blocking (head offline blocking), if say suppose any of your packet is stuck in between it is not going to deliver all the packets which are behind that, So its provides a delay in overall you can say the streaming behaviour.


HTTP 3.0 --->  
For that Google came up with Quic which is HTTP3 protocol which is build on UDP
so what it does it has an app layer which is called quic which internally takes care of the capabilities which are provided by the TLS and TCP
It basically makes thing very fast as UDP is connection less where it does not do any handshake sort of things, and quic internally implements the security
Rest everything reamains the same as we have in 2.0


*************** TCP VS UDP: SEE IMAGE ***************

TCP is reliale as it gurantee about 100% delivery of packets but UDP is loosy as we can loose some packets
In TCP the data stream in terms of Byte but in UDP it transffered in terms of packets






*************************************************************************************************************************************************************
VIDEO PLAYER:

We can build our own video player using the video tag and media source API


*/
