
# class DocDescription 
[Go back to index](../Index.md)
---
<table>
    <thead>
        <tr>
            <th colSpan="4">
                <pre><code>DocDescription</code></pre>
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
    <tr v-if="author">
        <td>MIT</td>
        <td></td>
        <td>Mark Broersen</td>
        <td></td>
    </tr>
    </tfoot>
</table>

[source_code](../../core/doc/DocDescription.js)


## constructor(docBlock)

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
        <tr>            <td colspan="2"><b>docBlock</b></td>
            <td colspan="2"><code></code></td>
</tr>    </tbody>
    <tfoot>
    </tfoot>
</table>

[source_code](../../core/doc/DocDescription.js)


## get ownerParts()

[Go back to index](../Index.md)
---
<table>
    <thead>
        <tr>
            <th colSpan="4">
                <pre><code>ownerParts</code></pre>
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
                <h4><code>{RegExpMatchArray}</code></h4>
            </td>
        </tr>
    </tbody>
    <tfoot>
    </tfoot>
</table>

[source_code](../../core/doc/DocDescription.js)


## describeFromProperties()

[Go back to index](../Index.md)
---
<table>
    <thead>
        <tr>
            <th colSpan="4">
                <pre><code>describeFromProperties</code></pre>
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
            </tbody>
    <tfoot>
    </tfoot>
</table>

[source_code](../../core/doc/DocDescription.js)


## describeParams(paramsMatch)

[Go back to index](../Index.md)
---
<table>
    <thead>
        <tr>
            <th colSpan="4">
                <pre><code>describeParams</code></pre>
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
        <tr>            <td colspan="2"><b>paramsMatch</b></td>
            <td colspan="2"><code></code></td>
</tr>    </tbody>
    <tfoot>
    </tfoot>
</table>

[source_code](../../core/doc/DocDescription.js)


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
        <tr v-if="todo">
            <td>Todo</td>
            <td colSpan="3">clean up code for creating</td>
        </tr>
    </tbody>
    <tfoot>
    </tfoot>
</table>

[source_code](../../core/doc/DocDescription.js)

