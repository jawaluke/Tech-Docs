DOCKER : 

    - docker is a container management service. In simple keyword develop, ship, run on anywhere. it used to build image and create a container by docker engine on host machine.

Docker Architecture:

          APP       APP        ---> host our application on top of the each Guest OS
        Guest OS   GUEST OS    ---> multiple OS is installed as a virtual machine on top of the hypervisor as a Guest OS
                |  
            Hypervisor         ---> VMWare or windows Hyper V to host virtual machine
                |
              HOST OS          ---> HOST OS is base machine such as windows, linux
                | 
              Server           ---> Physical server to host multiple virtual machines


        