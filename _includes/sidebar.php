    <nav>
      <ul class="side-nav class-nav">
        <li><a <?php if (is_page('kids') ) { echo 'class="current"'; } ?> href="/children-classes/">Children Classes</a></li>
        <li><a <?php if (is_page(['adult', 'index']) ) { echo 'class="current"'; } ?> href="/adult-classes/">Adult Classes</a>
          <ul class="sub-nav">
            <li><a <?php if (is_page(['adult', 'ballet']) ) { echo 'class="current"'; } ?> href="/adult-classes/ballet.php">Ballet</a>
            <li><a <?php if (is_page(['adult', 'pilates']) ) { echo 'class="current"'; } ?> href="/adult-classes/pilates.php">Pilates</a>
          </ul>
        </li>
        <li><a <?php if (is_page('private-sessions') ) { echo 'class="current"'; } ?> href="/private-sessions/">Private Sessions</a></li>
      </ul>
      <ul class="side-nav social-nav">
        <li><a <?php if (is_page('contact') ) { echo 'class="current"'; } ?> href="/contact.php">Contact Us</a></li>
        <li><a href="https://clients.mindbodyonline.com/asp/home.asp?studioid=27108">Sign Up</a></li>
        <li><a <?php if (is_page('social') ) { echo 'class="current"'; } ?> href="/social.php">Social</a></li>
        <li><a <?php if (is_page('about') ) { echo 'class="current"'; } ?> href="/about-victoria.php">About Victoria</a></li>
      </ul>
    </nav>
