import React, { Component } from 'react';


class SidebarContent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <>
                <p>
                    React Sidebar is a sidebar component for React. It offers the
                    following features:
            </p>
                <ul>
                    <li>Have the sidebar slide over main content</li>
                    <li>Dock the sidebar next to the content</li>
                    <li>Touch enabled: swipe to open and close the sidebar</li>
                    <li>
                        Easy to combine with media queries for auto-docking (
                <a href="responsive_example.html">see example</a>)
              </li>
                    <li>
                        Sidebar and content passed in as PORCs (Plain Old React
                        Components)
              </li>
                    <li>
                        <a href="https://github.com/balloob/react-sidebar">
                            Source on GitHub
                </a>{" "}
                        (MIT license)
              </li>
                    <li>Only dependency is React</li>
                </ul>
                <p>
                    <a href="https://github.com/balloob/react-sidebar#installation">
                        Instructions how to get started.
              </a>
                </p>
                <p>
                    <b>Current rendered sidebar properties:</b>
                </p>
            </>
        )
    }
}

export default SidebarContent;



