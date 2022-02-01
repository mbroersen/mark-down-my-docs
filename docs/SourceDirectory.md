
# class SourceDirectory [~source~](../core/SourceDirectory.js)


### class 
> ```ts
> {SourceDirectory}
> ```



### description 
Reads contents of source directory with javascript or typescript files

### example 
 ```js
  const sourceDirectory = new SourceDirectory('./core');
 
  // Outputs Sources in generator
  for (const source of sourceDirectory.read()) {
      // instance of Source
      source.read() // get content
  }
 
  ```
## constructor(path)



### param 
path
## * read()



### description 
will output list of Source for each file in directory or subdirectory

### return 
> ```ts
> {Generator<Source, void, any>}
> ```


## * scanDirectory(srcPath)



### description 
will output list of path names for each file in directory or subdirectory

### param 
srcPath

### return 
> ```ts
> {Generator<string|any, void, any>}
> ```

