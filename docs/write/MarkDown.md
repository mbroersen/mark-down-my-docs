
# class MarkDown 


<table>
    <thead>
        <tr>
            <th colSpan="4">
                <pre><code>MarkDown</code></pre>
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
                    <tr>                        <td><b>docsPath</b></td>
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


## sourcePathFromDocs(name, source)



<table>
    <thead>
        <tr>
            <th colSpan="4">
                <pre><code>sourcePathFromDocs</code></pre>
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
</table>

<table>
    <tbody>
    </tbody>
    <tfoot>
    </tfoot>
</table>


## indexPathFromDocs(name)



<table>
    <thead>
        <tr>
            <th colSpan="4">
                <pre><code>indexPathFromDocs</code></pre>
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
</table>

<table>
    <tbody>
    </tbody>
    <tfoot>
    </tfoot>
</table>


## clean(name)



<table>
    <thead>
        <tr>
            <th colSpan="4">
                <pre><code>clean</code></pre>
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
                    <tr>                        <td><b>name</b></td>
                        <td><code></code></td>
</tr>                </table>
            </td>
        </trs>
    </tbody>
</table>

<table>
    <tbody>
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
            <th colSpan="4">
                <pre><code>createDirectory</code></pre>
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
                    <tr>                        <td><b>fileSource</b></td>
                        <td><code></code></td>
</tr>                </table>
            </td>
        </trs>
    </tbody>
</table>

<table>
    <tbody>
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
            <th colSpan="4">
                <pre><code>parseOwner</code></pre>
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
                    <tr>                        <td><b>owner</b></td>
                        <td><code></code></td>
</tr><tr>                        <td><b> name</b></td>
                        <td><code></code></td>
</tr><tr>                        <td><b> source</b></td>
                        <td><code></code></td>
</tr>                </table>
            </td>
        </trs>
    </tbody>
</table>

<table>
    <tbody>
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
            <th colSpan="4">
                <pre><code>write</code></pre>
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
                    <tr>                        <td><b>fileSource</b></td>
                        <td><code></code></td>
</tr>                </table>
            </td>
        </trs>
    </tbody>
</table>

<table>
    <tbody>
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
            <th colSpan="4">
                <pre><code>nameByFileSource</code></pre>
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
    </tbody>
</table>

<table>
    <tbody>
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
            <th colSpan="4">
                <pre><code>writePart</code></pre>
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
                    <tr>                        <td><b>content</b></td>
                        <td><code></code></td>
</tr>                </table>
            </td>
        </trs>
    </tbody>
</table>

<table>
    <tbody>
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
            <th colSpan="4">
                <pre><code>writeFile</code></pre>
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
                    <tr>                        <td><b>name</b></td>
                        <td><code></code></td>
</tr>                </table>
            </td>
        </trs>
    </tbody>
</table>

<table>
    <tbody>
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
            <th colSpan="4">
                <pre><code>writeIndexPart</code></pre>
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
                    <tr>                        <td><b>fileSource</b></td>
                        <td><code></code></td>
</tr><tr>                        <td><b> name</b></td>
                        <td><code></code></td>
</tr>                </table>
            </td>
        </trs>
    </tbody>
</table>

<table>
    <tbody>
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

