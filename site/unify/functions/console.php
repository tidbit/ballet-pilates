<?php

	function console( $log ) {
					
		$log = var_export( $log, true );
		
		$script = '<script language="javascript" type="text/javascript">console.log("'.$log.'");</script>';
		
		echo $script;
		
	}
	
?>