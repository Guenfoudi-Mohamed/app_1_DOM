/*App_1*/
const btn_add = document.querySelector('body section .container .inp input.btn_add');
const inp_text = document.querySelector('body section .container .inp input.inp_text');
const list = document.querySelector('body section .container .content ul.list');
btn_add.addEventListener('click',function(){
    let conteur = 0;
    for(let i = 0;i<=inp_text.value.length;i++){
        if(inp_text.value[i] == ' '){
            conteur++;
        }
    }
    if(conteur == inp_text.value.length){
        conteur = 0;
        alert('TRY !!');
        inp_text.focus();
    }
    else{
        conteur = 0;
            //create element nodes
        const li = document.createElement('li');
        const i_icon = document.createElement('i');
        i_icon.setAttribute('class','fa-solid fa-xmark iconRemove');
        i_icon.setAttribute('title','Remove');
            // style icon
        i_icon.style.cssText = `position:absolute;right:15px;cursor:pointer;font-size:18px;`;
            //conver to upperCase()
        inp_text.value = inp_text.value[0].toUpperCase()+inp_text.value.slice(1,inp_text.value.length);
            //append nodes
        li.append(inp_text.value);
        li.append(i_icon);
        list.insertBefore(li,list.children[0]);
        inp_text.value = '';
        inp_text.focus();
        //add event for remove
        i_icon.addEventListener('click',function(){remove(this)});
        function remove(node){
            const li = node.parentElement;
            list.removeChild(li);
            node.removeEventListener('click',remove);
        };
    };
});
inp_text.addEventListener('keyup',function(){
    let lengthInpText = inp_text.value.length;
    if(lengthInpText >= 17){inp_text.value = '';inp_text.focus();alert('Please Max length 17 letters!!');}
    for(let i = 0;i<lengthInpText;i++){
        if(inp_text.value[i] == '' || inp_text.value[i] == ' '){continue;}
        else if(!(isNaN(inp_text.value[i]))){
            inp_text.value = '';
            alert(`dont use numbers !!`);
            inp_text.focus();
        }
    };
});
window.onload = function(){
    inp_text.focus();
};

