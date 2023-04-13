const buildUrl = "Build";
const loaderUrl = buildUrl + "/[WebGL] Tank Simplified.loader.js";
const config = {
    dataUrl: buildUrl + "/[WebGL] Tank Simplified.data",
    frameworkUrl: buildUrl + "/[WebGL] Tank Simplified.framework.js",
    codeUrl: buildUrl + "/[WebGL] Tank Simplified.wasm",
    streamingAssetsUrl: "StreamingAssets",
    companyName: "Teknologi Game PENS",
    productName: "Tank Simplified",
    productVersion: "1.0",
};

const container = document.querySelector("#unity-container");
const canvas = document.querySelector("#unity-canvas");
const loadingCover = document.querySelector("#loading-cover");
const progressBarEmpty = document.querySelector("#unity-progress-bar-empty");
const progressBarFull = document.querySelector("#unity-progress-bar-full");
const spinner = document.querySelector('.spinner');

                  loadingCover.style.display = "";

                  const script = document.createElement("script");
                  script.src = loaderUrl;
                  script.onload = () => {
                    createUnityInstance(canvas, config, (progress) => {
                      spinner.style.display = "none";
                      progressBarEmpty.style.display = "";
                      progressBarFull.style.width = `${100 * progress}%`;
                    }).then((unityInstance) => {
                      loadingCover.style.display = "none";
                    }).catch((message) => {
                      alert(message);
                    });
                  };
                  document.body.appendChild(script);const buildUrl = "Build";
                  const loaderUrl = buildUrl + "/[WebGL] Tank Simplified.loader.js";
                  const config = {
                    dataUrl: buildUrl + "/[WebGL] Tank Simplified.data",
                    frameworkUrl: buildUrl + "/[WebGL] Tank Simplified.framework.js",
                    codeUrl: buildUrl + "/[WebGL] Tank Simplified.wasm",
                    streamingAssetsUrl: "StreamingAssets",
                    companyName: "Teknologi Game PENS",
                    productName: "Tank Simplified",
                    productVersion: "1.0",
                  };

                  const container = document.querySelector("#unity-container");
                  const canvas = document.querySelector("#unity-canvas");
                  const loadingCover = document.querySelector("#loading-cover");
                  const progressBarEmpty = document.querySelector("#unity-progress-bar-empty");
                  const progressBarFull = document.querySelector("#unity-progress-bar-full");
                  const spinner = document.querySelector('.spinner');

                  loadingCover.style.display = "";

                  const script = document.createElement("script");
                  script.src = loaderUrl;
                  script.onload = () => {
                    createUnityInstance(canvas, config, (progress) => {
                      spinner.style.display = "none";
                    }).then((unityInstance) => {
                      loadingCover.style.display = "none";
                    }).catch((message) => {
                      alert(message);
                    });
                  };
                  document.body.appendChild(script);
