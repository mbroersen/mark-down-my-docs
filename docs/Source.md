
# class Source [#source](../core/Source.js)


### class 
> ```ts
> {Source}
> ```



### description 
Reads contents of javascript or typescript file

### example 
 ```js
  new Source('./helloWorld.js');
  ```
## constructor(path)



### param 
> ```ts
> {string}
> ```

 path
## get basename()



### return 
> ```ts
> {string}
> ```


## get relativePath()



### return 
> ```ts
> {string}
> ```


## dockBlocksInContent(content)



### param 
content

### return 
> ```ts
> {IterableIterator<RegExpMatchArray>}
> ```


## * read()



### description 
All parsable DocBlocks in source

### return 
> ```ts
> {Generator<DocBlock, void, any>}
> ```

