import axios from "axios";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from './sideBar.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faBars, faCircleDollarToSlot, faClockRotateLeft, faHome, faLayerGroup, faMagnifyingGlass, faMagnifyingGlassDollar, faPenToSquare, faRightFromBracket, faSquarePen, faTrash, faTrashCan, faUser, faUserAstronaut, faUsers } from "@fortawesome/free-solid-svg-icons";
import Tippy from '@tippyjs/react/headless';
import AvatarAuto from "../../../AvatarAuto";

const cx = classNames.bind(styles)



function SideBar() {
    const [showBar, setShowbar] = useState(false)
    const [activeRoute, setActiveRoute] = useState()
    
    
    
    // const [quantityNotify,setQuantityNotify] = useState('')
    // useEffect(()=> {
    //     axios.get('http://localhost:4000/orders')
    //     .then(res => {
    //         let quantity_NC = res.data.filter(i => i.status === false).length
    //         setQuantityNotify(quantity_NC)
    //     })


    // }, []) 

    const navigate = useNavigate();


    const dataSideBar = [
        {
            route:"",
            Icon :<FontAwesomeIcon className={cx('icon_barItem')} icon={faHome}/>,
            title: "tổng thế"
        },
        {
            route:"addProducts",
            Icon : <FontAwesomeIcon className={cx('icon_barItem')} icon={faAdd}/>,
            title: "thêm"

        },
        {
            route:"modifyProducts",
            Icon :<FontAwesomeIcon className={cx('icon_barItem')} icon={faPenToSquare}/>,
            title: "chỉnh sửa và xóa"

        },
        {
            route:"comfirming",
            Icon :<FontAwesomeIcon className={cx('icon_barItem')} icon={faCircleDollarToSlot}/>,
            title: "đơn hàng"
        },
        {
            route:"",
            Icon :<FontAwesomeIcon className={cx('icon_barItem')} icon={faLayerGroup}/>,
            title: "doanh thu"

        },
        {
            route:"accounts",
            Icon :<FontAwesomeIcon className={cx('icon_barItem')} icon={faUsers}/>,
            title: "người dùng"

        },
        {
            route:"history",
            Icon :<FontAwesomeIcon className={cx('icon_barItem')} icon={faClockRotateLeft}/>,
            title: "lịch sử"
        },
        {
            route:"",
            Icon :<FontAwesomeIcon className={cx('icon_barItem')} icon={faTrashCan}/>,
            title: "thùng rác"
        },


    ]

    return (
        <div className={cx('wrapper')}>
            <FontAwesomeIcon icon={faBars}
                className={cx(['menu_mb_btn', {'showBar':showBar}])}
                onClick={() => {
                    setShowbar(pre => !pre)
                }}
            />

            <div className={cx('header_sideBar_admin')}>
                {/* <FontAwesomeIcon className={cx('avatar_admin')} icon={faUserAstronaut}/> */}
                <Tippy
                    trigger="click"
                    interactive
                    placement="bottom-end"	
                    render={attrs => (
                        <div className={cx('menu_avatar')} tabIndex="-1" {...attrs}>
                            <ul>
                                <li>
                                    <Link to='/'>Thông tin cá nhân</Link>
                                </li>
                                <li
                                    onClick={() => {
                                        localStorage.setItem("tokens", JSON.stringify({}));
                                        navigate("/signin")
                                    }}
                                >
                                    Đăng xuất
                                    <FontAwesomeIcon className={cx('logout_icon')}  icon={faRightFromBracket}/>
                                </li>
                            </ul>
                        </div>
                    )}
                >
                    <button className={cx('avatar_admin')}>
                        <FontAwesomeIcon className={cx('icon')}  icon={faUserAstronaut}/>
                    </button>
                </Tippy>
                <p>Admin</p>
            </div>

            <div className={cx('newSideBar_v2')}>
                
                <ul className={cx(['sideBar', {'showBar':showBar}])}>
                {
                    dataSideBar.map((item, index) => (
                        <li key={index}>
                            <Link to={`/admin/${item.route}`}
                                className={cx({"active_route":activeRoute === index})}
                                onClick={() => {
                                    setActiveRoute(index)    
                                }}

                            >
                                {item.Icon}
                                <p className={cx(['title_barItem'])}>{item.title}</p>
                            </Link>
                        </li>
                    ))
                }
                </ul>
                
            </div>

           
            <div className={cx('overlay',{"show_overlay": showBar})}
                onClick={() => setShowbar(false)}
            ></div>
        </div>
     );
}


function Notify({children}) {
    return <span className={cx('quantity_notify')}>{children}</span>
}

export default SideBar;