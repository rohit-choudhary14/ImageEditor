let canvas = document.getElementById("c");
    let ctx = canvas.getContext("2d");
    let imger = new Image();
    cropper(document.getElementById("image-cropper"), {
      crop: [100, 100],
    });

    document.getElementById("image-getter").onclick = function () {
      document.getElementById("image-cropper-result").children[0].src = document
        .getElementById("image-cropper")
        .crop.getCroppedImage().src;

      if (
        document.getElementById("image-cropper-result").children[0].src.length >
        0
      ) {
        document.getElementById("download").style = "pointer-events:auto";
        canvas.height = document.getElementById(
          "image-cropper-result"
        ).children[0].height;
        canvas.width = document.getElementById(
          "image-cropper-result"
        ).children[0].width;
        imger.src = document.getElementById(
          "image-cropper-result"
        ).children[0].src;
      }
    };

    let download = document.getElementById("download");
    download.addEventListener(
      "click",

      function (ev) {
        ctx.drawImage(imger, 0, 0, canvas.width, canvas.height);

        let fileName = prompt("Name your file");
        if (fileName.length == 0) {
          fileName = "img";
        }

        download.href = canvas.toDataURL();
        download.download = fileName + ".png";
      },
      false
    );