import { useContext, useState } from "react";
import { Rating } from "react-simple-star-rating";
import { useForm } from "react-hook-form";
import Navbar from '../components/Navbar';
import Swal from "sweetalert2";
import Footer from '../components/Footer';
import { MovieContext } from "../Provider/MovieProvider";



const AddMovie = () => {

    const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm();

    const [rating, setRating] = useState(0);
    const { user } = useContext(MovieContext);

    const handelRating = (newrating) => {
        setRating(newrating);
        setValue("rating", newrating, { shouldValidate: true });
    }

    const onSubmit = (data) => {
        if (rating === 0) {
            Swal.fire("Error", "Please select a rating.", "error");
            return;
        }
        const movieData = {
            ...data,
            rating,
            userEmail: user.email
        };


        // send data
        fetch('https://movie-portal-server-side-puce.vercel.app/movie', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(movieData)
        })
            .then(res => res.json())

            .then(data => {
                if (data.insertedId) {
                    
                    Swal.fire({
                        title: 'Success!',
                        text: 'Movie added successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    });
                    reset();
                    setRating(0);
                }
            })

    }

    return (

        <div className="dark:bg-slate-800 bg-white dark:text-white">
            <Navbar></Navbar>

            <div style={{
                backgroundImage: "url(https://i.ibb.co/kyg7ssL/cool-background-2.png)",
            }} className="hero px-5 py-10  min-h-screen">

                <div className="card  w-full max-w-3xl shrink-0 bg-white shadow-2xl">
                    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                        <h1 className='text-center font-bold text-3xl pt-3'>Add Movie</h1>
                        <div className="flex flex-col md:flex-row gap-5">
                            <div className="form-control  md:w-1/2">
                                <label className="label">
                                    <span className="label-text text-primary text-lg font-medium">Movie Poster</span>
                                </label>
                                <input type="url" {...register("poster_url", {
                                    required: 'This field is Required', pattern: {
                                        value: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i,
                                        message: "Please provide a valid URL",
                                    },
                                })} placeholder="Enter Url of Poster" className="input dark:text-primary input-bordered" />
                                {errors.poster_url && <p className="text-sm pt-2 text-red-700">{errors.poster_url.message}</p>}
                            </div>

                            <div className="form-control  md:w-1/2">
                                <label className="label">
                                    <span className="label-text text-primary text-lg font-medium">Movie Title</span>
                                </label>
                                <input type="text"  {...register('movieTitle.', { required: true, minLength: 3 })} placeholder="Enter Movie MoviePoster" className="input input-bordered dark:text-primary" />
                                {errors.movieTitle?.type === "required" && <p className="text-sm text-red-700 mt-2">This Field is Required !</p>}
                                {errors.movieTitle?.type === "minLength" && <p className="text-sm text-red-700 mt-2">Write Minimum 2 Text</p>}
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-5">
                            <div className="form-control  md:w-1/2">
                                <label className="label">
                                    <span className="label-text text-primary text-lg font-medium">Genre</span>
                                </label>
                                <select
                                    multiple
                                    className="select dark:text-black select-bordered w-full"
                                    {...register("genre", { required: true })}>
                                    <option value="Comedy">Comedy</option>
                                    <option value="Drama">Drama</option>
                                    <option value="Horror">Horror</option>
                                    <option value="Action">Action</option>
                                    <option value="Thriller">Thriller</option>
                                    <option value="Sci-Fi">Sci-Fi</option>
                                    <option value="Adventure">Adventure</option>
                                </select>
                                {errors.genre?.type === "required" && <p className="text-sm text-red-700 mt-5">This Field is Required !</p>}
                            </div>


                            <div className="form-control  md:w-1/2">
                                <label className="label">
                                    <span className="label-text text-primary text-lg font-medium">Duration</span>
                                </label>
                                <input type="number" {...register("duration", { required: true, min: 60 })} placeholder="Enter  Duration of Movie" className="input input-bordered dark:text-primary" />

                                {errors.duration?.type === "required" && <p className="text-sm text-red-700 mt-5">This Field is Required</p>}
                                {errors.duration?.type === "min" && <p className="text-sm text-red-700 mt-5">Minimum input 60 !</p>}
                            </div>
                        </div>



                        <div className="flex flex-col md:flex-row gap-5">
                            <div className="form-control  md:w-1/2">
                                <label className="label">
                                    <span className="label-text text-primary text-lg font-medium">Release Year</span>
                                </label>
                                <select {...register("releaseYear", { required: true })} className="select dark:text-black select-bordered w-full">
                                    <option value="" disabled selected>Select Release Year</option>
                                    <option value="2025">2025</option>
                                    <option value="2024">2024</option>
                                    <option value="2023">2023</option>
                                    <option value="2022">2022</option>
                                    <option value="2021">2021</option>
                                    <option value="2020">2020</option>
                                    <option value="2019">2019</option>

                                </select>
                                {errors.releaseYear?.type === "required" && <p className="text-sm text-red-700 mt-2">This Field is Required</p>}
                            </div>

                            <div className="form-control  md:w-1/2">
                                <label className="label">
                                    <span className="label-text text-primary text-lg font-medium">Rating</span>
                                </label>
                                <Rating onClick={handelRating} initialValue={rating} />
                                <input type="hidden" {...register("rating", { required: true })} value={rating} />
                                {errors.rating?.type === "required" && <p className="text-sm text-red-700 mt-2">Rating is Required</p>}
                            </div>
                        </div>


                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-primary text-lg font-medium">Sumary</span>
                            </label>
                            <textarea {...register("sumary", { required: true, minLength: 10 })}
                                placeholder="Enter sumary" name="sumary"
                                className="textarea dark:text-primary resize-none textarea-bordered textarea-sm w-full"></textarea>
                            {errors.sumary?.type === "required" && <p className="text-sm mt-2 text-red-700">This Field is Required</p>}
                            {errors.sumary?.type === "minLength" && <p className="text-sm mt-2 text-red-700">Minimum input 10 character !</p>}
                        </div>


                        <div className="form-control mt-6">
                            <button className="py-2 rounded-md bg-pink-500 text-white text-xl">Add Movie</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>

    );
};

export default AddMovie;