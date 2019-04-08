import React from 'react'
import Rating from './Rating'
import { ProductReview } from './../models/ProductReview'

export class ReviewForm extends React.Component{

    state = {
        userName: '',
        rating: 0,
        comment: ''
    }

    onSubmit(){
        var date = new Date();
        var months = [
            "Jan", "Feb", "Mar",
            "Apr", "May", "Jun", "Jul",
            "Aug", "Sep", "Oct",
            "Nov", "Dec"
          ];
        
          var day = date.getDate();
          var monthIndex = date.getMonth();
          var year = date.getFullYear();

        this.props.onReviewAdded(new ProductReview(this.state.userName, this.state.rating,this.state.comment, day + ' ' + months[monthIndex] + ', ' + year));
        this.setState({
            userName: '',
            rating: 0,
            comment: ''    
        });
    }

    render(){
        return(
        <>
        <div className="card m-2">
            <div className="card-header bg-secondary font-weight-bold text-light">
                Add Review
            </div>

            <form className="card-body">
                <div className = "form-row">
                        <div className="form-group col-md-6">
                          <label htmlFor="name">Your Name</label>
                          <input type="text" name="name" id="name" className="form-control"
                           value={this.state.userName}
                           onChange={e=>this.setState({userName: e.target.value})}
                          />
                         </div>

                         <div className="form-group col-md-2 ml-2">
                           <label htmlFor="rating">Rating</label>
                           <select className="form-control" name="rating" id="rating"
                            value={this.state.rating}
                            onChange={e => this.setState({ rating: e.target.value})}>
                             <option key='0' value='0'></option>
                             <option key='1' value='1'>1</option>
                             <option key='2' value='2'>2</option>
                             <option key='3' value='3'>3</option>
                             <option key='4' value='4'>4</option>
                             <option key='5' value='5'>5</option>
                           </select>
                         </div>

                        <div className = "star-display mt-4 ml-2 mb-4 pt-2 font-weight-light">
                            <Rating value = {this.state.rating}/>
                        </div>
                 </div>
                <div className="form-group">
                       <label htmlFor="comment">Comment</label>
                       <textarea className="form-control" name="comment" id="comment" rows="3"
                        value={this.state.comment}
                        onChange={e=>this.setState({comment: e.target.value})}>
                        </textarea>
                </div>

                <button type="button" className="btn btn-primary"
                 onClick={e => this.onSubmit()}>
                    Submit
                 </button>
            </form>
        </div>
        </>
        );
    }
}


export default ReviewForm;