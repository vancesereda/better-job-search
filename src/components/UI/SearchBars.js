import React, { Component } from "react";
import {
  Button,
  Divider,
  Form,
  Grid,
  Segment,
  Checkbox,
  Dropdown,
  Table,
  Search
} from "semantic-ui-react";

const SearchBars = (props) => (
  <Segment style={{ padding: "5px 0 5px 0" }}>
    <br />
    <Grid centered>
      <Grid.Column />
      <Search
        placeholder="software engineer"
        results={props.jobResults}
        onResultSelect={(e, { result }, source) =>
          props.handleResultSelect(e, result.title, 'query')
        }
      />
      <h3>in</h3>

      <Search
        placeholder="Seattle, WA"
        results={props.locationResults}
        onResultSelect={(e, { result }, source) => 
        props.handleResultSelect(e, result.title,'location')}
      />

      <Button size="small" color="blue" onClick={props.search}>
        Search
      </Button>
      <Dropdown text="Filters" open={props.open} onClick={props.handleClick}>
        <Dropdown.Menu>
          <Dropdown.Item>
            <Checkbox
              label="Easy Apply"
              checked={props.easy}
              onChange={() => props.handleCheck(0)}
            />
          </Dropdown.Item>
          <Dropdown.Item>
            <Checkbox
              label="Sort By Date"
              checked={props.date}
              onChange={() => props.handleCheck(1)}
            />
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Grid>
    <br />
  </Segment>
)


export default SearchBars;
