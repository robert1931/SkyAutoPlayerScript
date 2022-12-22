"ui";
"use strict";
/*
    SkyAutoPlayer (Auto.js script)
  	Copyright © 2020-2021 robert1931

  This library is free software; you can redistribute it and/or
  modify it under the terms of the GNU Lesser General Public
  License as published by the Free Software Foundation; either
  version 2.1 of the License, or (at your option) any later version.

  This library is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
  Lesser General Public License for more details.

  You should have received a copy of the GNU Lesser General Public
  License along with this library; if not, write to the Free Software
  Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301
  USA
*/
(function(emitter) {
  threads.start(function () {
    emitter.emit("evaluate", (function () {
      //Many sources 
      let sources = [
        "http://cdn.stagex.top:8090/robert1931/SkyAutoPlayerScript/raw/master/source/SkyAutoplayer.js",
        "https://cdn.jsdelivr.net/gh/robert1931/SkyAutoPlayerScript/source/SkyAutoplayer.js",
        "https://dl.skyautoplayerscript.robert1931.top/source/SkyAutoplayer.js",
        "https://raw.githubusercontent.com/robert1931/SkyAutoPlayerScript/master/source/SkyAutoplayer.js"
      ];
      for (let i in sources) {
        let resp = http.get(sources[i]);
        if (resp.statusCode >= 200 && resp.statusCode < 300) {
          return resp.body.string();
        }
      }
      return "console.show();console.log(\"Failed to load script\")";
    }()));
  });
  emitter.on('evaluate', function (s) {
    eval(s);
  });
}(events.emitter(threads.currentThread())));
