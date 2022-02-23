
# class SourceDirectory 


<table>
    <thead>
        <tr>
            <th colSpan="4">
                <pre><code>SourceDirectory</code></pre>
            </th>
        </tr>
        <tr v-if="properties['kind'] === 'class'">
            <th>
                <a href="Index.md">Go to index</a>
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
                Reads contents of source directory with javascript or typescript files
            </td>
        </tr>
    </tbody>
    <tfoot>
    </tfoot>
</table>

<h3 v-if="!!properties['example']">example</h3>

 ```js
  const sourceDirectory = new SourceDirectory('./core');
 
  // Outputs Sources in generator
  for (const source of sourceDirectory.read()) {
  // instance of Source
  source.read() // get content
  }
 
  ```


## constructor(path)



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
                    <tr>                        <td><b>path</b></td>
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


## * read()



<table>
    <thead>
        <tr>
            <th colSpan="4">
                <pre><code>read</code></pre>
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
                <pre><code>{Generator&lt;Source, void, any&gt;}</code></pre>
            </td>
        </tr>
    </tbody>
</table>

<table>
    <tbody>
        <tr v-if="!!properties['description']">
            <td>Description</td>
            <td colSpan="3">
                will output list of Source for each file in directory or subdirectory
            </td>
        </tr>
    </tbody>
    <tfoot>
    </tfoot>
</table>


## * scanDirectory(srcPath)



<table>
    <thead>
        <tr>
            <th colSpan="4">
                <pre><code>scanDirectory</code></pre>
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
        <trs v-if="properties['params'].length > 0">
            <td>
                <h4>params</h4>
            </td>
            <td>
                <table>
                    <tr>                        <td><b>srcPath</b></td>
                        <td><code></code></td>
</tr>                </table>
            </td>
        </trs>
        <tr v-if="!!properties['return']">
            <td>
                <h4>returns</h4>
            </td>
            <td>
                <pre><code>{Generator&lt;string|any, void, any&gt;}</code></pre>
            </td>
        </tr>
    </tbody>
</table>

<table>
    <tbody>
        <tr v-if="!!properties['description']">
            <td>Description</td>
            <td colSpan="3">
                will output list of path names for each file in directory or subdirectory
            </td>
        </tr>
    </tbody>
    <tfoot>
    </tfoot>
</table>

