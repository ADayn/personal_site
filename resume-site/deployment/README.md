# Running In Docker
Run this Dockerfile with:
```
docker build -t resume-site ..
docker run --name mynginx3 -p 80:80 -d mynginx_image1
```
**Note**: The directory at the end should be the root of the resume-site

# Viewing Logs
The `access.log` and `error.log` files have been redirected to STDOUT and STDERR in the standard nginx docker container:
```
lrwxrwxrwx  1 root root   11 Apr 27  2016 access.log -> /dev/stdout
lrwxrwxrwx  1 root root   11 Apr 27  2016 error.log -> /dev/stderr
```

Access them with:
```
docker logs <CONTAINER ID>
```

# SSH into container
```
docker exec -it <CONTAINER ID> /bin/bash
```
