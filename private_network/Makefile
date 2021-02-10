interface = $$(ip route | awk '/^default/ {printf "%s", $$5; exit 0}')

apply-dns:
	sudo systemd-resolve --interface $(interface) --set-dns 192.168.100.250

revert-dns:
	sudo nmcli networking off
	sudo nmcli networking on