import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import Reviews from '../Reviews/Reviews';
import './AddReview.css';

const AddReview = () => {
    const [user, loading] = useAuthState(auth);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const { t } = useTranslation();

    if (loading) {
        return <Loading></Loading>
    }

    const onSubmit = data => {
        // console.log(data)
        const url = `https://personal-protfolio-server-anik2861.vercel.app/reviews`
        fetch(url, {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                reset()
                if (result) {
                    toast('Comment Add Sucessfully')

                }
            }
            )
    };
    return (
        <div className='add-review my-auto flex align-items-center'>

            <div>
                <div className='reviewContainer '>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            className='inputStyle'
                            placeholder='Enter Name'
                            value={user?.displayName}
                            {...register("name", { required: true, maxLength: 20 })}
                        /> <br />


                        <input
                            className='inputStyle'
                            placeholder='Enter Your ratings'
                            type="number" {...register("ratings", {
                                maxLength: {
                                    value: 5,
                                    message: 'Ratings not gratter then 5'
                                }, required: {
                                    value: true,
                                    message: "Ratings is required"
                                },
                            })}
                        /><br />
                        <label className="label">
                            {errors.ratings?.type === 'required' && <span className="label-text-alt text-danger">{errors.ratings.message}</span>}
                            {errors.ratings?.type > 'maxLength' && <span className="label-text-alt text-danger">{errors.ratings.message}</span>}
                        </label>


                        <textarea
                            className='textarea'
                            placeholder='Enter Your Comment'

                            {...register("reviews",
                                {
                                    maxLength: 250, required: {
                                        value: true,
                                        message: "Comment is required"
                                    },
                                })}
                        /><br />
                        <label className="label">
                            {errors.reviews?.type === 'required' && <span className="label-text-alt text-danger">{errors.reviews.message}</span>}
                        </label>

                        <input
                            value={user?.photoURL}
                            className='inputStyle'
                            hidden
                            placeholder='User Img'
                            type="text"{...register("userImg")}
                        /><br />

                        {/* <input
                            className='addComment'
                            type="submit"
                            value="Add Review"
                        /> */}

                        {user ? (
                            <input
                                className='addComment'
                                type="submit"
                                value="Add Review"
                            />
                        ) : (
                            <Link to="/register">
                                <button className='addComment' >
                                    Add Review
                                </button>
                            </Link>
                        )}

                    </form>
                </div>


            </div>

            <div className='clint-review'>

                <Reviews></Reviews>
            </div>
        </div>
    );
};

export default AddReview;