import axios from 'axios';

export const fetchClientData = async() => {
  const topTracksResult = await axios.get('https://api.prismbot.site/top-tracks');

  return {
    topTracks: topTracksResult.data.body,
  };
};
