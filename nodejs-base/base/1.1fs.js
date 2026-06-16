const fs = require('fs')
//const data = fs.readFileSync('./hello.md', 'utf-8')
console.log(data)
// 写入文件
// fs.writeFile('./hello.md', '你好', (err) => {
//     if (err) {
//         console.log(err)
//     }
//     console.log('写入成功')

// })
// 读取文件
async function readFileWithPromise(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf-8', (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        }) 
    })
}
async function writeFileWithPromise(filePath, content) {
    return new Promise((resolve, reject) => {
       fs.writeFile(filePath,content,{
            encoding: 'utf8',   // 编码格式，默认 'utf8'
        mode: 0o666,        // 文件权限，默认 0o666（可读写）
        flag: 'a'       

        },err => {
              if (err) {
                reject(err)
            } else {
                console.log('写入成功')
                resolve()
            }
        })      
    })
}


await readFileWithPromise('./hello.md')
await writeFileWithPromise('./hello.md', '你好111111111111')

// 追加文件
// const buff = Buffer.from('你好111111111111')
// const buff = Buffer.from('你好111111111111')
// fs.appendFile('./hello.md', buff, (err) => {
//     if (err) {
//         console.log(err)
//     }
//     console.log('追加成功')

// })

// 获取文件信息
// fs.stat('./hello2.md', (err, stats) => {
//     if (err) {
//         console.log(err)
//     }
//     console.log(stats)
// })
// 重命名文件
// fs.rename('./hello.md', './hello3.md', (err) => {
//     if (err) {
//         console.log(err)
//     }
//     console.log('重命名成功')
// })

// 删除文件
// fs.unlink('./hello.md', (err) => {
//     if (err) {
//         console.log(err)
//     }
//     console.log('删除成功')
// })