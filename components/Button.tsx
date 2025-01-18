const Button = ({ text }: { text: string }) => {
    return (
        <button className=" hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear">
            {text}
        </button>
    );
};

export default Button;
