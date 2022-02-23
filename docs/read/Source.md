
# class Source 


<table>
    <thead>
        <tr>
            <td> public</td>
            <td>
                class
            </td>
        </tr>
        <tr>
            <th colSpan="2">
                <h1 v-if="!properties['deprecated']">Source</h1>
            </th>
        </tr>
        <tr v-if="properties['kind'] === 'class'">
            <th colSpan="2">
                <a href="../Index.md">Go to index</a>
            </th>
        </tr>
        <tr v-if="properties['kind'] === 'class'">
            <th colSpan="2">
                <a href="">Go to source</a>
            </th>
        </tr>
    </thead>
</table>

<table>
    <tbody>
    </tbody>
</table>

<table>
    <tbody>
        <tr v-if="!!properties['description']">
            <td>Description</td>
            <td colSpan="3">
                Reads contents of javascript or typescript file
            </td>
        </tr>
    </tbody>
    <tfoot>
    </tfoot>
</table>

<h3 v-if="!!properties['example']">example</h3>

 ```js
  const source = new Source('./helloWorld.js');
 
  for (const docBlock of source.read()) {
  // docblocks
  }
 
  ```


## constructor(path)



<table>
    <thead>
        <tr>
            <td> public</td>
            <td>
                method
            </td>
        </tr>
        <tr>
            <th colSpan="2">
                <h1 v-if="!properties['deprecated']">constructor</h1>
            </th>
        </tr>
    </thead>
</table>

<table>
    <tbody>
        <trs v-if="properties['params'].length > 0">
            <td>
                <h4>params</h4>
            </td>
            <td>
                <table>
                    <tr>                        <td><b>path</b></td>
                        <td><code></code></td>
</tr>                </table>
            </td>
        </trs>
    </tbody>
</table>

<table>
    <tbody>
    </tbody>
    <tfoot>
    </tfoot>
</table>


## get basename()



<table>
    <thead>
        <tr>
            <td> public</td>
            <td>
                get
            </td>
        </tr>
        <tr>
            <th colSpan="2">
                <h1 v-if="!properties['deprecated']">basename</h1>
            </th>
        </tr>
    </thead>
</table>

<table>
    <tbody>
        <tr v-if="!!properties['return']">
            <td>
                <h4>returns</h4>
            </td>
            <td>
                <pre><code>{string}</code></pre>
            </td>
        </tr>
    </tbody>
</table>

<table>
    <tbody>
    </tbody>
    <tfoot>
    </tfoot>
</table>


## get relativePath()



<table>
    <thead>
        <tr>
            <td> public</td>
            <td>
                get
            </td>
        </tr>
        <tr>
            <th colSpan="2">
                <h1 v-if="!properties['deprecated']">relativePath</h1>
            </th>
        </tr>
    </thead>
</table>

<table>
    <tbody>
        <tr v-if="!!properties['return']">
            <td>
                <h4>returns</h4>
            </td>
            <td>
                <pre><code>{string}</code></pre>
            </td>
        </tr>
    </tbody>
</table>

<table>
    <tbody>
    </tbody>
    <tfoot>
    </tfoot>
</table>


## dockBlocksInContent(content)



<table>
    <thead>
        <tr>
            <td> public</td>
            <td>
                method
            </td>
        </tr>
        <tr>
            <th colSpan="2">
                <h1 v-if="!properties['deprecated']">dockBlocksInContent</h1>
            </th>
        </tr>
    </thead>
</table>

<table>
    <tbody>
        <trs v-if="properties['params'].length > 0">
            <td>
                <h4>params</h4>
            </td>
            <td>
                <table>
                    <tr>                        <td><b>content</b></td>
                        <td><code></code></td>
</tr>                </table>
            </td>
        </trs>
        <tr v-if="!!properties['return']">
            <td>
                <h4>returns</h4>
            </td>
            <td>
                <pre><code>{IterableIterator&lt;RegExpMatchArray&gt;}</code></pre>
            </td>
        </tr>
    </tbody>
</table>

<table>
    <tbody>
    </tbody>
    <tfoot>
    </tfoot>
</table>


## hasDockBlocks()



<table>
    <thead>
        <tr>
            <td> public</td>
            <td>
                method
            </td>
        </tr>
        <tr>
            <th colSpan="2">
                <h1 v-if="!properties['deprecated']">hasDockBlocks</h1>
            </th>
        </tr>
    </thead>
</table>

<table>
    <tbody>
        <tr v-if="!!properties['return']">
            <td>
                <h4>returns</h4>
            </td>
            <td>
                <pre><code>{RegExpMatchArray|false}</code></pre>
            </td>
        </tr>
    </tbody>
</table>

<table>
    <tbody>
    </tbody>
    <tfoot>
    </tfoot>
</table>


## readFile()



<table>
    <thead>
        <tr>
            <td> public</td>
            <td>
                method
            </td>
        </tr>
        <tr>
            <th colSpan="2">
                <h1 v-if="!properties['deprecated']">readFile</h1>
            </th>
        </tr>
    </thead>
</table>

<table>
    <tbody>
        <tr v-if="!!properties['return']">
            <td>
                <h4>returns</h4>
            </td>
            <td>
                <pre><code>{string}</code></pre>
            </td>
        </tr>
    </tbody>
</table>

<table>
    <tbody>
    </tbody>
    <tfoot>
    </tfoot>
</table>


## * read()



<table>
    <thead>
        <tr>
            <td> public</td>
            <td>
                <span v-if="!!properties['is_generator']">Generator</span>
                method
            </td>
        </tr>
        <tr>
            <th colSpan="2">
                <h1 v-if="!properties['deprecated']">read</h1>
            </th>
        </tr>
    </thead>
</table>

<table>
    <tbody>
        <tr v-if="!!properties['return']">
            <td>
                <h4>returns</h4>
            </td>
            <td>
                <pre><code>{Generator&lt;DocBlock, void, any&gt;}</code></pre>
            </td>
        </tr>
    </tbody>
</table>

<table>
    <tbody>
        <tr v-if="!!properties['description']">
            <td>Description</td>
            <td colSpan="3">
                All parsable DocBlocks in source
            </td>
        </tr>
    </tbody>
    <tfoot>
    </tfoot>
</table>

