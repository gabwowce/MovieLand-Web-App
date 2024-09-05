import React from 'react';
import { useMoviesContext  } from MoviesContext;

function LoadingPage() {
  const {loading, error} = useMoviesContext()'

  //TODO ar ok taip? ir kaip padaryt kad mestu klaida jie loading ilgiau nei minute
  return (
    {
      loading && (
        <div>
            {
              error ? (
                  <h1>{error}</h1>
              ) : (
                  <h1>Loading...</h1>
              )
            }
        </div>
      )
    }
  );
}

export default LoadingPage;
