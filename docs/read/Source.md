
# class Source 
[Go back to index](../Index.md)
---
<table>
    <thead>
        <tr>
            <th colSpan="4">
                <pre><code>Source</code></pre>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>public</td>
            <td>class</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
                <tr v-if="description">
            <td>Description</td>
            <td colSpan="3">
                Reads contents of javascript or typescript file
            </td>
        </tr>
    </tbody>
    <tfoot>
    </tfoot>
</table>

[source_code](../../core/read/Source.js)

<h3 v-if="example">example</h3>
 ```js
  const source = new Source('./helloWorld.js');
 
  for (const docBlock of source.read()) {
  // docblocks
  }
 
  ```


## constructor(path)

[Go back to index](../Index.md)
---
<table>
    <thead>
        <tr>
            <th colSpan="4">
                <pre><code>constructor</code></pre>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>public</td>
            <td>method</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr v-if="params">
            <td colSpan="4">
                <h4>params</h4>
            </td>
        </tr>
        <tr>            <td colspan="2"><b>path</b></td>
            <td colspan="2"><code></code></td>
</tr>    </tbody>
    <tfoot>
    </tfoot>
</table>

[source_code](../../core/read/Source.js)


## get basename()

[Go back to index](../Index.md)
---
<table>
    <thead>
        <tr>
            <th colSpan="4">
                <pre><code>basename</code></pre>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>public</td>
            <td>method</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
                <tr v-if="return">
            <td colSpan="4">
                <h4>returns</h4>
            </td>
        </tr>
        <tr v-if="return">
            <td colSpan="4">
                <h4><pre>{string}</pre></h4>
            </td>
        </tr>
    </tbody>
    <tfoot>
    </tfoot>
</table>

[source_code](../../core/read/Source.js)


## get relativePath()

[Go back to index](../Index.md)
---
<table>
    <thead>
        <tr>
            <th colSpan="4">
                <pre><code>relativePath</code></pre>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>public</td>
            <td>method</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
                <tr v-if="return">
            <td colSpan="4">
                <h4>returns</h4>
            </td>
        </tr>
        <tr v-if="return">
            <td colSpan="4">
                <h4><pre>{string}</pre></h4>
            </td>
        </tr>
    </tbody>
    <tfoot>
    </tfoot>
</table>

[source_code](../../core/read/Source.js)


## dockBlocksInContent(content)

[Go back to index](../Index.md)
---
<table>
    <thead>
        <tr>
            <th colSpan="4">
                <pre><code>dockBlocksInContent</code></pre>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>public</td>
            <td>method</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr v-if="params">
            <td colSpan="4">
                <h4>params</h4>
            </td>
        </tr>
        <tr>            <td colspan="2"><b>content</b></td>
            <td colspan="2"><code></code></td>
</tr>        <tr v-if="return">
            <td colSpan="4">
                <h4>returns</h4>
            </td>
        </tr>
        <tr v-if="return">
            <td colSpan="4">
                <h4><pre>{IterableIterator&lt;RegExpMatchArray&gt;}</pre></h4>
            </td>
        </tr>
    </tbody>
    <tfoot>
    </tfoot>
</table>

[source_code](../../core/read/Source.js)


## hasDockBlocks()

[Go back to index](../Index.md)
---
<table>
    <thead>
        <tr>
            <th colSpan="4">
                <pre><code>hasDockBlocks</code></pre>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>public</td>
            <td>method</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
                <tr v-if="return">
            <td colSpan="4">
                <h4>returns</h4>
            </td>
        </tr>
        <tr v-if="return">
            <td colSpan="4">
                <h4><pre>{RegExpMatchArray|false}</pre></h4>
            </td>
        </tr>
    </tbody>
    <tfoot>
    </tfoot>
</table>

[source_code](../../core/read/Source.js)


## readFile()

[Go back to index](../Index.md)
---
<table>
    <thead>
        <tr>
            <th colSpan="4">
                <pre><code>readFile</code></pre>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>public</td>
            <td>method</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
                <tr v-if="return">
            <td colSpan="4">
                <h4>returns</h4>
            </td>
        </tr>
        <tr v-if="return">
            <td colSpan="4">
                <h4><pre>{string}</pre></h4>
            </td>
        </tr>
    </tbody>
    <tfoot>
    </tfoot>
</table>

[source_code](../../core/read/Source.js)


## * read()

[Go back to index](../Index.md)
---
<table>
    <thead>
        <tr>
            <th colSpan="4">
                <pre><code>read</code></pre>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>public</td>
            <td>method</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td><span v-if="is_generator">Generator</span></td>
            <td></td>
        </tr>
                <tr v-if="return">
            <td colSpan="4">
                <h4>returns</h4>
            </td>
        </tr>
        <tr v-if="return">
            <td colSpan="4">
                <h4><pre>{Generator&lt;DocBlock, void, any&gt;}</pre></h4>
            </td>
        </tr>
        <tr v-if="description">
            <td>Description</td>
            <td colSpan="3">
                All parsable DocBlocks in source
            </td>
        </tr>
    </tbody>
    <tfoot>
    </tfoot>
</table>

[source_code](../../core/read/Source.js)

