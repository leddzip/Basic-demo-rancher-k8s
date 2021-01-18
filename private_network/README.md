Kubernetes with Rancher on private network
=========================================

You can't just apply the default command to add a new node. Since you are 
on a private network, you have to add another parameter to the command to
tell rancher what will be the new address for the node.

By default, it will put `10.0.2.15` if nothing is provided.
To add a second node, you will have to add another internal address such as 
`10.0.2.16`.