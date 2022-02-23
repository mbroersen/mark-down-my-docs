
# class DocDescription 


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
                <h1 v-if="!properties['deprecated']">DocDescription</h1>
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
</table>

<table>
    <tbody>
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
</table>

<table>
    <tbody>
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
            <td> public</td>
            <td>
                get
            </td>
        </tr>
        <tr>
            <th colSpan="2">
                <h1 v-if="!properties['deprecated']">ownerParts</h1>
            </th>
        </tr>
    </thead>
</table>

<table>
    <tbody>
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
            <td> public</td>
            <td>
                method
            </td>
        </tr>
        <tr>
            <th colSpan="2">
                <h1 v-if="!properties['deprecated']">describeFromProperties</h1>
            </th>
        </tr>
    </thead>
</table>

<table>
    <tbody>
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
            <td> public</td>
            <td>
                method
            </td>
        </tr>
        <tr>
            <th colSpan="2">
                <h1 v-if="!properties['deprecated']">describeParams</h1>
            </th>
        </tr>
    </thead>
</table>

<table>
    <tbody>
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
            <td> public</td>
            <td>
                method
            </td>
        </tr>
        <tr>
            <th colSpan="2">
                <h1 v-if="!properties['deprecated']">describe</h1>
            </th>
        </tr>
    </thead>
</table>

<table>
    <tbody>
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

