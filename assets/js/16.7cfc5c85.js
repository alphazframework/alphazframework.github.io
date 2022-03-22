(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{415:function(t,s,e){"use strict";e.r(s);var a=e(56),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"logger"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#logger"}},[t._v("#")]),t._v(" Logger")]),t._v(" "),e("p",[t._v("Logging is one of the most ubiquitous tasks encountered in PHP. We use logs to track error messages, record important events, and debug problems with the code.")]),t._v(" "),e("h2",{attrs:{id:"use-logger"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#use-logger"}},[t._v("#")]),t._v(" Use logger")]),t._v(" "),e("div",{staticClass:"language-php line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$logger")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name class-name-fully-qualified"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Zest"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Common"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Logger"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Logger")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$logger")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("notice")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'This file {file} is not found'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'file'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'user.jpg'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Display the log msg")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// var_dump($logger->get);")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$logger")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'message'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//echo View::view('Home/index');")]),t._v("\n\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br")])]),e("p",[t._v("the  "),e("code",[t._v("get()")]),t._v("  method return array , level and message")]),t._v(" "),e("h2",{attrs:{id:"log-file"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#log-file"}},[t._v("#")]),t._v(" Log file")]),t._v(" "),e("p",[t._v("Log file is locate in  "),e("code",[t._v("Storage/Data/.logs")])]),t._v(" "),e("h2",{attrs:{id:"levels"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#levels"}},[t._v("#")]),t._v(" Levels")]),t._v(" "),e("ul",[e("li",[t._v("emergency =>  "),e("code",[t._v("$logger->emergency(msg,[context])")])]),t._v(" "),e("li",[t._v("alert =>  "),e("code",[t._v("$logger->alert(msg,[context])")])]),t._v(" "),e("li",[t._v("critical =>  "),e("code",[t._v("$logger->emergency(msg,[critical])")])]),t._v(" "),e("li",[t._v("error =>  "),e("code",[t._v("$logger->error(msg,[context])")])]),t._v(" "),e("li",[t._v("warning =>  "),e("code",[t._v("$logger->warning(msg,[context])")])]),t._v(" "),e("li",[t._v("notice =>  "),e("code",[t._v("$logger->notice(msg,[context])")])]),t._v(" "),e("li",[t._v("info =>  "),e("code",[t._v("$logger->info(msg,[context])")])]),t._v(" "),e("li",[t._v("debug =>  "),e("code",[t._v("$logger->debug(msg,[context])")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);