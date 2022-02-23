
# class Source 


<table>
    <thead>
        <tr>
            <th colSpan="4">
                <pre><code>Source</code></pre>
            </th>
        </tr>
        <tr v-if="properties['kind'] === 'class'">
            <th>
                <a href="../Index.md">Go to index</a>
            </th>
        </tr>
        <tr v-if="properties['kind'] === 'class'">
            <th>
                <a href="">Go to source</a>
            </th>
        </tr>
    </thead>
</table>

<table>
    <tbody>
        <tr>
            <td> public</td>
            <td>
                class
            </td>
        </tr>
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
            <th colSpan="4">
                <pre><code>constructor</code></pre>
            </th>
        </tr>
    </thead>
</table>

<table>
    <tbody>
        <tr>
            <td> public</td>
            <td>
                method
            </td>
        </tr>
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
            <th colSpan="4">
                <pre><code>basename</code></pre>
            </th>
        </tr>
    </thead>
</table>

<table>
    <tbody>
        <tr>
            <td> public</td>
            <td>
                method
            </td>
        </tr>
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
            <th colSpan="4">
                <pre><code>relativePath</code></pre>
            </th>
        </tr>
    </thead>
</table>

<table>
    <tbody>
        <tr>
            <td> public</td>
            <td>
                method
            </td>
        </tr>
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
            <th colSpan="4">
                <pre><code>dockBlocksInContent</code></pre>
            </th>
        </tr>
    </thead>
</table>

<table>
    <tbody>
        <tr>
            <td> public</td>
            <td>
                method
            </td>
        </tr>
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
            <th colSpan="4">
                <pre><code>hasDockBlocks</code></pre>
            </th>
        </tr>
    </thead>
</table>

<table>
    <tbody>
        <tr>
            <td> public</td>
            <td>
                method
            </td>
        </tr>
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
            <th colSpan="4">
                <pre><code>readFile</code></pre>
            </th>
        </tr>
    </thead>
</table>

<table>
    <tbody>
        <tr>
            <td> public</td>
            <td>
                method
            </td>
        </tr>
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
            <th colSpan="4">
                <pre><code>read</code></pre>
            </th>
        </tr>
    </thead>
</table>

<table>
    <tbody>
        <tr>
            <td> public</td>
            <td>
                <span v-if="!!properties['is_generator']">Generator</span>
                method
            </td>
        </tr>
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

