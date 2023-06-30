import {Counter} from "./components/Counter";
import {Link, Route, Routes} from "react-router-dom";
import {AboutPageAsync} from "./components/pages/AboutPages/AboutPage.async";
import {MainPageAsync} from "./components/pages/MainPages/MainPage.async";
import {Suspense} from 'react'
import './styles/index.scss'
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/className/classNames";

export function App() {
    const {theme, toggleTHeme} = useTheme()
    const bool = true
    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTHeme}>Toggle</button>
            <Link to={'/'}>Главная страница</Link>
            <Link to={'/about'}>о сайте</Link>
            <Suspense fallback={<>Загрузка</>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync/>}/>
                    <Route path={'/'} element={<MainPageAsync/>}/>
                </Routes>
            </Suspense>
            <Counter/>
        </div>
    );
}