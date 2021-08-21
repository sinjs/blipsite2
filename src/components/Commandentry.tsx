import React from "react";

function CommandEntry(props: {
  command: string;
  desc: string;
  usage: string;
}): JSX.Element {
  return (
    <tr>
      <td>{props.command}</td>
      <td>{props.desc}</td>
      <td>
        <code>
          {props.command} {props.usage}
        </code>
      </td>
    </tr>
  );
}

export default CommandEntry;
