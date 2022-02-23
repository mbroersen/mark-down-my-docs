
# class DocDescription 


<table>
    <thead>
        <tr>
            <th colSpan="4">
                <pre><code>DocDescription</code></pre>
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
    <tr v-if="!!properties['author']">
        <td>MIT</td>
        <td></td>
        <td>Mark Broersen</td>
        <td></td>
    </tr>
    </tfoot>
</table>


## constructor(docBlock)



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
                    <tr>                        <td><b>docBlock</b></td>
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


## get ownerParts()



<table>
    <thead>
        <tr>
            <th colSpan="4">
                <pre><code>ownerParts</code></pre>
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
                <pre><code>{RegExpMatchArray}</code></pre>
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


## describeFromProperties()



<table>
    <thead>
        <tr>
            <th colSpan="4">
                <pre><code>describeFromProperties</code></pre>
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
    </tbody>
</table>

<table>
    <tbody>
    </tbody>
    <tfoot>
    </tfoot>
</table>


## describeParams(paramsMatch)



<table>
    <thead>
        <tr>
            <th colSpan="4">
                <pre><code>describeParams</code></pre>
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
                    <tr>                        <td><b>paramsMatch</b></td>
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
        <tr v-if="!!properties['todo']">
            <td>Todo</td>
            <td colSpan="3">clean up code for creating</td>
        </tr>
    </tbody>
    <tfoot>
    </tfoot>
</table>

