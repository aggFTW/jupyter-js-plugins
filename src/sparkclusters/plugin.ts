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
const sparkClustersExtension = {
  id: 'jupyter.extensions.sparkclusters',
  activate: activateSparkClusters
};


function connectMe(url: string, username: string, password: string) {
    let changeEndpointCommand = `%%_do_not_call_change_endpoint -e ${url} -u ${username} -p ${password}\na`;
    console.log(changeEndpointCommand);
}

function activateSparkClusters(app: Application): void {
  let widget = new Widget();
  let commandId = 'sparkclusters-jupyterlab:show';
  widget.id = 'sparkclusters-jupyterlab';
  widget.title.text = 'SparkClusters';
  widget.title.closable = true;
  
  let button = document.createElement("BUTTON");
  button.appendChild(document.createTextNode("something"));
  button.onclick = function(){connectMe('https://something.azurehdinsight.net/livy', 'admin', 'pass')}
  widget.node.appendChild(button)
  widget.node.appendChild(document.createElement("BR"))
  
  button = document.createElement("BUTTON");
  button.appendChild(document.createTextNode("somethingup"));
  button.onclick = function(){connectMe('https://somethingup.azurehdinsight.net/livy', 'admin', 'pass')}
  widget.node.appendChild(button)
  widget.node.appendChild(document.createElement("BR"))

  app.shell.addToLeftArea(widget, { rank: 40 });
}