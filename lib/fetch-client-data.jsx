import axios from 'axios';

export const fetchClientData = async() => {
  const topTracksResult = await axios.get('https://api.prismbot.site/top-tracks');
  const usersResult = await axios.get('https://api.prismbot.site/users');
  const guildsResult = await axios.get('https://api.prismbot.site/guilds');

  return {
    topTracks: topTracksResult.data.body,
    users: usersResult.data.body,
    guilds: guildsResult.data.body,
  };
};
