function saveData(){

    let name=document.getElementById('name').value;
    let email=document.getElementById('email').value;
    let user_records=new Array()
    user_record=JSON.parse(localStorage.getItem('users'))?JSON.parse(localStorage.getItem('users')):[]
    user_record.push({
        'name':name,
        'email':email
    })
    localStorage.setItem('users',JSON.stringify(user_record))
    }