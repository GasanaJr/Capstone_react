export default function Admin() {
    return(
        <section>
    <section className="userr">
        <h2>Welcome Admin</h2>
        <p id="admin">Admin privileges</p>
        <table className="adminTable">
            <thead>
            <tr>
              <th>Privilege</th>
              <th>Description</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>Edit</td>  
              <td>Make Edits to the contents on the existing articles on the blog.</td>
            </tr>  
            <tr>
                <td>Delete</td>
                <td>Delete existing articles on the blog.</td>
              </tr>
              <tr>
                <td>Publish</td>
                <td>This is for publishing the edits you made on the articles or newly created articles</td>
              </tr>
              <tr>
                <td>Add Post</td>
                <td>This is for creating or adding a new article on the blog</td>
              </tr>
            </tbody>
          </table>

     </section>
</section>
    )
}