<?php include('functions.php'); ?>
<?php include('head.php'); ?>

<header id="main-header" class="clearfix">
<div class="wrapper">

  <nav id="main-nav" class="nav">
    <h1><a href="/">Ballet & Pilates By Victoria</a></h1>
    <ul>
      <li target="_blank" id="signup"><a href="https://clients.mindbodyonline.com/classic/ws?studioid=27108&stype=-2&subTab=info">Login</a></li>
      <li id="contact"><a href="/contact.php">Contact&nbsp;Us</a></li>
    </ul>
  </nav>

  <?php if ( !is_page('index') ) : ?>
  <nav id="class-nav" class="nav">
    <ul class="class-nav">
      <li><a <?php if (is_page('kids') ) { echo 'class="current"'; } ?> href="/children-classes/">Children Classes</a></li>
      <li><a <?php if (is_page('adult') ) { echo 'class="current"'; } ?> href="/adult-classes/">Adult Classes</a></li>
      <li><a <?php if (is_page('private-sessions') ) { echo 'class="current"'; } ?> href="/private-sessions/">Private Sessions</a></li>
    </ul>
  </nav>
  <?php endif; ?>

	<button id="toggle-nav" title="Toggle Menu"><span>Menu</span></button>

</div>
</header> <!-- end #main_header -->
