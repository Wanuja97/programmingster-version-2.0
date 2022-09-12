import React from 'react'
import Script from 'next/script'
export default function DisqusCommentBox() {
  return (
    <div>
      <div id="disqus_thread"></div>
<Script>
   {`
   var disqus_config = function () {
    this.page.url = document.location.href;  
    this.page.identifier = document.location.href.split(".com")[1];
    };
    
    (function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://programmingster-1.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();
   `}
    
</Script>
    </div>
  )
}
