[Go back to index](../Index.md)

---

# class MarkDown [#source](../../core/write/MarkDown.js)


### class 
> ```ts
> MarkDown
> ```




### description Create MarkDown files from `js-doc` blocks


### example 
 ```markdown
  # MarkDown
 
  ## description Create MarkDown files from `js-doc` blocks
 
  ```

## constructor(docsPath)



### param  docsPath
> ```ts
> string
> ```



## clean(name)



### description Removes documentation file


### param  name
> ```ts
> string
> ```



## createDirectory(fileSource)



### description Creates all directories in documentation path based on source path


### param  fileSource
> ```ts
> Source
> ```



## parseOwner(owner, name, source)



### description write header for docblock


### param  owner
> ```ts
> string
> ```




### param  name
> ```ts
> string
> ```




### param  source
> ```ts
> Source
> ```



## parseProperty(property)



### description handle js-doc tags


### param  property
> ```ts
> DocProperty
> ```



## parsePropertyContent(content)



### description write content of js-doc tag


### param  content
> ```ts
> string
> ```



## write(fileSource)



### description start writing markdown


### param  fileSource
> ```ts
> Source
> ```



## nameByFileSource(fileSource)



### description Set right output name and path


### param  fileSource
> ```ts
> Source
> ```




### return 
> ```ts
> string
> ```



## writePart(content)



### description write part if content is present.


### param  content
> ```ts
> string
> ```



## writeFile(name)



### description write content to markdown file.


### param  name
> ```ts
> string
> ```



## writeHeader(fileSource, name)



### description write a header to go back to index


### param  fileSource
> ```ts
> Source
> ```




### param  name
> ```ts
> string
> ```



## writeIndexPart(fileSource, name)



### description write `Index.md`


### param  fileSource
> ```ts
> Source
> ```




### param  name
> ```ts
> string
> ```


