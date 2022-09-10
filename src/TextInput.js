import { useState } from "react";
import { marked } from 'marked';
import * as DOMPurify from 'dompurify';
function TextInput() {
  
  const [markdown, setMarkdown] = useState('');
  
  
  // Copied from the CodePen
  marked.setOptions({
    renderer: new marked.Renderer(),
    langPrefix: 'hljs language-', // highlight.js css expects a top-level 'hljs' class.
    pedantic: false,
    gfm: true,
    breaks: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    xhtml: false
  });
  // Source: https://codepen.io/freeCodeCamp/pen/GrZVVO?editors=0110

  const handleChange = e => {
    setMarkdown(e.target.value);
    document.getElementById('markdown').innerHTML = marked.parse(DOMPurify.sanitize(markdown));
  }
  //Markdown needs double space recognition so it gets replaced with <br/>


  return (
    <>
      <h1>Markdown Previewer</h1>
      <section>

        <p>Input Markdown</p>
        <textarea id="editor" name="editor" onChange={handleChange} value={markdown}></textarea>

        <p>Markdown Preview</p>
      </section>
      <div id="markdown"/>
    </>
    );
}
export default TextInput;