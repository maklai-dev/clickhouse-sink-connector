"use strict";(self.webpackChunkclickhouse_sink_connector=self.webpackChunkclickhouse_sink_connector||[]).push([[8306],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||s;return n?r.createElement(k,o(o({ref:t},p),{},{components:n})):r.createElement(k,o({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2705:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const s={},o="Setup",i={unversionedId:"doc/Performance",id:"doc/Performance",title:"Setup",description:"We use SysBench to perform load testing.",source:"@site/docs/doc/Performance.md",sourceDirName:"doc",slug:"/doc/Performance",permalink:"/clickhouse-sink-connector/docs/doc/Performance",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/doc/Performance.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Monitoring",permalink:"/clickhouse-sink-connector/docs/doc/Monitoring"},next:{title:"Unit tests",permalink:"/clickhouse-sink-connector/docs/doc/TESTING"}},l={},c=[{value:"SysBench Tests",id:"sysbench-tests",level:2},{value:"Insert tests(SysBench)",id:"insert-testssysbench",level:2},{value:"Update/Delete tests(SysBench)",id:"updatedelete-testssysbench",level:2},{value:"Performance Numbers",id:"performance-numbers",level:2},{value:"ClickHouse insertion rate",id:"clickhouse-insertion-rate",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...s}=e;return(0,a.kt)(d,(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"setup"},"Setup"),(0,a.kt)("p",null,"We use ",(0,a.kt)("inlineCode",{parentName:"p"},"SysBench")," to perform load testing.\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/akopytov/sysbench"},"https://github.com/akopytov/sysbench")),(0,a.kt)("p",null,"Before starting the connectors, create the topic with max partitions "),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"rpk topic create SERVER5432.sbtest.sbtest1  -p 6")),(0,a.kt)("p",null,"To Run SysBench tests, run the ",(0,a.kt)("inlineCode",{parentName:"p"},"debezium-connector-setup-sysbench.sh")," script in ",(0,a.kt)("inlineCode",{parentName:"p"},"deploy")," folder to\ncreate the MySQL debezium connector. The connector is setup to read from the ",(0,a.kt)("inlineCode",{parentName:"p"},"sbtest")," table required by SysBench"),(0,a.kt)("p",null,"For sink, the default ",(0,a.kt)("inlineCode",{parentName:"p"},"sink-connector-setup-schema-registry.sh")," script can be executed to create\nthe ClickHouse Sink Connector."),(0,a.kt)("h2",{id:"sysbench-tests"},"SysBench Tests"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"SysBench Test"),(0,a.kt)("th",{parentName:"tr",align:null},"Status"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"oltp_insert"),(0,a.kt)("td",{parentName:"tr",align:null},"Pass")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"oltp_read_write"),(0,a.kt)("td",{parentName:"tr",align:null},"Pass")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"oltp_update_index"),(0,a.kt)("td",{parentName:"tr",align:null},"Pass")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"oltp_update_non_index"),(0,a.kt)("td",{parentName:"tr",align:null},"Pass")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"oltp_delete"),(0,a.kt)("td",{parentName:"tr",align:null},"Pass")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"bulk_insert"),(0,a.kt)("td",{parentName:"tr",align:null},"Pass")))),(0,a.kt)("h2",{id:"insert-testssysbench"},"Insert tests(SysBench)"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"sysbench/run_sysbench_insert_load_test.sh")," script executes the oltp_insert lua script in Sysbench."),(0,a.kt)("h2",{id:"updatedelete-testssysbench"},"Update/Delete tests(SysBench)"),(0,a.kt)("h2",{id:"performance-numbers"},"Performance Numbers"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(575).Z,width:"580",height:"532"})," \\"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"select database, table, event_type, partition_id, count() c, round(avg(rows)) from system.part_log\nwhere event_date >= today() and event_type = 'NewPart'\ngroup by database, table, event_type, partition_id\norder by c desc"),"\\"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"\nselect sum(tmp.rows), tmp.event_time from (\nselect rows,event_time ,event_type  from system.part_log pl where database='test' and table='sbtest1' and event_type='NewPart' order by event_time desc) tmp group by tmp.event_time")),(0,a.kt)("p",null,"With the SysBench insert tests(6 Kafka partitions), the following are the numbers we observed on 8-core i7 64 GB RAM instance.\\\nClickHouse Rows Insertion Rate: 9k/second, 2.1 MB/second."),(0,a.kt)("h2",{id:"clickhouse-insertion-rate"},"ClickHouse insertion rate"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"select database, table, event_type, partition_id, count() c, round(avg(rows)) from system.part_log\nwhere event_date >= today() and event_type = 'NewPart'\ngroup by database, table, event_type, partition_id\norder by c desc")),(0,a.kt)("p",null,"Target:\n5 threads , 600k/second"))}u.isMDXComponent=!0},575:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/insert_performance_tests-8036c0ddf3e4a3da5b15d655fef848e4.png"}}]);