+++
date = '2013-11-28T00:24:27+02:00'
draft = false
title = 'Installing Ralink 3090 Wifi Driver'
tags = ['linux', 'wifi', 'driver']
+++
I installed Kubuntu 10.10 on my new laptop, my laptop is Compaq CQ62- 308AX. It has Ralink 3090 wifi, which is not automatically detected by Kubuntu. Even the restricted driver manager does not show any option for this device. So I downloaded the driver from Ralink site (http://www.ralinktech.com/support.php?s=2).  It is in the source format. I thought I might have to patch the kernel source. I went through the readme file and I found that I don’t have to compile the kernel ( yippee an hr saved). Only the device driver source is needed to be compiled. These days things are much more simple. So I compiled the driver by running the command “make” and installed it by “make install”.  It has compiled other Ralink wifi modules along with 3090 module.

After installation (using ‘make install’)  reboot the machine, the reboot is not necessary for Linux after installing driver.  After reboot, it loaded an incorrect  rt2086 module. So I tried manually unloading and loading module using insmode and rmmod commands, but it did not work. To fix this open /etc/modprobe.d/blacklist.conf (as root) and add at the end: blacklist rt2800pci. Also open (as root) file /etc/modules and add: rt3390sta.

After rebooting the machine, wifi is working fine perfectly.

Note:- kernel version 2.6.38 and later contains the driver, so you don’t need to compile it.

Here is the step by step guide to install Ralink wifi driver

  1.  Download driver from Ralink site http://www.ralinktech.com/support.php?s=2 for your chipset.
  2.  Extract it, cd to extracted folder, run make command to compile it.
  3. Run make install as root to install the module.
  4.  Open /etc/modprobe.d/blacklist.conf (as root) and add at the end: blacklist rt2800pci. Also open (as root) file /etc/modules and add: rt3390sta.
  5.  Reboot machine
