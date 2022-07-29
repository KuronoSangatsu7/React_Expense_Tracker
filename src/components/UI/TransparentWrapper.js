const TransparentWrapper = (props) => {
    return <div className="bg-violet-200/10 rounded-md p-2 backdrop-blur-md drop-shadow-lg">{props.children}</div>
}

export default TransparentWrapper;