import classNames from "classnames/bind";
import Footer from "../components/Footer";
import Header from "../components/Header";
// import Header from "../components/Header_admin";
import styles from './DefaultLayout.module.scss'
import SideBar from "./SideBar";

const cx = classNames.bind(styles)

function DefaultLayout({children, setBrand_v2}) {

    return ( 
        <div className={cx('wrapper')}>
            <Header/>
            <div className={cx('container')}>
                <SideBar setBrand_v2={setBrand_v2} />
                <div className={cx('content')}>{children}</div>
            </div>
            <div className={cx('footer')}>
                <Footer/>
            </div>
        </div>
    );
}

export default DefaultLayout;