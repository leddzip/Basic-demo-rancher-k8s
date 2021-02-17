Kubernetes on Rancher with Vagrant
==================================

This project aim at showcasing a simple way to use Kubernetes for a limited scope
(so mostly basic deployment, services and namespaces).

What this project is doing ?
----------------------------

1. create several VMs to simulate an infrastructure for Kubernetes and Rancher
    
    1.1 A VM to act as a load balancer and DNS server (*not yet completely finalized*)
    
    1.2 A VM to host Rancher

    1.3 A VM to act as one node of our cluster

    1.4 A VM to act as a second node of our cluster

2. create the container images to be deployed inside Kubernetes:

    2.1 A front end (in React), that hits 3 endpoints

    2.2 A Backend in Java (Spring boot) that depend on nothing (no db, no external services)

    2.3 A Backend in Python (Flask) that depend on nothing (no db, no external services)

    2.4 A Backend in Java (spring boot) only accessible from inside the cluster (can't be hit by the front end)

    2.5 A Backend in Java (Spring boot) that depends on an internal service (2.4)

3. create the deployments, services and namespaces in the cluster

Requirements
------------

All of this has been tested and developed with a GNU/Linux distribution. It should be manageable with
any distribution as well as with macOS.

I didn't test it with Windows. It should be virtually possible with some tweaks however.

1. **VirtualBox** and **Vagrant**: to create the virtual machine automatically for us.
The Vagrantfile describe how I want my virtual machines and Vagrant will manage them for me.
   
2. **Make**: a little tool that I use in order to avoid writing again and again the same commands.

3. **Docker**: to create and manage my containers and images.

4. **SDKMan**: for java development. I don't want to manually manage which version I need.

5. **Maven**: no surprise, for java development.

6. **NVM**: for node development. I don't want to manually manage which version of *node* and *npm* I need.

7. **Bash**: not required per se, but to create the scripts and test them, it's easier to have a bash somewhere.

8. **jq**: a CLI tool to parse and query json file

9. **xq** and **yq**: same as **jq** but for yaml and xml. Please, install them from **pip**, not from your package manager.

10. **kubectl**: to manage your server with command line. Also, the deployments are done with kubectl, so you'll need it.
