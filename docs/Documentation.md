
# class Documentation 
[Go back to index](Index.md)
---
<table>
    <thead>
        <tr>
            <th colSpan="4">
                <pre><code>Documentation</code></pre>
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
                Bridge for reader and writer
            </td>
        </tr>
    </tbody>
    <tfoot>
    </tfoot>
</table>

[source_code](../core/Documentation.js)

<h3 v-if="example">example</h3>

 ```js
  const docs = new Documentation(reader, writer);
  docs.write();
  ```


## constructor(source, writer)

[Go back to index](Index.md)
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
        <tr>            <td colspan="2"><b>source</b></td>
            <td colspan="2"><code></code></td>
</tr><tr>            <td colspan="2"><b> writer</b></td>
            <td colspan="2"><code></code></td>
</tr>    </tbody>
    <tfoot>
    </tfoot>
</table>

[source_code](../core/Documentation.js)


## write()

[Go back to index](Index.md)
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
                <tr v-if="description">
            <td>Description</td>
            <td colSpan="3">
                start writing the documentation
            </td>
        </tr>
    </tbody>
    <tfoot>
    </tfoot>
</table>

[source_code](../core/Documentation.js)

