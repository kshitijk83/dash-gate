import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';
import * as routeConstants from '../constants/routeConstant';

export const navBar = [
    {
        title: 'Student List',
        submenu: [
            {
                title: 'All',
                to: routeConstants.STUDENT_LIST,
            },
            {
                title: 'Out of Campus',
                to: routeConstants.OUT_OF_CAMPUS,
            },
            {
                title: 'In Campus',
                to: routeConstants.IN_CAMPUS,
            },
        ],
        icon: UserOutlined,
    },
    {
        title: 'Add New Entry',
        to: routeConstants.ADD_ENTRY,
        icon: VideoCameraOutlined,
    },
    { title: 'Navbar 3', to: '/something', icon: UploadOutlined },
    { title: 'Navbar 4', to: '/something', icon: UserOutlined },
    { title: 'Navbar 5', to: '/something', icon: UserOutlined },
];
