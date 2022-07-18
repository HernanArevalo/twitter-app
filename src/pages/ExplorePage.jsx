import Twit from 'twit'


export const ExplorePage = () => {

  const T = new Twit({
    consumer_key:         'vc1nlhzbnUF5MkjFHydv8npkM',
    consumer_secret:      'L1NzGKHfxuuDKUYNUgAO0DeEE6zDyaUMsaj8X4Vqz2OYZF4LZU',
    access_token:         '180469512-VvbNX52RmNv3tz0ePqcT1QQrh5kjF41nBlL8nTbh',
    access_token_secret:  'dQrhR9H2Wd4pSm3f4RSQd8ZLpTnhnwFK3iOgVmUzGrtkw',
    timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
    strictSSL:            true,     // optional - requires SSL certificates to be valid.
  })



  return (
    <h1>ExplorePage</h1>
  )
}
