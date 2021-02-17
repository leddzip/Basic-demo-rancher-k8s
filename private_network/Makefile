interface = $$(ip route | awk '/^default/ {printf "%s", $$5; exit 0}')

apply-dns:
	sudo systemd-resolve --interface $(interface) --set-dns 192.168.100.250

revert-dns:
	sudo nmcli networking off
	sudo nmcli networking on

k8s-01:
	kubectl --kubeconfig kubernetes/kubeconfig apply -f kubernetes/01-namespace-infra.yml

k8s-02:
	kubectl --kubeconfig kubernetes/kubeconfig apply -f kubernetes/02-namespace-team1.yml

k8s-03:
	kubectl --kubeconfig kubernetes/kubeconfig apply -f kubernetes/03-deployement-front-one.yml

k8s-04:
	kubectl --kubeconfig kubernetes/kubeconfig apply -f kubernetes/04-service-front-one.yml

k8s-05:
	kubectl --kubeconfig kubernetes/kubeconfig apply -f kubernetes/05-deployement-back-basic-java.yml

k8s-06:
	kubectl --kubeconfig kubernetes/kubeconfig apply -f kubernetes/06-service-back-basic-java.yml

k8s-07:
	kubectl --kubeconfig kubernetes/kubeconfig apply -f kubernetes/07-deployement-back-basic-python.yml

k8s-08:
	kubectl --kubeconfig kubernetes/kubeconfig apply -f kubernetes/08-service-back-basic-python.yml

k8s-09:
	kubectl --kubeconfig kubernetes/kubeconfig apply -f kubernetes/09-deployement-back-internal-service-java.yml

k8s-10:
	kubectl --kubeconfig kubernetes/kubeconfig apply -f kubernetes/10-service-back-internal-java.yml

k8s-11:
	kubectl --kubeconfig kubernetes/kubeconfig apply -f kubernetes/11-deployement-back-connected-service-java.yml

k8s-12:
	kubectl --kubeconfig kubernetes/kubeconfig apply -f kubernetes/12-service-back-connected-service-java.yml
