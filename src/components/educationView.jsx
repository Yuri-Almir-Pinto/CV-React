import './showArea.css';

export default function EducationView (props) {
    const { basicData = basicTemplate } = props;

    return (
        <>
        <article className="header">
            <h1>{basicData.name}</h1>
        </article>
        <article className="basicInfo">
            <div className="basicInfo-description">
                <p>{basicData.description}</p>
            </div>
            <div>
                <p><b>Email: </b>{basicData.email}</p>
                <p><b>Phone number: </b>{basicData.phoneNumber}</p>
                <p><b>Address: </b>{basicData.address}</p>
            </div>
        </article>
        </>
    )
}