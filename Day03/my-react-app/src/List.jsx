function List(){

    const name=["Aman", "basil", "hannad", "adinju", "farhan"];
    const  listedName = name.map((item, index) => (
                                 <li key={index}>{item}</li>
                                 ))
    return(
        <>
        <ul> {listedName}</ul>
        </>
               
    );
}
export default List