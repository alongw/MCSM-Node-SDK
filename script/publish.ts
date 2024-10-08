import fse from 'fs-extra'

// 更新 package.json 中的版本号
const updatePackageJson = async () => {
    const packageJsonPath = 'package.json'
    const packageJson = await fse.readJson(packageJsonPath)
    const version = packageJson.version
    const versionArr = version.split('.')
    versionArr[2] = (parseInt(versionArr[2]) + 1).toString()
    packageJson.version = versionArr.join('.')
    await fse.writeJson(packageJsonPath, packageJson, { spaces: 4 })
}

// 使用 prettierrc 格式化 package.json
const formatPackageJson = async () => {
    const { exec } = require('child_process')
    exec('npx prettier --write package.json', (error: any, stdout: any, stderr: any) => {
        if (error) {
            console.error(`exec error: ${error}`)
            return
        }
        console.log(`stdout: ${stdout}`)
        console.error(`stderr: ${stderr}`)
    })
}

// 移除 /dist 文件夹
const removeDist = async () => {
    await fse.remove('dist')
}

// 运行 pnpm build:tsc
const buildTsc = async () => {
    const { exec } = require('child_process')
    exec('pnpm build:tsc', (error: any, stdout: any, stderr: any) => {
        if (error) {
            console.error(`exec error: ${error}`)
            return
        }
        console.log(`stdout: ${stdout}`)
        console.error(`stderr: ${stderr}`)
    })
}

// 运行 npm publish
const publish = async () => {
    const { exec } = require('child_process')
    exec('npm publish', (error: any, stdout: any, stderr: any) => {
        if (error) {
            console.error(`exec error: ${error}`)
            return
        }
        console.log(`stdout: ${stdout}`)
        console.error(`stderr: ${stderr}`)
    })
}

await updatePackageJson()
await formatPackageJson()
await removeDist()
await buildTsc()
await publish()
