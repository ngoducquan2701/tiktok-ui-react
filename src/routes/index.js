import HomePage from '~/pages/Home';
import FollowingPage from '~/pages/Following';
import ProfilePage from '~/pages/Profile';
import Upload from '~/pages/Upload';
import { HeaderOnly } from '~/components/Layouts';

const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/following', component: FollowingPage },
    { path: '/@:nickname', component: ProfilePage },
    { path: '/upload', component: Upload, layout: HeaderOnly },
];

const praviteRoute = [];

export { publicRoutes, praviteRoute };
