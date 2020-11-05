# Rethink-take-home-exam


## Problem 2 

cd into the `/AutoCompletedSearch` folder \
`npm instal` \
`npm start` \
Visit `localhost:3000` 

### Assumptions & Limitations:

	- This is a pure front-end application. I assume source data is 
	stored on the front-end side. 
	Assuming currently data source is not large scale and we are not 
	facing performance bottleneck.

	- If the data source is very large, then it's not suitable to store 
	all of it on the front-end side. The full version of data should store 
	in the back-end side or sometimes in a middleware, where front-end can 
	fetch through API. And part of the data should be stored on front-end as 
	caching. To be more specific, Least Recent Used Cache will be preferred.

	- This application will the face performance bottleneck as the size 
	of data going larger. To solve this, we need to difine a customized data 
	structure(prefix tree), to maintain the data. Which is storing all possible 
	prefixes as nodes of the tree, and take advantage of tree to search. 
	Thus the searching operation would cost only O(L) complexity, where L is 
	the length of the given key. This solution should be able to support 
	millions of lines of data. 





## Problem 3 

cd into the `/ShorUrl` folder \
`npm instal` \
`node index.js` \
Visit `localhost:8080` 

### Assumptions 

	- Assuming the user is entering Http/Https URLs
	- Assuming there will be no scenario that the user enters a super 
	long URL string, where is no mechanism to check 
	malicious requests, just normal URL checking.


### Limitations:

	- A customized URL validator is a kind of simplified version, 
	which can not handle some complex scenarios in the real world.

	- This service depends on the "TinyURL" module. The third-party 
	library maybe not 100% reliable. We cannot control the process 
	to generate short URLs. To provide product-level short URL service, 
	we need to design reliable algorithms like hashing, continuous hashing, 
	and MD5. To avoid the collision of short URLs, we need to have salts 
	in the process of encoding. To perfectly make sure every url is unique,
	we need to regularly release URLs that expired. To make the system 
	support high concurrency, we can create some predefined short URLs 
	then assign them when needed, instead of processing at runtime. We should 
	have plenty of ready-to-use short URLs stored in the caching and back-end DB. 
	To support high availability, distributed clusters and load balancer 
	like Nginx should be used.   
	
	- There is no functionality like remove short urls. If we want 
	to provide Sass for the user,  user-friendly CRUD features for urls 
	should be provided, for users can only access a limited resource.

	- There is no functionality like user can set some customized fields 
	in the URL string for easily remembering. 
