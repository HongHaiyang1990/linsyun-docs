(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{290:function(e,t,v){"use strict";v.r(t);var _=v(7),a=Object(_.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"签名说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#签名说明"}},[e._v("#")]),e._v(" 签名说明")]),e._v(" "),t("h2",{attrs:{id:"签名步骤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#签名步骤"}},[e._v("#")]),e._v(" 签名步骤")]),e._v(" "),t("ol",[t("li",[e._v("接口请求参数中 "),t("code",[e._v("memberCode")]),e._v("、"),t("code",[e._v("updateMarkNo")]),e._v("、"),t("code",[e._v("timestamp")]),e._v("参与签名")]),e._v(" "),t("li",[e._v("将所有参与签名字段按照参数名的字典顺序排序")]),e._v(" "),t("li",[e._v("将参数与值按照顺序拼接，列如："),t("code",[e._v("a=1")]),e._v("、"),t("code",[e._v("c=3")]),e._v("、"),t("code",[e._v("b=2")]),e._v(" 变为 "),t("code",[e._v("a1b2c3")])]),e._v(" "),t("li",[e._v("将密钥作为参数"),t("code",[e._v("appSecret={key}")]),e._v("，按第3步规则拼接到排序字符串中，列如：参与签名字段是"),t("code",[e._v("a1b2c3")]),e._v("，密钥字段"),t("code",[e._v("appSecret{key}")]),e._v("， 则变为"),t("code",[e._v("appSecret{key}a1b2c3")]),e._v("，这时我们定义他为signStr。（signStr="),t("code",[e._v("appSecrt")]),e._v("+"),t("code",[e._v("{key}")]),e._v("+"),t("code",[e._v("a1b2c3")]),e._v("）；")]),e._v(" "),t("li",[e._v("将"),t("code",[e._v("key")]),e._v("+"),t("code",[e._v("排序后的参数")]),e._v("+"),t("code",[e._v("secret")]),e._v(",得到加密前字符串，此时的字符串为："),t("code",[e._v("key")]),e._v("+"),t("code",[e._v("signStr")]),e._v("+"),t("code",[e._v("secret")]),e._v("；")]),e._v(" "),t("li",[e._v("对加密前的字符串进行 SHA1 加密，然后转为大写字符串，得到签名；")]),e._v(" "),t("li",[e._v("将得到的签名值请求参数sign；")])]),e._v(" "),t("h2",{attrs:{id:"签名示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#签名示例"}},[e._v("#")]),e._v(" 签名示例")]),e._v(" "),t("p",[t("strong",[e._v("以请求入参示例中的数据做出签名")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("\n# 秘钥{key}\n8277AF3DF5164A41928A5772ECE43874\n\n# 第3步得到的字符串\nmemberCodeSH123456timestamp2000-01-01 10:10:10updateMarkNoA001\n\n# 第4步得到的字符串\nappSecret8277AF3DF5164A41928A5772ECE43874memberCodeSH123456timestamp2000-01-01 10:10:10updateMarkNoA001\n\n# 第5步得到的字符串为\nkeyappSecret8277AF3DF5164A41928A5772ECE43874memberCodeSH123456timestamp2000-01-01 10:10:10updateMarkNoA001secret\n\n# 第6步得到的签名值sign为\n575ABFD919C616A3145FBA0BDD3D11F95D7217EA\n\n")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);