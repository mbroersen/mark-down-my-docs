
# class DocProperty 


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
                <h1 v-if="!properties['deprecated']">DocProperty</h1>
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
    <tbody>
    </tbody>
    <tfoot>
    </tfoot>
</table>


## constructor(name, content = null)



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
    <tbody>
        <trs v-if="properties['params'].length > 0">
            <td>
                <h4>params</h4>
            </td>
            <td>
                <table>
                    <tr>                        <td><b>name</b></td>
                        <td><code></code></td>
</tr><tr>                        <td><b> content = null</b></td>
                        <td><code></code></td>
</tr>                </table>
            </td>
        </trs>
    </tbody>
    <tfoot>
    </tfoot>
</table>

<h3 v-if="!!properties['example']">example</h3>

```js
  const property = new DocProperty('description', 'hello world');
  property.name; // string
  property.content; // string
  property.hasContent; // boolean
  ```


## get hasContent()



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
                <h1 v-if="!properties['deprecated']">hasContent</h1>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr v-if="!!properties['return']">
            <td>
                <h4>returns</h4>
            </td>
            <td>
                <pre><code>{boolean}</code></pre>
            </td>
        </tr>
    </tbody>
    <tfoot>
    </tfoot>
</table>


## get content()



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
                <h1 v-if="!properties['deprecated']">content</h1>
            </th>
        </tr>
    </thead>
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
    <tfoot>
    </tfoot>
</table>


## get name()



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
                <h1 v-if="!properties['deprecated']">name</h1>
            </th>
        </tr>
    </thead>
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
    <tfoot>
    </tfoot>
</table>

