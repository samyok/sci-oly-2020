import React from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainApp from "./components/MainApp";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            view: {
                id: "main",
                search: ""
            }
        };
        this.setView = this.setView.bind(this);
    }

    setView(view) {
        this.setState(prevState => {
            if (view !== prevState.view.id) {
                this.setState({
                    view: {
                        id: view
                    }
                })
            }
        })
    }

    render() {
        return (
            <div>
                <Navbar setView={this.setView}/>
                <MainApp view={this.state.view.id}/>
                <Footer/>
            </div>
        );
    }
}

export default App;
