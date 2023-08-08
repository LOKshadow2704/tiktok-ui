import { HeaderOnly } from '~/components/Layout';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

const PublicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/frofile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
];

const PrivateRoutes = [];

export { PublicRoutes, PrivateRoutes };
