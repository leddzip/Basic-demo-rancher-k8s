sudo apt-get update
sudo apt-get upgrade

sudo apt-get install -y bind9 dnsutils

sudo ufw allow "Bind9"
sudo ufw reload

# managing files
sudo mkdir /etc/bind/namespace
sudo mkdir /etc/bind/zones

sudo cp /vagrant/provisions/bind9/named.conf.options /etc/bind/
sudo cp /vagrant/provisions/bind9/named.conf.local /etc/bind/
sudo cp /vagrant/provisions/bind9/leddzip.example.zone /etc/bind/namespace/
sudo cp /vagrant/provisions/bind9/db.192 /etc/bind/zones/

sudo systemctl restart bind9