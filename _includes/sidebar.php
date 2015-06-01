<?php if( !is_page('adult') ) : ?>
    <nav>
      <ul class="side-nav page-nav">
        <li><a <?php if (is_page('index') ) { echo 'class="current"'; } ?> href="/">Home</a></li>
        <li><a <?php if (is_page('about') ) { echo 'class="current"'; } ?> href="/about-victoria.php">About Victoria</a></li>
      </ul>
      <ul class="side-nav class-nav">
        <li><a <?php if (is_page('adult') ) { echo 'class="current"'; } ?> href="/adult-classes/">Adult Classes</a></li>
        <li><a <?php if (is_page('kids') ) { echo 'class="current"'; } ?> href="/children-classes/">Children Classes</a></li>
        <li><a <?php if (is_page('private-sessions') ) { echo 'class="current"'; } ?> href="/private-sessions/">Private Sessions</a></li>
      </ul>
      <ul class="side-nav class-nav">
        <li><a <?php if (is_page('kids') ) { echo 'class="current"'; } ?> href="/childrens-ballet.php">Children's Ballet</a></li>
        <li><a <?php if (is_page('adult') ) { echo 'class="current"'; } ?> href="/adult-ballet.php">Adult Ballet</a></li>
        <li><a <?php if (is_page('pilates') ) { echo 'class="current"'; } ?> href="/pilates.php">Pilates</a></li>
      </ul>
      <ul class="side-nav social-nav">
        <li><a href="https://clients.mindbodyonline.com/asp/home.asp?studioid=27108">Sign Up</a></li>
        <li><a <?php if (is_page('contact') ) { echo 'class="current"'; } ?> href="/contact.php">Contact Us</a></li>
      </ul>
    </nav>
<?php endif; ?>

<?php if( is_page('adult') ) : ?>
    <nav>
      <ul class="side-nav class-nav">
        <li><a <?php if (is_page(['adult','adult-ballet']) ) { echo 'class="current"'; } ?> href="/adult-classes/adult-ballet.php">Adult Ballet</a></li>
        <li><a <?php if (is_page(['adult','pilates']) ) { echo 'class="current"'; } ?> href="/adult-classes/pilates.php">Pilates</a></li>
      </ul>
      <ul class="side-nav social-nav">
        <li><a href="https://clients.mindbodyonline.com/asp/home.asp?studioid=27108">Sign Up</a></li>
        <li><a <?php if (is_page('contact') ) { echo 'class="current"'; } ?> href="/contact.php">Contact Us</a></li>
      </ul>
    </nav>
<?php endif; ?>
