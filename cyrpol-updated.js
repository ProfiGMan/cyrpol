function trans ()
{
	var iSource = document.all["SourceText"].value;
	result = lus (iSource);	
	document.all["ResultText"].value = result;
}

function lus (iSource)
{
	var result = "";

	while (iSource != "")
	{
		var nextW = "";
		var nextSpace = iSource.indexOf (" ");
		var nextHook  = iSource.indexOf ("<");

		if ((nextHook != -1) && ((nextSpace == -1) || (nextHook < nextSpace)))
		{
			nextW = iSource.substring (0, nextHook);
			iSource = iSource.substring (nextHook + 1, iSource.length);
			result += transliterateW (nextW);
			result += "<";

			var nextRHook = iSource.indexOf (">");
			if (nextRHook != -1)
			{
				nextW = iSource.substring (0, nextRHook);
				iSource = iSource.substring (nextRHook + 1, iSource.length);
				result += nextW;
				result += ">";
			}
		}
		else if (nextSpace == -1)
		{
			nextW = iSource;
			iSource = "";
			result += transliterateW (nextW);
		}
		else
		{
			nextW = iSource.substring (0, nextSpace);
			iSource = iSource.substring (nextSpace + 1, iSource.length);
			result += transliterateW (nextW);
			result += " ";
		}
		
	}
	return result;
}

function transliterateW (iW)
{
	if (document.ogonek.ogonek[0].checked == true) 		{ type = "old"; }
	else if (document.ogonek.ogonek[1].checked == true)	{ type = "mod"; }

	iW = (iW.replace(/%/g,"PRRO"));
	iW = "%" + iW;
	iW = (iW.replace(/-/g,"-%"));
	iW = (iW.replace(/\n/g,"\n%"));

	var x;
	var teken = new Array();
	teken[0] = (String.fromCharCode(34));
	teken[1] = (String.fromCharCode(40));
	teken[2] = (String.fromCharCode(44));
	teken[3] = (String.fromCharCode(45));
	teken[4] = (String.fromCharCode(46));
	teken[5] = (String.fromCharCode(47));
	teken[6] = (String.fromCharCode(58));
	teken[7] = (String.fromCharCode(59));
	teken[8] = (String.fromCharCode(60));
	teken[9] = (String.fromCharCode(91));
	teken[10] = (String.fromCharCode(123));
	teken[11] = (String.fromCharCode(171));
	teken[12] = (String.fromCharCode(187));
	teken[13] = (String.fromCharCode(8212));
	teken[14] = (String.fromCharCode(8216));
	teken[15] = (String.fromCharCode(8218));
	teken[16] = (String.fromCharCode(8219));
	teken[17] = (String.fromCharCode(8220));
	teken[18] = (String.fromCharCode(8222));
	teken[19] = (String.fromCharCode(8223));

	for (x in teken)
		{
		iW = (iW.replace((teken[x]),teken[x] + "%"));
		}

	OrigW = iW;
	iW = iW.toLowerCase();

	iW = (iW.replace(/ió/g,"ю́V")); // new
	iW = (iW.replace(/ó/g,"о́V"));  // new
	//iW = (iW.replace(/ó/g,"u"));
	//iW = (iW.replace(/ch/g,"h"));
	iW = (iW.replace(/ch/g,"х")); // new
	iW = (iW.replace(/j/g,"jj"));
	iW = (iW.replace(/rz/g,"р̌j"));  // new
	//iW = (iW.replace(/rz/g,"rj"));
	iW = (iW.replace(/cz/g,"čJ"));
	iW = (iW.replace(/sz/g,"šJ"));
	iW = (iW.replace(/ż/g,"žJ"));

	//iW = (iW.replace(/ci/g,"ti"));
	//iW = (iW.replace(/dzi/g,"di"));
	iW = (iW.replace(/l/g,"lj"));
	iW = (iW.replace(/lji/g,"li"));
	iW = (iW.replace(/ł/g,"l"));
	iW = (iW.replace(/ć/g,"cj"));   //new
	//iW = (iW.replace(/ć/g,"tj"));
	iW = (iW.replace(/dź/g,"dzj")); //new
	//iW = (iW.replace(/dź/g,"dj"));
	iW = (iW.replace(/ś/g,"sj"));
	iW = (iW.replace(/ź/g,"zj"));
	iW = (iW.replace(/ń/g,"nj"));

	iW = (iW.replace(/w/g,"v"));
	iW = (iW.replace(/q/g,"k"));
	iW = (iW.replace(/x/g,"ks"));
	iW = (iW.replace(/ia/g,"ja"));
	iW = (iW.replace(/ie/g,"je"));
	iW = (iW.replace(/io/g,"jo"));
	iW = (iW.replace(/iu/g,"ju"));
	iW = (iW.replace(/ią/g,"ją"));
	iW = (iW.replace(/ię/g,"ję"));
	iW = (iW.replace(/i/g,"ji"));

	iW = (iW.replace(/ljlj/g,"llj"));
	iW = (iW.replace(/sjtj/g,"stj"));
	iW = (iW.replace(/sjcj/g,"scj")); // new
	iW = (iW.replace(/zjdj/g,"zdj"));
	iW = (iW.replace(/sjpj/g,"spj"));
	iW = (iW.replace(/zjbj/g,"zbj"));
	iW = (iW.replace(/sjnj/g,"snj"));
	iW = (iW.replace(/zjnj/g,"znj"));
	iW = (iW.replace(/sjmj/g,"smj"));
	iW = (iW.replace(/zjmj/g,"zmj"));
	iW = (iW.replace(/tjvj/g,"tvj"));
	iW = (iW.replace(/djvj/g,"dvj"));
	iW = (iW.replace(/sjvj/g,"svj"));
	iW = (iW.replace(/zjvj/g,"zvj"));
	iW = (iW.replace(/sjlj/g,"slj"));
	iW = (iW.replace(/zjlj/g,"zlj"));
	iW = (iW.replace(/sjr/g,"srj"));
	iW = (iW.replace(/zjr/g,"zrj"));

	iW = (iW.replace(/ji/g,"i"));
	iW = (iW.replace(/jy/g,"i"));
	iW = (iW.replace(/Ji/g,"ji"));
	iW = (iW.replace(/Jy/g,"i"));
	iW = (iW.replace(/Je/g,"je"));
	iW = (iW.replace(/J/g,""));

	iW = (iW.replace(/ja/g,"JяV"));
	iW = (iW.replace(/je/g,"JеV"));
	iW = (iW.replace(/i/g,"JиV"));
	iW = (iW.replace(/jo/g,"JёV"));
	iW = (iW.replace(/ju/g,"JюV"));
	iW = (iW.replace(/ją/g,"JѭV"));
	iW = (iW.replace(/ję/g,"JѩV"));
	iW = (iW.replace(/a/g,"аV"));
	iW = (iW.replace(/e/g,"эV"));
	iW = (iW.replace(/y/g,"ыV"));
	iW = (iW.replace(/o/g,"оV"));
	iW = (iW.replace(/u/g,"уV"));
	iW = (iW.replace(/ą/g,"ѫV"));
	iW = (iW.replace(/ę/g,"ѧV"));

	iW = (iW.replace(/Vjj/g,"й"));
	iW = (iW.replace(/%jJ/g,"%"));
	iW = (iW.replace(/VjJ/g,""));
	iW = (iW.replace(/jJ/g,"ъ"));
	iW = (iW.replace(/J/g,""));
	iW = (iW.replace(/V/g,""));
	iW = (iW.replace(/j/g,"ь"));

	iW = (iW.replace(/p/g,"п"));
	iW = (iW.replace(/b/g,"б"));
	iW = (iW.replace(/f/g,"ф"));
	iW = (iW.replace(/v/g,"в"));
	iW = (iW.replace(/t/g,"т"));
	iW = (iW.replace(/d/g,"д"));
	iW = (iW.replace(/s/g,"с"));
	iW = (iW.replace(/z/g,"з"));
	iW = (iW.replace(/k/g,"к"));
	iW = (iW.replace(/g/g,"г"));
	//iW = (iW.replace(/h/g,"х"));
	iW = (iW.replace(/h/g,"х̾")); // new
	iW = (iW.replace(/m/g,"м"));
	iW = (iW.replace(/n/g,"н"));
	iW = (iW.replace(/l/g,"л"));
	iW = (iW.replace(/r/g,"р"));
	iW = (iW.replace(/šč/g,"щ"));
	iW = (iW.replace(/č/g,"ч"));
	iW = (iW.replace(/š/g,"ш"));
	iW = (iW.replace(/ž/g,"ж"));
	iW = (iW.replace(/c/g,"ц"));
	//iW = (iW.replace(/цъ/g,"ц"));	
	//iW = (iW.replace(/цьъ/g,"ц"));
	iW = (iW.replace(/цьъ/g,"цъ")); // new
	iW = (iW.replace(/сьъ/g,"съ")); // new
	iW = (iW.replace(/зьъ/g,"зъ")); // new

	if (type == "mod")
	{
	iW = (iW.replace(/ѭ/g,"я̨"));
	iW = (iW.replace(/ѩ/g,"е̨"));
	iW = (iW.replace(/ѫ/g,"а̨"));
	iW = (iW.replace(/ѧ/g,"э̨"));
	}
	
/** Hoofdletters maken **/

fragRes = iW.substring (1);
fragIW = OrigW.substring (1);
result = "";

while (fragRes != "")
	{
	var nextStopRes = fragRes.indexOf ("%");
	var nextStopIW = fragIW.indexOf ("%");
	var nextFrag = "";
	var nextFragIW = "";

	if (nextStopRes == -1)
		{
		nextFrag = fragRes;
		nextFragIW = fragIW;
		fragRes = "";
		fragIW = "";
		}
	else
		{
		nextFrag = fragRes.substring (0, nextStopRes);
		nextFragIW = fragIW.substring (0, nextStopIW);
		fragRes = fragRes.substring (nextStopRes + 1, fragRes.length);
		fragIW  = fragIW.substring (nextStopIW + 1, fragIW.length);
		}

	if ((nextFragIW.charAt (0)) == (nextFragIW.charAt (0).toLowerCase()))
		{
		nextFrag = nextFrag.toLowerCase();
		}
	else if ((nextFragIW.charAt (1)) == (nextFragIW.charAt (1).toLowerCase()))
		{
		nextFrag = nextFrag.charAt (0).toUpperCase() + nextFrag.substring (1).toLowerCase();
		}
	else
		{
		nextFrag = nextFrag.toUpperCase();
		}

	result += nextFrag;
	}

result = (result.replace(/PRRO/gi,"%"));
result = (result.replace(/ПРРО/gi,"%"));
return result;
}
