/* Style */
import './style.scss';

const BasicPage = (props) => {
    const { titlePage, children } = props;
    return <div className="BasicPage">
        <div className="BasicPage__titleArea"><h2>{titlePage}</h2></div>
        <main className="BasicPage__content">{children}</main>
    </div>
}

export default BasicPage;