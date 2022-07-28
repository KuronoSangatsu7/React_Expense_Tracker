const AppWrapper = (props) => {
    return (
        <div className="mx-auto my-20 w-1/3">
            {props.children}
        </div>
    )
}

export default AppWrapper;