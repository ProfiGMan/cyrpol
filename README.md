# cyrpol-original
A Cyrillic orthography for the Polish language - © Jan van Steenbergen, September 2008  
See the original at: http://steen.free.fr/cyrpol/index.html  
Original JavaScript file at: http://steen.free.fr/scripts/cyrpol.js

## Ортографя цырылицка для ѩзыка польскего  
**Ortografia cyrylicka dla języka polskiego**  
**A Cyrillic orthography for the Polish language**  

Ever wondered what Polish would look like if it were written in Cyrillic? Perhaps you have. Or not. In any case, I have. That's what happens when you spend half of your life working on language projects that one way or another are related to Polish or the Slavic languages in general. Toying around with Polish, Slavic, as well as with several Slavic orthographies, it is hard not to think about the possibilities of a Cyrillic orthography for Polish.

Many people have argued that Cyrillic would be unsuitable for Polish. I disagree with that opinion. Granted, Polish phonology differs from that of the other Slavic languages in several ways, but these two facts remain: Polish is a completely Slavic language by any standard, and Cyrillic, unlike the Latin alphabet, was made especially to fit Cyrillic phonology, and therefore is perfectly suited for it. Therefore, I am convinced that Polish and Cyrillic are a perfect match. Much more so, in fact, than Polish and the Latin alphabet. Latin orthographies of Slavic languages always have one of the following two disadvantages: either they are full of diacritical marks, or they look horribly like English or another Western language. Slovene manages best, but still has **š**, **ž** and **č**. Other languages have more of those babies. Polish orthography has managed to avoid hačeks, but has a whole bunch of other diacritics instead: **ą**, **ę**, **ł**, **ż**, **ć**, **ń**, **ó**, **ś**, **ź**. Besides, Polish in addition tends to favour digraphs like **sz** and **ie**, so Polish words tend to be appear longer than they actually are.

Now, I am quite fond of Polish orthography, and therefore my Cyrillic orthography of Polish should by no means be treated as a serious proposal to replace Polish orthography. If anyone would ever make such a proposal, I would be the first to stand up against it. This project, therefore, is primarily a thought experiment, my answer to the question if such an orthography would be possible at all.

The idea, by the way, is not new at all. If we have to believe Wikipedia, Russia's czar Nikolay I intended to cyrillify Polish in the mid-19th century as a means for russification, although at last nothing came of his plans. Here is a sample:

> **Поврóтъ Таты, пр̌езъ А. Мицкевича**
>
> Пóйдзьце о дзятки, пóйдзьце вшистке разэм  
> За място, подъ слупъ на взгóрэкъ,  
> Тамъ пр̌едъ цудовнымъ клęкнийце образэмъ,  
> Побожне змóвце пацёрэкъ.  
> 
> Тато не враца ранки и вечоры  
> Вэ Лзах го чекамъ и трводзэ;  
> Розлялы р̌еки, пэлнэ звер̌а боры,  
> И пэлно збóйцóвъ на дродзэ;-  
>	
> Слышąцъ то дзятки бегнą вшистке разэмъ  
> За място подъ слупъ на взгóрэкъ,  
> Тамъ пр̌едъ цудовнымъ клęкая̨ образемъ,  
> И зачиная̨ пацёрэкъ.  
> 
> Цалуя̨ земę, потэмъ въ Имę Ойца,  
> Сына и Духа свęтэго,  
> Бąдзь похвалёна пр̌енайсьвęтша Трóйца  
> Тэразъ и часу вшелькего.  
> 
> (...)

A few pecularities in this text deserve our attention:

* the use of the letter **р̌** for Polish **rz**;
* the hard sign **ъ** at the end of many words (a feature common in prerevolutionary Russian);
* the fact that Polish **ó** remains untouched;
* this orthography inherits the Polish ogonek and adds it to Cyrillic letters;
* the use of **ць** and **дзь** where Polish has **ć** and **dź**, a feature also present in contemporary Belarusian. 

My own Cyrillic orthography for Polish is largely based on the same premises, but there are a few differences as well, which I will describe below. By the way, it should be noted that the transcription quoted above is not the only attempt at a Cyrillic alphabet for Polish. Several people have played with the idea, seriously or less seriously. An interesting example is [Jusowica (Юсовица)](http://varpho.livejournal.com/2006/11/17/), created by Szymon Pawlas.

---
The biggest problem related with the Cyrillisation of Polish are sounds that do not exist in other languages, nor do they correspond closely with anything else that exist in them: the nasal vowels ą and ę. The 19th century Russian solution is in fact a pretty funny one: it simply teleports the ogonek to Cyrillic, thus producing four characters that have never seen before in Cyrillic: а̨, э̨, я̨ and е̨ (the latter two representing ją and ję respectively). A funny solution indeed! And an unnecessary one to that, because Old Church Slavonic has precisely four Cyrillic characters for exactly these four sounds: ѫ, ѧ, ѭ and ѩ. True, they are uncommon, because the only living Slavic language that preserved these sounds is Polish, a language that happens to be written in Latin alphabet. But since these letters are around, why shouldn't we simply use them? After all, they exist, and are indefinitely more Cyrillic than Cyrillic letters with ogoneks beneath them. Besides, the choice for а̨ and я̨ is equally unlogical as the Polish letter ą itself, since it is pronounced as nasalised o; it is not for nothing that the Latin transcription of Old Church Slavonic uses ǫ.

Another specifically Polish letter is the ó, pronounced as [u] (its Czech equivalent is ů). The transcription mentioned above conveniently keeps it. But why would we? It has no pronunciation of its own; the only thing that distinguishes it from u is that it alternates with o. Incidentally, mixing up those two is the most common spelling mistake in Polish. As far as I am concerned, there is no reason to keep it. Since miasto alternates with mieście (and not with miæście or something), why can't grud alternate with grodzie? So let's be bold and use у instead.

The characters ć and dź could of course be rendered like Belarusian (and in a way, Polish) does, by using ць and дзь, but I'd much prefer ть and дь. Etymologically speaking, this is more correct; after all ć/dź are the softened equivalents of t/d, not of c/dz. Sequences like ti and di are rare in Polish and occur only in foreign words. In these rare cases, we could write радио and тиара (a Pole will know that they are to be read as radio and tiara and not like radzio or ciara). Or, if we want to be really sure that the t will not be softened in these cases, we could use the hard sign and write радъио and тъиара.
Using ть/дь instead of ць/дзь has one more advantage: now at least will not have to worry about the sequence cja, which is unambiguously rendered as ця.

Same goes for the digraphy rz, which in Polish is pronounced like ż. Another common source of spelling errors. Yet, I wouldn't propose transcribing it to ж, for the same etymological reasons: rz comes from softened r, while ż comes from softened g. The fact that it sounds very different does not change that fact. Therefore, we simply use рь (and not this weird creation from the 19th century, р̌). Just like ti and di, ri is a rare sequence in Polish that occurs only in foreign words, so I propose the same solution for it as well.

And then we have the letter e. Because in Polish palatalising e is way more numerous than its non-palatalising equivalent, we will use Cyrillic e for the former (usually rendered as je or ie) and э for the latter. This is also what the 19th century version does.

The choice for other Cyrillic letters is merely a matter of picking an option. For example, how do we represent i and y? Do we follow the Russian model and pick и/ы or do we prefer the Ukrainian model and pick і/и? Both are possible, but I've decided to follow the Russian model. Also, when preceded by cz, sz or ż we write и instead of ы – just like Russian does. Again, a matter of etymology.

So, let's see now what Cyrylica Polska looks like.

---
### Alphabet

Cyrylica Polska has 37 letters. Exactly the same as the 33 letters of the Russian alphabet, with four additional characters for the nasals:

> А Б В Г Д Е Ë Ж З И Й К Л М Н О П Р С Т У Ф Х Ц Ч Ш Щ Ъ Ы Ь Э Ю Я Ѧ Ѫ Ѩ Ѭ

---
### Vowels

Every vowel has a hardening and a softening version. Both can occur in two possitions: either it follows a consonant, or it doesn't (in that case it is either word-initial or after another vowel). In Polish orthography, when a softening vowel follows a consonant, it is preceded by i, unless the consonant in question is inherently soft. In other positions this vowel is preceded by j. The only exceptions are i, which is softening by definition, and y, which is never softening.
Just like i and y form a pair, in Cyrillic all vowels come in pairs, as you can see in the table below:
  	
Latin<br>hard |Latin<br>soft |Cyrylica<br>hard |Cyrylica<br>soft
--------|-------|-------|-----
a 	|ia/ja 	|а 	|я
e 	|ie/je 	|э 	|е
y 	|i 	|ы 	|и
o 	|io/jo 	|о 	|ë
ó<br>u 	|ió/jó<br>iu/ju	|у 	|ю
ą 	|ią/ją 	|ѫ 	|ѭ
ę 	|ię/ję 	|ѧ 	|ѩ

---
### Consonants

Now that the question of palatalised vs. non-palalalised consonant has been resolved by the vowels that follow them, the consonants have suddenly become very simple to handle. Here goes:

Latin   |Cyrylica
--------|--------
p 	|п
b 	|б
f 	|ф
w 	|в
t, ć 	|т
d, dź 	|д
s, ś 	|с
z, ź 	|з
k 	|к
g 	|г
ch<br>h |х
	
Latin   |Cyrylica
--------|--------
sz 	|ш
ż 	|ж
cz 	|ч
szcz 	|щ
c 	|ц
m 	|м
n 	|н
ł, l 	|л
r, rz 	|р
j 	|й
ь 	|soft sign
ъ 	|hard sign

A few notes:

* Most consonants can be soft (palatalised) or hard. Whether a Cyrillic д should be read as d or dź is decided by the consonant that follows it: дэ should be read as de, де should be read as dzie.
* If a soft consonant is not followed by a vowel, i.e. when it is word- or syllable-final, it is followed by the soft sign: bat becomes бат, bać becomes бать.
* In reality, the soft sign will occur only after т, д, н, л, and р. However, in a few cases it can be placed after another consonant as well, although that wouldn't affect pronunciation. For example, take these two Polish cities: Kraków and Wrocław. When declined, the former has a hard w, the latter a soft w, and so their genitives are Krakowa and Wrocławia respectively. In Cyrillic, we could easily write Вроцлавь for "Wrocław", to make this fact predictable.
* Most consonant clusers as palatalised as a whole, and only in a few cases consonants in such a cluster are palatalised individually. Therefore, śmiałość is written смялость, and not сьмялосьть.
* The consonant clusters śr and źr (historically from ser-/zer- > srze-/zrze-, in some dialects strz/zdrz or rś/rź) are treated as sr/zr + palataliser: środa therefore becomes срëда, źródło becomes зрюдло.
* When a hard consonant is followed by a palatalising vowel, the hard sign is used to prevent it from being palatalised. For example, zjeść is written зъесть, because зесть would be read as zieść.
* This alphabet contains the Cyrillic letters щ for szcz, but that is just an arbitrary choice. Russian, Ukrainian and Bulgarian have this letter, Belarusian, Serbian and Macedonian manage without it. 

---
### Example

To give an example of Polish Cyrillic, let's use the same text as the one quoted above:

Powrót Taty, przez A. Mickiewicza | Поврут Таты, през А. Мицкевича
----------------------------------|-------------------------------
Pójdźcie o dziatki, pójdźcie wszystkie razem<br>Za miasto, pod słup na wzgórek,<br>Tam przed cudownym klęknijcie obrazem,<br>Pobożnie zmówcie paciorek.<br><br>Tato nie wraca ranki i wieczory<br>we łzach go czekam i trwodze;<br>Rozlały rzeki, pełne zwierza bory,<br>I pełno zbójców na drodze;-<br><br>Słysząc to dziatki biegną wszystkie razem<br>Za miasto pod słup na wzgórek,<br>Tam przed cudownym klękają obrazem,<br>I zaczynają paciorek.<br><br>Całują ziemię, potem w Imię Ojca,<br>Syna i Ducha świętego,<br>Bądź pochwalona przenajświętsza Trójca<br>Teraz i czasu wszelkiego.<br><br>(...)  | Пуйдьте о дятки, пуйдьте вшистке разэм<br>За място, под слуп на взгурэк,<br>Там пред цудовным клѩкнийте образэм,<br>Побожне змувте патëрэк.<br><br>Тато не враца ранки и вечоры<br>вэ лзах го чекам и трводзэ;<br>Розлялы реки, пэлнэ зверя боры,<br>И пэлно збуйцув на дродзэ;-<br><br>Слышѫц то дятки бегнѫ вшистке разэм<br>За място под слуп на взгурэк,<br>Там пред цудовным клѩкаѭ образэм,<br>И зачинаѭ патëрэк.<br><br>Цалуѭ земѩ, потэм в Имѩ Ойца,<br>Сына и Духа свѩтэго,<br>Бѫдь похвалëна пренайсвѩтша Труйца<br>Тэраз и часу вшелькего.<br><br>(...)

---
### Transcription
(See [index.html](https://github.com/dimitrius-brest/cyrpol-original/blob/master/index.html) and [cyrpol.js](https://github.com/dimitrius-brest/cyrpol-original/blob/master/cyrpol.js))  

---
© [Jan van Steenbergen](mailto:wenedyk@yahoo.co.uk), September 2008  
Last update: 31 III 2010
