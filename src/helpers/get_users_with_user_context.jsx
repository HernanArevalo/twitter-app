import React from 'react';

import got from 'got';
import crypto from 'crypto';
import OAuth from 'oauth-1.0a';
import qs from 'querystring';
import readline from 'readline';

export const get_users_with_user_context = () => {


    // Get User objects by username, using user authentication
    // https://developer.twitter.com/en/docs/twitter-api/users/lookup/quick-start

    readline.createInterface({
        input: process.stdin,
        output: process.stdout
      })


    // The code below sets the consumer key and consumer secret from your environment variables
    // To set environment variables on macOS or Linux, run the export commands below from the terminal:
    // export CONSUMER_KEY='vc1nlhzbnUF5MkjFHydv8npkM'
    // export CONSUMER_SECRET='L1NzGKHfxuuDKUYNUgAO0DeEE6zDyaUMsaj8X4Vqz2OYZF4LZU'
    const consumer_key = process.env.CONSUMER_KEY;
    const consumer_secret = process.env.CONSUMER_SECRET;

    // These are the parameters for the API request
    // specify Tweet IDs to fetch, and any additional fields that are required
    // by default, only the Tweet ID and text are returned
    const usernames = 'nancito__' // Edit  usernames to look up
    const params = 'user.fields=created_at,description&expansions=pinned_tweet_id' // Edit optional query parameters here

    const endpointURL = `https://api.twitter.com/2/users/by?usernames=${usernames}&${params}`;

    // this example uses PIN-based OAuth to authorize the user
    const requestTokenURL = 'https://api.twitter.com/oauth/request_token?oauth_callback=oob';
    const authorizeURL = new URL('https://api.twitter.com/oauth/authorize');
    const accessTokenURL = 'https://api.twitter.com/oauth/access_token';

    const oauth = OAuth({
        consumer: {
            key: consumer_key,
            secret: consumer_secret
        },
        signature_method: 'HMAC-SHA1',
        hash_function: (baseString, key) => crypto.createHmac('sha1', key).update(baseString).digest('base64')
    });

    async function input(prompt) {
        return new Promise(async (resolve, reject) => {
            readline.question(prompt, (out) => {
                readline.close();
                resolve(out);
            });
        });
    }

    async function requestToken() {

        const authHeader = oauth.toHeader(oauth.authorize({
            url: requestTokenURL,
            method: 'POST'
        }));

        const req = await got.post(requestTokenURL, {
            headers: {
                Authorization: authHeader["Authorization"]
            }
        });

        if (req.body) {
            return qs.parse(req.body);
        } else {
            throw new Error('Cannot get an OAuth request token');
        }
    }

    async function accessToken({
        oauth_token,
        oauth_token_secret
    }, verifier) {

        const authHeader = oauth.toHeader(oauth.authorize({
            url: accessTokenURL,
            method: 'POST'
        }));

        const path = `https://api.twitter.com/oauth/access_token?oauth_verifier=${verifier}&oauth_token=${oauth_token}`

        const req = await got.post(path, {
            headers: {
                Authorization: authHeader["Authorization"]
            }
        });

        if (req.body) {
            return qs.parse(req.body);
        } else {
            throw new Error('Cannot get an OAuth request token');
        }
    }

    async function getRequest({
        oauth_token,
        oauth_token_secret
    }) {

        const token = {
            key: oauth_token,
            secret: oauth_token_secret
        };

        const authHeader = oauth.toHeader(oauth.authorize({
            url: endpointURL,
            method: 'GET'
        }, token));

        const req = await got(endpointURL, {
            headers: {
                Authorization: authHeader["Authorization"],
                'user-agent': "v2UserLookupJS"
            }
        });

        if (req.body) {
            return JSON.parse(req.body);
        } else {
            throw new Error('Unsuccessful request');
        }
    }

    (async () => {
        try {

            // Get request token
            const oAuthRequestToken = await requestToken();

            // Get authorization
            authorizeURL.searchParams.append('oauth_token', oAuthRequestToken.oauth_token);
            console.log('Please go here and authorize:', authorizeURL.href);
            const pin = await input('Paste the PIN here: ');

            // Get the access token
            const oAuthAccessToken = await accessToken(oAuthRequestToken, pin.trim());

            // Make the request
            const response = await getRequest(oAuthAccessToken);
            console.dir(response, {
                depth: null
            });

        } catch (e) {
            console.log(e);
            process.exit(-1);
        }
        process.exit();
    })();



    return (
        
        <>

        </>
    )
}