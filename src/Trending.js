import React from 'react';
import './Trending.css';
import TrendingVideos from './TrendingVideos';
function Trending() {
    return (
          <div className="Trending">
           <div className="Trending__cont">

            <div className="Trending__box">
            <img className="Trending__img" src="//youtube.com/img/trending/chips/music_160x160.png" alt=""/>
             <h4>Музыка</h4>
          </div>

          <div className="Trending__box">
            <img  className="Trending__img" src="//youtube.com/img/trending/chips/gaming_160x160.png" alt=""/>
             <h4>Видеоигры</h4>
          </div>

          <div className="Trending__box">
            <img className="Trending__img" src="//youtube.com/img/trending/chips/movies_160x160.png" alt=""/>
             <h4>Фильмы</h4>
          </div>
        </div>
        <div className="Trending__row">
          <TrendingVideos
             image='https://i.ytimg.com/vi/smhi6jts97I/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAxKl44PxD0AyVNeG084XxBUIUs-w'
              views= '15 млн просмотров'
              timestamp= '4 дня назад'
              channel= 'Алексей Навальный'
              title= 'Дело раскрыто. Я знаю всех, кто пытался меня убить'
              time="51:51"
              description= 'Лица, которые мы вам покажем, — секретный отряд убийц. Да-да, это как в кино, только реальная жизнь. Вернее,...' 
          />
           <TrendingVideos
              image='https://i.ytimg.com/vi/ecHoHHSMXRo/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDbX47bA_H3gIqzm3BOJ_Esb4qOIA'
              views= '77 тыс. просмотров'
              timestamp= '5 дня назад'
              channel= 'კაცები'
              title= 'კაცები - გადაცემა 132 [სრული ვერსია]'
              time="45:49"
              description= 'თემები: ლიფტში დგომის წესი; ტანმოვარჯიშე ღობეს გადაახტა; ქურდბაცაცა სპლიყ...' 
          />
           <TrendingVideos
             image='https://i.ytimg.com/vi/nOcP2celm0E/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCO3ZwDfN5yMgH-SQmUfAUYL6g41Q'
              views= '17 млн просмотров'
              timestamp= '1 неделю назад'
              channel= 'A4'
              title= 'Кто Первый Выберется из Непробиваемого Ящика ! - Челлендж **5 часть**'
              time="33:08"
              description= 'Скачивай «Astronym» твой личный звездный помощник - https://astronym.l1nk.in/y ***** Покупай Мерч А4 «Ламба&Гелик» на официаль...' 
          />
           <TrendingVideos
             image='https://i.ytimg.com/vi/zOQjSS8aovQ/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLB8zJDIcsugUEOkG3rSaBYrT7XScQ'
              views= '155 тыс. просмотров'
              timestamp= '5 дня назад'
              channel= 'შაბათის შოუ ჯგუფი • Shabatis Show Group'
              title= 'ახალი შაბათის შოუ | ფიტნესი სახლში'
              time="9:18"
              description=''
          />
           <TrendingVideos
             image='https://i.ytimg.com/vi/LSp90MRxSNc/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDzdFuLdlNwaU8dtzVMx3_WvWcahQ'
              views= '15 млн просмотров'
              timestamp= '4 дня назад'
              channel= 'პირველი არხი Georgian Public Broadcaster'
              title= 'ჩვენი საქართველო „წყლიდან ამოსული ქვეყანა“ (სერია 3)'
              time="38:43"
              description= 'ავტორი და წამყვანი - ვასილ მაღლაფერიძე ეწვიეთ ჩვენს საიტს - https://1tv.ge/ მოიწონე...' 
          />
           <TrendingVideos
             image='https://i.ytimg.com/vi/ttmC2XvKALA/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAcnkj2eEDnk8ZNRRvZVgPC_TUn2w'
              views= '9,2 млн просмотров'
              timestamp= '4 дня назад'
              channel= "Dixie D'Amelio'"
              title= "The Lie Detector With Noah Beck | The Dixie D'Amelio Show"
              time="13:42"
              description= 'The time has come..... Noah got his way and our last video got 2 million likes so a promise is a promise. At the end of this video, youll see what 3 million likes gets!! I hope you all enjoy... '
              />
            <TrendingVideos
             image='https://i.ytimg.com/vi/0aPDP6_f6VM/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDwGNbkBwJbi_85RsU5nz8LUkbK9w'
              views= '2,2 млн просмотров'
              timestamp= '4 дня назад'
              channel= "LaLiga Santander"
              title= "Highlights FC Barcelona vs Levante UD (1-0)"
              time="1:31"
              description= "Important win for FC Barcelona at the Camp Nou against Levante UD with the decisive goal of Lionel Messi in the '76 #BarçaLevante Matchday 13 LaLiga Santander 2020/2021 Suscríbete al canal... "
              />
              <TrendingVideos
             image='https://i.ytimg.com/vi/9X_nbT89X-c/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCeIEYKkmF1JkvCAdUsS1Ty57g2UA'
              views= '11 млн просмотров'
              timestamp= '3 дня назад'
              channel= "Dude Perfect"
              title= "Pocket Flame Thrower | OT 21"
              time="26:19"
              description= "Today's episode is straight fire! Cool Not Cool, Small Games Big Prizes, Betcha & Wheel! Thanks to Dr Pepper for sponsoring this video! Click HERE to learn more about the Tuition Giveaway!..."
              />
            </div>
    </div>
   
    )
}

export default Trending
