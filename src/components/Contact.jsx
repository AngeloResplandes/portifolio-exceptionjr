import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export const Contact = () => {
    return (
        <div className="w-full flex flex-col items-center">
            <h1 className="text-3xl my-10 font-medium md:mb-16">
                Contatos
            </h1>
            <div className="flex flex-col md:flex-row">
                <div className="flex justify-center items-center mb-6 md:mr-10">
                    <FaInstagram
                        className="text-green-600 mr-2"
                        size={30} />
                    <a href="https://www.instagram.com/exception.jr?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                        target="blank"
                        className="underline">
                        @exception.jr
                    </a>
                </div>
                <div className="flex justify-center items-center mb-6">
                    <FaWhatsapp
                        className="text-green-600 mr-2"
                        size={30} />
                    <a href="https://w.app/cwbhqq"
                        className="underline"
                        target="blank">
                        (94) 99127-8355</a>
                </div>
            </div>
        </div>
    );
}