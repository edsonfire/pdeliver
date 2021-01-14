import { BrowserRouter, Switch, Route } from "react-router-dom";
import Orders from "./Orders";
import Home from "./Home";
import Navbar from "./Navbar";


function Routes(){
    return (
            <BrowserRouter>
                <Navbar></Navbar>
                <Switch>
                    <Route path="/orders">
                            <Orders></Orders>

                    </Route>
                    <Route path="/">

                        <Home></Home>
                    </Route>

                </Switch>
            
            </BrowserRouter>

    )

}

export default Routes;