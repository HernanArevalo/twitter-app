
export const getUserInformation = async ( username ) => {

    const userFieldsParams = 'profile_image_url,description,protected,verified,pinned_tweet_id,public_metrics'


    // const endpointURL = `https://api.twitter.com/2/users/by?usernames=${username}&${params}`

    // https://api.twitter.com/2/users/by/username/:username?user.fields=profile_image_url,description,protected,verified,pinned_tweet_id,public_metrics

    const endpointURL2 = `https://api.twitter.com/2/users/by/username/:username?user.fields=${userFieldsParams}`


    const url = `https://api.twitter.com/2/users/by/username/:${username}?user.fields=${userFieldsParams}`;
    const respuesta = await fetch(url);
    const data = await respuesta.json();

        return data


}
