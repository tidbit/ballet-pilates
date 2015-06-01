<?php



function is_page($page) {

  global $current_page;

  if( is_array( $current_page ) ) {

    if( is_array( $page ) ) {
      $c_page = [$current_page['section'], $current_page['page']];
    } else {
      $c_page = $current_page['section'];
    }
  } else {
    $c_page = $current_page;
  }


  if ( $c_page == $page )
    return true;
  else
    return false;

}

