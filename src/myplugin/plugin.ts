// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
'use strict';

import {
  Application
} from 'phosphide/lib/core/application';

import {
  Widget
} from 'phosphor-widget';


/**
 * The about page extension.
 */
export
const hackerNewsExtension = {
  id: 'jupyter.extensions.hackernews',
  activate: activateHackerNews
};


function activateHackerNews(app: Application): void {
  let widget = new Widget();
  let commandId = 'hackernews-jupyterlab:show';
  widget.id = 'hackernews-jupyterlab';
  widget.title.text = 'HackerNews';
  widget.title.closable = true;
  widget.node.innerHTML = `
<script>window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);
 
  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };
 
  return t;
}(document, "script", "twitter-wjs"));</script>

Welcome to HackerNews

<a class="twitter-timeline" data-dnt="true" href="https://twitter.com/newsycombinator" data-widget-id="727920066293993473">Tweets by @newsycombinator</a>
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>`;

    app.shell.addToLeftArea(widget, { rank: 40 });

    // app.commands.add([{
    //   id: commandId,
    //   handler: () => {
    //     if (!widget.isAttached) app.shell.addToMainArea(widget);
    //     app.shell.activateMain(widget.id);
    //   }
    // }]);

    // app.palette.add([{
    //   command: commandId,
    //   text: 'HackerNews for JupyterLab',
    //   category: 'News'
    // }]);
}
