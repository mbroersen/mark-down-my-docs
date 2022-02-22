
# class MarkDown 
[Go back to index](../Index.md)
---
<table>
    <thead>
        <tr>
            <th colSpan="4">
                <pre><code>MarkDown</code></pre>
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
                Create MarkDown files from `js-doc` blocks
            </td>
        </tr>
    </tbody>
    <tfoot>
    </tfoot>
</table>

[source_code](../../core/write/MarkDown.js)

<h3 v-if="example">example</h3>

 ```markdown
  # MarkDown
 
  ## description Create MarkDown files from `js-doc` blocks
 
  ```


## constructor(docsPath)

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
        <tr>            <td colspan="2"><b>docsPath</b></td>
            <td colspan="2"><code></code></td>
</tr>    </tbody>
    <tfoot>
    </tfoot>
</table>

[source_code](../../core/write/MarkDown.js)


## sourcePathFromDocs(name, source)

[Go back to index](../Index.md)
---
<table>
    <thead>
        <tr>
            <th colSpan="4">
                <pre><code>sourcePathFromDocs</code></pre>
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
        <tr>            <td colspan="2"><b>name</b></td>
            <td colspan="2"><code></code></td>
</tr><tr>            <td colspan="2"><b> source</b></td>
            <td colspan="2"><code></code></td>
</tr>        <tr v-if="return">
            <td colSpan="4">
                <h4>returns</h4>
            </td>
        </tr>
        <tr v-if="return">
            <td colSpan="4">
                <h4><code>{string}</code></h4>
            </td>
        </tr>
    </tbody>
    <tfoot>
    </tfoot>
</table>

[source_code](../../core/write/MarkDown.js)


## indexPathFromDocs(name)

[Go back to index](../Index.md)
---
<table>
    <thead>
        <tr>
            <th colSpan="4">
                <pre><code>indexPathFromDocs</code></pre>
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
        <tr>            <td colspan="2"><b>name</b></td>
            <td colspan="2"><code></code></td>
</tr>        <tr v-if="return">
            <td colSpan="4">
                <h4>returns</h4>
            </td>
        </tr>
        <tr v-if="return">
            <td colSpan="4">
                <h4><code>{string}</code></h4>
            </td>
        </tr>
    </tbody>
    <tfoot>
    </tfoot>
</table>

[source_code](../../core/write/MarkDown.js)


## clean(name)

[Go back to index](../Index.md)
---
<table>
    <thead>
        <tr>
            <th colSpan="4">
                <pre><code>clean</code></pre>
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
        <tr>            <td colspan="2"><b>name</b></td>
            <td colspan="2"><code></code></td>
</tr>        <tr v-if="description">
            <td>Description</td>
            <td colSpan="3">
                Removes documentation file
            </td>
        </tr>
    </tbody>
    <tfoot>
    </tfoot>
</table>

[source_code](../../core/write/MarkDown.js)


## createDirectory(fileSource)

[Go back to index](../Index.md)
---
<table>
    <thead>
        <tr>
            <th colSpan="4">
                <pre><code>createDirectory</code></pre>
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
        <tr>            <td colspan="2"><b>fileSource</b></td>
            <td colspan="2"><code></code></td>
</tr>        <tr v-if="description">
            <td>Description</td>
            <td colSpan="3">
                Creates all directories in documentation path based on source path
            </td>
        </tr>
    </tbody>
    <tfoot>
    </tfoot>
</table>

[source_code](../../core/write/MarkDown.js)


## parseOwner(owner, name, source)

[Go back to index](../Index.md)
---
<table>
    <thead>
        <tr>
            <th colSpan="4">
                <pre><code>parseOwner</code></pre>
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
        <tr>            <td colspan="2"><b>owner</b></td>
            <td colspan="2"><code></code></td>
</tr><tr>            <td colspan="2"><b> name</b></td>
            <td colspan="2"><code></code></td>
</tr><tr>            <td colspan="2"><b> source</b></td>
            <td colspan="2"><code></code></td>
</tr>        <tr v-if="description">
            <td>Description</td>
            <td colSpan="3">
                write header for docblock
            </td>
        </tr>
    </tbody>
    <tfoot>
    </tfoot>
</table>

[source_code](../../core/write/MarkDown.js)


## write(fileSource)

[Go back to index](../Index.md)
---
<table>
    <thead>
        <tr>
            <th colSpan="4">
                <pre><code>write</code></pre>
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
        <tr>            <td colspan="2"><b>fileSource</b></td>
            <td colspan="2"><code></code></td>
</tr>        <tr v-if="description">
            <td>Description</td>
            <td colSpan="3">
                start writing markdown
            </td>
        </tr>
    </tbody>
    <tfoot>
    </tfoot>
</table>

[source_code](../../core/write/MarkDown.js)


## nameByFileSource(fileSource)

[Go back to index](../Index.md)
---
<table>
    <thead>
        <tr>
            <th colSpan="4">
                <pre><code>nameByFileSource</code></pre>
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
        <tr>            <td colspan="2"><b>fileSource</b></td>
            <td colspan="2"><code></code></td>
</tr>        <tr v-if="return">
            <td colSpan="4">
                <h4>returns</h4>
            </td>
        </tr>
        <tr v-if="return">
            <td colSpan="4">
                <h4><code>{string}</code></h4>
            </td>
        </tr>
        <tr v-if="description">
            <td>Description</td>
            <td colSpan="3">
                Set right output name and path
            </td>
        </tr>
    </tbody>
    <tfoot>
    </tfoot>
</table>

[source_code](../../core/write/MarkDown.js)


## writePart(content)

[Go back to index](../Index.md)
---
<table>
    <thead>
        <tr>
            <th colSpan="4">
                <pre><code>writePart</code></pre>
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
</tr>        <tr v-if="description">
            <td>Description</td>
            <td colSpan="3">
                write part if content is present.
            </td>
        </tr>
    </tbody>
    <tfoot>
    </tfoot>
</table>

[source_code](../../core/write/MarkDown.js)


## writeFile(name)

[Go back to index](../Index.md)
---
<table>
    <thead>
        <tr>
            <th colSpan="4">
                <pre><code>writeFile</code></pre>
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
        <tr>            <td colspan="2"><b>name</b></td>
            <td colspan="2"><code></code></td>
</tr>        <tr v-if="description">
            <td>Description</td>
            <td colSpan="3">
                write content to markdown file.
            </td>
        </tr>
    </tbody>
    <tfoot>
    </tfoot>
</table>

[source_code](../../core/write/MarkDown.js)


## writeIndexPart(fileSource, name)

[Go back to index](../Index.md)
---
<table>
    <thead>
        <tr>
            <th colSpan="4">
                <pre><code>writeIndexPart</code></pre>
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
        <tr>            <td colspan="2"><b>fileSource</b></td>
            <td colspan="2"><code></code></td>
</tr><tr>            <td colspan="2"><b> name</b></td>
            <td colspan="2"><code></code></td>
</tr>        <tr v-if="description">
            <td>Description</td>
            <td colSpan="3">
                write `Index.md`
            </td>
        </tr>
    </tbody>
    <tfoot>
    </tfoot>
</table>

[source_code](../../core/write/MarkDown.js)

