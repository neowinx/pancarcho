# Pancarcho (pata pocha)

**A little keystroke helper for 7 days to die**

## Requirements

- [Git](https://git-scm.com) To clone and run this repository

- [Node.js](https://nodejs.org/en/download/) **v6 ~ v7** (prebuilds packages of iohook for Node v8 are on the way, so just use one of these in the meantime)
- [Java 8](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) **(Optional)** Needed only if you use the **gkm** hook.

## Install

To install just write:

```bash
npm install
```

## Use

Be sure to edit the `config.json` and select the adecuate **hook** to listen for keyboard and mouse events.

- **iohook**: Native implementation, so it should be fastest but sometimes it doesn't get well in some OS's (especially with newer and recently updated versions of glibc and etc)
- **gkm**: It uses the [JNativeHook](https://github.com/kwhat/jnativehook) events, so it works almost without a husstle, but it needs a `java` executable in the path (and maybe it's a bit slower?)

```bash
npm start
```

## Keymapping

The default keymapping is as follows:

- **Mouse 4** : Auto Run
- **Mouse 5** : Auto Clic
- **F10** : Teleport to base (edit coordinates in config.js)
- **Numpad 0** : Mole mode. Mantains click and walk every 1000 ms forward

## License

[CC0 1.0 (Public Domain)](LICENSE.md)
