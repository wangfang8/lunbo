/**
 * Created by Administrator on 2017/5/13 0013.
 */
function id(id){
    return document.getElementById(id)
}

//innertext和textContent兼容
function getText(ele){
    if(typeof (ele.textContent =="string")){
        return ele.textContent
    }else{
        return ele.innerText
    }
}
function setText(ele,text){
    if(typeof (ele.textContent == "string")){
        ele.textContent = text;
    }else{
        ele.innerText = text;
    }
}




//下一个元素节点
function getNextElement(ele){
    if(ele.nextElementSibling){
        return ele.nextElementSibling
    }else{
        var node = ele.nextSibling;
        while(node.nodeType!=1){
            node = node.nextSibling;
        }
        return node;
    }
}

//上一个元素节点
function getPreviousElement(ele){
    if(ele.previousElementSibling){
        return ele.previousElementSibling;
    }else{
        var node = ele.previousSibling;
        while(node.nodeType!=1){
            node = node.previousSibling;
        }
        return node;
    }
}


function animate(obj,target){
    clearInterval(obj.timer) ;
    obj.timer = setInterval(function () {
        var leader = obj.offsetLeft;
        var step = 9;
        step = leader<target?step:-step;
        leader = leader+step;
        if(Math.abs(leader-target)>Math.abs(step)){
            obj.style.left = leader+"px";
        }else{
            clearInterval(obj.timer);
            obj.style.left = target+"px";
        }
    },10)
}