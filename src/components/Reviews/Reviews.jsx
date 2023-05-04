 const Reviews = ({ reviews }) => {
  return (
    <div>
      <h2>Reviews:</h2>
{reviews && reviews.map(review => (
<div key={review.id}>
<h3>{review.author}</h3>
<p>{review.content}</p>
</div>
))}
    </div>
  );
};
  
  export default Reviews;