const AppWrapper = (props) => {
    return (
        <div className="container mx-auto my-20 w-1/2">
            {props.children}
        </div>
    )
}

export default AppWrapper;