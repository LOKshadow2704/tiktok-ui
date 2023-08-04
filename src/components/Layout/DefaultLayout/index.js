import Styles from './defaultLayout.module.scss';
import Header from '../components/Header';
import Sidebar from './Sidebar';
function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className={Styles.Container}>
                <Sidebar />
                <div className={Styles.content}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
