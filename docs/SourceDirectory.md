
# class SourceDirectory 
[Go back to index](Index.md)
---
<table>
    <thead>
        <tr>
            <th colSpan="4">
                <pre><code>SourceDirectory</code></pre>
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
                <tr v-if="description">
            <td>Description</td>
            <td colSpan="3">
                Reads contents of source directory with javascript or typescript files
            </td>
        </tr>
    </tbody>
    <tfoot>
    </tfoot>
</table>

[source_code](../core/SourceDirectory.js)

<h3 v-if="example">example</h3>

 ```js
  const sourceDirectory = new SourceDirectory('./core');
 
  // Outputs Sources in generator
  for (const source of sourceDirectory.read()) {
  // instance of Source
  source.read() // get content
  }
 
  ```


## constructor(path)

[Go back to index](Index.md)
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
        <tr>            <td colspan="2"><b>path</b></td>
            <td colspan="2"><code></code></td>
</tr>    </tbody>
    <tfoot>
    </tfoot>
</table>

[source_code](../core/SourceDirectory.js)


## * read()

[Go back to index](Index.md)
---
<table>
    <thead>
        <tr>
            <th colSpan="4">
                <pre><code>read</code></pre>
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
            <td><span v-if="is_generator">Generator</span></td>
            <td></td>
        </tr>
                <tr v-if="return">
            <td colSpan="4">
                <h4>returns</h4>
            </td>
        </tr>
        <tr v-if="return">
            <td colSpan="4">
                <h4><code>{Generator&lt;Source, void, any&gt;}</code></h4>
            </td>
        </tr>
        <tr v-if="description">
            <td>Description</td>
            <td colSpan="3">
                will output list of Source for each file in directory or subdirectory
            </td>
        </tr>
    </tbody>
    <tfoot>
    </tfoot>
</table>

[source_code](../core/SourceDirectory.js)


## * scanDirectory(srcPath)

[Go back to index](Index.md)
---
<table>
    <thead>
        <tr>
            <th colSpan="4">
                <pre><code>scanDirectory</code></pre>
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
            <td><span v-if="is_generator">Generator</span></td>
            <td></td>
        </tr>
        <tr v-if="params">
            <td colSpan="4">
                <h4>params</h4>
            </td>
        </tr>
        <tr>            <td colspan="2"><b>srcPath</b></td>
            <td colspan="2"><code></code></td>
</tr>        <tr v-if="return">
            <td colSpan="4">
                <h4>returns</h4>
            </td>
        </tr>
        <tr v-if="return">
            <td colSpan="4">
                <h4><code>{Generator&lt;string|any, void, any&gt;}</code></h4>
            </td>
        </tr>
        <tr v-if="description">
            <td>Description</td>
            <td colSpan="3">
                will output list of path names for each file in directory or subdirectory
            </td>
        </tr>
    </tbody>
    <tfoot>
    </tfoot>
</table>

[source_code](../core/SourceDirectory.js)

