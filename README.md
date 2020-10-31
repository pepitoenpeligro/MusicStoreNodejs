# Music Store

Microservice built with REST pattern written in NodeJS



## Build and run

Just for run:

```
npm start
```


Just for development:

```
npm watch
```



## How it works?


It accepts HTTP requests, so we can use any utility that sends HTTP packets. We recommend the use of curl.

Here is one example of basic HTTP requests accepted by our microservice:


__GET__ requests:


```
curl --location --request GET 'localhost:3320/api/songs' \
--header 'Content-Type: application/json' \
--header 'Content-Type: text/plain'
```


## References