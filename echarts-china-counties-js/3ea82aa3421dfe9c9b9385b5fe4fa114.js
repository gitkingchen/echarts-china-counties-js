(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('巴州区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"511902","properties":{"name":"巴州区","cp":[106.768878,31.851478],"childNum":10},"geometry":{"type":"MultiPolygon","coordinates":[["@@@@@@@A@B@@@@@@@@@@"],["@@@@@@@@@@@@@@@@@@@@@@@@"],["@@@@@@@@@A@@@@@@@@@@@@ABB@"],["@@@B@@@@@A@A@@@@@@@@@B@@@@"],["@@@@A@@@@@@B@@@@B@@@@@@A@@@@"],["@@@@B@BA@A@@A@@@A@ABA@@@BB@@B@@@"],["@@@@@ABA@@@@@@A@@@@@@AB@@@B@@@@B@A@@B@AA@@@@CBAB@@@@@@@B@@@@BB@@@@"],["@@@@HAA@BA@@@@GD"],["@@A@AA@@AC@A@EA@@@A@A@C@ABC@A@C@ECCA@@@AA@C@ABADA@ABEDKDABBB@BDB@D@@ABC@A@AACCC@A@A@C@A@@@AB@BBD@BCDAB@D@@BB@BBB@@@B@B@@@DBD@@BBB@BAB@BBBB@@@B@@BB@@@@AB@@@BB@@B@@D@@BB@@@@@AB@B@@@BB@AB@@A@AB@@@B@@@BA@@@AA@A@@CB@@A@@@KGAAG@MEECAA@AAAA@EAAAAAA@C@A@ABAD@BADABE@CAICC@C@AD@BBDFDBB@BAJCFABADBBBBB@F@@@FFDB@D@D@DCFCFABCBA@@A@ABGAA@ACBABA@AAAAAAAAABABEBC@GAKEA@EBCBEAEAC@EBC@ACAAABA@AFAHADCBC@CLAFADAB@BB@BDBD@F@D@BAB@DBBBBBDDBBBBD@BABA@ABCBAB@B@D@BABAB@B@BBBB@B@BAB@@ABAD@@ADADCB@D@D@@@BB@B@B@BB@BABADAD@DAB@BADABBBB@@B@DA@AD@B@BBB@@@BA@AAAA@AAA@AA@ABA@EBCDCBABA@CBE@A@@DABAF@D@B@DBB@B@BADA@B@BBBBB@BB@BADADABAD@B@D@D@BB@@@BC@ABA@A@@B@D@BDH@L@DBBLHBF@D@B@B@@@H@D@F@@ADA@ABAB@B@B@B@@@@BB@@BB@BDD@BBBB@BAB@B@B@@@BBB@@@B@BAB@@@B@B@@@B@BA@@B@BABB@@B@@B@@@B@@BB@@DD@B@@ABC@A@A@@BDDB@BB@@@BA@@@C@@@CAAEAAAAA@A@EH@B@@@BBB@@@BAB@@AB@B@@DDFBHHFHCDIFABA@@B@@@BABC@A@A@A@AAC@A@E@CDABABA@C@C@CDA@ABABBB@BB@BAHC@B@@ABABAB@B@@@D@BABA@GDGF@@IHBBB@B@BBB@@@BBB@DBB@@BBB@@B@BBBBBBB@@B@BA@AD@@AB@@@DBBB@BDBB@BBB@@AB@B@J@@ABAAA@@AAAAA@AA@@AA@@@A@A@ABA@AB@@C@A@A@AAA@CCACA@A@A@A@@B@@@B@B@B@B@BABA@A@A@AA@AAAA@@@A@A@ABA@A@A@AC@AA@A@KBA@AB@B@BAB@@ABA@@B@BBB@BB@@BBBBB@DBD@@ABABA@CBAB@B@B@BBBD@BBBBBBDB@BBBAFBBABADEPAB@BA@EBC@C@A@A@@AAACCCAA@A@@BA@ABA@@B@B@D@BEFABCDC@C@A@A@C@CA@@AC@AAA@AA@A@A@AB@B@D@D@B@DBBABA@ABABCBAB@@CFAB@BB@B@BABCB@B@B@B@@BAB@@AB@@BBAB@@AB@@BB@@B@B@D@B@@@BB@B@B@BBBBBBDFFBB@@@BAJ@H@F@B@@@B@B@BA@A@@@A@CA@AA@C@C@ABABCBAD@D@BBB@B@BA@@BA@@B@BABCBA@A@CAC@E@C@CACAAAEACBE@E@AB@@AB@DADCD@B@B@@AD@@ABABA@A@AACA@AACCCAAAAA@A@@B@BCBABAB@B@D@B@DAB@DABABCBC@E@AB@@ABAB@B@D@D@B@D@BBDHDFBBB@D@DABEJ@D@B@BJB@@@@@@B@@BB@@BBDBF@BB@@@B@DABAD@B@DBBD@HBFDFBFDFHCBABA@@@@@@ADB@AB@@@@A@@@@@GB@NCR@H@J@DDLBDBFDJDFHLDHDDFFJFJFVLJDNHHDJDFBL@HEJIJGBAHCLBJ@HDJDFHHBHBFBD@D@BAJAJCJCJ@NFJDFDRNFBNFLBLBDBHBD@HBN@H@VAFAB@D@JAJAHANG@@B@@@B@BABA@@B@B@BD@@B@B@DBBBB@B@D@B@@@BA@@B@@BB@BB@@BBBD@B@B@DB@@B@BDDFDBBB@B@@@DDB@DDFDB@DAFAB@BB@@BDBFDBB@B@@@BD@B@BBBBBB@BD@@B@D@B@@ABBBBDB@@B@FD@@DBD@@@BAD@@@@AB@BAB@@@BAB@BA@@BA@@D@@A@@FF@B@B@BAB@BA@@@ABAAABA@@@A@AB@@@BA@A@@@A@EF@@@BA@@BAB@@ABD@B@@@AA@@@@BBF@B@F@@BB@BBBBBBB@@@@ABAB@B@B@@@@@B@FA@@@D@A@@BB@@BB@D@BDABA@@B@BB@ADBB@@B@BDB@@B@@A@A@A@@B@BB@@B@BBB@@BB@BBB@D@B@B@B@DBB@D@BAA@@A@AA@@A@A@@@A@@@ABA@@BAB@@A@@DCB@@AD@BA@@@AB@BA@ABA@@BBB@B@@@BCBABEB@BADCBABCBAB@BA@ABABEBADGFI@A@ABC@@@A@@@A@A@EB@@AAA@A@@@AAA@A@A@C@C@C@C@@@CAACACCIE@A@KBABADAD@DA@ACIAC@A@A@C@ABA@@BABACC@A@ADADCDADABABCBK@CAE@G@CCEEEKGACBAB@@AB@@A@A@@@AB@B@BC@@A@AA@EAIBGFCDABBDADBB@@B@B@D@D@BBDFAB@DBD@B@@CAK@AA@EBA@A@AAAC@ABGBABAB@BBDDB@BBD@@A@@CS@A@C@E@AAEBA@A@ABA@@BC@A@A@@BEBGBCBABABC@@FANI@ABA@E@ABAFA@A@ACA@A@@BABAB@D@B@BB@B@BBB@BB@BBDBB@@@BABABEBAD@B@F@HADA@AB@CAG@AA@@@CBA@CBC@A@AEECCC@C@G@MAAA@@DCFA@A@@@CA@AAC@CBA@E@CBC@CAE@@A@ALKFEBC@CE@EDE@C@IAC@AAGCC@A@C@E@CBA@ABC@B@@BBD@B@B@BAF@D@B@BAB@BA@MDA@@@@@@A@@FE@@@AA@AAA@@@AA@MAAEG@@AECAE@EBC@CAAAAAACAAE@GDCBQHGDC@ECEAG@IDGBI@E@A@GAECCAI@ABEBA@EBA@AB@FAFABABEA@A@A@A@CAACCCE@A@ABCBEBE@A@C@A@ABCD@D@F@DBDB@B@H@BB@BABABCA@@EEKAAA@@AAB@@@B@B@@A@EAAAA@@A@@BAD@B@@@AA@AA@A@CBC@AB@@ABCD@BB@FB@BA@AB@@C@@AAAAA@@AEA@@AB@D@BAB@@AAAC@E@C@AE@ACC@ACAA@AAA@@A@A@CAA@AA@EC@@BABABC@IBABCBAD@D@B@DBFDB@BABEHA@A@AAA@CBA@ABCBC@AAACAG@SBECCAGEA@A@AABABA@A@A@AA@C@A@CAAAA@A@A@@@A@@AB@FE@@AAC@IBA@@@AB@@@DAH@@A@@@@A@C@A@C@A@A@ACI@@BADCB@BABBBBD@L@D@@@DABAB@B@D@D@FA@@@C@@AA@@C@ECAA@@@CBABA@CAA@A@E@C@CB@B@FADAB@FBD@DDDADABCBA@CAG@@AEAG@C@EBEBA@CA@A@EBABCA@@@AACAAA@A@@ABCBAAC@AACAA@ABC@A@AAACG@A@ABA@A@C@CACBGAA@AECEI@ABEFEFCBEBEBEDIBA@EAA@ABADGBCAAC@ECCACACACAC@A@ADADADABC@IAAAECAA@AAG@AAACCIGAAA@CBABC@CAE@IFC@OEACAC@CAQ@CBAB@BBD@@B@H@BB@BADG@AGEGCCAE@"],["@@@A@@@@AAAAAA@A@BABC@ABEHABAB@FBBBBB@A@BBB@@A@@@@@@@B@@@@@B@@DB@BBDAB@@BB@@B@BBB@B@@A@@@@DA@AB@@@B@B@@ABA@@@A@A@A@@@@@A@@@@BABA@@B@A@A@E@C@@@@A@A@AAE@A@@"]],"encodeOffsets":[[[109086,32721]],[[109142,32658]],[[109146,32659]],[[109089,32714]],[[109086,32719]],[[109083,32723]],[[109086,32718]],[[109209,32677]],[[109426,32270]],[[108974,32683]]]}}],"UTF8Encoding":true});}));