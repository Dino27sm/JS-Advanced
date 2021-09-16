function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/messenger';
    let textBoxElm = document.getElementById('messages');
    let refreshButtonElm = document.getElementById('refresh');
    let submitButtonElm = document.getElementById('submit');

    let nameElm = document.getElementsByName('author');
    let messageElm = document.getElementsByName('content');

    refreshButtonElm.addEventListener('click', refreshData);
    submitButtonElm.addEventListener('click', sendData);

    async function sendData(){
        try{
            let data = {
                author: nameElm[0].value,
                content: messageElm[0].value,
            }
            nameElm[0].value = '';
            messageElm[0].value = '';
            let response = await fetch(baseUrl, {
                method: 'post',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(data),
            });
            let checkData = await response.json();
            textBoxElm.value += `${checkData.author}: ${checkData.content}\n`;
        }catch(er){
            console.error(er);
        }
    }

    async function refreshData(){
        try{
            let response = await fetch(baseUrl);
            let data = await response.json();
            textBoxElm.value = '';
            for (const item of Object.values(data)) {
                textBoxElm.value += `${item.author}: ${item.content}\n`;
            }
        }catch(er){console.error(er);}
    }
}
attachEvents();
