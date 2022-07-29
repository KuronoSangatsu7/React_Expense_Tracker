const AppWrapper = (props) => {
    return (
        <div className="mx-auto mt-20 xs:w-5/6 xl:w-1/3">
            {props.children}
        </div>
    )
}

export default AppWrapper;