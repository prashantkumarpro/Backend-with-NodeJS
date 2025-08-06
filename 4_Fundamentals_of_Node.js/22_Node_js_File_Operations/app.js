import { watch } from 'node:fs'
import { rename, copyFile, cp, unlink, rmdir, rm, writeFile, appendFile, mkdir, stat } from 'node:fs/promises'

// rename method used to rename and move
// rename('border-radious.png', 'bottom header.png')
// copyFile('bottom header.png', "C:\\Users\\HP\\Desktop\\renamed.png")
// console.log('end')
// cp('./src', 'C:\\Users\\HP\\Desktop\\src', { recursive: true })

// rename('bottom header.png', "C:\\Users\\HP\\Desktop\\renamed.png")
// rename('src', 'build')

// unlink('renamed.png')

// rmdir('test')
// rm('src', {recursive:true})

// Create file 
// writeFile('styel.css', '')

// appendFile('src/index.html', '')

// create a directory

// mkdir('src')

// const stats = await stat('app.js')
// console.log(stats);

const watchNow = watch('file.txt', (eventType)=>{
    console.log(eventType)
})