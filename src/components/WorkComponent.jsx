export const WorkComponent = ({ title, description, link, nameLink, imageLink }) => {
    return (
        <div className="w-5/6 flex flex-col md:flex-row">
            <div className="flex justify-center my-10 md:mr-10">
                <img
                    src={imageLink}
                    className="w-28 h-28 rounded-full object-cover bg-white 
                    border-4 border-green-700"
                />
            </div>
            <div className="md:w-5/6">
                <h1 className="text-xl font-semibold text-green-600 mb-5">
                    {title}
                </h1>
                <p className="font-light text-justify mb-3">
                    {description}
                </p>
                <p className="font-light text-justify">
                    Link: <a href={link}
                        target="blank"
                        className="text-blue-500 underline">
                        {nameLink}
                    </a>
                </p>
            </div>
        </div>
    );
}