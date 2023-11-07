import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearUserInfo, setToast } from '@/redux/features';
import { Link, useNavigate } from 'react-router-dom';
import { Avatar, Menu, MenuItem } from '@mui/material';
import { listToast } from '@/constants';

const AppTopbar = forwardRef((props, ref) => {
    const { setVisible } = props;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userInfo = useSelector((state) => state.userInfo) || {};
    const [anchorEl, setAnchorEl] = useState(null);

    const handleLogout = () => {
        localStorage.removeItem('token');
        dispatch(clearUserInfo());
        dispatch(setToast({ ...listToast[0], detail: 'Đăng xuất thành công!' }));
        navigate('/auth/login');
        handleClose();
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleHideMenu = (e) => {
        if (anchorEl && !anchorEl.contains(e.target)) {
            handleClose();
        }
    };

    useEffect(() => {
        if (anchorEl) {
            document.addEventListener('mousedown', handleHideMenu);
        } else {
            document.removeEventListener('mousedown', handleHideMenu);
        }

        return () => {
            document.removeEventListener('mousedown', handleHideMenu);
        };
    }, [anchorEl]);

    return (
        <div className="layout-topbar">
            <Link to="/" className="layout-topbar-logo">
                <div className="flex align-items-center">
                    <span className="text-white">
                        <b>E-LEARNING</b>
                    </span>
                </div>
            </Link>

            <button
                type="button"
                className="p-link layout-menu-button layout-topbar-button"
                onClick={props.onMenuToggle}
            >
                <i className="pi pi-bars" />
            </button>

            <div className="layout-topbar-menu">
                <span>{userInfo && userInfo.email}</span>
                <div className="p-link layout-topbar-button">
                    <Avatar
                        className="avatar"
                        onClick={handleClick}
                        src={userInfo.avatar || '/assets/img/profile.png'}
                        alt="Ảnh đại diện"
                        height="40px"
                        width="40px"
                        style={{ borderRadius: '50%' }}
                    />
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                        disableScrollLock={true}
                    >
                        <MenuItem className='m-2'>
                            <i className="pi pi-info-circle" style={{ fontSize: '16px', marginRight: '10px' }} />
                            Thông tin
                        </MenuItem>
                        <MenuItem className='m-2' component={Link} to="/auth/change_password">
                            <i className="pi pi-sync" style={{ fontSize: '16px', marginRight: '10px' }} />
                            Đổi mật khẩu
                        </MenuItem>
                        <MenuItem className='m-2' onClick={handleLogout}>
                            <i className="pi pi-sign-out" style={{ fontSize: '16px', marginRight: '10px' }} />
                            Đăng xuất
                        </MenuItem>
                    </Menu>
                </div>
            </div>
        </div>
    );
});

export default AppTopbar;