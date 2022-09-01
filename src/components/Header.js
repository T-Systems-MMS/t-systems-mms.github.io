
import T_Systems_MMS_Logo from "../images/T_Systems_MMS_Logo.svg";

export default function Header() {
  return (
    <div class="flex">
        <div class="flex-none">
            <scale-app-header class="header" claim-lang="en" logo-title="T-Systems Logo" addon-navigation='[{&quot;name&quot;:&quot;Our Projects&quot;,&quot;id&quot;:&quot;Carousell&quot;,&quot;href&quot;:&quot;#carousell&quot;},{&quot;name&quot;:&quot;Contact&quot;,&quot;id&quot;:&quot;Contact&quot;,&quot;href&quot;:&quot;#contact&quot;}]'>
              <div slot="logo">
                <img src={T_Systems_MMS_Logo} class="logo"/>
              </div>
            </scale-app-header>
        </div>
    </div>
  );
}
