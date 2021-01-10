import React from 'react';
import './SearchPage.css';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon/>
                <h2>FILTER</h2>
            </div>
            <hr/>
            <ChannelRow
            image="//yt3.ggpht.com/ytc/AAUvwnifaQZvAunS0OFb2y_cieoVjLCVjqQW8Exf3BC1gg=s176-c-k-c0x00ffffff-no-rj-mo"
            channel="freeCodeCamp.org"
            verified
            subs="2.82 млн подписчиков"
            noOfVideos ="1 203 видео"
            description="Learn to code for free. "
            />
            <hr/>
            <VideoRow
            views='14 тыс. просмотров'
            subs='2.82 млн.'
            description="Learn how to perform algorithmic trading using Python in this complete course. Algorithmic trading means using computers to ..."
            timestamp='13 часов назад'
            channel='freeCodeCamp.org'
            avatar='//yt3.ggpht.com/ytc/AAUvwnifaQZvAunS0OFb2y_cieoVjLCVjqQW8Exf3BC1gg=s176-c-k-c0x00ffffff-no-rj-mo'
            title="Algorithmic Trading Using Python - Full Course"
            image="https://i.ytimg.com/vi/xfzGZB4HhEE/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCZuZ-9_srF11avKKwQqMPzUVVn5g"
            time='2:51:23'
            />
            <VideoRow
            views='14 тыс. просмотров'
            subs='3 млн.'
            description="Learn how to use TensorFlow 2.0 in this full tutorial course for beginners. This course is designed for Python programmers looking ..."
            timestamp='9 месяца назад'
            channel='freeCodeCamp.org'
            avatar='//yt3.ggpht.com/ytc/AAUvwnifaQZvAunS0OFb2y_cieoVjLCVjqQW8Exf3BC1gg=s176-c-k-c0x00ffffff-no-rj-mo'
            title="TensorFlow 2.0 Complete Course - Python Neural Networks for Beginners Tutorial"
            image="https://i.ytimg.com/vi/tPYj3fFJGjk/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCGakHbLsBSq4dR5tUBflwqVqtnsQ"
            time='6:52:08'
            />
            <VideoRow
            views='2,6 млн просмотров'
            subs='2.82 млн.'
            description="Learn the basics of HTML5 and web development in this awesome course for beginners. ⭐️ Contents ⭐️ ⌨️ (0:00:00) ..."
            timestamp='13 часов назад'
            channel='freeCodeCamp.org'
            avatar='//yt3.ggpht.com/ytc/AAUvwnifaQZvAunS0OFb2y_cieoVjLCVjqQW8Exf3BC1gg=s176-c-k-c0x00ffffff-no-rj-mo'
            title="HTML Full Course - Build a Website Tutorial"
            image="https://i.ytimg.com/vi/pQN-pnXPaVg/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDJ5jd9-CqjrzyC67nBc-68kdwFyg"
            time='2:28:54'
            />
            <VideoRow
            views='62 тыс. просмотров'
            subs='2.82 млн.'
            description="Learn how to use Dynamic Programming in this course for beginners. It can help you solve complex programming problems, such ..."
            timestamp='1 день назад'
            channel='freeCodeCamp.org'
            avatar='//yt3.ggpht.com/ytc/AAUvwnifaQZvAunS0OFb2y_cieoVjLCVjqQW8Exf3BC1gg=s176-c-k-c0x00ffffff-no-rj-mo'
            title="Dynamic Programming - Learn to Solve Algorithmic Problems & Coding Challenges"
            image="https://i.ytimg.com/vi/oBt53YbR9Kk/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDJ2ZEvSeLCTqjQsvdFMGsgCIQW1A"
            time='6:23:13'
            />
            <hr/>
        </div>

    )
}

export default SearchPage;
