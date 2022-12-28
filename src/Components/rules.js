import React from 'react'

function Rules() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Syntax For Markdown Viewer</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="/markup">Mark Down</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/">Home</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <table class="table table-dark table-hover">
                <thead>
                    <tr>
                        <th scope="col">S.NO</th>
                        <th scope="col">TAGS</th>
                        <th scope="col">MARKDOWN</th>
                        <th scope="col">OUTPUT</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>ITALIC FONT</td>
                        <td>*ITALIC*</td>
                        <td><i>ITALIC</i></td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>BOLD</td>
                        <td>**BOLD**</td>
                        <td><b>BOLD</b></td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>H1 TAG</td>
                        <td># HEADING 1</td>
                        <td><h1>HEADING 1</h1></td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>H2 TAG</td>
                        <td>## HEADING 1</td>
                        <td><h2>HEADING 2</h2></td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                        <td>BOLD AND ITALIC</td>
                        <td>***BOLD AND ITALIC***.</td>
                        <td><b><i>BOLD AND ITALIC</i></b></td>
                    </tr>
                    <tr>
                        <th scope="row">6</th>
                        <td>BLOCK QUOTES</td>
                        <td>> BLOCK QUOTES </td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">7</th>
                        <td>ORDERED LIST</td>
                        <td>
                            <p><li>1. ONE</li></p>
                            <p><li>5. TWO</li></p>
                            <p><li>8. THREE</li></p>
                            <p><li>6. FOUR</li></p>
                        </td>
                        <td><ol>
                            <p><li> ONE</li></p>
                            <p><li> TWO</li></p>
                            <p><li> THREE</li></p>
                            <p><li> FOUR</li></p>

                        </ol></td>
                    </tr>
                    <tr>
                        <th scope="row">8</th>
                        <td>text mute</td>
                        <td>At the Input, type `nano`.</td>
                        <td className='text-muted'> nano</td>
                    </tr>
                    <tr>
                        <th scope="row">9</th>
                        <td>HORIZONTAL LINE</td>
                        <td>***</td>
                        <td><hr></hr></td>
                    </tr>
                    <tr>
                        <th scope="row">10</th>
                        <td>LINKS</td>
                        <td>This is the *[CLICK HERE FOR LINK](https://www.markdownguide.org)*</td>
                        <td><a href='https://www.markdownguide.org'> CLICK HERE FOR LINK</a></td>
                    </tr>
                    <tr>
                        <th scope="row">11</th>
                        <td>IMAGE</td>
                        <td>![IMAGE](https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/1200px-Markdown-mark.svg.png)</td>
                        <td><p>IMAGE WILL PRESENT</p></td>
                    </tr>
                    <tr>
                        <th scope="row">12</th>
                        <td>HTML</td>
                        <td>This **word** is bold. This *word* is italic.</td>
                        <td><p>This <b>word</b> is bold. This <i>word</i> is italic.</p></td>
                    </tr>
                    <tr>
                        <th scope="row">13</th>
                        <td>STRIKE</td>
                        <td>~one~ or ~~two~~ tildes.</td>
                        <td><s>one</s> or <s>two</s> tildes.</td>
                    </tr>
                    <tr>
                        <th scope="row">14</th>
                        <td>TO-DO TICK</td>
                        <td>* [x] done</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">15</th>
                        <td>TO-DO UNTICK</td>
                        <td>* [ ] to do</td>
                        <td></td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}

export default Rules