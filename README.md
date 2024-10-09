# MCSManager Node SDK

## What is MCSManager Node SDK

The MCSManager Node SDK is a Node.js solution based on the [MCSManager](https://mcsmanager.com/) [API](https://docs.mcsmanager.com/apis/get_apikey.html). With this SDK, developers can easily create, start, and stop instances in their MCSManager, manage users and daemons, and configure related instance settings, among other features (some functionalities are still under development).

## How to use

### Install dependencies using any package manager

```bash
# yarn
yarn add mcsm-node-sdk

# pnpm
pnpm add mcsm-node-sdk

# npm
npm install mcsm-node-sdk
```

### Introduced in the code

```ts
# ES Module
import { MCSManagerClient } from 'mcsm-node-sdk'
```

### Initialize MCSManagerClient 

```ts
const mcsm = new MCSManagerClient({
    api_key: 'YOUR_API_KEY', // eg. abcdefghijklmnopqrstuvwxyz
    panel_url: 'YOUR_PANEL_API_BASE_URL', // eg. https://example.com/api or https://example.com/api/
    auto_catch_http_error: true
    // If this is turned on, subsequent Promises will always return success, so use data.status to determine the result of the actual request.
})
```

### Using the daemon

```ts
const myDaemon = mcsm.useDaemon('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa')
```

### Using the instance

```ts
const myInstance = mcsm.useInstance('bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb', myDaemon)
```

### Usage Examples

```ts
const myDaemon = mcsm.useDaemon('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa')

const myInstance = mcsm.useInstance('bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb', myDaemon)

const {data:result} = await myInstance.start()
if (result.status === 200) {
    // The start command was successful
} else {
    // ...
}
```

### Attention

⚠️ Do not use deconstruction assignment, otherwise the function will not work properly.

```ts
const { getOverview, useDaemon, multiWorkerInstance } = mcsm // ❌
```

⚠️ Some of the features are untested for the time being and can be turned on issue if you encounter problems. ~~( It's definitely not because I'm lazy. )~~

## More details

Refer to the usage in https://docs.mcsmanager.com/apis/get_apikey.html
