"use strict";(self.webpackChunkclickhouse_sink_connector=self.webpackChunkclickhouse_sink_connector||[]).push([[6102],{3905:(e,r,i)=>{i.d(r,{Zo:()=>s,kt:()=>p});var t=i(7294);function o(e,r,i){return r in e?Object.defineProperty(e,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[r]=i,e}function n(e,r){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),i.push.apply(i,t)}return i}function a(e){for(var r=1;r<arguments.length;r++){var i=null!=arguments[r]?arguments[r]:{};r%2?n(Object(i),!0).forEach((function(r){o(e,r,i[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(i,r))}))}return e}function l(e,r){if(null==e)return{};var i,t,o=function(e,r){if(null==e)return{};var i,t,o={},n=Object.keys(e);for(t=0;t<n.length;t++)i=n[t],r.indexOf(i)>=0||(o[i]=e[i]);return o}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)i=n[t],r.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var c=t.createContext({}),u=function(e){var r=t.useContext(c),i=r;return e&&(i="function"==typeof e?e(r):a(a({},r),e)),i},s=function(e){var r=u(e.components);return t.createElement(c.Provider,{value:r},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var i=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(i),d=o,p=m["".concat(c,".").concat(d)]||m[d]||k[d]||n;return i?t.createElement(p,a(a({ref:r},s),{},{components:i})):t.createElement(p,a({ref:r},s))}));function p(e,r){var i=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var n=i.length,a=new Array(n);a[0]=d;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[m]="string"==typeof e?e:o,a[1]=l;for(var u=2;u<n;u++)a[u]=i[u];return t.createElement.apply(null,a)}return t.createElement.apply(null,i)}d.displayName="MDXCreateElement"},4375:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>k,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var t=i(7462),o=(i(7294),i(3905));const n={},a=void 0,l={unversionedId:"doc/k8s_minikube_load",id:"doc/k8s_minikube_load",title:"k8s_minikube_load",description:"minikube start --addons=registry && minikube addons list",source:"@site/docs/doc/k8s_minikube_load.md",sourceDirName:"doc",slug:"/doc/k8s_minikube_load",permalink:"/clickhouse-sink-connector/docs/doc/k8s_minikube_load",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/doc/k8s_minikube_load.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"debezium",permalink:"/clickhouse-sink-connector/docs/doc/k8s_build_connect_images"},next:{title:"k8s_pipeline_setup",permalink:"/clickhouse-sink-connector/docs/doc/k8s_pipeline_setup"}},c={},u=[{value:"cert-manager",id:"cert-manager",level:3},{value:"redpanda",id:"redpanda",level:3},{value:"mysql-operator",id:"mysql-operator",level:3},{value:"mysql",id:"mysql",level:3},{value:"clickhouse-operator",id:"clickhouse-operator",level:3},{value:"clickhouse",id:"clickhouse",level:3},{value:"schema-registry",id:"schema-registry",level:3},{value:"strimzi-operator",id:"strimzi-operator",level:3},{value:"load images from local registry into minikube registry",id:"load-images-from-local-registry-into-minikube-registry",level:3},{value:"clickhouse sink connector",id:"clickhouse-sink-connector",level:3},{value:"debezium source connector",id:"debezium-source-connector",level:3}],s={toc:u},m="wrapper";function k(e){let{components:r,...i}=e;return(0,o.kt)(m,(0,t.Z)({},s,i,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"minikube start --addons=registry && minikube addons list"),(0,o.kt)("h3",{id:"cert-manager"},"cert-manager"),(0,o.kt)("p",null,"docker image pull quay.io/jetstack/cert-manager-controller:v1.4.0\ndocker image pull quay.io/jetstack/cert-manager-cainjector:v1.4.0\ndocker image pull quay.io/jetstack/cert-manager-webhook:v1.4.0"),(0,o.kt)("p",null,"minikube image load quay.io/jetstack/cert-manager-controller:v1.4.0\nminikube image load quay.io/jetstack/cert-manager-cainjector:v1.4.0\nminikube image load quay.io/jetstack/cert-manager-webhook:v1.4.0"),(0,o.kt)("h3",{id:"redpanda"},"redpanda"),(0,o.kt)("p",null,"docker image pull   vectorized/redpanda-operator:v21.11.15\ndocker image pull   vectorized/redpanda:v21.11.15\ndocker image pull   vectorized/configurator:v21.11.15\ndocker image pull   gcr.io/kubebuilder/kube-rbac-proxy:v0.8.0"),(0,o.kt)("p",null,"minikube image load vectorized/redpanda-operator:v21.11.15\nminikube image load vectorized/redpanda:v21.11.15\nminikube image load vectorized/configurator:v21.11.15\nminikube image load gcr.io/kubebuilder/kube-rbac-proxy:v0.8.0"),(0,o.kt)("h3",{id:"mysql-operator"},"mysql-operator"),(0,o.kt)("p",null,"docker   image pull mysql/mysql-operator:8.0.29-2.0.4\nminikube image load mysql/mysql-operator:8.0.29-2.0.4"),(0,o.kt)("h3",{id:"mysql"},"mysql"),(0,o.kt)("p",null,"docker   image pull mysql/mysql-server:8.0.29\ndocker   image pull mysql/mysql-router:8.0.29"),(0,o.kt)("p",null,"minikube image load mysql/mysql-server:8.0.29\nminikube image load mysql/mysql-router:8.0.29 "),(0,o.kt)("h3",{id:"clickhouse-operator"},"clickhouse-operator"),(0,o.kt)("p",null,"docker   image pull altinity/clickhouse-operator:0.18.4\ndocker   image pull altinity/metrics-exporter:0.18.4"),(0,o.kt)("p",null,"minikube image load altinity/clickhouse-operator:0.18.4\nminikube image load altinity/metrics-exporter:0.18.4"),(0,o.kt)("h3",{id:"clickhouse"},"clickhouse"),(0,o.kt)("p",null,"docker   image pull clickhouse/clickhouse-server:22.3.5.5\nminikube image load clickhouse/clickhouse-server:22.3.5.5"),(0,o.kt)("h3",{id:"schema-registry"},"schema-registry"),(0,o.kt)("p",null,"docker   image pull apicurio/apicurio-registry-mem:2.0.0.Final\nminikube image load apicurio/apicurio-registry-mem:2.0.0.Final "),(0,o.kt)("h3",{id:"strimzi-operator"},"strimzi-operator"),(0,o.kt)("p",null,"docker   image pull quay.io/strimzi/operator:0.28.0\ndocker   image pull quay.io/strimzi/kaniko-executor:0.28.0"),(0,o.kt)("p",null,"minikube image load quay.io/strimzi/operator:0.28.0\nminikube image load quay.io/strimzi/kaniko-executor:0.28.0 "),(0,o.kt)("h3",{id:"load-images-from-local-registry-into-minikube-registry"},"load images from local registry into minikube registry"),(0,o.kt)("p",null,"kubectl -n kube-system port-forward service/registry 5000:80 > /dev/null 2>&1 &\nKUBECTL_PORT_FORWARD_PID=$!\nsleep 10"),(0,o.kt)("h3",{id:"clickhouse-sink-connector"},"clickhouse sink connector"),(0,o.kt)("p",null,"docker image tag altinity/clickhouse-kafka-sink-connector:latest localhost:5000/altinity/clickhouse-kafka-sink-connector:latest\ndocker image push localhost:5000/altinity/clickhouse-kafka-sink-connector:latest"),(0,o.kt)("h3",{id:"debezium-source-connector"},"debezium source connector"),(0,o.kt)("p",null,"docker image tag altinity/debezium-mysql-source-connector:latest localhost:5000/altinity/debezium-mysql-source-connector:latest\ndocker image push localhost:5000/altinity/debezium-mysql-source-connector:latest"),(0,o.kt)("p",null,"kill $KUBECTL_PORT_FORWARD_PID"))}k.isMDXComponent=!0}}]);