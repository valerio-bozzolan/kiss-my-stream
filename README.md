# KISS my stream

This is a work in progress project to create HTML5 `<video>` players for live videos from RTMP streams.

Features:

* keep it simple and stupid
* support for incoming RTMP stream
* support for multiple outgoing RTMP streams (YouTube + Facebook + ...)
* pure-HTML5 player
* 100% LibreJS support
* 100% client-side Free software
* 100% server-side Free software

## Installation

Install missing dependencies. For Debian GNU/Linux stable:

```
sudo apt install nginx ffmpeg libnginx-mod-rtmp
```

Copy this repository somewhere. Example for `/var/www`:

```
git clone https://gitpull.it/source/kiss-my-stream/ /var/www/kiss-my-stream
```

## History

This project started by Valerio Bozzolan after:

* Italian wiki conference 2020
* MERGE-it 2021
* Wikimedia Hackaton 2021

The initial configuration was inherited by this project:

https://github.com/alfg/docker-nginx-rtmp

## License

Copyright © 2021 Valerio Bozzolan

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
