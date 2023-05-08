// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { Container, CastBox, Name } from './Cast.styled';

const defImg =
  'https://images01.nicepagecdn.com/page/37/32/web-page-design-preview-373292.jpg';

const Cast = ({ credits, movieId }) => {
  return (
    <Container>
      {credits &&
        (credits.length > 0 ? (
          credits.map(({ id, name, character, profile_path }) => {
            const imgSrc = profile_path
              ? `https://image.tmdb.org/t/p/w500${profile_path}`
              : defImg;
            return (
              <CastBox key={id}>
                
                  <img src={imgSrc} alt={name} width={180} />
                  <Name>{name}</Name>
                  <Name>Character: {character}</Name>
               
              </CastBox>
            );
          })
        ) : (
          <p>No cast</p>
        ))}
    </Container>
  );
};

// Cast.propTypes = {
//   credits: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       name: PropTypes.string.isRequired,
//       character: PropTypes.string.isRequired,
//       profile_path: PropTypes.string,
//     })
//   ),
//   movieId: PropTypes.number.isRequired,
// };

export default Cast;

// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const Cast = ({ movieId }) => {
//   const [credits, setCredits] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     const fetchCredits = async () => {
//       try {
//         setIsLoading(true);
//         const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=7c36d10ef8eae7f493da1fadc9c612a4&language=en-US`);
//         setCredits(response.data.cast);
//         setIsLoading(false);
//       } catch (error) {
//         setError(true);
//         setIsLoading(false);
//         console.log(error);
//       }
//     };

//     fetchCredits();
//   }, [movieId]);

//   return (
//     <div>
//       {isLoading && <p>Loading...</p>}
//       {error && <p>Something went wrong.</p>}
//       {credits &&
//         credits.map(({ id, name, character, profile_path }) => (
//           <div key={id}>
//             <Link to={`/movies/${movieId}/cast/${id}`}>
//               <h3>{name}</h3>
//               <p>Character: {character}</p>
//               {profile_path && (
//                 <img
//                   src={`https://image.tmdb.org/t/p/w200${profile_path}`}
//                   alt={name}
//                 />
//               )}
//             </Link>
//           </div>
//         ))}
//     </div>
//   );
// };

// export default Cast;
