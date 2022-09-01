/**
 * Node.js fs module
 * 
 * Node.js includes fs module to access physical file system .
 *   The fs module is responsible for all the asynchronous file I/O Operations.
 *   Synchronous : Loading... Loading... you wait for finish., After finish you can move
 *   Asynchronous : No Loading... No Loading.. no need to wait... you can move 
 */

/**
 * ===> Synchronous
 * Method   =>   Description
 *  fs.readFileSync(fileName [,options])  ==>  Read Existing file.
 *  fs.writeFileSynce(fileName, data[,options])  ==>  Writes to the file. if file exists then overwrite the content otherwise creates new file.
 *  fs.renameSync(oldPath, newPath)  ==> Renames an existing file.
 *  fs.existsSync(path)  ==>  Determinew whether the specified file exists or not .
 *  fs.unlinkSync(path)  ==>  File delete
 *  fs.appendFileSynce(file, data[, options])  ==>  Appends new content to the existing file.
 *  fs.openSynce(path, flags[, mode])  ==>  Opens file for reading or writing
 *  fs.mkdirSync(path[, mode])  ==>  Create a new directory
 *  fs.rmdirSynce(path)  ==>  Renames an existing directiory.
 *  fs.readdirSynce(path)  ==>  Reads the content of the specified directory.
 */


/**
 * ==== Asynchronous
 * Method   =>   Description
 *  fs.readFil(fileName [,options], callback)  ==>  Read Existing file.
 *  fs.writeFile(fileName, data[options], callback)  ==>  Writes to the file. if file exists then overwrite the content otherwise creates new file.
 *  fs.rename(oldPath, newPath, callback)  ==> Renames an existing file.
 *  fs.exist(path, callback)  ==>  Determinew whether the specified file exists or not .
 *  fs.unlink(path, callback)  ==>  File delete
 *  fs.appendFile(file, data[, options], callback)  ==>  Appends new content to the existing file.
 *  fs.open(path, flags[, mode], callback)  ==>  Opens file for reading or writing
 *  fs.mkdir(path[, mode], callback)  ==>  Create a new directory
 *  fs.rmdir(path, callback)  ==>  Renames an existing directiory.
 *  fs.readdir(path, callback)  ==>  Reads the content of the specified directory.
 */

