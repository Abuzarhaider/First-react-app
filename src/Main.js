import React from "react";

function Main() {
    return (
        <div>
            {/* Jumbotron */}
            <div className="container bg-light p-4 mt-5">
                <div className="jumbotron jumbotron-fluid4">
                    <h1 className="display-4">Hello there!</h1>
                    <p className="lead"> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <hr className="my-4"/>
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <a className="btn btn-primary btn-md" href="https://google.com/" role="button">Learn more</a>
                </div>
            </div>

            {/* Cards Section */}

            <div className="container-fluid">
                <div className="row mt-5">
                    <div className="col-md-3 col-sm-10 card m-3 p-3 cards">
                        <img src="https://images.unsplash.com/photo-1638550496377-9c7c4abb2dbc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="card-img-top" alt="Card image"/>
                        <div className="card-body">
                            <h5 className="card-title">Enjoy</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="https://google.com/" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-10 card m-3 p-3 cards">
                        <img src="https://images.unsplash.com/photo-1638518945531-ff6290869fb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="card-img-top" alt="Card image"/>
                        <div className="card-body">
                            <h5 className="card-title">Work</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="https://google.com/" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-10 card m-3 p-3 cards">
                        <img src="https://images.unsplash.com/photo-1638482168821-3a351ddad703?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=955&q=80" className="card-img-top" alt="Card image"/>
                        <div className="card-body">
                            <h5 className="card-title">Discover</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="https://google.com/" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }

  export default Main;