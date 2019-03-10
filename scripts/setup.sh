#!/bin/sh
NEWUSER=$1
# baseline update
sudo apt update && sudo apt upgrade
echo "++++++++++"
# manage user settings
sudo groupadd -g 426942 prodteam
sudo useradd $NEWUSER
sudo usermod -aG prodteam ${USER}
sudo usermod -aG prodteam $NEWUSER
echo "++++++++++"
# install starting build repo
cd /
sudo git clone https://github.com/karnthis/core-deploy.git
sudo mv core-deploy _prod
sudo chown -R $NEWUSER:prodteam _prod
echo "++++++++++"
# update acme file perms
cd /_prod/traefik
sudo chmod 600 acme.json
echo "++++++++++"
# setup ssh key for second user
cd ~
sudo cp .ssh ../$NEWUSER/.ssh
sudo chown -R $NEWUSER:$NEWUSER ../$NEWUSER
echo "++++++++++"
# Docker install + setup
sudo apt install apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable"
sudo apt update && sudo apt upgrade
apt-cache policy docker-ce
sudo apt install docker-ce docker-ce-cli
sudo systemctl enable docker
echo "++++++++++"
# update users with docker powers
sudo usermod -aG docker ${USER}
sudo usermod -aG docker $NEWUSER
echo "++++++++++"
# install docker-compose
sudo apt install docker-compose
# restart server
sudo reboot
