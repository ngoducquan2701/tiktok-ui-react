import HomePage from '~/pages/Home';
import FollowingPage from '~/pages/Following';
import ProfilePage from '~/pages/Profile';
import Upload from '~/pages/Upload';
import { HeaderOnly } from '~/layouts';
import config from '~/config';

const publicRoutes = [
    { path: config.routes.home, component: HomePage },
    { path: config.routes.following, component: FollowingPage },
    { path: config.routes.profile, component: ProfilePage },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
];

const praviteRoute = [];

export { publicRoutes, praviteRoute };
