image_name = leddzip/demo-rancher-react-1
version = $$(cat package.json | jq .version | tr -d \")

build:
	docker build -t $(image_name):$(version) -t $(image_name) .

push:
	docker push $(image_name):$(version)
	docker push $(image_name)