export default function ArticleCard({title, name, datee}) {
    // var fulldate = {datee};
    // var date = fulldate.split("T")[0];
    // var timee = fulldate.split("T")[1];
    // var time = timee.split('.')[0];
    return(
        <tbody>
            <tr>
                 <td data-label = "Title">{title}</td>
                 <td data-label = "Name">{name}</td>
                 <td data-label = "Date">{datee}</td>
                 {/* <td data-label = "Time">{time}</td> */}
                 <td data-label = "Delete"><button className="button Red delete-post" id="delete" data-id = "${post._id}"><a href="#">Delete</a></button> </td>
                 <td data-label = "Update"><button className="button Green update-post" id="update" data-id = "${post._id}"><a href="#">Update</a></button> </td>
            </tr>
        </tbody>
    )
}