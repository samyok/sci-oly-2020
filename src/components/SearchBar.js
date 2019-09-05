import React from "react";
import events from "./EventData";
import Moment from "moment";

class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = {
            search: ""
        };
        this.createEvent = this.createEvent.bind(this);
        this.setSearch = this.setSearch.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    setSearch(search) {
        return () => {
            this.setState(prevState => {
                if (prevState.search === search) {
                    return {search: ""};
                } else {
                    return {search: search};
                }
            })
        }
    }

    handleChange(event) {
        this.setState({
            search: event.target.value
        });
    }

    createEvent(event) {

        const peopleComponents = event.people.map(person => {
            let extraClasses = this.state.search.toLowerCase().includes(person.toLowerCase())
                ? 'blue-grey lighten-2' : '';
            return (
                <div key={event.page_num + '-' + person}
                     className={"chip btn-flat waves-effect waves-light no-uppercase " + extraClasses}
                     onClick={this.setSearch(person)}>
                    {person}
                </div>
            )
        });
        let extraClasses = this.state.search.toLowerCase() === event.title.toLowerCase()
            ? 'lighten-1' : 'darken-1';
        return (
            <tr key={event.page_num}>
                <td>
                    {peopleComponents}
                    <div className={"card blue-grey " + extraClasses}>
                        <div className="card-content white-text">
                            <span className="card-title" onClick={this.setSearch(event.title.toLowerCase())}>
                                {event.title}
                            </span>
                            <p>
                                {event.details}
                            </p>
                        </div>
                        <div className="card-action">
                            <a target="_blank" rel="noopener noreferrer" href={event.sciOly}
                               className="btn waves-effect waves-light blue-grey darken-2">SciOly</a>
                            <a target="_blank" rel="noopener noreferrer"
                               href={'https://api-static.ctlglobalsolutions.com/science/Science_Olympiad_Div_C_2020_Rules_Manual_Web.pdf#page=' + (event.page_num)}
                               className="btn waves-effect waves-light blue-grey darken-4">Rules</a>
                            <a target="_blank" rel="noopener noreferrer" href={event.wiki}
                               className="btn waves-effect waves-light blue-grey darken-2">Wiki</a>
                        </div>
                    </div>
                </td>
            </tr>

        )
    }

    render() {
        const eventComponents = events.filter(event => {
            const search = this.state.search.toLowerCase();

            function isAnyoneSearched() {
                for (let i = 0; i < event.people.length; i++) {
                    let person = event.people[i];
                    if (person.toLowerCase().includes(search)) return true
                }
                return false;
            }

            return (event.name.toLowerCase().includes(search) ||
                isAnyoneSearched() ||
                event.details.toLowerCase().includes(search))
        }).map(this.createEvent);

        let timeLeft = Moment("20200321", "YYYYMMDD").fromNow();

        return (
            <div className="container center" id="menu">
                <h1>Brookings Science Olympiad</h1>
                <div className="input-field">
                    <i className="material-icons prefix">search</i>
                    <input
                        id="searchBar"
                        type="text"
                        value={this.state.search}
                        className={this.state.search ? 'validate valid' : 'validate'}
                        onChange={this.handleChange}
                    />
                    <label
                        htmlFor="searchBar"
                        className={this.state.search ? 'active' : ''}
                    >
                        Search by person or event
                    </label>
                    <p>March 21, 2020 • {timeLeft}</p>
                </div>
                <div className="row">
                    <div className="col s0 l2"/>
                    <div className="col s12 l8" id="search" style={{display: "flex"}}>
                        <table className="centered">
                            <tbody>
                            {eventComponents}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchBar;