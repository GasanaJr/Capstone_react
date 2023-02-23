export default function MessageCard({email, fullname, content}){
    return(
        
   <tbody>
    <tr>
    <td className = "email" data-label = "Email">{email}</td>
    <td data-label = "Name">{fullname}</td>
    <td data-label = "Content">{content}</td>
    <td data-label = "Reply"><button className="button Green reply-msg" id="edit" data-id = "${message._id}" ><a href="#">Reply</a></button></td>
    <td data-label = "Delete"><button className="button Red delete-msg" data-id = "${message._id}" ><a href="#">Delete</a></button> </td>
    </tr>
   </tbody>
    )
}