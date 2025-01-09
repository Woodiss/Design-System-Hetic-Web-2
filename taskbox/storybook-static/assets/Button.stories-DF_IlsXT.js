import{f as r}from"./index-B5ZI-g0m.js";import{j as c}from"./jsx-runtime-CkxqCPlQ.js";import"./index-DJO9vBfz.js";import{P as e}from"./index-C1dzxQ9A.js";import"./Text-BofKW39q.js";const o=({type:u,content:i,isDisabled:l,onClick:d,...p})=>c.jsx("button",{type:u,disabled:l,onClick:d,...p,children:i});o.propTypes={type:e.oneOf(["submit","button"]),isDisabled:e.bool,content:e.string.isRequired,onClick:e.func};o.defaultProps={content:"Button",type:"button",onClick:void 0,isDisabled:!1};o.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"Button",props:{content:{defaultValue:{value:"'Button'",computed:!1},description:"Button contents",type:{name:"string"},required:!1},type:{defaultValue:{value:"'button'",computed:!1},description:"How large should the button be?",type:{name:"enum",value:[{value:"'submit'",computed:!1},{value:"'button'",computed:!1}]},required:!1},onClick:{defaultValue:{value:"undefined",computed:!0},description:"Optional click handler",type:{name:"func"},required:!1},isDisabled:{defaultValue:{value:"false",computed:!1},description:"Button is disabled",type:{name:"bool"},required:!1}}};const B={title:"Button",component:o,parameters:{layout:"centered"},tags:["autodocs"],args:{onClick:r()}},t={args:{type:"submit",content:"Buttoneeeeeeee",isDisabled:!1,onClick:r()}};var n,s,a;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    type: 'submit',
    content: 'Buttoneeeeeeee',
    isDisabled: false,
    onClick: fn()
  }
}`,...(a=(s=t.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const v=["Regular"];export{t as Regular,v as __namedExportsOrder,B as default};