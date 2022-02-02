[Go back to index](../Index.md)

---

# class Source [#source](../../core/read/Source.js)


### class 
> ```ts
> {Source}
> ```



### description 
Reads contents of javascript or typescript file

### example 
 ```js
  const source = new Source('./helloWorld.js');
 
  for (const docBlock of source.read()) {
      // docblocks
  }
 
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


## hasDockBlocks()



### return 
> ```ts
> {RegExpMatchArray|false}
> ```


## readFile()



### return 
> ```ts
> {string}
> ```


## * read()



### description 
All parsable DocBlocks in source

### return 
> ```ts
> {Generator<DocBlock, void, any>}
> ```

