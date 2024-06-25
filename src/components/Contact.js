const Contact = () => {
    return(
        <div>
            <h1 className="font-bold text-2xl p-4 m-4">contact us at 8279653163</h1>
            {/* <h4 className="font-bold text-2xl p-4 m-4">contact us at akkidpic39@gmail.com</h4> */}
        <form >
            <input type="text" className="border border-black p-2 m-2 rounded-lg" placeholder="name" />
            <input type="text" className="border border-black p-2 m-2 rounded-lg" placeholder="message" />
            <button className="border-black p-2 m-2 bg-slate-200 rounded-lg">Submit</button>
        </form>
        </div>
    ); 
};

export default Contact;