
## constructor(templateReader)



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
                <h4 v-if="!properties['deprecated']">constructor</h4>
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
                    <tr>                        <td><b>templateReader</b></td>
                        <td><code></code></td>
</tr>                </table>
            </td>
        </trs>
    </tbody>
    <tfoot>
    </tfoot>
</table>


## parse(docBlock, paths)



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
                <h4 v-if="!properties['deprecated']">parse</h4>
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
                    <tr>                        <td><b>docBlock</b></td>
                        <td><code></code></td>
</tr><tr>                        <td><b> paths</b></td>
                        <td><code></code></td>
</tr>                </table>
            </td>
        </trs>
    </tbody>
    <tfoot>
    </tfoot>
</table>


## cleanUnusedProperties(content)



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
                <h4 v-if="!properties['deprecated']">cleanUnusedProperties</h4>
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
                <pre><code>string</code></pre>
            </td>
        </tr>
    </tbody>
    <tfoot>
    </tfoot>
</table>


## parseContentProperty(content, name, value)



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
                <h4 v-if="!properties['deprecated']">parseContentProperty</h4>
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
</tr><tr>                        <td><b> name</b></td>
                        <td><code></code></td>
</tr><tr>                        <td><b> value</b></td>
                        <td><code></code></td>
</tr>                </table>
            </td>
        </trs>
        <tr v-if="!!properties['return']">
            <td>
                <h4>returns</h4>
            </td>
            <td>
                <pre><code>string</code></pre>
            </td>
        </tr>
    </tbody>
    <tfoot>
    </tfoot>
</table>


## parseVFor(content, name, values)



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
                <h4 v-if="!properties['deprecated']">parseVFor</h4>
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
</tr><tr>                        <td><b> name</b></td>
                        <td><code></code></td>
</tr><tr>                        <td><b> values</b></td>
                        <td><code></code></td>
</tr>                </table>
            </td>
        </trs>
        <tr v-if="!!properties['return']">
            <td>
                <h4>returns</h4>
            </td>
            <td>
                <pre><code>string</code></pre>
            </td>
        </tr>
    </tbody>
    <tfoot>
    </tfoot>
</table>


## parseBindingProperty(content, bindingName, bindingValue)



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
                <h4 v-if="!properties['deprecated']">parseBindingProperty</h4>
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
</tr><tr>                        <td><b> bindingName</b></td>
                        <td><code></code></td>
</tr><tr>                        <td><b> bindingValue</b></td>
                        <td><code></code></td>
</tr>                </table>
            </td>
        </trs>
        <tr v-if="!!properties['todo']">
            <td>Todo</td>
            <td colSpan="3">create regex</td>
        </tr>
    </tbody>
    <tfoot>
    </tfoot>
</table>


## parseVIf(content, properties)



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
                <h4 v-if="!properties['deprecated']">parseVIf</h4>
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
    </tbody>
    <tfoot>
    </tfoot>
</table>

