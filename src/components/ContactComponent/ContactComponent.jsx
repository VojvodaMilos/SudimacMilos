import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";
import { RiSendPlane2Line } from "react-icons/ri";
import "animate.css";

const ContactComponent = () => {

    return(
        <section className="container contact">
            <h2>Need a web developer</h2>
            <article className = "d-flex justify-content-between">
                <div className = "contactField">
                    <h3>Contact me</h3>
                    <a href="mailto:vojvoda1988@gmail.com" target="_blank">
                    <div className="shadow">
                        <AiOutlineMail className="animate__animated animate__headShake animate__infinite"/><br />
                        <span>E-mail</span>
                        <p>vojvoda1988@gmail.com</p>
                        <p>Send message</p>
                    </div>
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=381653737257">
                    <div className="shadow">
                        <AiOutlineWhatsApp className="animate__animated animate__headShake animate__infinite"/><br />
                        <span>WhatsApp</span>
                        <p>+381 65 37 37 257</p>
                        <p>Send message or call</p>
                    </div>
                    </a>

                </div>
                <div className="formField ">
                    <form action="" >
                        <div className="position-relative">
                        <label className="labName p-2">Name</label>
                        <input type="text" name="name" className="form-control shadow" placeholder="What's your name?" />
                        </div>
                        <div className="position-relative">
                        <label className="labEmail p-2" >Email</label>
                        <input type="email" name="email" className="form-control shadow" placeholder="What's your email?" />
                        </div>
                        <div className="position-relative"> 
                        <label className="labMsg p-2">Message</label>
                        <textarea name="message" className="form-control shadow" placeholder="What do you want to say?"  rows="7"></textarea>
                        </div>
                        <button className="btn">Send message</button>
                    </form>
                </div>
            </article>

        </section>
    )
}

export default ContactComponent;