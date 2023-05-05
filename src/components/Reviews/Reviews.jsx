import { Link } from "react-router-dom";

const Reviews = ({ reviews }) => {
  return (
    <div>
            {reviews && reviews.length > 0 ? (
        reviews.map(({ id, content, updated_at }) => (
          <div key={id}>
             <Link to={`/movies/${id}/reviews`}>
              <p>{updated_at}</p>
              <p>{content}</p>
              </Link>
          </div>
        ))
      ) : (
        <p>No reviews available.</p>
      )}
    </div>
  );
};

export default Reviews;





// import { Link } from 'react-router-dom';

// const Reviews = () => {
//   const [reviews, setReviews] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(false);

//   const { movieId } = useParams();

//   useEffect(() => {
//     const fetchReviews = async () => {
//       try {
//         setIsLoading(true);
//         const response = await axios.get(
//           `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
//         );
//         setReviews(response.data.results);
//         setIsLoading(false);
//       } catch (error) {
//         setError(true);
//         setIsLoading(false);
//         console.log(error);
//       }
//     };
//     fetchReviews();
//   }, [movieId]);

//   return (
//     <div>
//       <h2>Reviews:</h2>
//       {isLoading && <p>Loading...</p>}
//       {error && <p>Something went wrong.</p>}
//       {reviews && reviews.length > 0 ? (
//         reviews.map(({ id, content, updated_at }) => (
//           <div key={id}>
//             <p>{updated_at}</p>
//             <p>{content}</p>
//           </div>
//         ))
//       ) : (
//         <p>No reviews available.</p>
//       )}
//     </div>
//   );
// };

// export default Reviews;





