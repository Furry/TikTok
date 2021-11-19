# Using MEMU & ADB;

## Init
- adb push ./frida-server-15.1.1-android-x86 /data/local/tmp/serv
- adb shell
- chmod 777 /data/local/tmp/serv

## Start Frida-Server on MEMU
- Attach to memu: **adb connect localhost:21503**
- adb shell
- /data/local/tmp/serv

## Start SSL Bypass
- frida -U -f com.zhiliaoapp.musically -l ./pinning.js --no-pause