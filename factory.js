(function(global, factory, undefined){
    if( typeof module === "object" && typeof module.exports === "object" ){
        // 不在浏览器输入接口
        module.exports = global.document ?
            factory(global, true) :
            function(w){
                if(!w.document){
                    throw new Error("lazyLoad requires a window with a document");
                }
                return factory(w);
            };
    }else{
        factory(global);
    }
})( typeof window !== "undefined" ? window : this, function(window){
    //基础函数
    console.log(window);
});