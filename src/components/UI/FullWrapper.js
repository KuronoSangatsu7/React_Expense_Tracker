

const FullWrapper = (props) => {
    return <div className="h-full overflow-scroll bg-gradient-to-tr from-pink-800 to-slate-900">
        {props.children}
    </div>
}

export default FullWrapper;