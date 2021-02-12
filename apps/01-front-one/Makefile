image_name = leddzip/demo-rancher-react-1
version = $$(cat package.json | jq .version | tr -d \")

docker-build:
	docker build -t $(image_name):$(version) -t $(image_name) .

docker-push: docker-build
	docker push $(image_name):$(version)
	docker push $(image_name)