dns:
	sudo cp /etc/systemd/resolved.conf /etc/systemd/resolved.conf.temp
	sudo cp /etc/systemd/resolved.conf.temp ./resolved.conf.temp.$$(uuidgen)
	sudo cp templates/resolved.conf /etc/systemd
	sudo systemctl restart systemd-resolved.service

revert-dns:
	sudo mv /etc/systemd/resolved.conf.temp /etc/systemd/resolved.conf
	sudo systemctl restart systemd-resolved.service