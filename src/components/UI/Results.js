import React, { Component } from "react";
import { Segment,
         Card,


                } from "semantic-ui-react";

class Results extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Segment style={{ width: "80%" }}>
        <Card.Group>
        {this.props.jobs ? this.props.jobs[0].results.map((v, i) => {
            console.log(v);
            return (
            <Card key={i}>
                <Card.Content>
                    <Card.Header>
                    {v.jobtitle}
                    </Card.Header>
                    <Card.Meta>
                    {v.company}, {v.formattedRelativeTime}
                    </Card.Meta>
                    <Card.Description>
                    {v.snippet}
                    </Card.Description>
                </Card.Content>  
            </Card>
            );
        })
        : null}
    </Card.Group>
      </Segment>
    );
  }
}


// const JobCardSummary = (props) => (
    
// )

export default Results;
