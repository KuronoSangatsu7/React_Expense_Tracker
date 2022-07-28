const TransparentWrapper = (props) => {
    return <div className="bg-violet-300/20 rounded-md p-2">{props.children}</div>
}

export default TransparentWrapper;