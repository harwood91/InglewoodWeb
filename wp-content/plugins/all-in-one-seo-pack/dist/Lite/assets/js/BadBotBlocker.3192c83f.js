import{b,u as _}from"./links.28fcc512.js";import{B}from"./Textarea.2ca1c9ed.js";import{C as g}from"./index.c39be324.js";import{C as f}from"./Card.3daf7a6f.js";import{C as S}from"./SettingsRow.b0e0fbda.js";import{r as i,c as h,d as r,w as n,o as c,b as d,f as p}from"./vue.runtime.esm-bundler.588d3a9f.js";import{_ as V}from"./_plugin-vue_export-helper.a6f24833.js";import"./default-i18n.3881921e.js";import"./isArrayLikeObject.10b615a9.js";import"./Caret.4d98c50a.js";import"./Tooltip.0e57efe0.js";import"./Slide.5fb4a175.js";import"./Row.256ac4c7.js";/* empty css                                            */const x={setup(){return{optionsStore:b(),rootStore:_()}},components:{BaseTextarea:B,CoreAlert:g,CoreCard:f,CoreSettingsRow:S},data(){return{strings:{badBotBlocker:this.$t.__("Bad Bot Blocker",this.$td),blockBadBotsHttp:this.$t.__("Block Bad Bots using HTTP",this.$td),blockReferralSpamHttp:this.$t.__("Block Referral Spam using HTTP",this.$td),trackBlockedBots:this.$t.__("Track Blocked Bots",this.$td),useCustomBlocklists:this.$t.__("Use Custom Blocklists",this.$td),userAgentBlocklist:this.$t.__("User Agent Blocklist",this.$td),refererBlockList:this.$t.__("Referer Blocklist",this.$td),blockedBotsLog:this.$t.__("Blocked Bots Log",this.$td),logLocation:this.$t.sprintf(this.$t.__("The log for the blocked bots is located here: %1$s",this.$td),'<br><a href="'+this.rootStore.aioseo.urls.blockedBotsLogUrl+'" target="_blank">'+this.rootStore.aioseo.urls.blockedBotsLogUrl+"</a>")}}}},y={class:"aioseo-tools-bad-bot-blocker"};function C(H,t,L,o,s,R){const a=i("base-toggle"),l=i("core-settings-row"),m=i("base-textarea"),k=i("core-alert"),u=i("core-card");return c(),h("div",y,[r(u,{slug:"badBotBlocker","header-text":s.strings.badBotBlocker},{default:n(()=>[r(l,{name:s.strings.blockBadBotsHttp},{content:n(()=>[r(a,{modelValue:o.optionsStore.options.deprecated.tools.blocker.blockBots,"onUpdate:modelValue":t[0]||(t[0]=e=>o.optionsStore.options.deprecated.tools.blocker.blockBots=e)},null,8,["modelValue"])]),_:1},8,["name"]),r(l,{name:s.strings.blockReferralSpamHttp},{content:n(()=>[r(a,{modelValue:o.optionsStore.options.deprecated.tools.blocker.blockReferer,"onUpdate:modelValue":t[1]||(t[1]=e=>o.optionsStore.options.deprecated.tools.blocker.blockReferer=e)},null,8,["modelValue"])]),_:1},8,["name"]),o.optionsStore.options.deprecated.tools.blocker.blockBots||o.optionsStore.options.deprecated.tools.blocker.blockReferer?(c(),d(l,{key:0,name:s.strings.useCustomBlocklists},{content:n(()=>[r(a,{modelValue:o.optionsStore.options.deprecated.tools.blocker.custom.enable,"onUpdate:modelValue":t[2]||(t[2]=e=>o.optionsStore.options.deprecated.tools.blocker.custom.enable=e)},null,8,["modelValue"])]),_:1},8,["name"])):p("",!0),o.optionsStore.options.deprecated.tools.blocker.blockBots&&o.optionsStore.options.deprecated.tools.blocker.custom.enable?(c(),d(l,{key:1,name:s.strings.userAgentBlocklist},{content:n(()=>[r(m,{minHeight:200,maxHeight:200,modelValue:o.optionsStore.options.deprecated.tools.blocker.custom.bots,"onUpdate:modelValue":t[3]||(t[3]=e=>o.optionsStore.options.deprecated.tools.blocker.custom.bots=e)},null,8,["modelValue"])]),_:1},8,["name"])):p("",!0),o.optionsStore.options.deprecated.tools.blocker.blockReferer&&o.optionsStore.options.deprecated.tools.blocker.custom.enable?(c(),d(l,{key:2,name:s.strings.refererBlockList},{content:n(()=>[r(m,{minHeight:200,maxHeight:200,modelValue:o.optionsStore.options.deprecated.tools.blocker.custom.referer,"onUpdate:modelValue":t[4]||(t[4]=e=>o.optionsStore.options.deprecated.tools.blocker.custom.referer=e)},null,8,["modelValue"])]),_:1},8,["name"])):p("",!0),o.optionsStore.options.deprecated.tools.blocker.blockBots||o.optionsStore.options.deprecated.tools.blocker.blockReferer?(c(),d(l,{key:3,name:s.strings.trackBlockedBots},{content:n(()=>[r(a,{modelValue:o.optionsStore.options.deprecated.tools.blocker.track,"onUpdate:modelValue":t[5]||(t[5]=e=>o.optionsStore.options.deprecated.tools.blocker.track=e)},null,8,["modelValue"]),r(k,{type:"blue",innerHTML:s.strings.logLocation},null,8,["innerHTML"])]),_:1},8,["name"])):p("",!0)]),_:1},8,["header-text"])])}const F=V(x,[["render",C]]);export{F as default};
