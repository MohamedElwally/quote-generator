import "./App.css";
import React, { useState } from "react";

const App = () => {
  const url = "https://api.quotable.io/random";
  let quoteData = {
    content: "Let time be your only competitor.",
    author: "Ahmed Saber",
  };
  const [quote, setQuote] = useState(quoteData);

  const generateQuote = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setQuote(data);
      });
  };

  const copy = () => {
    navigator.clipboard.writeText(
      quote.author + " once said: " + quote.content
    );
    alert("copied");
  };

  const shareOnWhatsApp = () => {
    const text = quote.author + " once said: " + quote.content;
    const url = "whatsapp://send?text=" + encodeURIComponent(text);
    window.open(url);
  };

  const shareOnTwitter = () => {
    const text = quote.author + " once said: " + quote.content;
    const url =
      "https://twitter.com/intent/tweet?text=" + encodeURIComponent(text);
    window.open(url);
  };
  const shareOnFacebook = () => {
    // facebook doesn't allow text shares,only urls ...
    const url =
      "https://www.facebook.com/sharer/sharer.php?u=" +
      encodeURIComponent(window.location.href);
    window.open(url);
  };

  const shareOnReddit = () => {
    const text = quote.author + " once said: " + quote.content;
    const url =
      "https://www.reddit.com/submit?title=" + encodeURIComponent(text);
    window.open(url);
  };

  return (
    <>
      <h1>Quote Generator React App</h1>
      <div className="container">
        <p>{quote.content}</p>
        <span>{quote.author}</span>
        <div className="btns">
          <button onClick={copy} className="btn">
            Copy
          </button>
          <button onClick={generateQuote}>Generate Another Quote</button>
        </div>
        <div className="social-btns">
          <button className="share-btn whatsapp-btn" onClick={shareOnWhatsApp}>
            WhatsApp
          </button>
          <button className="share-btn twitter-btn" onClick={shareOnTwitter}>
            Twitter
          </button>
          <button className="share-btn facebook-btn" onClick={shareOnFacebook}>
            Facebook
          </button>
          <button className="share-btn reddit-btn" onClick={shareOnReddit}>
            Reddit
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
