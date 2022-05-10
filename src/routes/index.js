import HomePage from '~/pages/Home';
import FollowingPage from '~/pages/Following';
import ProfilePage from '~/pages/Profile';

const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/following', component: FollowingPage },
    { path: '/profile', component: ProfilePage },
];

const praviteRoute = [];

export { publicRoutes, praviteRoute };
