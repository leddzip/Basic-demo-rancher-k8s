Kubernetes with Rancher on private network
=========================================

You can't just apply the default command to add a new node. Since you are 
on a private network, you have to add another parameter to the command to
tell rancher what will be the new address for the node.

By default, it will put `10.0.2.15` if nothing is provided.
To add a second node, you will have to add another internal address such as 
`10.0.2.16`.

An alternative is to use the ip in the created network (`192.168.100.248` and `192.168.100.247`)

Setup
-----

To run the different kubernetes config file, you need to create a `kubeconfig` file.
You can get if from the rancher cluster. Just don't put it as your main `kubeconfig` file
since this cluster is virtual and for demo purpose only.

Then run the following command:
```bash
kubectl --kukeconfig <KUBECONFIG PATH> apply -f <PATH OF THE KUBERNETES SETUP FILE>
```