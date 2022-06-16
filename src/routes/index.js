import HomePage from '~/pages/Home';
import FollowingPage from '~/pages/Following';
import ProfilePage from '~/pages/Profile';
import Upload from '~/pages/Upload';
import { HeaderOnly } from '~/components/Layouts';
import routesConfig from '~/config/routes';

const publicRoutes = [
    { path: routesConfig.home, component: HomePage },
    { path: routesConfig.following, component: FollowingPage },
    { path: routesConfig.profile, component: ProfilePage },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
];

const praviteRoute = [];

export { publicRoutes, praviteRoute };
