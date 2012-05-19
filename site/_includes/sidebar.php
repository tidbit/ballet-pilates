    <nav>
      <ul class="side-nav page-nav">
        <li><a <?php if (is_page('index') ) { echo 'class="current"'; } ?> href="/">Home</a></li>
        <li><a <?php if (is_page('boutique') ) { echo 'class="current"'; } ?> href="/boutique.php">Boutique on the Go</a></li>
        <li><a <?php if (is_page('sign-up') ) { echo 'class="current"'; } ?> href="/sign-up.php">Sign Up</a></li>
      </ul>
      <ul class="side-nav class-nav">
        <li><a <?php if (is_page('kids') ) { echo 'class="current"'; } ?> href="/kids-ballet.php">Kid's Ballet</a></li>
        <li><a <?php if (is_page('adult') ) { echo 'class="current"'; } ?> href="/adult-ballet.php">Adult Ballet</a></li>
        <li><a <?php if (is_page('pilates') ) { echo 'class="current"'; } ?> href="/pilates.php">Pilates</a></li>
      </ul>
      <ul class="side-nav social-nav">
        <li><a <?php if (is_page('contact') ) { echo 'class="current"'; } ?> href="/contact.php">Contact Us</a></li>
        <li><a href="#">Facebook</a></li>
      </ul>
    </nav>