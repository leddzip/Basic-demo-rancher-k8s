sudo apt update
sudo apt upgrade -y

sudo apt install nginx -y

sudo ufw allow "Nginx Full"
sudo ufw allow "OpenSSH"

sudo ufw --force enable
