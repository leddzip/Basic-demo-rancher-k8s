# Starting rancher in a docker container (to persist data, we can use volume: -v /data:/var/lib/rancher)
sudo docker run -d --privileged --restart=always -p 80:80 -p 443:443 rancher/rancher