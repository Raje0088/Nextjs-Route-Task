export default async function content({params}){
     const { id } = await params;
    console.log("parmas", id)
    return (
        <h1> product {id} details page - Content coming soon</h1>
    )
}