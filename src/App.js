import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import { useSelector } from 'react-redux';
// import { change, loading } from './store';
import Cover from './Cover';
import Prototype from './Prototype';
import Training from './Training';
import Footer from './Footer';
import Header from './Header';
import Contact from './Contact';
// import Loading from './Loading';
import './css/reset.css';
import './css/App.scss';

const App = () => {
    // const dispatch = useDispatch();
    const { changeMode } = useSelector(it => it)

    // const [loading, setLoading] = useState();

    // const mainApi = async () => {
    //     setLoading(true);

    //     try {
    //         const response = await fetch(`http://localhost:3000/`, {
    //             method: 'POST',
    //             headers: {
    //                 Accept: 'application/json',
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(),
    //         });

    //         const result = await response.json();
    //         console.log('mainData', result);
    //         setLoading(false); // api 호출 완료 됐을 때 false로 변경하려 로딩화면 숨김처리
    //     } catch (error) {
    //         window.alert(error);
    //     }
    // };

    // useEffect(() => {
    //     mainApi();
    // }, []);


    return (
        <div className="Wrap">

            {/* {loading ? <Loading /> : null} */}
            <div className={`PF ${changeMode ? "on" : ""}`}>
                <div className="PFinner">
                    <Header />


                    {/* 슬라이드가 들어가는 페이지 만들고 싶을 때 힌트!, 컴포넌트 만든 상태에서 it.id === 1 ? <None/> : <Slider /> */}

                    <ReactFullpage
                        //fullpage options
                        licenseKey={'YOUR_KEY_HERE'}
                        scrollingSpeed={1000}
                        anchors={['Cover', 'Prototype', 'Training', 'Contact']}

                        render={({ state, fullpageApi }) => {
                            return (
                                <ReactFullpage.Wrapper>
                                    <Cover />
                                    <Prototype />
                                    <Training />
                                    <Contact />
                                </ReactFullpage.Wrapper >
                            );
                        }}
                    />
                    <Footer />
                </div>
            </div >
        </div>
    )
}

export default App;