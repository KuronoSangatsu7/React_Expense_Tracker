
const FullWrapper = (props) => {
    return <div className="bg-slate-800 h-full">
        {props.children}
    </div>
}

export default FullWrapper;