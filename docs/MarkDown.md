
# class MarkDown [#source](../core/MarkDown.js)


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



### param 
string name
## createDirectory(fileSource)



### param 
> ```ts
> {Source}
> ```

 fileSource
## parseOwner(owner, name, source)



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



### param 
> ```ts
> {Source}
> ```

 fileSource
## writePart(content, name)



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