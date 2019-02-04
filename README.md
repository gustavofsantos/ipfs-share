# IPFS SHARE

You can share files direct in the browser. Also, you can download files using the protocol defined below.

### Technologies

* React Hooks (React 16.8.0-alpha.1)
* React Router
* IPFS

### Obervation

Theres two versions of ipfs libraries that can be used. The best version is used when the user has the IPFS Companion extension in his browser. IPFS Companion inject a ipfs object into the window object and this ipfs librarie is more stable, because it uses a hosted node.

The other version use the alpha version of the IPFS. It uses discovery servers that sometimes can't find peers and the application will not work as expected.

### Protocol

To share a file you will first add a file as a buffer into IPFS, it will generate a hash. Then, create a JSON with these properties:

```json
{
  "name": "File name.ext",  // name of the raw file
  "size": 292212,           // size of the raw file
  "hash": "Qm..."           // hash of the raw file
}
```

The json like above is called `metadata` and is used to keep a file name with the raw data of the file.