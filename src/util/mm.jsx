
class MUtil{
    request(params){
        return new Promise((resolve,reject)=>{
            $.ajax({
                type    : params.type ||'get' ,
                url     : params.url || ''   ,
                dataType: params.dateType ||'json',
                data    : params.data || null,
                success : res=> {
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
                error: err=> {
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
    // 本地存储
    setStorage(name,data){
        let dataType = typeof data;
        // json类型
        if(dataType === 'object'){
            window.localStorage.setItem(name, JSON.stringify(data));
        }
        // 基本类型
        else if(['number','string','boolean'].indexOf(dataType)>=0){
            window.localStorage.setItem(name, data);
        }
        // 其他不支持类型
        else{
            alert('该类型不支持')
        }
    }
    // 取出本地存储数据
    getStorage(name){
        let data = window.localStorage.getItem(name);
        if(data){
            return JSON.parse(data);
        }
        else {
            return '';
        }       
    }
    // 删除本地存储
    removeStorage(name){
        window.localStorage.removeItem(name)
    }
    
 }
 export default MUtil;