    <nav>
      <ul class="side-nav class-nav">
        <li><a <?php if (is_page('kids') ) { echo 'class="current"'; } ?> href="/children-classes/">Children Classes</a>
          <ul class="sub-nav">
            <li><a <?php if (is_page(['kids', 'fall-spring']) ) { echo 'class="current"'; } ?> href="/children-classes/fall-spring.php">Fall &amp; Spring</a>
            <li><a <?php if (is_page(['kids', 'summer']) ) { echo 'class="current"'; } ?> href="/children-classes/summer.php">Summer</a>
            <li><a target="_blank" href="https://clients.mindbodyonline.com/classic/ws?studioid=27108&stype=-106&sView=week">Schedule</a></li>
          </ul>
        </li>
        <li><a <?php if (is_page(['adult', 'index']) ) { echo 'class="current"'; } ?> href="/adult-classes/">Adult Classes</a>
          <ul class="sub-nav">
            <li><a <?php if (is_page(['adult', 'new-to-us']) ) { echo 'class="current"'; } ?> href="/adult-classes/new-to-us.php">New to Us</a>
            <li><a target="_blank" href="https://clients.mindbodyonline.com/classic/ws?studioid=27108&stype=-103&sView=week">Schedule</a></li>
          </ul>
        </li>
        <li><a <?php if (is_page('private-sessions') ) { echo 'class="current"'; } ?> href="/private-sessions/">Private Sessions</a></li>
      </ul>
      <ul class="side-nav social-nav">
        <li><a <?php if (is_page('about') ) { echo 'class="current"'; } ?> href="/about-victoria.php">About Victoria</a></li>
        <li><a <?php if (is_page('instructors') ) { echo 'class="current"'; } ?> href="/instructors.php">Instructors</a></li>
        <li><a <?php if (is_page('contact') ) { echo 'class="current"'; } ?> href="/contact.php">Contact Us</a></li>
        <li><a <?php if (is_page('social') ) { echo 'class="current"'; } ?> href="/social.php">Social</a></li>
      </ul>
    </nav>
