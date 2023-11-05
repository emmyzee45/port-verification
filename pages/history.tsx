import React from 'react';

const Payments: React.FC = () => {
  return (
    <div className="content">
                <div className="card mb-3">
                    <div className="card-body pt-0">
                        <div className="container-fluid">
                            <style>
                                .country-active,
                                .state-active {
                                    background: #0d6efd;
                                    color: #ffffff;
                                }
                            </style>
                            <div className="row">

                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-10">
                                    <div className="d-flex align-items-start mt-2 mb-2" id="v-pills-tabs">
                                        <div className="nav flex-column nav-pills countries" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                            <button onClick="refresh('USA', 'empty'); setInactiveRegions(); zipArea('on');" className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-usa" type="button" role="tab" aria-controls="v-pills-usa" aria-selected="true">USA <span>21953</span></button>
                                            <button onclick="refresh('America', 'empty'); setInactiveRegions(); zipArea();" className="nav-link" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-america" type="button" role="tab" aria-controls="v-pills-america" aria-selected="true">America <span>3925</span></button>
                                            <button onclick="refresh('Europe', 'empty'); setInactiveRegions(); zipArea();" className="nav-link" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-europe" type="button" role="tab" aria-controls="v-pills-europe" aria-selected="true">Europe <span>6726</span></button>
                                            <button onclick="refresh('AU,Oceania', 'empty'); setInactiveRegions(); zipArea();" className="nav-link" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-auoceania" type="button" role="tab" aria-controls="v-pills-au,oceania" aria-selected="true">AU,Oceania <span>513</span></button>
                                            <button onclick="refresh('Asia', 'empty'); setInactiveRegions(); zipArea();" className="nav-link" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-asia" type="button" role="tab" aria-controls="v-pills-asia" aria-selected="true">Asia <span>3427</span></button>
                                            <button onclick="refresh('Africa', 'empty'); setInactiveRegions(); zipArea();" className="nav-link" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-africa" type="button" role="tab" aria-controls="v-pills-africa" aria-selected="true">Africa <span>615</span></button>
                                        </div>
                                        <div className="col">
                                            <div className="tab-content" id="v-pills-tabContent">
                                                <div className="tab-pane fade active show" id="v-pills-usa" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                                    <div onclick="refresh('USA', 'AK'); setActiveCountryState(this);" className="state" data-cnt="8">AK - 8</div>
                                                    <div onclick="refresh('USA', 'AL'); setActiveCountryState(this);" className="state" data-cnt="210">AL - 210</div>
                                                    <div onclick="refresh('USA', 'AR'); setActiveCountryState(this);" className="state" data-cnt="39">AR - 39</div>
                                                    <div onclick="refresh('USA', 'AZ'); setActiveCountryState(this);" className="state" data-cnt="945">AZ - 945</div>
                                                    <div onclick="refresh('USA', 'CA'); setActiveCountryState(this);" className="state" data-cnt="2588">CA - 2588</div>
                                                    <div onclick="refresh('USA', 'CO'); setActiveCountryState(this);" className="state" data-cnt="191">CO - 191</div>
                                                    <div onclick="refresh('USA', 'CT'); setActiveCountryState(this);" className="state" data-cnt="223">CT - 223</div>
                                                    <div onclick="refresh('USA', 'DC'); setActiveCountryState(this);" className="state" data-cnt="51">DC - 51</div>
                                                    <div onclick="refresh('USA', 'DE'); setActiveCountryState(this);" className="state" data-cnt="29">DE - 29</div>
                                                    <div onclick="refresh('USA', 'FL'); setActiveCountryState(this);" className="state" data-cnt="1049">FL - 1049</div>
                                                    <div onclick="refresh('USA', 'GA'); setActiveCountryState(this);" className="state" data-cnt="747">GA - 747</div>
                                                    <div onclick="refresh('USA', 'HI'); setActiveCountryState(this);" className="state" data-cnt="113">HI - 113</div>
                                                    <div onclick="refresh('USA', 'IA'); setActiveCountryState(this);" className="state" data-cnt="519">IA - 519</div>
                                                    <div onclick="refresh('USA', 'ID'); setActiveCountryState(this);" className="state" data-cnt="183">ID - 183</div>
                                                    <div onclick="refresh('USA', 'IL'); setActiveCountryState(this);" className="state" data-cnt="422">IL - 422</div>
                                                    <div onclick="refresh('USA', 'IN'); setActiveCountryState(this);" className="state" data-cnt="278">IN - 278</div>
                                                    <div onclick="refresh('USA', 'KS'); setActiveCountryState(this);" className="state" data-cnt="170">KS - 170</div>
                                                    <div onclick="refresh('USA', 'KY'); setActiveCountryState(this);" className="state" data-cnt="92">KY - 92</div>
                                                    <div onclick="refresh('USA', 'LA'); setActiveCountryState(this);" className="state" data-cnt="130">LA - 130</div>
                                                    <div onclick="refresh('USA', 'MA'); setActiveCountryState(this);" className="state" data-cnt="199">MA - 199</div>
                                                    <div onclick="refresh('USA', 'MD'); setActiveCountryState(this);" className="state" data-cnt="223">MD - 223</div>
                                                    <div onclick="refresh('USA', 'ME'); setActiveCountryState(this);" className="state" data-cnt="385">ME - 385</div>
                                                    <div onclick="refresh('USA', 'MI'); setActiveCountryState(this);" className="state" data-cnt="748">MI - 748</div>
                                                    <div onclick="refresh('USA', 'MN'); setActiveCountryState(this);" className="state" data-cnt="392">MN - 392</div>
                                                    <div onclick="refresh('USA', 'MO'); setActiveCountryState(this);" className="state" data-cnt="190">MO - 190</div>
                                                    <div onclick="refresh('USA', 'MS'); setActiveCountryState(this);" className="state" data-cnt="70">MS - 70</div>
                                                    <div onclick="refresh('USA', 'MT'); setActiveCountryState(this);" className="state" data-cnt="27">MT - 27</div>
                                                    <div onclick="refresh('USA', 'NC'); setActiveCountryState(this);" className="state" data-cnt="446">NC - 446</div>
                                                    <div onclick="refresh('USA', 'ND'); setActiveCountryState(this);" className="state" data-cnt="38">ND - 38</div>
                                                    <div onclick="refresh('USA', 'NE'); setActiveCountryState(this);" className="state" data-cnt="64">NE - 64</div>
                                                    <div onclick="refresh('USA', 'NH'); setActiveCountryState(this);" className="state" data-cnt="351">NH - 351</div>
                                                    <div onclick="refresh('USA', 'NJ'); setActiveCountryState(this);" className="state" data-cnt="431">NJ - 431</div>
                                                    <div onclick="refresh('USA', 'NM'); setActiveCountryState(this);" className="state" data-cnt="27">NM - 27</div>
                                                    <div onclick="refresh('USA', 'NV'); setActiveCountryState(this);" className="state" data-cnt="190">NV - 190</div>
                                                    <div onclick="refresh('USA', 'NY'); setActiveCountryState(this);" className="state" data-cnt="879">NY - 879</div>
                                                    <div onclick="refresh('USA', 'OH'); setActiveCountryState(this);" className="state" data-cnt="454">OH - 454</div>
                                                    <div onclick="refresh('USA', 'OK'); setActiveCountryState(this);" className="state" data-cnt="283">OK - 283</div>
                                                    <div onclick="refresh('USA', 'OR'); setActiveCountryState(this);" className="state" data-cnt="125">OR - 125</div>
                                                    <div onclick="refresh('USA', 'PA'); setActiveCountryState(this);" className="state" data-cnt="621">PA - 621</div>
                                                    <div onclick="refresh('USA', 'RI'); setActiveCountryState(this);" className="state" data-cnt="89">RI - 89</div>
                                                    <div onclick="refresh('USA', 'SC'); setActiveCountryState(this);" className="state" data-cnt="2275">SC - 2275</div>
                                                    <div onclick="refresh('USA', 'SD'); setActiveCountryState(this);" className="state" data-cnt="42">SD - 42</div>
                                                    <div onclick="refresh('USA', 'TN'); setActiveCountryState(this);" className="state" data-cnt="2047">TN - 2047</div>
                                                    <div onclick="refresh('USA', 'TX'); setActiveCountryState(this);" className="state" data-cnt="1293">TX - 1293</div>
                                                    <div onclick="refresh('USA', 'UN'); setActiveCountryState(this);" className="state" data-cnt="12">UN - 12</div>
                                                    <div onclick="refresh('USA', 'UT'); setActiveCountryState(this);" className="state" data-cnt="430">UT - 430</div>
                                                    <div onclick="refresh('USA', 'VA'); setActiveCountryState(this);" className="state" data-cnt="809">VA - 809</div>
                                                    <div onclick="refresh('USA', 'VT'); setActiveCountryState(this);" className="state" data-cnt="252">VT - 252</div>
                                                    <div onclick="refresh('USA', 'WA'); setActiveCountryState(this);" className="state" data-cnt="248">WA - 248</div>
                                                    <div onclick="refresh('USA', 'WI'); setActiveCountryState(this);" className="state" data-cnt="231">WI - 231</div>
                                                    <div onclick="refresh('USA', 'WV'); setActiveCountryState(this);" className="state" data-cnt="33">WV - 33</div>
                                                    <div onclick="refresh('USA', 'WY'); setActiveCountryState(this);" className="state" data-cnt="62">WY - 62</div>
                                                </div>
                                                <div className="tab-pane fade" id="v-pills-america" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                                    <div onclick="refresh('America', 'AG'); setActiveCountryState(this);" className="inline_ country" data-cnt="1">
                                                        <div className="pull-left flag flag-ag" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Antigua - 1</div>
                                                    </div>
                                                    <div onclick="refresh('America', 'AR'); setActiveCountryState(this);" className="inline_ country" data-cnt="62">
                                                        <div className="pull-left flag flag-ar" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Argentina - 62</div>
                                                    </div>
                                                    <div onclick="refresh('America', 'AW'); setActiveCountryState(this);" className="inline_ country" data-cnt="3">
                                                        <div className="pull-left flag flag-aw" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Aruba - 3</div>
                                                    </div>
                                                    <div onclick="refresh('America', 'BB'); setActiveCountryState(this);" className="inline_ country" data-cnt="3">
                                                        <div className="pull-left flag flag-bb" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Barbados - 3</div>
                                                    </div>
                                                    <div onclick="refresh('America', 'BM'); setActiveCountryState(this);" className="inline_ country" data-cnt="1">
                                                        <div className="pull-left flag flag-bm" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Bermuda - 1</div>
                                                    </div>
                                                    <div onclick="refresh('America', 'BO'); setActiveCountryState(this);" className="inline_ country" data-cnt="6">
                                                        <div className="pull-left flag flag-bo" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Bolivia - 6</div>
                                                    </div>
                                                    <div onclick="refresh('America', 'BR'); setActiveCountryState(this);" className="inline_ country" data-cnt="179">
                                                        <div className="pull-left flag flag-br" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Brazil - 179</div>
                                                    </div>
                                                    <div onclick="refresh('America', 'BS'); setActiveCountryState(this);" className="inline_ country" data-cnt="43">
                                                        <div className="pull-left flag flag-bs" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Bahamas - 43</div>
                                                    </div>
                                                    <div onclick="refresh('America', 'BZ'); setActiveCountryState(this);" className="inline_ country" data-cnt="6">
                                                        <div className="pull-left flag flag-bz" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Belize - 6</div>
                                                    </div>
                                                    <div onclick="refresh('America', 'CA'); setActiveCountryState(this);" className="inline_ country" data-cnt="3219">
                                                        <div className="pull-left flag flag-ca" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Canada - 3219</div>
                                                    </div>
                                                    <div onclick="refresh('America', 'CL'); setActiveCountryState(this);" className="inline_ country" data-cnt="48">
                                                        <div className="pull-left flag flag-cl" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Chile - 48</div>
                                                    </div>
                                                    <div onclick="refresh('America', 'CO'); setActiveCountryState(this);" className="inline_ country" data-cnt="55">
                                                        <div className="pull-left flag flag-co" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Colombia - 55</div>
                                                    </div>
                                                    <div onclick="refresh('America', 'CR'); setActiveCountryState(this);" className="inline_ country" data-cnt="11">
                                                        <div className="pull-left flag flag-cr" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Costa - 11</div>
                                                    </div>
                                                    <div onclick="refresh('America', 'CU'); setActiveCountryState(this);" className="inline_ country" data-cnt="2">
                                                        <div className="pull-left flag flag-cu" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Cuba - 2</div>
                                                    </div>
                                                    <div onclick="refresh('America', 'DM'); setActiveCountryState(this);" className="inline_ country" data-cnt="1">
                                                        <div className="pull-left flag flag-dm" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Dominica - 1</div>
                                                    </div>
                                                    <div onclick="refresh('America', 'DO'); setActiveCountryState(this);" className="inline_ country" data-cnt="5">
                                                        <div className="pull-left flag flag-do" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Dom. Rep. - 5</div>
                                                    </div>
                                                    <div onclick="refresh('America', 'EC'); setActiveCountryState(this);" className="inline_ country" data-cnt="15">
                                                        <div className="pull-left flag flag-ec" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Ecuador - 15</div>
                                                    </div>
                                                    <div onclick="refresh('America', 'GT'); setActiveCountryState(this);" className="inline_ country" data-cnt="1">
                                                        <div className="pull-left flag flag-gt" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Guatemala - 1</div>
                                                    </div>
                                                    <div onclick="refresh('America', 'GY'); setActiveCountryState(this);" className="inline_ country" data-cnt="1">
                                                        <div className="pull-left flag flag-gy" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Guyana - 1</div>
                                                    </div>
                                                    <div onclick="refresh('America', 'HN'); setActiveCountryState(this);" className="inline_ country" data-cnt="3">
                                                        <div className="pull-left flag flag-hn" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Honduras - 3</div>
                                                    </div>
                                                    <div onclick="refresh('America', 'HT'); setActiveCountryState(this);" className="inline_ country" data-cnt="7">
                                                        <div className="pull-left flag flag-ht" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Haiti - 7</div>
                                                    </div>
                                                    <div onclick="refresh('America', 'JM'); setActiveCountryState(this);" className="inline_ country" data-cnt="52">
                                                        <div className="pull-left flag flag-jm" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Jamaica - 52</div>
                                                    </div>
                                                    <div onclick="refresh('America', 'KY'); setActiveCountryState(this);" className="inline_ country" data-cnt="1">
                                                        <div className="pull-left flag flag-ky" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Cayman - 1</div>
                                                    </div>
                                                    <div onclick="refresh('America', 'MX'); setActiveCountryState(this);" className="inline_ country" data-cnt="92">
                                                        <div className="pull-left flag flag-mx" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Mexico - 92</div>
                                                    </div>
                                                    <div onclick="refresh('America', 'NI'); setActiveCountryState(this);" className="inline_ country" data-cnt="4">
                                                        <div className="pull-left flag flag-ni" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Nicaragua - 4</div>
                                                    </div>
                                                    <div onclick="refresh('America', 'PA'); setActiveCountryState(this);" className="inline_ country" data-cnt="4">
                                                        <div className="pull-left flag flag-pa" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Panama - 4</div>
                                                    </div>
                                                    <div onclick="refresh('America', 'PE'); setActiveCountryState(this);" className="inline_ country" data-cnt="8">
                                                        <div className="pull-left flag flag-pe" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Peru - 8</div>
                                                    </div>
                                                    <div onclick="refresh('America', 'PR'); setActiveCountryState(this);" className="inline_ country" data-cnt="39">
                                                        <div className="pull-left flag flag-pr" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Puerto R. - 39</div>
                                                    </div>
                                                    <div onclick="refresh('America', 'PY'); setActiveCountryState(this);" className="inline_ country" data-cnt="4">
                                                        <div className="pull-left flag flag-py" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Paraguay - 4</div>
                                                    </div>
                                                    <div onclick="refresh('America', 'SR'); setActiveCountryState(this);" className="inline_ country" data-cnt="3">
                                                        <div className="pull-left flag flag-sr" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Suriname - 3</div>
                                                    </div>
                                                    <div onclick="refresh('America', 'SV'); setActiveCountryState(this);" className="inline_ country" data-cnt="3">
                                                        <div className="pull-left flag flag-sv" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Salvador - 3</div>
                                                    </div>
                                                    <div onclick="refresh('America', 'TT'); setActiveCountryState(this);" className="inline_ country" data-cnt="23">
                                                        <div className="pull-left flag flag-tt" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Trinidad - 23</div>
                                                    </div>
                                                    <div onclick="refresh('America', 'UY'); setActiveCountryState(this);" className="inline_ country" data-cnt="7">
                                                        <div className="pull-left flag flag-uy" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Uruguay - 7</div>
                                                    </div>
                                                    <div onclick="refresh('America', 'VC'); setActiveCountryState(this);" className="inline_ country" data-cnt="1">
                                                        <div className="pull-left flag flag-vc" style="margin-top:3px;"></div>
                                                        <div className="inner-country">S. Vincent - 1</div>
                                                    </div>
                                                    <div onclick="refresh('America', 'VE'); setActiveCountryState(this);" className="inline_ country" data-cnt="11">
                                                        <div className="pull-left flag flag-ve" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Venezuela - 11</div>
                                                    </div>
                                                    <div onclick="refresh('America', 'VG'); setActiveCountryState(this);" className="inline_ country" data-cnt="1">
                                                        <div className="pull-left flag flag-vg" style="margin-top:3px;"></div>
                                                        <div className="inner-country">B.V.I. - 1</div>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="v-pills-europe" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                                    <div onclick="refresh('Europe', 'AL'); setActiveCountryState(this);" className="inline_ country" data-cnt="4">
                                                        <div className="pull-left flag flag-al" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Albania - 4</div>
                                                    </div>
                                                    <div onclick="refresh('Europe', 'AM'); setActiveCountryState(this);" className="inline_ country" data-cnt="4">
                                                        <div className="pull-left flag flag-am" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Armenia - 4</div>
                                                    </div>
                                                    <div onclick="refresh('Europe', 'AT'); setActiveCountryState(this);" className="inline_ country" data-cnt="100">
                                                        <div className="pull-left flag flag-at" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Austria - 100</div>
                                                    </div>
                                                    <div onclick="refresh('Europe', 'AZ'); setActiveCountryState(this);" className="inline_ country" data-cnt="2">
                                                        <div className="pull-left flag flag-az" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Azerbaijan - 2</div>
                                                    </div>
                                                    <div onclick="refresh('Europe', 'BA'); setActiveCountryState(this);" className="inline_ country" data-cnt="4">
                                                        <div className="pull-left flag flag-ba" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Bosnia - 4</div>
                                                    </div>
                                                    <div onclick="refresh('Europe', 'BE'); setActiveCountryState(this);" className="inline_ country" data-cnt="113">
                                                        <div className="pull-left flag flag-be" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Belgium - 113</div>
                                                    </div>
                                                    <div onclick="refresh('Europe', 'BG'); setActiveCountryState(this);" className="inline_ country" data-cnt="56">
                                                        <div className="pull-left flag flag-bg" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Bulgaria - 56</div>
                                                    </div>
                                                    <div onclick="refresh('Europe', 'BY'); setActiveCountryState(this);" className="inline_ country" data-cnt="33">
                                                        <div className="pull-left flag flag-by" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Belarus - 33</div>
                                                    </div>
                                                    <div onclick="refresh('Europe', 'CH'); setActiveCountryState(this);" className="inline_ country" data-cnt="57">
                                                        <div className="pull-left flag flag-ch" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Switzerland - 57</div>
                                                    </div>
                                                    <div onclick="refresh('Europe', 'CY'); setActiveCountryState(this);" className="inline_ country" data-cnt="11">
                                                        <div className="pull-left flag flag-cy" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Cyprus - 11</div>
                                                    </div>
                                                    <div onclick="refresh('Europe', 'CZ'); setActiveCountryState(this);" className="inline_ country" data-cnt="130">
                                                        <div className="pull-left flag flag-cz" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Czech - 130</div>
                                                    </div>
                                                    <div onclick="refresh('Europe', 'DE'); setActiveCountryState(this);" className="inline_ country" data-cnt="1013">
                                                        <div className="pull-left flag flag-de" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Germany - 1013</div>
                                                    </div>
                                                    <div onclick="refresh('Europe', 'DK'); setActiveCountryState(this);" className="inline_ country" data-cnt="17">
                                                        <div className="pull-left flag flag-dk" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Denmark - 17</div>
                                                    </div>
                                                    <div onclick="refresh('Europe', 'EE'); setActiveCountryState(this);" className="inline_ country" data-cnt="10">
                                                        <div className="pull-left flag flag-ee" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Estonia - 10</div>
                                                    </div>
                                                    <div onclick="refresh('Europe', 'ES'); setActiveCountryState(this);" className="inline_ country" data-cnt="143">
                                                        <div className="pull-left flag flag-es" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Spain - 143</div>
                                                    </div>
                                                    <div onclick="refresh('Europe', 'FI'); setActiveCountryState(this);" className="inline_ country" data-cnt="82">
                                                        <div className="pull-left flag flag-fi" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Finland - 82</div>
                                                    </div>
                                                    <div onclick="refresh('Europe', 'FR'); setActiveCountryState(this);" className="inline_ country" data-cnt="745">
                                                        <div className="pull-left flag flag-fr" style="margin-top:3px;"></div>
                                                        <div className="inner-country">France - 745</div>
                                                    </div>
                                                    <div onclick="refresh('Europe', 'GB'); setActiveCountryState(this);" className="inline_ country" data-cnt="2038">
                                                        <div className="pull-left flag flag-gb" style="margin-top:3px;"></div>
                                                        <div className="inner-country">England - 2038</div>
                                                    </div>
                                                    <div onclick="refresh('Europe', 'GE'); setActiveCountryState(this);" className="inline_ country" data-cnt="17">
                                                        <div className="pull-left flag flag-ge" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Georgia - 17</div>
                                                    </div>
                                                    <div onclick="refresh('Europe', 'GR'); setActiveCountryState(this);" className="inline_ country" data-cnt="16">
                                                        <div className="pull-left flag flag-gr" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Greece - 16</div>
                                                    </div>
                                                    <div onclick="refresh('Europe', 'HR'); setActiveCountryState(this);" className="inline_ country" data-cnt="17">
                                                        <div className="pull-left flag flag-hr" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Croatia - 17</div>
                                                    </div>
                                                    <div onclick="refresh('Europe', 'HU'); setActiveCountryState(this);" className="inline_ country" data-cnt="75">
                                                        <div className="pull-left flag flag-hu" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Hungary - 75</div>
                                                    </div>
                                                    <div onclick="refresh('Europe', 'IE'); setActiveCountryState(this);" className="inline_ country" data-cnt="43">
                                                        <div className="pull-left flag flag-ie" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Ireland - 43</div>
                                                    </div>
                                                    <div onclick="refresh('Europe', 'IL'); setActiveCountryState(this);" className="inline_ country" data-cnt="75">
                                                        <div className="pull-left flag flag-il" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Israel - 75</div>
                                                    </div>
                                                    <div onclick="refresh('Europe', 'IM'); setActiveCountryState(this);" className="inline_ country" data-cnt="2">
                                                        <div className="pull-left flag flag-im" style="margin-top:3px;"></div>
                                                        <div className="inner-country">I. of Man - 2</div>
                                                    </div>
                                                    <div onclick="refresh('Europe', 'IS'); setActiveCountryState(this);" className="inline_ country" data-cnt="8">
                                                        <div className="pull-left flag flag-is" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Iceland - 8</div>
                                                    </div>
                                                    <div onclick="refresh('Europe', 'IT'); setActiveCountryState(this);" className="inline_ country" data-cnt="523">
                                                        <div className="pull-left flag flag-it" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Italy - 523</div>
                                                    </div>
                                                    <div onclick="refresh('Europe', 'JE'); setActiveCountryState(this);" className="inline_ country" data-cnt="1">
                                                        <div className="pull-left flag flag-je" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Jersey - 1</div>
                                                    </div>
                                                    <div onclick="refresh('Europe', 'KZ'); setActiveCountryState(this);" className="inline_ country" data-cnt="6">
                                                        <div className="pull-left flag flag-kz" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Kazakhstan - 6</div>
                                                    </div>
                                                    <div onclick="refresh('Europe', 'LI'); setActiveCountryState(this);" className="inline_ country" data-cnt="1">
                                                        <div className="pull-left flag flag-li" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Liecht. - 1</div>
                                                    </div>
                                                    <div onclick="refresh('Europe', 'LT'); setActiveCountryState(this);" className="inline_ country" data-cnt="28">
                                                        <div className="pull-left flag flag-lt" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Lithuania - 28</div>
                                                    </div>
                                                    <div onclick="refresh('Europe', 'LU'); setActiveCountryState(this);" className="inline_ country" data-cnt="4">
                                                        <div className="pull-left flag flag-lu" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Luxembourg - 4</div>
                                                    </div>
                                                    <div onclick="refresh('Europe', 'LV'); setActiveCountryState(this);" className="inline_ country" data-cnt="29">
                                                        <div className="pull-left flag flag-lv" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Latvia - 29</div>
                                                    </div>
                                                    <div onclick="refresh('Europe', 'MD'); setActiveCountryState(this);" className="inline_ country" data-cnt="11">
                                                        <div className="pull-left flag flag-md" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Moldova - 11</div>
                                                    </div>
                                                    <div onclick="refresh('Europe', 'ME'); setActiveCountryState(this);" className="inline_ country" data-cnt="1">
                                                        <div className="pull-left flag flag-me" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Montenegro - 1</div>
                                                    </div>
                                                    <div onclick="refresh('Europe', 'MK'); setActiveCountryState(this);" className="inline_ country" data-cnt="8">
                                                        <div className="pull-left flag flag-mk" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Macedonia - 8</div>
                                                    </div>
                                                    <div onclick="refresh('Europe', 'MT'); setActiveCountryState(this);" className="inline_ country" data-cnt="7">
                                                        <div className="pull-left flag flag-mt" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Malta - 7</div>
                                                    </div>
                                                    <div onclick="refresh('Europe', 'NL'); setActiveCountryState(this);" className="inline_ country" data-cnt="533">
                                                        <div className="pull-left flag flag-nl" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Netherlands - 533</div>
                                                    </div>
                                                    <div onclick="refresh('Europe', 'NO'); setActiveCountryState(this);" className="inline_ country" data-cnt="12">
                                                        <div className="pull-left flag flag-no" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Norway - 12</div>
                                                    </div>
                                                    <div onclick="refresh('Europe', 'PL'); setActiveCountryState(this);" className="inline_ country" data-cnt="211">
                                                        <div className="pull-left flag flag-pl" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Poland - 211</div>
                                                    </div>
                                                    <div onclick="refresh('Europe', 'PT'); setActiveCountryState(this);" className="inline_ country" data-cnt="39">
                                                        <div className="pull-left flag flag-pt" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Portugal - 39</div>
                                                    </div>
                                                    <div onclick="refresh('Europe', 'RO'); setActiveCountryState(this);" className="inline_ country" data-cnt="86">
                                                        <div className="pull-left flag flag-ro" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Romania - 86</div>
                                                    </div>
                                                    <div onclick="refresh('Europe', 'RS'); setActiveCountryState(this);" className="inline_ country" data-cnt="21">
                                                        <div className="pull-left flag flag-rs" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Serbia - 21</div>
                                                    </div>
                                                    <div onclick="refresh('Europe', 'RU'); setActiveCountryState(this);" className="inline_ country" data-cnt="254">
                                                        <div className="pull-left flag flag-ru" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Russia - 254</div>
                                                    </div>
                                                    <div onclick="refresh('Europe', 'SE'); setActiveCountryState(this);" className="inline_ country" data-cnt="50">
                                                        <div className="pull-left flag flag-se" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Sweden - 50</div>
                                                    </div>
                                                    <div onclick="refresh('Europe', 'SI'); setActiveCountryState(this);" className="inline_ country" data-cnt="9">
                                                        <div className="pull-left flag flag-si" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Slovenia - 9</div>
                                                    </div>
                                                    <div onclick="refresh('Europe', 'SK'); setActiveCountryState(this);" className="inline_ country" data-cnt="17">
                                                        <div className="pull-left flag flag-sk" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Slovakia - 17</div>
                                                    </div>
                                                    <div onclick="refresh('Europe', 'UA'); setActiveCountryState(this);" className="inline_ country" data-cnt="60">
                                                        <div className="pull-left flag flag-ua" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Ukraine - 60</div>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="v-pills-auoceania" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                                    <div onclick="refresh('AU,Oceania', 'AU'); setActiveCountryState(this);" className="inline_ country" data-cnt="461">
                                                        <div className="pull-left flag flag-au" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Australia - 461</div>
                                                    </div>
                                                    <div onclick="refresh('AU,Oceania', 'BQ'); setActiveCountryState(this);" className="inline_ country" data-cnt="2">
                                                        <div className="pull-left flag flag-bq" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Bonaire - 2</div>
                                                    </div>
                                                    <div onclick="refresh('AU,Oceania', 'FJ'); setActiveCountryState(this);" className="inline_ country" data-cnt="7">
                                                        <div className="pull-left flag flag-fj" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Fiji - 7</div>
                                                    </div>
                                                    <div onclick="refresh('AU,Oceania', 'FM'); setActiveCountryState(this);" className="inline_ country" data-cnt="2">
                                                        <div className="pull-left flag flag-fm" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Micronesia - 2</div>
                                                    </div>
                                                    <div onclick="refresh('AU,Oceania', 'GQ'); setActiveCountryState(this);" className="inline_ country" data-cnt="1">
                                                        <div className="pull-left flag flag-gq" style="margin-top:3px;"></div>
                                                        <div className="inner-country">E. Guinea - 1</div>
                                                    </div>
                                                    <div onclick="refresh('AU,Oceania', 'GU'); setActiveCountryState(this);" className="inline_ country" data-cnt="2">
                                                        <div className="pull-left flag flag-gu" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Guam - 2</div>
                                                    </div>
                                                    <div onclick="refresh('AU,Oceania', 'GW'); setActiveCountryState(this);" className="inline_ country" data-cnt="2">
                                                        <div className="pull-left flag flag-gw" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Guinea-B. - 2</div>
                                                    </div>
                                                    <div onclick="refresh('AU,Oceania', 'MH'); setActiveCountryState(this);" className="inline_ country" data-cnt="1">
                                                        <div className="pull-left flag flag-mh" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Marshall - 1</div>
                                                    </div>
                                                    <div onclick="refresh('AU,Oceania', 'MP'); setActiveCountryState(this);" className="inline_ country" data-cnt="2">
                                                        <div className="pull-left flag flag-mp" style="margin-top:3px;"></div>
                                                        <div className="inner-country">N. Marina - 2</div>
                                                    </div>
                                                    <div onclick="refresh('AU,Oceania', 'NF'); setActiveCountryState(this);" className="inline_ country" data-cnt="2">
                                                        <div className="pull-left flag flag-nf" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Norfolk - 2</div>
                                                    </div>
                                                    <div onclick="refresh('AU,Oceania', 'NZ'); setActiveCountryState(this);" className="inline_ country" data-cnt="18">
                                                        <div className="pull-left flag flag-nz" style="margin-top:3px;"></div>
                                                        <div className="inner-country">N.Zealand - 18</div>
                                                    </div>
                                                    <div onclick="refresh('AU,Oceania', 'PF'); setActiveCountryState(this);" className="inline_ country" data-cnt="1">
                                                        <div className="pull-left flag flag-pf" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Fr. Pol. - 1</div>
                                                    </div>
                                                    <div onclick="refresh('AU,Oceania', 'PG'); setActiveCountryState(this);" className="inline_ country" data-cnt="11">
                                                        <div className="pull-left flag flag-pg" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Papua - 11</div>
                                                    </div>
                                                    <div onclick="refresh('AU,Oceania', 'PW'); setActiveCountryState(this);" className="inline_ country" data-cnt="1">
                                                        <div className="pull-left flag flag-pw" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Palau - 1</div>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="v-pills-asia" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                                    <div onclick="refresh('Asia', 'AE'); setActiveCountryState(this);" className="inline_ country" data-cnt="18">
                                                        <div className="pull-left flag flag-ae" style="margin-top:3px;"></div>
                                                        <div className="inner-country">UAE - 18</div>
                                                    </div>
                                                    <div onclick="refresh('Asia', 'AF'); setActiveCountryState(this);" className="inline_ country" data-cnt="44">
                                                        <div className="pull-left flag flag-af" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Afghanistan - 44</div>
                                                    </div>
                                                    <div onclick="refresh('Asia', 'BD'); setActiveCountryState(this);" className="inline_ country" data-cnt="62">
                                                        <div className="pull-left flag flag-bd" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Bangladesh - 62</div>
                                                    </div>
                                                    <div onclick="refresh('Asia', 'BH'); setActiveCountryState(this);" className="inline_ country" data-cnt="1">
                                                        <div className="pull-left flag flag-bh" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Bahrain - 1</div>
                                                    </div>
                                                    <div onclick="refresh('Asia', 'BN'); setActiveCountryState(this);" className="inline_ country" data-cnt="1">
                                                        <div className="pull-left flag flag-bn" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Brunei - 1</div>
                                                    </div>
                                                    <div onclick="refresh('Asia', 'BT'); setActiveCountryState(this);" className="inline_ country" data-cnt="1">
                                                        <div className="pull-left flag flag-bt" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Bhutan - 1</div>
                                                    </div>
                                                    <div onclick="refresh('Asia', 'CN'); setActiveCountryState(this);" className="inline_ country" data-cnt="53">
                                                        <div className="pull-left flag flag-cn" style="margin-top:3px;"></div>
                                                        <div className="inner-country">China - 53</div>
                                                    </div>
                                                    <div onclick="refresh('Asia', 'HK'); setActiveCountryState(this);" className="inline_ country" data-cnt="77">
                                                        <div className="pull-left flag flag-hk" style="margin-top:3px;"></div>
                                                        <div className="inner-country">HongKong - 77</div>
                                                    </div>
                                                    <div onclick="refresh('Asia', 'ID'); setActiveCountryState(this);" className="inline_ country" data-cnt="160">
                                                        <div className="pull-left flag flag-id" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Indonesia - 160</div>
                                                    </div>
                                                    <div onclick="refresh('Asia', 'IN'); setActiveCountryState(this);" className="inline_ country" data-cnt="636">
                                                        <div className="pull-left flag flag-in" style="margin-top:3px;"></div>
                                                        <div className="inner-country">India - 636</div>
                                                    </div>
                                                    <div onclick="refresh('Asia', 'IQ'); setActiveCountryState(this);" className="inline_ country" data-cnt="11">
                                                        <div className="pull-left flag flag-iq" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Iraq - 11</div>
                                                    </div>
                                                    <div onclick="refresh('Asia', 'IR'); setActiveCountryState(this);" className="inline_ country" data-cnt="152">
                                                        <div className="pull-left flag flag-ir" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Iran - 152</div>
                                                    </div>
                                                    <div onclick="refresh('Asia', 'JO'); setActiveCountryState(this);" className="inline_ country" data-cnt="1">
                                                        <div className="pull-left flag flag-jo" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Jordan - 1</div>
                                                    </div>
                                                    <div onclick="refresh('Asia', 'JP'); setActiveCountryState(this);" className="inline_ country" data-cnt="304">
                                                        <div className="pull-left flag flag-jp" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Japan - 304</div>
                                                    </div>
                                                    <div onclick="refresh('Asia', 'KG'); setActiveCountryState(this);" className="inline_ country" data-cnt="3">
                                                        <div className="pull-left flag flag-kg" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Kyrgyzstan - 3</div>
                                                    </div>
                                                    <div onclick="refresh('Asia', 'KH'); setActiveCountryState(this);" className="inline_ country" data-cnt="17">
                                                        <div className="pull-left flag flag-kh" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Cambodia - 17</div>
                                                    </div>
                                                    <div onclick="refresh('Asia', 'KR'); setActiveCountryState(this);" className="inline_ country" data-cnt="496">
                                                        <div className="pull-left flag flag-kr" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Korea - 496</div>
                                                    </div>
                                                    <div onclick="refresh('Asia', 'KW'); setActiveCountryState(this);" className="inline_ country" data-cnt="27">
                                                        <div className="pull-left flag flag-kw" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Kuwait - 27</div>
                                                    </div>
                                                    <div onclick="refresh('Asia', 'LA'); setActiveCountryState(this);" className="inline_ country" data-cnt="3">
                                                        <div className="pull-left flag flag-la" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Lao Rep. - 3</div>
                                                    </div>
                                                    <div onclick="refresh('Asia', 'LB'); setActiveCountryState(this);" className="inline_ country" data-cnt="12">
                                                        <div className="pull-left flag flag-lb" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Lebanon - 12</div>
                                                    </div>
                                                    <div onclick="refresh('Asia', 'LK'); setActiveCountryState(this);" className="inline_ country" data-cnt="17">
                                                        <div className="pull-left flag flag-lk" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Sri Lanka - 17</div>
                                                    </div>
                                                    <div onclick="refresh('Asia', 'MM'); setActiveCountryState(this);" className="inline_ country" data-cnt="6">
                                                        <div className="pull-left flag flag-mm" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Myanmar - 6</div>
                                                    </div>
                                                    <div onclick="refresh('Asia', 'MN'); setActiveCountryState(this);" className="inline_ country" data-cnt="7">
                                                        <div className="pull-left flag flag-mn" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Mongolia - 7</div>
                                                    </div>
                                                    <div onclick="refresh('Asia', 'MO'); setActiveCountryState(this);" className="inline_ country" data-cnt="3">
                                                        <div className="pull-left flag flag-mo" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Macao - 3</div>
                                                    </div>
                                                    <div onclick="refresh('Asia', 'MV'); setActiveCountryState(this);" className="inline_ country" data-cnt="2">
                                                        <div className="pull-left flag flag-mv" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Maldives - 2</div>
                                                    </div>
                                                    <div onclick="refresh('Asia', 'MY'); setActiveCountryState(this);" className="inline_ country" data-cnt="83">
                                                        <div className="pull-left flag flag-my" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Malaysia - 83</div>
                                                    </div>
                                                    <div onclick="refresh('Asia', 'NP'); setActiveCountryState(this);" className="inline_ country" data-cnt="44">
                                                        <div className="pull-left flag flag-np" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Nepal - 44</div>
                                                    </div>
                                                    <div onclick="refresh('Asia', 'OM'); setActiveCountryState(this);" className="inline_ country" data-cnt="7">
                                                        <div className="pull-left flag flag-om" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Oman - 7</div>
                                                    </div>
                                                    <div onclick="refresh('Asia', 'PH'); setActiveCountryState(this);" className="inline_ country" data-cnt="52">
                                                        <div className="pull-left flag flag-ph" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Philippines - 52</div>
                                                    </div>
                                                    <div onclick="refresh('Asia', 'PK'); setActiveCountryState(this);" className="inline_ country" data-cnt="105">
                                                        <div className="pull-left flag flag-pk" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Pakistan - 105</div>
                                                    </div>
                                                    <div onclick="refresh('Asia', 'PS'); setActiveCountryState(this);" className="inline_ country" data-cnt="3">
                                                        <div className="pull-left flag flag-ps" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Palestinian - 3</div>
                                                    </div>
                                                    <div onclick="refresh('Asia', 'QA'); setActiveCountryState(this);" className="inline_ country" data-cnt="9">
                                                        <div className="pull-left flag flag-qa" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Qatar - 9</div>
                                                    </div>
                                                    <div onclick="refresh('Asia', 'SA'); setActiveCountryState(this);" className="inline_ country" data-cnt="11">
                                                        <div className="pull-left flag flag-sa" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Saudi Arab - 11</div>
                                                    </div>
                                                    <div onclick="refresh('Asia', 'SG'); setActiveCountryState(this);" className="inline_ country" data-cnt="278">
                                                        <div className="pull-left flag flag-sg" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Singapore - 278</div>
                                                    </div>
                                                    <div onclick="refresh('Asia', 'SY'); setActiveCountryState(this);" className="inline_ country" data-cnt="1">
                                                        <div className="pull-left flag flag-sy" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Syrian - 1</div>
                                                    </div>
                                                    <div onclick="refresh('Asia', 'TH'); setActiveCountryState(this);" className="inline_ country" data-cnt="72">
                                                        <div className="pull-left flag flag-th" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Thailand - 72</div>
                                                    </div>
                                                    <div onclick="refresh('Asia', 'TR'); setActiveCountryState(this);" className="inline_ country" data-cnt="290">
                                                        <div className="pull-left flag flag-tr" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Turkey - 290</div>
                                                    </div>
                                                    <div onclick="refresh('Asia', 'TW'); setActiveCountryState(this);" className="inline_ country" data-cnt="100">
                                                        <div className="pull-left flag flag-tw" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Taiwan - 100</div>
                                                    </div>
                                                    <div onclick="refresh('Asia', 'UZ'); setActiveCountryState(this);" className="inline_ country" data-cnt="3">
                                                        <div className="pull-left flag flag-uz" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Uzbekistan - 3</div>
                                                    </div>
                                                    <div onclick="refresh('Asia', 'VN'); setActiveCountryState(this);" className="inline_ country" data-cnt="255">
                                                        <div className="pull-left flag flag-vn" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Viet Nam - 255</div>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="v-pills-africa" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                                    <div onclick="refresh('Africa', 'AO'); setActiveCountryState(this);" className="inline_ country" data-cnt="3">
                                                        <div className="pull-left flag flag-ao" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Angola - 3</div>
                                                    </div>
                                                    <div onclick="refresh('Africa', 'BF'); setActiveCountryState(this);" className="inline_ country" data-cnt="2">
                                                        <div className="pull-left flag flag-bf" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Burkina - 2</div>
                                                    </div>
                                                    <div onclick="refresh('Africa', 'BJ'); setActiveCountryState(this);" className="inline_ country" data-cnt="3">
                                                        <div className="pull-left flag flag-bj" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Benin - 3</div>
                                                    </div>
                                                    <div onclick="refresh('Africa', 'BW'); setActiveCountryState(this);" className="inline_ country" data-cnt="31">
                                                        <div className="pull-left flag flag-bw" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Botswana - 31</div>
                                                    </div>
                                                    <div onclick="refresh('Africa', 'CD'); setActiveCountryState(this);" className="inline_ country" data-cnt="5">
                                                        <div className="pull-left flag flag-cd" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Congo, - 5</div>
                                                    </div>
                                                    <div onclick="refresh('Africa', 'CG'); setActiveCountryState(this);" className="inline_ country" data-cnt="1">
                                                        <div className="pull-left flag flag-cg" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Congo - 1</div>
                                                    </div>
                                                    <div onclick="refresh('Africa', 'CI'); setActiveCountryState(this);" className="inline_ country" data-cnt="11">
                                                        <div className="pull-left flag flag-ci" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Cote - 11</div>
                                                    </div>
                                                    <div onclick="refresh('Africa', 'CM'); setActiveCountryState(this);" className="inline_ country" data-cnt="40">
                                                        <div className="pull-left flag flag-cm" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Cameroon - 40</div>
                                                    </div>
                                                    <div onclick="refresh('Africa', 'DZ'); setActiveCountryState(this);" className="inline_ country" data-cnt="7">
                                                        <div className="pull-left flag flag-dz" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Algeria - 7</div>
                                                    </div>
                                                    <div onclick="refresh('Africa', 'EG'); setActiveCountryState(this);" className="inline_ country" data-cnt="7">
                                                        <div className="pull-left flag flag-eg" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Egypt - 7</div>
                                                    </div>
                                                    <div onclick="refresh('Africa', 'ET'); setActiveCountryState(this);" className="inline_ country" data-cnt="14">
                                                        <div className="pull-left flag flag-et" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Ethiopia - 14</div>
                                                    </div>
                                                    <div onclick="refresh('Africa', 'GA'); setActiveCountryState(this);" className="inline_ country" data-cnt="4">
                                                        <div className="pull-left flag flag-ga" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Gabon - 4</div>
                                                    </div>
                                                    <div onclick="refresh('Africa', 'GH'); setActiveCountryState(this);" className="inline_ country" data-cnt="38">
                                                        <div className="pull-left flag flag-gh" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Ghana - 38</div>
                                                    </div>
                                                    <div onclick="refresh('Africa', 'GM'); setActiveCountryState(this);" className="inline_ country" data-cnt="1">
                                                        <div className="pull-left flag flag-gm" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Gambia - 1</div>
                                                    </div>
                                                    <div onclick="refresh('Africa', 'KE'); setActiveCountryState(this);" className="inline_ country" data-cnt="46">
                                                        <div className="pull-left flag flag-ke" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Kenya - 46</div>
                                                    </div>
                                                    <div onclick="refresh('Africa', 'LR'); setActiveCountryState(this);" className="inline_ country" data-cnt="1">
                                                        <div className="pull-left flag flag-lr" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Liberia - 1</div>
                                                    </div>
                                                    <div onclick="refresh('Africa', 'LS'); setActiveCountryState(this);" className="inline_ country" data-cnt="2">
                                                        <div className="pull-left flag flag-ls" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Lesotho - 2</div>
                                                    </div>
                                                    <div onclick="refresh('Africa', 'LY'); setActiveCountryState(this);" className="inline_ country" data-cnt="1">
                                                        <div className="pull-left flag flag-ly" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Libyan - 1</div>
                                                    </div>
                                                    <div onclick="refresh('Africa', 'MA'); setActiveCountryState(this);" className="inline_ country" data-cnt="9">
                                                        <div className="pull-left flag flag-ma" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Morocco - 9</div>
                                                    </div>
                                                    <div onclick="refresh('Africa', 'MG'); setActiveCountryState(this);" className="inline_ country" data-cnt="1">
                                                        <div className="pull-left flag flag-mg" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Madagascar - 1</div>
                                                    </div>
                                                    <div onclick="refresh('Africa', 'ML'); setActiveCountryState(this);" className="inline_ country" data-cnt="5">
                                                        <div className="pull-left flag flag-ml" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Mali - 5</div>
                                                    </div>
                                                    <div onclick="refresh('Africa', 'MU'); setActiveCountryState(this);" className="inline_ country" data-cnt="7">
                                                        <div className="pull-left flag flag-mu" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Mauritius - 7</div>
                                                    </div>
                                                    <div onclick="refresh('Africa', 'MW'); setActiveCountryState(this);" className="inline_ country" data-cnt="7">
                                                        <div className="pull-left flag flag-mw" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Malawi - 7</div>
                                                    </div>
                                                    <div onclick="refresh('Africa', 'MZ'); setActiveCountryState(this);" className="inline_ country" data-cnt="6">
                                                        <div className="pull-left flag flag-mz" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Mozambique - 6</div>
                                                    </div>
                                                    <div onclick="refresh('Africa', 'NA'); setActiveCountryState(this);" className="inline_ country" data-cnt="69">
                                                        <div className="pull-left flag flag-na" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Namibia - 69</div>
                                                    </div>
                                                    <div onclick="refresh('Africa', 'NE'); setActiveCountryState(this);" className="inline_ country" data-cnt="4">
                                                        <div className="pull-left flag flag-ne" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Niger - 4</div>
                                                    </div>
                                                    <div onclick="refresh('Africa', 'NG'); setActiveCountryState(this);" className="inline_ country" data-cnt="44">
                                                        <div className="pull-left flag flag-ng" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Nigeria - 44</div>
                                                    </div>
                                                    <div onclick="refresh('Africa', 'RW'); setActiveCountryState(this);" className="inline_ country" data-cnt="5">
                                                        <div className="pull-left flag flag-rw" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Rwanda - 5</div>
                                                    </div>
                                                    <div onclick="refresh('Africa', 'SD'); setActiveCountryState(this);" className="inline_ country" data-cnt="1">
                                                        <div className="pull-left flag flag-sd" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Sudan - 1</div>
                                                    </div>
                                                    <div onclick="refresh('Africa', 'SL'); setActiveCountryState(this);" className="inline_ country" data-cnt="2">
                                                        <div className="pull-left flag flag-sl" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Sierra - 2</div>
                                                    </div>
                                                    <div onclick="refresh('Africa', 'SN'); setActiveCountryState(this);" className="inline_ country" data-cnt="10">
                                                        <div className="pull-left flag flag-sn" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Senegal - 10</div>
                                                    </div>
                                                    <div onclick="refresh('Africa', 'SO'); setActiveCountryState(this);" className="inline_ country" data-cnt="2">
                                                        <div className="pull-left flag flag-so" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Somalia - 2</div>
                                                    </div>
                                                    <div onclick="refresh('Africa', 'SS'); setActiveCountryState(this);" className="inline_ country" data-cnt="1">
                                                        <div className="pull-left flag flag-ss" style="margin-top:3px;"></div>
                                                        <div className="inner-country">South Sudan - 1</div>
                                                    </div>
                                                    <div onclick="refresh('Africa', 'TG'); setActiveCountryState(this);" className="inline_ country" data-cnt="6">
                                                        <div className="pull-left flag flag-tg" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Togo - 6</div>
                                                    </div>
                                                    <div onclick="refresh('Africa', 'TN'); setActiveCountryState(this);" className="inline_ country" data-cnt="8">
                                                        <div className="pull-left flag flag-tn" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Tunisia - 8</div>
                                                    </div>
                                                    <div onclick="refresh('Africa', 'TZ'); setActiveCountryState(this);" className="inline_ country" data-cnt="22">
                                                        <div className="pull-left flag flag-tz" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Tanzania - 22</div>
                                                    </div>
                                                    <div onclick="refresh('Africa', 'UG'); setActiveCountryState(this);" className="inline_ country" data-cnt="43">
                                                        <div className="pull-left flag flag-ug" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Uganda - 43</div>
                                                    </div>
                                                    <div onclick="refresh('Africa', 'ZA'); setActiveCountryState(this);" className="inline_ country" data-cnt="98">
                                                        <div className="pull-left flag flag-za" style="margin-top:3px;"></div>
                                                        <div className="inner-country">S. Afr. - 98</div>
                                                    </div>
                                                    <div onclick="refresh('Africa', 'ZM'); setActiveCountryState(this);" className="inline_ country" data-cnt="36">
                                                        <div className="pull-left flag flag-zm" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Zambia - 36</div>
                                                    </div>
                                                    <div onclick="refresh('Africa', 'ZW'); setActiveCountryState(this);" className="inline_ country" data-cnt="12">
                                                        <div className="pull-left flag flag-zw" style="margin-top:3px;"></div>
                                                        <div className="inner-country">Zimbabwe - 12</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-2">
                                    <div className="filter mt-2 mb-2">
                                        <div className="col-filter">
                                            <div className="form-check">
                                                <input className="form-check-input" id="excludeUsedFilter" type="checkbox" value>
                                                <label className="form-check-label" for="excludeUsedFilter"> Exclude used proxies </label>
                                            </div>
                                        </div>
                                        <div className="col-filter">
                                            <div className="form-check">
                                                <input className="form-check-input" id="excludeBlacklistedFilter" type="checkbox" value>
                                                <label className="form-check-label" for="excludeBlacklistedFilter"> Exclude blacklisted proxies </label>
                                            </div>
                                        </div>
                                        <div className="col-filter">
                                            <div className="form-check">
                                                <input className="form-check-input" id="residentialFilter" type="checkbox" value>
                                                <label className="form-check-label" for="residentialFilter"> Residential only proxies </label>
                                            </div>
                                        </div>

                                        <div className="col-filter">
                                            <div className="form-check"><a href="#" onclick="resetFilters();">reset filters</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
            
                            <div className="row">
                                <div className="col-xl-10 col-sm-12  col-md-12 col-lg-12 col-xs-12">
                                    <div className="table-responsive scrollbar">
                                        <table className="items table table-hover table-sm" id="socks">
                                            <thead>
                                                <tr className="headers">
                                                    <th><a className="sort-link" href="#" onclick="setSort('ip');">IP </a></th>
                                                    <th><a id="s-domain" className="sort-link" href="#" onclick="setSort('domain');">DOMAIN </a></th>
                                                    <th><a className="sort-link" href="#" onclick="setSort('state');">STATE </a></th>
                                                    <th><a id="s-city" className="sort-link" href="#" onclick="setSort('city');">CITY </a></th>
                                                    <th><a id="s-isp" className="sort-link" href="#" onclick="setSort('isp');">ISP </a></th>
                                                    <th><a id="s-zip" className="sort-link" href="#" onclick="setSort('zip');">ZIP </a></th>
                                                    <th><a id="s-speed" className="sort-link" href="#" onclick="setSort('speed');">SPEED </a></th>
                                                    <th><a id="s-ping" className="sort-link" href="#" onclick="setSort('ping');">PING </a></th>
                                                    <th>TYPE <a href="/service-rules#section-7"><sup>?</sup></a></th>
                                                    <th><a id="s-added" className="sort-link" href="#" onclick="setSort('added');">ADDED </a></th>
                                                    <th>PRICE</th>
                                                </tr>
                                                <tr className="filters-header">
                                                    <td>
                                                        <button type="button" className="btn btn-secondary btn-sm show-filters">Filters</button>
                                                        <button type="button" className="btn btn-primary btn-sm view-cart-table ml-2"><i className="bi bi-cart-fill cart-icon"></i> Cart (<span className="cart-count"></span>)</button>
                                                    </td>
                                                </tr>
                                                <tr className="filters">
                                                    <th>
                                                        <div className="filter-container">
                                                            <input className="filterActiveSelector form-control form-control-sm" id="ipFilter" name placeholder="IP" type="text" value>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="filter-container">
                                                            <input className="filterActiveSelector form-control form-control-sm" id="domainFilter" maxlength="255" name placeholder="DOMAIN" type="text" value>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="filter-container">
                                                            <input className="filterActiveSelector form-control form-control-sm" id="stateFilter" maxlength="255" name placeholder="STATE" type="text" value>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="filter-container">
                                                            <input className="filterActiveSelector form-control form-control-sm" id="cityFilter" maxlength="50" name placeholder="CITY" type="text" value>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="filter-container">
                                                            <input className="filterActiveSelector form-control form-control-sm" id="ispFilter" maxlength="200" name placeholder="ISP" type="text" value>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div className="filter-container">
                                                            <input autocomplete="off" className="form-control ui-autocomplete-input form-control-sm" id="zipFilter" maxlength="30" name placeholder="ZIP" type="text" value>
                                                        </div>
                                                    </th>
                                                    <th>
                                                        <div id="areaFilterContainer" className="filter-container">
                                                            <select id="areaFilter" className="form-select form-select-sm"><option selected value="empty">Area: +0 Miles</option><option value="25">+25 Miles</option><option value="50">+50 Miles</option><option value="100">+100 Miles</option> </select>
                                                        </div>
                                                    </th>
                                                    <th>
                                                    </th>
                                                    <th>
                                                        <select id="typeValueFilter" className="form-select form-select-sm"><option selected value="empty">Any type</option><option value="ISP">ISP</option><option value="MOB">MOB</option><option value="DCH">DCH</option><option value="ISP/MOB">ISP/MOB</option><option value="COM">COM</option><option value="EDU">EDU</option><option value="CDN">CDN</option><option value="ORG">ORG</option><option value="GOV">GOV</option><option value="LIB">LIB</option> </select>
                                                    </th>
                                                    <th>
                                                        <select id="addedValueFilter" className="form-select form-select-sm" style="width:75px"><option selected value="empty">Any</option><option value="1">Today</option><option value="3">Last 3 days</option><option value="7">Last week</option><option value="30">Last month</option></select>
                                                    </th>
                                                    <th>
                                                        <div className="filter-container">
                                                            <input className="form-control form-control-sm apply-button" id="gridSearchBtn" name="yt0" type="button" value="APPLY">
                                                            <button type="button" className="btn btn-primary btn-sm view-cart-button view-cart-table"><i className="bi bi-cart-fill cart-icon"></i> Cart</button>
                                                        </div>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody id="main-list">
                                                <tr className="proxy-row" id="3112835" data-ip="72.18.*.*" data-ct="US" data-city="Denver" data-country="US" data-continent="US" data-org="Handy Networks, LLC" data-zone="America/Denver" data-flag="us" data-added="3 days" data-domain="*.*.thehostingxperts.com"
                                                    data-isp="Handy Networks, LLC" data-zip="80202" data-dns="72.18.155.2" data-dnsflag="us" data-type="DCH" data-speed="632.8K" data-ping="818" data-state="CO" data-price="0.40" data-load="med" style="cursor: pointer;">
                                                    <td>
                                                        <div>
                                                            <div className="pull-left flag flag-us" style="margin-top:3px;">&nbsp;</div>
                                                            <div id="ip_3112835">72.18.*.*</div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div id="domain_3112835" className="text-ellipsis">*.*.thehostingxperts.com</div>
                                                    </td>
                                                    <td id="state_3112835">CO</td>
                                                    <td id="city_3112835">Denver</td>
                                                    <td id="isp_3112835">Handy Networks, LLC</td>
                                                    <td id="zip_3112835">80202</td>
                                                    <td id="speed_3112835"><i className="bi bi-people-fill text-success" title="3-5 users" alt="3-5 users"></i> 632.8K</td>
                                                    <td id="ping_3112835">818</td>
                                                    <td>
                                                        <div id="type_3112835" title="DCH">
                                                            <i className="bi bi-hdd-network-fill" style="opacity: 60%"></i> DCH </div>
                                                    </td>
                                                    <td>3 days</td>
                                                    <td>
                                                        $<span id="price_3112835">0.40</span>
                                                        <button className="btn btn-light btn-sm-cart" title="Add to cart" alt="Add to cart" data-id="3112835"><i className="bi bi-cart-plus"></i></button>
                                                    </td>
                                                </tr>
                                                <tr className="proxy-row" id="2229745" data-ip="65.183.*.*" data-ct="US" data-city="Fargo" data-country="US" data-continent="US" data-org="702 Communications" data-zone="America/Chicago" data-flag="us" data-added="117 days" data-domain="*.*.gctel.net" data-isp="702 Communications"
                                                    data-zip="58103" data-dns="216.239.0.61" data-dnsflag="us" data-type="ISP" data-speed="1.3M" data-ping="698" data-state="ND" data-price="0.50" data-load="no" style="cursor: pointer;">
                                                    <td>
                                                        <div>
                                                            <div className="pull-left flag flag-us" style="margin-top:3px;">&nbsp;</div>
                                                            <div id="ip_2229745">65.183.*.*</div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div id="domain_2229745" className="text-ellipsis">*.*.gctel.net</div>
                                                    </td>
                                                    <td id="state_2229745">ND</td>
                                                    <td id="city_2229745">Fargo</td>
                                                    <td id="isp_2229745">702 Communications</td>
                                                    <td id="zip_2229745">58103</td>
                                                    <td id="speed_2229745"><i className="bi bi-person text-success opacity-25" title="no users" alt="no users"></i> 1.3M</td>
                                                    <td id="ping_2229745">698</td>
                                                    <td>
                                                        <div id="type_2229745" title="ISP">
                                                            <i className="bi bi-router-fill" style="opacity: 60%"></i> ISP </div>
                                                    </td>
                                                    <td>117 days</td>
                                                    <td>
                                                        $<span id="price_2229745">0.50</span>
                                                        <button className="btn btn-light btn-sm-cart" title="Add to cart" alt="Add to cart" data-id="2229745"><i className="bi bi-cart-plus"></i></button>
                                                    </td>
                                                </tr>
          
                                                <tr className="proxy-row" id="373776" data-ip="143.55.*.*" data-ct="US" data-city="Rogersville" data-country="US" data-continent="US" data-org="Holston Electric Cooperative" data-zone="America/New_York" data-flag="us" data-added="402 days" data-domain="143.55.*.*"
                                                    data-isp="Holston Electric Cooperative" data-zip="37857" data-dns="66.232.55.250" data-dnsflag="us" data-type="ISP" data-speed="2.4M" data-ping="38" data-state="TN" data-price="0.40" data-load="no" style="cursor: pointer;">
                                                    <td>
                                                        <div>
                                                            <div className="pull-left flag flag-us" style="margin-top:3px;">&nbsp;</div>
                                                            <div id="ip_373776">143.55.*.*</div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div id="domain_373776" className="text-ellipsis">143.55.*.*</div>
                                                    </td>
                                                    <td id="state_373776">TN</td>
                                                    <td id="city_373776">Rogersville</td>
                                                    <td id="isp_373776">Holston Electric Cooperative</td>
                                                    <td id="zip_373776">37857</td>
                                                    <td id="speed_373776"><i className="bi bi-person text-success opacity-25" title="no users" alt="no users"></i> 2.4M</td>
                                                    <td id="ping_373776">38</td>
                                                    <td>
                                                        <div id="type_373776" title="ISP">
                                                            <i className="bi bi-router-fill" style="opacity: 60%"></i> ISP </div>
                                                    </td>
                                                    <td>402 days</td>
                                                    <td>
                                                        $<span id="price_373776">0.40</span>
                                                        <button className="btn btn-light btn-sm-cart" title="Add to cart" alt="Add to cart" data-id="373776"><i className="bi bi-cart-plus"></i></button>
                                                    </td>
                                                </tr>
                                                <tr className="proxy-row" id="3135251" data-ip="65.131.*.*" data-ct="US" data-city="Green River" data-country="US" data-continent="US" data-org="CenturyLink" data-zone="America/Denver" data-flag="us" data-added="today" data-domain="*.*.qwest.net" data-isp="CenturyLink"
                                                    data-zip="82935" data-dns="172.253.221.3" data-dnsflag="us" data-type="ISP" data-speed="683.0K" data-ping="438" data-state="WY" data-price="1.20" data-load="no" style="cursor: pointer;">
                                                    <td>
                                                        <div>
                                                            <div className="pull-left flag flag-us" style="margin-top:3px;">&nbsp;</div>
                                                            <div id="ip_3135251">65.131.*.*</div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div id="domain_3135251" className="text-ellipsis">*.*.qwest.net</div>
                                                    </td>
                                                    <td id="state_3135251">WY</td>
                                                    <td id="city_3135251">Green River</td>
                                                    <td id="isp_3135251">CenturyLink</td>
                                                    <td id="zip_3135251">82935</td>
                                                    <td id="speed_3135251"><i className="bi bi-person text-success opacity-25" title="no users" alt="no users"></i> 683.0K</td>
                                                    <td id="ping_3135251">438</td>
                                                    <td>
                                                        <div id="type_3135251" title="ISP">
                                                            <i className="bi bi-router-fill" style="opacity: 60%"></i> ISP </div>
                                                    </td>
                                                    <td>today</td>
                                                    <td>
                                                        $<span id="price_3135251">1.20</span>
                                                        <button className="btn btn-light btn-sm-cart" title="Add to cart" alt="Add to cart" data-id="3135251"><i className="bi bi-cart-plus"></i></button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div className>
                                            <span className="total_socks" id="total_socks">21953 proxies found</span>
                                            <span className="total_socks" style="display: inline-block; float:right;">proxies per page<span className="proxy_count selected" data-count="25" style="cursor: pointer;">25</span>
                                            <span className="proxy_count " data-count="50" style="cursor: pointer;">50</span>
                                            <span className="proxy_count " data-count="75" style="cursor: pointer;">75</span>
                                            <span className="proxy_count " data-count="100" style="cursor: pointer;">100</span>
                                            <span className="proxy_count " data-count="150" style="cursor: pointer;">150</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-sm-4 col-md-4 col-lg-3">
                                    <div className="sticky-sm-top d-none d-sm-none d-md-none d-lg-none d-xl-block" id="socks-data">
                                        <div className="block-data" className="socks-cart">
                                            <b><i className="bi bi-cart-fill cart-icon"></i> CART</b> <span className="cart-count"></span> <button className="btn btn-primary view-cart" title="View cart" alt="View cart">Show</button>
                                        </div>
                                        <p className="new-proxy-initial-text block-data">Click on proxy to buy it</p>
                                        <div className="new-proxy-block block-data" style="display: none;">
                                            <p><i className="bi bi-globe2"></i> <b>IP</b><br>
                                                <span className="new-proxy-ip-span-flag flag flag-text"></span>
                                                <span className="new-proxy-ip-span"></span>
                                            </p>
                                            <p className="new-proxy-geo-div" style="display: none;">
                                                <i className="bi bi-geo-alt-fill"></i> <b>LOCATION</b><br> Country: <span className="new-proxy-country"></span></br><br> Domain: <span className="new-proxy-domain"></span></br><br> ORG: <span className="new-proxy-org"></span></br>                                                ISP: <span className="new-proxy-isp"></span><br> State: <span className="new-proxy-state"></span><br> City: <span className="new-proxy-city"></span><br> ZIP: <span className="new-proxy-zip"></span><br/> Zone: <span className="new-proxy-zone"></span><br>
                                            </p>
                                            <p className="new-proxy-bl-div" style="display: none; margin-bottom: 0;">
                                                <i className="bi bi-exclamation-circle-fill"></i> <b>BLACKLISTS</b>

                                                <div className="new-proxy-bl-div-spiner spinner-border" style="height: 20px; width: 20px; display: none;"></div>
                                                <span className="new-proxy-bl-div-content"></span>
                                            </p>
                                            <p className="new-proxy-info-div" style="display: none;">
                                                <i className="bi bi-gear-fill"></i> <b>INFO</b><br> Added: <span className="new-proxy-added"></span><br> Type
                                                <a href="/service-rules#section-7"><sup>?</sup></a>: <span className="new-proxy-type"></span><br> Ping: <span className="new-proxy-ping"></span>ms<br> Speed: <span className="new-proxy-speed"></span><br> DNS:
                                                <span
                                                    className="new-proxy-dns-span-flag flag flag-text"></span><span className="new-proxy-dns"></span><br> Usage: <span className="new-proxy-load"></span>
                                            </p>
                                            <button onclick="buyProxy(this);" data-id className="new-proxy-buy-button btn btn-primary mb-2" style="display: none;" type="button" data-list-pagination="next"><span>B Y $<span className="new-proxy-buy-button_price"></span></span></button>
                                            <button type="button" className="btn btn-secondary btn-cart mb-2"><i className="bi bi-cart-plus"></i> Add to Cart</button>
                                            <div className="new-proxy-buy-button-spiner spinner-border" style="height: 20px; width: 20px; display: none;"></div>
                                            <div className="collapse buyCollapse">
                                                <b><i className="bi bi-ethernet"></i> BOUGHT SOCKS5 PROXY</b>
                                                <div className="alert alert-success copy buyResultclassName">
                                                    <i className="bi bi-back"></i>&nbsp;<span className="buyResultText"></span>
                                                </div>
                                            </div>
                                            <div className="collapse note-form">
                                                <i className="bi bi-chat-left-quote"></i> <b>NOTE</b><br>
                                                <span className="add-comment"><span className="add-note"><i className="bi bi-plus-square"></i> add note</span>
                                                <span className="input-group comment-form" style="display:none"><input type="text" className="comment form-control form-control-xs" placeholder="Proxy comment" aria-label="Proxy comment" maxlength="50"><button className="close-note btn btn-outline-secondary" type="button"><i className="bi bi-check-circle-fill"></i></button></span>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="block-data" id="socks-history">
                                            <b><i className="bi bi-clock"></i> MY PROXIES</b>
                                            <div id="my-proxy">
                                            </div>
                                            For better security, <br/>set <a href="/account#nav-socksauth">proxy password</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div id="pagination" className="pagination-holder black clearfix">
                                        <ul id="light-pagination" className="pagination light-theme simple-pagination justify-content-center">
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="modal fade" id="socksModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-body">
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" style="float:right"></button>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <p><i className="bi bi-globe2"></i> <b>IP</b><br/>
                                                        <span className="new-proxy-ip-span-flag flag flag-text"></span>
                                                        <span className="new-proxy-ip-span"></span>
                                                    </p>
                                                    <p>
                                                        <i className="bi bi-geo-alt-fill"></i> <b>LOCATION</b><br/> Country: <span className="new-proxy-country"></span><br/> Domain: <span className="new-proxy-domain"></span><br/> ORG: <span className="new-proxy-org"></span><br/>                                                        ISP: <span className="new-proxy-isp"></span><br/> State: <span className="new-proxy-state"></span><br/> City: <span className="new-proxy-city"></span><br/> ZIP: <span className="new-proxy-zip"></span><br/> Zone:
                                                        <span className="new-proxy-zone"></span><br/>
                                                    </p>
                                                </div>
                                                <div className="col-sm-6">
                                                    <p style="margin-bottom: 0;">
                                                        <i className="bi bi-exclamation-circle-fill"></i> <b>BLACKLISTS</b><br/>
                                                        <div className="new-proxy-bl-div-spiner spinner-border" style="height: 20px; width: 20px; display: none;"></div>
                                                        <span className="new-proxy-bl-div-content"></span>
                                                    </p>
                                                    <p>
                                                        <i className="bi bi-gear-fill"></i> <b>INFO</b><br/> Added: <span className="new-proxy-added"></span><br/> Type
                                                        <a href="/service-rules#section-7"><sup>?</sup></a>: <span className="new-proxy-type"></span><br/> Ping: <span className="new-proxy-ping"></span><br/> Speed: <span className="new-proxy-speed"></span><br/> DNS:
                                                        <span className="new-proxy-dns-span-flag flag flag-text"></span><span className="new-proxy-dns"></span><br> Usage: <span className="new-proxy-load"></span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="collapse buyCollapse">
                                                <b><i className="bi bi-ethernet"></i> BOUGHT SOCKS5 PROXY</b>
                                                <div className="alert alert-success copy buyResultclassName">
                                                    <i className="bi bi-back"></i>&nbsp;<span className="buyResultText"></span>
                                                </div>
                                                <div className="collapse note-form">
                                                    <span className="add-comment"><span className="add-note"><i className="bi bi-plus-square"></i> add note</span>
                                                    <span className="input-group comment-form" style="display:none"><input type="text" className="comment form-control form-control-xs" placeholder="Proxy comment" aria-label="Proxy comment" maxlength="50"><button className="close-note btn btn-outline-secondary" type="button"><i className="bi bi-check-circle-fill"></i></button></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary view-cart pull-left"><i className="bi bi-cart-fill cart-icon"></i>View Cart</button>
                                            <button type="button" className="btn btn-secondary btn-cart"><i className="bi bi-cart-plus"></i> Add to Cart</button>
                                            <button type="button" onclick="buyProxy(this);" data-id className="new-proxy-buy-button btn btn-primary"><span className="new-proxy-buy-button-text">BUY $<span className="new-proxy-buy-button_price"></span></span></button>
                                            <div className="new-proxy-buy-button-spiner spinner-border" style="height: 20px; width: 20px; display: none;"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="modal fade" id="cartModal" tabindex="-1" aria-labelledby aria-hidden="true">
                                <div className="modal-dialog modal-xl">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title">Cart</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body socks-cart">
                                            <div id="my-proxy-cart">
                                            </div>
                                            <span className="cart-count total_socks"></span>
                                            <div className="show-copy collapse">
                                                <p>
                                                    <a className="btn btn-link" data-bs-toggle="collapse" href="#collapseCopy" role="button" aria-expanded="false" aria-controls="collapseCopy">Show all proxies to copy</a>
                                                </p>
                                                <div className="collapse copy" id="collapseCopy">
                                                    <div className="alert alert-secondary" id="cart-copy">
                                                        <i className="bi bi-back"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal-footer cart-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-light delete-cart"><i className="bi bi-trash3"></i> Empty cart</button>
                                            <button type="button" className="btn btn-primary buy-cart"><i className="bi bi-check-lg"></i> Buy all</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        
        <
  );
};

export default Payments;
