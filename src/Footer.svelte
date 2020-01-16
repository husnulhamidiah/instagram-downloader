<style>
  .footer {
    z-index: 1;
    --footer-background:#ED5565;
    display: grid;
    position: relative;
    grid-area: footer;
    min-height: 12rem;
    flex-shrink: 0;
    margin-top: 10rem;
  }
  body .footer .bubbles {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1rem;
    background: var(--footer-background);
    -webkit-filter: url("#blob");
            filter: url("#blob");
  }
  body .footer .bubbles .bubble {
    position: absolute;
    left: var(--position, 50%);
    background: var(--footer-background);
    border-radius: 100%;
    -webkit-animation: bubble-size var(--time, 4s) ease-in infinite var(--delay, 0s), bubble-move var(--time, 4s) ease-in infinite var(--delay, 0s);
            animation: bubble-size var(--time, 4s) ease-in infinite var(--delay, 0s), bubble-move var(--time, 4s) ease-in infinite var(--delay, 0s);
    -webkit-transform: translate(-50%, 100%);
            transform: translate(-50%, 100%);
  }
  body .footer .content {
    z-index: 2;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: var(--footer-background);
    color: #FFFFFF;
  }
  body .footer .content a {
    color: #FFFFFF;
    font-weight: 700;
  }

  @-webkit-keyframes bubble-size {
    0%, 75% {
      width: var(--size, 4rem);
      height: var(--size, 4rem);
    }
    100% {
      width: 0rem;
      height: 0rem;
    }
  }
  @keyframes bubble-size {
    0%, 75% {
      width: var(--size, 4rem);
      height: var(--size, 4rem);
    }
    100% {
      width: 0rem;
      height: 0rem;
    }
  }
  @-webkit-keyframes bubble-move {
    0% {
      bottom: -4rem;
    }
    100% {
      bottom: var(--distance, 10rem);
    }
  }
  @keyframes bubble-move {
    0% {
      bottom: -4rem;
    }
    100% {
      bottom: var(--distance, 10rem);
    }
  }
</style>


<div class="footer">
  <div class="bubbles">
    <div class="bubble" style="--size:4.912506037188187rem; --distance:6.14787571407696rem; --position:22.18967512415059%; --time:2.1309010208875216s; --delay:-2.332279094101697s;"></div>
    <div class="bubble" style="--size:3.719255056604844rem; --distance:7.988123301881847rem; --position:47.05905936101202%; --time:2.3191985647987092s; --delay:-3.294158456122387s;"></div>
    <div class="bubble" style="--size:4.901118793319466rem; --distance:8.68522004257672rem; --position:87.19264673141181%; --time:2.5955253815459165s; --delay:-2.927829021110321s;"></div>
    <div class="bubble" style="--size:2.660078520382484rem; --distance:8.328686905545165rem; --position:17.323040354222496%; --time:3.2866055977813176s; --delay:-3.379450850593709s;"></div>
    <div class="bubble" style="--size:4.609942212316847rem; --distance:6.085491612143289rem; --position:13.766640760272931%; --time:3.4164887734104594s; --delay:-2.418852261107577s;"></div>
    <div class="bubble" style="--size:5.476842831490539rem; --distance:7.771949189133904rem; --position:68.09399021091596%; --time:3.185386666601367s; --delay:-3.404941988961582s;"></div>
    <div class="bubble" style="--size:4.716177122670276rem; --distance:7.833459100926771rem; --position:60.88069830608457%; --time:2.298334604563237s; --delay:-2.607977104110991s;"></div>
    <div class="bubble" style="--size:5.569889431898744rem; --distance:9.132169281516235rem; --position:12.428452511589942%; --time:3.169934595175513s; --delay:-2.682712055895175s;"></div>
    <div class="bubble" style="--size:2.904842606721373rem; --distance:7.899550848495968rem; --position:93.44591370099168%; --time:2.621287589768753s; --delay:-2.6085190616239498s;"></div>
    <div class="bubble" style="--size:5.949769964992402rem; --distance:6.269318866582038rem; --position:42.905113601741135%; --time:3.298249772627477s; --delay:-2.06884082288799s;"></div>
    <div class="bubble" style="--size:3.7006048940321685rem; --distance:6.755781202925411rem; --position:45.2887109048021%; --time:2.536274927670129s; --delay:-3.771102164311468s;"></div>
    <div class="bubble" style="--size:3.7163737710361193rem; --distance:8.692431502658838rem; --position:30.09393342653309%; --time:3.0608176903386344s; --delay:-3.6276480257082206s;"></div>
    <div class="bubble" style="--size:3.1530256233391976rem; --distance:6.789182046893444rem; --position:10.751865732811662%; --time:2.5046706909276106s; --delay:-3.07112516779885s;"></div>
    <div class="bubble" style="--size:5.442182238372267rem; --distance:6.769247235062068rem; --position:51.96872727643351%; --time:3.5516770962214133s; --delay:-2.4126429528542457s;"></div>
    <div class="bubble" style="--size:3.5277882595175134rem; --distance:7.9720773329592225rem; --position:1.210935786603872%; --time:3.788895548561599s; --delay:-2.168131375154623s;"></div>
    <div class="bubble" style="--size:5.412548321462573rem; --distance:7.158249238928366rem; --position:7.113711896270408%; --time:2.7659432172335214s; --delay:-3.9726264019268487s;"></div>
    <div class="bubble" style="--size:3.13375107042435rem; --distance:8.165465475288649rem; --position:37.691270776140925%; --time:3.2020347678318637s; --delay:-2.401401766453998s;"></div>
    <div class="bubble" style="--size:4.576481353258635rem; --distance:8.450086022661651rem; --position:72.29658161404329%; --time:3.5167227685301037s; --delay:-2.4341469516503773s;"></div>
    <div class="bubble" style="--size:4.495680049310753rem; --distance:6.294330994198656rem; --position:-1.1097032991762559%; --time:3.0317643959946103s; --delay:-3.925413018104399s;"></div>
    <div class="bubble" style="--size:2.100899481661153rem; --distance:6.982364581016784rem; --position:31.737296118543277%; --time:2.679811762001355s; --delay:-2.8197778174003854s;"></div>
    <div class="bubble" style="--size:2.858235426352401rem; --distance:9.556469960310924rem; --position:13.425770108974088%; --time:3.0210828526248337s; --delay:-2.0149729932963707s;"></div>
    <div class="bubble" style="--size:5.141757344609632rem; --distance:8.965250232251087rem; --position:45.11890765694271%; --time:3.489220381184109s; --delay:-3.8494265918951194s;"></div>
    <div class="bubble" style="--size:4.638786551246499rem; --distance:9.913221244280098rem; --position:66.78020578524398%; --time:2.6776569700757613s; --delay:-3.7275758297505357s;"></div>
    <div class="bubble" style="--size:4.1187558075350585rem; --distance:9.83347156194614rem; --position:73.46582326698116%; --time:2.715186941605962s; --delay:-3.685436312488823s;"></div>
  </div>
  <div class="content">
    Made with ❤ by husnulhamidiah
    <a href="https://github.com/husnulhamidiah/instagram-downloader">Github</a>
    <!-- <div>
      <div><b>Eldew</b><a href="#">Secuce</a><a href="#">Drupand</a><a href="#">Oceash</a><a href="#">Ugefe</a><a href="#">Babed</a></div>
      <div><b>Spotha</b><a href="#">Miskasa</a><a href="#">Agithe</a><a href="#">Scesha</a><a href="#">Lulle</a></div>
      <div><b>Chashakib</b><a href="#">Chogauw</a><a href="#">Phachuled</a><a href="#">Tiebeft</a><a href="#">Ocid</a><a href="#">Izom</a><a href="#">Ort</a></div>
      <div><b>Athod</b><a href="#">Pamuz</a><a href="#">Vapert</a><a href="#">Neesk</a><a href="#">Omemanen</a></div>
    </div>
    <div><a class="image" href="https://codepen.io/z-" target="_blank" style="background-image: url(&quot;https://s3-us-west-2.amazonaws.com/s.cdpn.io/199011/happy.svg&quot;);"></a>
      <p>©2019 Not Really</p>
    </div> -->
  </div>
</div>
<svg style="position:fixed; top:100vh;">
  <defs>
    <filter id="blob">
      <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur>
      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="blob"></feColorMatrix>
      <feComposite in="SourceGraphic" in2="blob" operator="atop"></feComposite>
    </filter>
  </defs>
</svg>