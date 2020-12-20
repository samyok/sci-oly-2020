import React from "react";

class Footer extends React.Component{
    render(){
        return(
            <div>
                <div style={{height: "10vh"}}/>
                <footer className="page-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col l6 s12">
                                <h5 className="white-text">Brookings Science Olympiad</h5>
                                <p className="grey-text text-lighten-4">Created for use by the 2020 Brookings High
                                    School Science Olympiad
                                    team. Go Cats!</p>
                            </div>
                            <div className="col l4 offset-l2 s12">
                                <h5 className="white-text">Links</h5>
                                <ul>
                                    <li><a className="grey-text text-lighten-3" href="http://brookings.k12.sd.us/bhs">Brookings
                                        High
                                        School</a></li>
                                    <li><a className="grey-text text-lighten-3"
                                           href="http://sites.usd.edu/sdscienceolympiad/">SD Science
                                        Olympiad Website</a></li>
                                    <li><a className="grey-text text-lighten-3" href="http://soinc.org/">Science
                                        Olympiad Website</a></li>
                                    <li><a className="grey-text text-lighten-3" href="http://scioly.org">Science
                                        Olympiad Wiki</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright">
                        <div className="container">
                            © 2021 <a href="https://samyoknepal.me" style={{color: "white", textDecoration: "underline"}}>Samyok Nepal</a>
                            <a className="btn-flat grey-text text-lighten-4 right scrollTop" href="#top">Back to top</a>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;