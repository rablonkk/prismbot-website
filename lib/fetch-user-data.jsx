import axios from 'axios';

export const fetchUserData = async() => {
  const devsDataResult = await axios.get('https://api.prismbot.site/devs-data');

  return {
    rablonkk_username: devsDataResult.data.body.rablonkk_username,
    rablonkk_avatar_url: devsDataResult.data.body.rablonkk_avatar_url,
    rablonkk_global_name: devsDataResult.data.body.rablonkk_global_name,
    sushi_username: devsDataResult.data.body.sushi_username,
    sushi_avatar_url: devsDataResult.data.body.sushi_avatar_url,
    sushi_global_name: devsDataResult.data.body.sushi_global_name,
    eleven_username: devsDataResult.data.body.eleven_username,
    eleven_avatar_url: devsDataResult.data.body.eleven_avatar_url,
    eleven_global_name: devsDataResult.data.body.eleven_global_name,
    shynoxz_username: devsDataResult.data.body.shynoxz_username,
    shynoxz_avatar_url: devsDataResult.data.body.shynoxz_avatar_url,
    shynoxz_global_name: devsDataResult.data.body.shynoxz_global_name,
  };
};
