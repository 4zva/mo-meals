
import FirstRest from "../imgs/1.jpg";
function Contact() {
    return (
        <>
            <h1 className="h1-contact">Contacts</h1>
            <div className="contacts-cont">
                <div className="Contacts-block">
                    <img className="contact-image" src={FirstRest} alt=""/>
                    <div className="inf">
                        <h4>Chapaev House</h4>
                        <p>+7-937-62-84-70</p>
                        <p>Monday-Saturday: <br></br>8:00-23:00</p>
                        <p>Sunday: <br></br>90:00-00:00</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export { Contact };