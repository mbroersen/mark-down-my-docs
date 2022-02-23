
# class DocBlock 


<table>
    <thead>
        <tr>
            <th colSpan="4">
                <pre><code>DocBlock</code></pre>
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
    </tbody>
    <tfoot>
    </tfoot>
</table>


## constructor(sourcePath, owner, content)



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
                    <tr>                        <td><b>sourcePath</b></td>
                        <td><code></code></td>
</tr><tr>                        <td><b> owner</b></td>
                        <td><code></code></td>
</tr><tr>                        <td><b> content</b></td>
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


## get inDocsPath()



<table>
    <thead>
        <tr>
            <th colSpan="4">
                <pre><code>inDocsPath</code></pre>
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


## get owner()



<table>
    <thead>
        <tr>
            <th colSpan="4">
                <pre><code>owner</code></pre>
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


## get ownerName()



<table>
    <thead>
        <tr>
            <th colSpan="4">
                <pre><code>ownerName</code></pre>
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
                <pre><code>{string | undefined}</code></pre>
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


## describe()



<table>
    <thead>
        <tr>
            <th colSpan="4">
                <pre><code>describe</code></pre>
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
                <pre><code>{|{access: string, is_static: boolean, kind: null, name: null, description: null, is_generator: boolean, returns: null, params: [], example: null}}</code></pre>
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


## * properties()



<table>
    <thead>
        <tr>
            <th colSpan="4">
                <pre><code>properties</code></pre>
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
                <pre><code>{Generator&lt;DocProperty, void, any&gt;}</code></pre>
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


## propertiesInContent()



<table>
    <thead>
        <tr>
            <th colSpan="4">
                <pre><code>propertiesInContent</code></pre>
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

