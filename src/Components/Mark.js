import { useState } from "react";
import ReactMarkdown from 'react-markdown';
	import remarkGfm from "remark-gfm";

function Mark() {
    const [markdown, setMarkdown] = useState("");

    const handleChange = (e) => {
        setMarkdown(e.target.value);
    };

    return (
        <div className="app">
            <textarea onChange={handleChange}>
                
            </textarea>


            <div className="preview">
                <ReactMarkdown children={markdown}  remarkPlugins={[remarkGfm]}/>
            </div>
        </div>
    );
}

export default Mark