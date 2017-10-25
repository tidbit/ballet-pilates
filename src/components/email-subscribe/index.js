import { h, Component } from 'preact';
import style from './style';

export default class EmailSubscribe extends Component {
	render() {
	  return (
      <div class="email-opt-in">
        { /* BEGIN: Constant Contact Bubble Opt-in Email List Form  */ }
        <div>
          <form name="ccoptin" action="http://visitor.r20.constantcontact.com/d.jsp" target="_blank" method="post" style="margin-bottom:3;">
            <font style="font-weight: bold; font-family:Arial; font-size:24px; color:#F15BB1;">Join Our Email List</font>
            <br/>
            <font style="font-weight: normal; font-family:Arial; font-size:14px;">Email:</font>
            <input type="text" name="ea" size="14" value="" style="font-family: Arial; font-size:14px; border:1px solid #999999;"/>
            <input type="submit" name="go" value="Join" class="submit"  style="font-family:Arial,Helvetica,sans-serif; font-size:14px;"/>
            <input type="hidden" name="llr" value="nfon6tjab"/>
            <input type="hidden" name="m" value="1109843687597"/>
            <input type="hidden" name="p" value="oi"/>
          </form>
        </div>
        { /*  END: Constant Contact Bubble Opt-in Email List Form */ }

        { /* BEGIN: SafeSubscribe */ }
        <div style="padding-top:5px;">
          <img style="width: 168px;" src="https://imgssl.constantcontact.com/ui/images1/safe_subscribe_logo.gif" border="0" width="168" height="14" alt=""/>
        </div>
        { /* END: SafeSubscribe */ }
      </div>
		);
	}
}
