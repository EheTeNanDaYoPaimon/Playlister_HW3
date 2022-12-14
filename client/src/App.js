import './App.css';
import { React } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { DeleteSongModal, EditSongModal, Banner, DeleteListModal, ListSelector, PlaylistCards, Statusbar } from './components'
/*
    This is our application's top-level component.
    
    @author McKilla Gorilla
*/
const App = () => {
    return (
        <Router>
            <Banner />
            <Switch>
                <Route path="/" exact component={ListSelector} />
                <Route path="/playlist/:id" exact component={PlaylistCards} />
            </Switch>
            <DeleteListModal />
            <EditSongModal />
            <DeleteSongModal/>
            <Statusbar />
        </Router>
    )
}

export default App