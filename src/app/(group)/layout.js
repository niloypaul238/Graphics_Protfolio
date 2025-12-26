import Nav from "../Nav";


export default function GroupLayout ({children}){
    return(
        <>
            <Nav/>
            <div className="mt-20">
                {children}
            </div>
            
        </>
    )
}