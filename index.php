<?php $current_page = 'index'; ?>
<?php include('_includes/header.php'); ?>


<div id="home-slider">
<div class="wrapper">

  <ul class="clearfix slides">
    <li id="kids" class="slide current">
      <a href="/children-classes/">
        <span>Children Classes</span>
      </a>
    </li>
    <li id="pilates" class="slide">
      <a href="/adult-classes/">
        <span>Adult Classes</span>
      </a>
    </li>
    <li id="adult" class="slide hidden">
      <a href="/private-sessions/">
        <span>Private Sessions</span>
      </a>
    </li>
  </ul>

  <ul class="slider-nav"><li class="kids current"></li><li class="pilates"></li><li class="adult"></li></ul>
</div>
</div>


<div id="main" role="main" class="clearfix">
<div class="wrapper">

  <div class="primary-col">

    <header class="unify">
<p><br></p>
</header>

    <div class="unify">
<div class="video-container"><p dir="ltr"><span><iframe src="https://player.vimeo.com/video/175236216" frameborder="0" width="1605" height="635"></iframe></span></p></div><br><br><div class="video-container"><p dir="ltr"><span><iframe src="https://player.vimeo.com/video/175870342" frameborder="0" width="640" height="360"></iframe></span></p></div>
</div>

  </div> <!-- End .primary-col -->


  <div class="secondary-col">

  <?php include('_includes/sidebar.php'); ?>

  </div>  <!-- End .secondary-col -->


</div>
</div> <!-- end #main -->


<?php include('_includes/footer.php'); ?>
