import Home from './components/Home';
import About from './components/About';
import HomePage from './pages/HomePage';


export default{
    mode : 'history',

    routes: [
        {
            path:'',
            component: HomePage
        },
        {
            path:'/about',
            component:About
        },
        
    ]
}