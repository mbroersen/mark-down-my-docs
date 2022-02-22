
# class DocProperty 
[Go back to index](../Index.md)
---
<table>
    <thead>
        <tr>
            <th colSpan="4">
                <pre><code>DocProperty</code></pre>
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

[source_code](../../core/doc/DocProperty.js)


## constructor(name, content = null)

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
        <tr>            <td colspan="2"><b>name</b></td>
            <td colspan="2"><code></code></td>
</tr><tr>            <td colspan="2"><b> content = null</b></td>
            <td colspan="2"><code></code></td>
</tr>    </tbody>
    <tfoot>
    </tfoot>
</table>

[source_code](../../core/doc/DocProperty.js)

<h3 v-if="example">example</h3>

```js
  const property = new DocProperty('description', 'hello world');
  property.name; // string
  property.content; // string
  property.hasContent; // boolean
  ```


## get hasContent()

[Go back to index](../Index.md)
---
<table>
    <thead>
        <tr>
            <th colSpan="4">
                <pre><code>hasContent</code></pre>
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
                <h4><code>{boolean}</code></h4>
            </td>
        </tr>
    </tbody>
    <tfoot>
    </tfoot>
</table>

[source_code](../../core/doc/DocProperty.js)


## get content()

[Go back to index](../Index.md)
---
<table>
    <thead>
        <tr>
            <th colSpan="4">
                <pre><code>content</code></pre>
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

[source_code](../../core/doc/DocProperty.js)


## get name()

[Go back to index](../Index.md)
---
<table>
    <thead>
        <tr>
            <th colSpan="4">
                <pre><code>name</code></pre>
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

[source_code](../../core/doc/DocProperty.js)

