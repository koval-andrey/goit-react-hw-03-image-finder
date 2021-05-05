(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{13:function(e,t,a){e.exports={imageGallery:"ImgGallery_imageGallery__3ok8R",modalImg:"ImgGallery_modalImg__1CrkH"}},14:function(e,t,a){e.exports={overlay:"Modal_overlay__3nPO1",modal:"Modal_modal__-nc6p"}},15:function(e,t,a){e.exports={ImgGalleryItems:"ImgGalleryItems_ImgGalleryItems__9pKIo",img:"ImgGalleryItems_img__1azTE"}},17:function(e,t,a){e.exports={Button:"Button_Button__3NAw8"}},19:function(e,t,a){e.exports={errorWrapper:"SearchError_errorWrapper__IvUM3"}},25:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(9),c=a.n(o),s=(a(25),a(3)),i=a(4),l=a(6),u=a(5),h=a(10),m=a(20),d=a(7),p=a.n(d),f=a(1),j=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={query:""},e.handleQueryChange=function(t){e.setState({query:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){var a=e.state.query;t.preventDefault(),""!==a.trim()?(e.props.onSubmit(a),e.setState({query:""})):h.b.error("Please, enter search query.")},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.query;return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("header",{className:p.a.searchBar,children:Object(f.jsxs)("form",{className:p.a.form,onSubmit:this.handleSubmit,children:[Object(f.jsx)("button",{type:"submit",className:p.a.formButton,children:Object(f.jsxs)("span",{className:p.a.formButtonLabel,children:[" ","Search ",Object(f.jsx)(m.a,{})]})}),Object(f.jsx)("input",{className:p.a.input,type:"text",value:e,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.handleQueryChange})]})})})}}]),a}(r.Component),g=a(8),b=a.n(g),v=a(12),y=a(16),O=a(13),x=a.n(O),_=a(17),w=a.n(_);var k=function(e){var t=e.handleLoadMore;return Object(f.jsx)("button",{type:"button",className:w.a.Button,onClick:function(){return t()},children:"Load more"})},I=a(14),S=a.n(I),B=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(f.jsx)("div",{className:S.a.overlay,onClick:this.handleBackdropClick,children:Object(f.jsx)("div",{className:S.a.modal,children:this.props.children})})}}]),a}(r.Component),C=a(15),M=a.n(C);var N=function(e){var t=e.src,a=e.alt,r=e.url,n=e.openModal;return Object(f.jsx)("li",{className:M.a.ImgGalleryItems,children:Object(f.jsx)("img",{src:t,alt:a,className:M.a.img,onClick:function(){return n({url:r,alt:a})}})})},L=a(18),F=a.n(L),D=(a(48),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(f.jsx)(F.a,{type:"Hearts",color:"#00BFFF",height:80,width:80,timeout:3e3})}}]),a}(r.Component)),G=a(19),P=a.n(G);var E=function(e){var t=e.message;return Object(f.jsx)("div",{className:P.a.errorWrapper,role:"alert",children:Object(f.jsxs)("p",{children:["Sorry, something went wrong. Error: ",t]})})};var Q={fetchImg:function(e,t){var a="".concat("https://pixabay.com/api","/?image_type=photo&orientation=horizontal&q=").concat(e,"&page=").concat(t,"&per_page=12&key=").concat("20695726-7968ecbd338f0bb5977a378a4");return fetch(a).then((function(e){return e.ok?e.json():Promise.reject(new Error("Oops! Nothing found"))}))}},q=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={images:[],page:1,error:null,showModal:!1,modalImageProps:{url:"",alt:""},status:"idle"},e.fetchImages=function(t){var a=e.state.page;Q.fetchImg(t,a).then((function(t){var a=t.hits;if(0===a.length)return Promise.reject(new Error("Oops! Nothing found"));e.setState((function(e){return{images:[].concat(Object(y.a)(e.images),Object(y.a)(a)),status:"resolved"}}))})).catch((function(t){return e.setState({error:t,status:"rejected"})}))},e.incrementPage=function(){e.setState((function(e){return{page:e.page+1}}))},e.reset=function(){e.setState({page:1,images:[]})},e.scrollDown=function(){setTimeout((function(){window.scrollTo({top:document.body.scrollHeight,left:0,behavior:"smooth"})}),1e3)},e.handleLoadBtnClick=Object(v.a)(b.a.mark((function t(){var a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.props.searchQuery,t.next=3,e.incrementPage();case 3:e.fetchImages(a),e.scrollDown();case 5:case"end":return t.stop()}}),t)}))),e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.handleImgClick=function(t){e.setState({modalImageProps:t}),e.toggleModal()},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(){var e=Object(v.a)(b.a.mark((function e(t){var a,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.searchQuery,r=this.props.searchQuery,a===r){e.next=7;break}return e.next=5,this.reset();case 5:this.setState({status:"pending"}),this.fetchImages(r);case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.images,r=t.status,n=t.error,o=t.showModal,c=this.state.modalImageProps,s=c.url,i=c.alt;return"idle"===r?Object(f.jsx)("div",{}):"pending"===r?Object(f.jsx)(D,{}):"rejected"===r?Object(f.jsx)(E,{message:n.message}):"resolved"===r?Object(f.jsxs)(f.Fragment,{children:[o&&Object(f.jsx)(B,{onClose:this.toggleModal,children:Object(f.jsx)("img",{src:s,alt:i,className:x.a.modalImg})}),Object(f.jsx)("ul",{className:x.a.imageGallery,children:a.map((function(t){var a=t.id,r=t.webformatURL,n=t.tags,o=t.largeImageURL;return Object(f.jsx)(N,{src:r,url:o,alt:n,openModal:e.handleImgClick},a)}))}),Object(f.jsx)(k,{handleLoadMore:this.handleLoadBtnClick})]}):void 0}}]),a}(r.Component),T=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={searchQuery:""},e.handleSearchFormSubmit=function(t){e.setState({searchQuery:t})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.searchQuery;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(j,{onSubmit:this.handleSearchFormSubmit}),Object(f.jsx)(q,{searchQuery:e}),Object(f.jsx)(h.a,{})]})}}]),a}(r.Component),A=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,50)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,o=t.getLCP,c=t.getTTFB;a(e),r(e),n(e),o(e),c(e)}))};c.a.render(Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)(T,{})}),document.getElementById("root")),A()},7:function(e,t,a){e.exports={searchBar:"SearchBar_searchBar__DcfOk",form:"SearchBar_form__E5OjG",formButton:"SearchBar_formButton__1aDBD",formButtonLabel:"SearchBar_formButtonLabel__3pFmz",input:"SearchBar_input__3dVMa"}}},[[49,1,2]]]);
//# sourceMappingURL=main.eb8fc717.chunk.js.map