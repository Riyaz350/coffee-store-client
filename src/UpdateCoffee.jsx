import { useLoaderData } from "react-router-dom";

const UpdateCoffee = () => {
    const coffee = useLoaderData()
    const { _id, name, quantity,category,details, supplier, chef,  photo } = coffee;

    const handleForm = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const quantity = form.quantity.value
        const category = form.category.value
        const details = form.details.value
        const chef = form.chef.value
        const supplier = form.supplier.value
        const photo = form.photo.value

        const newCoffee = {name, quantity, category, details, chef, supplier, photo}

        fetch(`http://localhost:5000/coffee/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }
    return (
        <div>
            <form onSubmit={handleForm} className="p-10 text-black bg-[#DCB499]">

{/* first row */}
<div className="md:flex gap-10">
<div className="form-control w-1/2">
    <label className="label">
        <span className="label-text">Coffee Name</span>
    </label>
    <label className="input-group">
        <input defaultValue={name} name="name" type="text" placeholder="Coffee Name" className="input input-bordered w-full" />
    </label>
</div>
<div className="form-control w-1/2">
    <label className="label">
        <span className="label-text">Quantity</span>
    </label>
    <label className="input-group">
        <input defaultValue={quantity} name="quantity" type="text" placeholder="Quantity" className="input input-bordered w-full" />
    </label>
</div>
</div>




{/* second row */}
<div className="md:flex gap-10">
<div className="form-control w-1/2">
    <label className="label">
        <span className="label-text">Category</span>
    </label>
    <label className="input-group">
        <input defaultValue={category} name="category" type="text" placeholder="Category" className="input input-bordered w-full" />
    </label>
</div>
<div className="form-control w-1/2">
    <label className="label">
        <span className="label-text">Details</span>
    </label>
    <label className="input-group">
        <input defaultValue={details}  name="details" type="text" placeholder="Details" className="input input-bordered w-full" />
    </label>
</div>
</div>




{/* third row */}
<div className="md:flex gap-10">
<div className="form-control w-1/2">
    <label className="label">
        <span className="label-text">Chef</span>
    </label>
    <label className="input-group">
        <input defaultValue={chef} name="chef" type="text" placeholder="Chef Name" className="input input-bordered w-full" />
    </label>
</div>
<div className="form-control w-1/2">
    <label className="label">
        <span className="label-text">Supplier</span>
    </label>
    <label className="input-group">
        <input defaultValue={supplier} name="supplier" type="text" placeholder="Supplier" className="input input-bordered w-full" />
    </label>
</div>
</div>


{/* fourth row */}

<div className=" mb-5">
        <span className="label-text">Photo</span>
        <input defaultValue={photo} name="photo" type="text" placeholder="Photo URL" className="block border p-4 input-bordered w-full" />
</div>

<input type="submit" value="Update Coffee" className="btn btn-block" />
</form>
        </div>
    );
};

export default UpdateCoffee;