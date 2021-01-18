NETWORK_TYPE = "private"

BOX            = "bento/ubuntu-20.04"
RAM            = 4096
CPUS           = 2
BASE_IP        = "192.168.100"
NETWORK = {
  "private" => {
    "value" => "private_network",
    "base_ip" => "192.168.100"
  },
  "public" => {
    "value" => "public_network",
    "base_ip" => "192.168.1"
  }
}

DEFAULT_NETWORK_INTERFACE = `ip route | awk '/^default/ {printf "%s", $5; exit 0}'`


def shared_config(component, ip, ram, cpus)
  # TODO: put all the shared config inside this function
  component.vm.box = BOX
  if NETWORK_TYPE == "private"
    component.vm.network NETWORK["private"]["value"], ip: "#{NETWORK["private"]["base_ip"]}.#{ip}"
  elsif NETWORK_TYPE == "public"
    component.vm.network NETWORK["public"], bridge: "#{DEFAULT_NETWORK_INTERFACE}", ip: "#{NETWORK["public"]["base_ip"]}.#{ip}"
  end

  component.vm.provider :virtualbox do |vb_config|
    vb_config.memory = ram
    vb_config.cpus = cpus
  end

end

######################################################################################################################################################
#
#  VAGRANT BOX CONFIGURATION
#
######################################################################################################################################################

Vagrant.configure("2") do |config|

  # global provisioner
  config.vm.provision :shell, path: "provisions/docker.sh"

  # this node is responsible to hold all rancher specific process and configs
  # it is not intended to be run as a kubernetes node
  config.vm.define "rancher-node" do |rancher|
    rancher.vm.provision :shell, path: "provisions/rancher.sh"
    shared_config rancher, "250", 2048, 2
  end

  # this is the first node of the kubernetes cluster
  # It will also be the master node
  config.vm.define "kube-node-1" do |kube1|
    shared_config kube1, "249", RAM, CPUS
  end

  # this is the second node of the kubernetes cluster
  # It is a slave node
  config.vm.define "kube-node-2" do |kube2|
    shared_config kube2, "248", RAM, CPUS
  end

end
