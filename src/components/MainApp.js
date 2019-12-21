import React from "react";
import SearchBar from "./SearchBar"


class MainApp extends React.Component {

    render() {
        let view;
        if (this.props.view === "main") {
            view = <SearchBar/>;
        } else if (this.props.view === "scoreTracker") {
            view = <SearchBar/>;
        } else if (this.props.view === "events") {
            view = <SearchBar/>;
        } else if (this.props.view === "rules") {
            view = <SearchBar/>;
        } else if (this.props.view === "timings") {
            view = <SearchBar/>;
        }

        return (
            <div>
                {view}
            </div>
        )
    }
}

export default MainApp;
