// top 500 retweeted ferguson tweets from August 9, 2014
// that were still available on August 9, 2017

ids = [
  "498259127387574272",
  "498253074566483968",
  "498616975850225664",
  "498210025383288832",
  "498473080227106816",
  "498292827911364608",
  "498341675476217856",
  "498560433021026304",
  "498255349619904516",
  "498482619232055296",
  "498276771226451968",
  "498253906045329408",
  "498293668655423488",
  "498474619792543745",
  "498283364672348160",
  "498285405142540289",
  "498313143530303488",
  "498257849991299074",
  "498487611963744256",
  "498305825341845504",
  "498262106937237504",
  "498496385097162754",
  "498288191271878656",
  "498529979672842241",
  "498263554097963008",
  "498303288295817217",
  "498302254190166016",
  "498314736845324288",
  "498268001255563264",
  "498457205801488385",
  "498309253468532736",
  "498535462349582337",
  "498191410575581184",
  "498271531386953728",
  "498274692873351170",
  "498480541810040832",
  "498574364028055554",
  "498317308771987456",
  "497816253416112128",
  "498590686065606657",
  "498276304635322368",
  "498458789138681856",
  "498355319979143168",
  "498227883488587777",
  "498354400289886208",
  "498556324868009984",
  "498453798730227714",
  "498281104865259521",
  "498264393185239040",
  "498284302128668672",
  "498273127592652801",
  "498483485133516800",
  "498298040881782785",
  "498294367405477888",
  "498480911243948034",
  "498455012365053954",
  "498573027794489344",
  "498487999848800256",
  "498532911143206913",
  "498267196833808384",
  "498248415223246848",
  "498278882244853760",
  "498284334806495233",
  "498248648699150336",
  "498488195047096320",
  "498212937958309888",
  "498219910770618368",
  "498303921430204416",
  "498446971666173952",
  "498515980205948928",
  "498486539585069056",
  "498585089828478977",
  "498603999252467713",
  "498280730070622209",
  "498242148794630145",
  "498229501911121920",
  "498269949081948160",
  "498305962726273024",
  "498283038338711552",
  "498492003903356928",
  "498349598197702656",
  "498219779157942272",
  "498297336968515584",
  "498321426756423680",
  "498598440096763904",
  "498480344992350209",
  "498301902048997377",
  "498318192000118784",
  "498246235569278977",
  "498461886317625344",
  "498291267756130305",
  "498283586425200640",
  "498320854707896321",
  "498267673789472768",
  "498268463639851008",
  "498584409055174656",
  "498287738815512576",
  "498491577908879360",
  "498555675887554562",
  "498273703428620289",
  "498463591767756800",
  "498430783699554305",
  "498296205777326080",
  "498254340310966273",
  "498340530770939904",
  "498505897812189184",
  "498303769915191297",
  "498256123686703104",
  "498612897262489600",
  "498260685613449217",
  "498401948585181184",
  "498544167757570049",
  "498489831304220673",
  "498531639472189441",
  "498229985459445761",
  "498302874531553280",
  "498232750336643072",
  "498541831052083201",
  "498354783712202752",
  "498244940724707328",
  "498294815579467777",
  "498292317296812032",
  "498512590260023296",
  "498317138554150912",
  "498268092917481474",
  "498305851828879368",
  "498458786093608961",
  "498272364560257025",
  "498269289812856832",
  "498477164380299264",
  "498235547685756928",
  "498310720350863362",
  "498272080564334592",
  "498476761538371584",
  "498251140296097794",
  "498307792458219520",
  "498304114955419648",
  "498506343368519680",
  "498483784296448000",
  "498473515302260736",
  "498452658605535232",
  "498463733447163905",
  "498455816786432000",
  "498487087105314816",
  "498290930504716288",
  "498265169852907521",
  "498259903962570752",
  "498170614180761600",
  "498520195989008384",
  "498264107460870144",
  "498302603034640384",
  "498278184123523072",
  "498279420885360641",
  "498274493337702401",
  "498474263255330818",
  "498489451954573312",
  "498530946338258944",
  "498324386114322433",
  "498254929942028288",
  "498277674692149248",
  "498296657659043840",
  "498256407980826625",
  "498486850521423872",
  "498495237921468416",
  "498483031842500608",
  "498271724539215872",
  "498455001463664640",
  "498347123369181185",
  "498262097504243712",
  "498507434693246977",
  "498300128088694786",
  "498240374947991552",
  "498198378044743680",
  "498472666802958336",
  "498491047329402880",
  "498357910603575296",
  "498301635756838912",
  "498235234681634816",
  "498499836900278272",
  "498489114384420865",
  "498477855031177216",
  "498473263862149120",
  "498323364197699584",
  "498551959574814720",
  "498483279943962625",
  "498459369139216384",
  "498271954185379840",
  "498497395198799872",
  "498498431271190528",
  "498285782512050176",
  "498492636630896640",
  "498251940997136384",
  "498245096572481536",
  "498294248488574976",
  "498300832648273920",
  "498265095559184384",
  "498240039256477697",
  "498280074941313024",
  "498356729634390016",
  "498253652755111937",
  "498534725276160000",
  "498280126254428160",
  "498269636551798784",
  "498281812821803008",
  "498541189541687296",
  "498575704582148096",
  "498454590728466433",
  "498296608506015745",
  "498495537642213376",
  "498488890765103104",
  "498486453962567680",
  "498452664527511553",
  "498292200955195392",
  "498283233982025728",
  "498508038220029952",
  "498299689389662208",
  "498497371899449344",
  "498530904139378688",
  "498499795192143872",
  "498308585227431936",
  "498508707244683264",
  "498322865843109888",
  "498",
  "498253149707464704",
  "498238132597178368",
  "498524570593140736",
  "498477676219600896",
  "498466570675716096",
  "498275689943298048",
  "498255816034893824",
  "498602798687469568",
  "498606234204114945",
  "498504707393220608",
  "498343382381780992",
  "498236399288471552",
  "498602841335169024",
  "498515497294770176",
  "498476463629537280",
  "498148582000959488",
  "498309582733996032",
  "498239926690140160",
  "498600617645199361",
  "498512372584415232",
  "498268542291034113",
  "498286658006310912",
  "498609222020780033",
  "498568294522425345",
  "498433651835940865",
  "498371082592600064",
  "498310350711037952",
  "498292628455034882",
  "498517931157102592",
  "498293625420148736",
  "498250100079341568",
  "498328463787720704",
  "498304676308463617",
  "498265212014063616",
  "498454697456316417",
  "498294301974339587",
  "498279257316278273",
  "498235642979942400",
  "498489640236875777",
  "498331573016469504",
  "498322949296766976",
  "498562356499447808",
  "498272541660553216",
  "498582230479151104",
  "498508287940116481",
  "498481271199506432",
  "498451513644052482",
  "498618919587151872",
  "498525265677787137",
  "498515060466393088",
  "498289389311897600",
  "498502208833331201",
  "498259561099169792",
  "498293846401249281",
  "498282243157426176",
  "498267757629014016",
  "498257123982462976",
  "498302344246079488",
  "498270270998994944",
  "498313254406729730",
  "498313591746228224",
  "498563076736573440",
  "498487698009903104",
  "498314211555311616",
  "498277180557000704",
  "498242380370178048",
  "498238971197915136",
  "498571722258276352",
  "498487606033018881",
  "498255202403631104",
  "498253040085139456",
  "498242257430921217",
  "498588558949892097",
  "498578227695464448",
  "498481809567780864",
  "498333388617809920",
  "498509074468577281",
  "498485381671960576",
  "498311797460701184",
  "498297773851426817",
  "498253382118014979",
  "498292818821906432",
  "498603031475531776",
  "498470842943422464",
  "498235710164725760",
  "498495049978888192",
  "498491597861163008",
  "498266707467583488",
  "498256339601477632",
  "498500645486592001",
  "498489724705984512",
  "498582995566362624",
  "498487837764112385",
  "498461941036105728",
  "498317944028684289",
  "498281990396063744",
  "498275432924708864",
  "498571674011570176",
  "498556818575327232",
  "498504493508468736",
  "498595725916508160",
  "498466936641294336",
  "498513204377841664",
  "498267686535565312",
  "498260812226506752",
  "498248408595841024",
  "498234143180738560",
  "498510083307753473",
  "498492275039956994",
  "498486559864143873",
  "498286689140604928",
  "498489303748857857",
  "498486847543058433",
  "498299863088787456",
  "498597185949532160",
  "498519410810695681",
  "498434325743157248",
  "497637483166048256",
  "498521508676108288",
  "498453792736559104",
  "498111274677710849",
  "498518068390526976",
  "498447961580638208",
  "498325061007589376",
  "498322887980613632",
  "498317848289083392",
  "498282340750471168",
  "498451783724044289",
  "498303701438976000",
  "498290190902132736",
  "498283742033899520",
  "498538215729811456",
  "498474716878094337",
  "498456492073168898",
  "498344565527838720",
  "498264444125069313",
  "498513707366748161",
  "498491248140095489",
  "498281839505985538",
  "498593766039912449",
  "498560697077628928",
  "498510321288359937",
  "498487877706076160",
  "498339283682750465",
  "498323895196192768",
  "498299242075926528",
  "498543649832316929",
  "498470151894085632",
  "498582245452431360",
  "498502775488409601",
  "498481304833654784",
  "498449110110728192",
  "498286080211165184",
  "498267014319063040",
  "498610873481826305",
  "498605382885838849",
  "498605022624890880",
  "498523590455996416",
  "498501670146670592",
  "498500279072198656",
  "498485737294004224",
  "498461734446071808",
  "498449793622872064",
  "498306498368638976",
  "498282323251458049",
  "498276192802603008",
  "498558134429179904",
  "498525045678157824",
  "498517903096819713",
  "498497767975948288",
  "498314674559938561",
  "498315055587291137",
  "498310672984195074",
  "498292145653284864",
  "498286109127110656",
  "498286209979129856",
  "498262951955300352",
  "498584742657544192",
  "498489063918170112",
  "498299880381497344",
  "497583172050493442",
  "498476958687047680",
  "498311507869204481",
  "498311725196652545",
  "498309661381365760",
  "498298469002391552",
  "498294838778167297",
  "498281226424549376",
  "498278389770235904",
  "498275154653614081",
  "498265259988484097",
  "498248051379933184",
  "498300694995017728",
  "498612717293686785",
  "498512628617314304",
  "498465348933668865",
  "498313783807606785",
  "498307061009350656",
  "498292183628144640",
  "498130236777967616",
  "498606998561099776",
  "498584778594324482",
  "498516603961880577",
  "498488588451856385",
  "498280949843369985",
  "498263997888491520",
  "498250770060296192",
  "498513854528106496",
  "498312685453606912",
  "498307497347010560",
  "498251439320227841",
  "498224424688967680",
  "498585401226166272",
  "498542280924733443",
  "498499096844730369",
  "498478342749040640",
  "498339147371663360",
  "498318526705197056",
  "498294877873258496",
  "498276992593448960",
  "498578768857141248",
  "498502837924814849",
  "498482965966368768",
  "498327750407901184",
  "498241702315171841",
  "498615046755590144",
  "498608227249311745",
  "498578774137380864",
  "498505269370826752",
  "498495998713282561",
  "498331671465566208",
  "498329022016004096",
  "498323690321641472",
  "498301641247166464",
  "498298870854471680",
  "498297308313042944",
  "498292405003878401",
  "498286245273825280",
  "498266504325267456",
  "498259606322577408",
  "498246482878025728",
  "498496481251557376",
  "498469068350169090",
  "498446757966405633",
  "498430156466552832",
  "498617253651165184",
  "498530863735668736",
  "498507565245165568",
  "498488927062609920",
  "498478231721607168",
  "498446739230453762",
  "498320208218849280",
  "498313455229607937",
  "498306505494761472",
  "498289575291527170",
  "498257507677405184",
  "498523489934925825",
  "498492979657834496",
  "498303128580550657",
  "498257468217364483",
  "498257799588380672",
  "498201243391508480",
  "497930049283055616",
  "498601336985092096",
  "498596149499273216",
  "498520631479005189",
  "498506403959422977",
  "498452364760973312",
  "498353289944391680",
  "498330348346802176",
  "498301621085163520",
  "498297407311200256",
  "498261224577323008",
  "498248102592389122",
  "498146728772898819",
  "498567719181381632"
];