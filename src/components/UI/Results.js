import React, { Component } from "react";
import { Segment,
         Item,
         Grid,

                } from "semantic-ui-react";

import Parser from 'html-react-parser';




class Results extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid centered>
        <Grid.Column mobile={16} tablet={16} computer={13}>
          <Segment>
            <Grid divided>
              <Grid.Column width={4}>
            <Item.Group divided>
            {this.props.jobs ? this.props.jobs[0].results.map((v, i) => {
                console.log(v);
                return (
                
                <Item key={i} style={{fontSize:'0.8rem'}}>
                    <Item.Content>
                        <Item.Header>
                        {v.jobtitle}
                        </Item.Header>
                        <Item.Meta>
                        {v.company}, {v.formattedRelativeTime}
                        </Item.Meta>
                        <Item.Description>

                        </Item.Description>
                    </Item.Content>  
                   
                </Item>
                );
            })
            : null}
          </Item.Group>
          </Grid.Column>
          <Grid.Column width={12} verticalAlign='top'>
          
          <Item><Item.Header></Item.Header></Item>
          
          
          </Grid.Column>
          </Grid>
      </Segment>
      </Grid.Column>
    </Grid>
    );
  }
}


// const JobItemSummary = (props) => (
    
// )

export default Results;
