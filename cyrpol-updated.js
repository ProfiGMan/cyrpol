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
	if (document.h_spelling.h_spelling[0].checked == true) h_spelling = true;
	else if (document.h_spelling.h_spelling[1].checked == true) h_spelling = false;
	
	if (document.long_o.long_o[0].checked == true) long_o = true;
	else if (document.long_o.long_o[1].checked == true) long_o = false;

	if (document.ogonek.ogonek[0].checked == true) old_nasal_vowels = true;
	else if (document.ogonek.ogonek[1].checked == true) old_nasal_vowels = false;
	
	if (document.soft_td_spelling.soft_td_spelling[0].checked == true) soft_td_spelling = "tjdj";
	else if (document.soft_td_spelling.soft_td_spelling[1].checked == true) soft_td_spelling = "cjdzj";
	
	if (document.soft_r_spelling.soft_r_spelling[0].checked == true) soft_r_spelling = "rj";
	else if (document.soft_r_spelling.soft_r_spelling[1].checked == true) soft_r_spelling = "rhacek";
	
	if (document.soft_clusters_spelling.soft_clusters_spelling.checked == true) soft_clusters_spelling = "asAWhole";
	else soft_clusters_spelling = "individually";
	
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
	
	// oddzielne słowa
	iW = (iW.replace(/sinus/g,"сінус")); 
	
	// "i" that doesn't soften the consonant and is used in loanwords 
	iW = (iW.replace(/ti/g,"ті"));
	iW = (iW.replace(/di/g,"ді")); 
	iW = (iW.replace(/ri/g,"рі")); 
	iW = (iW.replace(/łi/g,"лі"));
	iW = (iW.replace(/czi/g,"чі")); 
	iW = (iW.replace(/dżi/g,"джі"));
	iW = (iW.replace(/żi/g,"жі")); 
	iW = (iW.replace(/szi/g,"ші")); 
	iW = (iW.replace(/szczi/g,"щі")); 
	iW = (iW.replace(/kio/g,"kіо")); 
	iW = (iW.replace(/kia/g,"kіа")); 
	iW = (iW.replace(/kiu/g,"kіу")); 
	iW = (iW.replace(/gio/g,"gіо")); 
	iW = (iW.replace(/gia/g,"gіа")); 
	iW = (iW.replace(/giu/g,"gіу"));
	iW = (iW.replace(/gii/g,"gіи"));	

	iW = (iW.replace(/ch/g,"х"));
	iW = (iW.replace(/j/g,"jj"));
	
	if (soft_r_spelling == "rj") iW = (iW.replace(/rz/g,"rj"));
	else if (soft_r_spelling == "rhacek") iW = (iW.replace(/rz/g,"р̌J")); 
	
	iW = (iW.replace(/cz/g,"čJ"));
	iW = (iW.replace(/sz/g,"šJ"));
	iW = (iW.replace(/ż/g,"žJ"));
	
	if (soft_td_spelling == "tjdj")
	{
		iW = (iW.replace(/ci/g,"ti"));
		iW = (iW.replace(/dzi/g,"di"));
		iW = (iW.replace(/ć/g,"tj"));
		iW = (iW.replace(/dź/g,"dj"));
	}
	else if (soft_td_spelling == "cjdzj")
	{
		iW = (iW.replace(/ć/g,"cj"));   
		iW = (iW.replace(/dź/g,"dzj")); 
	}
	
	iW = (iW.replace(/l/g,"lj"));
	iW = (iW.replace(/lji/g,"li"));
	iW = (iW.replace(/ł/g,"l"));
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
	iW = (iW.replace(/ió/g,"jó")); 
	
	// nauki które muszą mieć "і" zamiast "и"
	iW = (iW.replace(/bjoljog/g,"біоljog"));
	iW = (iW.replace(/ljogj/g,"лёгі")); 
	iW = (iW.replace(/ljogii/g,"лёгіи")); 
	iW = (iW.replace(/nomj/g,"номі")); 
	iW = (iW.replace(/nomii/g,"номіи")); 
	iW = (iW.replace(/tomj/g,"томі")); 
	iW = (iW.replace(/tomii/g,"томіи")); 
	iW = (iW.replace(/fj/g,"фі")); 
	iW = (iW.replace(/fii/g,"фіи")); 
	// logia+ (gia) fia+ nomia+ bio chemia grafia+ lurgia+ tomia+
	
	iW = (iW.replace(/i/g,"ji"));

	iW = (iW.replace(/ljlj/g,"llj")); // millenium
	
	if (soft_clusters_spelling == "asAWhole") 
	{
		iW = (iW.replace(/sjtj/g,"stj")); // iść
		iW = (iW.replace(/zjdj/g,"zdj")); // jeździć
		iW = (iW.replace(/sjcj/g,"scj")); // iść (if tj = cj)
		iW = (iW.replace(/sjdzj/g,"sdzj")); // jeździć (if dj = dzj)
		iW = (iW.replace(/sjpj/g,"spj")); // śpiewać, śpieszyć and wspierać, wspiąć się would be spellt the same
		iW = (iW.replace(/zjbj/g,"zbj")); // rzeźbić and zbierać would be spellt the same
		iW = (iW.replace(/sjnj/g,"snj")); // śnić, głośnik
		iW = (iW.replace(/zjnj/g,"znj")); // użyźnić
		iW = (iW.replace(/sjmj/g,"smj")); // śmierć and kosmiczny would be spellt the same
		iW = (iW.replace(/zjmj/g,"zmj")); // no words with "źmi-" but rozmiar, zmiąć
		//iW = (iW.replace(/tjvj/g,"tvj")); // twierdzić and ćwiczyć would be spellt the same
		//iW = (iW.replace(/djvj/g,"dvj")); // dwie and dźwięk would be spellt the same
		iW = (iW.replace(/sjvj/g,"svj")); // świt, świat
		iW = (iW.replace(/zjvj/g,"zvj")); // wieźć, orzeźwić and zwierzę, rozwijać would be spellt the same
		iW = (iW.replace(/sjlj/g,"slj")); // jeśli, myśliciel ale gusli
		iW = (iW.replace(/zjlj/g,"zlj")); // źle ale zlew
		iW = (iW.replace(/sjr/g,"srj"));
		iW = (iW.replace(/zjr/g,"zrj"));
	}

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
	iW = (iW.replace(/jó/g,"JêV"));
	iW = (iW.replace(/ju/g,"JюV"));
	iW = (iW.replace(/ją/g,"JѭV"));
	iW = (iW.replace(/ję/g,"JѩV"));
	iW = (iW.replace(/a/g,"аV"));
	iW = (iW.replace(/e/g,"эV"));
	iW = (iW.replace(/y/g,"ыV"));
	iW = (iW.replace(/o/g,"оV"));
	iW = (iW.replace(/ó/g,"ôV")); 
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
	iW = (iW.replace(/h/g,"ґ"));
	iW = (iW.replace(/m/g,"м"));
	iW = (iW.replace(/n/g,"н"));
	iW = (iW.replace(/l/g,"л"));
	iW = (iW.replace(/r/g,"р"));
	iW = (iW.replace(/šč/g,"щ"));
	iW = (iW.replace(/č/g,"ч"));
	iW = (iW.replace(/š/g,"ш"));
	iW = (iW.replace(/ž/g,"ж"));
	iW = (iW.replace(/c/g,"ц"));
	iW = (iW.replace(/цьъ/g,"цъ")); 
	iW = (iW.replace(/сьъ/g,"съ")); 
	iW = (iW.replace(/зьъ/g,"зъ")); 
	
	iW = (iW.replace(/ьъ/g,"й")); // fixes jidysz - ьъидыш to йидыш
	iW = (iW.replace(/ьь/g,"й"));
	
	if (h_spelling == false) iW = (iW.replace(/ґ/g,"х"));
	
	if (long_o == false)	
	{
		iW = (iW.replace(/ô/g,"у"));
		iW = (iW.replace(/ê/g,"ю"));
	}

	if (old_nasal_vowels == false)
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
