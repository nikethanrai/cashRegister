import React from 'react'


const Table=({num,setNum})=>{

const notesAvlb=[2000,500,100,20,10,5,1]    
function calculateChange(amtToBeReturned){
    for (let i=0;i<notesAvlb.length;i++){
        const numberOfNotes=Math.trunc(amtToBeReturned/notesAvlb[i])
        amtToBeReturned%=notesAvlb[i]
        setNum([])
        


    }

}

    return(
        <table className='change-table'>
            <caption>Return Change</caption>
            <tr>
                <th>No. of Notes</th>
                <td className="no-of-notes"></td>
                <td className="no-of-notes"></td>
                <td className="no-of-notes"></td>
                <td className="no-of-notes"></td>
                <td className="no-of-notes"></td>
                <td className="no-of-notes"></td>
                <td className="no-of-notes"></td>
                
            </tr>
            <tr>
                <th> Notes </th>
                <td> 2000 </td>
                <td> 500 </td>
                <td> 100 </td>
                <td> 20 </td>
                <td> 10 </td>
                <td> 5 </td>
                <td> 1 </td>
                
            </tr>

        </table>
    )
}
export default Table        