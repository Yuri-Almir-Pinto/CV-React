import styles from './showArea.module.css';
import query from './dataView.module.css';
import html2pdf from "html2pdf.js"

export default function ShowArea (props) {
    const { basicData } = props;

    function downloadCV() {
        const CV = document.querySelector("#panelView").cloneNode(true);

        let Buttons = CV.querySelectorAll(`.${query.buttonDiv}`);
        Buttons.forEach((element) => {
            element.remove();
        })
        CV.querySelector(`#${styles.CVdownload}`).remove();
        CV.querySelector(`.${styles.paddingDiv}`).remove();

        const opt = {
            margin: 3,
            filename: "Curriculum Vitae.pdf",
            image: { type: 'jpeg', quality: 1 },
        }
        html2pdf().set(opt).from(CV).save();
    }

    return (
        <>
        { basicData.name !== "" &&
        <article className={styles.header}>
            <button id={styles.CVdownload} onClick={downloadCV}>
                <img src="/download-direto.png" title="Download CV as PDF"></img>
            </button>
            <h1 className={styles.h1}>{basicData.name}</h1>
            <div className={styles.paddingDiv}></div>
        </article>
        }
        <article className={styles.basicInfo}>
            <div className={styles.basicInfoDescription}>
                <p>{basicData.description}</p>
            </div>
            <div className={styles.basicInfoContact}>
                { basicData.email !== "" &&
                    <p><b>✉️ </b>{basicData.email}</p>
                }
                { basicData.phoneNumber !== "" &&
                    <p><b>📱 </b>{basicData.phoneNumber}</p>
                }
                { basicData.address !== "" &&
                    <p><b>📍 </b>{basicData.address}</p>
                }
            </div>
        </article>
        </>
    )
}