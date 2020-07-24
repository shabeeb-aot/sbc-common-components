(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{174:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("This is an abstraction over they keycloak javascript adapter providing some methods to refresh the token.\nThe abstraction is provided so that COOPS-UI project or any other consumer of auth-web can stay independent of keycloak logic.")]),t._v(" "),t._m(1),s("p",[t._v("It has two optional arguments:")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),s("p",[t._v("In this case , it runs a timer [a plain old javascript settimeout] . It calculates the expiry of current keycloak token and schedules a timeout before 2 seconds of expiry\nSince the timers get destroyed on page refresh , execute the logic in start up or when user signs in")]),t._v(" "),s("p",[t._v("A sample usage:")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Initialize "),s("router-link",{attrs:{to:"./../Signin/#keycloak-initialization"}},[t._v("keycloak config")])],1)]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7)]),t._v(" "),t._m(8),t._v(" "),s("p",[t._v("If a one time refreshal of logic is needed, the service has the method refreshToken() which can be employed.")]),t._v(" "),s("p",[t._v("When KC is initialised using token, the token gets refreshed. So init itself refreshes. The below code will refresh")]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._m(11),t._v(" "),s("hr"),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),s("p",[t._v("This function will get the user info from the logged in user's keycloak token")]),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),s("hr"),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),s("p",[t._v("This function will verify whether the current logged in keycloak token has the allowed roles based on the role array passing via parameters")]),t._v(" "),t._m(18),t._v(" "),t._m(19),t._m(20)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"keycloakservice"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keycloakservice"}},[this._v("#")]),this._v(" KeycloakService")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("KeyCloakService"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("initializeToken")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("store"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("isScheduleRefresh"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Argument")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("strong",[t._v("store")])]),t._v(" "),s("td",[t._v("vuex store")]),t._v(" "),s("td",[t._v("optional argument to pass the store of the app (default: null)")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("isScheduleRefresh")])]),t._v(" "),s("td",[t._v("boolean")]),t._v(" "),s("td",[t._v("optional argument to disable/enable scheduled refresh (default: true)")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("It supports two modes for "),e("strong",[this._v("refreshing the token")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"timer-mode"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#timer-mode"}},[this._v("#")]),this._v(" Timer Mode")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("Register the component in vue")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("Import keycloak service in the component:")]),this._v(" "),e("p",[e("code",[this._v("import KeyCloakService from 'sbc-common-components/src/services/keycloak.services'")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("p",[t._v("Start the timer")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$store"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getters"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'auth/isAuthenticated'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" KeyCloakService"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("initializeToken")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$store"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"one-time-refresh"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#one-time-refresh"}},[this._v("#")]),this._v(" One time Refresh")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("import KeyCloakService from 'sbc-common-components/src/services/keycloak.services'")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("    KeyCloakService"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("initializeToken")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$store"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("token")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      originalRequest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("headers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Authorization'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("Bearer ")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("token"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("axios")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("originalRequest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("catch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("error")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// cant refresh..Probably refresh token expired")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Promise"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reject")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("code",[this._v("KeyCloakService.refreshToken()")]),this._v(": will refresh the token as well")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"get-user-info"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get-user-info"}},[this._v("#")]),this._v(" Get User Info")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("KeyCloakService.getUserInfo()")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("import { KCUserProfile } from 'sbc-common-components/src/models/KCUserProfile'")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("em",[this._v("KCUserProfile")]),this._v(" can be used as the model for the "),e("em",[this._v("getUserInfo()")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"verify-roles"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#verify-roles"}},[this._v("#")]),this._v(" Verify Roles")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("KeyCloakService.verifyRoles(allowedRoles, disabledRoles)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("eg:")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("KeyCloakService"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("verifyRoles")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'admin'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'coordinator'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'basic_user'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("here, the function will return true if the logged in KC token has roles "),e("code",[this._v("admin")]),this._v(" or "),e("code",[this._v("cooordinator")]),this._v(" and return false if it has "),e("code",[this._v("basic_user")])])}],!1,null,null,null);e.default=n.exports}}]);