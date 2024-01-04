type UniversalButtonPropsType = {
    disabled?: boolean
    name: string;
    callback: () => void;
};

export const UniversalButton = (props: UniversalButtonPropsType) => {
    const onClickCounter = () => {
        props.callback()
    }


    return (
        <div>
            <button disabled={props.disabled} onClick={onClickCounter}>{props.name}</button>
        </div>
    )


}


