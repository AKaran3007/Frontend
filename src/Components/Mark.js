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

                <nav className="navbar navbar-light bg-primary container-fluid">
                    <a className="navbar-brand" href="/">

                        <b> &nbsp; MarkDown Viewer</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBJ0t2IzN6HxZ9azvgYaINgfYYIlnEqNm5Y4CZRNdk-ysFXr3UpRNL5LlBJGEAweHwHb4&usqp=CAU"
                            width="40" height="40" class="d-inline-block align-top" alt="" />

                    </a>


                </nav>

                <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />


            </div>
        </div>
    );
}

export default Mark