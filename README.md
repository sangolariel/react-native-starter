## Version

```
react-native: 0.66.4
react-navigation: v6
node: v16.13.1
```

## Run app

#ios

```
1. yarn
2. cd ios & pod install
3. yarn ios
```

#android

```
1. yarn
2. cd android
3. yarn android
```

## Rule

- Use Yarn instead of Npm.
- Turn on the Eslint and Prettier.
- Make sure your styles clearly. Don't fixed style.
- camelCase to name the styles and func ...
- Make sure that code doesn't have warning and bug.

# Warning

At the time config this source code. There is a warning like that on Android.

```
("new NativeEventEmitter() was called with a non-null argument without the required addListener method.").
```

It is opening & seems no one fixed it. Pls flow this issue (https://github.com/react-native-netinfo/react-native-netinfo/issues/486) to fix it in the future. Thank you.
