import './showArea.css';
import { basicDemo, basicTemplate } from '../data/basicData';

export default function ShowArea (props) {
    const { basicData = basicTemplate } = props;

    return (
        <>
        <article className="header">
            <h1>{basicData.name}</h1>
        </article>
        <article className="basicInfo">
            <p>{basicData.description}</p>
            <div>
                <p><b>Email: </b>{basicData.email}</p>
                <p><b>Phone number: </b>{basicData.phoneNumber}</p>
                <p><b>Address: </b>{basicData.address}</p>
            </div>
        </article>
        </>
    )
}