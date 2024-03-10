function generateShortUrl(longUrl) {
  let hash = hashString(longUrl);
  let shortUrl = hash.substring(0, 6);
  return shortUrl;
}


function hashString(str) {
  let hash = 0;
  if (str.length === 0) {
    return hash;
  }
  for (let i = 0; i < str.length; i++) {
    let char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash.toString();
}


let longUrl = "https://www.example.com/very/long/url/that/needs/shortening";
let shortUrl = generateShortUrl(longUrl);
console.log("Short URL:", shortUrl);
