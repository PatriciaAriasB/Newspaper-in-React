import { createContext, useReducer } from 'react';
import PropTypes from 'prop-types'; 
import AppReducer from './AppReducer';
import axios from 'axios';


const ApiKey = 'p8oduHAgo6yNXR31aHGijqLXFJV8rNyb';
const ApiUrl = 'https://api.nytimes.com/svc/mostpopular/v2/emailed/30.json?api-key=' + ApiKey;

const initialState = {
  news: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getNews = async () => {
    try {
      const res = await axios.get(ApiUrl);
      dispatch({
        type: 'GET_NEWS',
        payload: res.data.results,
      });
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        news: state.news,
        getNews,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired, 
};
