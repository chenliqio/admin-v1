 class MUtil{
    request(){
        return new Promise((resolve,reject)=>{
            $.ajax({

                type : 'get' ,
                url  :  ''   ,
                dataType: 'json',
                data: null,
                success(res){
                // 数据请求成功
                if(0 === res.status){
                   typeof resolve === 'function' && resolve(res.data, res.msg);
                }
                // 没有登录状态，强制登陆
                else if (10 === res.status){
                     this.doLogin();
                }
                else{
                    typeof reject=== 'function' && reject(res.msg || res.data);
                }

                },
                error(err){
                    typeof resolve === 'function' && resolve(err.statusText);
                }
             });
        });       
    }
    // 跳转登陆
    dologin(){
        window.location.href = '/login?redirect=' + encodeURIComponent(window.location.pathname);
    }
    // 获取URL参数
    getUrlParam(name){
// ？param=123&param1=456
     let queryString = window.location.search.split('?')[1] || '/',
         reg         = new RegExp("(^|&)"+ name + "=([^&]*)(&|$)"),
         result      = queryString.match(reg);
        //  result:['param=123','','123','&'] 要的是第三个
            return result ? decodeURIComponent(result[2]) : null;
    }
    // 错误提示
    errorTips(errMsg){
        alert(errMsg || '好像哪里不对了～')
    }
 }
 export default MUtil;