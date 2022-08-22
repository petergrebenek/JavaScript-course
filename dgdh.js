const urlObj = {
  protocol: "https",
  domain: "mysite.com",
};

function showCurrentURL() {
  const extractCurrDomain = () => {
    return this.domain;
  };
  const extractCurrProtocol = () => {
    return this.protocol;
  };

  console.log(`${extractCurrProtocol()}://${extractCurrDomain()}`);
}

const url = showCurrentURL.bind(urlObj);

console.log(url);
