<!doctype html>
<html>

<head>
  <title>Welcome to Automation Anywhere's Spin the Wheel</title>
  <meta charset="UTF-8" />
  <style>
    @import url("https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap");
  </style>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" />
  <link rel="stylesheet" href="src/styles.css" />
  <link rel="stylesheet" href="src/btn_styles.css">
  <link rel="stylesheet" href="src/spin_wheel.css">
  <link rel="stylesheet" href="src/nav_bar.css">
  <link rel="stylesheet" href="src/modelbox.css" />
  <!-- <link rel="stylesheet" href="src/left_bar.css"> -->
  <link rel="stylesheet" href="src/comming_soon.css">

</head>

<body>
  <div class="mainbody">
    <div class="headline">
      <span class="nav">
        <a href="./index.php" id="home" class="btn_link btn">Home</a>
        <button id="top_up" class="btn_action btn">Top up</button>
        <button id="get_spin" class="btn_action btn">Get Spin</button>
        <a href="about.php" class="btn btn_link"> about us</a>
      </span>
      <span class="profile">
        <div class="spins">
          <p id="spins">1</p>
          <p>spins</p>
        </div>
        <div class="balance">
          <p id="balance">50</p>
          <p>balance</p>
        </div>
        <div class="profile_pic">
          <img src="https://i.pinimg.com/564x/3a/63/27/3a6327fc45a3eaccc1ef3381fa630399.jpg" height=50 width=50
            alt="profile">
        </div>
      </span>
    </div>
    <div class="main">
      <div class="spinEl">
        <div id="spin_the_wheel">
          <canvas id="wheel" width="440" height="440"></canvas>
          <div id="spin">SPIN</div>
        </div>
      </div>
      <div class="leader_board">
        <div class="top">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLbpHmUQhZKiTBuOsfEH112cn1nKh4_r2tyQ&s"
            alt="Top Winner" class="avatar">
          <div class="top-info">
            <p class="winner-name">John Doe</p>
            <p class="winner-amount">$12,345</p>
          </div>
        </div>
        <div class="list">
          <ol>
            <li>
              <img src="https://d9jhi50qo719s.cloudfront.net/k63/samples/pju_800.JPG?240728013456" alt="Runner 2"
                class="avatar">
              <span class="player-name">Jane Smith</span>
              <span class="player-amount">$9,876</span>
            </li>
            <li>
              <img src="https://masterpiecer-images.s3.yandex.net/117d50274a6711eeae8c02c370ea8a2f:upscaled"
                alt="Runner 3" class="avatar">
              <span class="player-name">Bob Lee</span>
              <span class="player-amount">$8,567</span>
            </li>
            <li>
              <img
                src="https://www.thetonyrobbinsfoundation.org/wp-content/uploads/2017/09/Cool-avatars-anonymous-avatar.jpg"
                alt="Runner 4" class="avatar">
              <span class="player-name">Alice White</span>
              <span class="player-amount">$7,890</span>
            </li>
            <li>
              <img
                src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100270.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725408000&semt=ais_hybrid"
                alt="Runner 5" class="avatar">
              <span class="player-name">Mark Green</span>
              <span class="player-amount">$6,543</span>
            </li>
          </ol>
        </div>
      </div>
    </div>

  </div>
  <div>
    <section id="modal-box">
      <span class="overlay"></span>
      <div class="modal-box">
        <h2>Success</h2>
        <h3 id="md_succes">You have won .</h3>
        <button id='btn_claim' class="btn_action btn">Claim</button>
      </div>
    </section>

    <section id="modal-box-spin">
      <span class="overlay"></span>
      <div class="modal-box">
        <h2>Enter Number of Spins</h2>
        <h3>each spins costs 20</h3>
        <input type="number" id="spin_number" placeholder="Enter a number" />
        <button id='btn_claim_spin' class="btn_action btn">Claim</button>
      </div>
    </section>
  </div>
  <script defer src="src/spinwheel.js"></script>
</body>


</html>
