import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

function ResetPage({ history }) {
  useEffect(() => {
    const reset = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      reset();
    }
  }, []);

  return (null);
}

export default withRouter(ResetPage);


//  Not my original idea, adapted from a solution on Stack Overflow. 
//  Pseudocode: Listens to the page's history, and resets scroll to the top of the page with each route change. 
// withRouter is a buil-in RRD function that allows you to perform functions on route change, provided you place it at the right hierarchical level. 