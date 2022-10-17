import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import { useSelector } from 'react-redux';
import Cover from './Cover';
import Main from './Main';
import Footer from './Footer';
import Header from './Header';
import './css/reset.css';
import './css/App.scss';

const App = () => {

    const { changeMode } = useSelector(it => it)
    return (
        <div className={`PF ${changeMode ? "on" : ""}`}>
            <div className="PFinner">
                <Header />


                {/* 슬라이드가 들어가는 페이지 만들고 싶을 때 힌트!, 컴포넌트 만든 상태에서 it.id === 1 ? <None/> : <Slider /> */}

                <ReactFullpage
                    //fullpage options
                    licenseKey={'YOUR_KEY_HERE'}
                    scrollingSpeed={1000}

                    render={({ state, fullpageApi }) => {
                        return (
                            <ReactFullpage.Wrapper>
                                <Cover />
                                <Main />
                            </ReactFullpage.Wrapper >
                        );
                    }}
                />
                <Footer />
            </div>
        </div >
    )
}

export default App;