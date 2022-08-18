import { useState } from "react";

function TextInput() {
  
  const [markdown, setMarkdown] = useState('');
  var MarkdownIt = require('markdown-it'),
    md = new MarkdownIt({
      html: true,
      breaks: true
    });
  var preview = md.render(markdown);
  const handleChange = e => {
    setMarkdown(e.target.value);
    document.getElementById('previewer').innerHTML = preview;
  }
  //Markdown needs double space recognition so it gets replaced with <br/>

  
  return (
      <>
        <section id="text-input">
          <div id="header"> {/* make it pretty! */}
            
          </div>
          <input type="text" id="rawMarkdown" name="rawMarkdown" onChange={handleChange} value={markdown}></input>
        </section>
        {/* make it pretty! */}
        <section id="previewer">
        </section>
      </>
    );
}
export default TextInput;