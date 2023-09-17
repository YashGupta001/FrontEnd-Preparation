/*

https://www.youtube.com/watch?v=44mOnnt5pic&list=PL4CFloQ4GGWICE0Tz6iXKfN3XWkXRlboU&index=3


# 1. Architectural Patterns:

1. In monolithic we can not scale much also if we try to fit everything in one piece then it will become a crap which is of no use

2. In micro front different areas are desing, developed amd maintain by different people
Its like certain feature or capabilities can be developed very easily and can be maintained very well in respective technologies
So there can be different technologies which are involved in a single UI which serves different business use cases and this helps basically in order to scale your team and basically to take a decision, each and every team can take their own decision which won't impact others

How to achive micro front end :

a. Iframe
b. web component
c. Module federation if using react
d. MicroApps / Route Based


*******************************************************************************************************************************************************


# 2. Communication Protocols:

a. Long Polling: generally people use long polling for analytics 
b. Websockets: Anything which is more real time (like chat app, google doc)
c. server sent events: more about your notification like in fb you get notification for friend request or someone liked or shared your post


*******************************************************************************************************************************************************


# 3. Availability: (Offline Support)

When we are in offline mode means lets say our network is gone or because of some reason the connection is not being able to be made with the server and the server is down for any reason. We wanted to make it offline

in such scenarios what you can do and what you can decide to do show some static pages to engage the the user
ex: when your internet is down, you open google.com  you get a game to play or now a days there are features and capabilities where you can actually do a modification on the google doc in the offline mode as well
There are so many capabilities which are evolving out of the offline support

On the web we achive this using Service Worker

*******************************************************************************************************************************************************


# 4. Accessibility:

Accessibility is always about it can be easily consumable by everyone

In the web application there are certain things that we should take care of like:

1. utilizing keyboard accessibility: you tab should behave in a fashion, it should basically navigate to all the input fields in a way it should have an order 

2. screen readers: If you define certain things in a better format and if you utilize HTML5 semantics and other things then your screen readers basically helps people who are not able to read or have a problem with the vision so they are able to basically get an audio feel out of that

3. Color/ Contrast: vision impairment (albinism, colour blindness, loss of central vision loss etc) for this we have a way to define our colors and contrast of our web application in such a fashion so that it can be consumed by such people

*******************************************************************************************************************************************************


# 5. Consistencty:

Think about in terms of browsers like firefox, chrome, opera etc there can be some challenges like:
1. css is not consistent
2. some javascript functionalites are not available in other browsers

So generally what we do it overcome this is:
a. we change couple of css properties to add a prefix sort of thing in order to enable the certain properties at different browser level
b. for js we write the polyfills for the features that are not available in some browsers

There are certain auto generating stuff that helps, the people who use react they can create style components in which you dont have to worry about writing the css for the different browsers or the versions

And similarly for the polyfills also there are some solutions like dynamic polyfill, modernizer 

3. Design System: we also create our atomic behaviours like how our model,forms and other small small things that we have inside in our application will look and that are centralized and kept as a standard as in guidelines and then we dont need to worry about its support in different browsers, operating system and versions because its a responsibility of that particular team who is maintaining your design system

Some popular design system that we have in market:
a. Material UI
b. Google Design System
c. Atlassian Design System
d. Fluent UI by Microsoft
e. Semantic by Amazon

*******************************************************************************************************************************************************


# 6. Credibility and Trust (SEO):

One thing which is very important in our web pages are our head  (Never underestimate the power of head)

a. On-page: 
        Title
        Description
        Meta (used to share in social media)
        Content
        Performance



b. Off-page:
        Backlinks
        Ads (use google tag manager or google adWords, facebook ads you use other platforms in order to advertise your stuff)

*******************************************************************************************************************************************************


# 7. Logging And Monitoring:

    a. Error Logging: Very important (exapmple your application is not working for some customers, or some features is not working)
                      in some cases the customer can complain but in certain cases they will just walk away so in order to make the quality we should know what are the things breaking in our system so that we can start taking decisions on a faster way
    
    b. User Tracking: What types of users are there, from where they are coming, what are the things they prefer, which language they speak,
                      what age group they are from so understanding our user is very important

    c. User Acitivity: What they are liking/ disliking etc

    d. Feature Usage: Suppose we are giving many features but the usage of that are very very less so what the point of investing so much
                      time on the things that our customer doesnt like

    e. Infra / Capacity Monitoring: Lets say we have a lot of traffic in our application and the requests are not served, you system is down so we
                                    should monitor what kind of infra we have and how much basically the capacity of infra is left to being utilized
                                    So that you can make a decision that before the load comes we scale it
                                    
    So how can we solve all these things:


    Error Logging for the UI: Tools like sentry or track js
    User Tracking: Amplitude is one of the good source
    User Activity: Log Rocket (in order to see what your user is doing and how they are consuming your platform)


    
*******************************************************************************************************************************************************

# 8. Database and Caching:

    a. HTTP CACHING: Its like caching your static assests, It can be images, css or javascript, anything which can be cached the things that doesn't change frequently. And we have certain policies to get it cleared

    b. The second thing is related to you in-memory caching: we get some data and we put it in memory and then can take a certain decision

    c. The third is something like Apollo sort of thing graphql apollo then you have caching too, like once you make a api call or graohql request then basically you take a decision like do you want to make a request from your cache or you actually wanted to make a network request

    d. Similarly there are other ways like use some state management library like redux or context API

    e. In terms of databases we have local storage, session storage, index db, cookies (which maintain our identity in order to a communication between our client and server)


*******************************************************************************************************************************************************

# 9. Security:

    a. DDoS attack: DDoS Attack means "Distributed Denial-of-Service (DDoS) Attack" and it is a cybercrime in which the attacker floods a server with internet traffic to prevent users from accessing connected online services and sites.

    b. Authentication and Authorization

    c. Policies: Lets say someone put your website in the iFrame and pretend like its their application to earn money for that we have some policies like CSP (Content Security Policy) and CORS (Cross Origin Request) so you can decide from which browser, which domain and subdomain you accept the request

    d. Man in the middle: 


*******************************************************************************************************************************************************

# 10. Performance and Optimization:

    a. Optimize your assests: Basically images, css, js which are basically being loaded in your web application we should always think in terms of optimization. Based on the need we should prioritize and send it to the users.
    Below the fold and above the fold everything needs to be considered.
    And blocking, non-blocking behaviour we should always take care of

    b. Delivery Option: Whether to use websockets, sse, http based on the use case need to see which is the best way to deliver, or get something from your cache

    c. Build Assests: We have to make sure that the bundle size and all those things should be optimized and it does not have any un-necessary information or record so that it consume less time.

    d. SSR: We can use SSR (Server Side Rendering) to speed up the performance on initial load

    e. Service workers: helps you in terms of caching and all sort of things

    f. Web Vitals: Its a way which tells you if things are as per the standards or not 

    g. Perceived Performance: Perceived Performance is something which should be visible, you have done a lot of optimization but if it is not visible to the end user then its a waste 


*******************************************************************************************************************************************************

# 11. Testing:

    Unit Testing: Individual testing for components to test their functionality (Jest, Cypress, Mocha, Chai etc)

    Integration Testing: Cypress 

    End to End Testing: Cypress, Selenium popluar for E2E


*/
