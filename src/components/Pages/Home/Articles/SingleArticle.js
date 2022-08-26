import React from 'react';

const SingleArticle = ({ blog }) => {
    let subSize = blog?.subject?.slice(0, 200)

    return (
        <div id={blog?._id} class="carousel-item">
            <div class="card w-96 mx-1 shadow-xl bg-base-100">
                <div class="card-body ">
                    <h2 class="text-xl card-title font-bold">{blog.title}</h2>
                    <p>{subSize}{blog.subject.length > 200 ? "....." : ""}</p>


                    <div class="card-actions justify-end">
                        <label for="modal-article" className="link link-primary">read more</label>
                    </div>
                </div>
            </div>

            {/* modal for read more*/}
            <input type="checkbox" id="modal-article" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box h-[80vh] bg-base-200">
                    <label for="modal-article" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className='text-start'>

                        {
                            <div className='my-4'>
                                <h2 className="text-2xl my-2 text-primary card-title font-bold">{blog.title}</h2>
                                <p className='text-xl'> {blog?.subject}</p>
                            </div>

                        }
                    </div>
                </div>
            </div>
            {/* modal for read more end*/}
        </div>
    );
};

export default SingleArticle;