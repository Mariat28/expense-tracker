function Card(props) {
    const classes = 'rounded-md shadow-xl' + props.className;
    return(
        <div className={classes}>
            {props.children}
        </div>
    )
}
export default Card;