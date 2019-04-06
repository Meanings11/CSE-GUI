import React from 'react'
import Rating from './Rating'

export class ReviewForm extends React.Component{

    render(){
        return(
        <>
        <div className="card m-1">
            <div className="card-header bg-secondary">
                Add Review
            </div>

            <form className="card-body">
                <div className = "form-row">
                        <div className="form-group col-md-6">
                          <label for="name">Your Name</label>
                          <input type="text" name="name" id="name" class="form-control" placeholder="" aria-describedby="helpId"/>
                         </div>

                         <div class="form-group col-md-2">
                           <label for="rating">Rating</label>
                           <select class="form-control" name="rating" id="rating">
                             <option></option>
                             <option>1</option>
                             <option>2</option>
                             <option>3</option>
                             <option>4</option>
                             <option>5</option>
                           </select>
                         </div>
                 </div>
                <div class="form-group">
                       <label for="comment">Comment</label>
                       <textarea class="form-control" name="comment" id="comment" rows="4"></textarea>
                </div>

                <button type="button" class="btn btn-primary">Submit</button>
            </form>
        </div>
        </>
        );
    }
}


export default ReviewForm;