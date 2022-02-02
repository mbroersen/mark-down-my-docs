[Go back to index](../Index.md)

---

# class MarkDown [#source](../../core/write/MarkDown.js)


### class 
> ```ts
> {MarkDown}
> ```



### description 
Create MarkDown files from `js-doc` blocks

### example 
 ```markdown
  # MarkDown
 
  ## description Create MarkDown files from `js-doc` blocks
 
  ```
## constructor(docsPath)



### param 
docsPath
## clean(name)



### description 
Removes documentation file

### param 
> ```ts
> {string}
> ```

 name
## createDirectory(fileSource)



### description 
Creates all directories in documentation path based on source path

### param 
> ```ts
> {Source}
> ```

 fileSource
## parseOwner(owner, name, source)



### description 
write header for docblock

### param 
> ```ts
> {string}
> ```

 owner

### param 
> ```ts
> {string}
> ```

 name
## parseProperty(property, name)



### description 
handle js-doc tags

### param 
> ```ts
> {DocProperty}
> ```

 property

### param 
> ```ts
> {string}
> ```

 name
## parsePropertyContent(content, name)



### description 
write content of js-doc tag

### param 
> ```ts
> {string}
> ```

 content

### param 
> ```ts
> {string}
> ```

 name
## write(fileSource)



### description 
start writing markdown

### param 
> ```ts
> {Source}
> ```

 fileSource
## nameByFileSource(fileSource)



### description 
Set right output name and path

### param 
> ```ts
> {Source}
> ```

 fileSource

### return 
> ```ts
> {string}
> ```


## writePart(content, name)



### description 
write part if content is present.

### param 
> ```ts
> {string}
> ```

 content

### param 
> ```ts
> {string}
> ```

 name
## writeHeader(fileSource, name)



### description 
write a header to go back to index

### param 
> ```ts
> {Source}
> ```

 fileSource

### param 
> ```ts
> {string}
> ```

 name
## writeIndexPart(fileSource, name)



### description 
write `Index.md`

### param 
> ```ts
> {Source}
> ```

 fileSource

### param 
> ```ts
> {string}
> ```

 name