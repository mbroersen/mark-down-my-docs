
# class DocBlock 
[Go back to index](../Index.md)
---
<table>
    <thead>
        <tr>
            <th colSpan="4">
                <pre><code>DocBlock</code></pre>
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
            </tbody>
    <tfoot>
    </tfoot>
</table>

[source_code](../../core/doc/DocBlock.js)


## constructor(sourcePath, owner, content)

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
        <tr>            <td colspan="2"><b>sourcePath</b></td>
            <td colspan="2"><code></code></td>
</tr><tr>            <td colspan="2"><b> owner</b></td>
            <td colspan="2"><code></code></td>
</tr><tr>            <td colspan="2"><b> content</b></td>
            <td colspan="2"><code></code></td>
</tr>    </tbody>
    <tfoot>
    </tfoot>
</table>

[source_code](../../core/doc/DocBlock.js)


## get inDocsPath()

[Go back to index](../Index.md)
---
<table>
    <thead>
        <tr>
            <th colSpan="4">
                <pre><code>inDocsPath</code></pre>
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
                <h4><code>{string}</code></h4>
            </td>
        </tr>
    </tbody>
    <tfoot>
    </tfoot>
</table>

[source_code](../../core/doc/DocBlock.js)


## get owner()

[Go back to index](../Index.md)
---
<table>
    <thead>
        <tr>
            <th colSpan="4">
                <pre><code>owner</code></pre>
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
                <h4><code>{string}</code></h4>
            </td>
        </tr>
    </tbody>
    <tfoot>
    </tfoot>
</table>

[source_code](../../core/doc/DocBlock.js)


## get ownerName()

[Go back to index](../Index.md)
---
<table>
    <thead>
        <tr>
            <th colSpan="4">
                <pre><code>ownerName</code></pre>
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
                <h4><code>{string | undefined}</code></h4>
            </td>
        </tr>
    </tbody>
    <tfoot>
    </tfoot>
</table>

[source_code](../../core/doc/DocBlock.js)


## describe()

[Go back to index](../Index.md)
---
<table>
    <thead>
        <tr>
            <th colSpan="4">
                <pre><code>describe</code></pre>
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
                <h4><code>{|{access: string, is_static: boolean, kind: null, name: null, description: null, is_generator: boolean, returns: null, params: [], example: null}}</code></h4>
            </td>
        </tr>
    </tbody>
    <tfoot>
    </tfoot>
</table>

[source_code](../../core/doc/DocBlock.js)


## * properties()

[Go back to index](../Index.md)
---
<table>
    <thead>
        <tr>
            <th colSpan="4">
                <pre><code>properties</code></pre>
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
                <h4><code>{Generator&lt;DocProperty, void, any&gt;}</code></h4>
            </td>
        </tr>
    </tbody>
    <tfoot>
    </tfoot>
</table>

[source_code](../../core/doc/DocBlock.js)


## propertiesInContent()

[Go back to index](../Index.md)
---
<table>
    <thead>
        <tr>
            <th colSpan="4">
                <pre><code>propertiesInContent</code></pre>
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
                <h4><code>{IterableIterator&lt;RegExpMatchArray&gt;}</code></h4>
            </td>
        </tr>
    </tbody>
    <tfoot>
    </tfoot>
</table>

[source_code](../../core/doc/DocBlock.js)

