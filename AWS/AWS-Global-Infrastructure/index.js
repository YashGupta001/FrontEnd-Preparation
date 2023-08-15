/*
https://www.youtube.com/watch?v=jRGW4uInhkE&list=PL6XT0grm_TfgtwtwUit305qS-HhDvb4du&index=6


1. REGIONS:


Regions have the multiple availabilityZones that can have multiple data centers

Q: Why does the AWS need so many regions ? They can have one region and serve the whole word from there ?
1. Lets say I know that my audience is from India so I can put my website in that region so that i can serve fast (performance can be fast, lower latency)
2. Also there can be some data that you can not store outside the country its government related and the government wont allow then will need to store that data in that particular country data centers
3. Disaster recovery, lets say mumbai data center got damages by any natural disaster or something unexpected happen and all the data is stores there so we can have the replica in the hyderabad region so that we can recover those data


* Also all the regions around the world are connected with each other through the ocean wires so their transfer speed is 100GPS (super high speed, lower latency)

* Every Region has their code name like for mumbai its ap-south-1

* Cost benefits as service price can depend on regions

* AWS has many services around 200 so might be its possible some region dont have some services



2. AVAILABILITY ZONES:


Q: Why do we need availability zones in region? Why can't we put the data centers directly in the regions?
1. Lets say there was a electricy cut for some days where all you data centers are present lets say in mumbai or any bad thing happend then for that we have multiple availability zones in one region so that their power supply is differnet and in case one zone is down then it wont affect the users

Thats the reason when we have our application so we put them in multiple availability zones in one region so that in case if any availability zone is down still your application will be live

* They are at a distance of 100 KM approx and the data transfer for replication between them is very fast  and the data transfer happens in encrypted form

* Also every availabilty zone is having a different code which is appened by a,b,c in front of region code




3. Edge Locations and Local Zones:

Lets say now you want to specify that in this city we want to have our server or data center for that local zones comes into picture (delhi,chennai,bangalore)


Q: Why do we need local zones if we have the availablity zones ?
 It will give you single digit latency for that city people means that you visit a website it will take less than 10 milisecond time to get that now use of this 
 when you know that your game application max users are from delhi that play games so if you serve is in mumbai or singapore so in gaming server the time latency can be little more but you want to give them single digit latency or payment services in that case we can use the local zones


*/
