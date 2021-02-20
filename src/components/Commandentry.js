import React from 'react';

function CommandEntry(props) {
    return (
        <tr>
            <td>{props.command}</td>
            <td>{props.desc}</td>
            <td><code>{props.command} {props.usage}</code></td>
        </tr>
    );
}

export default CommandEntry;