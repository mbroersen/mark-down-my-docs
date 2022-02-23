
# class MarkDown 


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
                <h4 v-if="!properties['deprecated']">MarkDown</h4>
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
        <tr v-if="!!properties['description']">
            <td>Description</td>
            <td colSpan="3">
                Create MarkDown files from `js-doc` blocks
            </td>
        </tr>
    </tbody>
    <tfoot>
    </tfoot>
</table>

<h3 v-if="!!properties['example']">example</h3>

 ```markdown
  # MarkDown
 
  ## description Create MarkDown files from `js-doc` blocks
 
  ```


## constructor(docsPath)



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
                    <tr>                        <td><b>docsPath</b></td>
                        <td><code></code></td>
</tr>                </table>
            </td>
        </trs>
    </tbody>
    <tfoot>
    </tfoot>
</table>


## sourcePathFromDocs(name, source)



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
                <h4 v-if="!properties['deprecated']">sourcePathFromDocs</h4>
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
</tr><tr>                        <td><b> source</b></td>
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


## indexPathFromDocs(name)



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
                <h4 v-if="!properties['deprecated']">indexPathFromDocs</h4>
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


## clean(name)



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
                <h4 v-if="!properties['deprecated']">clean</h4>
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
</tr>                </table>
            </td>
        </trs>
        <tr v-if="!!properties['description']">
            <td>Description</td>
            <td colSpan="3">
                Removes documentation file
            </td>
        </tr>
    </tbody>
    <tfoot>
    </tfoot>
</table>


## createDirectory(fileSource)



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
                <h4 v-if="!properties['deprecated']">createDirectory</h4>
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
                    <tr>                        <td><b>fileSource</b></td>
                        <td><code></code></td>
</tr>                </table>
            </td>
        </trs>
        <tr v-if="!!properties['description']">
            <td>Description</td>
            <td colSpan="3">
                Creates all directories in documentation path based on source path
            </td>
        </tr>
    </tbody>
    <tfoot>
    </tfoot>
</table>


## parseOwner(owner, name, source)



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
                <h4 v-if="!properties['deprecated']">parseOwner</h4>
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
                    <tr>                        <td><b>owner</b></td>
                        <td><code></code></td>
</tr><tr>                        <td><b> name</b></td>
                        <td><code></code></td>
</tr><tr>                        <td><b> source</b></td>
                        <td><code></code></td>
</tr>                </table>
            </td>
        </trs>
        <tr v-if="!!properties['description']">
            <td>Description</td>
            <td colSpan="3">
                write header for docblock
            </td>
        </tr>
    </tbody>
    <tfoot>
    </tfoot>
</table>


## write(fileSource)



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
                <h4 v-if="!properties['deprecated']">write</h4>
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
                    <tr>                        <td><b>fileSource</b></td>
                        <td><code></code></td>
</tr>                </table>
            </td>
        </trs>
        <tr v-if="!!properties['description']">
            <td>Description</td>
            <td colSpan="3">
                start writing markdown
            </td>
        </tr>
    </tbody>
    <tfoot>
    </tfoot>
</table>


## nameByFileSource(fileSource)



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
                <h4 v-if="!properties['deprecated']">nameByFileSource</h4>
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
                    <tr>                        <td><b>fileSource</b></td>
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
        <tr v-if="!!properties['description']">
            <td>Description</td>
            <td colSpan="3">
                Set right output name and path
            </td>
        </tr>
    </tbody>
    <tfoot>
    </tfoot>
</table>


## writePart(content)



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
                <h4 v-if="!properties['deprecated']">writePart</h4>
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
        <tr v-if="!!properties['description']">
            <td>Description</td>
            <td colSpan="3">
                write part if content is present.
            </td>
        </tr>
    </tbody>
    <tfoot>
    </tfoot>
</table>


## writeFile(name)



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
                <h4 v-if="!properties['deprecated']">writeFile</h4>
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
</tr>                </table>
            </td>
        </trs>
        <tr v-if="!!properties['description']">
            <td>Description</td>
            <td colSpan="3">
                write content to markdown file.
            </td>
        </tr>
    </tbody>
    <tfoot>
    </tfoot>
</table>


## writeIndexPart(fileSource, name)



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
                <h4 v-if="!properties['deprecated']">writeIndexPart</h4>
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
                    <tr>                        <td><b>fileSource</b></td>
                        <td><code></code></td>
</tr><tr>                        <td><b> name</b></td>
                        <td><code></code></td>
</tr>                </table>
            </td>
        </trs>
        <tr v-if="!!properties['description']">
            <td>Description</td>
            <td colSpan="3">
                write `Index.md`
            </td>
        </tr>
    </tbody>
    <tfoot>
    </tfoot>
</table>

