import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';

export const navBar = [
    {
        title: 'Student List',
        submenu: [
            {
                title: 'All',
                to: '/',
            },
            {
                title: 'Out of Campus',
                to: '/out',
            },
            {
                title: 'In Campus',
                to: '/in',
            },
        ],
        icon: UserOutlined,
    },
    { title: 'Add New User', to: '/add', icon: VideoCameraOutlined },
    { title: 'Navbar 3', to: '/something', icon: UploadOutlined },
    { title: 'Navbar 4', to: '/something', icon: UserOutlined },
    { title: 'Navbar 5', to: '/something', icon: UserOutlined },
];
