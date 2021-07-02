# app

## Project setup
```
docker-compose up -d server
```

### Compiles and hot-reloads for development
```
docker-compose up -d server

```

### Compiles and minifies for production

    !! Only use if you are going to upload to a site that uses a load balancer
#### tag name = the tag name for the image 
<br/>

#### context = the folder where the the app folder 

<br/>

```
docker build -f ./docker-files/prod.dockerfile ./
-t {{tag name}} {{context}}
```


