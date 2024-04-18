
import './introLoader.scss';
import logo from '../../assets/tmovie.png';

const IntroLoader = () => {

    return (
        <>
            {
                <div className='introLoaderBackground'>
                    <div className="introLoader">
                        <div className='backgroundImg'>
                            <img src={logo} alt="" />
                        </div>
                        <div className='blackBG'></div>
                        <h2>ZETA STREAMING</h2>
                    </div>
                </div>
            }
        </>
    )
}

export default IntroLoader;