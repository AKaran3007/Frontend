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


            <div className="container-fluid">

            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="#"> <b>Markdown Viewer</b></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="/rules"><b>Syntax</b></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/"><b>Home</b></a>
                        </li>
                    </ul>
                </div>
            </nav>

                <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />


            </div>
        </div>
    );
}

export default Mark