


type UniversalButtonPropsType={
    disabled:boolean
    name:string
    callback:()=>void
}

export function UniversalButton(props:UniversalButtonPropsType) {

    const onclickHandlerButton = () => {
       props.callback()
    }
     return (
         <div>
             <button
                 disabled={props.disabled}
                 onClick={onclickHandlerButton}>
                 {props.name}
             </button>
         </div>
     )
}