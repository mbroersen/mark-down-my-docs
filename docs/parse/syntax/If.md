
# class If 


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
                <h1 v-if="!properties['deprecated']">If</h1>
            </th>
        </tr>
        <tr v-if="properties['kind'] === 'class'">
            <th colSpan="2">
                <a href="../../Index.md">Go to index</a>
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


## constructor(contentBlock, statement)



<table>
    <thead>
        <tr>
            <td> public</td>
            <td>
            </td>
        </tr>
        <tr>
            <th colSpan="2">
                <h1 v-if="!properties['deprecated']">constructor</h1>
            </th>
        </tr>
    </thead>
    <tbody>
    </tbody>
    <tfoot>
    </tfoot>
</table>


## static get matcher()



<table>
    <thead>
        <tr>
            <td><span v-if="!!properties['is_static']">Static</span> public</td>
            <td>
                get
            </td>
        </tr>
        <tr>
            <th colSpan="2">
                <h1 v-if="!properties['deprecated']">matcher</h1>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr v-if="!!properties['return']">
            <td>
                <h4>returns</h4>
            </td>
            <td>
                <pre><code>{RegExp}</code></pre>
            </td>
        </tr>
    </tbody>
    <tfoot>
    </tfoot>
</table>


## parse(content, properties)



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
                <h1 v-if="!properties['deprecated']">parse</h1>
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
                    <tr>                        <td><b>content</b></td>
                        <td><code></code></td>
</tr><tr>                        <td><b> properties</b></td>
                        <td><code></code></td>
</tr>                </table>
            </td>
        </trs>
        <tr v-if="!!properties['return']">
            <td>
                <h4>returns</h4>
            </td>
            <td>
                <pre><code>{string}</code></pre>
            </td>
        </tr>
        <tr v-if="!!properties['todo']">
            <td>Todo</td>
            <td colSpan="3">use eval to check the real statement</td>
        </tr>
    </tbody>
    <tfoot>
    </tfoot>
</table>


## removeBlockFromContent(content)



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
                <h1 v-if="!properties['deprecated']">removeBlockFromContent</h1>
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
                    <tr>                        <td><b>content</b></td>
                        <td><code></code></td>
</tr>                </table>
            </td>
        </trs>
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

