import React from "react";

import Table from "react-bootstrap/Table";
import CommandEntry from "./components/Commandentry";

function RadioCommands(): JSX.Element {
  return (
    <Table responsive striped hover>
      <thead>
        <tr>
          <th>Command</th>
          <th>Description</th>
          <th>Usage</th>
        </tr>
      </thead>
      <tbody>
        <CommandEntry
          command="b!radio"
          desc="Shows availible radios."
          usage=""
        />
        <CommandEntry
          command="b!leave"
          desc="Stops the radio and leaves the channel."
          usage=""
        />
        <CommandEntry
          command="b!volume"
          desc="Adjusts the volume of the radio (Get's noisy at 3)"
          usage="{number}"
        />
        <CommandEntry
          command="b!np"
          desc="Shows currently playing radio"
          usage=""
        />
        <CommandEntry
          command="b!bassboost"
          desc="Applies bassboost to the radio. (rip ears)"
          usage="{number}"
        />
      </tbody>
    </Table>
  );
}

export default RadioCommands;
