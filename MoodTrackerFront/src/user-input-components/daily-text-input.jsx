
function TextInput({ text, setText }){
    const maxChars = 250;

    return(
        <div className="font-[Nunito]">
            <div className="font-semibold mb-10">
                <span className="text-3xl">Log your day</span>
                <span className="text-xl ml-3 text-zinc-400 italic">(optional)</span>
            </div>
            <div className="text-2xl font-semibold mb-5">How was your day?</div>
            <div className="">
                <textarea onChange={(e) => setText(e.target.value)} value={text} rows="10" placeholder="Tell us about your day..." minLength={0} maxLength={maxChars} className="py-1 px-2 alight-top rounded-2xl border w-full border-zinc-400"></textarea>
            </div>
            <div className="mb-3">
                <span className="ml-95 text-sm text-zinc-400">characters remaining: {maxChars - text.length} 
                    {text.length > maxChars ? <p>Max number of charachers reached</p> : null}</span>
            </div>
        </div>
    )
}

export default TextInput;