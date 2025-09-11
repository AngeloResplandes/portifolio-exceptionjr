import Logo from "../assets/logo-exceptionjr.svg"

export const Header = () => {
    return (
        <div className="flex justify-center">
            <img className="w-60 my-5"
                src={Logo}
                alt="Logo"
            />
        </div>
    );
}