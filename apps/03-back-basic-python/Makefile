image_name = leddzip/demo-rancher-back-basic-python-1
version = $$(cat app_info.json | jq .version | tr -d \")

docker-build:
	docker build -t $(image_name):$(version) -t $(image_name) .

docker-push: docker-build
	docker push $(image_name):$(version)
	docker push $(image_name)