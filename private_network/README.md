Kubernetes with Rancher on private network
=========================================

You can't just apply the default command to add a new node. Since you are 
on a private network, you have to add another parameter to the command to
tell Rancher what will be the new address for the node.

By default, it will put `10.0.2.15` if nothing is provided.
To add a second node, you will have to add another internal address such as 
`10.0.2.16`.

An alternative is to use the ip in the created network (`192.168.100.248` and `192.168.100.247`)

Just, when you are creating your node in Rancher, I suggest registering them with their ip registered
in the Vagrantfile and naming them with an explicit name (don't let Rancher manage this for you,
you might have name collision and won't be able to create additional nodes).

Setup
-----

To run the different kubernetes config file, you need to create a `kubeconfig` file.
You can get if from the rancher cluster. Just don't put it as your main `kubeconfig` file
since this cluster is virtual and for demo purpose only.

Then run the following command:
```bash
kubectl --kukeconfig <KUBECONFIG PATH> apply -f <PATH OF THE KUBERNETES SETUP FILE>
```

Issues
------

There is a big issue I still have to work on. Since everything is virtualized thanks to 
virtualbox, there is an issue with node communication inside your cluster. It's not something
you will face with a production setup so don't worry too much for now. 

In a production setup, you could hit either node and still get the resource you query for (even if
your pod is not deployed inside this node). Also, you will be able to have a pod from one node
communicate with a pod from another node. It's just not yet possible to achieve this behaviour
with the current state of the project (but I'll still investigate since it bugs me off).