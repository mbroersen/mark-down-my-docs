[Go back to index](../Index.md)

---

# class DocProperty [#source](../../core/doc/DocProperty.js)


### class 

## constructor(name, content = null)



### example 
```js
const property = new DocProperty('description', 'hello world');
property.name; // string
property.content; // string
property.hasContent; // boolean
 ```


### param  name
> ```ts
> string
> ```




### param  content
> ```ts
> string|null
> ```



## get hasContent()



### return 
> ```ts
> boolean
> ```



## get content()



### return 
> ```ts
> string
> ```



## get name()



### return 
> ```ts
> string
> ```


