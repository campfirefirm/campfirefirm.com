const mtn = document.getElementById('mountains');
            const canvas = document.createElement('canvas');
            canvas.id = "mountainscanvas";
            const ctx = canvas.getContext('2d');
            const img = new Image();
            img.onload = () => {
              // ctx.drawImage(img, 0, 0);

              ctx.mozImageSmoothingEnabled = false;
              ctx.webkitImageSmoothingEnabled = false;
              ctx.imageSmoothingEnabled = false;

              // if in play mode use that value, else use slider value
              var size = 50 * 0.02,
                  // cache scaled width and height
                  w = canvas.width * size,
                  h = canvas.height * size;

              // draw original image to the scaled size
              ctx.drawImage(img, 0, 0, w, h);
          
              // then draw that scaled image thumb back to fill canvas
              // As smoothing is off the result will be pixelated
              ctx.drawImage(canvas, 0, 0, w, h, 0, 0, canvas.width, canvas.height);
            };
            img.src = `${mountains}`;
            canvas.style.width = '100%';
            canvas.style.height = '100%';
            mtn.style.background = '';
            mtn.appendChild(canvas);