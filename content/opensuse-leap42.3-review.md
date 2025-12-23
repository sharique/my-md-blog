+++
date = '2017-10-20'
draft = false
title = 'OpenSuse Leap 42.3 review'
tags = ['opensuse', 'linux', 'review']
+++
On July 26, OpenSuse project releases the latest version of OpenSuse distribution – OpenSuse Leap 42.3. It is powered by LTS kernel 4.4 with many features backported from a newer release, particularly related to latest hardware support. Among the key packages are gcc 4.8.5, KDE Plasma 5.8 LTS and Gnome version 3.20. Other desktop environments like XFCE or LxQt can be downloaded from repos. It shared the base with Suse Enterprise (SLE) 12 Service pack 3, so it is extremely stable and secure. Firefox version is 52 ESR (ESR is enterprise release channel) and LibreOffice 5.3.

The installer is same old proved and tested Yast based installer, nothing much changed here. For installation, I downloaded DVD which little over 4.3 GB. I created a bootable USB stick using rufus (https://rufus.akeo.ie) utility. I took me around 30 mins to install with default package selection. I was expecting it to be faster as I was using a USB 3.0 stick.

Except for wifi adapter all hardware on my carrizo laptop is detected a properly. The wifi adapter is Broadcom 802.11ac and there is no wifi driver for Linux from Broadcom. My laptop is two years old and it was not the latest model when bought it. It is really sad that Broadcom ignores its Linux user base. I’ve TP-Link USB wifi adapter also, which is not detected by Leap but works fine in Tumbleweed. Anybody facing similar issues I recommend them to either install the latest Kernel:stable repo or switch to tumbleweed.

When booting into the newly installed OS I saw few error messages related to amdgpu. In leap kernel version is 4.4 with backported patches. I’m also running OpenSuse tumbleweed with kernel 4.12 in which I don’t see such messages. Seems like all driver features are not backported. Please note that I didn’t find any issue while using Leap, I didn’t test gaming yet. Performance is good and feels very stable. I didn’t face any issues in my few days of usage.

Now I installed my favorite packages like google chrome, opera, vlc, ffmpeg and kodi. For google chrome I downloaded it from the official site. Opera from non-oss update repo, it has slightly older version but it is fine for me. I used packman repo for installing vlc, ffmpeg and kodi. For vlc to work perfectly don’t forget to install vlc-codes packages as some videos will not be able to play, also make sure install vlc and vlc-codecs from same repo (prefer packman as it has more codecs supported packages).

Apart from the above-mentioned hardware related issue new OpenSuse leap release very stable and solid release. The goal to make openSUSE based on SLE to provide enterprise-class desktop to all users. It is highly recommended for the users who are looking for a stable desktop. For those who are looking for the latest stable version of packages Tumblweed is the right option, I’m using it from past 6 months, didn’t find any issue.

The next version of OpenSuse won’t be called the Leap, will be based on Enterprise edition, Next version of SLE will be 15 so next OpenSuse will be called OpenSuse 15.0.
