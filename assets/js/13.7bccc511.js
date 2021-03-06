(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{384:function(e,t,s){"use strict";s.r(t);var a=s(45),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"overthewire-krypton"}},[e._v("OverTheWire Krypton")]),e._v(" "),s("h3",{attrs:{id:"level-0-→-level-1"}},[e._v("Level 0 → Level 1")]),e._v(" "),s("blockquote",[s("p",[s("strong",[e._v("Level Info")])]),e._v(" "),s("p",[e._v("Welcome to Krypton! The first level is easy. The following string encodes the password using Base64:")]),e._v(" "),s("p",[e._v("S1JZUFRPTklTR1JFQVQ=\nUse this password to log in to krypton.labs.overthewire.org with username krypton1 using SSH on port 2231. You can find the files for other levels in /krypton/")])]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"S1JZUFRPTklTR1JFQVQ="')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" base64 -d\nKRYPTONISGREAT\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("Pass : "),s("code",[e._v("KRYPTONISGREAT")])]),e._v(" "),s("p",[s("code",[e._v("krypton1:KRYPTONISGREAT")])]),e._v(" "),s("h2",{attrs:{id:"level-1-→-level-2"}},[e._v("Level 1 → Level 2")]),e._v(" "),s("blockquote",[s("p",[e._v("The password for level 2 is in the file ‘krypton2’. It is ‘encrypted’ using a simple rotation. It is also in non-standard ciphertext format. When using alpha characters for cipher text it is normal to group the letters into 5 letter clusters, regardless of word boundaries. This helps obfuscate any patterns. This file has kept the plain text word boundaries and carried them to the cipher text. Enjoy!")])]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" /krypton/krypton1\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("ls")]),e._v(" \nkrypton2  README\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("cat")]),e._v(" krypton2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("tr")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"A-Z"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"N-ZA-M"')]),e._v("\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Un simple ROT13, chiffrement de césar")]),e._v("\nLEVEL TWO PASSWORD ROTTEN\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("p",[e._v("Pass : "),s("code",[e._v("ROTTEN")])]),e._v(" "),s("p",[s("code",[e._v("krypton2:ROTTEN")])]),e._v(" "),s("h2",{attrs:{id:"level-2-→-level-3"}},[e._v("Level 2 → Level 3")]),e._v(" "),s("blockquote",[s("p",[e._v("ROT13 is a simple substitution cipher.")]),e._v(" "),s("p",[e._v("Substitution ciphers are a simple replacement algorithm. In this example of a substitution cipher, we will explore a ‘monoalphebetic’ cipher. Monoalphebetic means, literally, “one alphabet” and you will see why.")]),e._v(" "),s("p",[e._v("This level contains an old form of cipher called a ‘Caesar Cipher’. A Caesar cipher shifts the alphabet by a set number. For example:")]),e._v(" "),s("p",[e._v("plain:  a b c d e f g h i j k ...\ncipher: G H I J K L M N O P Q ...\nIn this example, the letter ‘a’ in plaintext is replaced by a ‘G’ in the ciphertext so, for example, the plaintext ‘bad’ becomes ‘HGJ’ in ciphertext.")]),e._v(" "),s("p",[e._v("The password for level 3 is in the file krypton3. It is in 5 letter group ciphertext. It is encrypted with a Caesar Cipher. Without any further information, this cipher text may be difficult to break. You do not have direct access to the key, however you do have access to a program that will encrypt anything you wish to give it using the key. If you think logically, this is completely easy.")]),e._v(" "),s("p",[e._v("One shot can solve it!")]),e._v(" "),s("p",[e._v("Have fun.")]),e._v(" "),s("p",[e._v("Additional Information:")]),e._v(" "),s("p",[e._v("The encrypt binary will look for the keyfile in your current working directory. Therefore, it might be best to create a working direcory in /tmp and in there a link to the keyfile. As the encrypt binary runs setuid krypton3, you also need to give krypton3 access to your working directory.")]),e._v(" "),s("p",[e._v("Here is an example:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("  krypton2@melinda:~$ mktemp -d\n  /tmp/tmp.Wf2OnCpCDQ\n  krypton2@melinda:~$ cd /tmp/tmp.Wf2OnCpCDQ\n  krypton2@melinda:/tmp/tmp.Wf2OnCpCDQ$ ln -s /krypton/krypton2/keyfile.dat\n  krypton2@melinda:/tmp/tmp.Wf2OnCpCDQ$ ls\n  keyfile.dat\n  krypton2@melinda:/tmp/tmp.Wf2OnCpCDQ$ chmod 777 .\n  krypton2@melinda:/tmp/tmp.Wf2OnCpCDQ$ /krypton/krypton2/encrypt /etc/issue\n  krypton2@melinda:/tmp/tmp.Wf2OnCpCDQ$ ls\n  ciphertext  keyfile.dat\n")])])])]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ mktemp -d\n/tmp/tmp.mVMkVFIM1x\n$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" /tmp/tmp.mVMkVFIM1x\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("ln")]),e._v(" -s /krypton/krypton2/keyfile.dat\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("chmod")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("777")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v("\n$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"abcdefghijklmnopqrstuvwxyz"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" alphabet\n$ /krypton/krypton2/encrypt alphabet\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("cat")]),e._v(" ciphertext\nMNOPQRSTUVWXYZABCDEFGHIJKL\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br")])]),s("p",[e._v("On connait ainsi la substitution, il y a eu une rotation de 12.\nAinsi :")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("cat")]),e._v(" /krypton/krypton2/krypton3 "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("tr")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'M-ZA-L'")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'A-Z'")]),e._v("\nCAESARISEASY\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("Pass : "),s("code",[e._v("CAESARISEASY")])]),e._v(" "),s("p",[s("code",[e._v("krypton3:CAESARISEASY")])]),e._v(" "),s("h2",{attrs:{id:"level-3-→-level-4"}},[e._v("Level 3 → Level 4")]),e._v(" "),s("blockquote",[s("p",[e._v("Well done. You’ve moved past an easy substitution cipher.")]),e._v(" "),s("p",[e._v("The main weakness of a simple substitution cipher is repeated use of a simple key. In the previous exercise you were able to introduce arbitrary plaintext to expose the key. In this example, the cipher mechanism is not available to you, the attacker.")]),e._v(" "),s("p",[e._v("However, you have been lucky. You have intercepted more than one message. The password to the next level is found in the file ‘krypton4’. You have also found 3 other files. (found1, found2, found3)")]),e._v(" "),s("p",[e._v("You know the following important details:")]),e._v(" "),s("p",[e._v("The message plaintexts are in English (*** very important) - They were produced from the same key (*** even better!)\nEnjoy.")])]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" /krypton/krypton3\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("cat")]),e._v(" found1\nCGZNL YJBEN QYDLQ ZQSUQ NZCYD SNQVU BFGBK GQUQZ QSUQN UZCYD SNJDS UDCXJ ZCYDS NZQSU QNUZB WSBNZ QSUQN UDCXJ CUBGS BXJDS UCTYV SUJQG WTBUJ KCWSV LFGBK GSGZN LYJCB GJSZD GCHMS UCJCU QJLYS BXUMA UJCJM JCBGZ CYDSN CGKDC ZDSQZ DVSJJ SNCGJ DSYVQ CGJSO JCUNS YVQZS WALQV SJJSN UBTSX COSWG MTASN BXYBU CJCBG UWBKG JDSQV YDQAS JXBNS OQTYV SKCJD QUDCX JBXQK BMVWA SNSYV QZSWA LWAKB MVWAS ZBTSS QGWUB BGJDS TSJDB WCUGQ TSWQX JSNRM VCMUZ QSUQN KDBMU SWCJJ BZBTT MGCZQ JSKCJ DDCUE SGSNQ VUJDS SGZNL YJCBG UJSYY SNXBN TSWAL QZQSU QNZCY DSNCU BXJSG CGZBN YBNQJ SWQUY QNJBX TBNSZ BTYVS OUZDS TSUUM ZDQUJ DSICE SGNSZ CYDSN QGWUJ CVVDQ UTBWS NGQYY VCZQJ CBGCG JDSNB JULUJ STQUK CJDQV VUCGE VSQVY DQASJ UMAUJ CJMJC BGZCY DSNUJ DSZQS UQNZC YDSNC USQUC VLANB FSGQG WCGYN QZJCZ SBXXS NUSUU SGJCQ VVLGB ZBTTM GCZQJ CBGUS ZMNCJ LUDQF SUYSQ NSYNB WMZSW TBUJB XDCUF GBKGK BNFAS JKSSG QGWDC USQNV LYVQL UKSNS TQCGV LZBTS WCSUQ GWDCU JBNCS UESGN SUDSN QCUSW JBJDS YSQFB XUBYD CUJCZ QJCBG QGWQN JCUJN LALJD SSGWB XJDSU COJSS GJDZS GJMNL GSOJD SKNBJ STQCG VLJNQ ESWCS UMGJC VQABM JCGZV MWCGE DQTVS JFCGE VSQNQ GWTQZ ASJDZ BGUCW SNSWU BTSBX JDSXC GSUJS OQTYV SUCGJ DSSGE VCUDV QGEMQ ESCGD CUVQU JYDQU SDSKN BJSJN QECZB TSWCS UQVUB FGBKG QUNBT QGZSU QGWZB VVQAB NQJSW KCJDB JDSNY VQLKN CEDJU TQGLB XDCUY VQLUK SNSYM AVCUD SWCGS WCJCB GUBXI QNLCG EHMQV CJLQG WQZZM NQZLW MNCGE DCUVC XSJCT SQGWC GJKBB XDCUX BNTSN JDSQJ NCZQV ZBVVS QEMSU YMAVC UDSWJ DSXCN UJXBV CBQZB VVSZJ SWSWC JCBGB XDCUW NQTQJ CZKBN FUJDQ JCGZV MWSWQ VVAMJ JKBBX JDSYV QLUGB KNSZB EGCUS WQUUD QFSUY SQNSU\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v("On va faire une analyse de fréquence sur les 3 fichier "),s("code",[e._v("foundx")]),e._v(". Et ainsi avoir la correspondance des lettres.\nhttps://md5decrypt.net/en/Letters-frequency-analysis/")]),e._v(" "),s("p",[e._v("Pass : ``")]),e._v(" "),s("p",[s("code",[e._v("krypton4:")])]),e._v(" "),s("h2",{attrs:{id:"level-4-→-level-5"}},[e._v("Level 4 → Level 5")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("Pass : ``")]),e._v(" "),s("p",[s("code",[e._v("krypton5:")])]),e._v(" "),s("h2",{attrs:{id:"level-5-→-level-6"}},[e._v("Level 5 → Level 6")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("Pass : ``")]),e._v(" "),s("p",[s("code",[e._v("krypton6:")])]),e._v(" "),s("h2",{attrs:{id:"level-6-→-level-7"}},[e._v("Level 6 → Level 7")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("Pass : ``")]),e._v(" "),s("p",[s("code",[e._v("krypton7:")])]),e._v(" "),s("h2",{attrs:{id:"level-7"}},[e._v("Level 7")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("\n\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);