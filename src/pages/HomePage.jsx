import { Link } from 'react-router-dom'

import './styles/HomePage.css'

export const HomePage = () => {
  return (
    <>
      <h1>HomePage</h1>

      <div className="center">
              <div className="topCenter">
                  <h3>Tweets más Recientes</h3>
              </div>
              <div className="tweets">
              </div>
              <div className="centerTweet">
                  <div className="centerTweet1">
                      <img src="./assets/profile.png" alt="profile picture" />
                  </div>
                  <div className="centerTwittear2">
                      <div>
                          <input id="tweetInput" type="text" placeholder="¿Qué está pasando?" />
                      </div>
                      <div className="centerTwittear22">
                          <Link to="">
                              <div>
                                  <i className='bx bx-world'></i>
                                  <span>Cualquier persona puede responder</span>

                              </div>
                          </Link>
                      </div>
                      <div className="centerTwittear23">
                          <div className="centerTwittear23icons">
                              <Link to="">
                                  <div className="centerTwittear23icon">
                                      <i className='bx bx-image-alt'></i>
                                  </div>
                              </Link>
                              <Link to="">
                                  <div className="centerTwittear23icon">
                                      <i className='bx bxs-file-gif'></i>
                                  </div>
                              </Link>
                              <Link to="">
                                  <div className="centerTwittear23icon">
                                      <i className='bx bx-bar-chart-alt-2 bx-rotate-90'></i>
                                  </div>
                              </Link>
                              <Link to="">
                                  <div className="centerTwittear23icon">
                                      <i className='bx bx-smile'></i>
                                  </div>
                              </Link>
                              <Link to="">
                                  <div className="centerTwittear23icon">
                                      <i className='bx bx-calendar-event'></i>
                                  </div>
                              </Link>


                          </div>
                          <div id="centerTwittear23TwittearDiv">
                              <button id="centerTwittearbtn">Twittear</button>
                          </div>
                      </div>

                  </div>
              </div>
              <div id="centerTweets">
                  <div className="tweet">
                      <div className="centerTweetTop">
                          <div className="centerTweet1">
                              <img src="./assets/profile-tweet1.png" alt="profile picture" />
                          </div>
                          <div className="centerTweet2">
                              <div className="userTweet">
                                  <div className="user1">
                                      <div className="user1-1">
                                          <Link to="#"><span>LAVOZcomar</span></Link>
                                      </div>
                                      <div className="user1-2">
                                          <Link to="#"><span>@LAVOZcomar</span></Link>
                                      </div>
                                      <div className="user1-3">
                                          <span>•</span>
                                      </div>
                                      <div className="user1-4">
                                          <Link to="#"><span>15min</span></Link>
                                      </div>
                                  </div>
                              </div>
                              <div className="tweetContent">
                                  <span>Valoyes y la ovación, en el juego más difícil de su ciclo en </span>
                                  <span className="hashtag"><Link to="">#Talleres</Link></span>
                              </div>
                              <div className="tweetLink">
                                  <Link to="#">
                                      <div className="tweetLinkImage">
                                          <img src="./assets/tweet-picture.png" alt="" />
                                      </div>
                                      <div className="tweetLinkText">
                                          <div className="tweetLinkPage">
                                              <span>lavoz.com.ar</span>
                                          </div>
                                          <div className="tweetLinkTitle">
                                              <span>Valoyes y la ovación, en el juego más dificil de su ciclo en talleres
                                                  |
                                                  Futbol
                                                  de Primera</span>
                                          </div>
                                          <div className="tweetLinkContent">
                                              <span>La ovación al dejar la cancha fue el capítulo esperado de su
                                                  reencuentro
                                                  con la masa, la que se había perdido su explosión.</span>
                                          </div>
                                      </div>
                                  </Link>
                              </div>
                          </div>
                      </div>
                      <div className="tweetIcons">
                          <div className="tweetComment tweetIcon">
                              <img className="" src="./assets/chat.png" alt="" />
                              <div className="tweetIconsSpan"><span>1</span></div>
                          </div>
                          <div className="tweetRetweet tweetIcon">
                              <img className="" src="./assets/retweet-arrows.png" alt="" />
                              <div className="tweetIconsSpan"><span>3</span></div>
                          </div>
                          <div className="tweetFav tweetIcon">
                              <img className="" src="./assets/heart.png" alt="" />
                              <div className="tweetIconsSpan"><span></span></div>
                          </div>
                          <div className="tweetShare tweetIcon">
                              <img className="" src="./assets/upload.png" alt="" />
                          </div>
                      </div>
                  </div>
                  <div className="tweet">
                      <div className="centerTweetTop">
                          <div className="centerTweet1">
                              <img src="./assets/solpereyra.jpg" alt="profile picture" />
                          </div>
                          <div className="centerTweet2">
                              <div className="userTweet">
                                  <div className="user1">
                                      <div className="user1-1">
                                          <Link to=""><span>solcito</span></Link>
                                      </div>
                                      <div className="user1-2">
                                          <Link to=""><span>@solpereyra</span></Link>
                                      </div>
                                      <div className="user1-3">
                                          <span>•</span>
                                      </div>
                                      <div className="user1-4">
                                          <Link to=""><span>25min</span></Link>
                                      </div>
                                  </div>
                              </div>
                              <div className="tweetContent">
                                  <span>martes pero a qué costo</span>
                                  <span className="hashtag"><Link to=""></Link></span>
                              </div>

                          </div>
                      </div>
                      <div className="tweetIcons2">
                          <div className="tweetComment tweetIcon">
                              <img className="" src="./assets/chat.png" alt="" />
                              <div className="tweetIconsSpan"><span></span></div>
                          </div>
                          <div className="tweetRetweet tweetIcon">
                              <img className="" src="./assets/retweet-arrows.png" alt="" />
                              <div className="tweetIconsSpan"><span></span></div>
                          </div>
                          <div className="tweetFav tweetIcon">
                              <img className="" src="./assets/heart.png" alt="" />
                              <div className="tweetIconsSpan"><span></span></div>
                          </div>
                          <div className="tweetShare tweetIcon">
                              <img className="" src="./assets/upload.png" alt="" />
                          </div>
                      </div>
                  </div>
                  <div className="tweet">
                      <div className="centerTweetTop">
                          <div className="centerTweet1">
                              <img src="./assets/KEo9sgTJ_400x400.jpg" alt="profile picture" />
                          </div>
                          <div className="centerTweet2">
                              <div className="userTweet">
                                  <div className="user1">
                                      <div className="user1-1">
                                          <Link to=""><span>TyC Sports</span></Link>
                                      </div>
                                      <div className="user1-2">
                                          <Link to=""><span>@TyCSports</span></Link>
                                      </div>
                                      <div className="user1-3">
                                          <span>•</span>
                                      </div>
                                      <div className="user1-4">
                                          <Link to=""><span>36min</span></Link>
                                      </div>
                                  </div>
                              </div>
                              <div className="tweetContent">
                                  <span>Delbonis no puede salir de su mala racha y perdió en San Petersburgo Pelota de
                                      tenis</span>
                                  <span className="hashtag"><Link to="">#Talleres</Link></span>
                              </div>
                              <div className="tweetLink">
                                  <Link to="#">
                                      <div className="tweetLinkImage">
                                          <img src="./assets/delbonis_862x485.jpg" alt="" />
                                      </div>
                                      <div className="tweetLinkText">
                                          <div className="tweetLinkPage">
                                              <span>lavoz.com.ar</span>
                                          </div>
                                          <div className="tweetLinkTitle">
                                              <span>La tremenda racha negativa de Federico Delbonis - TyC Sports</span>
                                          </div>
                                          <div className="tweetLinkContent">
                                              <span>El tenista de Azul cayó contra el español Andújar por 6-2 y 7-6 y
                                                  acumula nueve derrotas consecutivas</span>
                                          </div>
                                      </div>
                                  </Link>
                              </div>
                          </div>
                      </div>
                      <div className="tweetIcons">
                          <div className="tweetComment tweetIcon">
                              <img className="" src="./assets/chat.png" alt="" />
                              <div className="tweetIconsSpan"><span>1</span></div>
                          </div>
                          <div className="tweetRetweet tweetIcon">
                              <img className="" src="./assets/retweet-arrows.png" alt="" />
                              <div className="tweetIconsSpan"><span>1</span></div>
                          </div>
                          <div className="tweetFav tweetIcon">
                              <img className="" src="./assets/heart.png" alt="" />
                              <div className="tweetIconsSpan"><span>23</span></div>
                          </div>
                          <div className="tweetShare tweetIcon">
                              <img className="" src="./assets/upload.png" alt="" />
                          </div>
                      </div>
                  </div>
                  <div className="tweet">
                      <div className="centerTweetTop">
                          <div className="centerTweet1">
                              <img src="./assets/profile-tweet1.png" alt="profile picture" />
                          </div>
                          <div className="centerTweet2">
                              <div className="userTweet">
                                  <div className="user1">
                                      <div className="user1-1">
                                          <Link to=""><span>LAVOZcomar</span></Link>
                                      </div>
                                      <div className="user1-2">
                                          <Link to=""><span>@LAVOZcomar</span></Link>
                                      </div>
                                      <div className="user1-3">
                                          <span>•</span>
                                      </div>
                                      <div className="user1-4">
                                          <Link to=""><span>37min</span></Link>
                                      </div>
                                  </div>
                              </div>
                              <div className="tweetContent">
                                  <span>Ciudades y puntos turísticos del país están interconectados con las vías de
                                      tren. Los lugares, trayectos y tarifas para recorrer este verano.
                                  </span>
                              </div>
                              <div className="tweetLink">
                                  <Link to="">
                                      <div className="tweetLinkImage">
                                          <img src="./assets/lavoz-vacaciones.jpg" alt="" />
                                      </div>
                                      <div className="tweetLinkText">
                                          <div className="tweetLinkPage">
                                              <span>lavoz.com.ar</span>
                                          </div>
                                          <div className="tweetLinkTitle">
                                              <span>Vacaciones de verano en Argentina: adónde podés viajar en tren y
                                                  cuá...</span>
                                          </div>
                                          <div className="tweetLinkContent">
                                              <span>Ciudades y puntos turísticos del país están interconectados con
                                                  lasvías de
                                                  tren.
                                                  Los lugares, trayectos y tarifas para recorrer este verano.</span>
                                          </div>
                                      </div>
                                  </Link>
                              </div>
                          </div>
                      </div>
                      <div className="tweetIcons">
                          <div className="tweetComment tweetIcon">
                              <img className="" src="./assets/chat.png" alt="" />
                              <div className="tweetIconsSpan"><span></span></div>
                          </div>
                          <div className="tweetRetweet tweetIcon">
                              <img className="" src="./assets/retweet-arrows.png" alt="" />
                              <div className="tweetIconsSpan"><span></span></div>
                          </div>
                          <div className="tweetFav tweetIcon">
                              <img className="" src="./assets/heart.png" alt=""/>
                              <div className="tweetIconsSpan"><span></span></div>
                          </div>
                          <div className="tweetShare tweetIcon">
                              <img className="" src="./assets/upload.png" alt="" />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </>
  )
}
