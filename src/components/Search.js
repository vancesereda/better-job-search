import React, { Component } from 'react';
import SearchBars from './UI/SearchBars'
import Results from './UI/Results'
import axios from 'axios'

//Some examples of results from Indeed's dropdown. Autocomplete to come eventually.
const jobResults = [
    {"title": "software engineer"},
    {"title": "software engineer internship"},
    {"title": "software engineer react"},
    {"title": "software engineer C"},
    {"title": "front end developer"},
    {"title": "front end engineer"},
    {"title": "react engineer"}
]

const locationResults = [
    {"title": "Seattle, WA"}
]
class SearchResults extends Component {
    constructor(props) {
        super(props)
        this.state = {
            jobResults,
            locationResults,
            easy: true,
            date: true,
            open: false,
            jobIndex: 1,
        }
        this.handleResultSelect = this.handleResultSelect.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.search = this.search.bind(this);
        this.changePage = this.changePage.bind(this);
    }

    handleCheck(n) {
        if (!n) {
            this.setState({easy:!this.state.easy})
        } else {
            this.setState({date: !this.state.date})
        }
        this.handleClick();
        
    }

    handleResultSelect(e, result, source) {
        const { title, location, constant } = this.state;
        if (source === 'query') {
          this.setState({query: result}, ()=>console.log(this.state.query))
        } else {
          this.setState({location: result},()=>console.log(this.state.location))
        }
      }

    handleClick() {
        this.setState({open:!this.state.open})
    }

    async search() {
        console.log('is anything happening?')
        const jobs = [];
        const { jobIndex, location, query, date } = this.state;
        const something = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.indeed.com/ads/apisearch?publisher=1388736040132108&v=2&limit=100&start=${jobIndex}&end=${jobIndex+25}&radius=10&l=${location}&q=${query}&sort=${date ? `date` : `relevance`}&format=json`)
                                     .then(res=> {
                                            jobs.push(res.data);
                                            return res.data;
                                     })
        this.setState({ jobs }, ()=> console.log(jobs))

    }

   
    changePage() {

        const { jobIndex } = this.state;
        this.setState({jobIndex: jobIndex+1}, ()=>console.log(jobIndex))

    }


    componentDidMount() {}   



    render() {
        const { jobResults, locationResults} =  this.state;
        const { jobs } = this.state || '';
        return (
            <div>
                <SearchBars jobResults={jobResults}
                            locationResults={locationResults}
                            handleResultSelect = {this.handleResultSelect}
                            easy={this.state.easy}
                            date={this.state.date}
                            handleCheck={this.handleCheck}
                            open={this.state.open}
                            handleClick={this.handleClick}
                            search={this.search}
                />
                
                <Results jobs={jobs ? jobs : ''} jobIndex={this.state.jobIndex-1}/>

            </div>
        )
    }
}

export default SearchResults


