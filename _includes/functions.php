<?php



function is_page($page) {

  global $current_page;

  if ( $current_page == $page )
    return true;
  else
    return false;

}